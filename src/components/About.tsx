import { useT } from '../i18n/context';
import { Icon } from './Icon';
import { SectionHeading } from './SectionHeading';

export function About() {
  const { t } = useT();
  const about = t.about;

  return (
    <section id="about" className="section about">
      <SectionHeading
        eyebrow={about.eyebrow}
        title={about.title}
        description={about.description}
      />

      <div className="about-bio">
        {about.bio.map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
      </div>

      <div className="pillars">
        {about.pillars.map((pillar) => (
          <article key={pillar.title} className="pillar-card spot-target">
            <div className="pillar-icon">
              <Icon name={pillar.icon} size={22} />
            </div>
            <h3 className="pillar-title">{pillar.title}</h3>
            <p className="pillar-body">{pillar.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
