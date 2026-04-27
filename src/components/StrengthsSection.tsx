import { site } from '../data/site';
import { Reveal } from './Reveal';
import { Section } from './Section';

export function StrengthsSection() {
  return (
    <Section
      id="strengths"
      title="Strengths"
      tone="muted"
      description="What shows up in my day-to-day work — capabilities, not a tool list."
    >
      <ul className="grid gap-5 sm:grid-cols-2 lg:gap-6">
        {site.strengths.map((item, index) => (
          <li key={item.title}>
            <Reveal delayMs={index * 70}>
              <div className="h-full rounded-2xl border border-line bg-surface p-6 shadow-sm transition duration-250 hover:-translate-y-0.5 hover:border-accent/20 hover:shadow-card">
                <h3 className="text-lg font-semibold tracking-[-0.01em] text-ink">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-muted">{item.body}</p>
              </div>
            </Reveal>
          </li>
        ))}
      </ul>
    </Section>
  );
}
