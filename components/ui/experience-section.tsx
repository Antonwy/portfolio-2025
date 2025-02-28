import { FileUserIcon } from 'lucide-react';
import TimelineItem from './timeline-item';
import Button from './button';
import Link from 'next/link';

function ExperienceSection() {
  return (
    <section className="min-h-[100dvh] flex flex-col items-center justify-center">
      <h2 className="font-poppins text-4xl md:text-5xl font-black text-center mb-10">
        💼 Experience
      </h2>

      <Button asChild>
        <Link href="/anton-wyrowski-cv.pdf" target="_blank" className="mb-3">
          <FileUserIcon className="size-4" />
          Check out my resume
        </Link>
      </Button>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
        <TimelineItem
          title="wahl.chat"
          description="Founding Member"
          date="September 2022 - Present"
        />
        <TimelineItem
          title="MVST"
          description="Full-Stack Developer"
          date="September 2022 - Present"
        />
        <TimelineItem
          title="Chargd."
          description="Full-Stack Developer"
          date="March 2022 - August 2022"
        />
        <TimelineItem
          title="One Dollar Movement"
          description="CO-Founder, CTO"
          date="October 2019 - December 2021"
        />
      </div>
    </section>
  );
}

export default ExperienceSection;
