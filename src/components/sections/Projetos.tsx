import { ExtensionBlock } from "@/components/extension/ExtensionBlock";
import { ResearchBlock } from "@/components/research/ResearchBlock";
import { SitesBlock } from "@/components/sites/SitesBlock";
import { extensionBlock } from "@/data/extension";
import { fmtHours, portfolioHoursTotal } from "@/data/portfolio-hours";
import { productionSitesBlock } from "@/data/production-sites";
import { researchBlock } from "@/data/research";

export function Projetos() {
  return (
    <section
      id="projetos"
      className="landing-slide landing-slide--dark section-research"
      aria-labelledby="heading-projetos"
    >
      <h2 id="heading-projetos" className="landing-slide__mega">
        Projetos
      </h2>
      <div className="landing-slide__inner">
        <p className="bio bio--short mb-[0.85rem]">
          {`22+ projetos no portfólio no total, somando produção, extensão, pesquisa e projetos pessoais (~${fmtHours(portfolioHoursTotal)} h no conjunto): 14+ em produção, 7 registos de extensão e 4 de pesquisa no IFRN.`}
        </p>

        <SitesBlock block={productionSitesBlock} />

        <ExtensionBlock block={extensionBlock} />

        <ResearchBlock block={researchBlock} />
      </div>
    </section>
  );
}
