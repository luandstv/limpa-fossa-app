# Limpa Fossa App

Aplicação web moderna para gerenciamento de serviços de limpeza de fossas e desentupimento, desenvolvida com React, TypeScript e Vite.

## 🚀 Funcionalidades

O sistema oferece um fluxo completo para gestão de atendimentos:

### 📊 Dashboard Administrativo
- **KPIs em Tempo Real**: Monitoramento de Faturamento, Total de OS, Equipes em Campo e Taxa de Conversão.
- **Últimas Solicitações**: Tabela interativa com status e valores dos serviços recentes.

### 🛠️ Gestão de Serviços
- **Nova Ordem Inteligente**: Formulário com calculadora de orçamento integrada. O preço é ajustado automaticamente com base na metragem da mangueira e extensões necessárias.
- **Listagem de OS**: Filtros por busca textual e paginação integrada.
- **Status Visual**: Badges coloridos (Pendente, Em Andamento, Concluído, Cancelado) para rápida identificação.

### 🎨 Design System & UI
- **Tailwind CSS v4**: Configuração moderna utilizando `@theme inline` e variáveis CSS nativas.
- **Dark Mode First**: Interface projetada com paleta `oklch` para alto contraste e conforto visual.
- **Componentes**: Biblioteca de componentes reutilizáveis (StatsCard, StatusBadge, Pagination, Select).

## 🛠️ Tecnologias

- **Core**: React, TypeScript, Vite
- **Estilização**: Tailwind CSS v4, Lucide React (Ícones)
- **Roteamento**: TanStack Router
- **Componentes**: Radix UI (via componentes base)

## 📦 Instalação e Execução

1. Clone o repositório.
2. Instale as dependências:
   ```bash
   npm install
   ```
3. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```

## 📄 Licença
MIT
