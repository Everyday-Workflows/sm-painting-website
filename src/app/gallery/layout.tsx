import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery | S&M Painting",
  description: "View our portfolio of residential and commercial painting projects. See the quality of our work and get inspiration for your next project.",
  openGraph: {
    title: "Gallery | S&M Painting",
    description: "View our portfolio of residential and commercial painting projects.",
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
