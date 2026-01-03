import { Badge } from "./ui/badge";

export function StatusBadge({ status }: { status: string }) {
  const styles: Record<string, string> = {
    Concluído: "bg-emerald-500/15 text-emerald-600 border-emerald-500/20",
    Pendente: "bg-amber-500/15 text-amber-600 border-amber-500/20",
    "Em Andamento": "bg-blue-500/15 text-blue-600 border-blue-500/20",
    Cancelado: "bg-slate-500/15 text-slate-600 border-slate-500/20",
  };
  return (
    <Badge variant="outline" className={`border ${styles[status]}`}>
      {status}
    </Badge>
  );
}
