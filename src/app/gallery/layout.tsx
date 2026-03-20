import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery / Galería | S&H Painting",
  description:
    "View our portfolio of residential and commercial painting projects. / Vea nuestro portafolio de proyectos de pintura residencial y comercial.",
  openGraph: {
    title: "Gallery / Galería | S&H Painting",
    description:
      "View our portfolio of residential and commercial painting projects. / Vea nuestro portafolio de proyectos de pintura residencial y comercial.",
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
