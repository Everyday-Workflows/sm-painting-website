import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery / Galería | S&H Painting",
  description:
    "View our portfolio of residential interior and exterior painting projects. / Vea nuestro portafolio de proyectos residenciales de pintura interior y exterior.",
  openGraph: {
    title: "Gallery / Galería | S&H Painting",
    description:
      "View our portfolio of residential interior and exterior painting projects. / Vea nuestro portafolio de proyectos residenciales de pintura interior y exterior.",
    images: ["/og-image.webp"],
  },
};

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
