import { useEffect } from 'react';

/**
 * Global cursor-follow spotlight + per-card border glow.
 *
 * - Sets `--spot-x` / `--spot-y` on <body> for the ambient global glow.
 * - Uses event delegation on <body>: when the pointer moves inside any
 *   element with `.spot-target`, sets `--card-x` / `--card-y` on that
 *   element (relative to its own bounding rect), which the CSS uses to
 *   render a soft radial gradient that "reveals" the card's border.
 *
 * Skipped when the device has no hover capability (touch-only) or when
 * the user prefers reduced motion.
 */
export function CursorSpotlight() {
  useEffect(() => {
    const canHover = matchMedia('(hover: hover) and (pointer: fine)').matches;
    const prefersReducedMotion = matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches;
    if (!canHover || prefersReducedMotion) return;

    const body = document.body;
    body.classList.add('has-spotlight');

    let raf = 0;
    let px = 0;
    let py = 0;
    let currentTarget: HTMLElement | null = null;

    const flush = () => {
      body.style.setProperty('--spot-x', `${px}px`);
      body.style.setProperty('--spot-y', `${py}px`);

      if (currentTarget) {
        const rect = currentTarget.getBoundingClientRect();
        currentTarget.style.setProperty('--card-x', `${px - rect.left}px`);
        currentTarget.style.setProperty('--card-y', `${py - rect.top}px`);
      }

      raf = 0;
    };

    const onMove = (e: PointerEvent) => {
      px = e.clientX;
      py = e.clientY;

      const nextTarget = (e.target as HTMLElement | null)?.closest(
        '.spot-target',
      ) as HTMLElement | null;

      if (nextTarget !== currentTarget) {
        currentTarget?.classList.remove('spot-active');
        currentTarget = nextTarget;
        currentTarget?.classList.add('spot-active');
      }

      if (!raf) raf = requestAnimationFrame(flush);
    };

    const onLeave = () => {
      currentTarget?.classList.remove('spot-active');
      currentTarget = null;
    };

    window.addEventListener('pointermove', onMove);
    window.addEventListener('pointerleave', onLeave);

    return () => {
      window.removeEventListener('pointermove', onMove);
      window.removeEventListener('pointerleave', onLeave);
      body.classList.remove('has-spotlight');
      currentTarget?.classList.remove('spot-active');
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return <div className="spotlight" aria-hidden="true" />;
}
