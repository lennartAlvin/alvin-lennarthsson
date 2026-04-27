import { site } from '../data/site';
import { Reveal } from './Reveal';

function scrollToId(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

export function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-[85dvh] border-b border-line bg-surface"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_90%_60%_at_50%_-10%,rgba(15,118,110,0.09),transparent_55%)]"
        aria-hidden
      />
      <div className="relative mx-auto flex min-h-[85dvh] max-w-5xl flex-col justify-center px-4 pb-24 pt-16 sm:px-6 sm:pb-28 sm:pt-20 lg:px-8">
        <Reveal>
          <p className="text-sm font-medium italic leading-none text-accent">
            {site.title}
          </p>
        </Reveal>
        <Reveal delayMs={80}>
          <h1 className="mt-5 max-w-3xl text-balance text-4xl font-semibold tracking-[-0.035em] text-ink sm:text-5xl lg:text-[3.25rem] lg:leading-[1.1]">
            Hi, I&apos;m {site.name}. I build software that stays clear under pressure and{' '}
            <span className="text-accent">easy to pick up later</span>.
          </h1>
        </Reveal>
        <Reveal delayMs={160}>
          <p className="mt-8 max-w-prose text-pretty text-lg font-medium leading-relaxed text-ink-muted">
            {site.heroTagline}
          </p>
        </Reveal>
        <Reveal delayMs={240}>
          <p className="mt-4 max-w-prose text-pretty text-base leading-[1.7] text-ink-muted">
            {site.heroLead}
          </p>
        </Reveal>
        <Reveal delayMs={320}>
          <div className="mt-12 flex flex-wrap items-center gap-3">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold text-white shadow-card transition duration-250 hover:bg-accent-hover hover:shadow-card-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent active:translate-y-px active:scale-[0.98]"
              onClick={() => scrollToId('projects')}
            >
              View projects
            </button>
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-lg border border-line bg-surface px-5 py-2.5 text-sm font-semibold text-ink shadow-sm transition duration-250 hover:border-accent/35 hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent active:translate-y-px active:scale-[0.98]"
              onClick={() => scrollToId('contact')}
            >
              Contact
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
