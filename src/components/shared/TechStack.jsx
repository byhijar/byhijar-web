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
    <section className="py-32 bg-gray-50 text-gray-800 border-b border-gray-100" id="tech">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <div className="mb-12 space-y-4">
          <div className="font-mono text-sm tracking-widest uppercase flex items-center justify-center gap-2">
            <span className="text-gray-400">04</span>
            <span className="text-brand-red">//</span>
            <span className="text-gray-900 font-semibold">Herramientas</span>
          </div>
          <motion.h2
            className="text-5xl md:text-7xl font-bold tracking-tighter text-gray-950 leading-tight"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Stack Técnico
          </motion.h2>
        </div>
        <p className="mb-12 text-lg text-gray-700">
          Desarrollo, diseño y gestión: estas son las herramientas que uso para construir soluciones digitales funcionales y con estilo.
        </p>

        {categorias.map((cat, i) => (
          <div key={i} className="mb-12 text-left">
            <h3 className="text-xl font-semibold mb-6 border-l-4 border-brand-red pl-3">{cat.titulo}</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 place-items-center">
              {cat.herramientas.map((item, j) => (
                <motion.div
                  key={j}
                  className="flex flex-col items-center justify-center p-4 bg-white rounded-lg border border-gray-100 hover:border-gray-200 hover:shadow-sm transition-all group duration-300 desktop-hover-scale"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: j * 0.1 }}
                  viewport={{ once: true, amount: 0.5 }}
                >
                  <motion.img
                    src={item.logo}
                    alt={item.nombre}
                    className="w-12 h-12 mb-2 desktop-hover-grayscale transition-all duration-300"
                    initial={{ filter: "grayscale(100%)", opacity: 0.7 }}
                    whileInView={{ filter: "grayscale(0%)", opacity: 1 }}
                    viewport={{ once: false, margin: "-10%" }}
                    transition={{ duration: 2.5, ease: "easeInOut" }}
                    style={typeof window !== 'undefined' && window.matchMedia('(hover: hover)').matches ? { filter: 'none', opacity: 0.7 } : {}}
                  />
                  <span className="text-sm font-medium text-gray-600 group-hover:text-gray-900 transition-colors">{item.nombre}</span>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section >
  );
}
