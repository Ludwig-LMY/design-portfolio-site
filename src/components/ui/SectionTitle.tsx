import { RevealText } from "./RevealText";

type SectionTitleProps = {
  index: string;
  label: string;
  title: string;
  description?: string;
};

export function SectionTitle({
  index,
  label,
  title,
  description,
}: SectionTitleProps) {
  return (
    <div className="grid gap-6 pb-12 lg:grid-cols-[220px_minmax(0,1fr)] lg:items-end">
      <RevealText>
        <div className="space-y-3">
          <p className="editorial-kicker">
            {index} / {label}
          </p>
          <div className="faint-rule" />
        </div>
      </RevealText>
      <RevealText className="max-w-3xl space-y-4" delay={0.08}>
        <h2 className="headline-lg text-balance">{title}</h2>
        {description ? (
          <p className="body-copy max-w-2xl text-pretty">{description}</p>
        ) : null}
      </RevealText>
    </div>
  );
}
