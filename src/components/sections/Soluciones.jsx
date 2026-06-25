import { motion } from "framer-motion";
import { useLanguage } from "../../context/LanguageContext";
import { FaBoxOpen, FaChartLine, FaUsers, FaCogs } from "react-icons/fa";

export default function Soluciones() {
  const { t } = useLanguage();

  const icons = [
    <FaBoxOpen className="text-3xl text-brand-red mb-6" />,
    <FaChartLine className="text-3xl text-brand-red mb-6" />,
    <FaUsers className="text-3xl text-brand-red mb-6" />,
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

        {/* Modules Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {t('solutions.items').map((item, index) => (
            <motion.div 
              key={index}
              className="bg-white p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="group-hover:scale-110 transition-transform duration-300 origin-left">
                {icons[index]}
              </div>
              <h3 className="text-xl font-bold text-editorial-primary mb-4">{item.title}</h3>
              <p className="text-editorial-body leading-relaxed text-sm">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
