import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "España Infinita - Un Proyecto Político Transformador",
  description:
    "España Infinita es un proyecto político transformador que busca devolver la cordura a España a través de propuestas innovadoras y valores fundamentales.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <div className="min-h-screen bg-white">{children}</div>
      </body>
    </html>
  );
}
