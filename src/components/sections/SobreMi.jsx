import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function SobreMi() {
  const [showSecond, setShowSecond] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowSecond((prev) => !prev);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="sobre-mi" className="bg-white py-16 px-4 text-gray-800">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <motion.h2
          className="text-3xl md:text-4xl font-bold"
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Sobre mí
        </motion.h2>

        {/* Imagen con animación sutil de crossfade */}
        <div className="relative w-32 h-32 mx-auto rounded-full shadow-lg border-2 border-gray-100 overflow-hidden bg-gray-100">
          <img
            src="/img/jose1.jpg"
            alt="José Hijar - Retrato"
            className="absolute inset-0 w-full h-full object-cover z-10"
          />
          <img
            src="/img/jose2.jpg"
            alt="José Hijar - Trabajo"
            className={`absolute inset-0 w-full h-full object-cover z-20 transition-opacity duration-1000 ease-in-out ${showSecond ? "opacity-100" : "opacity-0"
              }`}
          />
        </div>

        <motion.div
          className="space-y-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <p className="text-lg md:text-xl leading-relaxed font-medium">
            Soy José Hijar. Desarrollo soluciones digitales que combinan ingeniería sólida con estrategia de negocio. Mi enfoque es claro: entregar webs que funcionan, cargan rápido y no te dan problemas.
          </p>

          <p className="text-base md:text-lg text-gray-600">
            Entiendo lo que busca una empresa hoy: comunicación fluida, cumplimiento de plazos y calidad técnica. No soy una agencia burocrática ni un principiante; soy tu socio tecnológico directo.
          </p>

          <p className="text-base md:text-lg text-gray-600">
            Mi promesa de valor es simple: construir activos digitales que ayuden a tu negocio a operar mejor y vender más, ahorrándote dolores de cabeza técnicos para que tú te enfoques en crecer.
          </p>
        </motion.div>

        <motion.blockquote
          className="italic text-brand-red text-lg pt-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          “No necesitas una web perfecta. Necesitas una web que funcione y conecte.”
        </motion.blockquote>
      </div>
    </section>
  );
}
