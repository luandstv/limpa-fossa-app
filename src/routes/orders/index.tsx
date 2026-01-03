import { StatusBadge } from "@/components/StatusBadge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Filter, MoreHorizontal, Plus, Search } from "lucide-react";

export const Route = createFileRoute("/orders/")({
  component: OrdersList,
});

const orders = [
  {
    id: "#1023",
    client: "Condomínio Solar",
    service: "Limpeza de Fossa",
    status: "Pendente",
    date: "12/10/2023",
    value: "R$ 1.200",
  },
  {
    id: "#1022",
    client: "Restaurante Bom Sabor",
    service: "Desentupimento",
    status: "Em Andamento",
    date: "12/10/2023",
    value: "R$ 450",
  },
  {
    id: "#1021",
    client: "Residência João Silva",
    service: "Hidrojateamento",
    status: "Concluído",
    date: "11/10/2023",
    value: "R$ 890",
  },
  {
    id: "#1020",
    client: "Hotel Miramar",
    service: "Manutenção",
    status: "Concluído",
    date: "10/10/2023",
    value: "R$ 2.500",
  },
  {
    id: "#1019",
    client: "Clínica Saúde",
    service: "Limpeza Cx Gordura",
    status: "Cancelado",
    date: "09/10/2023",
    value: "R$ 600",
  },
  {
    id: "#1018",
    client: "Escola Aprender",
    service: "Limpeza Geral",
    status: "Pendente",
    date: "08/10/2023",
    value: "R$ 1.500",
  },
];

function OrdersList() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-foreground">
            Ordens de Serviço
          </h2>
          <p className="text-muted-foreground">
            Gerencie todas as solicitações em um só lugar.
          </p>
        </div>
        <Button
          asChild
          className="bg-primary text-primary-foreground hover:bg-primary/90"
        >
          <Link to="/orders/newOrder">
            <Plus className="mr-2 h-4 w-4" /> Nova Ordem
          </Link>
        </Button>
      </div>

      <div className="flex items-center gap-2 bg-card p-4 rounded-lg border border-border shadow-sm">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Buscar por cliente ou ID..." className="pl-9" />
        </div>
        <Button variant="outline" className="gap-2">
          <Filter className="h-4 w-4" />
          Filtros
        </Button>
      </div>

      <div className="rounded-md border border-border bg-card">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">OS Nº</TableHead>
              <TableHead>Cliente</TableHead>
              <TableHead>Serviço</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Data</TableHead>
              <TableHead className="text-right">Valor</TableHead>
              <TableHead className="w-[50px]"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {orders.map((order) => (
              <TableRow key={order.id}>
                <TableCell className="font-mono font-medium">
                  {order.id}
                </TableCell>
                <TableCell className="font-medium">{order.client}</TableCell>
                <TableCell className="text-muted-foreground">
                  {order.service}
                </TableCell>
                <TableCell>
                  <StatusBadge status={order.status} />
                </TableCell>
                <TableCell className="text-muted-foreground">
                  {order.date}
                </TableCell>
                <TableCell className="text-right font-medium">
                  {order.value}
                </TableCell>
                <TableCell>
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="#" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#" isActive>
              1
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">2</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">3</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href="#" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
}
