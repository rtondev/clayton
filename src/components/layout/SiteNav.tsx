"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { navIds } from "@/data/site";

function linkProps(id: (typeof navIds)[number], activeId: string) {
  const isActive = activeId === id;
  const className = [
    id === "contato" ? "landing-nav__cta" : "",
    isActive ? "is-active" : "",
  ]
    .filter(Boolean)
    .join(" ");
  return {
    className: className || undefined,
    "aria-current": isActive ? ("location" as const) : undefined,
  };
}

export function SiteNav() {
  const [activeId, setActiveId] = useState("inicio");
  const navRef = useRef<HTMLElement | null>(null);
  const shellRef = useRef<HTMLDivElement | null>(null);
  const toggleRef = useRef<HTMLButtonElement | null>(null);
  const [open, setOpen] = useState(false);

  const getAnchorOffsetPx = useCallback(() => {
    const raw = getComputedStyle(document.documentElement)
      .getPropertyValue("--nav-anchor-offset")
      .trim();
    const n = Number.parseFloat(raw);
    return Number.isNaN(n) ? 76 : n;
  }, []);

  const syncAnchorOffset = useCallback(() => {
    const nav = navRef.current;
    const shell = shellRef.current;
    if (!nav) return;
    const shellTop = shell ? shell.getBoundingClientRect().top : 8;
    const navH = nav.getBoundingClientRect().height;
    const clearance = Math.ceil(Math.max(0, shellTop) + navH + 8);
    document.documentElement.style.setProperty(
      "--nav-anchor-offset",
      `${clearance}px`,
    );
  }, []);

  const updateActiveNav = useCallback(() => {
    const marker = window.scrollY + getAnchorOffsetPx();
    let next = "inicio";
    for (let i = navIds.length - 1; i >= 0; i--) {
      const id = navIds[i];
      const el = document.getElementById(id);
      if (!el) continue;
      const top = el.getBoundingClientRect().top + window.scrollY;
      if (marker >= top - 0.5) {
        next = id;
        break;
      }
    }
    setActiveId(next);
  }, [getAnchorOffsetPx]);

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          updateActiveNav();
          ticking = false;
        });
        ticking = true;
      }
    };
    const onResize = () => {
      if (!window.matchMedia("(max-width: 720px)").matches && navRef.current) {
        setOpen(false);
        document.body.classList.remove("nav-mega-open");
        document.documentElement.classList.remove("nav-mega-open");
        if (toggleRef.current) {
          toggleRef.current.setAttribute("aria-expanded", "false");
          toggleRef.current.setAttribute(
            "aria-label",
            "Abrir menu de navegação",
          );
        }
      }
      syncAnchorOffset();
      updateActiveNav();
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    syncAnchorOffset();
    updateActiveNav();

    if (document.fonts?.ready) {
      void document.fonts.ready.then(() => {
        syncAnchorOffset();
        updateActiveNav();
      });
    }

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, [syncAnchorOffset, updateActiveNav]);

  useEffect(() => {
    if (!toggleRef.current) return;
    document.body.classList.toggle("nav-mega-open", open);
    document.documentElement.classList.toggle("nav-mega-open", open);
    toggleRef.current.setAttribute("aria-expanded", open ? "true" : "false");
    toggleRef.current.setAttribute(
      "aria-label",
      open ? "Fechar menu de navegação" : "Abrir menu de navegação",
    );
    syncAnchorOffset();
  }, [open, syncAnchorOffset]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && open) setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  const closeOnMobile = () => {
    if (window.matchMedia("(max-width: 720px)").matches) setOpen(false);
  };

  return (
    <div className="landing-nav-shell" ref={shellRef}>
      <nav
        className={`landing-nav${open ? " is-open" : ""}`}
        id="primary-nav"
        aria-label="Navegação principal"
        ref={navRef}
      >
        <a
          className="landing-nav__brand"
          href="#inicio"
          aria-label="Clayton Rennan, início"
        >
          CR
        </a>
        <button
          type="button"
          className="landing-nav__toggle"
          id="primary-nav-toggle"
          aria-expanded={open}
          aria-controls="primary-nav-mega"
          aria-label="Abrir menu de navegação"
          ref={toggleRef}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="landing-nav__toggle-icons" aria-hidden="true">
            {open ? (
              <i className="fa-solid fa-xmark landing-nav__toggle-icon" />
            ) : (
              <i className="fa-solid fa-bars landing-nav__toggle-icon" />
            )}
          </span>
        </button>
        <div className="landing-nav__mega" id="primary-nav-mega">
          <div className="landing-nav__links">
            <a
              href="#inicio"
              {...linkProps("inicio", activeId)}
              onClick={closeOnMobile}
            >
              Início
            </a>
            <a
              href="#matriz"
              {...linkProps("matriz", activeId)}
              onClick={closeOnMobile}
            >
              Atividade
            </a>
            <a
              href="#sobre"
              {...linkProps("sobre", activeId)}
              onClick={closeOnMobile}
            >
              Sobre
            </a>
            <a
              href="#formacao"
              {...linkProps("formacao", activeId)}
              onClick={closeOnMobile}
            >
              Formação
            </a>
            <a
              href="#carreira"
              {...linkProps("carreira", activeId)}
              onClick={closeOnMobile}
            >
              Carreira
            </a>
            <a
              href="#certificados"
              {...linkProps("certificados", activeId)}
              onClick={closeOnMobile}
            >
              Certificados
            </a>
            <a
              href="#skills"
              {...linkProps("skills", activeId)}
              onClick={closeOnMobile}
            >
              Skills
            </a>
            <a
              href="#projetos"
              {...linkProps("projetos", activeId)}
              onClick={closeOnMobile}
            >
              Projetos
            </a>
            <a
              href="#contato"
              {...linkProps("contato", activeId)}
              onClick={closeOnMobile}
            >
              Contacto
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}
