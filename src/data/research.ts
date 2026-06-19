import { fmtHours, portfolioHours } from "@/data/portfolio-hours";
import type { ProjectStripBlockData } from "@/data/project-strip";

export const researchBlock = {
  title: "Pesquisa · IFRN",
  stats: `4 projetos · ~${fmtHours(portfolioHours.research)} h · SUAP`,
  items: [
    {
      id: "res-bibliotecas",
      title: "Bibliotecas e repositórios IFRN",
      meta: "Sistemas de informação para bibliotecas, repositórios e arquivos institucionais.",
      tags: [
        { label: "Em execução", tone: "info" },
        { label: "PIBIC/CNPq", tone: "violet" },
      ],
    },
    {
      id: "res-aprendizagem-visivel",
      title: "Aprendizagem visível",
      meta: "Plataforma para monitorar e visualizar aprendizagem com docentes; metodologia mista no campus ZN.",
      tags: [
        { label: "Concluído", tone: "success" },
        { label: "PROPI", tone: "muted" },
      ],
    },
    {
      id: "res-siglos",
      title: "SiGLOS · gamificação SEMENTE",
      meta: "Evolução de stack clássica para Next.js, NestJS, TypeScript e MySQL em produção.",
      tags: [
        { label: "Concluído", tone: "success" },
        { label: "PROPI", tone: "muted" },
      ],
    },
    {
      id: "res-mapgas",
      title: "Mapgas · qualidade da gasolina",
      meta: "Dados de postos (ANP) com foco na Zona Norte de Natal e regiões vizinhas.",
      tags: [
        { label: "Concluído", tone: "success" },
        { label: "PROPI", tone: "muted" },
      ],
    },
  ],
} satisfies ProjectStripBlockData;
