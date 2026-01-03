import { RecentOrders } from "@/components/dashboard/RecentOrders";
import { StatsCard } from "@/components/dashboard/StatsCard";
import { createFileRoute } from "@tanstack/react-router";
import { ClipboardList, DollarSign, HardHat, TrendingUp } from "lucide-react";

export const Route = createFileRoute("/")({
  component: Dashboard,
});

function Dashboard() {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight text-foreground">
          Dashboard
        </h2>
        <p className="text-muted-foreground">
          Visão geral do sistema e métricas principais.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatsCard
          title="Total OS"
          value="142"
          icon={ClipboardList}
          description="+20% vs mês anterior"
          trend="up"
        />
        <StatsCard
          title="Faturamento"
          value="R$ 45.200"
          icon={DollarSign}
          description="Meta: R$ 50k"
          trend="up"
        />
        <StatsCard
          title="Equipes em Campo"
          value="4/6"
          icon={HardHat}
          description="2 em manutenção"
          trend="neutral"
        />
        <StatsCard
          title="Taxa de Conversão"
          value="92%"
          icon={TrendingUp}
          description="+2.4% este mês"
          trend="up"
        />
      </div>

      <div className="grid gap-4 md:grid-cols-1 lg:grid-cols-7">
        <RecentOrders />

        <div className="col-span-1 lg:col-span-3 bg-card border border-border rounded-xl p-6 shadow-sm flex flex-col items-center justify-center text-muted-foreground min-h-[300px]">
          <p>Mapa em Tempo Real</p>
          <span className="text-xs opacity-50">(Em desenvolvimento)</span>
        </div>
      </div>
    </div>
  );
}
