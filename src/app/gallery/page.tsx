import type { Metadata } from "next";
import GalleryContent from "@/components/GalleryContent";
import Script from "next/script";
import { PORTFOLIO_ITEMS } from "@/lib/siteAssets";
import { resolvePublicSiteUrl } from "@/lib/siteUrl";

export const metadata: Metadata = {
  title: "Our Work | S&H Painting Portfolio - Tampa & St. Petersburg",
  description: "Explore our gallery of completed residential and commercial painting projects in Tampa and St. Petersburg. We speak Spanish! / Vea nuestro portafolio de proyectos residenciales y comerciales en Tampa y St. Petersburg. ¡Hablamos español!",
  keywords: [
    "painting portfolio Tampa",
    "interior painting gallery",
    "exterior painting showcase",
    "before and after painting Tampa",
    "residential painting examples",
    "commercial painting projects",
  ],
  openGraph: {
    title: "Our Work | S&H Painting Portfolio",
    description: "Explore our gallery of completed residential and commercial painting projects in Tampa and St. Petersburg.",
  },
};

export default function GalleryPage() {
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
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Gallery / Galería",
        "item": `${SITE_URL}/gallery`
      }
    ]
  };

  const galleryJsonLd = {
    "@context": "https://schema.org",
    "@type": "ImageGallery",
    "name": "S&H Painting Portfolio / Portafolio de S&H Painting",
    "description": "A collection of our residential and commercial painting projects in Tampa and St. Petersburg. / Una colección de nuestros proyectos de pintura residencial y comercial en Tampa y St. Petersburg.",
    "image": PORTFOLIO_ITEMS.map(item => ({
      "@type": "ImageObject",
      "url": `${SITE_URL}${item.src}`,
      "caption": `${item.alt.en} / ${item.alt.es}`
    }))
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
      <Script
        id="gallery-schema"
        type="application/ld+json"
        strategy="afterInteractive"
      >
        {JSON.stringify(galleryJsonLd)}
      </Script>
      <GalleryContent />
    </>
  );
}
