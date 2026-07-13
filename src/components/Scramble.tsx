import { useEffect, useRef, useState } from 'react';

type Props = {
  text: string;
  className?: string;
  as?: 'span' | 'div';
  /**
   * Whether to trigger on mount (true) or when scrolled into view (false).
   * Defaults to false — most section headings should reveal on scroll.
   */
  immediate?: boolean;
  /**
   * Total animation duration in ms. Defaults to 700.
   */
  duration?: number;
};

const GLYPHS =
  '!<>-_\\/[]{}—=+*^?#________ABCDEFGHIJKLMNOPQRSTUVWXYZ';

function randomGlyph() {
  return GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
}

export function Scramble({
  text,
  className,
  as = 'span',
  immediate = false,
  duration = 700,
}: Props) {
  const [display, setDisplay] = useState(immediate ? '' : text);
  const [hasRun, setHasRun] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const prefersReducedMotion = matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches;
    if (prefersReducedMotion) {
      setDisplay(text);
      setHasRun(true);
      return;
    }

    const runScramble = () => {
      if (hasRun) return;
      setHasRun(true);

      const chars = text.split('');
      const len = chars.length;
      const start = performance.now();
      let raf = 0;

      const tick = (now: number) => {
        const elapsed = now - start;
        const progress = Math.min(elapsed / duration, 1);
        const resolvedCount = Math.floor(progress * len);

        const next = chars
          .map((ch, i) => {
            if (i < resolvedCount) return ch;
            if (ch === ' ' || ch === '\n') return ch;
            return randomGlyph();
          })
          .join('');

        setDisplay(next);

        if (progress < 1) {
          raf = requestAnimationFrame(tick);
        } else {
          setDisplay(text);
        }
      };

      raf = requestAnimationFrame(tick);
      return () => cancelAnimationFrame(raf);
    };

    if (immediate) {
      return runScramble();
    }

    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            runScramble();
            observer.disconnect();
          }
        });
      },
      { threshold: 0.2 },
    );
    observer.observe(el);

    return () => observer.disconnect();
  }, [text, immediate, duration, hasRun]);

  const Component = as;
  return (
    <Component ref={ref as never} className={className} aria-label={text}>
      <span aria-hidden="true">{display}</span>
    </Component>
  );
}
