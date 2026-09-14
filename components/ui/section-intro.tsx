import { ArrowRight } from "lucide-react";

export function SectionIntro({
  eyebrow,
  title,
  copy,
  link,
  href = "#contact",
}: {
  eyebrow: string;
  title: React.ReactNode;
  copy?: string;
  link?: string;
  href?: string;
}) {
  return (
    <div className="section-intro">
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {copy && <p>{copy}</p>}
      {link && (
        <a className="text-link" href={href}>
          {link} <ArrowRight size={14} />
        </a>
      )}
    </div>
  );
}
