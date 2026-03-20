import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import localFont from "next/font/local";
import Script from "next/script";
import "./globals.css";
import Navigation from "@/components/Navigation";
import { Providers } from "@/components/Providers";
import Footer from "@/components/Footer";
import BackgroundBlobs from "@/components/BackgroundBlobs";

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

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://snmpainting.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "S&M Painting | Professional Residential & Commercial Painting | Pintura Residencial y Comercial",
    template: "%s | S&M Painting",
  },
  description:
    "High-quality residential and commercial painting services by S&M Painting. / Servicios de pintura residencial y comercial de alta calidad por S&M Painting.",
  keywords: [
    "painting services",
    "residential painting",
    "commercial painting",
    "interior painting",
    "exterior painting",
    "cabinet painting",
    "S&M Painting",
  ],
  authors: [{ name: "S&M Painting" }],
  creator: "S&M Painting",
  publisher: "S&M Painting",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "S&M Painting",
    title: "S&M Painting | Professional Painting Services | Servicios Profesionales de Pintura",
    description:
      "High-quality residential and commercial painting services. / Servicios de pintura residencial y comercial de alta calidad.",
    images: [
      {
        url: "/og-image.webp",
        width: 1200,
        height: 630,
        alt: "S&M Painting - Professional Painting Services / Servicios Profesionales de Pintura",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "S&M Painting | Professional Painting Services | Servicios Profesionales de Pintura",
    description:
      "High-quality residential and commercial painting services. / Servicios de pintura residencial y comercial de alta calidad.",
    images: ["/og-image.webp"],
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
      'en-US': `${SITE_URL}/en`,
      'es-ES': `${SITE_URL}/es`,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://snmpainting.com";
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "PaintingService",
    name: "S&M Painting",
    image: `${SITE_URL}/images/logos/Logo_Light_Mode.webp`,
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
        name: "Your City"
      },
      {
        "@type": "City",
        name: "Surrounding Area"
      }
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
