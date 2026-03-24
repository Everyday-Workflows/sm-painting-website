'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const revealEase: [number, number, number, number] = [0.16, 1, 0.3, 1];

interface ScrollRevealProps {
  children: React.ReactNode;
  width?: 'fit-content' | '100%';
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  duration?: number;
  distance?: number;
  className?: string;
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  width = '100%',
  delay = 0,
  direction = 'up',
  duration = 0.8,
  distance = 50,
  className = '',
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [ready, setReady] = useState(false);

  /* After hydration, hide the element so whileInView can reveal it. */
  useEffect(() => {
    const id = requestAnimationFrame(() => setReady(true));
    return () => cancelAnimationFrame(id);
  }, []);

  const variants = {
    hidden: {
      opacity: 0,
      y: direction === 'up' ? distance : direction === 'down' ? -distance : 0,
      x: direction === 'left' ? distance : direction === 'right' ? -distance : 0,
      scale: 0.98,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      scale: 1,
    },
  };

  /*
   * Before JS hydrates: no initial/animate props → framer-motion renders
   * children with no inline opacity:0, so content is visible in SSR HTML.
   *
   * After mount (ready=true): initial="hidden" + whileInView="visible"
   * kicks in, giving us the scroll-reveal animation.
   */
  return (
    <div ref={ref} style={{ position: 'relative', width, overflow: 'visible' }} className={className}>
      <motion.div
        variants={variants}
        {...(ready
          ? { initial: "hidden", animate: "hidden", whileInView: "visible" }
          : {}
        )}
        viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
        transition={{
          duration,
          delay,
          ease: revealEase,
        }}
        style={{ height: 'inherit' }}
      >
        {children}
      </motion.div>
    </div>
  );
};

interface StaggerContainerProps {
  children: React.ReactNode;
  delay?: number;
  staggerDelay?: number;
  className?: string;
}

export const StaggerContainer: React.FC<StaggerContainerProps> = ({
  children,
  delay = 0,
  staggerDelay = 0.1,
  className = '',
}) => {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const id = requestAnimationFrame(() => setReady(true));
    return () => cancelAnimationFrame(id);
  }, []);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: delay,
      },
    },
  };

  return (
    <motion.div
      variants={container}
      {...(ready
        ? { initial: "hidden", animate: "hidden", whileInView: "show" }
        : {}
      )}
      viewport={{ once: true, margin: "-100px" }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const StaggerItem: React.FC<{ children: React.ReactNode; direction?: 'up' | 'down' | 'left' | 'right'; distance?: number; className?: string }> = ({ 
  children, 
  direction = 'up',
  distance = 30,
  className = ''
}) => {
  const item = {
    hidden: { 
      opacity: 0, 
      y: direction === 'up' ? distance : direction === 'down' ? -distance : 0,
      x: direction === 'left' ? distance : direction === 'right' ? -distance : 0,
      scale: 0.98
    },
    show: { 
      opacity: 1, 
      y: 0, 
      x: 0, 
      scale: 1,
      transition: {
        duration: 0.8,
        ease: revealEase
      }
    },
  };

  return <motion.div variants={item} className={className}>{children}</motion.div>;
};
