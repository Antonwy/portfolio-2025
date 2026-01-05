import Section from './section';

function AboutSection() {
  return (
    <Section>
      <h2 className="font-poppins text-4xl md:text-5xl font-black text-center mb-10">
        👋 About Me
      </h2>
      <div className="container mx-auto max-w-3xl px-4">
        <p className="text-lg md:text-xl text-white/70 leading-relaxed">
          Anton Wyrowski is a product-focused software engineer currently at
          Perplexity, where he blends thoughtful design with pragmatic,
          impact-driven engineering. Before joining Perplexity in June 2025, he
          wrapped up his time at MVST, delivering polished web and Flutter
          experiences for clients and personal initiatives. He founded
          wahl.chat, helping over 400k users answer more than a million
          questions about political positions, and in 2019 launched a startup
          building a donation-focused Flutter app to support charity
          organizations.
        </p>
      </div>
    </Section>
  );
}

export default AboutSection;
