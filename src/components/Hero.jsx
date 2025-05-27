import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Hero() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const isDark = document.documentElement.classList.contains("dark");
    setDarkMode(isDark);

    // Listener para cambios dinámicos si el modo cambia
    const observer = new MutationObserver(() => {
      const isNowDark = document.documentElement.classList.contains("dark");
      setDarkMode(isNowDark);
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="min-h-screen bg-gray-50 dark:bg-gray-900 text-center px-4 flex items-center justify-center py-12 md:py-20">
      <div className="flex flex-col items-center space-y-6 max-w-3xl">
        <motion.img
          src={darkMode ? "/logo-morado.png" : "/logo-rojo.png"}
          alt="ByHijar Web Solutions"
          className="w-32 h-32 md:w-40 md:h-40"
          role="presentation"
          aria-hidden="true"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        />
        <motion.h1
          className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white leading-tight"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <span className="text-red-600 dark:text-purple-400">Tu sitio web</span> no debería ser solo bonito.
        </motion.h1>
        <motion.p
          className="mt-2 text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-xl"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Debería convertir. Conectar. Representarte.
          <br />
          Yo me encargo de eso. Tú solo enfócate en crecer.
        </motion.p>
        <motion.a
          href="#contacto"
          className="mt-6 inline-block bg-purple-600 hover:bg-purple-700 dark:bg-purple-500 dark:hover:bg-purple-600 text-white px-6 py-2 rounded transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 200 }}
        >
          Hablemos
        </motion.a>
      </div>
    </section>
  );
}
