import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Painting Services | Interior, Exterior & Commercial - Tampa & St. Petersburg",
  description:
    "Professional painting services in Tampa and St. Petersburg. We speak Spanish! / Servicios profesionales de pintura en Tampa y St. Petersburg. ¡Hablamos español!",
  openGraph: {
    title: "Painting Services | S&H Painting",
    description:
      "Professional interior, exterior, and commercial painting services in Tampa and St. Petersburg.",
    images: ["/images/OG_Image.png"],
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
