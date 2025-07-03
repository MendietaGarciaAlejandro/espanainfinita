import { motion } from 'framer-motion';

export default function ValoresSection() {
  return (
    <section 
      id="valores"
      className="py-20 px-4 bg-gradient-to-r from-yellow-300 via-white to-red-600 border-b-4 border-red-700"
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
  );
} 