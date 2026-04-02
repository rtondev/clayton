import { StripBlock } from "@/components/projects/StripBlock";
import type { ProjectStripBlockData } from "@/data/project-strip";

export function ExtensionBlock({ block }: { block: ProjectStripBlockData }) {
  return (
    <StripBlock
      block={block}
      variantClass="cert-block--extension"
      scrollAriaLabel="Controlos de rolagem da lista de extensão"
      prevAriaLabel="Projetos de extensão anteriores"
      nextAriaLabel="Projetos de extensão seguintes"
    />
  );
}
