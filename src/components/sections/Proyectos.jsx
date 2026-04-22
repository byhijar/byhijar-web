import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaServer, FaDatabase, FaCogs } from "react-icons/fa";
import { useLanguage } from "../../context/LanguageContext";

export default function Proyectos() {
  const { t } = useLanguage();
  
  const staticProjects = [
    {
      image: "/projects/lintac-access.png",
      stack: ["Django Rest Framework", "PostgreSQL", "React", "Docker", "Nginx"],
      link: null,
      repo: null
    },
    {
      image: "/projects/victoria-estrella.png",
      stack: ["React", "Firebase", "Netlify", "Tailwind CSS"],
      link: "https://victoriaestrella.cl",
      repo: null
    },
    {
      image: null,
      stack: ["React", "Tailwind CSS", "Firebase", "Vite"],
      link: "https://dulzurasnicky.cl",
      repo: null
    }
  ];

  const projects = t('projects.items').map((item, index) => ({
    ...item,
    ...staticProjects[index]
  }));

  return (
    <section id="proyectos" className="bg-editorial-bg py-32 px-6 md:px-12 text-editorial-body border-b border-gray-100">
      <div className="max-w-7xl mx-auto">

        {/* Editorial Section Header - Left Aligned */}
        <div className="mb-32 space-y-6 max-w-2xl">
          <div className="font-mono text-sm tracking-widest uppercase flex items-center gap-3">
            <span className="text-editorial-meta">01</span>
            <span className="text-brand-red w-4 h-[1px] bg-brand-red inline-block"></span>
            <span className="text-editorial-secondary font-semibold">{t('projects.case_studies')}</span>
          </div>
          <h2 className="text-5xl md:text-8xl font-bold tracking-tighter text-editorial-primary leading-[0.9]">
            {t('projects.title1')} <br /> <span className="text-editorial-body font-normal">{t('projects.title2')}</span>
          </h2>
        </div>

        <div className="space-y-40">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="grid lg:grid-cols-12 gap-12 lg:gap-24 items-start"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              {/* Left Column: Identity (Asymmetric Width 5/12) */}
              <div className="lg:col-span-5 space-y-8 relative">
                {/* Structural Line on Scroll */}
                <motion.div
                  className="absolute -left-6 top-2 bottom-0 w-[1px] bg-gray-200 hidden lg:block"
                  initial={{ scaleY: 0 }}
                  whileInView={{ scaleY: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, ease: "easeInOut" }}
                  style={{ originY: 0 }}
                />

                {project.image && (
                  <motion.div 
                    className="aspect-video bg-gray-100 overflow-hidden border border-gray-100 group mb-8 shadow-sm"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.4 }}
                  >
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                    />
                  </motion.div>
                )}

                <div>
                  <span className="text-brand-red font-mono text-xs uppercase tracking-wider font-bold block mb-4">
                    {project.category}
                  </span>
                  <h3 className="text-4xl md:text-5xl font-bold text-editorial-primary leading-none tracking-tight">
                    {project.title}
                  </h3>
                </div>

                <div className="space-y-2">
                  <h4 className="text-xs font-bold text-editorial-meta uppercase tracking-widest mb-4">{t('projects.tech_label')}</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map(tech => (
                      <span key={tech} className="px-3 py-1 bg-gray-50 text-editorial-body text-xs font-medium border border-gray-100">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {project.link && (
                  <div className="pt-4">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-editorial-primary font-bold hover:text-brand-red transition-colors text-sm border-b border-editorial-primary hover:border-brand-red pb-1"
                    >
                      {t('projects.view_prod')} <FaExternalLinkAlt className="text-xs" />
                    </a>
                  </div>
                )}
              </div>

              {/* Right Column: Deep Dive (Asymmetric Width 7/12) */}
              <div className="lg:col-span-7 space-y-12 pt-4">

                <div className="grid md:grid-cols-2 gap-12">
                  <div className="space-y-3">
                    <h4 className="text-sm font-bold text-editorial-secondary uppercase tracking-widest">{t('projects.challenge')}</h4>
                    <p className="text-editorial-body text-base leading-relaxed">
                      {project.problem}
                    </p>
                  </div>
                  <div className="space-y-3">
                    <h4 className="text-sm font-bold text-editorial-secondary uppercase tracking-widest">{t('projects.decision')}</h4>
                    <p className="text-editorial-body text-base leading-relaxed">
                      {project.technical_decision}
                    </p>
                  </div>
                </div>

                <div className="space-y-6 border-l-2 border-brand-red pl-8 py-2">
                  <div className="space-y-2">
                    <h4 className="flex items-center gap-2 text-sm font-bold text-editorial-secondary uppercase">
                      <FaServer className="text-editorial-meta" /> {t('projects.architecture')}
                    </h4>
                    <p className="text-editorial-body text-lg font-medium leading-relaxed">
                      {project.architecture}
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="flex items-center gap-2 text-sm font-bold text-editorial-secondary uppercase">
                      <FaDatabase className="text-editorial-meta" /> {t('projects.outcome')}
                    </h4>
                    <p className="text-editorial-body text-base leading-relaxed">
                      {project.outcome}
                    </p>
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
