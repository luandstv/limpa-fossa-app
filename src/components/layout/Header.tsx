import { Bell, Search } from "lucide-react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { ModeToggle } from "../mode-toggle";

import { Logo } from "../Logo";
import { UserNav } from "../UserNav";

interface HeaderProps {
  mobileTrigger?: React.ReactNode;
}

export function Header({ mobileTrigger }: HeaderProps) {
  return (
    <header className="sticky top-0 z-30 flex h-16 items-center gap-4 border-b border-border bg-background/95 px-6 backdrop-blur supports-backdrop-filter:bg-background/60">
      <div className="flex flex-1 items-center gap-4 md:gap-8">
        {mobileTrigger && (
          <div className="md:hidden flex items-center">{mobileTrigger}</div>
        )}

        <div className="flex items-center gap-2 md:hidden">
          <Logo />
        </div>

        <form className="hidden md:flex flex-1 max-w-sm relative ml-auto md:ml-0">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Buscar ordens, clientes..."
            className="pl-9 bg-muted/50 border-none focus-visible:ring-1 focus-visible:ring-primary focus-visible:bg-background transition-all"
          />
        </form>
      </div>

      <div className="flex items-center gap-2 md:gap-4">
        <ModeToggle />

        <Button
          variant="ghost"
          size="icon"
          className="text-muted-foreground hover:text-foreground relative"
        >
          <Bell className="h-5 w-5" />
          {/* Bolinha de notificação (Hardcoded para exemplo) */}
          <span className="absolute top-2.5 right-2.5 h-2 w-2 rounded-full bg-primary animate-pulse" />
        </Button>

        <UserNav />
      </div>
    </header>
  );
}
