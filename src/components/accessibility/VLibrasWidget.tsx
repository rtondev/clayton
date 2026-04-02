"use client";

import Script from "next/script";

/** Base oficial (com www), igual ao ROOT_PATH do bundle — evita redirecionamentos e builds espúrios em jsDelivr (Edge Tracking Prevention). */
const VLIBRAS_APP = "https://www.vlibras.gov.br/app/";

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
        src="/vlibras/vlibras-plugin.js"
        strategy="lazyOnload"
        onLoad={() => {
          const g = globalThis as unknown as {
            VLibras?: { Widget: new (baseUrl: string) => unknown };
          };
          if (g.VLibras) {
            new g.VLibras.Widget(VLIBRAS_APP);
          }
        }}
      />
    </>
  );
}
