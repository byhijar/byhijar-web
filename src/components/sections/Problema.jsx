import { motion } from "framer-motion";
import { useLanguage } from "../../context/LanguageContext";
import { FaWhatsapp, FaInstagram, FaCalendarAlt } from "react-icons/fa";

export default function Problema() {
  const { t } = useLanguage();

  const getChannelIcon = (channel) => {
    switch (channel?.toLowerCase()) {
      case "whatsapp":
        return <FaWhatsapp className="text-[#25D366] text-base" />;
      case "instagram":
        return <FaInstagram className="text-[#E1306C] text-base" />;
      default:
        return <FaCalendarAlt className="text-brand-red text-sm" />;
    }
  };

  const getStatusBadge = (status, variant) => {
    if (variant === "danger") {
      return (
        <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-red-50 text-brand-red border border-red-200">
          <span className="w-1.5 h-1.5 rounded-full bg-brand-red animate-pulse"></span>
          {status}
        </span>
      );
    }
    return (
      <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-amber-50 text-amber-700 border border-amber-200">
        <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
        {status}
      </span>
    );
  };

  return (
    <div className="bg-white py-20 md:py-28 px-6 md:px-12 border-b border-gray-100">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left: Text */}
        <div className="space-y-6">
          <div className="font-mono text-xs md:text-sm tracking-widest uppercase flex items-center gap-3">
            <span className="text-editorial-meta font-bold">01</span>
            <span className="text-brand-red w-4 h-[1px] bg-brand-red inline-block"></span>
            <span className="text-editorial-secondary font-semibold">{t("problem.section_label")}</span>
          </div>

          <motion.h2
            className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-editorial-primary leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {t("problem.title")}
          </motion.h2>

          <p className="text-base sm:text-lg text-editorial-body font-medium leading-relaxed">
            {t("problem.description")}
          </p>

          <ul className="space-y-4 pt-2">
            {t("problem.items").map((item, index) => {
              const [strongPart, restPart] = item.split(": ");
              return (
                <motion.li
                  key={index}
                  className="flex items-start gap-3.5 text-editorial-secondary text-base sm:text-lg"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <span className="text-brand-red mt-1 flex-shrink-0 font-bold">✕</span>
                  <span>
                    <strong>{strongPart}:</strong> {restPart}
                  </span>
                </motion.li>
              );
            })}
          </ul>
        </div>

        {/* Right: Clean Stacked Notification Cards UI */}
        <div className="relative">
          {/* Subtle container with brutalist border */}
          <div className="space-y-4 relative z-10">
            {/* Header pill */}
            <div className="flex items-center justify-between pb-2">
              <span className="text-xs font-mono font-bold tracking-wider uppercase text-editorial-meta flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-brand-red animate-ping"></span>
                {t("problem.error_overlay")}
              </span>
              <span className="text-xs font-mono text-gray-400">bandeja en vivo</span>
            </div>

            {/* Notification Cards */}
            {t("problem.cards")?.map((card, idx) => (
              <motion.div
                key={idx}
                className="bg-white border border-gray-200/90 rounded-xl p-4 sm:p-5 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 * idx, duration: 0.5 }}
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <span className="w-7 h-7 rounded-lg bg-gray-50 flex items-center justify-center border border-gray-100">
                      {getChannelIcon(card.channel)}
                    </span>
                    <span className="text-xs font-bold text-editorial-primary font-mono">
                      {card.channel}
                    </span>
                    <span className="text-[11px] text-gray-400 font-mono">· {card.time}</span>
                  </div>
                  {getStatusBadge(card.status, card.variant)}
                </div>

                <p className="text-sm sm:text-base text-editorial-secondary font-medium pl-9 leading-snug">
                  {card.message}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Decorative subtle background grid */}
          <div className="absolute -top-6 -right-6 w-full h-full border border-gray-100 -z-10 rounded-2xl hidden sm:block"></div>
        </div>
      </div>
    </div>
  );
}
