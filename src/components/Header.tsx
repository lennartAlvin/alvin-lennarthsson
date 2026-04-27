import { useEffect, useMemo, useState } from 'react';
import { navLinks, site } from '../data/site';
import { useActiveSection } from '../hooks/useActiveSection';

function scrollToId(id: string) {
  const el = document.getElementById(id);
  el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

export function Header() {
  const [open, setOpen] = useState(false);
  const sectionIds = useMemo(() => navLinks.map((l) => l.id), []);
  const active = useActiveSection(sectionIds);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  const linkClass = (id: string) => {
    const isActive = active === id;
    return [
      'rounded-lg px-3 py-2 text-sm font-medium transition-colors duration-250',
      isActive
        ? 'bg-accent-soft text-accent'
        : 'text-ink-muted hover:bg-raised hover:text-ink',
    ].join(' ');
  };

  return (
    <header className="sticky top-0 z-40 border-b border-line/90 bg-surface/90 shadow-sm backdrop-blur-md">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <a
          href="#top"
          className="text-sm font-semibold tracking-tight text-ink transition-colors duration-250 hover:text-accent"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
            setOpen(false);
          }}
        >
          {site.name}
        </a>

        <nav className="hidden items-center gap-0.5 md:flex" aria-label="Primary">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={linkClass(link.id)}
              aria-current={active === link.id ? 'true' : undefined}
              onClick={(e) => {
                e.preventDefault();
                scrollToId(link.id);
              }}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-lg border border-line bg-surface px-3 py-2 text-sm font-semibold text-ink shadow-sm transition duration-250 hover:border-accent/30 hover:text-accent active:translate-y-px md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          Menu
        </button>
      </div>

      {open ? (
        <div
          id="mobile-menu"
          className="border-t border-line bg-surface shadow-card md:hidden"
        >
          <nav className="flex flex-col px-4 py-3" aria-label="Mobile primary">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={`rounded-lg px-3 py-3 text-sm font-medium transition-colors duration-250 ${
                  active === link.id
                    ? 'bg-accent-soft text-accent'
                    : 'text-ink-muted hover:bg-raised hover:text-ink'
                }`}
                aria-current={active === link.id ? 'true' : undefined}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToId(link.id);
                  setOpen(false);
                }}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      ) : null}
    </header>
  );
}
