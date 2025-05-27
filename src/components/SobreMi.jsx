import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const fotos = [
  "/img/jose1.jpg",
  "/img/jose2.jpg",
  "/img/jose3.jpg"
];

export default function SobreMi() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % fotos.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-white dark:bg-gray-900 py-16 px-4 text-gray-800 dark:text-gray-100" id="sobre-mi">
      <div className="max-w-4xl mx-auto text-center space-y-6">
        <motion.h2
          className="text-3xl md:text-4xl font-bold"
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Sobre mí
        </motion.h2>

        <motion.img
          key={index}
          src={fotos[index]}
          alt="José Hijar"
          className="rounded-xl w-40 h-40 mx-auto mt-8 object-cover"
          initial={{ opacity: 0.4 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        />

        <motion.p
          className="text-lg md:text-xl leading-relaxed"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Soy José, desarrollador web independiente con una meta clara: lo que quiero, lo consigo.
          Me gusta resolver problemas reales, conectar con personas y dejar que el trabajo hable por sí solo.
          En ByHijar Web Solutions creo experiencias digitales con actitud, empatía y foco total en el cliente.
        </motion.p>

        <motion.p
          className="text-base md:text-lg text-gray-600 dark:text-gray-300"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Empecé este camino porque entendí que el mundo necesita menos excusas y más soluciones. 
          Ayudar a mi familia, a emprendedores, y a marcas que quieren crecer, es lo que me impulsa.
        </motion.p>

        <motion.p
          className="text-base md:text-lg text-gray-600 dark:text-gray-300"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Lo que me diferencia es simple: escucho, entiendo y actúo rápido. Profesionalismo sin vueltas. 
          Me gusta trabajar con quienes sueñan en grande, sin importar si recién comienzan o ya tienen trayectoria.
        </motion.p>

        <motion.blockquote
          className="italic text-purple-600 dark:text-purple-400 text-lg"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          “No necesitas una web perfecta. Necesitas una web que funcione y conecte.”
        </motion.blockquote>

        <motion.p
          className="text-sm text-gray-500 dark:text-gray-400"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          PD: Todavía tengo un proyecto de inventario pendiente que algún día voy a lanzar como se debe.
        </motion.p>
      </div>
    </section>
  );
}
