import { SiteNav } from "@/components/layout/SiteNav";
import { Carreira } from "@/components/sections/Carreira";
import { Certificados } from "@/components/sections/Certificados";
import { Contacto } from "@/components/sections/Contacto";
import { ContributionHeatmap } from "@/components/sections/ContributionHeatmap";
import { Formacao } from "@/components/sections/Formacao";
import { Hero } from "@/components/sections/Hero";
import { Projetos } from "@/components/sections/Projetos";
import { Skills } from "@/components/sections/Skills";
import { Sobre } from "@/components/sections/Sobre";

export default function Home() {
  return (
    <>
      <SiteNav />
      <main className="page landing-page">
        <Hero />
        <ContributionHeatmap />
        <Sobre />
        <Formacao />
        <Carreira />
        <Certificados />
        <Skills />
        <Projetos />
        <Contacto />
      </main>
    </>
  );
}
