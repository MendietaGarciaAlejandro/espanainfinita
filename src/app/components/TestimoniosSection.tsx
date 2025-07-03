import { motion } from 'framer-motion';

const testimonios = [
  {
    nombre: 'María López',
    texto: 'España Infinita me devolvió la esperanza en el futuro de nuestro país. Un proyecto honesto y necesario.',
    avatar: '/globe.svg',
  },
  {
    nombre: 'Juan García',
    texto: 'Me sorprendió la cercanía y la claridad de sus propuestas. ¡Por fin algo diferente!',
    avatar: '/window.svg',
  },
  {
    nombre: 'Lucía Fernández',
    texto: 'Un equipo comprometido y transparente. Recomiendo a todos informarse sobre España Infinita.',
    avatar: '/vercel.svg',
  },
];

export default function TestimoniosSection() {
  return (
    <section id="testimonios" className="py-20 px-4 bg-gradient-to-r from-yellow-200 via-white to-red-200 border-b-4 border-yellow-300 shadow-inner">
      <div className="container mx-auto max-w-5xl">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, amount: 0.2 }}
          className="text-3xl md:text-4xl font-bold text-center mb-12 text-red-700 drop-shadow"
        >
          Lo que dicen de nosotros
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonios.map((t, i) => (
            <motion.div
              key={t.nombre}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              viewport={{ once: true, amount: 0.2 }}
              className="bg-white/95 rounded-xl shadow-2xl p-6 flex flex-col items-center text-center border-2 border-yellow-300 hover:shadow-yellow-400 transition-all duration-200 cursor-pointer"
            >
              <img src={t.avatar} alt={t.nombre} className="w-16 h-16 rounded-full mb-4 border-4 border-yellow-300 bg-white object-cover" />
              <p className="text-red-700 italic mb-4">“{t.texto}”</p>
              <span className="font-bold text-yellow-600">{t.nombre}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 