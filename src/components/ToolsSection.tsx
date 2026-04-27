import { site } from '../data/site';
import { Reveal } from './Reveal';
import { Section } from './Section';

export function ToolsSection() {
  return (
    <Section
      id="tools"
      title="Tools I reach for"
      description="Compact context — useful, but not the headline."
    >
      <Reveal>
        <div className="flex flex-wrap gap-2">
          {site.tools.map((tool) => (
            <span
              key={tool}
              className="rounded-lg border border-line bg-raised px-3 py-1.5 text-xs font-semibold text-ink-muted shadow-sm transition duration-250 hover:border-accent/25 hover:text-accent"
            >
              {tool}
            </span>
          ))}
        </div>
      </Reveal>
    </Section>
  );
}
