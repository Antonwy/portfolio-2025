import React from 'react';

interface TimelineItemProps {
  title: React.ReactNode;
  description: React.ReactNode;
  date: string;
}

function TimelineItem({ title, description, date }: TimelineItemProps) {
  return (
    <div className="rounded-lg shadow-md overflow-hidden border border-white/5 bg-white/5 hover:border-white/10 transition-all duration-300 cursor-pointer p-6">
      <p className="text-white/60 text-xs">{date}</p>
      <h3 className="text-xl font-bold my-2">{title}</h3>
      <p className="text-white/60">{description}</p>
    </div>
  );
}

export default TimelineItem;
