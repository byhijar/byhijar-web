
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const fotos = ["/img/jose1.jpg", "/img/jose2.jpg", "/img/jose3.jpg"];

export default function SobreMi() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % fotos.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="sobre-mi" className="bg-white dark:bg-gray-900 py-16 px-4 text-gray-800 dark:text-gray-100">
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
          className="rounded-xl w-40 h-40 mx-auto mt-8 object-cover border-4 border-purple-500 dark:border-purple-400"
          initial={{ opacity: 0.4 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        />

        <motion.p
          className="text-lg md:text-xl leading-relaxed font-medium"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Hola, soy José Hijar, desarrollador web independiente y creador de <strong>ByHijar Web Solutions</strong>. Ayudo a emprendedores y marcas a tener una presencia digital sólida, moderna y funcional.
        </motion.p>

        <motion.p
          className="text-base md:text-lg text-gray-600 dark:text-gray-300"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Mi camino no ha sido fácil: pasé por dos carreras, trabajos muy distintos y harto ensayo y error. Pero todo ese recorrido me enseñó a ver el desarrollo web no solo como código, sino como una herramienta real para mejorar negocios y conectar con personas.
        </motion.p>

        <motion.p
          className="text-base md:text-lg text-gray-600 dark:text-gray-300"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Hoy combino lo técnico con lo humano: escucho lo que necesitas, lo transformo en soluciones claras y me encargo de que tu web funcione bien, se vea pro y esté lista para crecer contigo.
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
          PD: También estoy desarrollando un sistema de inventario escolar que nació de mi propio trabajo en colegios. Pronto va a dar que hablar 🚀
        </motion.p>
      </div>
    </section>
  );
}
