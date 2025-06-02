import { motion } from "framer-motion";

const blogPosts = [
  {
    title: "Cómo crear un portafolio impresionante en 4 horas",
    summary: "Una guía práctica para construir un portafolio profesional rápidamente, destacando tus habilidades y proyectos.",
    link: "https://hackernoon.com/can-you-make-your-portfolio-in-just-4-hours-its-possible",
  },
  {
    title: "Curso completo: Productividad para desarrolladores",
    summary: "Aprende habilidades clave para ser un desarrollador productivo y efectivo en este curso completo.",
    link: "https://www.youtube.com/watch?v=C_jQahOnGUU",
  },
  {
    title: "Proceso de diseño de un sitio web desde cero",
    summary: "Explora un estudio de caso completo sobre cómo diseñar un sitio web desde la idea hasta la implementación.",
    link: "https://medium.com/design-bootcamp/process-of-designing-a-website-from-scratch-10bd136126d2",
  },
];

export default function Blog() {
  return (
    <section id="blog" className="bg-white dark:bg-gray-900 py-16 px-4 text-gray-800 dark:text-gray-100">
      <motion.h2
        className="text-3xl md:text-4xl font-bold text-center mb-8"
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Pensamientos y aprendizajes
      </motion.h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        {blogPosts.map((post, index) => (
          <motion.a
            key={index}
            href={post.link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6 shadow hover:shadow-xl hover:scale-[1.01] transition block"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
            <p className="text-sm">{post.summary}</p>
            <span className="mt-4 inline-block text-purple-600 dark:text-purple-400 font-medium">
              Leer más →
            </span>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
