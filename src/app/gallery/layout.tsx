import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Work | S&H Painting Portfolio - Tampa & St. Petersburg",
  description:
    "Explore our gallery of completed residential and commercial painting projects in Tampa and St. Petersburg. We speak Spanish! / Vea nuestro portafolio de proyectos residenciales y comerciales en Tampa y St. Petersburg. ¡Hablamos español!",
  openGraph: {
    title: "Our Work | S&H Painting Portfolio",
    description:
      "Explore our gallery of completed residential and commercial painting projects in Tampa and St. Petersburg.",
    images: ["/images/OG_Image.png"],
  },
};

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
