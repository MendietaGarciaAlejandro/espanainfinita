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
          viewport={{ once: true, amount: 0.2 }}
          className="text-3xl md:text-4xl font-bold text-center mb-12 text-red-700 drop-shadow"
        >
          Nuestros Valores
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {/* Tarjetas de valores */}
          {[
            {
              icon: "🌟",
              title: "Excelencia",
              desc: "Buscamos la máxima calidad en todo lo que hacemos, superando expectativas y creciendo cada día.",
            },
            {
              icon: "🤝",
              title: "Compromiso",
              desc: "Nos implicamos con pasión y responsabilidad en cada proyecto, aportando valor real a la sociedad.",
            },
            {
              icon: "🚩",
              title: "Diversidad",
              desc: "Celebramos la pluralidad nacional, culturas y personas, enriqueciendo nuestra península.",
            },
          ].map((valor, i) => (
            <motion.div
              key={valor.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              viewport={{ once: true, amount: 0.2 }}
              whileHover={{ scale: 1.04, boxShadow: "0 8px 32px 0 rgba(220,38,38,0.12)" }}
              className="bg-white/90 rounded-xl shadow-lg p-6 flex flex-col items-center text-center hover:shadow-2xl transition-all duration-200 cursor-pointer"
            >
              <span className="text-4xl mb-3">{valor.icon}</span>
              <h3 className="text-xl font-bold mb-2 text-red-700">{valor.title}</h3>
              <p className="text-gray-700">{valor.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 