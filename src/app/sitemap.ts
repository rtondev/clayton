import type { MetadataRoute } from "next";
import { getPublicSiteUrl } from "@/lib/public-site-url";

export default function sitemap(): MetadataRoute.Sitemap {
  const root = getPublicSiteUrl();
  return [
    {
      url: root,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
