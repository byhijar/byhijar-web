import { motion } from "framer-motion";

const categorias = [
  {
    titulo: "Frontend",
    herramientas: [
      { nombre: "React", logo: "/logos/react.svg" },
      { nombre: "Tailwind CSS", logo: "/logos/tailwind.svg" },
      { nombre: "HTML5", logo: "/logos/html5.svg" },
      { nombre: "CSS3", logo: "/logos/css3.svg" },
      { nombre: "JavaScript", logo: "/logos/javascript.svg" },
    ],
  },
  {
    titulo: "Backend y Bases de Datos",
    herramientas: [
      { nombre: "Python", logo: "/logos/python.svg" },
      { nombre: "Django", logo: "/logos/django.svg" },
      { nombre: "PostgreSQL", logo: "/logos/postgresql.svg" },
      { nombre: "Firebase", logo: "/logos/firebase.svg" },
      { nombre: "Docker", logo: "/logos/docker.svg" },
    ],
  },
  {
    titulo: "Gestión y Herramientas IT",
    herramientas: [
      { nombre: "Git", logo: "/logos/git.svg" },
      { nombre: "Google Admin", logo: "/logos/google-admin.svg" },
      { nombre: "Guacamole", logo: "/logos/guacamole.svg" },
      { nombre: "Excel Avanzado", logo: "/logos/excel.svg" },
      { nombre: "Scrum Fundamentos", logo: "/logos/scrum.svg" },
    ],
  },
  {
    titulo: "Diseño Gráfico",
    herramientas: [
      { nombre: "Photoshop", logo: "/logos/photoshop.svg" },
      { nombre: "Illustrator", logo: "/logos/illustrator.svg" },
    ],
  },
];

export default function TechStack() {
  return (
    <section className="py-16 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100" id="tech">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-8"
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Habilidades y Herramientas
        </motion.h2>
        <p className="mb-12 text-lg text-gray-700 dark:text-gray-300">
          Desarrollo, diseño y gestión: estas son las herramientas que uso para construir soluciones digitales funcionales y con estilo.
        </p>

        {categorias.map((cat, i) => (
          <div key={i} className="mb-12 text-left">
            <h3 className="text-xl font-semibold mb-6 border-l-4 border-purple-500 pl-3">{cat.titulo}</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 place-items-center">
              {cat.herramientas.map((item, j) => (
                <motion.div
                  key={j}
                  className="flex flex-col items-center bg-white/80 dark:bg-gray-800/70 backdrop-blur-md p-4 rounded-xl shadow-md hover:shadow-xl transition hover:scale-105 border border-gray-200 dark:border-gray-700"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: j * 0.05 }}
                >
                  <img src={item.logo} alt={item.nombre} className="w-12 h-12 mb-2" />
                  <span className="text-sm font-medium">{item.nombre}</span>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
