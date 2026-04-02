import { StripBlock } from "@/components/projects/StripBlock";
import type { ProjectStripBlockData } from "@/data/project-strip";

export function ResearchBlock({ block }: { block: ProjectStripBlockData }) {
  return (
    <StripBlock
      block={block}
      variantClass="cert-block--research"
      scrollAriaLabel="Controlos de rolagem da lista de pesquisa"
      prevAriaLabel="Projetos de pesquisa anteriores"
      nextAriaLabel="Projetos de pesquisa seguintes"
    />
  );
}
