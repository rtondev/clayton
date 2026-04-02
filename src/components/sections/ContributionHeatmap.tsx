"use client";

import { useCallback, useEffect, useMemo, useState } from "react";

const ROWS = 7;
const COLS = 46;

function rand(max: number) {
  return Math.floor(Math.random() * max);
}

function makeLevels(total: number) {
  return Array.from({ length: total }, () => rand(5) as 0 | 1 | 2 | 3 | 4);
}

const cellKeys: string[] = (() => {
  const keys: string[] = [];
  for (let r = 0; r < ROWS; r++) {
    for (let c = 0; c < COLS; c++) {
      keys.push(`cell-${r}x${c}`);
    }
  }
  return keys;
})();

export function ContributionHeatmap() {
  const total = ROWS * COLS;
  const [levels, setLevels] = useState<readonly (0 | 1 | 2 | 3 | 4)[]>(() =>
    makeLevels(total),
  );
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduceMotion(mq.matches);
    const onChange = () => setReduceMotion(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  const tick = useCallback(() => {
    setLevels((prev) => {
      const next = [...prev] as (0 | 1 | 2 | 3 | 4)[];
      const bursts = 10 + rand(22);
      for (let i = 0; i < bursts; i++) {
        const idx = rand(total);
        next[idx] = rand(5) as 0 | 1 | 2 | 3 | 4;
      }
      return next;
    });
  }, [total]);

  useEffect(() => {
    if (reduceMotion) return;
    const id = window.setInterval(tick, 200);
    return () => window.clearInterval(id);
  }, [reduceMotion, tick]);

  const cells = useMemo(
    () => cellKeys.map((key, i) => ({ key, lv: levels[i] })),
    [levels],
  );

  return (
    <section
      id="matriz"
      className="landing-slide landing-slide--dark contrib-section contrib-section--heatmap section-research"
      aria-label="Grelha de atividade no código, estilo contribuições GitHub"
    >
      <div className="contrib-section__wrap">
        <div className="contrib-grid" aria-hidden="true">
          {cells.map((cell) => (
            <span
              key={cell.key}
              className={`contrib-grid__cell contrib-grid__cell--${cell.lv}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
