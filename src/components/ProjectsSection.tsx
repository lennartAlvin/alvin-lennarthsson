import { projects } from '../data/projects';
import { ProjectCard } from './ProjectCard';
import { Reveal } from './Reveal';
import { Section } from './Section';

const [featured, ...rest] = projects;

export function ProjectsSection() {
  return (
    <Section
      id="projects"
      title="Featured projects"
      tone="muted"
      description="Production work, a shipped full-stack side project, and a collaborative academic delivery — each with a different shape."
    >
      <div className="flex flex-col gap-8 lg:gap-10">
        {featured ? (
          <Reveal>
            <ProjectCard project={featured} featured />
          </Reveal>
        ) : null}
        <div className="grid gap-8 md:grid-cols-2">
          {rest.map((project, index) => (
            <Reveal key={project.id} delayMs={120 + index * 90}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
