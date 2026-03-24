import type { Metadata } from "next";
import HomeContent from "@/components/HomeContent";
import { resolvePublicSiteUrl } from "@/lib/siteUrl";

export const metadata: Metadata = {
  title: "S&H Painting | Professional Painting in Tampa & St. Petersburg",
  description: "High-quality residential and commercial painting services in Tampa, St. Petersburg, and surrounding areas. We speak Spanish! / Servicios de pintura residencial y comercial de alta calidad en Tampa y St. Petersburg. ¡Hablamos español!",
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
  openGraph: {
    title: "S&H Painting | Professional Painting Services in Tampa & St. Petersburg",
    description: "High-quality residential and commercial painting services. Detail-first painting for homes, storefronts, and workspaces.",
  },
};

export default function Home() {
  const SITE_URL = resolvePublicSiteUrl();
  
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
