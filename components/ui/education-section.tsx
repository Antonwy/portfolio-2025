import TimelineItem from './timeline-item';
import Section from './section';

function EducationSection() {
  return (
    <Section>
      <h2 className="font-poppins text-4xl md:text-5xl font-black text-center mb-10">
        🎓 Education
      </h2>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
        <TimelineItem
          title="Master Thesis"
          description="University of Cambridge"
          date="October 2024 - Present"
        />
        <TimelineItem
          title="M.Sc. in Computer Science"
          description="Technical University of Munich"
          date="March 2024 - March 2026"
        />
        <TimelineItem
          title="B.Sc. in Computer Science"
          description="Technical University of Munich"
          date="October 2019 - March 2024"
        />
      </div>
    </Section>
  );
}

export default EducationSection;
