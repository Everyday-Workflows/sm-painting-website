import type { Metadata } from "next";
import HomeContent from "@/components/HomeContent";
import { resolvePublicSiteUrl } from "@/lib/siteUrl";

const SITE_URL = resolvePublicSiteUrl();

export const metadata: Metadata = {
  title: "S&H Painting | Tampa & St. Petersburg Residential & Commercial Painters",
  description: "Detail-first painting for homes, storefronts, and workspaces in Tampa & St. Petersburg. We speak Spanish! Free estimates available.",
  keywords: [
    "Tampa Bay painting company",
    "free painting estimate Tampa",
    "best painters Tampa FL",
    "Spanish speaking painters Tampa",
    "pintores en Tampa",
    "servicios de pintura Tampa",
    "home painting near me Tampa",
    "affordable house painters St Petersburg",
  ],
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title: "S&H Painting | Professional Painting Services in Tampa & St. Petersburg",
    description: "High-quality residential and commercial painting services. Detail-first painting for homes, storefronts, and workspaces.",
  },
};

export default function Home() {
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home / Inicio",
        "item": SITE_URL
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <HomeContent />
    </>
  );
}
