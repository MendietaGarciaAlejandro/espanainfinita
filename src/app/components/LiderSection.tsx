import { motion } from 'framer-motion';
import Image from 'next/image';

export default function LiderSection() {
  return (
    <section 
      id="lider"
      className="py-20 px-4 bg-gradient-to-l from-red-700 via-yellow-300 to-white border-b-4 border-yellow-300"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl flex flex-col md:flex-row items-center gap-8 md:gap-12">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, amount: 0.2 }}
          whileHover={{ scale: 1.03, boxShadow: "0 8px 32px 0 rgba(220,38,38,0.15)" }}
          className="md:w-1/3 flex justify-center cursor-pointer hover:shadow-2xl transition-all duration-200"
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
  );
} 