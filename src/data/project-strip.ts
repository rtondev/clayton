export type StripTagTone =
  | "success"
  | "info"
  | "warning"
  | "muted"
  | "violet"
  | "rose";

export type ProjectStripTag = {
  label: string;
  tone: StripTagTone;
};

export type ProjectStripItem = {
  id: string;
  title: string;
  meta: string;
  tags: ProjectStripTag[];
  /** Quando definido, mostra link no cartão (ex.: sites em produção). */
  href?: string;
};

export type ProjectStripBlockData = {
  title: string;
  stats: string;
  items: ProjectStripItem[];
};
