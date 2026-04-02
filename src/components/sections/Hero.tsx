import Image from "next/image";
import { siteConfig } from "@/data/site";

export function Hero() {
  return (
    <header id="inicio">
      <div className="header-inner">
        <div className="header-text">
          <p className="hero-eyebrow">Portfólio &amp; currículo</p>
          <h1>{siteConfig.name}</h1>
          <p className="tagline">
            Desenvolvedor Full Stack · UI/UX Designer · DevOps
          </p>
          <ul
            className="hero-stats"
            aria-label="Resumo: experiência, projetos e certificações"
          >
            <li className="hero-stat">
              <strong>5+</strong> anos em dev
            </li>
            <li className="hero-stat">
              <strong>22+</strong> projetos · <strong>14+</strong> sites em
              {"\u00A0"}
              produção
            </li>
            <li className="hero-stat">
              <strong>65+</strong> cert. · IFRN (SUAP) · Alura · Design Boost
            </li>
            <li className="hero-stat">
              Stack <strong>full cycle</strong>
            </li>
          </ul>
          <ul className="meta" aria-label="Contacto e localização">
            <li>
              <i className="fa-solid fa-location-dot" aria-hidden="true" />{" "}
              Extremoz, RN
            </li>
            <li>
              <i className="fa-solid fa-calendar" aria-hidden="true" />{" "}
              {siteConfig.birth}
            </li>
            <li>
              <i className="fa-solid fa-envelope" aria-hidden="true" />{" "}
              <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
            </li>
            <li>
              <i className="fa-brands fa-instagram" aria-hidden="true" />{" "}
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener"
              >
                @clayto.nr
              </a>
            </li>
            <li>
              <i className="fa-brands fa-github" aria-hidden="true" />{" "}
              <a href={siteConfig.social.github} target="_blank" rel="noopener">
                github.com/rtondev
              </a>
            </li>
            <li>
              <i className="fa-brands fa-linkedin" aria-hidden="true" />{" "}
              <a
                href={siteConfig.social.linkedin}
                target="_blank"
                rel="noopener"
              >
                linkedin.com/in/rtondev
              </a>
            </li>
            <li>
              <i className="fa-solid fa-graduation-cap" aria-hidden="true" />{" "}
              <a href={siteConfig.lattes} target="_blank" rel="noopener">
                Currículo Lattes (CNPq)
              </a>
            </li>
            <li className="disponivel">
              <i className="fa-solid fa-circle-check" aria-hidden="true" />{" "}
              Disponível
            </li>
          </ul>
        </div>
        <div className="photo-wrap">
          <Image
            src="/image.png"
            alt="Clayton Rennan"
            className="photo"
            width={132}
            height={132}
            priority
          />
        </div>
      </div>
    </header>
  );
}
