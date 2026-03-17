import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Image from "next/image";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "S&M Painting | Professional Painting Services",
  description: "High-quality residential and commercial painting services by S&M Painting. Transform your space with our expert touch.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <Navigation />
        <main className="flex-grow">
          {children}
        </main>
        <footer className="bg-gray-900 text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <Image 
                  src="/images/logos/Logo_White.webp" 
                  alt="S&M Painting Logo" 
                  width={120} 
                  height={40} 
                  className="h-10 w-auto mb-4"
                />
                <p className="text-gray-400 text-sm">
                  Professional painting services for residential and commercial properties. Quality you can trust.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                <ul className="space-y-2 text-gray-400 text-sm">
                  <li><a href="/" className="hover:text-brand-primary transition-colors">Home</a></li>
                  <li><a href="/gallery" className="hover:text-brand-primary transition-colors">Gallery</a></li>
                  <li><a href="/services" className="hover:text-brand-primary transition-colors">Services</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
                <p className="text-gray-400 text-sm">
                  Email: info@smpainting.com<br />
                  Phone: (555) 123-4567
                </p>
              </div>
            </div>
            <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400 text-xs">
              &copy; {new Date().getFullYear()} S&M Painting. All rights reserved.
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
