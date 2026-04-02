/** Horas agregadas dos blocos Projetos — manter alinhado com os strips. */
export const portfolioHours = {
  production: 5280,
  extension: 3094,
  research: 715,
} as const;

export const portfolioHoursTotal =
  portfolioHours.production +
  portfolioHours.extension +
  portfolioHours.research;

/** Ex.: 5280 → "5.280" */
export function fmtHours(n: number): string {
  return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}
