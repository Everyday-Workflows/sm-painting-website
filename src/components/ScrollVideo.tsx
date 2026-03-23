'use client';

import React, { useRef, useEffect, useState, useCallback } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { ScrollReveal } from '@/components/animations/ScrollReveal';

interface ScrollVideoProps {
  frameCount: number;
  framePath: (index: number) => string;
}

const INITIAL_PRELOAD_COUNT = 16;
const PRELOAD_AHEAD_COUNT = 12;
const PRELOAD_BEHIND_COUNT = 6;

const ScrollVideo: React.FC<ScrollVideoProps> = ({ frameCount, framePath }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | null>(null);
  const currentFrameRef = useRef(0);
  const preloadCacheRef = useRef<Set<string>>(new Set());
  const { t } = useLanguage();
  const [currentFrame, setCurrentFrame] = useState(0);
  const [isMobileViewport, setIsMobileViewport] = useState(false);
  const [isSafariBrowser, setIsSafariBrowser] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const beforeOpacity = useTransform(scrollYProgress, [0, 0.4, 0.6, 1], [1, 1, 0, 0]);
  const afterOpacity = useTransform(scrollYProgress, [0, 0.4, 0.6, 1], [0, 0, 1, 1]);
  const frameStride = isSafariBrowser ? 2 : 1;
  const playbackFrameCount = Math.ceil(frameCount / frameStride);
  const initialPreloadCount = isSafariBrowser ? 8 : INITIAL_PRELOAD_COUNT;
  const preloadAheadCount = isSafariBrowser ? 6 : PRELOAD_AHEAD_COUNT;
  const preloadBehindCount = isSafariBrowser ? 3 : PRELOAD_BEHIND_COUNT;

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    const mediaQuery = window.matchMedia('(max-width: 767px)');

    const updateDeviceProfile = () => {
      const userAgent = window.navigator.userAgent;
      const safariMatch = /Safari/i.test(userAgent) && !/Chrome|CriOS|Edg|OPR|Android/i.test(userAgent);

      setIsMobileViewport(mediaQuery.matches);
      setIsSafariBrowser(safariMatch);
    };

    updateDeviceProfile();

    if (typeof mediaQuery.addEventListener === 'function') {
      mediaQuery.addEventListener('change', updateDeviceProfile);

      return () => {
        mediaQuery.removeEventListener('change', updateDeviceProfile);
      };
    }

    mediaQuery.addListener(updateDeviceProfile);

    return () => {
      mediaQuery.removeListener(updateDeviceProfile);
    };
  }, []);

  const getFrameSource = useCallback((sequenceIndex: number) => {
    const boundedSequenceIndex = Math.min(playbackFrameCount - 1, Math.max(0, sequenceIndex));
    const actualFrameIndex = Math.min(frameCount - 1, boundedSequenceIndex * frameStride);

    return framePath(actualFrameIndex);
  }, [frameCount, framePath, frameStride, playbackFrameCount]);

  const preloadFrame = useCallback((sequenceIndex: number) => {
    const source = getFrameSource(sequenceIndex);

    if (preloadCacheRef.current.has(source)) {
      return;
    }

    preloadCacheRef.current.add(source);

    const image = new window.Image();
    image.decoding = 'async';
    image.src = source;
  }, [getFrameSource]);

  useEffect(() => {
    for (let index = 0; index < Math.min(playbackFrameCount, initialPreloadCount); index += 1) {
      preloadFrame(index);
    }
  }, [initialPreloadCount, playbackFrameCount, preloadFrame]);

  useEffect(() => {
    preloadFrame(currentFrame);

    for (let offset = 1; offset <= preloadAheadCount; offset += 1) {
      preloadFrame(currentFrame + offset);
    }

    for (let offset = 1; offset <= preloadBehindCount; offset += 1) {
      preloadFrame(currentFrame - offset);
    }
  }, [currentFrame, preloadAheadCount, preloadBehindCount, preloadFrame]);

  useEffect(() => {
    const unsubscribe = scrollYProgress.on('change', (latest) => {
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current);
      }

      rafRef.current = requestAnimationFrame(() => {
        const boundedProgress = Math.min(1, Math.max(0, latest));
        const nextFrame = Math.min(playbackFrameCount - 1, Math.round(boundedProgress * (playbackFrameCount - 1)));

        if (currentFrameRef.current !== nextFrame) {
          currentFrameRef.current = nextFrame;
          setCurrentFrame(nextFrame);
        }

        rafRef.current = null;
      });
    });

    return () => {
      unsubscribe();

      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [scrollYProgress, playbackFrameCount]);

  return (
    <section ref={containerRef} className={`relative ${isMobileViewport ? 'h-[180vh]' : 'h-[400vh]'} transition-colors duration-300`}>
      <div className="sticky top-0 h-[100svh] md:h-screen w-full overflow-hidden flex items-center justify-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full h-full flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-20 py-6 sm:py-10">
          <div className="relative w-full lg:w-[55%] aspect-square max-w-[820px] mx-auto flex items-center justify-center overflow-visible">
            <ScrollReveal direction="right" delay={0.1}>
              <motion.div
                style={{ opacity: beforeOpacity }}
                className="absolute left-8 top-8 z-20 rounded-full bg-brand-tertiary/85 px-4 py-1.5 text-xs font-sans font-bold uppercase tracking-widest text-brand-cloud backdrop-blur-sm"
              >
                {t('video.before')}
              </motion.div>
              <motion.div
                style={{ opacity: afterOpacity }}
                className="absolute left-8 top-8 z-20 rounded-full bg-brand-highlight/90 px-4 py-1.5 text-xs font-sans font-bold uppercase tracking-widest text-white backdrop-blur-sm"
              >
                {t('video.after')}
              </motion.div>

              {/* eslint-disable-next-line @next/next/no-img-element -- frame-sequence playback swaps pre-rendered images directly for scroll performance */}
              <img
                src={getFrameSource(currentFrame)}
                alt={t('video.alt')}
                className="relative z-10 w-full h-full object-contain pointer-events-none select-none"
                width={1080}
                height={1080}
                draggable={false}
                fetchPriority="high"
              />
            </ScrollReveal>
          </div>

          <div className="w-full lg:w-[45%] text-center lg:text-left z-20">
            <ScrollReveal direction="left">
              <h2 className="text-4xl md:text-6xl font-display text-brand-secondary dark:text-brand-accent-1 mb-8 leading-[1.1]">
                {t('video.title')}
              </h2>
            </ScrollReveal>
            <ScrollReveal direction="left" delay={0.2}>
              <p className="max-w-xl text-xl font-subtitle leading-relaxed text-brand-tertiary/76 dark:text-brand-cloud/72 md:text-2xl">
                {t('video.subtitle')}
              </p>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScrollVideo;
