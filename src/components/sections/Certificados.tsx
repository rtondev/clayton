import { CertBlock } from "@/components/cert/CertBlock";
import { ifrnCertBlocks } from "@/data/certificates";

export function Certificados() {
  return (
    <section
      id="certificados"
      className="landing-slide landing-slide--light"
      aria-labelledby="heading-certificados"
    >
      <h2 id="heading-certificados" className="landing-slide__mega">
        Certificados
      </h2>
      <div className="landing-slide__inner">
        <p className="bio bio--short">
          Eventos, cursos e extensão no{" "}
          <strong>IFRN Campus Natal Zona Norte</strong> - participação,
          organização, oficinas, palestras, exposições e autoria, com validação
          no <strong>SUAP</strong>.
        </p>
        <section className="cert-summary" aria-label="Resumo numérico">
          <span className="cert-summary__pill">
            <i className="fa-solid fa-clock" aria-hidden="true" /> ~133h com CH
            nos certificados
          </span>
          <span className="cert-summary__pill">
            <i className="fa-solid fa-certificate" aria-hidden="true" /> 17
            documentos SUAP
          </span>
          <span className="cert-summary__pill">
            <i className="fa-solid fa-layer-group" aria-hidden="true" /> +3 sem
            CH no PDF (SECIT 2024, Interligando Saberes, Secitex)
          </span>
        </section>

        <p className="subtitle-landing">
          Formação online (Alura e Design Boost)
        </p>
        <p className="bio bio--short">
          Para além do IFRN, mantenho formação contínua em plataformas
          reconhecidas - com dezenas de certificados alinhados às mesmas áreas
          de <strong>tecnologia</strong> e <strong>design</strong> que aparecem
          na secção Skills deste portfólio.
        </p>
        <div className="cert-external-grid">
          <article className="cert-card cert-card--platform cert-card--alura">
            <div className="cert-card__top">
              <h3 className="cert-card__title">
                <a
                  href="https://www.alura.com.br/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Alura
                </a>
              </h3>
              <div className="cert-card__badges">
                <span className="cert-badge cert-badge--hours">
                  32+ certificados
                </span>
              </div>
            </div>
            <p className="cert-card__meta">
              Acumulo <strong>mais de 32 certificados</strong> em formações
              distribuídas por várias frentes (programação, front, back, DevOps,
              dados, boas práticas, entre outras), em linha com a stack descrita
              neste currículo.
            </p>
            <p className="cert-card__link">
              <a
                href="https://www.alura.com.br/"
                target="_blank"
                rel="noopener noreferrer"
              >
                alura.com.br{" "}
                <i
                  className="fa-solid fa-arrow-up-right-from-square"
                  aria-hidden="true"
                />
              </a>
            </p>
          </article>
          <article className="cert-card cert-card--platform cert-card--boost">
            <div className="cert-card__top">
              <h3 className="cert-card__title">
                <a
                  href="https://www.designboost.com.br/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Design Boost
                </a>
              </h3>
              <div className="cert-card__badges">
                <span className="cert-badge cert-badge--hours">
                  18+ certificações
                </span>
              </div>
            </div>
            <p className="cert-card__meta">
              <em>Muito mais que um curso de design</em> - concluí{" "}
              <strong>mais de 18</strong> certificações focadas em fundamentos
              de design, <strong>design system</strong>, UI, princípios visuais
              e temas afins.
            </p>
            <p className="cert-card__link">
              <a
                href="https://www.designboost.com.br/"
                target="_blank"
                rel="noopener noreferrer"
              >
                designboost.com.br{" "}
                <i
                  className="fa-solid fa-arrow-up-right-from-square"
                  aria-hidden="true"
                />
              </a>
            </p>
          </article>
        </div>

        {ifrnCertBlocks.map((block) => (
          <CertBlock key={block.title} block={block} />
        ))}
      </div>
    </section>
  );
}
