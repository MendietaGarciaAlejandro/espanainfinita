'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center min-h-[70vh] bg-gradient-to-br from-red-700 via-yellow-400 to-red-600 text-center overflow-hidden border-b-8 border-yellow-400">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-7xl font-extrabold text-white drop-shadow-lg mb-6 mt-10"
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
      <section id="valores" className="py-20 bg-gradient-to-r from-yellow-400 via-white to-red-600 border-b-4 border-red-700">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center mb-12 text-red-700 drop-shadow"
          >
            Nuestros Valores
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
      <section id="lider" className="py-20 bg-gradient-to-l from-red-700 via-yellow-400 to-white border-b-4 border-yellow-400">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
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
      <section id="contacto" className="py-20 bg-gradient-to-r from-red-600 via-yellow-400 to-white">
        <div className="container mx-auto px-4 max-w-xl">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center mb-8 text-red-700 drop-shadow"
          >
            Contacta con Nosotros
          </motion.h2>
          <form className="space-y-6 bg-white/90 rounded-xl shadow-lg p-8 border-t-4 border-yellow-400">
            <input
              type="text"
              placeholder="Nombre"
              className="w-full px-4 py-2 rounded border border-gray-300 focus:border-red-700 focus:outline-none"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-2 rounded border border-gray-300 focus:border-red-700 focus:outline-none"
            />
            <textarea
              placeholder="Mensaje"
              className="w-full px-4 py-2 rounded border border-gray-300 focus:border-red-700 focus:outline-none"
              rows={4}
            ></textarea>
            <button
              type="submit"
              className="w-full bg-red-700 text-white font-bold py-2 rounded hover:bg-yellow-400 hover:text-red-900 transition border-2 border-yellow-400"
            >
              Enviar
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-gray-100 text-sm bg-gradient-to-r from-red-700 via-yellow-400 to-red-600 border-t-4 border-yellow-400 mt-10 shadow-inner">
        © {new Date().getFullYear()} España Infinita. Todos los derechos reservados.
      </footer>
    </>
  );
}
