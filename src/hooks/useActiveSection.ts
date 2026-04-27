import { useEffect, useState } from 'react';

const TOP_ID = 'top';

/**
 * Highlights whichever section id is most visible in the viewport band below the header.
 */
export function useActiveSection(sectionIds: readonly string[]): string {
  const [active, setActive] = useState<string>(TOP_ID);

  useEffect(() => {
    const elements = sectionIds
      .map((id) => ({ id, el: document.getElementById(id) }))
      .filter((x): x is { id: string; el: HTMLElement } => Boolean(x.el));

    const topEl = document.getElementById(TOP_ID);

    const update = () => {
      const headerOffset = 72;
      const y = window.scrollY + headerOffset + 24;
      if (topEl) {
        const heroBottom = topEl.getBoundingClientRect().bottom + window.scrollY;
        if (window.scrollY + headerOffset < heroBottom - 40) {
          setActive(TOP_ID);
          return;
        }
      }

      let bestId = sectionIds[0] ?? TOP_ID;
      let bestDist = Number.POSITIVE_INFINITY;

      for (const { id, el } of elements) {
        const rect = el.getBoundingClientRect();
        const top = rect.top + window.scrollY;
        const dist = Math.abs(top - y);
        if (top <= y + 120 && dist < bestDist) {
          bestDist = dist;
          bestId = id;
        }
      }

      if (bestDist === Number.POSITIVE_INFINITY && elements.length > 0) {
        const last = elements[elements.length - 1];
        if (last) {
          const rect = last.el.getBoundingClientRect();
          if (rect.top + window.scrollY < y) bestId = last.id;
        }
      }

      setActive(bestId);
    };

    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, [sectionIds]);

  return active;
}
