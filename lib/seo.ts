import type { Metadata } from "next";

/** Canonical site config for SEO. The marketing site lives at hostifer.dev;
 *  the product/app lives at console.hostifer.dev. */
export const SITE = {
  name: "Hostifer Suite",
  shortName: "Hostifer",
  url: "https://hostifer.dev",
  appUrl: "https://console.hostifer.dev",
  locale: "en_US",
  description:
    "Professional email, cloud files, collaboration, and admin control in one simple SaaS platform, built for Algerian companies.",
  keywords: [
    "Hostifer Suite",
    "business email Algeria",
    "professional email Algeria",
    "email hébergé Algérie",
    "cloud storage Algeria",
    "Nextcloud hosting Algeria",
    "managed email hosting",
    "company workspace SaaS",
    "collaboration suite Algeria",
    "espace de travail entreprise",
    "custom domain email",
    "admin console",
    "data residency Algeria",
    "DZD billing SaaS",
  ],
} as const;

/** Build per-page metadata with a canonical URL and Open Graph / Twitter tags.
 *  `metadataBase` (set in the root layout) resolves the relative `path`, and the
 *  site-wide `opengraph-image` file supplies the social image automatically. */
export function pageMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      siteName: SITE.name,
      locale: SITE.locale,
      url: path,
      title,
      description,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

/** JSON-LD structured data injected on every page (Organization + WebSite). */
export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE.name,
    url: SITE.url,
    description: SITE.description,
    email: "contact@hostifer.dev",
    areaServed: "DZ",
    sameAs: [] as string[],
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "sales",
        email: "sales@hostifer.dev",
        areaServed: "DZ",
        availableLanguage: ["en", "fr", "ar"],
      },
      {
        "@type": "ContactPoint",
        contactType: "customer support",
        email: "support@hostifer.dev",
        areaServed: "DZ",
        availableLanguage: ["en", "fr", "ar"],
      },
    ],
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE.name,
    url: SITE.url,
    description: SITE.description,
    inLanguage: "en",
  };
}

/** Describes the product itself — good for a SaaS landing page. */
export function softwareAppJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: SITE.name,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    url: SITE.url,
    description: SITE.description,
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "DZD",
      availability: "https://schema.org/PreOrder",
    },
  };
}
