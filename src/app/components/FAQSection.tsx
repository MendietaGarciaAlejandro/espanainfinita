"use client";
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  {
    pregunta: '¿Qué es España Infinita?',
    respuesta: 'Es un proyecto político y social que busca transformar España a través de propuestas innovadoras y valores fundamentales.'
  },
  {
    pregunta: '¿Quién puede participar?',
    respuesta: 'Cualquier persona comprometida con el cambio positivo y los valores de España Infinita puede sumarse.'
  },
  {
    pregunta: '¿Cómo puedo contactar o colaborar?',
    respuesta: 'Puedes usar el formulario de contacto de la web o escribirnos a nuestro correo para propuestas y colaboraciones.'
  },
];

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="py-20 px-4 bg-gradient-to-r from-yellow-100 via-white to-red-100 border-b-4 border-yellow-200 shadow-inner">
      <div className="container mx-auto max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-red-700 drop-shadow">Preguntas Frecuentes</h2>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={faq.pregunta} className="bg-white/95 rounded-xl shadow-lg border-2 border-yellow-200">
              <button
                className="w-full text-left px-6 py-4 font-semibold text-red-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400 focus-visible:ring-offset-2 flex justify-between items-center"
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
                aria-controls={`faq-panel-${i}`}
                id={`faq-header-${i}`}
              >
                {faq.pregunta}
                <span className="ml-4 text-yellow-400">{open === i ? '-' : '+'}</span>
              </button>
              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    id={`faq-panel-${i}`}
                    role="region"
                    aria-labelledby={`faq-header-${i}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden px-6 pb-4 text-yellow-900"
                  >
                    {faq.respuesta}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 