import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { StatusBadge } from "../StatusBadge";

// Dados Fakes para visualização
const orders = [
  {
    id: "#1023",
    client: "Condomínio Solar",
    service: "Limpeza de Fossa",
    status: "Pendente",
    amount: "R$ 1.250",
  },
  {
    id: "#1022",
    client: "Restaurante Bom Sabor",
    service: "Desentupimento",
    status: "Em Andamento",
    amount: "R$ 450",
  },
  {
    id: "#1021",
    client: "Residência João Silva",
    service: "Hidrojateamento",
    status: "Concluído",
    amount: "R$ 890",
  },
  {
    id: "#1020",
    client: "Hotel Miramar",
    service: "Manutenção Preventiva",
    status: "Concluído",
    amount: "R$ 2.500",
  },
  {
    id: "#1019",
    client: "Clínica Saúde",
    service: "Limpeza Cx Gordura",
    status: "Cancelado",
    amount: "R$ 600",
  },
];

export function RecentOrders() {
  return (
    // Col-span-4 significa que vai ocupar 4 colunas no grid largo
    <Card className="col-span-1 lg:col-span-4 border-border">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Últimas Solicitações</CardTitle>
        <Button
          variant="ghost"
          size="sm"
          asChild
          className="text-primary hover:text-primary/80 hover:bg-primary/10"
        >
          <Link to="/orders">
            Ver todas <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow className="border-border hover:bg-transparent">
              <TableHead className="w-[80px]">ID</TableHead>
              <TableHead>Cliente</TableHead>
              <TableHead className="hidden md:table-cell">Serviço</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Valor</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {orders.map((order) => (
              <TableRow
                key={order.id}
                className="border-border hover:bg-muted/50"
              >
                <TableCell className="font-mono text-xs font-medium">
                  {order.id}
                </TableCell>
                <TableCell className="font-medium">{order.client}</TableCell>
                <TableCell className="hidden md:table-cell text-muted-foreground">
                  {order.service}
                </TableCell>
                <TableCell>
                  <StatusBadge status={order.status} />
                </TableCell>
                <TableCell className="text-right font-medium">
                  {order.amount}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
