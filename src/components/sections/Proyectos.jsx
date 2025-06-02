import { motion } from "framer-motion";

export default function Proyectos() {
  return (
    <section
      id="proyectos"
      className="bg-gray-50 dark:bg-gray-900 py-20 px-4 text-gray-800 dark:text-gray-100"
    >
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 tracking-tight">
        Proyectos que hablan por sí solos
      </h2>

      <motion.div
        className="max-w-5xl mx-auto bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 md:p-10 border border-gray-200 dark:border-gray-700 transition-all"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <div className="grid md:grid-cols-2 gap-6 items-center">
          <img
            src="/img/dulzuras-preview.png"
            alt="Proyecto Dulzuras Nicky Nicole"
            className="rounded-xl w-full shadow-md border border-gray-300 dark:border-gray-600 object-cover"
          />

          <div>
            <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-purple-600 dark:text-purple-400">
              Dulzuras Nicky Nicole
            </h3>
            <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed">
              Página web para una pastelería artesanal que quería digitalizar su catálogo, recibir pedidos personalizados y mejorar su presencia online. El diseño está pensado para enamorar a primera vista y facilitar el encargo.
            </p>
            <ul className="mt-4 list-disc list-inside text-sm text-gray-600 dark:text-gray-400 space-y-1">
              <li>Frontend en React con Tailwind CSS</li>
              <li>Pedidos en tiempo real y administración en Firebase</li>
              <li>Formulario validado, sin pagos automáticos pero con contacto directo</li>
            </ul>
            <a
              href="https://dulzuras-nickynicole.netlify.app"
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-block text-purple-600 dark:text-purple-400 font-semibold hover:underline"
            >
              Visitar sitio →
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
