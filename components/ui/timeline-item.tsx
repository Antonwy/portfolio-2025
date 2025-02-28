'use client';

import { motion } from 'motion/react';
import React from 'react';

interface TimelineItemProps {
  title: React.ReactNode;
  description: React.ReactNode;
  date: string;
}

function TimelineItem({ title, description, date }: TimelineItemProps) {
  const fadeUpVariants = {
    hidden: { opacity: 0, y: 30, filter: 'blur(10px)' },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        duration: 1,
        delay: 0.5,
        ease: [0.25, 0.4, 0.25, 1],
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      variants={fadeUpVariants}
      viewport={{
        once: true,
      }}
      className="rounded-lg shadow-md overflow-hidden border border-white/5 bg-white/5 hover:border-white/10 cursor-pointer p-6"
    >
      <p className="text-white/60 text-xs">{date}</p>
      <h3 className="text-xl font-bold my-2">{title}</h3>
      <p className="text-white/60">{description}</p>
    </motion.div>
  );
}

export default TimelineItem;
