import type { MetadataRoute } from "next";
import { getPublicSiteUrl } from "@/lib/public-site-url";

export default function robots(): MetadataRoute.Robots {
  const root = getPublicSiteUrl();
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    host: root,
    sitemap: `${root}/sitemap.xml`,
  };
}
