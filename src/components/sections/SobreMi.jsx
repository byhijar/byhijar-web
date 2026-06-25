import { motion } from "framer-motion";
import { useLanguage } from "../../context/LanguageContext";
import { FaLongArrowAltRight } from "react-icons/fa";

export default function SobreMi() {
  const { t } = useLanguage();

  return (
    <section id="sobre-mi" className="bg-editorial-bg py-20 md:py-32 px-6 md:px-12 border-b border-gray-100">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 md:gap-16 items-center">
        
        {/* Left: Image / Visual */}
        <div className="relative">
          <motion.div 
            className="aspect-square bg-gray-200 overflow-hidden relative z-10 filter grayscale hover:grayscale-0 transition-all duration-700"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            {/* Si tienes una foto tuya profesional y seria, reemplaza el src */}
            <img 
              src="/creator_studio_thumbnail.png" 
              alt="José Hijar" 
              className="w-full h-full object-cover"
            />
          </motion.div>
          {/* Decorative Elements */}
          <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-brand-red/20 z-0 hidden md:block"></div>
          <div className="absolute top-6 -left-6 px-4 py-2 bg-brand-red text-white text-xs font-bold uppercase tracking-widest z-20 shadow-lg">
            System Builder
          </div>
        </div>

        {/* Right: Text */}
        <div className="space-y-8">
          <div className="font-mono text-sm tracking-widest uppercase flex items-center gap-3">
            <span className="text-editorial-meta">05</span>
            <span className="text-brand-red w-4 h-[1px] bg-brand-red inline-block"></span>
            <span className="text-editorial-secondary font-semibold">{t('about.section_label')}</span>
          </div>
          
          <motion.h2 
            className="text-3xl md:text-5xl font-bold tracking-tighter text-editorial-primary leading-[1.1]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {t('about.title')}
          </motion.h2>
          
          <div className="space-y-6 text-lg text-editorial-body leading-relaxed">
            <p>{t('about.p1')}</p>
            <p>{t('about.p2')}</p>
          </div>

          <div className="pt-4">
            <a 
              href="#contacto" 
              className="inline-flex items-center gap-3 font-bold text-editorial-primary hover:text-brand-red transition-colors group"
            >
              <span className="border-b border-editorial-primary group-hover:border-brand-red transition-colors pb-1">
                {t('contact.title2')}
              </span>
              <FaLongArrowAltRight className="group-hover:translate-x-2 transition-transform" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
