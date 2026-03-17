import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Image from "next/image";
import { Providers } from "@/components/Providers";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "S&M Painting | Professional Residential & Commercial Painting",
    template: "%s | S&M Painting"
  },
  description: "High-quality residential and commercial painting services by S&M Painting. Expert interior and exterior painting, cabinet refinishing, and more. Serving your local area with excellence.",
  keywords: ["painting services", "residential painting", "commercial painting", "interior painting", "exterior painting", "cabinet painting", "S&M Painting"],
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
    url: "https://smpainting.com", // Replace with actual URL if known
    siteName: "S&M Painting",
    title: "S&M Painting | Professional Painting Services",
    description: "High-quality residential and commercial painting services. Transform your space with our expert touch.",
    images: [
      {
        url: "/images/og-image.jpg", // Need to ensure this exists or use a placeholder
        width: 1200,
        height: 630,
        alt: "S&M Painting - Professional Painting Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "S&M Painting | Professional Painting Services",
    description: "High-quality residential and commercial painting services. Transform your space with our expert touch.",
    images: ["/images/og-image.jpg"],
    creator: "@smpainting", // Replace with actual handle if known
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
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
    "name": "S&M Painting",
    "image": "https://smpainting.com/images/logos/Logo_Light_Mode.webp",
    "@id": "https://smpainting.com",
    "url": "https://smpainting.com",
    "telephone": "+1-555-0123", // Placeholder
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "123 Main St",
      "addressLocality": "Your City",
      "addressRegion": "ST",
      "postalCode": "12345",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 40.7128,
      "longitude": -74.0060
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "08:00",
      "closes": "18:00"
    },
    "sameAs": [
      "https://www.facebook.com/smpainting",
      "https://www.instagram.com/smpainting",
      "https://twitter.com/smpainting"
    ],
    "priceRange": "$$"
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col bg-white dark:bg-black text-black dark:text-white transition-colors duration-300`}
      >
        <Providers>
          <Navigation />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
