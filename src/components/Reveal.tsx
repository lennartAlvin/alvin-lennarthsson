import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from 'react';
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion';

type RevealProps = {
  children: ReactNode;
  className?: string;
  /** Stagger delay in ms (only when motion is allowed). */
  delayMs?: number;
};

export function Reveal({ children, className = '', delayMs = 0 }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = usePrefersReducedMotion();
  const [visible, setVisible] = useState(reduced);

  useEffect(() => {
    if (reduced) {
      setVisible(true);
      return;
    }
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { rootMargin: '0px 0px -6% 0px', threshold: 0.08 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [reduced]);

  const style: CSSProperties =
    !reduced && visible && delayMs > 0 ? { animationDelay: `${delayMs}ms` } : {};

  const stateClass = visible
    ? 'animate-fade-up'
    : 'translate-y-3 opacity-0 [animation:none]';

  return (
    <div ref={ref} className={`${stateClass} ${className}`.trim()} style={style}>
      {children}
    </div>
  );
}
