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
        <p className="subtitle-landing">Stack</p>
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
            <i className="fa-solid fa-wind" aria-hidden="true" /> Tailwind CSS
          </span>
          <span className="chip">
            <i className="fa-brands fa-bootstrap" aria-hidden="true" />{" "}
            Bootstrap
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
        </div>
        <p className="subtitle-landing">Ferramentas</p>
        <div className="grid grid--skills-main">
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
        </div>
        <p className="subtitle-landing">
          Escritório · Microsoft 365 · suite completa
        </p>
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
            <i className="fa-solid fa-envelope" aria-hidden="true" /> Outlook
          </span>
          <span className="chip">
            <i className="fa-solid fa-comments" aria-hidden="true" /> Teams
          </span>
          <span className="chip">
            <i className="fa-solid fa-cloud" aria-hidden="true" /> OneDrive
          </span>
          <span className="chip">
            <i className="fa-solid fa-note-sticky" aria-hidden="true" /> OneNote
          </span>
          <span className="chip">
            <i className="fa-solid fa-share-nodes" aria-hidden="true" />{" "}
            SharePoint
          </span>
          <span className="chip">
            <i className="fa-solid fa-clipboard-list" aria-hidden="true" />{" "}
            Forms
          </span>
          <span className="chip">
            <i className="fa-solid fa-list-check" aria-hidden="true" /> Lists
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
        <p className="subtitle-landing">Idiomas</p>
        <div className="grid grid--idiomas">
          <span className="chip chip--idiomas" lang="pt-BR">
            PT nativo
          </span>
          <span className="grid--idiomas-sep" aria-hidden="true">
            ·
          </span>
          <span className="chip chip--idiomas" lang="en">
            EN básico
          </span>
          <span className="grid--idiomas-sep" aria-hidden="true">
            ·
          </span>
          <span className="chip chip--idiomas" lang="es">
            ES básico
          </span>
        </div>
        <p className="subtitle-landing">Fora do ecrã</p>
        <div className="grid grid--fora-ecra">
          <span className="chip">
            <i className="fa-solid fa-person-swimming" aria-hidden="true" />{" "}
            Natação
          </span>
          <span className="chip">
            <i className="fa-solid fa-hand-back-fist" aria-hidden="true" /> Judô
          </span>
          <span className="chip">
            <i className="fa-solid fa-fire-flame-curved" aria-hidden="true" />{" "}
            Jiu-jitsu
          </span>
        </div>
      </div>
    </section>
  );
}
