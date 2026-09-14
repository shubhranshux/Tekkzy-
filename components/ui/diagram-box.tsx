import type { LucideIcon } from "lucide-react";

export function DiagramBox({
  title,
  items,
  className = "",
  icon: Icon,
}: {
  title: string;
  items: string[];
  className?: string;
  icon?: LucideIcon;
}) {
  return (
    <div className={`diagram-box ${className}`}>
      <div className="diagram-box-title">
        {Icon && <Icon size={13} />}
        {title}
      </div>
      <div className="diagram-box-items">
        {items.map((item) => (
          <span key={item}>{item}</span>
        ))}
      </div>
    </div>
  );
}
