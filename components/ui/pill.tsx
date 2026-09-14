import type { LucideIcon } from "lucide-react";

export function Pill({
  children,
  icon: Icon,
}: {
  children: React.ReactNode;
  icon?: LucideIcon;
}) {
  return (
    <span className="pill">
      {Icon && <Icon size={14} strokeWidth={1.75} />}
      {children}
    </span>
  );
}
