import type { ReactNode } from 'react';

type SectionProps = {
  id: string;
  title: string;
  description?: string;
  children: ReactNode;
  className?: string;
  /** Slightly alternate background for rhythm (same palette family). */
  tone?: 'default' | 'muted';
};

export function Section({
  id,
  title,
  description,
  children,
  className = '',
  tone = 'default',
}: SectionProps) {
  const bg = tone === 'muted' ? 'bg-raised/80' : 'bg-canvas';

  return (
    <section
      id={id}
      className={`scroll-mt-24 border-t border-line py-20 sm:py-24 sm:pb-[5.5rem] ${bg} ${className}`}
    >
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:max-w-5xl lg:px-8">
        <header className="mb-12 max-w-2xl">
          <h2 className="text-[1.65rem] font-semibold tracking-[-0.02em] text-ink sm:text-3xl sm:tracking-[-0.03em]">
            {title}
          </h2>
          {description ? (
            <p className="mt-4 max-w-prose text-pretty text-base leading-relaxed text-ink-muted">
              {description}
            </p>
          ) : null}
        </header>
        {children}
      </div>
    </section>
  );
}
