import { useT } from '../i18n/context';
import { SectionHeading } from './SectionHeading';

export function Stack() {
  const { t } = useT();
  const stack = t.stack;

  return (
    <section id="stack" className="section stack">
      <SectionHeading
        eyebrow={stack.eyebrow}
        title={stack.title}
        description={stack.description}
      />

      <div className="stack-grid">
        {stack.groups.map((group) => (
          <article
            key={group.label}
            className="stack-group spot-target"
            data-accent={group.accent}
          >
            <header className="stack-group-head">
              <span className="stack-group-caret mono">//</span>
              <h3 className="stack-group-title mono">{group.label}</h3>
            </header>
            <ul className="stack-list">
              {group.items.map((item) => (
                <li key={item} className="stack-item mono">
                  {item}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
