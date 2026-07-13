import { PROFILE } from '../data';
import { useT } from '../i18n/context';
import { Icon } from './Icon';
import { SectionHeading } from './SectionHeading';

export function Contact() {
  const { t } = useT();
  const contact = t.contact;

  const CHANNELS = [
    {
      icon: 'mail' as const,
      label: contact.channels.email,
      value: PROFILE.email,
      href: `mailto:${PROFILE.email}`,
    },
    {
      icon: 'github' as const,
      label: contact.channels.github,
      value: '@Matheus0o0',
      href: PROFILE.github,
    },
    {
      icon: 'linkedin' as const,
      label: contact.channels.linkedin,
      value: '/matheus-amorim',
      href: PROFILE.linkedin,
    },
    {
      icon: 'instagram' as const,
      label: contact.channels.instagram,
      value: '@matheus0o0',
      href: PROFILE.instagram,
    },
  ];

  return (
    <section id="contact" className="section contact">
      <div className="contact-card">
        <div className="contact-card-glow" aria-hidden="true" />
        <div className="contact-inner">
          <SectionHeading
            eyebrow={contact.eyebrow}
            title={contact.title}
            description={contact.description}
          />

          <ul className="contact-channels">
            {CHANNELS.map((channel) => (
              <li key={channel.label}>
                <a
                  href={channel.href}
                  target={
                    channel.href.startsWith('mailto:') ? undefined : '_blank'
                  }
                  rel="noreferrer noopener"
                  className="contact-channel spot-target"
                >
                  <span className="contact-channel-icon">
                    <Icon name={channel.icon} size={18} />
                  </span>
                  <span className="contact-channel-text">
                    <span className="contact-channel-label mono">
                      {channel.label}
                    </span>
                    <span className="contact-channel-value">
                      {channel.value}
                    </span>
                  </span>
                  <Icon
                    name="arrow-right"
                    size={16}
                    className="contact-channel-arrow"
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
