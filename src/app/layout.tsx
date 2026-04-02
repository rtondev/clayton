import type { Metadata } from "next";
import { siteConfig } from "@/data/site";
import { getPublicSiteUrl } from "@/lib/public-site-url";
import "./globals.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

const siteUrl = getPublicSiteUrl();

const googleVerification =
  process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION?.trim() ?? "";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: siteConfig.shortName,
  title: {
    default: siteConfig.title,
    template: `%s · ${siteConfig.shortName}`,
  },
  description: siteConfig.description,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  ...(googleVerification !== ""
    ? { verification: { google: googleVerification } }
    : {}),
  keywords: [
    "Clayton Rennan",
    "Full Stack",
    "Desenvolvedor",
    "IFRN",
    "Next.js",
    "NestJS",
    "UI/UX",
    "DevOps",
    "Extremoz",
    "Natal",
    "RN",
    "portfólio",
    "currículo",
  ],
  authors: [{ name: siteConfig.name, url: siteUrl }],
  creator: siteConfig.name,
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteUrl,
    siteName: siteConfig.title,
    title: siteConfig.title,
    description: siteConfig.description,
    images: [
      {
        url: "/image.png",
        width: 132,
        height: 132,
        alt: siteConfig.shortName,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: ["/image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: siteUrl,
  },
  category: "portfolio",
};

const origin = new URL(siteUrl).origin;
const personId = `${origin}/#person`;
const websiteId = `${origin}/#website`;

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": personId,
      name: siteConfig.name,
      url: siteUrl,
      jobTitle: "Desenvolvedor Full Stack · UI/UX Designer · DevOps",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Extremoz",
        addressRegion: "RN",
        addressCountry: "BR",
      },
      sameAs: [
        siteConfig.social.github,
        siteConfig.social.linkedin,
        siteConfig.social.instagram,
        siteConfig.lattes,
      ],
    },
    {
      "@type": "WebSite",
      "@id": websiteId,
      url: siteUrl,
      name: siteConfig.title,
      description: siteConfig.description,
      inLanguage: "pt-BR",
      publisher: { "@id": personId },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;600&family=Outfit:wght@500;600;700&family=Plus+Jakarta+Sans:ital,wght@0,400..700;1,400..600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
