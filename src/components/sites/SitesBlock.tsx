import { StripBlock } from "@/components/projects/StripBlock";
import type { ProjectStripBlockData } from "@/data/project-strip";

export function SitesBlock({ block }: { block: ProjectStripBlockData }) {
  return (
    <StripBlock
      block={block}
      variantClass="cert-block--sites"
      scrollAriaLabel="Controlos de rolagem da lista de sites"
      prevAriaLabel="Sites anteriores"
      nextAriaLabel="Sites seguintes"
    />
  );
}
