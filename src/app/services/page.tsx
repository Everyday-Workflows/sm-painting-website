import type { Metadata } from "next";
import ServicesContent from "@/components/ServicesContent";
import { resolvePublicSiteUrl } from "@/lib/siteUrl";

export const metadata: Metadata = {
  title: "Painting Services | Interior, Exterior & Commercial - Tampa & St. Petersburg",
  description: "Interior, exterior, commercial painting and cabinet refinishing in Tampa & St. Petersburg. Free estimates. We speak Spanish!",
  keywords: [
    "painting services Tampa",
    "interior painters St. Petersburg",
    "exterior house painting Tampa",
    "commercial painting services",
    "cabinet refinishing Tampa",
    "residential painting contractor",
  ],
  openGraph: {
    title: "Painting Services | S&H Painting",
    description: "Professional interior, exterior, and commercial painting services in Tampa and St. Petersburg.",
  },
};

export default function ServicesPage() {
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
        "name": "Services / Servicios",
        "item": `${SITE_URL}/services`
      }
    ]
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What areas do you serve?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We serve Tampa, St. Petersburg, Brandon, Riverview, Wesley Chapel, Clearwater, Lutz, Land O' Lakes, Valrico, Seffner, Largo, Pinellas Park, Dunedin, Oldsmar, Safety Harbor, and surrounding areas in Hillsborough and Pinellas counties."
        }
      },
      {
        "@type": "Question",
        "name": "Do you provide free estimates?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we provide free, no-obligation estimates for all residential and commercial projects."
        }
      },
      {
        "@type": "Question",
        "name": "What types of paint do you use?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We use premium, durable coatings from top brands to ensure a long-lasting and high-quality finish."
        }
      },
      {
        "@type": "Question",
        "name": "How do I get started?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Simply fill out our estimate request form or give us a call. We'll schedule a walkthrough to discuss your project and provide a free quote."
        }
      }
    ]
  };

  const servicesJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "item": {
          "@type": "Service",
          "name": "Interior Painting",
          "description": "Professional interior painting for walls, ceilings, and trim in Tampa and St. Petersburg. / Pintura de interiores profesional para paredes, techos y molduras en Tampa y St. Petersburg.",
          "provider": {
            "@type": "PaintingService",
            "name": "S&H Painting"
          },
          "areaServed": ["Tampa", "St. Petersburg", "Brandon", "Riverview", "Wesley Chapel", "Clearwater", "Lutz", "Land O' Lakes", "Valrico", "Seffner", "Largo", "Pinellas Park", "Dunedin"]
        }
      },
      {
        "@type": "ListItem",
        "position": 2,
        "item": {
          "@type": "Service",
          "name": "Exterior Painting",
          "description": "Durable exterior house painting and protection services. / Servicios duraderos de pintura y protección de exteriores.",
          "provider": {
            "@type": "PaintingService",
            "name": "S&H Painting"
          },
          "areaServed": ["Tampa", "St. Petersburg", "Brandon", "Riverview", "Wesley Chapel", "Clearwater", "Lutz", "Land O' Lakes", "Valrico", "Seffner", "Largo", "Pinellas Park", "Dunedin"]
        }
      },
      {
        "@type": "ListItem",
        "position": 3,
        "item": {
          "@type": "Service",
          "name": "Commercial Painting",
          "description": "High-quality commercial painting for offices, retail, and industrial spaces. / Pintura comercial de alta calidad para oficinas, tiendas y espacios industriales.",
          "provider": {
            "@type": "PaintingService",
            "name": "S&H Painting"
          },
          "areaServed": ["Tampa", "St. Petersburg", "Brandon", "Riverview", "Wesley Chapel", "Clearwater", "Lutz", "Land O' Lakes", "Valrico", "Seffner", "Largo", "Pinellas Park", "Dunedin"]
        }
      },
      {
        "@type": "ListItem",
        "position": 4,
        "item": {
          "@type": "Service",
          "name": "Cabinet Refinishing",
          "description": "Professional cabinet painting and refinishing for a high-end look. / Pintura y renovación profesional de gabinetes para una apariencia de alta gama.",
          "provider": {
            "@type": "PaintingService",
            "name": "S&H Painting"
          },
          "areaServed": ["Tampa", "St. Petersburg", "Brandon", "Riverview", "Wesley Chapel", "Clearwater", "Lutz", "Land O' Lakes", "Valrico", "Seffner", "Largo", "Pinellas Park", "Dunedin"]
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesJsonLd) }}
      />
      <ServicesContent />
    </>
  );
}
