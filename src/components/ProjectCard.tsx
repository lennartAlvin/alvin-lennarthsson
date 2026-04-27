import type { Project } from '../data/projects';

type ProjectCardProps = {
  project: Project;
  /** Larger layout for the lead project. */
  featured?: boolean;
};

export function ProjectCard({ project, featured = false }: ProjectCardProps) {
  const hasGithub = Boolean(project.githubUrl);
  const hasDemo = Boolean(project.demoUrl);
  const showContactCta = !hasGithub && !hasDemo;

  return (
    <article
      className={[
        'group flex h-full flex-col rounded-2xl border border-line bg-surface p-6 shadow-card transition duration-250 sm:p-8',
        'hover:-translate-y-0.5 hover:border-accent/25 hover:shadow-card-hover',
        featured ? 'lg:flex-row lg:gap-10 lg:p-10' : '',
      ].join(' ')}
    >
      <div className={featured ? 'lg:min-w-0 lg:flex-1' : ''}>
        <p className="text-xs font-semibold tracking-[0.12em] text-accent">
          {project.category}
        </p>
        <h3
          className={
            featured
              ? 'mt-3 text-2xl font-semibold tracking-[-0.02em] text-ink sm:text-[1.65rem]'
              : 'mt-3 text-xl font-semibold tracking-[-0.02em] text-ink'
          }
        >
          {project.title}
        </h3>
        <p className="mt-4 max-w-prose text-sm leading-relaxed text-ink-muted">
          {project.description}
        </p>
        <p className="mt-4 max-w-prose text-sm leading-relaxed text-ink">
          <span className="font-semibold text-ink">What it demonstrates: </span>
          {project.problem}
        </p>
      </div>

      <div className={featured ? 'mt-8 flex flex-1 flex-col lg:mt-0 lg:max-w-md' : 'mt-6 flex flex-1 flex-col'}>
        <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed text-ink-muted">
          {project.highlights.map((item) => (
            <li key={item} className="text-pretty">
              {item}
            </li>
          ))}
        </ul>
        <p className="mt-5 text-xs tabular-nums text-ink-muted">
          <span className="font-semibold text-ink-muted">Stack: </span>
          {project.tech}
        </p>
        <div className="mt-auto flex flex-wrap gap-3 pt-8">
          {hasGithub ? (
            <a
              href={project.githubUrl}
              className="inline-flex min-h-[2.5rem] flex-1 items-center justify-center rounded-lg border border-line bg-surface px-4 py-2 text-sm font-semibold text-ink transition duration-250 hover:border-accent/35 hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent active:translate-y-px sm:flex-none"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          ) : null}
          {hasDemo ? (
            <a
              href={project.demoUrl}
              className="inline-flex min-h-[2.5rem] flex-1 items-center justify-center rounded-lg bg-accent px-4 py-2 text-sm font-semibold text-white shadow-sm transition duration-250 hover:bg-accent-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent active:translate-y-px sm:flex-none"
              target="_blank"
              rel="noreferrer"
            >
              Live demo
            </a>
          ) : null}
          {showContactCta ? (
            <a
              href="#contact"
              className="inline-flex min-h-[2.5rem] flex-1 items-center justify-center rounded-lg bg-accent px-4 py-2 text-sm font-semibold text-white shadow-sm transition duration-250 hover:bg-accent-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent active:translate-y-px sm:flex-none"
            >
              Ask about this work
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
}
