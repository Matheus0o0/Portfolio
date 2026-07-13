import { useCallback, useEffect, useState } from 'react';
import { useT } from '../i18n/context';
import { Icon } from './Icon';
import { SectionHeading } from './SectionHeading';

export function FrontendGallery() {
  const { t } = useT();
  const frontend = t.frontend;
  const shots = frontend.items;
  const lb = frontend.lightbox;

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const close = useCallback(() => setOpenIndex(null), []);
  const next = useCallback(
    () =>
      setOpenIndex((i) => (i === null ? null : (i + 1) % shots.length)),
    [shots.length],
  );
  const prev = useCallback(
    () =>
      setOpenIndex((i) =>
        i === null ? null : (i - 1 + shots.length) % shots.length,
      ),
    [shots.length],
  );

  useEffect(() => {
    if (openIndex === null) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowRight') next();
      if (e.key === 'ArrowLeft') prev();
    };

    document.addEventListener('keydown', onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [openIndex, close, next, prev]);

  const active = openIndex !== null ? shots[openIndex] : null;

  return (
    <section id="frontend" className="section gallery">
      <SectionHeading
        eyebrow={frontend.eyebrow}
        title={frontend.title}
        description={frontend.description}
      />

      <ul className="gallery-grid">
        {shots.map((shot, index) => (
          <li key={shot.image} className="gallery-item">
            <button
              type="button"
              className="gallery-card"
              onClick={() => setOpenIndex(index)}
              aria-label={`${lb.openPrefix} ${shot.name} ${lb.openSuffix}`}
            >
              <div className="browser">
                <div className="browser-head">
                  <span className="browser-dot" data-color="red" />
                  <span className="browser-dot" data-color="yellow" />
                  <span className="browser-dot" data-color="green" />
                  <span className="browser-url mono">
                    <span className="browser-url-lock" aria-hidden="true">
                      ●
                    </span>
                    {shot.domain}
                  </span>
                </div>
                <div className="browser-viewport">
                  <img
                    src={shot.image}
                    alt={`${lb.screenshotOf} ${shot.name}`}
                    loading="lazy"
                    className="gallery-img"
                  />
                  <div className="gallery-fade" aria-hidden="true" />
                </div>
              </div>

              <div className="gallery-caption">
                <div className="gallery-caption-text">
                  <h3 className="gallery-name">{shot.name}</h3>
                  <p className="gallery-tagline">{shot.tagline}</p>
                </div>
                <span className="gallery-author mono">
                  {frontend.authorBadge}
                </span>
              </div>
            </button>
          </li>
        ))}
      </ul>

      {active && openIndex !== null && (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={`${lb.viewingPrefix} ${active.name}`}
          onClick={close}
        >
          <div className="lightbox-topbar">
            <div className="lightbox-title">
              <span className="mono lightbox-count">
                {String(openIndex + 1).padStart(2, '0')} {lb.counterSeparator}{' '}
                {String(shots.length).padStart(2, '0')}
              </span>
              <span className="lightbox-name">{active.name}</span>
              <span className="lightbox-domain mono">{active.domain}</span>
            </div>

            <div className="lightbox-actions">
              <button
                type="button"
                className="lightbox-btn"
                onClick={(e) => {
                  e.stopPropagation();
                  prev();
                }}
                aria-label={lb.prev}
              >
                <Icon
                  name="chevron-right"
                  size={18}
                  style={{ transform: 'rotate(180deg)' }}
                />
              </button>
              <button
                type="button"
                className="lightbox-btn"
                onClick={(e) => {
                  e.stopPropagation();
                  next();
                }}
                aria-label={lb.next}
              >
                <Icon name="chevron-right" size={18} />
              </button>
              <button
                type="button"
                className="lightbox-btn lightbox-close"
                onClick={close}
                aria-label={lb.close}
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M6 6l12 12M18 6 6 18"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
            </div>
          </div>

          <div
            className="lightbox-scroller"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={active.image}
              alt={`${lb.screenshotOf} ${active.name}`}
              className="lightbox-img"
            />
          </div>

          <p className="lightbox-hint mono" aria-hidden="true">
            {lb.hint}
          </p>
        </div>
      )}
    </section>
  );
}
