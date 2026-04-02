export function getPublicSiteUrl(): string {
  const raw = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (!raw) {
    throw new Error(
      "NEXT_PUBLIC_SITE_URL não está definido. Copie .env.example para .env.local e defina o URL público (ex.: NEXT_PUBLIC_SITE_URL=https://clayton.lat).",
    );
  }
  return raw.replace(/\/$/, "");
}
