"use client";

import { useCallback, useEffect, useRef } from "react";
import type { IfrnCertBlock } from "@/data/certificates";

function scrollAmount(el: HTMLElement) {
  return Math.max(220, Math.min(el.clientWidth * 0.85, 380));
}

export function CertBlock({ block }: { block: IfrnCertBlock }) {
  const rootRef = useRef<HTMLDivElement>(null);

  const init = useCallback(() => {
    const strip = rootRef.current;
    if (!strip) return;
    const list = strip.querySelector<HTMLElement>(".cert-list");
    const prev = strip.querySelector<HTMLButtonElement>(
      ".cert-strip__btn--prev",
    );
    const next = strip.querySelector<HTMLButtonElement>(
      ".cert-strip__btn--next",
    );
    if (!list || !prev || !next) return;

    const syncButtons = () => {
      const maxScroll = Math.max(0, list.scrollWidth - list.clientWidth - 1);
      const x = list.scrollLeft;
      prev.disabled = x <= 0;
      next.disabled = x >= maxScroll;
    };

    const onPrev = () => {
      list.scrollBy({ left: -scrollAmount(list), behavior: "smooth" });
    };
    const onNext = () => {
      list.scrollBy({ left: scrollAmount(list), behavior: "smooth" });
    };

    prev.addEventListener("click", onPrev);
    next.addEventListener("click", onNext);
    list.addEventListener("scroll", syncButtons, { passive: true });
    window.addEventListener("resize", syncButtons);
    const ro = new ResizeObserver(syncButtons);
    ro.observe(list);
    syncButtons();

    return () => {
      prev.removeEventListener("click", onPrev);
      next.removeEventListener("click", onNext);
      list.removeEventListener("scroll", syncButtons);
      window.removeEventListener("resize", syncButtons);
      ro.disconnect();
    };
  }, []);

  useEffect(() => {
    return init();
  }, [init]);

  return (
    <div className="cert-block" ref={rootRef}>
      <div className="cert-block__head">
        <div className="cert-block__head-text">
          <p className="subtitle-landing cert-block__title">{block.title}</p>
          <span className="cert-block__stats">{block.stats}</span>
        </div>
        <fieldset
          className="cert-strip__controls border-0 p-0 m-0 min-w-0"
          aria-label="Rolar lista de certificados"
        >
          <button
            type="button"
            className="cert-strip__btn cert-strip__btn--prev"
            aria-label="Certificados anteriores"
          >
            <i className="fa-solid fa-chevron-left" aria-hidden="true" />
          </button>
          <button
            type="button"
            className="cert-strip__btn cert-strip__btn--next"
            aria-label="Certificados seguintes"
          >
            <i className="fa-solid fa-chevron-right" aria-hidden="true" />
          </button>
        </fieldset>
      </div>
      <div className="cert-list">
        {block.items.map((item) => (
          <article key={item.title + item.meta} className="cert-card">
            <div
              className={`cert-card__head${item.noCh ? " cert-card__head--no-ch" : ""}`}
            >
              {item.ch ? (
                <span className="cert-card__ch">{item.ch}</span>
              ) : null}
              <div className="cert-card__tags">
                {item.tags.map((t) => (
                  <span key={t} className="cert-badge cert-badge--neutral">
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <h3 className="cert-card__title">{item.title}</h3>
            <p className="cert-card__meta">{item.meta}</p>
            <p className="cert-card__link">
              <a href={item.suapUrl} target="_blank" rel="noopener noreferrer">
                Ver autenticidade no SUAP
              </a>
            </p>
          </article>
        ))}
      </div>
    </div>
  );
}
