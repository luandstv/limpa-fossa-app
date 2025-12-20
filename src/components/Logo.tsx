import { Droplets } from "lucide-react";

export function Logo() {
  return (
    <>
      <div className="flex items-center gap-3 px-2">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/20 text-primary">
          <Droplets className="h-6 w-6" />
        </div>
        <div className="flex flex-col">
          <h1 className="text-base font-bold leading-tight text-foreground">
            <span className="text-sidebar-primary">JW</span> Limpa Fossa
          </h1>
          <p className="text-xs font-normal text-muted-foreground">
            Gestão de Serviços
          </p>
        </div>
      </div>
    </>
  );
}
