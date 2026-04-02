const DEFAULT_PUBLIC_SITE_URL = "https://clayton.lat";

export function getPublicSiteUrl(): string {
  const raw =
    process.env.NEXT_PUBLIC_SITE_URL?.trim() || DEFAULT_PUBLIC_SITE_URL;
  return raw.replace(/\/$/, "");
}
