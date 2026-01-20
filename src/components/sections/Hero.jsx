import { motion } from "framer-motion";
import WhatsAppButton from "@/components/shared/WhatsAppButton";

export default function Hero() {

  return (
    <section className="min-h-screen bg-gray-50 text-center px-4 flex items-center justify-center py-12 md:py-20">
      <div className="flex flex-col items-center space-y-6 max-w-3xl">
        <motion.img
          src="/logos/logo-rojo.png"
          alt="Logo ByHijar"
          className="w-32 h-32 md:w-40 md:h-40 object-contain drop-shadow-lg"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />

        <motion.h1
          className="text-3xl md:text-6xl font-bold text-gray-900 leading-tight"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <span className="text-brand-red">
            Desarrollo Web Profesional para Negocios que Quieren Crecer
          </span>
        </motion.h1>

        <motion.p
          className="mt-2 text-lg md:text-xl text-gray-700 max-w-xl"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Potencia tu negocio con sitios rápidos, seguros y diseñados para vender.
          <br />
          Calidad profesional y soluciones a medida para tu marca.
        </motion.p>

        <motion.a
          href="#servicios"
          className="mt-6 inline-block bg-brand-red hover:bg-red-700 text-white px-6 py-2 rounded transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 200 }}
        >
          Ver Soluciones
        </motion.a>

        <WhatsAppButton />

      </div>
    </section>
  );
}
