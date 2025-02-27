'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { ArrowDownIcon, SendIcon } from 'lucide-react';

// Remove the unused ElegantShape component or comment it out if you plan to use it later
/* 
function ElegantShape({
  className,
  delay = 0,
  width = 400,
  height = 100,
  rotate = 0,
  gradient = 'from-white/[0.08]',
  yBounce = 20,
}: {
  className?: string;
  delay?: number;
  width?: number;
  height?: number;
  rotate?: number;
  gradient?: string;
  yBounce?: number;
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: -150,
        rotate: rotate - 15,
        filter: 'blur(10px)',
      }}
      animate={{
        opacity: 1,
        y: 0,
        rotate: rotate,
        filter: 'blur(0px)',
      }}
      transition={{
        duration: 2.4,
        delay,
        ease: [0.23, 0.86, 0.39, 0.96],
        opacity: { duration: 1.2 },
      }}
      className={cn('absolute', className)}
    >
      <motion.div
        animate={{
          y: [0, yBounce, 0],
        }}
        transition={{
          duration: 12,
          repeat: Number.POSITIVE_INFINITY,
          ease: 'easeInOut',
        }}
        style={{
          width,
          height,
        }}
        className="relative"
      >
        <div
          className={cn(
            'absolute inset-0 rounded-full',
            'bg-gradient-to-r to-transparent',
            gradient,
            'backdrop-blur-[2px] border-2 border-white/[0.15]',
            'shadow-[0_8px_32px_0_rgba(255,255,255,0.1)]',
            'after:absolute after:inset-0 after:rounded-full',
            'after:bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.2),transparent_70%)]'
          )}
        />
      </motion.div>
    </motion.div>
  );
}
*/

function HeroGeometric() {
  const fadeUpVariants = {
    hidden: { opacity: 0, y: 30, filter: 'blur(10px)' },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        duration: 1,
        delay: 0.5 + i * 0.2,
        ease: [0.25, 0.4, 0.25, 1],
      },
    }),
  };

  const heyTitle = 'hey 👋🏼';
  const greetingTitle = "I'm Anton";

  const heyTitleWords = heyTitle.split(' ');
  const greetingTitleWords = greetingTitle.split(' ');

  return (
    <section className="relative min-h-[100dvh] w-full flex items-center justify-center">
      <div className="relative z-10 container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            variants={fadeUpVariants}
            custom={0}
            initial="hidden"
            animate="visible"
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] mb-8 md:mb-12 hover:bg-white/[0.05] hover:border-white/[0.12] cursor-pointer"
          >
            <span className="relative flex size-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-indigo-400 opacity-75" />
              <span className="relative inline-flex size-2 rounded-full bg-indigo-500" />
            </span>
            <span className="text-sm text-white/60 tracking-wide">
              New Projects
            </span>
          </motion.div>

          <motion.div
            custom={1}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
          >
            <h1 className="font-poppins text-4xl sm:text-6xl md:text-8xl font-bold mb-6 md:mb-8 tracking-tight">
              {heyTitleWords.map((word, index) => (
                <motion.span
                  key={word}
                  variants={fadeUpVariants}
                  custom={1 + index}
                  className={cn('inline-block', index === 0 && 'mr-2 md:mr-4')}
                >
                  {word}
                </motion.span>
              ))}
            </h1>
            <h1 className="font-poppins text-4xl sm:text-6xl md:text-8xl font-bold mb-6 md:mb-8 tracking-tight">
              {greetingTitleWords.map((word, index) => (
                <motion.span
                  key={word}
                  variants={fadeUpVariants}
                  custom={heyTitleWords.length + index}
                  className={cn(
                    'inline-block italic',
                    index !== 0 && 'ml-2 md:ml-4'
                  )}
                >
                  {word}
                </motion.span>
              ))}
            </h1>
          </motion.div>

          <motion.div
            custom={heyTitleWords.length + greetingTitleWords.length}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
          >
            <p className="text-base sm:text-lg md:text-xl text-white/40 mb-8 leading-relaxed font-light tracking-wide max-w-xl mx-auto px-4">
              Crafting exceptional digital experiences through innovative design
              and cutting-edge technology.
            </p>
          </motion.div>

          <div className="flex items-center gap-2 mx-auto justify-center">
            <motion.button
              variants={fadeUpVariants}
              custom={heyTitleWords.length + greetingTitleWords.length + 1}
              initial="hidden"
              animate="visible"
              className="bg-white/10 px-6 py-3 rounded-lg border border-white/[0.1] transition-colors flex items-center gap-2 hover:border-white/20"
            >
              <SendIcon className="size-4" />
              Get in touch
            </motion.button>
            <motion.button
              variants={fadeUpVariants}
              custom={heyTitleWords.length + greetingTitleWords.length + 2}
              initial="hidden"
              animate="visible"
              className="px-3 py-3 rounded-lg transition-colors flex items-center gap-2 hover:bg-white/[0.05]"
            >
              <ArrowDownIcon className="size-4" />
              Learn more
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
}

export { HeroGeometric };
