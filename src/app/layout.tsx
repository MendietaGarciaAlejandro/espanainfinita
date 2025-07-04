import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "./components/Header";
import LoaderInfinito from "./components/LoaderInfinito";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "España Infinita - Un Proyecto Político Transformador",
  description: "Descubre la riqueza, diversidad y pasión de nuestro país. Un viaje por la cultura, la historia y los valores que nos hacen únicos.",
  openGraph: {
    title: "España Infinita",
    description: "Descubre la riqueza, diversidad y pasión de nuestro país. Un viaje por la cultura, la historia y los valores que nos hacen únicos.",
    url: "https://espanainfinita.com",
    images: [
      {
        url: "/francisco.jpg",
        width: 1200,
        height: 630,
        alt: "España Infinita logo"
      }
    ],
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "España Infinita",
    description: "Descubre la riqueza, diversidad y pasión de nuestro país.",
    images: ["/francisco.jpg"]
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="España Infinita - Descubre la riqueza, diversidad y pasión de nuestro país. Un viaje por la cultura, la historia y los valores que nos hacen únicos." />
        <meta property="og:title" content="España Infinita" />
        <meta property="og:description" content="Descubre la riqueza, diversidad y pasión de nuestro país. Un viaje por la cultura, la historia y los valores que nos hacen únicos." />
        <meta property="og:image" content="/francisco.jpg" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://espanainfinita.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="España Infinita" />
        <meta name="twitter:description" content="Descubre la riqueza, diversidad y pasión de nuestro país." />
        <meta name="twitter:image" content="/francisco.jpg" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={inter.className + " text-gray-900"}>
        <LoaderInfinito />
        <Header />
        <main className="pt-24 min-h-screen">{children}</main>
      </body>
    </html>
  );
}
