import { motion } from "framer-motion";
import { useLanguage } from "../../context/LanguageContext";
import { FaRobot, FaSync, FaCogs } from "react-icons/fa";

export default function Soluciones() {
  const { t } = useLanguage();

  const icons = [
    <FaRobot className="text-3xl text-brand-red mb-6" />,
    <FaSync className="text-3xl text-brand-red mb-6" />,
    <FaCogs className="text-3xl text-brand-red mb-6" />
  ];

  return (
    <section id="soluciones" className="bg-editorial-bg py-20 md:py-32 px-6 md:px-12 border-b border-gray-100">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="mb-12 md:mb-20 max-w-3xl">
          <div className="font-mono text-sm tracking-widest uppercase flex items-center gap-3 mb-6">
            <span className="text-editorial-meta">02</span>
            <span className="text-brand-red w-4 h-[1px] bg-brand-red inline-block"></span>
            <span className="text-editorial-secondary font-semibold">{t('solutions.section_label')}</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-editorial-primary leading-[1.1] mb-6">
            {t('solutions.title')}
          </h2>
          <p className="text-xl text-editorial-body font-medium leading-relaxed">
            {t('solutions.description')}
          </p>
        </div>

        {/* Modules Grid - 3 Columns */}
        <div className="grid md:grid-cols-3 gap-8">
          {t('solutions.items').map((item, index) => (
            <motion.div 
              key={index}
              className="bg-white p-8 border border-gray-100 shadow-sm flex flex-col justify-between"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div>
                <div className="mb-2">
                  {icons[index]}
                </div>
                <h3 className="text-2xl font-bold text-editorial-primary mb-4 leading-tight">{item.title}</h3>
                <p className="text-editorial-body leading-relaxed text-md mb-6">
                  {item.desc}
                </p>
                
                <div className="space-y-4 mb-8">
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-widest text-editorial-meta mb-1">Incluye:</h4>
                    <p className="text-sm text-editorial-primary font-medium">{item.includes}</p>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-widest text-editorial-meta mb-1">Ideal para:</h4>
                    <p className="text-sm text-brand-red font-medium">{item.idealFor}</p>
                  </div>
                </div>
              </div>
              
              <div className="pt-6 border-t border-gray-100">
                <a href="#contacto" className="text-sm font-bold uppercase tracking-widest text-editorial-primary hover:text-brand-red transition-colors inline-flex items-center gap-2">
                  Agendar Demo <span className="text-brand-red">→</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
