import { createRootRoute, Outlet } from "@tanstack/react-router";

import { Sidebar } from "@/components/layout/Sidebar";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { Header } from "@/components/layout/Header";

export const Route = createRootRoute({
  component: () => {
    const [isMobileOpen, setIsMobileOpen] = useState(false);

    return (
      <div className="flex h-screen w-full overflow-hidden bg-backgroud text-foreground">
        <aside className="hidden md:flex w-64 flex-col shrink-0 border-r border-sidebar-border">
          <Sidebar className="h-full" />
        </aside>

        <main className="flex-1 flex flex-col h-full overflow-hidden relative">
          <Sheet open={isMobileOpen} onOpenChange={setIsMobileOpen}>
            <Header
              mobileTrigger={
                <SheetTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className=" md:hidden shrink-0 text-muted-foreground hover:text-foreground"
                  >
                    <Menu className="h-5 w-5" />
                    <span className="sr-only">Abrir menu</span>
                  </Button>
                </SheetTrigger>
              }
            />

            <SheetContent
              side="left"
              className="p-0 w-72 border-r-sidebar-border bg-sidebar text-sidebar-foreground"
            >
              <Sidebar onLinkClick={() => setIsMobileOpen(false)} />
            </SheetContent>
          </Sheet>

          <div className="flex-1 overflow-y-auto no-scrollbar">
            <div className="p-4 md:p-8 mx-auto max-w-7xl h-full">
              <Outlet />
            </div>
          </div>
        </main>

        {/* <TanStackRouterDevtools /> */}
      </div>
    );
  },
});
