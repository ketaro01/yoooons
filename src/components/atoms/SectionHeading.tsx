import { useScrollReveal } from "../../hooks/useScrollReveal";
import { ScrollShine } from "./ScrollShine";

export function SectionHeading({
  number,
  label,
  title,
  description,
}: {
  number: string;
  label: string;
  title: string;
  description?: string;
}) {
  const reveal = useScrollReveal<HTMLDivElement>();
  return (
    <div className="section-heading" ref={reveal}>
      <div>
        <p className="eyebrow">
          <span>{number}</span> {label}
        </p>
        <h2>
          <ScrollShine>{title}</ScrollShine>
        </h2>
      </div>
      {description && <p className="section-description">{description}</p>}
    </div>
  );
}
