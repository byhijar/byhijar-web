import { motion } from "framer-motion";

const planes = [
  {
    nombre: 'Plan Esencial',
    precio: '$99.000 CLP',
    beneficios: ['Landing Page', 'Diseño responsive', 'Formulario de contacto'],
  },
  {
    nombre: 'Plan Profesional',
    precio: '$179.000 CLP',
    beneficios: ['Sitio multipágina', 'SEO básico', 'Soporte técnico'],
  },
  {
    nombre: 'Plan Premium',
    precio: '$249.000 CLP',
    beneficios: ['Panel autogestionable', 'Analytics', 'Hosting + Dominio'],
  },
];

export default function Servicios() {
  return (
    <section className="py-16 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100" id="servicios">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        ¿Cuál es tu próximo paso?
      </h2>
      <div className="grid gap-8 md:grid-cols-3 px-4 max-w-6xl mx-auto">
        {planes.map((plan, i) => (
          <motion.div
            key={i}
            className="border border-gray-200 dark:border-gray-700 rounded-xl p-6 shadow hover:shadow-xl bg-white dark:bg-gray-800 transition-all duration-300"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.2 }}
            whileHover={{ scale: 1.03 }}
          >
            <h3 className="text-xl font-semibold">{plan.nombre}</h3>
            <p className="text-2xl font-bold text-purple-600 dark:text-purple-400 mt-2">{plan.precio}</p>
            <ul className="mt-4 space-y-2">
              {plan.beneficios.map((b, idx) => (
                <li key={idx}>✅ {b}</li>
              ))}
            </ul>
            <button className="mt-6 w-full bg-red-600 hover:bg-red-700 dark:bg-purple-500 dark:hover:bg-purple-600 text-white py-2 rounded">
              Lo quiero
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
