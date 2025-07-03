import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavMenu from "./components/NavMenu";

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
      <body className={inter.className + " text-gray-900"}>
        <header className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur border-b border-gray-200 z-50 shadow-sm">
          <NavMenu />
        </header>
        <main className="pt-20 min-h-screen">{children}</main>
      </body>
    </html>
  );
}
