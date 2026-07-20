import { useCallback, useEffect, useMemo, useState } from 'react';
import { useT } from '../i18n/context';
import { asset } from '../lib/asset';
import { Icon } from './Icon';
import { SectionHeading } from './SectionHeading';

type LightboxImage = {
  src: string;
  caption?: string;
};

export function N8nGallery() {
  const { t } = useT();
  const automations = t.automations;
  const shots = automations.items;
  const lb = automations.lightbox;

  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [galleryIndex, setGalleryIndex] = useState(0);

  const activeShot = openIndex !== null ? shots[openIndex] : null;
  const lightboxImages = useMemo<LightboxImage[]>(() => {
    if (!activeShot) return [];
    if (activeShot.gallery && activeShot.gallery.length > 0) {
      return activeShot.gallery;
    }
    return [{ src: activeShot.image }];
  }, [activeShot]);

  const openShot = useCallback((index: number) => {
    setOpenIndex(index);
    setGalleryIndex(0);
  }, []);
  const close = useCallback(() => setOpenIndex(null), []);
  const next = useCallback(() => {
    if (!activeShot) return;
    setGalleryIndex((i) => (i + 1) % lightboxImages.length);
  }, [activeShot, lightboxImages.length]);
  const prev = useCallback(() => {
    if (!activeShot) return;
    setGalleryIndex(
      (i) => (i - 1 + lightboxImages.length) % lightboxImages.length,
    );
  }, [activeShot, lightboxImages.length]);

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

  const activeImage = activeShot ? lightboxImages[galleryIndex] : null;

  return (
    <section id="automations" className="section gallery">
      <SectionHeading
        eyebrow={automations.eyebrow}
        title={automations.title}
        description={automations.description}
      />

      <ul className="gallery-grid">
        {shots.map((shot, index) => {
          const statusLabel =
            shot.status === 'active'
              ? automations.statusActive
              : automations.statusDraft;
          const galleryCount = shot.gallery?.length ?? 0;

          return (
            <li key={shot.slug} className="gallery-item">
              <button
                type="button"
                className="gallery-card"
                onClick={() => openShot(index)}
                aria-label={`${lb.openPrefix} ${shot.name} ${lb.openSuffix}`}
              >
                <div className="n8n-frame">
                  <div className="n8n-frame-head">
                    <span className="n8n-frame-brand" aria-hidden="true">
                      <Icon name="n8n" size={16} />
                    </span>
                    <span className="n8n-frame-name mono">{shot.name}</span>
                    <span
                      className="n8n-frame-status mono"
                      data-status={shot.status}
                    >
                      <span
                        className="n8n-frame-status-dot"
                        aria-hidden="true"
                      />
                      {statusLabel}
                    </span>
                  </div>
                  <div className="n8n-frame-viewport">
                    <img
                      src={asset(shot.image)}
                      alt={`${lb.screenshotOf} ${shot.name}`}
                      loading="lazy"
                      className="gallery-img"
                    />
                    <div className="n8n-frame-canvas" aria-hidden="true" />
                    <div className="gallery-fade" aria-hidden="true" />
                    {galleryCount > 1 && (
                      <span className="n8n-frame-gallery-badge mono">
                        <Icon name="workflow" size={12} />
                        {galleryCount} {automations.galleryBadge}
                      </span>
                    )}
                  </div>
                </div>

                <div className="gallery-caption">
                  <div className="gallery-caption-text">
                    <h3 className="gallery-name">{shot.name}</h3>
                    <p className="gallery-tagline">{shot.tagline}</p>
                  </div>
                  <span className="gallery-author mono">
                    {automations.authorBadge}
                  </span>
                </div>
              </button>
            </li>
          );
        })}
      </ul>

      {activeShot && activeImage && openIndex !== null && (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={`${lb.viewingPrefix} ${activeShot.name}`}
          onClick={close}
        >
          <div className="lightbox-topbar">
            <div className="lightbox-title">
              <span className="mono lightbox-count">
                {String(galleryIndex + 1).padStart(2, '0')}{' '}
                {lb.counterSeparator}{' '}
                {String(lightboxImages.length).padStart(2, '0')}
              </span>
              <span className="lightbox-name">{activeShot.name}</span>
              {activeImage.caption && (
                <span className="lightbox-domain mono">
                  {activeImage.caption}
                </span>
              )}
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
              src={asset(activeImage.src)}
              alt={`${lb.screenshotOf} ${activeShot.name}`}
              className="lightbox-img lightbox-img--dark"
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
