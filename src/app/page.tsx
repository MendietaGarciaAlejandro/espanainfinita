'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-section bg-gradient-to-b from-white to-gray-100">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="container mx-auto px-4 text-center"
        >
          <h1 className="text-6xl font-bold mb-6 text-gradient">
            España Infinita
          </h1>
          <p className="text-xl mb-8 text-gray-700 max-w-2xl mx-auto">
            Un proyecto político transformador para devolver la cordura a España
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-red-600 text-white px-8 py-3 rounded-full font-semibold"
          >
            Descubre Más
          </motion.button>
        </motion.div>
      </section>

      {/* Valores Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            <div className="text-center p-6">
              <h3 className="text-2xl font-bold mb-4">Tradición</h3>
              <p className="text-gray-600">
                Preservando los valores fundamentales que han forjado nuestra nación
              </p>
            </div>
            <div className="text-center p-6">
              <h3 className="text-2xl font-bold mb-4">Innovación</h3>
              <p className="text-gray-600">
                Adaptándonos a los nuevos tiempos sin perder nuestra esencia
              </p>
            </div>
            <div className="text-center p-6">
              <h3 className="text-2xl font-bold mb-4">Unidad</h3>
              <p className="text-gray-600">
                Trabajando juntos por una España más fuerte y próspera
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Líder Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row items-center gap-12"
          >
            <div className="md:w-1/2">
              <Image
                src="/francisco.jpg"
                alt="Francisco - Líder de España Infinita"
                width={500}
                height={500}
                className="rounded-lg shadow-xl"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-4xl font-bold mb-6">Francisco</h2>
              <p className="text-xl text-gray-700 mb-6">
                Líder visionario comprometido con el futuro de España
              </p>
              <p className="text-gray-600">
                Con una trayectoria dedicada al servicio público y una visión clara
                para el futuro de nuestra nación, Francisco lidera el movimiento
                España Infinita con determinación y esperanza.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-yellow-500 text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="container mx-auto px-4 text-center"
        >
          <h2 className="text-4xl font-bold mb-6">Únete al Movimiento</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Sé parte del cambio que España necesita. Juntos podemos construir
            un futuro mejor para todos.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-red-600 px-8 py-3 rounded-full font-semibold"
          >
            Participa Ahora
          </motion.button>
        </motion.div>
      </section>
    </main>
  );
}
