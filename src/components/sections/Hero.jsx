import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import WhatsAppButton from "@/components/shared/WhatsAppButton";

const logos = [
  { src: "/logos/logo-rojo.png", alt: "Logo Rojo", glow: "shadow-[0_0_25px_#ff2c2c50]" },
  { src: "/logos/logo-morado.png", alt: "Logo Morado", glow: "shadow-[0_0_25px_#a855f750]" },
];

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalo = setInterval(() => {
      setIndex((prev) => (prev + 1) % logos.length);
    }, 5000);
    return () => clearInterval(intervalo);
  }, []);

  return (
    <section className="min-h-screen bg-gray-50 text-center px-4 flex items-center justify-center py-12 md:py-20">
      <div className="flex flex-col items-center space-y-6 max-w-3xl">
        <AnimatePresence mode="wait">
          <motion.img
            key={logos[index].src}
            src={logos[index].src}
            alt={logos[index].alt}
            loading="lazy"
            className={`w-32 h-32 md:w-40 md:h-40 rounded-full transition-all duration-500 ${logos[index].glow}`}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.8 }}
          />
        </AnimatePresence>

        <motion.h1
          className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <span className="text-purple-600">
            Desarrollo que impulsa tu crecimiento
          </span>
        </motion.h1>

        <motion.p
          className="mt-2 text-lg md:text-xl text-gray-700 max-w-xl"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Webs modernas. Funcionales. Diseñadas para convertir.
          <br />
          Yo me encargo de eso. Tú solo enfócate en crecer.
        </motion.p>

        <motion.a
          href="#contacto"
          className="mt-6 inline-block bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 200 }}
        >
          Hablemos
        </motion.a>

        <WhatsAppButton />

      </div>
    </section>
  );
}
