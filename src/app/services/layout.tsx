import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Services | S&M Painting",
  description: "Professional interior and exterior painting, commercial painting, cabinet refinishing, and specialty finishes. Discover how we can transform your space.",
  openGraph: {
    title: "Our Services | S&M Painting",
    description: "Professional interior and exterior painting, commercial painting, and more.",
    images: ["/images/og-services.jpg"],
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
