import { useT } from '../i18n/context';
import { asset } from '../lib/asset';
import { Icon } from './Icon';
import { SectionHeading } from './SectionHeading';

export function Certificates() {
  const { t } = useT();
  const certs = t.certs;
  const edu = certs.education;

  return (
    <section id="certs" className="section">
      <SectionHeading
        eyebrow={certs.eyebrow}
        title={certs.title}
        description={certs.description}
      />

      <div className="cert-stack">
        <div className="cert-subhead mono">{edu.label}</div>

        <article className="edu-card">
          <div className="edu-card-mark" aria-hidden="true">
            <span className="edu-card-mark-abbr">IFBA</span>
          </div>

          <div className="edu-card-body">
            <div className="edu-card-head">
              <h3 className="edu-card-institution">{edu.institution}</h3>
              <span className="edu-card-badge mono">
                <span className="edu-card-badge-dot" aria-hidden="true" />
                {edu.badge}
              </span>
            </div>
            <p className="edu-card-degree">{edu.degree}</p>
            <p className="edu-card-area">{edu.area}</p>
            <p className="edu-card-period mono">{edu.period}</p>
          </div>
        </article>

        <div className="cert-subhead mono cert-subhead--offset">
          {certs.certsLabel}
        </div>

        <ol className="cert-timeline">
          {certs.items.map((item, index) => (
            <li key={item.file} className="cert-entry">
              <div className="cert-rail" aria-hidden="true">
                <span className="cert-rail-dot" />
                {index < certs.items.length - 1 && (
                  <span className="cert-rail-line" />
                )}
              </div>

              <article className="cert-card">
                <header className="cert-card-head">
                  <time className="cert-date mono" dateTime={item.date}>
                    {item.dateLabel}
                  </time>
                  <span className="cert-hours mono">
                    {item.hours}
                    {certs.hoursLabel}
                  </span>
                </header>

                <h3 className="cert-title">{item.title}</h3>
                <p className="cert-institution">{item.institution}</p>

                {item.tags.length > 0 && (
                  <ul className="cert-tags">
                    {item.tags.map((tag) => (
                      <li key={tag} className="cert-tag">
                        {tag}
                      </li>
                    ))}
                  </ul>
                )}

                <a
                  href={asset(item.file)}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="cert-link mono"
                >
                  {certs.viewCertificate}
                  <Icon name="external" size={14} />
                </a>
              </article>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
