import { Scramble } from './Scramble';

type Props = {
  eyebrow: string;
  title: string;
  description?: string;
};

export function SectionHeading({ eyebrow, title, description }: Props) {
  return (
    <div className="section-heading">
      <p className="eyebrow mono">
        <span className="eyebrow-caret">❯</span> {eyebrow}
      </p>
      <h2 className="section-title">
        <Scramble text={title} />
      </h2>
      {description && <p className="section-desc">{description}</p>}
    </div>
  );
}
