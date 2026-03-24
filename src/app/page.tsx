import type { Metadata } from "next";
import HomeContent from "@/components/HomeContent";
import Script from "next/script";
import { resolvePublicSiteUrl } from "@/lib/siteUrl";

export const metadata: Metadata = {
  title: "S&H Painting | Professional Painting in Tampa & St. Petersburg",
  description: "High-quality residential and commercial painting services in Tampa, St. Petersburg, and surrounding areas. We speak Spanish! / Servicios de pintura residencial y comercial de alta calidad en Tampa y St. Petersburg. ¡Hablamos español!",
  keywords: [
    "painting services Tampa",
    "painting services St. Petersburg",
    "residential painting Tampa",
    "commercial painting Tampa",
    "interior painting Tampa",
    "exterior painting Tampa",
    "cabinet painting Tampa",
    "S&H Painting",
    "professional painters Tampa",
    "house painting Tampa",
    "painting contractor Tampa",
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
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        strategy="afterInteractive"
      >
        {JSON.stringify(breadcrumbJsonLd)}
      </Script>
      <HomeContent />
    </>
  );
}
