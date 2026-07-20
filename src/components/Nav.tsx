import { PROFILE } from '../data';
import { useT } from '../i18n/context';
import { Icon } from './Icon';

export function Nav() {
  const { lang, setLang, t } = useT();

  const LINKS = [
    { href: '#about', label: t.nav.about },
    { href: '#certs', label: t.nav.certs },
    { href: '#work', label: t.nav.work },
    { href: '#stack', label: t.nav.stack },
    { href: '#frontend', label: t.nav.frontend },
    { href: '#automations', label: t.nav.automations },
    { href: '#contact', label: t.nav.contact },
  ];

  return (
    <header className="nav" role="banner">
      <div className="nav-inner">
        <a href="#top" className="nav-brand mono" aria-label="matheus_amorim">
          <span className="nav-brand-caret">❯</span>
          <span className="nav-brand-name">matheus_amorim</span>
          <span className="nav-brand-cursor" aria-hidden="true" />
        </a>

        <nav className="nav-links" aria-label="Primary">
          {LINKS.map((link) => (
            <a key={link.href} href={link.href} className="mono">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="nav-actions">
          <div
            className="lang-toggle mono"
            role="group"
            aria-label={t.nav.ariaLangToggle}
          >
            <button
              type="button"
              className={`lang-toggle-btn${lang === 'pt' ? ' is-active' : ''}`}
              onClick={() => setLang('pt')}
              aria-pressed={lang === 'pt'}
            >
              PT
            </button>
            <span className="lang-toggle-sep" aria-hidden="true">
              /
            </span>
            <button
              type="button"
              className={`lang-toggle-btn${lang === 'en' ? ' is-active' : ''}`}
              onClick={() => setLang('en')}
              aria-pressed={lang === 'en'}
            >
              EN
            </button>
          </div>

          <div className="nav-socials">
            <a
              href={PROFILE.github}
              target="_blank"
              rel="noreferrer noopener"
              aria-label={t.nav.ariaGithub}
              className="nav-social"
            >
              <Icon name="github" size={18} />
            </a>
            <a
              href={PROFILE.linkedin}
              target="_blank"
              rel="noreferrer noopener"
              aria-label={t.nav.ariaLinkedin}
              className="nav-social"
            >
              <Icon name="linkedin" size={18} />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
