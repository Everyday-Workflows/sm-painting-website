import type { Metadata } from "next";
import { Cormorant_Garamond, Fraunces, Manrope } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import { Providers } from "@/components/Providers";
import Footer from "@/components/Footer";
// BackgroundBlobs removed — keeping backgrounds clean and consistent across all pages
import { CONTACT_INFO } from "@/lib/contact";
import { BRAND_ASSETS } from "@/lib/siteAssets";
import { resolvePublicSiteUrl } from "@/lib/siteUrl";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  weight: ["500", "600", "700", "800", "900"],
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["400", "500", "600", "700"],
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ["400", "500", "600", "700", "800"],
});

const SITE_URL = resolvePublicSiteUrl();

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default:
      "S&H Painting | Professional Painting in Tampa & St. Petersburg | Pintura Profesional en Tampa",
    template: "%s | S&H Painting",
  },
  description:
    "High-quality residential and commercial painting services in Tampa, St. Petersburg, and surrounding areas. / Servicios de pintura residencial y comercial de alta calidad en Tampa, St. Petersburg y áreas circundantes.",
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
    "painters St. Petersburg FL",
    "Hillsborough County painters",
    "Pinellas County painters",
    "painters in Lutz FL",
    "painters in Land O Lakes",
    "painters in Valrico",
    "painters in Seffner",
    "painters in Clearwater",
    "painters in Largo",
    "painters in Pinellas Park",
    "painters in Dunedin",
    "painters in Oldsmar",
    "painters in Safety Harbor",
  ],
  authors: [{ name: "S&H Painting" }],
  creator: "S&H Painting",
  publisher: "S&H Painting",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: BRAND_ASSETS.favicon,
    shortcut: BRAND_ASSETS.favicon,
    apple: BRAND_ASSETS.favicon,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "S&H Painting",
    title:
      "S&H Painting | Professional Painting Services | Servicios Profesionales de Pintura",
    description:
      "High-quality residential and commercial painting services in Tampa Bay. / Servicios de pintura residencial y comercial de alta calidad en Tampa Bay.",
    images: [
      {
        url: BRAND_ASSETS.openGraphImage,
        width: 2048,
        height: 1024,
        alt: "S&H Painting branded social preview reading Quality Meets Color",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "S&H Painting | Professional Painting Services | Servicios Profesionales de Pintura",
    description:
      "High-quality residential and commercial painting services in Tampa Bay. / Servicios de pintura residencial y comercial de alta calidad en Tampa Bay.",
    images: [BRAND_ASSETS.openGraphImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: SITE_URL,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "PaintingService",
    name: "S&H Painting",
    description:
      "Professional residential and commercial painting services in Tampa, St. Petersburg, and surrounding areas. We speak Spanish! / Servicios de pintura residencial y comercial de alta calidad en Tampa, St. Petersburg y áreas circundantes. ¡Hablamos español!",
    image: `${SITE_URL}${BRAND_ASSETS.logoLightWordmark}`,
    "@id": SITE_URL,
    url: SITE_URL,
    email: CONTACT_INFO.email,
    telephone: CONTACT_INFO.phoneE164,
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      email: CONTACT_INFO.email,
      telephone: CONTACT_INFO.phoneE164,
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Tampa",
      addressRegion: "FL",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 27.9506,
      longitude: -82.4572,
    },
    areaServed: [
      { "@type": "City", name: "Tampa" },
      { "@type": "City", name: "St. Petersburg" },
      { "@type": "City", name: "Brandon" },
      { "@type": "City", name: "Riverview" },
      { "@type": "City", name: "Wesley Chapel" },
      { "@type": "City", name: "Clearwater" },
      { "@type": "City", name: "Lutz" },
      { "@type": "City", name: "Land O' Lakes" },
      { "@type": "City", name: "Valrico" },
      { "@type": "City", name: "Seffner" },
      { "@type": "City", name: "Largo" },
      { "@type": "City", name: "Pinellas Park" },
      { "@type": "City", name: "Dunedin" },
      { "@type": "City", name: "Oldsmar" },
      { "@type": "City", name: "Safety Harbor" },
    ],
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "18:00",
    },
    priceRange: "$$",
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${fraunces.variable} ${cormorant.variable} ${manrope.variable} min-h-screen flex flex-col bg-background text-foreground antialiased transition-colors duration-300`}
      >
        <Providers>
          <Navigation />
          <main className="grow">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
