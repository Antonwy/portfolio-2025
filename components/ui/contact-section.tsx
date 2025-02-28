'use client';

import Section from './section';
import ContactForm from './contact-form';
import { SECTION_ANCHORS } from '@/lib/section-anchors';

function ContactSection() {
  return (
    <Section id={SECTION_ANCHORS.contact}>
      <h2
        className="font-poppins text-4xl md:text-5xl font-black text-center"
        id="contact"
      >
        👋🏼 Contact
      </h2>
      <p className="text-center text-sm text-white/40 px-4 mt-6 max-w-lg mx-auto">
        I&apos;m always looking for new opportunities to collaborate and build
        amazing things. Whether you have a project in mind or just want to say
        hello, I&apos;d love to hear from you.
      </p>

      <ContactForm />
    </Section>
  );
}

export default ContactSection;
