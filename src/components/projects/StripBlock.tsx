"use client";

import { useCallback, useEffect, useRef } from "react";
import type { ProjectStripBlockData, StripTagTone } from "@/data/project-strip";

function scrollAmount(el: HTMLElement) {
  return Math.max(220, Math.min(el.clientWidth * 0.85, 380));
}

function tagClass(tone: StripTagTone): string {
  return `proj-tag proj-tag--${tone}`;
}

export type StripBlockProps = {
  block: ProjectStripBlockData;
  scrollAriaLabel: string;
  prevAriaLabel: string;
  nextAriaLabel: string;
  variantClass:
    | "cert-block--research"
    | "cert-block--extension"
    | "cert-block--sites";
};

export function StripBlock({
  block,
  scrollAriaLabel,
  prevAriaLabel,
  nextAriaLabel,
  variantClass,
}: StripBlockProps) {
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
    <div className={`cert-block ${variantClass}`} ref={rootRef}>
      <div className="cert-block__head">
        <div className="cert-block__head-text">
          <p className="subtitle-landing cert-block__title">{block.title}</p>
          <span className="cert-block__stats">{block.stats}</span>
        </div>
        <fieldset
          className="cert-strip__controls border-0 p-0 m-0 min-w-0"
          aria-label={scrollAriaLabel}
        >
          <button
            type="button"
            className="cert-strip__btn cert-strip__btn--prev"
            aria-label={prevAriaLabel}
          >
            <i className="fa-solid fa-chevron-left" aria-hidden="true" />
          </button>
          <button
            type="button"
            className="cert-strip__btn cert-strip__btn--next"
            aria-label={nextAriaLabel}
          >
            <i className="fa-solid fa-chevron-right" aria-hidden="true" />
          </button>
        </fieldset>
      </div>
      <div className="cert-list">
        {block.items.map((item) => (
          <article key={item.id} className="cert-card cert-card--project-strip">
            <div className="proj-card-tags">
              {item.tags.map((tag, tagIdx) => (
                <span
                  key={`${item.id}-tag-${tagIdx}`}
                  className={tagClass(tag.tone)}
                >
                  {tag.label}
                </span>
              ))}
            </div>
            <h3 className="cert-card__title">{item.title}</h3>
            <p className="cert-card__meta">{item.meta}</p>
            {item.href ? (
              <p className="cert-card__link cert-card__link--strip">
                <a href={item.href} target="_blank" rel="noopener noreferrer">
                  Abrir site{" "}
                  <i
                    className="fa-solid fa-arrow-up-right-from-square"
                    aria-hidden="true"
                  />
                </a>
              </p>
            ) : null}
          </article>
        ))}
      </div>
    </div>
  );
}
