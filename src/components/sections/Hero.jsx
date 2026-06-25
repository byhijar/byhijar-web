import { motion } from "framer-motion";
import { useIsDesktop } from "../../hooks/useIsDesktop";
import { ANIMATION_CONFIG } from "../../config/theme";
import { useLanguage } from "../../context/LanguageContext";

export default function Hero() {
  const isDesktop = useIsDesktop();
  const { t } = useLanguage();

  return (
    <section className="min-h-screen bg-editorial-bg text-left px-6 md:px-12 flex items-center py-20 md:py-32 relative overflow-hidden">
      {/* Background Grid Hint - Optional but adds technical feel */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
      </div>

      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 items-end">

        <div className="md:col-span-12 space-y-12 relative z-10">
          {/* Logo Mark as minimalist header anchor */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <motion.img
              src="/logos/logo-rojo.png"
              alt="Logo ByHijar"
              className="w-16 h-16 object-contain desktop-hover-grayscale hover:opacity-100 transition-all duration-500"
              initial={{ filter: "grayscale(100%)", opacity: 0.8 }}
              whileInView={{ filter: "grayscale(0%)", opacity: 1 }}
              viewport={{ once: false }}
              transition={{ duration: ANIMATION_CONFIG.duration, ease: ANIMATION_CONFIG.ease }}
              style={isDesktop ? { filter: 'none', opacity: 0.8 } : {}}
            />
          </motion.div>

          <div className="relative pl-6 md:pl-0">
            {/* Structural Line Animation */}
            <motion.div
              className="absolute left-0 top-0 bottom-0 w-[2px] bg-brand-red md:hidden"
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{ duration: 0.8, delay: 0.5, ease: "circOut" }}
              style={{ originY: 0 }}
            />

            <div className="overflow-hidden pb-2">
              <motion.h1 
                className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-bold text-editorial-primary tracking-tighter leading-[0.96] mb-6"
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, ease: "circOut" }}
              >
                {t('hero.title1')}
              </motion.h1>
            </div>

            <div className="overflow-hidden pb-2">
              <motion.h1 
                className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-editorial-secondary tracking-tighter leading-[0.96]"
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, delay: 0.1, ease: "circOut" }}
              >
                {t('hero.title2')}
              </motion.h1>
            </div>
          </div>

          <motion.div 
            className="max-w-3xl ml-0 md:ml-24 pt-8 border-l-2 border-transparent md:border-gray-100 md:pl-8"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <p className="text-xl md:text-2xl text-editorial-body font-medium leading-relaxed">
              {t('hero.subtitle')}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 pt-12">
              <a 
                href="#contacto" 
                className="group flex items-center justify-center gap-3 bg-brand-red text-white px-8 py-4 font-bold text-lg hover:bg-red-800 transition-colors shadow-lg hover:shadow-xl"
              >
                {t('hero.cta_primary')}
              </a>
              <a 
                href="#metodo" 
                className="flex items-center justify-center gap-3 text-editorial-primary border border-gray-200 px-8 py-4 font-bold text-lg hover:border-brand-red hover:text-brand-red transition-colors"
              >
                {t('hero.cta_secondary')}
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
