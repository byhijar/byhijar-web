import { motion } from "framer-motion";

export default function CasosExito() {
  return (
    <section className="bg-gray-50 dark:bg-gray-900 py-16 px-4 text-gray-800 dark:text-gray-100" id="casos">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Casos de Éxito</h2>

      <motion.article
        className="max-w-3xl mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-200 dark:border-gray-700"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <img
          src="/dulzuras-caso.png"
          alt="Proyecto Dulzuras Nicki Nicole"
          className="rounded-md mb-4 w-full object-cover"
        />
        <h3 className="text-2xl font-semibold mb-2">Dulzuras Nicki Nicole</h3>
        <p className="text-gray-700 dark:text-gray-300">
          “José logró exactamente lo que necesitaba. Mi vitrina online ahora es mi mejor canal de ventas.”
        </p>
        <a
          href="https://dulzuras-nickynicole.netlify.app"
          target="_blank"
          rel="noreferrer"
          className="mt-4 inline-block text-purple-600 dark:text-purple-400 font-medium hover:underline"
        >
          Ver proyecto →
        </a>
      </motion.article>
    </section>
  );
}
