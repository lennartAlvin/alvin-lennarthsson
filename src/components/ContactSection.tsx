import { site } from '../data/site';
import { Reveal } from './Reveal';
import { Section } from './Section';

export function ContactSection() {
  const { contact } = site;
  return (
    <Section
      id="contact"
      title="Contact"
      tone="muted"
      description="Direct ways to reach me — swap the LinkedIn URL if you use a different slug."
    >
      <Reveal>
        <div className="rounded-2xl border border-line bg-surface p-6 shadow-card sm:p-10">
          <ul className="space-y-4 text-sm">
            <li>
              <span className="font-semibold text-ink">Email: </span>
              <a
                href={contact.emailHref}
                className="text-accent underline-offset-4 transition duration-250 hover:text-accent-hover hover:underline"
              >
                {contact.email}
              </a>
            </li>
            <li>
              <span className="font-semibold text-ink">Phone: </span>
              <a
                href={contact.phoneHref}
                className="text-accent underline-offset-4 transition duration-250 hover:text-accent-hover hover:underline"
              >
                {contact.phone}
              </a>
            </li>
            <li>
              <span className="font-semibold text-ink">GitHub: </span>
              <a
                href={contact.githubHref}
                className="text-accent underline-offset-4 transition duration-250 hover:text-accent-hover hover:underline"
                target="_blank"
                rel="noreferrer"
              >
                {contact.githubHref.replace('https://', '')}
              </a>
            </li>
            <li>
              <span className="font-semibold text-ink">LinkedIn: </span>
              <a
                href={contact.linkedinHref}
                className="text-accent underline-offset-4 transition duration-250 hover:text-accent-hover hover:underline"
                target="_blank"
                rel="noreferrer"
              >
                {contact.linkedinHref.replace('https://', '')}
              </a>
            </li>
          </ul>
          <p className="mt-10 max-w-prose text-pretty text-sm leading-relaxed text-ink-muted">
            {contact.closing}
          </p>
        </div>
      </Reveal>
    </Section>
  );
}
