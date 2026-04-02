import { fmtHours, portfolioHours } from "@/data/portfolio-hours";
import type { ProjectStripBlockData } from "@/data/project-strip";

export const extensionBlock = {
  title: "Extensão · IFRN",
  stats: `7 registos PROEX · ~${fmtHours(portfolioHours.extension)} h · SUAP`,
  items: [
    {
      id: "ext-semeando-cronicas-2025",
      title: "Semeando crônicas para um novo amanhã",
      meta: "Bolsista · EDITAL 03/2025 PROEX/IFRN · 9 jun. 2025 a 19 dez. 2025 · 551 h. Certificado SUAP · verificador 96f8b8",
      tags: [
        { label: "Concluído", tone: "success" },
        { label: "Bolsista", tone: "violet" },
        { label: "PROEX", tone: "muted" },
      ],
    },
    {
      id: "ext-design-micro-2024",
      title: "Produção design digital para micro e pequenos negócios",
      meta: "Bolsista · EDITAL 01/2024 PROEX/IFRN · 8 jul. 2024 a 8 fev. 2025 · 614 h. Certificado SUAP · verificador 36cbbf",
      tags: [
        { label: "Concluído", tone: "success" },
        { label: "Bolsista", tone: "violet" },
        { label: "PROEX", tone: "muted" },
      ],
    },
    {
      id: "ext-awe-decl-2024",
      title: "Agência Web Escolar (declaração de participação)",
      meta: "16 abr. 2024 a 8 mar. 2025 · 698 h/aula · EDITAL 10/2024-PROEX/IFRN. Declaração SUAP · verificador ad398e",
      tags: [
        { label: "Concluído", tone: "success" },
        { label: "Declaração", tone: "info" },
        { label: "PROEX", tone: "muted" },
      ],
    },
    {
      id: "ext-artefatos-design-2023",
      title:
        "Produção de artefatos em design digital (micro e pequenos negócios)",
      meta: "Bolsista · EDITAL 03/2023-PROEX/IFRN · 9 jun. a 29 dez. 2023 · 580 h. Certificado SUAP · verificador ac5ca7",
      tags: [
        { label: "Concluído", tone: "success" },
        { label: "Bolsista", tone: "violet" },
        { label: "PROEX", tone: "muted" },
      ],
    },
    {
      id: "ext-semente-2022",
      title: "SEMENTE: a ZN se lança à terra para germinar",
      meta: "Colaborador voluntário · EDITAL 01/2022 PROEX/IFRN · 1 set. 2022 a 31 mar. 2023 · 452 h. Certificado SUAP · verificador 292d0b",
      tags: [
        { label: "Concluído", tone: "success" },
        { label: "Voluntário", tone: "warning" },
        { label: "PROEX", tone: "muted" },
      ],
    },
    {
      id: "ext-awe-vol-2022",
      title: "Agência Web Escolar",
      meta: "Colaborador voluntário · EDITAL 04/2022-PROEX/IFRN · 1 ago. a 30 nov. 2022 · 69 h. Certificado SUAP · verificador 956e67",
      tags: [
        { label: "Concluído", tone: "success" },
        { label: "Voluntário", tone: "warning" },
        { label: "PROEX", tone: "muted" },
      ],
    },
    {
      id: "ext-awe-bol-2022",
      title: "Agência Web Escolar",
      meta: "Bolsista · EDITAL 04/2022-PROEX/IFRN · 1 dez. 2022 a 31 jan. 2023 · 130 h. Certificado SUAP · verificador 956e67",
      tags: [
        { label: "Concluído", tone: "success" },
        { label: "Bolsista", tone: "violet" },
        { label: "PROEX", tone: "muted" },
      ],
    },
  ],
} satisfies ProjectStripBlockData;
