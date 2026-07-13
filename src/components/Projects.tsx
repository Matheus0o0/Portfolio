import type { WorkStatus } from '../data';
import { useT } from '../i18n/context';
import { Icon } from './Icon';
import { SectionHeading } from './SectionHeading';

const STATUS_DOT_COLOR: Record<WorkStatus, string> = {
  main: 'var(--primary)',
  active: '#facc15',
  wip: '#facc15',
  lab: 'var(--accent)',
  service: 'var(--success)',
  experiment: 'var(--accent)',
};

function StatusBadge({
  status,
  label,
}: {
  status: WorkStatus;
  label: string;
}) {
  return (
    <span className="status-badge mono" data-status={status}>
      <span
        className="status-badge-dot"
        style={{ background: STATUS_DOT_COLOR[status] }}
        aria-hidden="true"
      />
      {label}
    </span>
  );
}

export function Projects() {
  const { t } = useT();
  const work = t.work;

  return (
    <section id="work" className="section work">
      <SectionHeading
        eyebrow={work.eyebrow}
        title={work.title}
        description={work.description}
      />

      {/* Featured card */}
      <article className="featured-card">
        <div className="featured-glow" aria-hidden="true" />
        <div className="featured-inner">
          <div className="featured-main">
            <StatusBadge
              status={work.featured.status}
              label={work.featured.statusLabel}
            />
            <h3 className="featured-name">{work.featured.name}</h3>
            <p className="featured-summary">{work.featured.summary}</p>

            <div className="featured-block">
              <p className="featured-block-label mono">
                {work.labels.clients}
              </p>
              <ul className="featured-clients">
                {work.featured.clients.map((client) => (
                  <li key={client}>{client}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="featured-side">
            <div className="featured-block">
              <p className="featured-block-label mono">
                {work.labels.services}
              </p>
              <ul className="featured-services">
                {work.featured.services.map((service) => (
                  <li key={service}>
                    <Icon
                      name="chevron-right"
                      size={12}
                      className="featured-service-icon"
                    />
                    {service}
                  </li>
                ))}
              </ul>
            </div>

            <div className="featured-block">
              <p className="featured-block-label mono">{work.labels.stack}</p>
              <ul className="featured-stack">
                {work.featured.stack.map((tech) => (
                  <li key={tech} className="mono">
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </article>

      {/* Secondary grid */}
      <ul className="work-grid" aria-label={work.labels.othersLabel}>
        {work.items.map((item, index) => {
          const inner = (
            <>
              <header className="work-card-head">
                <span className="work-card-index mono">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <StatusBadge status={item.status} label={item.statusLabel} />
              </header>

              <div className="work-card-body">
                <h4 className="work-card-name">{item.name}</h4>
                <p className="work-card-summary">{item.summary}</p>

                <ul className="work-card-bullets">
                  {item.bullets.map((bullet) => (
                    <li key={bullet}>
                      <span
                        className="work-card-bullet-dot"
                        aria-hidden="true"
                      />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>

              {item.href && (
                <footer className="work-card-foot">
                  <span className="work-card-cta mono">
                    {work.labels.viewGallery}
                    <Icon name="arrow-right" size={14} />
                  </span>
                </footer>
              )}
            </>
          );

          return (
            <li key={item.name}>
              {item.href ? (
                <a
                  href={item.href}
                  className="work-card work-card--link spot-target"
                >
                  {inner}
                </a>
              ) : (
                <div className="work-card spot-target">{inner}</div>
              )}
            </li>
          );
        })}
      </ul>
    </section>
  );
}
