import { motion } from "framer-motion";

const testimonios = [
  {
    nombre: "Nicky Nicole",
    cargo: "Emprendedora en pastelería",
    mensaje:
      "José logró exactamente lo que necesitaba. Mi vitrina online ahora es mi mejor canal de ventas. El proceso fue claro, cercano y súper profesional.",
    foto: "/img/nicky1.jpg", // Asegúrate que esta imagen exista en /public/img/
  },
];

export default function Testimonios() {
  return (
    <section className="bg-gray-50 dark:bg-gray-900 py-16 px-4" id="testimonios">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900 dark:text-white">
        Confían en mi trabajo
      </h2>
      <p className="text-center max-w-xl mx-auto text-gray-600 dark:text-gray-400 mb-12 text-sm italic">
        A veces una web puede ser la diferencia entre mostrar un negocio o hacerlo crecer. 
        Aquí te comparto una experiencia real.
      </p>

      <div className="max-w-3xl mx-auto">
        {testimonios.map((testi, i) => (
          <motion.div
            key={i}
            className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow border border-gray-200 dark:border-gray-700"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
          >
            <div className="flex items-center mb-4">
              <img
                src={testi.foto}
                alt={testi.nombre}
                className="w-12 h-12 rounded-full mr-4 object-cover"
              />
              <div>
                <p className="font-semibold text-gray-900 dark:text-white">{testi.nombre}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">{testi.cargo}</p>
              </div>
            </div>
            <p className="text-gray-700 dark:text-gray-300 italic leading-relaxed">
              “{testi.mensaje}”
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
