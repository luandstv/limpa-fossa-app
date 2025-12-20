import {
  LayoutDashboard,
  FileText,
  Users,
  Settings,
  Droplets,
  Divide,
} from "lucide-react";
import { cn } from "@/lib/utils"; // Certifique-se de ter essa função utilitária do Shadcn
import { NavItem } from "../NavItem";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Logo } from "../Logo";
import { Separator } from "../ui/separator";

interface SidebarProps {
  className?: string;
  onLinkClick?: () => void;
}

export function Sidebar({ className, onLinkClick }: SidebarProps) {
  return (
    <aside
      className={cn(
        "flex flex-col h-full bg-sidebar-accent text-sidebar-foreground border-r border-sidebar-border",
        className
      )}
    >
      <div className="flex h-full flex-col justify-between p-4">
        <div className="flex flex-col gap-6">
          <Logo />

          <Separator />

          {/* Navigation */}
          <nav className="flex flex-col gap-1">
            <NavItem
              to="/"
              icon={LayoutDashboard}
              label="Dashboard"
              onClick={onLinkClick}
            />
            <NavItem
              to="/orders"
              icon={FileText}
              label="Ordens de Serviço"
              onClick={onLinkClick}
            />
            <NavItem
              to="/clients"
              icon={Users}
              label="Clientes"
              onClick={onLinkClick}
            />
            <NavItem
              to="/settings"
              icon={Settings}
              label="Configurações"
              onClick={onLinkClick}
            />
          </nav>
        </div>

        {/* User Profile */}

        <div className="flex items-center gap-3 border-t border-border pt-4 px-2">
          <Avatar className="h-9 w-9 border border-border">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>AD</AvatarFallback>
          </Avatar>
          <div className="flex flex-col overflow-hidden">
            <p className="text-sm font-medium text-foreground truncate">
              Jose Wilton
            </p>
            <p className="text-xs text-muted-foreground truncate">
              admin@limpafossa.com
            </p>
          </div>
        </div>
      </div>
    </aside>
  );
}
