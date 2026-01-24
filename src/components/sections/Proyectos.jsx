import { motion } from "framer-motion";

export default function Proyectos() {
  return (
    <section
      id="proyectos"
      className="bg-gray-50 py-20 px-4 text-gray-800"
    >
      <h2 className="text-3xl md:text-5xl font-bold text-center mb-16 tracking-tight">
        Proyectos que hablan por sí solos
      </h2>

      <motion.div
        className="max-w-5xl mx-auto bg-white rounded-2xl shadow-xl p-6 md:p-10 border border-gray-200 transition-all"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <div className="grid md:grid-cols-2 gap-6 items-center">
          <img
            src="/img/dulzuras-preview.png"
            alt="Proyecto Dulzuras Nicky Nicole"
            className="rounded-xl w-full shadow-md border border-gray-300 object-cover"
          />

          <div>
            <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-brand-red">
              Dulzuras Nicky Nicole
            </h3>
            <p className="text-base text-gray-700 leading-relaxed">
              Página web para una pastelería artesanal que quería digitalizar su catálogo, recibir pedidos personalizados y mejorar su presencia online. El diseño está pensado para enamorar a primera vista y facilitar el encargo.
            </p>
            <ul className="mt-4 list-disc list-inside text-sm text-gray-600 space-y-1">
              <li>Frontend en React con Tailwind CSS</li>
              <li>Pedidos en tiempo real y administración en Firebase</li>
              <li>Formulario validado, sin pagos automáticos pero con contacto directo</li>
            </ul>
            <a
              href="https://dulzurasnicky.cl"
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-block text-brand-red font-semibold hover:underline"
            >
              Visitar sitio →
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
