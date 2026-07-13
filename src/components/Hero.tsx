import { useT } from '../i18n/context';
import { asset } from '../lib/asset';
import { Icon } from './Icon';

export function Hero() {
  const { t } = useT();
  const hero = t.hero;

  return (
    <section id="top" className="hero">
      <div className="grid-bg" aria-hidden="true" />

      <div className="hero-inner">
        <div className="terminal" role="presentation">
          <div className="terminal-head">
            <span className="terminal-dot" data-color="red" />
            <span className="terminal-dot" data-color="yellow" />
            <span className="terminal-dot" data-color="green" />
            <span className="terminal-title mono">
              {hero.terminal.windowTitle}
            </span>
          </div>
          <div className="terminal-body mono">
            <p>
              <span className="term-prompt">$</span>
              <span className="term-cmd"> {hero.terminal.whoamiCmd}</span>
            </p>
            <p className="term-out">{hero.terminal.whoamiOut}</p>
            <p>
              <span className="term-prompt">$</span>
              <span className="term-cmd"> {hero.terminal.roleCmd}</span>
            </p>
            <p className="term-out term-highlight">
              {hero.terminal.roleOut}
            </p>
            <p>
              <span className="term-prompt">$</span>
              <span className="term-cmd"> {hero.terminal.focusCmd}</span>
            </p>
            <p className="term-out">
              {hero.terminal.focusOut.map((f, i) => (
                <span key={f}>
                  <span className="term-focus">{f}</span>
                  {i < hero.terminal.focusOut.length - 1 && (
                    <span className="term-sep"> · </span>
                  )}
                </span>
              ))}
            </p>
            <p>
              <span className="term-prompt">$</span>
              <span className="term-cmd"> {hero.terminal.statusCmd}</span>
              <span className="term-cursor" aria-hidden="true" />
            </p>
            <p className="term-out">
              <span className="status-dot" aria-hidden="true" />
              <span className="term-online">{hero.terminal.statusOnline}</span>
              <span className="term-dim"> {hero.terminal.statusDetail}</span>
            </p>
          </div>
        </div>

        <div className="hero-content">
          <div className="hero-identity">
            <div className="hero-avatar">
              <img
                src={asset('/matheus.jpg')}
                alt="Matheus Amorim"
                width={72}
                height={72}
                loading="eager"
                fetchPriority="high"
              />
              <span className="hero-avatar-status" aria-hidden="true" />
            </div>
            <div className="hero-identity-text mono">
              <span className="hero-identity-handle">
                <span className="hero-identity-caret">❯</span>{' '}
                {hero.identity.handle}
              </span>
              <span className="hero-identity-status">
                <span className="hero-identity-dot" aria-hidden="true" />
                {hero.identity.status}
              </span>
            </div>
          </div>

          <p className="eyebrow mono">
            <span className="eyebrow-caret">❯</span> {hero.eyebrow}
          </p>
          <h1 className="hero-title">
            {hero.titleBefore}
            <span className="grad">{hero.titleGrad1}</span>
            {hero.titleMid}
            <span className="grad">{hero.titleGrad2}</span>
            {hero.titleAfter}
          </h1>
          <p className="hero-lead">{hero.lead}</p>

          <div className="hero-cta">
            <a href="#work" className="btn btn-primary">
              {hero.ctaPrimary}
              <Icon name="arrow-right" size={16} />
            </a>
            <a href="#contact" className="btn btn-ghost">
              {hero.ctaSecondary}
            </a>
          </div>

          <dl className="hero-meta mono">
            <div>
              <dt>{hero.meta.location.label}</dt>
              <dd>{hero.meta.location.value}</dd>
            </div>
            <div>
              <dt>{hero.meta.edu.label}</dt>
              <dd>{hero.meta.edu.value}</dd>
            </div>
            <div>
              <dt>{hero.meta.focus.label}</dt>
              <dd>{hero.meta.focus.value}</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}
