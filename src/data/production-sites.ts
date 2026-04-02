import { fmtHours, portfolioHours } from "@/data/portfolio-hours";
import type { ProjectStripBlockData } from "@/data/project-strip";

const live = { label: "Live", tone: "success" as const };

export const productionSitesBlock = {
  title: "Sites em produção",
  stats: `14 domínios · HTTPS · ~${fmtHours(portfolioHours.production)} h`,
  items: [
    {
      id: "fluxomed",
      title: "fluxomed.com",
      meta: "Produto web na área de saúde / bem-estar; stack full stack em produção.",
      tags: [live],
      href: "https://fluxomed.com/",
    },
    {
      id: "fluxofit",
      title: "fluxofit.com.br",
      meta: "Site e fluxos para fitness e acompanhamento; front e deploy contínuos.",
      tags: [live],
      href: "https://fluxofit.com.br/",
    },
    {
      id: "tradeclub",
      title: "tradeclub.xyz",
      meta: "Experiência web para comunidade e produto ligado a trading / crypto.",
      tags: [live],
      href: "https://tradeclub.xyz/",
    },
    {
      id: "i9chain",
      title: "i9chain.com",
      meta: "Presença web do projeto i9chain; integrações e interface em produção.",
      tags: [live],
      href: "https://i9chain.com/",
    },
    {
      id: "sementeifzn",
      title: "sementeifzn.site",
      meta: "Site do SEMENTE IFZN - extensão e divulgação no campus Zona Norte.",
      tags: [live],
      href: "https://sementeifzn.site/",
    },
    {
      id: "ifcalc",
      title: "ifcalc.org",
      meta: "Ferramenta / calculadora web para uso académico e público IF.",
      tags: [live],
      href: "https://ifcalc.org/",
    },
    {
      id: "anamnese",
      title: "anamneseempreendedor.com.br",
      meta: "Fluxo de anamnese e formulários para empreendedorismo e cadastro.",
      tags: [live],
      href: "https://anamneseempreendedor.com.br/",
    },
    {
      id: "mundomeg",
      title: "mundomeg.com.br",
      meta: "MEG - Mundo Encantado da Geografia; conteúdo e vitrine do projeto.",
      tags: [live],
      href: "https://mundomeg.com.br/",
    },
    {
      id: "reability",
      title: "reabilitycenter.com.br",
      meta: "Site institucional Reability Center; páginas e contacto em produção.",
      tags: [live],
      href: "https://reabilitycenter.com.br/",
    },
    {
      id: "insppe",
      title: "app.insppepesquisas.com.br",
      meta: "Aplicação web de pesquisas INSPPE; formulários e painéis em uso.",
      tags: [live],
      href: "https://www.app.insppepesquisas.com.br/",
    },
    {
      id: "pigbit",
      title: "pigbit.site",
      meta: "Projeto web Pigbit; landing e recursos públicos no ar.",
      tags: [live],
      href: "https://pigbit.site/",
    },
    {
      id: "meiamaratona",
      title: "meiamaratonaprf191.com.br",
      meta: "Site de evento (meia maratona PRF) - inscrições e informações.",
      tags: [live],
      href: "https://meiamaratonaprf191.com.br/",
    },
    {
      id: "ifbrain",
      title: "ifbrain.vercel.app",
      meta: "Front IFBrain no Vercel; interface ligada a projeto académico IF.",
      tags: [live],
      href: "https://ifbrain.vercel.app/",
    },
    {
      id: "sicat",
      title: "sicat-front.vercel.app",
      meta: "Front SICAT (Vercel) - UI em produção para o ecossistema do projeto.",
      tags: [live],
      href: "https://sicat-front.vercel.app/",
    },
  ],
} satisfies ProjectStripBlockData;
