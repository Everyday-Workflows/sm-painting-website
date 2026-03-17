'use client';

import React, { useRef, useEffect, useState } from 'react';
import { useScroll } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';

interface ScrollVideoProps {
  src: string;
}

const ScrollVideo: React.FC<ScrollVideoProps> = ({ src }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const { t } = useLanguage();
  const [duration, setDuration] = useState(0);

  // Increase the scroll height to make the 10-second video feel smoother
  // 400vh gives the user more scroll distance to cover the 10 seconds
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
    <section ref={containerRef} className="relative h-[400vh] bg-white dark:bg-black transition-colors duration-300">
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full h-full flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16">
          
          {/* Video Container with Mask */}
          <div className="relative w-full lg:w-1/2 aspect-video max-w-2xl mx-auto">
            {/* CSS Mask to blend the edges into the background */}
            <div 
              className="absolute inset-0 z-10 pointer-events-none"
              style={{
                background: 'radial-gradient(circle, transparent 50%, var(--background) 95%)'
              }}
            />
            <video
              ref={videoRef}
              src={src}
              className="w-full h-full object-cover rounded-2xl shadow-2xl"
              muted
              playsInline
              preload="auto"
            />
          </div>
          
          {/* Text Content on the Right */}
          <div className="w-full lg:w-1/2 text-center lg:text-left z-20">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-6">
              {t('video.title') || 'See the Transformation'}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
              {t('video.subtitle') || 'Scroll to reveal the before and after of our premium painting services.'}
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ScrollVideo;
