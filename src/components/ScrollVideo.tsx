'use client';

import React, { useRef, useEffect, useState } from 'react';
import { useScroll, useTransform } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';

interface ScrollVideoProps {
  src: string;
}

const ScrollVideo: React.FC<ScrollVideoProps> = ({ src }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const { t } = useLanguage();
  const [duration, setDuration] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleLoadedMetadata = () => {
      setDuration(video.duration);
    };

    video.addEventListener('loadedmetadata', handleLoadedMetadata);
    
    // Fallback if metadata is already loaded
    if (video.readyState >= 1) {
      setDuration(video.duration);
    }

    return () => {
      video.removeEventListener('loadedmetadata', handleLoadedMetadata);
    };
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || duration === 0) return;

    const unsubscribe = scrollYProgress.on("change", (latest) => {
      // Use requestAnimationFrame to ensure smooth updates
      requestAnimationFrame(() => {
        if (video) {
          // Map scroll progress (0-1) to video duration
          video.currentTime = latest * duration;
        }
      });
    });

    return () => unsubscribe();
  }, [scrollYProgress, duration]);

  return (
    <section ref={containerRef} className="relative h-[300vh] bg-black">
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
        <video
          ref={videoRef}
          src={src}
          className="w-full h-full object-cover opacity-80"
          muted
          playsInline
          preload="auto"
        />
        
        {/* Overlay Text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
          <div className="bg-black/50 p-8 rounded-2xl backdrop-blur-sm text-center max-w-3xl mx-4">
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
              {t('video.title') || 'See the Transformation'}
            </h2>
            <p className="text-xl text-gray-200">
              {t('video.subtitle') || 'Scroll to reveal the before and after of our premium painting services.'}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScrollVideo;
