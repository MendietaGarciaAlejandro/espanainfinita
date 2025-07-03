import { motion } from 'framer-motion';

const hitos = [
  {
    fecha: '2023',
    titulo: 'Nacimiento de la idea',
    desc: 'Un grupo de ciudadanos se une para imaginar una España mejor.'
  },
  {
    fecha: '2024',
    titulo: 'Primeras propuestas',
    desc: 'Se presentan las primeras propuestas y se suma más gente al proyecto.'
  },
  {
    fecha: '2025',
    titulo: 'Expansión nacional',
    desc: 'España Infinita se consolida como un movimiento con presencia en todo el país.'
  },
];

export default function TimelineSection() {
  return (
    <section id="timeline" className="py-20 px-4 bg-gradient-to-r from-yellow-200 via-white to-red-200 shadow-inner">
      <div className="container mx-auto max-w-4xl">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, amount: 0.2 }}
          className="text-3xl md:text-4xl font-bold text-center mb-12 text-red-700 drop-shadow"
        >
          Nuestra Historia
        </motion.h2>
        <div className="relative pl-12">
          <div className="absolute left-4 top-0 w-1 h-full bg-yellow-300 rounded-full z-0" />
          {hitos.map((hito, i) => (
            <motion.div
              key={hito.fecha}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              viewport={{ once: true, amount: 0.2 }}
              className="mb-12 last:mb-0 relative flex items-start"
            >
              <div className="flex flex-col items-center z-10" style={{ width: '48px' }}>
                <div className="w-12 h-12 bg-white border-4 border-yellow-400 shadow-xl flex items-center justify-center text-2xl font-extrabold text-red-700 mb-2" style={{ borderRadius: '1.5rem' }}>
                  {hito.fecha}
                </div>
                {i < hitos.length - 1 && (
                  <div className="w-1 h-full bg-yellow-300" style={{ minHeight: '40px' }} />
                )}
              </div>
              <div className="ml-4 bg-white/95 rounded-xl shadow-lg p-6 border-2 border-yellow-200 flex-1">
                <h3 className="text-xl font-bold text-red-700 mb-2">{hito.titulo}</h3>
                <p className="text-yellow-900">{hito.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 