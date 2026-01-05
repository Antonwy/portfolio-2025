import ContactSection from '@/components/ui/contact-section';
import EducationSection from '@/components/ui/education-section';
import ExperienceSection from '@/components/ui/experience-section';
import HomeHeroSection from '@/components/ui/home-hero-section';

export default function Home() {
  return (
    <main className="z-10 min-h-[100dvh]">
      <HomeHeroSection />
      <ExperienceSection />
      <EducationSection />
      <ContactSection />
    </main>
  );
}
