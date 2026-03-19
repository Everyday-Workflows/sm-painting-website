'use client';

import React from 'react';
import { motion } from 'framer-motion';

const BackgroundBlobs: React.FC = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10 select-none">
      {/* Top Right Blob */}
      <motion.div
        animate={{
          x: [0, 100, -50, 0],
          y: [0, -50, 100, 0],
          scale: [1, 1.2, 0.9, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute -top-[10%] -right-[10%] w-[40rem] h-[40rem] sm:w-[70rem] sm:h-[70rem] bg-brand-primary/30 dark:bg-brand-primary/20 rounded-full blur-[100px] sm:blur-[150px]"
      />

      {/* Bottom Left Blob */}
      <motion.div
        animate={{
          x: [0, -100, 50, 0],
          y: [0, 100, -50, 0],
          scale: [1, 0.9, 1.1, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute -bottom-[10%] -left-[10%] w-[35rem] h-[35rem] sm:w-[60rem] sm:h-[60rem] bg-brand-secondary/30 dark:bg-brand-secondary/20 rounded-full blur-[100px] sm:blur-[150px]"
      />

      {/* Center Floating Blob */}
      <motion.div
        animate={{
          x: [-50, 50, -50],
          y: [50, -50, 50],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[30rem] h-[30rem] sm:w-[50rem] sm:h-[50rem] bg-brand-accent-1/25 dark:bg-brand-accent-1/15 rounded-full blur-[120px] sm:blur-[180px]"
      />

      {/* Extra Accent Blob */}
      <motion.div
        animate={{
          x: [100, -100, 100],
          y: [-100, 100, -100],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-1/4 left-1/4 w-[20rem] h-[20rem] bg-brand-tertiary/20 dark:bg-brand-tertiary/10 rounded-full blur-[80px] sm:blur-[120px]"
      />
    </div>
  );
};

export default BackgroundBlobs;
