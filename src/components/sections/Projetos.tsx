import {
  extensionProjects,
  productionSites,
  researchProjects,
} from "@/data/projects";

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
          22+ projetos no portfólio - 14+ sites em produção, 4 extensão e 4
          pesquisa (IFRN), tudo num só sítio.
        </p>

        <p className="subtitle-landing">
          Sites em produção{" "}
          <span className="subtitle-landing__count" title="Sites com link">
            14
          </span>
        </p>
        <div className="grid">
          {productionSites.map((s) => (
            <a
              key={s.href}
              className="chip chip-link"
              href={s.href}
              target="_blank"
              rel="noopener"
            >
              <i className="fa-solid fa-globe" aria-hidden="true" /> {s.label}
              <i
                className="fa-solid fa-arrow-up-right-from-square chip-link__icon"
                aria-hidden="true"
              />
            </a>
          ))}
        </div>

        <p className="subtitle-landing">
          Extensão (IFRN){" "}
          <span
            className="subtitle-landing__count"
            title="Projetos de extensão"
          >
            4
          </span>
        </p>
        <div className="grid">
          {extensionProjects.map((p) => (
            <span key={p.label} className="chip">
              <i className={`fa-solid ${p.icon}`} aria-hidden="true" />{" "}
              {p.label}
            </span>
          ))}
        </div>

        <p className="subtitle-landing">
          Pesquisa (IFRN){" "}
          <span
            className="subtitle-landing__count"
            title="Projetos de pesquisa"
          >
            4
          </span>
        </p>
        <p
          className="bio bio--short proj-research-ch-total"
          title="Estimativa: duração de cada projeto (declarações SUAP) × carga horária semanal — SiGLOS, Mapgas e Bibliotecas."
        >
          <i className="fa-solid fa-clock" aria-hidden="true" />
          <strong>Somatório de horas (pesquisa IFRN):</strong>{" "}
          <strong>~715 h</strong>
        </p>
        {researchProjects.map((r) => (
          <div key={r.title} className="proj-research-group">
            <p className="proj-research-title">
              <i className={`fa-solid ${r.icon}`} aria-hidden="true" />{" "}
              {r.title}
            </p>
            <p className="bio bio--short">{r.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
