import { motion } from "framer-motion";
import { useLanguage } from "../../context/LanguageContext";
import { FaLongArrowAltRight } from "react-icons/fa";

export default function SobreMi() {
  const { t } = useLanguage();

  return (
    <div className="bg-editorial-bg py-20 md:py-28 px-6 md:px-12 border-b border-gray-100">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left: Image / Visual con animación de color automática por scroll trigger */}
        <div className="relative">
          <motion.div
            className="aspect-square bg-gray-200 overflow-hidden relative z-10 filter hover:grayscale-0 transition-all duration-500"
            initial={{ filter: "grayscale(100%)" }}
            whileInView={{ filter: "grayscale(0%)" }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1.2, delay: 0.5 }}
          >
            <img
              src="/img/jose2.jpg"
              alt="José Híjar — Creador de Klous"
              className="w-full h-full object-cover"
            />
          </motion.div>
          {/* Decorative Elements */}
          <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-brand-red/20 z-0 hidden md:block"></div>
          <div className="absolute top-6 -left-6 px-4 py-2 bg-brand-red text-white text-xs font-bold uppercase tracking-widest z-20 shadow-lg font-mono">
            {t("about.badge")}
          </div>
        </div>

        {/* Right: Text */}
        <div className="space-y-6 md:space-y-8">
          <div className="font-mono text-xs md:text-sm tracking-widest uppercase flex items-center gap-3">
            <span className="text-editorial-meta font-bold">03</span>
            <span className="text-brand-red w-4 h-[1px] bg-brand-red inline-block"></span>
            <span className="text-editorial-secondary font-semibold">{t("about.section_label")}</span>
          </div>

          <motion.h2
            className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-editorial-primary leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {t("about.title")}
          </motion.h2>

          <div className="space-y-4 text-base sm:text-lg text-editorial-body leading-relaxed">
            <p>{t("about.p1")}</p>
            <p>{t("about.p2")}</p>
          </div>

          <div className="pt-2">
            <a
              href="#contacto"
              className="inline-flex items-center gap-3 font-bold text-editorial-primary hover:text-brand-red transition-colors group"
            >
              <span className="border-b border-editorial-primary group-hover:border-brand-red transition-colors pb-1">
                {t("about.cta")}
              </span>
              <FaLongArrowAltRight className="group-hover:translate-x-2 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
