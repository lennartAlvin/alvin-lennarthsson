import { site } from '../data/site';

export function Footer() {
  return (
    <footer className="border-t border-line bg-surface py-12">
      <div className="mx-auto flex max-w-5xl flex-col gap-6 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-3 text-sm text-ink-muted sm:flex-row sm:flex-wrap sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.name}. Static site — no server runtime.
          </p>
          <nav className="flex flex-wrap gap-x-4 gap-y-2" aria-label="Legal">
            <a
              href="https://example.com/privacy"
              className="font-medium text-ink-muted underline-offset-4 transition duration-250 hover:text-accent hover:underline"
              target="_blank"
              rel="noreferrer"
            >
              Privacy
            </a>
            <span className="text-line" aria-hidden>
              ·
            </span>
            <a
              href="https://example.com/terms"
              className="font-medium text-ink-muted underline-offset-4 transition duration-250 hover:text-accent hover:underline"
              target="_blank"
              rel="noreferrer"
            >
              Terms
            </a>
          </nav>
        </div>
        <p className="text-xs text-ink-muted">
          Replace the legal URLs with your own pages when you publish.
        </p>
      </div>
    </footer>
  );
}
