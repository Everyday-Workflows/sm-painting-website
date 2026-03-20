import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import localFont from "next/font/local";
import Script from "next/script";
import "./globals.css";
import Navigation from "@/components/Navigation";
import { Providers } from "@/components/Providers";
import Footer from "@/components/Footer";
import BackgroundBlobs from "@/components/BackgroundBlobs";
import { BRAND_ASSETS, FEATURED_GALLERY_ASSETS } from "@/lib/siteAssets";
import { resolvePublicSiteUrl } from "@/lib/siteUrl";

const glodok = localFont({
  src: "../../public/fonts/tan-type-co-glodok-display.otf",
  variable: "--font-glodok",
});

const mackinac = localFont({
  src: "../../public/fonts/P22MackinacPro-Medium_26.otf",
  variable: "--font-mackinac",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["300", "400", "500", "600", "700"],
});

const SITE_URL = resolvePublicSiteUrl();

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default:
      "S&H Painting | Professional Residential & Commercial Painting | Pintura Residencial y Comercial",
    template: "%s | S&H Painting",
  },
  description:
    "High-quality residential and commercial painting services by S&H Painting. / Servicios de pintura residencial y comercial de alta calidad por S&H Painting.",
  keywords: [
    "painting services",
    "residential painting",
    "commercial painting",
    "interior painting",
    "exterior painting",
    "cabinet painting",
    "S&H Painting",
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
      "High-quality residential and commercial painting services. / Servicios de pintura residencial y comercial de alta calidad.",
    images: [
      {
        url: FEATURED_GALLERY_ASSETS.heroShowcase,
        width: 1200,
        height: 630,
        alt: "S&H Painting finished interior project / Proyecto interior terminado de S&H Painting",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "S&H Painting | Professional Painting Services | Servicios Profesionales de Pintura",
    description:
      "High-quality residential and commercial painting services. / Servicios de pintura residencial y comercial de alta calidad.",
    images: [FEATURED_GALLERY_ASSETS.heroShowcase],
    creator: "@smpainting", // Replace with actual handle if known
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
    languages: {
      "en-US": `${SITE_URL}/en`,
      "es-ES": `${SITE_URL}/es`,
    },
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
    image: `${SITE_URL}${BRAND_ASSETS.logoLightWordmark}`,
    "@id": SITE_URL,
    url: SITE_URL,
    telephone: "+1-555-0123", // Placeholder
    address: {
      "@type": "PostalAddress",
      streetAddress: "123 Main St",
      addressLocality: "Your City",
      addressRegion: "ST",
      postalCode: "12345",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 40.7128,
      longitude: -74.006,
    },
    areaServed: [
      {
        "@type": "City",
        name: "Your City",
      },
      {
        "@type": "City",
        name: "Surrounding Area",
      },
    ],
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "18:00",
    },
    sameAs: [
      "https://www.facebook.com/smpainting",
      "https://www.instagram.com/smpainting",
      "https://twitter.com/smpainting",
    ],
    priceRange: "$$",
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <Script
          id="painting-service-schema"
          type="application/ld+json"
          strategy="afterInteractive"
        >
          {JSON.stringify(jsonLd)}
        </Script>
      </head>
      <body
        className={`${glodok.variable} ${mackinac.variable} ${montserrat.variable} antialiased min-h-screen flex flex-col bg-white dark:bg-black text-black dark:text-white transition-colors duration-300`}
      >
        <Providers>
          <BackgroundBlobs />

          <Navigation />
          <main className="flex-grow">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
