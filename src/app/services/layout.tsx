import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Services / Servicios | S&M Painting",
  description: "Professional interior and exterior painting, commercial painting, cabinet refinishing, and specialty finishes. / Pintura interior y exterior, pintura comercial, gabinetes y acabados especiales.",
  openGraph: {
    title: "Our Services / Servicios | S&M Painting",
    description: "Professional interior and exterior painting, commercial painting, and more. / Pintura interior, exterior, comercial y más.",
    images: ["/og-image.webp"],
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
