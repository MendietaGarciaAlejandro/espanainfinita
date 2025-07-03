import { motion } from 'framer-motion';

export default function ContactoSection() {
  return (
    <section 
      id="contacto"
      className="py-20 px-4 bg-gradient-to-r from-red-600 via-yellow-300 to-white shadow-inner"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-xl w-full">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, amount: 0.2 }}
          className="text-3xl md:text-4xl font-bold text-center mb-8 text-red-700 drop-shadow"
        >
          Contacta con Nosotros
        </motion.h2>
        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true, amount: 0.2 }}
          className="bg-white/90 rounded-xl shadow-2xl p-6 sm:p-8 border-t-4 border-yellow-400 mx-auto w-full max-w-xl border border-yellow-200"
          aria-label="Formulario de contacto"
        >
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
                name="nombre"
                required
                placeholder="Tu nombre"
                className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:border-red-700 focus:ring-2 focus:ring-red-200 focus:outline-none transition-all duration-200 focus-visible:ring-2 focus-visible:ring-yellow-400 focus-visible:ring-offset-2"
                aria-required="true"
                aria-label="Nombre"
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
                name="email"
                required
                placeholder="tu@email.com"
                className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:border-red-700 focus:ring-2 focus:ring-red-200 focus:outline-none transition-all duration-200 focus-visible:ring-2 focus-visible:ring-yellow-400 focus-visible:ring-offset-2"
                aria-required="true"
                aria-label="Email"
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
                name="mensaje"
                required
                placeholder="Tu mensaje"
                className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:border-red-700 focus:ring-2 focus:ring-red-200 focus:outline-none transition-all duration-200 focus-visible:ring-2 focus-visible:ring-yellow-400 focus-visible:ring-offset-2"
                rows={4}
                aria-required="true"
                aria-label="Mensaje"
              ></textarea>
            </div>
          </div>
          <motion.button
            type="submit"
            whileHover={{ scale: 1.05, boxShadow: "0 8px 32px 0 rgba(234,179,8,0.18)" }}
            whileTap={{ scale: 0.96 }}
            className="w-full mt-4 py-3 px-6 rounded-full bg-yellow-400 text-red-800 font-bold text-lg shadow hover:shadow-2xl transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400 focus-visible:ring-offset-2"
            aria-label="Enviar mensaje"
          >
            Enviar
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
} 