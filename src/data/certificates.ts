export type IfrnCertificate = {
  ch?: string;
  noCh?: boolean;
  tags: string[];
  title: string;
  meta: string;
  suapUrl: string;
  /** Segundo documento SUAP (ex.: mesmo evento, papel diferente). */
  suapUrlSecondary?: string;
};

export type IfrnCertBlock = {
  title: string;
  stats: string;
  items: IfrnCertificate[];
};

export const ifrnCertBlocks: IfrnCertBlock[] = [
  {
    title: "Palestras e cursos · IFRN (SUAP)",
    stats: "29h · 6 certificados",
    items: [
      {
        ch: "2h",
        tags: ["Participou"],
        title:
          'Palestra "Expresso de Hogwarts: Descobrindo o mundo mágico" (2ª edição)',
        meta: "17/08/2022 · DIAC/ZN",
        suapUrl: "https://suap.ifrn.edu.br/eventos/download/cd6f4e8e6155808a/",
      },
      {
        ch: "3h",
        tags: ["Participou"],
        title: "Formação para Comissão de Mídias",
        meta: "10/11/2022 · DIAC/ZN",
        suapUrl: "https://suap.ifrn.edu.br/eventos/download/6cbf5edec29b95d6/",
      },
      {
        ch: "12h",
        tags: ["Participou"],
        title: "Introdução ao WordPress: HTML, CSS e site",
        meta: "29/10/2024 a 31/10/2024 · DIAC/ZN",
        suapUrl: "https://suap.ifrn.edu.br/eventos/download/01cbc24701b03322/",
      },
      {
        ch: "1h",
        tags: ["Participou"],
        title: "Operação Domine a Oratória",
        meta: "29/02/2024 · DIAC/ZN",
        suapUrl: "https://suap.ifrn.edu.br/eventos/download/9739fecaf1edbef6/",
      },
      {
        ch: "7h",
        tags: ["Participou"],
        title: "I Mostra de Extensão",
        meta: "19/10/2022 a 21/10/2022 · COEX/ZN",
        suapUrl: "https://suap.ifrn.edu.br/eventos/download/bc79cd3df7cda44a/",
      },
      {
        ch: "4h",
        tags: ["Participou"],
        title:
          "Mostra de Talentos Digitais: Projetos Inovadores dos Futuros Desenvolvedores Web",
        meta: "25/02/2025 · CTINF/ZN",
        suapUrl: "https://suap.ifrn.edu.br/eventos/download/d3dcf9ef95203ffe/",
      },
    ],
  },
  {
    title: "Organização e oficinas",
    stats: "7h45 · 3 certificados",
    items: [
      {
        ch: "6h",
        tags: ["Organizou", "Ministrou"],
        title: "Formação para Comissão de Mídias",
        meta: "10/11/2022 · DIAC/ZN · 6 h no mesmo evento (3 h organização + 3 h ministração).",
        suapUrl: "https://suap.ifrn.edu.br/eventos/download/e7a54c2cf368b234/",
        suapUrlSecondary:
          "https://suap.ifrn.edu.br/eventos/download/b58e10bb7653e050/",
      },
      {
        ch: "1h45",
        tags: ["Organizou"],
        title: 'Mesa-redonda "Preservar a natureza é preservar a vida"',
        meta: "14/12/2022 · DIAC/ZN",
        suapUrl: "https://suap.ifrn.edu.br/eventos/download/d679e9a34b5efd89/",
      },
      {
        noCh: true,
        tags: ["Ministrante de oficina"],
        title: "SECIT e SEMENTE - Edição 2024",
        meta: "15/10/2024 a 17/10/2024 · carga horária não discriminada no certificado",
        suapUrl: "https://suap.ifrn.edu.br/eventos/download/42cd1120e64d67a1/",
      },
    ],
  },
  {
    title: "Apresentações e exposições",
    stats: "48h · 5 certificados",
    items: [
      {
        ch: "5h",
        tags: ["Apresentou trabalho"],
        title: "Exposições do MEG - O Mundo Encantado da Geografia",
        meta: "19/12/2023 a 29/12/2023 · DIAC/ZN",
        suapUrl: "https://suap.ifrn.edu.br/eventos/download/416101ae36e7f8dd/",
      },
      {
        noCh: true,
        tags: ["Participou"],
        title:
          "Interligando Saberes: Exposições do MEG - O Mundo Encantado da Geografia",
        meta: "25/02/2025 a 27/02/2025 · DIAC/ZN · carga horária não preenchida no SUAP",
        suapUrl: "https://suap.ifrn.edu.br/eventos/download/b768928203a70054/",
      },
      {
        ch: "5h",
        tags: ["Apresentou projeto"],
        title: "Mandala Interdisciplinar",
        meta: "09/02/2023 · DIAC/ZN",
        suapUrl: "https://suap.ifrn.edu.br/eventos/download/d78d5a22d3282fed/",
      },
      {
        ch: "36h",
        tags: ["Expositor"],
        title: "Exposição Arte em Estudo",
        meta: "24/02/2025 a 12/03/2025 · DIAC/ZN",
        suapUrl: "https://suap.ifrn.edu.br/eventos/download/d89076bc55801223/",
      },
      {
        noCh: true,
        tags: ["Autor de trabalhos"],
        title: "VII Semana de Ciência, Tecnologia e Extensão (Secitex)",
        meta: '14 a 16/10/2025 · Campus Natal-Zona Norte · carga horária não discriminada no certificado único. Trabalhos: plataforma digital (gamificação / Semana do Meio Ambiente - SEMENTE, pôster CONGIC); "Semeando crônicas para um novo amanhã" (X Mostra Tecnológica).',
        suapUrl: "https://suap.ifrn.edu.br/eventos/download/cc70711cee25dff2/",
      },
    ],
  },
  {
    title: "Voluntariado",
    stats: "50h · 2 certificados",
    items: [
      {
        ch: "30h",
        tags: ["Voluntário"],
        title: "Semana do Meio Ambiente (organização e execução)",
        meta: "14/12/2022 a 16/12/2022 · DIAC/ZN",
        suapUrl: "https://suap.ifrn.edu.br/eventos/download/5021245103077256/",
      },
      {
        ch: "20h",
        tags: ["Voluntário"],
        title: "Semana do Meio Ambiente - SEMENTE 2025",
        meta: "04/06/2025 a 06/06/2025 · DIAC/ZN",
        suapUrl: "https://suap.ifrn.edu.br/eventos/download/1cd00217a464a324/",
      },
    ],
  },
];
