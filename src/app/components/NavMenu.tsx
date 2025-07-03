'use client';

import { useState } from 'react';

export default function NavMenu() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <nav className="container mx-auto flex items-center justify-between py-3 px-4">
        <span className="font-extrabold text-2xl text-red-700 tracking-tight">
          España Infinita
        </span>
        
        {/* Menú para escritorio - alineado a la derecha */}
        <div className="hidden md:flex items-center gap-6">
          <ul className="flex gap-6 text-sm font-medium items-center">
            <li>
              <a
                href="#valores"
                className="hover:text-red-700 transition px-3 py-2 rounded-md hover:bg-red-50"
              >
                Valores
              </a>
            </li>
            <li>
              <a
                href="#lider"
                className="hover:text-red-700 transition px-3 py-2 rounded-md hover:bg-red-50"
              >
                Líder
              </a>
            </li>
            <li>
              <a
                href="#contacto"
                className="hover:text-red-700 transition px-3 py-2 rounded-md hover:bg-red-50"
              >
                Contacto
              </a>
            </li>
          </ul>
          <a href="#contacto" className="bg-red-700 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-red-800 transition shadow-sm">
            Únete
          </a>
        </div>
        
        {/* Botón de menú móvil */}
        <button 
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 rounded-full hover:bg-red-50 transition-colors"
          onClick={toggleMenu}
          aria-label="Menú"
        >
          <div className="w-6 h-6 relative flex justify-center items-center">
            <span className={`absolute block w-6 h-0.5 bg-red-700 transition-all duration-300 ${menuOpen ? 'rotate-45' : '-translate-y-1.5'}`}></span>
            <span className={`absolute block w-6 h-0.5 bg-red-700 transition-all duration-300 ${menuOpen ? 'opacity-0 scale-x-0' : 'opacity-100'}`}></span>
            <span className={`absolute block w-6 h-0.5 bg-red-700 transition-all duration-300 ${menuOpen ? '-rotate-45' : 'translate-y-1.5'}`}></span>
          </div>
        </button>
      </nav>
      
      {/* Menú desplegable para móvil */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${menuOpen ? 'max-h-80 border-b border-gray-200' : 'max-h-0'}`}>
        <ul className="flex flex-col text-sm font-medium bg-white/95 backdrop-blur">
          <li>
            <a
              href="#valores"
              className="block py-3 px-4 hover:bg-red-50 hover:text-red-700 transition"
              onClick={() => setMenuOpen(false)}
            >
              Valores
            </a>
          </li>
          <li>
            <a
              href="#lider"
              className="block py-3 px-4 hover:bg-red-50 hover:text-red-700 transition"
              onClick={() => setMenuOpen(false)}
            >
              Líder
            </a>
          </li>
          <li>
            <a
              href="#contacto"
              className="block py-3 px-4 hover:bg-red-50 hover:text-red-700 transition"
              onClick={() => setMenuOpen(false)}
            >
              Contacto
            </a>
          </li>
          <li className="px-4 py-3">
            <a
              href="#contacto"
              className="block bg-red-700 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-red-800 transition text-center shadow-sm"
              onClick={() => setMenuOpen(false)}
            >
              Únete
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}