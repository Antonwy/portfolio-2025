import { FileUserIcon } from 'lucide-react';
import TimelineItem from './timeline-item';
import Button from './button';
import Link from 'next/link';
import Section from './section';
function ExperienceSection() {
  return (
    <Section>
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
          title="Perplexity"
          description="Member of Technical Staff"
          date="June 2025 - Present"
        />
        <TimelineItem
          title="wahl.chat"
          description="Founding Member"
          date="September 2022 - Present"
        />
        <TimelineItem
          title="MVST"
          description="Full-Stack Developer"
          date="September 2022 - May 2025"
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
    </Section>
  );
}

export default ExperienceSection;
