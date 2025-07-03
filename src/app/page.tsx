'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section 
        style={{ 
          background: 'linear-gradient(to bottom right, #b91c1c, #facc15, #dc2626)',
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '70vh',
          textAlign: 'center',
          overflow: 'hidden',
          borderBottom: '8px solid #facc15',
          padding: '0 1rem'
        }}
      >
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-white drop-shadow-lg mb-6 mt-10"
        >
          España Infinita
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto mb-8"
        >
          Un proyecto político transformador para devolver la cordura y la esperanza a España.
        </motion.p>
        <motion.a
          href="#contacto"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          className="inline-block bg-yellow-400 text-red-800 font-bold px-8 py-3 rounded-full shadow-lg hover:bg-red-700 hover:text-white transition mb-10 border-2 border-white"
        >
          Súmate al cambio
        </motion.a>
      </section>

      {/* Valores Section */}
      <section 
        id="valores" 
        style={{
          padding: '5rem 1rem',
          background: 'linear-gradient(to right, #facc15, #ffffff, #dc2626)',
          borderBottom: '4px solid #b91c1c'
        }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center mb-12 text-red-700 drop-shadow"
          >
            Nuestros Valores
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white/80 rounded-xl shadow-lg p-8 text-center border-t-4 border-red-700 hover:bg-red-100 transition"
            >
              <h3 className="text-xl font-bold mb-2 text-red-700">Tradición</h3>
              <p className="text-gray-700">Preservamos los valores que han forjado nuestra nación.</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-yellow-100 rounded-xl shadow-lg p-8 text-center border-t-4 border-yellow-400 hover:bg-yellow-200 transition"
            >
              <h3 className="text-xl font-bold mb-2 text-yellow-700">Innovación</h3>
              <p className="text-gray-700">Miramos al futuro con propuestas modernas y realistas.</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white/80 rounded-xl shadow-lg p-8 text-center border-t-4 border-red-700 hover:bg-red-100 transition"
            >
              <h3 className="text-xl font-bold mb-2 text-red-700">Unidad</h3>
              <p className="text-gray-700">Trabajamos juntos por una España más fuerte y próspera.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Líder Section */}
      <section 
        id="lider" 
        style={{
          padding: '5rem 1rem',
          background: 'linear-gradient(to left, #b91c1c, #facc15, #ffffff)',
          borderBottom: '4px solid #facc15'
        }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="md:w-1/3 flex justify-center"
          >
            <div className="w-48 h-48 rounded-full bg-gradient-to-br from-red-700 to-yellow-400 flex items-center justify-center shadow-lg overflow-hidden border-4 border-white">
              <Image
                src="/francisco.jpg"
                alt="Francisco - Líder"
                width={176}
                height={176}
                className="w-44 h-44 object-cover rounded-full"
                priority
              />
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="md:w-2/3"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-red-700 drop-shadow">Francisco</h2>
            <p className="text-lg text-gray-700 mb-4">Líder visionario comprometido con el futuro de España.</p>
            <p className="text-gray-600">Con una trayectoria dedicada al servicio público y una visión clara para el futuro de nuestra nación, Francisco lidera el movimiento España Infinita con determinación y esperanza.</p>
          </motion.div>
        </div>
      </section>

      {/* Contacto Section */}
      <section 
        id="contacto" 
        style={{
          padding: '5rem 1rem',
          background: 'linear-gradient(to right, #dc2626, #facc15, #ffffff)'
        }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-xl w-full">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center mb-8 text-red-700 drop-shadow"
          >
            Contacta con Nosotros
          </motion.h2>
          <form className="bg-white/90 rounded-xl shadow-lg p-6 sm:p-8 border-t-4 border-yellow-400 mx-auto w-full max-w-md">
            <div className="mb-4">
              <label htmlFor="nombre" className="block text-sm font-medium text-gray-700 mb-1">Nombre</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                  </svg>
                </div>
                <input
                  id="nombre"
                  type="text"
                  placeholder="Tu nombre"
                  className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:border-red-700 focus:ring-2 focus:ring-red-200 focus:outline-none transition-all duration-200"
                />
              </div>
            </div>
            
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </div>
                <input
                  id="email"
                  type="email"
                  placeholder="tu@email.com"
                  className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:border-red-700 focus:ring-2 focus:ring-red-200 focus:outline-none transition-all duration-200"
                />
              </div>
            </div>
            
            <div className="mb-6">
              <label htmlFor="mensaje" className="block text-sm font-medium text-gray-700 mb-1">Mensaje</label>
              <div className="relative">
                <div className="absolute top-3 left-0 pl-3 flex items-start pointer-events-none">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z" clipRule="evenodd" />
                  </svg>
                </div>
                <textarea
                  id="mensaje"
                  placeholder="Tu mensaje"
                  className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:border-red-700 focus:ring-2 focus:ring-red-200 focus:outline-none transition-all duration-200"
                  rows={4}
                ></textarea>
              </div>
            </div>
            
            <button
              type="submit"
              className="w-full bg-red-700 text-white font-bold py-3 px-4 rounded-lg hover:bg-yellow-400 hover:text-red-900 transition-all duration-300 border-2 border-yellow-400 shadow-md hover:shadow-lg transform hover:scale-[1.02] active:scale-[0.98]"
            >
              Enviar mensaje
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer 
        style={{
          padding: '2rem 1rem',
          textAlign: 'center',
          color: '#f3f4f6',
          fontSize: '0.875rem',
          background: 'linear-gradient(to right, #b91c1c, #facc15, #dc2626)',
          borderTop: '4px solid #facc15',
          marginTop: '2.5rem',
          boxShadow: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)'
        }}
      >
        © {new Date().getFullYear()} España Infinita. Todos los derechos reservados.
      </footer>
    </>
  );
}
