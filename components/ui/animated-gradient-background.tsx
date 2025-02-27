'use client';

import { motion } from 'framer-motion';

function AnimatedGradientBackground() {
  return (
    <div className="absolute z-0 h-[100dvh] w-[100dvw] overflow-hidden inset-0">
      <motion.div
        className="size-full bg-gradient-to-br from-indigo-500/[0.3] via-transparent to-rose-500/[0.3] blur-3xl"
        animate={{
          rotate: [0, 360],
          opacity: [0.7, 0.9, 0.7],
          scale: [1, 2, 1],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: 'linear',
          opacity: {
            duration: 20,
            repeat: Infinity,
            ease: 'easeInOut',
          },
        }}
      />
    </div>
  );
}

export default AnimatedGradientBackground;
