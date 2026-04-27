import { site } from '../data/site';
import { Reveal } from './Reveal';
import { Section } from './Section';

export function AboutSection() {
  return (
    <Section
      id="about"
      title="About"
      description="How I like to work: practical, curious, and focused on outcomes."
    >
      <Reveal>
        <div className="max-w-prose space-y-6 text-base leading-[1.75] text-ink-muted">
          {site.about.map((paragraph, index) => (
            <p key={index} className="text-pretty">
              {paragraph}
            </p>
          ))}
        </div>
      </Reveal>
    </Section>
  );
}
