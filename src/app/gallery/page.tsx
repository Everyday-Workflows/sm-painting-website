import type { Metadata } from "next";
import GalleryContent from "@/components/GalleryContent";
import { PORTFOLIO_ITEMS } from "@/lib/siteAssets";
import { resolvePublicSiteUrl } from "@/lib/siteUrl";

export const metadata: Metadata = {
  title: "Our Work | S&H Painting Portfolio - Tampa & St. Petersburg",
  description: "Browse completed residential and commercial painting projects by S&H Painting in Tampa and St. Petersburg. Before-and-after transformations.",
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(galleryJsonLd) }}
      />
      <GalleryContent />
    </>
  );
}
