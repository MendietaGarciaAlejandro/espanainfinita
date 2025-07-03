import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
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
  );
} 