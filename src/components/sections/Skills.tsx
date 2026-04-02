export function Skills() {
  return (
    <section
      id="skills"
      className="landing-slide landing-slide--light"
      aria-labelledby="heading-skills"
    >
      <h2 id="heading-skills" className="landing-slide__mega">
        Skills
      </h2>
      <div className="landing-slide__inner">
        <p className="bio bio--short mb-[0.85rem]">
          Stack, ferramentas e escritório - tudo num só sítio.
        </p>
        <div className="grid grid--skills-main">
          <span className="chip">
            <i className="fa-brands fa-docker" aria-hidden="true" /> Docker
          </span>
          <span className="chip">
            <i className="fa-brands fa-react" aria-hidden="true" /> Flutter /
            Dart
          </span>
          <span className="chip">
            <i className="fa-brands fa-html5" aria-hidden="true" /> HTML /{" "}
            <i className="fa-brands fa-css3-alt" aria-hidden="true" /> CSS
          </span>
          <span className="chip">
            <i className="fa-brands fa-js" aria-hidden="true" /> JavaScript
          </span>
          <span className="chip">
            <i className="fa-solid fa-t" aria-hidden="true" /> TypeScript
          </span>
          <span className="chip">
            <i className="fa-brands fa-python" aria-hidden="true" /> Python
          </span>
          <span className="chip">
            <i className="fa-brands fa-node-js" aria-hidden="true" /> Next.js
          </span>
          <span className="chip">
            <i className="fa-solid fa-cube" aria-hidden="true" /> NestJS
          </span>
          <span className="chip">
            <i className="fa-brands fa-node-js" aria-hidden="true" /> Node /
            Express
          </span>
          <span className="chip">
            <i className="fa-brands fa-laravel" aria-hidden="true" /> Laravel
          </span>
          <span className="chip">
            <i className="fa-brands fa-php" aria-hidden="true" /> PHP
          </span>
          <span className="chip">
            <i className="fa-brands fa-wordpress" aria-hidden="true" />{" "}
            WordPress
          </span>
          <span className="chip">
            <i className="fa-solid fa-brain" aria-hidden="true" /> IA
          </span>
          <span className="chip">
            <i className="fa-solid fa-code" aria-hidden="true" /> VS Code ·
            Cursor
          </span>
          <span className="chip">
            <i className="fa-brands fa-git-alt" aria-hidden="true" /> Git ·
            GitHub
          </span>
          <span className="chip">
            <i className="fa-solid fa-paper-plane" aria-hidden="true" /> Postman
          </span>
          <span className="chip">
            <i className="fa-brands fa-figma" aria-hidden="true" /> Figma
          </span>
          <span className="chip">
            <i className="fa-brands fa-aws" aria-hidden="true" /> AWS
          </span>
          <span className="chip">
            <i className="fa-solid fa-server" aria-hidden="true" /> Hostinger ·
            Contabo
          </span>
          <span className="chip">
            <i className="fa-brands fa-ubuntu" aria-hidden="true" /> Ubuntu ·
            SSH
          </span>
          <span className="chip">
            <i className="fa-brands fa-windows" aria-hidden="true" /> Windows
          </span>
          <span className="chip">
            <i className="fa-brands fa-google-drive" aria-hidden="true" /> Drive
            · Sheets
          </span>
          <span className="chip">
            <i className="fa-solid fa-file-excel" aria-hidden="true" /> Excel ·
            dados
          </span>
        </div>
        <p className="subtitle-landing">Escritório</p>
        <div className="grid">
          <span className="chip">
            <i className="fa-solid fa-file-word" aria-hidden="true" /> Word
          </span>
          <span className="chip">
            <i className="fa-solid fa-file-excel" aria-hidden="true" /> Excel
          </span>
          <span className="chip">
            <i className="fa-solid fa-file-powerpoint" aria-hidden="true" />{" "}
            PowerPoint
          </span>
          <span className="chip">
            <i className="fa-solid fa-file-pdf" aria-hidden="true" /> PDF
          </span>
        </div>
        <p className="subtitle-landing">Idiomas</p>
        <div className="tools-grid">
          <span className="tool tool-lang">
            <span className="lang-flag" role="img" aria-label="Brasil">
              🇧🇷
            </span>{" "}
            PT nativo
          </span>
          <span className="tool tool-lang">
            <span className="lang-flag" role="img" aria-label="Inglês">
              🇺🇸
            </span>{" "}
            EN básico
          </span>
          <span className="tool tool-lang">
            <span className="lang-flag" role="img" aria-label="Espanhol">
              🇪🇸
            </span>{" "}
            ES básico
          </span>
        </div>
        <p className="subtitle-landing">Fora do ecrã</p>
        <div className="tools-grid">
          <span className="tool">
            <i className="fa-solid fa-person-swimming" aria-hidden="true" />{" "}
            Natação
          </span>
          <span className="tool">
            <i className="fa-solid fa-hand-back-fist" aria-hidden="true" /> Judô
          </span>
          <span className="tool">
            <i className="fa-solid fa-fire-flame-curved" aria-hidden="true" />{" "}
            Jiu-jitsu
          </span>
        </div>
      </div>
    </section>
  );
}
