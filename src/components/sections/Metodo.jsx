import { motion } from "framer-motion";
import { useLanguage } from "../../context/LanguageContext";
import { FaSyncAlt } from "react-icons/fa";

export default function Metodo() {
  const { t } = useLanguage();

  return (
    <section id="metodo" className="bg-white py-32 px-6 md:px-12 border-b border-gray-100">
      <div className="max-w-5xl mx-auto">
        
        {/* Header */}
        <div className="mb-20 text-center max-w-3xl mx-auto">
          <div className="font-mono text-sm tracking-widest uppercase flex items-center justify-center gap-3 mb-6">
            <span className="text-editorial-meta">03</span>
            <span className="text-brand-red w-4 h-[1px] bg-brand-red inline-block"></span>
            <span className="text-editorial-secondary font-semibold">{t('method.section_label')}</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-editorial-primary leading-[1.1] mb-6">
            {t('method.title')}
          </h2>
          <p className="text-xl text-editorial-body font-medium leading-relaxed">
            {t('method.description')}
          </p>
        </div>

        {/* Steps Timeline */}
        <div className="relative border-l border-brand-red/20 pl-8 md:pl-12 space-y-16 ml-4 md:ml-0 mb-24">
          {t('method.steps').map((step, index) => (
            <motion.div 
              key={index}
              className="relative"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              {/* Timeline dot */}
              <div className="absolute -left-[41px] md:-left-[57px] top-1 w-5 h-5 bg-white border-4 border-brand-red rounded-full"></div>
              
              <h3 className="text-2xl font-bold text-editorial-primary mb-3 flex items-center gap-4">
                <span className="font-mono text-brand-red text-sm">0{index + 1}</span>
                {step.title}
              </h3>
              <p className="text-editorial-body text-lg leading-relaxed max-w-2xl">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Recurrent Model Highlight */}
        <motion.div 
          className="bg-gray-900 text-white p-10 md:p-16 rounded-2xl shadow-2xl relative overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="absolute -right-20 -top-20 text-brand-red/10 text-[200px]">
            <FaSyncAlt />
          </div>
          <div className="relative z-10 max-w-2xl">
            <h3 className="text-3xl font-bold mb-4">{t('method.recurrent.title')}</h3>
            <div className="w-12 h-1 bg-brand-red mb-6"></div>
            <p className="text-lg text-gray-300 leading-relaxed font-medium mb-8">
              {t('method.recurrent.desc')}
            </p>
            <a 
              href="#contacto" 
              className="inline-block bg-white text-gray-900 px-6 py-3 font-bold text-sm uppercase tracking-widest hover:bg-brand-red hover:text-white transition-colors"
            >
              Hablemos del futuro
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
