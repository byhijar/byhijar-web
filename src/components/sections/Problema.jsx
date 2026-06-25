import { motion } from "framer-motion";
import { useLanguage } from "../../context/LanguageContext";
import { FaRegFileExcel, FaWhatsapp, FaBrain } from "react-icons/fa";

export default function Problema() {
  const { t } = useLanguage();

  const icons = [<FaRegFileExcel />, <FaWhatsapp />, <FaBrain />, <FaRegFileExcel />];

  return (
    <section id="problema" className="bg-white py-20 md:py-32 px-6 md:px-12 border-b border-gray-100">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        
        {/* Left: Text */}
        <div className="space-y-8">
          <div className="font-mono text-sm tracking-widest uppercase flex items-center gap-3">
            <span className="text-editorial-meta">01</span>
            <span className="text-brand-red w-4 h-[1px] bg-brand-red inline-block"></span>
            <span className="text-editorial-secondary font-semibold">{t('problem.section_label')}</span>
          </div>
          
          <motion.h2 
            className="text-4xl md:text-6xl font-bold tracking-tighter text-editorial-primary leading-[1.1]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {t('problem.title')}
          </motion.h2>
          
          <p className="text-xl text-editorial-body font-medium leading-relaxed">
            {t('problem.description')}
          </p>
          
          <ul className="space-y-4 pt-4">
            {t('problem.items').map((item, index) => (
              <motion.li 
                key={index}
                className="flex items-start gap-4 text-editorial-secondary text-lg"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <span className="text-brand-red mt-1 flex-shrink-0">✖</span>
                <span>{item}</span>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Right: Visual Concept */}
        <div className="relative">
          <motion.div 
            className="bg-gray-50 border border-gray-200 p-8 rounded-2xl shadow-xl relative z-10"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <div className="flex gap-4 mb-6">
              <div className="w-3 h-3 rounded-full bg-red-400"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
              <div className="w-3 h-3 rounded-full bg-green-400"></div>
            </div>
            
            <div className="space-y-4">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="h-12 bg-white border border-gray-100 flex items-center px-4 gap-4 opacity-50 blur-[1px]">
                  <div className="w-6 h-6 bg-gray-200 rounded flex items-center justify-center text-gray-400 text-xs">
                    {icons[i] || <FaRegFileExcel />}
                  </div>
                  <div className="h-2 bg-gray-200 rounded w-1/3"></div>
                  <div className="h-2 bg-gray-100 rounded w-1/4"></div>
                  <div className="h-2 bg-red-100 rounded w-1/5 ml-auto"></div>
                </div>
              ))}
            </div>

            {/* Error Overlay */}
            <div className="absolute inset-0 bg-brand-red/5 flex items-center justify-center backdrop-blur-[1px] rounded-2xl border border-brand-red/20">
              <div className="bg-white px-6 py-3 shadow-lg border-l-4 border-brand-red text-editorial-primary font-bold text-sm uppercase tracking-wider flex items-center gap-3">
                <span className="text-brand-red animate-pulse">●</span> Sistema Colapsado
              </div>
            </div>
          </motion.div>
          
          {/* Decorative background shape */}
          <div className="absolute -top-10 -right-10 w-64 h-64 bg-gray-100 rounded-full blur-3xl -z-10"></div>
        </div>

      </div>
    </section>
  );
}
