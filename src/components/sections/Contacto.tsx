import { siteConfig } from "@/data/site";

export function Contacto() {
  return (
    <footer id="contato" className="site-footer">
      <h2 className="landing-slide__mega">Contacto</h2>
      <div className="landing-slide__inner">
        <ul className="contact-social" aria-label="Redes e contacto">
          <li>
            <a
              className="contact-social__link"
              href={siteConfig.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-linkedin" aria-hidden="true" />{" "}
              LinkedIn
            </a>
          </li>
          <li>
            <a
              className="contact-social__link"
              href={siteConfig.social.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-github" aria-hidden="true" /> GitHub
            </a>
          </li>
          <li>
            <a
              className="contact-social__link"
              href={`mailto:${siteConfig.email}`}
            >
              <i className="fa-solid fa-envelope" aria-hidden="true" /> Mail
            </a>
          </li>
          <li>
            <a
              className="contact-social__link"
              href="https://www.instagram.com/clayto.nr/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-instagram" aria-hidden="true" />{" "}
              Instagram
            </a>
          </li>
        </ul>
        <p className="site-footer__cta">
          Disponível para <strong>oportunidades</strong> e colaborações.
        </p>
        <p className="site-footer__copy">
          © 2026 · Clayton Rennan · {siteConfig.location} · IFRN
        </p>
      </div>
    </footer>
  );
}
