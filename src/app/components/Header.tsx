"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { href: "#inicio", label: "Inicio" },
    { href: "#valores", label: "Valores" },
    { href: "#lider", label: "Líder" },
    { href: "#contacto", label: "Contacto" },
  ];

  // Evitar scroll del body cuando el menú móvil está abierto
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-red-700 via-yellow-300 to-red-600 text-white shadow"
    >
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="#inicio" className="text-2xl font-bold text-white drop-shadow focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400 focus-visible:ring-offset-2">
            España Infinita
          </Link>

          {/* Menú escritorio */}
          <div className="hidden md:flex space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-white/90 hover:text-yellow-300 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400 focus-visible:ring-offset-2 px-2 py-1 rounded"
                tabIndex={0}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Botón menú móvil */}
          <button
            className="md:hidden text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400 focus-visible:ring-offset-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-controls="mobile-menu"
            aria-expanded={isMenuOpen}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Fondo semitransparente para menú móvil */}
        {isMenuOpen && (
          <div
            className="fixed inset-0 bg-black/50 z-40 md:hidden animate-fade-in"
            aria-hidden="true"
            onClick={() => setIsMenuOpen(false)}
          />
        )}
        {/* Menú móvil */}
        {isMenuOpen && (
          <motion.div
            id="mobile-menu"
            role="menu"
            aria-label="Menú de navegación móvil"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-20 left-0 right-0 z-50 md:hidden mt-0 space-y-4 bg-gradient-to-r from-red-700 via-yellow-300 to-red-600 text-white p-6 rounded-b-2xl shadow-lg"
          >
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block text-white/90 hover:text-yellow-300 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400 focus-visible:ring-offset-2 px-2 py-2 rounded"
                tabIndex={0}
                role="menuitem"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </motion.div>
        )}
      </nav>

      {/* Botón flotante de volver arriba */}
      <a
        href="#inicio"
        className="fixed bottom-2 right-6 z-40 bg-yellow-400 text-red-800 rounded-full shadow-lg p-3 flex items-center justify-center hover:bg-yellow-300 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400 focus-visible:ring-offset-2 animate-fade-in"
        aria-label="Volver arriba"
        style={{ boxShadow: "0 4px 24px 0 rgba(220,38,38,0.18)" }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
        </svg>
      </a>
    </motion.header>
  );
} 