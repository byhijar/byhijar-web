import { motion } from "framer-motion";
import { useLanguage } from "../../context/LanguageContext";
import { FaCalendarCheck, FaSync, FaCogs } from "react-icons/fa";

export default function Soluciones() {
  const { t } = useLanguage();

  const icons = [
    <FaCalendarCheck key="calendar" className="text-3xl text-brand-red mb-5" />,
    <FaSync key="sync" className="text-3xl text-brand-red mb-5" />,
    <FaCogs key="cogs" className="text-3xl text-brand-red mb-5" />
  ];

  const handleCtaClick = (e, item) => {
    if (item.cta_link === "#contacto") {
      e.preventDefault();
      const contactEl = document.querySelector("#contacto");
      if (contactEl) {
        contactEl.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <div className="bg-editorial-bg py-20 md:py-28 px-6 md:px-12 border-b border-gray-100">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12 md:mb-16 max-w-3xl">
          <div className="font-mono text-xs md:text-sm tracking-widest uppercase flex items-center gap-3 mb-4">
            <span className="text-editorial-meta font-bold">02</span>
            <span className="text-brand-red w-4 h-[1px] bg-brand-red inline-block"></span>
            <span className="text-editorial-secondary font-semibold">{t("solutions.section_label")}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-editorial-primary leading-tight mb-4">
            {t("solutions.title")}
          </h2>
          <p className="text-base sm:text-lg text-editorial-body font-medium leading-relaxed">
            {t("solutions.description")}
          </p>
        </div>

        {/* Modules Grid - 3 Columns */}
        <div className="grid md:grid-cols-3 gap-8">
          {t("solutions.items").map((item, index) => (
            <motion.div
              key={index}
              className={`bg-white p-7 sm:p-8 border ${
                index === 0
                  ? "border-brand-red/30 shadow-md ring-1 ring-brand-red/10"
                  : "border-gray-100 shadow-sm"
              } flex flex-col justify-between transition-all duration-300 hover:shadow-lg rounded-sm`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div>
                <div className="mb-1">{icons[index]}</div>
                <h3 className="text-xl sm:text-2xl font-bold text-editorial-primary mb-3 leading-snug">
                  {item.title}
                </h3>
                {item.price && (
                  <div className="mb-4 inline-block bg-brand-red/10 text-brand-red text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider border border-brand-red/20 font-mono">
                    {item.price}
                  </div>
                )}
                <p className="text-editorial-body leading-relaxed text-sm sm:text-base mb-6">
                  {item.desc}
                </p>

                <div className="space-y-4 mb-8">
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-widest text-editorial-meta mb-1 font-mono">
                      {t("solutions.includes_label") || "INCLUYE:"}
                    </h4>
                    <p className="text-sm text-editorial-primary font-medium leading-relaxed">
                      {item.includes}
                    </p>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-widest text-editorial-meta mb-1 font-mono">
                      {t("solutions.ideal_for_label") || "IDEAL PARA:"}
                    </h4>
                    <p className="text-sm text-brand-red font-medium leading-relaxed">
                      {item.idealFor}
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-gray-100">
                <a
                  href={item.cta_link}
                  target={item.cta_link?.startsWith("http") ? "_blank" : undefined}
                  rel={item.cta_link?.startsWith("http") ? "noopener noreferrer" : undefined}
                  onClick={(e) => handleCtaClick(e, item)}
                  className={`text-xs sm:text-sm font-bold uppercase tracking-widest inline-flex items-center gap-2 transition-colors ${
                    index === 0
                      ? "text-brand-red hover:text-red-800"
                      : "text-editorial-primary hover:text-brand-red"
                  }`}
                >
                  {item.cta_text} <span className="text-brand-red">→</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
