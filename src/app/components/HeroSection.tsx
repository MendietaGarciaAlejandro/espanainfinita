import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section
      id="inicio"
      className="flex flex-col items-center justify-center min-h-[70vh] text-center overflow-hidden border-b-8 border-yellow-300 px-4 bg-gradient-to-br from-red-700 via-yellow-300 to-red-600 relative"
    >
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-white drop-shadow-lg mb-6 mt-10"
      >
        España Infinita
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        viewport={{ once: true, amount: 0.2 }}
        className="text-lg md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto"
      >
        Descubre la riqueza, diversidad y pasión de nuestro país. Un viaje por la cultura, la historia y los valores que nos hacen únicos.
      </motion.p>
      <motion.a
        href="#valores"
        whileHover={{ scale: 1.07, boxShadow: "0 8px 32px 0 rgba(220,38,38,0.25)" }}
        whileTap={{ scale: 0.96 }}
        className="inline-block px-8 py-3 rounded-full bg-yellow-300 text-red-800 font-bold text-lg shadow-lg hover:shadow-2xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2"
      >
        Conócenos
      </motion.a>
    </section>
  );
} 