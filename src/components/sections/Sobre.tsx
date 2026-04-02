export function Sobre() {
  return (
    <section
      id="sobre"
      className="landing-slide landing-slide--light"
      aria-labelledby="heading-sobre"
    >
      <h2 id="heading-sobre" className="landing-slide__mega">
        Sobre mim
      </h2>
      <div className="landing-slide__inner">
        <p className="bio bio--short">
          Full stack há 5 anos - apps, sites, APIs e UI/UX, do front ao deploy e
          infra.
        </p>
        <p className="bio bio--short">
          Objetivo: crescer com o time, entregar com qualidade e aprender
          sempre.
        </p>
        <ul className="bullets-tight">
          <li>
            <i className="fa-solid fa-check" aria-hidden="true" /> IFRN ·
            extensão e pesquisa
          </li>
          <li>
            <i className="fa-solid fa-check" aria-hidden="true" /> 14+ sites em
            produção
          </li>
          <li>
            <i className="fa-solid fa-check" aria-hidden="true" /> 22+ projetos
            desenvolvidos (sites, extensão e pesquisa)
          </li>
        </ul>
      </div>
    </section>
  );
}
