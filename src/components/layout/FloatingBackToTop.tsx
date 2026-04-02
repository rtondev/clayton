"use client";

import { useCallback, useEffect, useState } from "react";

export function FloatingBackToTop() {
  const [visible, setVisible] = useState(false);

  const onScroll = useCallback(() => {
    setVisible(globalThis.scrollY > 280);
  }, []);

  useEffect(() => {
    onScroll();
    globalThis.addEventListener("scroll", onScroll, { passive: true });
    return () => globalThis.removeEventListener("scroll", onScroll);
  }, [onScroll]);

  const goTop = useCallback(() => {
    const reduce =
      globalThis.matchMedia?.("(prefers-reduced-motion: reduce)").matches ??
      false;
    globalThis.scrollTo({
      top: 0,
      behavior: reduce ? "auto" : "smooth",
    });
  }, []);

  return (
    <button
      type="button"
      className={`floating-back-top ${visible ? "floating-back-top--visible" : ""}`}
      onClick={goTop}
      aria-label="Voltar ao topo"
      title="Voltar ao topo"
    >
      <i className="fa-solid fa-chevron-up" aria-hidden="true" />
    </button>
  );
}
