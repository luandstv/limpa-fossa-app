import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Slider } from "@/components/ui/slider";
import { Textarea } from "@/components/ui/textarea";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Calculator, Info, Save } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/orders/newOrder")({
  component: NewOrderPage,
});

function NewOrderPage() {
  const [hoseLength, setHoseLength] = useState(50);
  // --- DEFINIÇÃO DA REGRA DE NEGÓCIO ---
  const BASE_PRICE = 800; // Preço fixo do serviço
  const BASE_DISTANCE = 50; // Metragem inclusa (grátis)
  const EXTENSION_PRICE = 50; // Preço por extensão
  const EXTENSION_BLOCK = 10; // Tamanho da extensão (10m)

  const extraMeters = Math.max(0, hoseLength - BASE_DISTANCE);

  const extensionsCount = Math.ceil(extraMeters / EXTENSION_BLOCK);

  const extraCost = extensionsCount * EXTENSION_PRICE;

  const formatMoney = (val: number) =>
    new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(val);

  const totalOrderValue = BASE_PRICE + extraCost;

  const hasExtraCharge = extensionsCount > 0;
  return (
    <div className="flex flex-col gap-8 max-w-7xl mx-auto pb-10">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-border/40 pb-4 sm:pb-6">
        <div className="flex items-center gap-3 sm:gap-4">
          <Button
            variant="outline"
            size="icon"
            asChild
            className="h-9 w-9 sm:h-10 sm:w-10 shrink-0"
          >
            <Link to="/orders">
              <ArrowLeft className="h-4 w-4 sm:h-5 sm:w-5" />
            </Link>
          </Button>
          <div>
            <h2 className="text-xl sm:text-3xl font-bold tracking-tight text-foreground">
              Nova Ordem
            </h2>

            <p className="text-muted-foreground hidden sm:block">
              Preencha os dados para gerar o orçamento.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3 w-full sm:w-auto">
          <Button variant="outline" className="flex-1 sm:hidden">
            Cancelar
          </Button>

          <Button variant="ghost" className="hidden sm:inline-flex">
            Cancelar
          </Button>

          <Button className="flex-1 sm:flex-none bg-primary text-primary-foreground hover:bg-primary/90 gap-2 sm:min-w-[140px] shadow-lg shadow-primary/20">
            <Save className="h-4 w-4" />
            <span>Salvar OS</span>
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* --- COLUNA DA ESQUERDA (Formulário) --- */}
        <div className="lg:col-span-8 space-y-6">
          {/* Card: Dados do Cliente */}
          <Card>
            <CardHeader>
              <CardTitle>Dados do Cliente</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="client">Nome do Cliente / Empresa</Label>
                  <Input id="client" placeholder="Ex: Condomínio Solar" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Telefone / WhatsApp</Label>
                  <Input id="phone" placeholder="(71) 99999-9999" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="address">Endereço Completo</Label>
                <Input
                  id="address"
                  placeholder="Rua, Número, Bairro, Referência"
                />
              </div>
            </CardContent>
          </Card>

          {/* Card: Detalhes do Serviço (COM CÁLCULO) */}
          <Card>
            <CardHeader>
              <CardTitle>Detalhes do Serviço</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Tipo de Serviço</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione..." />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="fossa">Limpeza de Fossa</SelectItem>
                      <SelectItem value="gordura">Caixa de Gordura</SelectItem>
                      <SelectItem value="hidro">Hidrojateamento</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>Caminhão</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione o veículo..." />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="vw">
                        VW Constellation (12m³)
                      </SelectItem>
                      <SelectItem value="mb">Mercedes Accelo (8m³)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <Separator />

              {/* Lógica da Mangueira */}
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <Label className="text-base font-semibold flex items-center gap-2">
                    Distância da Mangueira (Metros)
                    <Info className="h-4 w-4 text-muted-foreground cursor-help" />
                  </Label>
                  <div className="flex items-center gap-2">
                    <Input
                      type="number"
                      value={hoseLength}
                      onChange={(e) => setHoseLength(Number(e.target.value))}
                      className="w-20 text-right font-mono font-bold"
                    />
                    <span className="text-sm text-muted-foreground">
                      metros
                    </span>
                  </div>
                </div>

                <Slider
                  value={[hoseLength]}
                  onValueChange={(val) => setHoseLength(val[0])}
                  max={150}
                  step={1}
                  className="py-4"
                />

                {/* Feedback Visual do Cálculo */}

                <div
                  className={`p-4 rounded-lg border flex items-start gap-3 transition-colors duration-300 
                    ${
                      hasExtraCharge
                        ? "bg-destructive/10 border-destructive/20" // Alerta sutil usando a cor do tema
                        : "bg-muted/40 border-border" // Neutro usando a cor do tema
                    }`}
                >
                  <Calculator
                    className={`h-5 w-5 mt-0.5 ${hasExtraCharge ? "text-destructive" : "text-primary"}`}
                  />
                  <div className="text-sm">
                    <p className="font-medium text-foreground">
                      Status da Mangueira:{" "}
                      <span
                        className={
                          hasExtraCharge
                            ? "text-destructive font-bold"
                            : "text-primary font-bold"
                        }
                      >
                        {extensionsCount > 0
                          ? "Cobrança Adicional"
                          : "Dentro do Limite"}
                      </span>
                    </p>
                    <p className="text-muted-foreground mt-1 text-xs sm:text-sm">
                      Incluso até {BASE_DISTANCE}m. Excedente: +
                      {formatMoney(EXTENSION_PRICE)} a cada {EXTENSION_BLOCK}m.
                      {/* Mostra detalhes se tiver excedente */}
                      {hasExtraCharge && (
                        <span className="block mt-2 font-semibold text-destructive">
                          Passou {extraMeters}m (+ {extensionsCount} extensões)
                        </span>
                      )}
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* --- COLUNA DA DIREITA (Resumo e Notas) --- */}
        <div className="lg:col-span-4 space-y-6 sticky top-6">
          <Card className="bg-muted/30">
            <CardHeader>
              <CardTitle className="text-lg">Observações</CardTitle>
            </CardHeader>
            <CardContent>
              <Textarea
                placeholder="Digite observações internas sobre o serviço..."
                className="min-h-37.5 bg-background"
              />
            </CardContent>
          </Card>

          <Card className="border-primary/20 shadow-[0_0_15px_rgba(10,163,240,0.1)]">
            <CardHeader>
              <CardTitle className="text-lg text-primary">
                Resumo Estimado
              </CardTitle>
              <CardDescription>Prévia do orçamento</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              {/* Valor Base */}
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">
                  Serviço Base ({BASE_DISTANCE}m)
                </span>
                <span>{formatMoney(BASE_PRICE)}</span>
              </div>

              {/* Valor Adicional (Lógica Condicional) */}
              <div
                className={`flex justify-between text-sm transition-colors ${hasExtraCharge ? "text-destructive font-medium" : "text-muted-foreground"}`}
              >
                <span className="flex items-center gap-2">
                  Adicional Mangueira
                  {hasExtraCharge && (
                    <span className="text-[10px] uppercase font-bold bg-destructive/10 px-1.5 py-0.5 rounded border border-destructive/20">
                      {extensionsCount}x {EXTENSION_BLOCK}m
                    </span>
                  )}
                </span>
                <span>
                  {hasExtraCharge ? `+ ${formatMoney(extraCost)}` : "Isento"}
                </span>
              </div>

              <Separator className="my-2" />

              {/* Total Final Calculado */}
              <div className="flex justify-between items-end">
                <span className="text-muted-foreground font-medium">
                  Total Estimado
                </span>
                <span className="text-xl sm:text-2xl font-bold text-foreground">
                  {formatMoney(totalOrderValue)}
                </span>
              </div>

              <Button className="w-full mt-4 bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/20">
                Confirmar Ordem
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
