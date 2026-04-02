import { fmtHours, portfolioHours } from "@/data/portfolio-hours";
import type { ProjectStripBlockData } from "@/data/project-strip";

export const researchBlock = {
  title: "Pesquisa · IFRN",
  stats: `4 projetos · ~${fmtHours(portfolioHours.research)} h · SUAP`,
  items: [
    {
      id: "res-aprendizagem-visivel",
      title: "Aprendizagem visível - fluxos e monitoramento",
      meta: "Plataforma para visualizar aprendizagem; metodologia mista com docentes. PROPI/IFRN 04/2025 · ZN",
      tags: [
        { label: "Concluído", tone: "success" },
        { label: "PROPI", tone: "muted" },
      ],
    },
    {
      id: "res-siglos",
      title: "SiGLOS - gamificação SEMENTE",
      meta: "De stack web clássica (2023) a Next.js, NestJS, TS, MySQL - produção. PROPI/IFRN 01/2025 · ZN · 4 h/semana · 09/2025-01/2026 · declaração SUAP",
      tags: [
        { label: "Concluído", tone: "success" },
        { label: "PROPI", tone: "muted" },
      ],
    },
    {
      id: "res-mapgas",
      title: "Mapgas - qualidade da gasolina",
      meta: "Dados de postos (ANP); foco Zona Norte de Natal e regiões vizinhas. PROPI/IFRN 04/2023 · ZN · 4 h/semana · 06/2023-12/2023 · declaração SUAP",
      tags: [
        { label: "Concluído", tone: "success" },
        { label: "PROPI", tone: "muted" },
      ],
    },
    {
      id: "res-bibliotecas",
      title: "Bibliotecas e repositórios IFRN",
      meta: "Sistemas de informação para bibliotecas, repositórios e arquivos. PIBIC/CNPq PROPI/IFRN 20/2025 · ZN · 10 h/semana · 09/2025-08/2026 · declaração SUAP",
      tags: [
        { label: "Em execução", tone: "info" },
        { label: "PIBIC/CNPq", tone: "violet" },
      ],
    },
  ],
} satisfies ProjectStripBlockData;
