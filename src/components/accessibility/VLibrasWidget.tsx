"use client";

import Script from "next/script";

/** Markup exigido pelo plugin oficial VLibras (gov.br). Atributos com hífen via spread para o React aceitar. */
const vlibrasRoot = { vw: "", className: "enabled" } as Record<string, string>;
const vlibrasBtn = { "vw-access-button": "", className: "active" } as Record<
  string,
  string
>;
const vlibrasWrap = { "vw-plugin-wrapper": "" } as Record<string, string>;

export function VLibrasWidget() {
  return (
    <>
      <div {...vlibrasRoot}>
        <div {...vlibrasBtn} />
        <div {...vlibrasWrap}>
          <div className="vw-plugin-top-wrapper" />
        </div>
      </div>
      <Script
        src="https://vlibras.gov.br/app/vlibras-plugin.js"
        strategy="lazyOnload"
        onLoad={() => {
          const g = globalThis as unknown as {
            VLibras?: { Widget: new (baseUrl: string) => unknown };
          };
          if (g.VLibras) {
            new g.VLibras.Widget("https://vlibras.gov.br/app");
          }
        }}
      />
    </>
  );
}
