"use client";
import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaWhatsapp, FaTelegram, FaEnvelope } from 'react-icons/fa';

export default function ContactoSection() {
  const [form, setForm] = useState({ nombre: '', email: '', mensaje: '' });
  const [touched, setTouched] = useState({ nombre: false, email: false, mensaje: false });
  const [enviando, setEnviando] = useState(false);
  const [exito, setExito] = useState(false);
  const [error, setError] = useState('');

  const validar = () => {
    if (!form.nombre.trim()) return 'El nombre es obligatorio.';
    if (!form.email.trim() || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)) return 'Introduce un email válido.';
    if (!form.mensaje.trim()) return 'El mensaje es obligatorio.';
    return '';
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setTouched({ ...touched, [e.target.name]: true });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setTouched({ nombre: true, email: true, mensaje: true });
    const err = validar();
    if (err) {
      setError(err);
      setExito(false);
      return;
    }
    setError('');
    setEnviando(true);
    setTimeout(() => {
      setEnviando(false);
      setExito(true);
      setForm({ nombre: '', email: '', mensaje: '' });
      setTouched({ nombre: false, email: false, mensaje: false });
    }, 1500);
  };

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
          onSubmit={handleSubmit}
        >
          <div className="mb-4">
            <label htmlFor="nombre" className="block text-sm font-medium text-gray-700 mb-1">Nombre</label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              required
              className={`w-full px-4 py-2 rounded-lg border focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400 focus-visible:ring-offset-2 ${touched.nombre && !form.nombre ? 'border-red-500' : 'border-gray-300'} ${exito ? 'border-green-500' : ''}`}
              aria-required="true"
              aria-label="Nombre"
              value={form.nombre}
              onChange={handleChange}
              onBlur={handleBlur}
              disabled={enviando}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className={`w-full px-4 py-2 rounded-lg border focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400 focus-visible:ring-offset-2 ${touched.email && (!form.email || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)) ? 'border-red-500' : 'border-gray-300'} ${exito ? 'border-green-500' : ''}`}
              aria-required="true"
              aria-label="Email"
              value={form.email}
              onChange={handleChange}
              onBlur={handleBlur}
              disabled={enviando}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="mensaje" className="block text-sm font-medium text-gray-700 mb-1">Mensaje</label>
            <textarea
              id="mensaje"
              name="mensaje"
              required
              rows={4}
              className={`w-full px-4 py-2 rounded-lg border focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400 focus-visible:ring-offset-2 ${touched.mensaje && !form.mensaje ? 'border-red-500' : 'border-gray-300'} ${exito ? 'border-green-500' : ''}`}
              aria-required="true"
              aria-label="Mensaje"
              value={form.mensaje}
              onChange={handleChange}
              onBlur={handleBlur}
              disabled={enviando}
            />
          </div>
          {error && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mb-4 text-red-600 font-semibold text-center"
            >
              {error}
            </motion.div>
          )}
          {exito && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mb-4 text-green-600 font-semibold text-center"
            >
              ¡Mensaje enviado correctamente!
            </motion.div>
          )}
          <motion.button
            type="submit"
            whileHover={{ scale: 1.05, boxShadow: "0 8px 32px 0 rgba(234,179,8,0.18)" }}
            whileTap={{ scale: 0.96 }}
            className="w-full mt-4 py-3 px-6 rounded-full bg-yellow-400 text-red-800 font-bold text-lg shadow hover:shadow-2xl transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400 focus-visible:ring-offset-2 flex items-center justify-center gap-2"
            aria-label="Enviar mensaje"
            disabled={enviando}
          >
            {enviando ? (
              <svg className="animate-spin h-5 w-5 mr-2 text-red-800" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"></path>
              </svg>
            ) : null}
            {enviando ? 'Enviando...' : 'Enviar'}
          </motion.button>
        </motion.form>
        {/* Enlaces directos */}
        <div className="flex justify-center gap-6 mt-8">
          <a
            href="https://wa.me/34651360329"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-600 hover:text-green-800 text-3xl transition-colors"
            aria-label="WhatsApp"
          >
            <FaWhatsapp />
          </a>
          <a
            href="mailto:info@ejemplo.com"
            className="text-red-700 hover:text-red-900 text-3xl transition-colors"
            aria-label="Email"
          >
            <FaEnvelope />
          </a>
          <a
            href="https://t.me/elfirer2"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-700 text-3xl transition-colors"
            aria-label="Telegram"
          >
            <FaTelegram />
          </a>
        </div>
      </div>
    </section>
  );
} 