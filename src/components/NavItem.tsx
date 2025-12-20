import type { LucideIcon } from "lucide-react";
import { Link } from "@tanstack/react-router";

interface NavItemProps {
  icon: LucideIcon;
  label: string;
  to: string;
  onClick?: () => void;
}

export function NavItem({ icon: Icon, label, to, onClick }: NavItemProps) {
  return (
    <Link
      to={to}
      onClick={onClick}
      className="flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors text-sm font-medium text-muted-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
      activeProps={{
        className:
          "bg-sidebar text-sidebar-accent-foreground font-semibold shadow-sm",
      }}
      activeOptions={to === "/" ? { exact: true } : {}}
    >
      <Icon size={20} />
      <span>{label}</span>
    </Link>
  );
}
