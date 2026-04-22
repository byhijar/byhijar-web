import { motion } from "framer-motion";
import { FaTiktok, FaVideo, FaEdit, FaChevronRight } from "react-icons/fa";
import { useLanguage } from "../../context/LanguageContext";

export default function Content() {
  const { t } = useLanguage();

  return (
    <section id="contenido" className="bg-editorial-bg py-32 px-6 md:px-12 text-editorial-body border-b border-gray-100">
      <div className="max-w-7xl mx-auto">

        <div className="grid lg:grid-cols-12 gap-20 items-center">
          
          {/* Left: Text Content */}
          <div className="lg:col-span-7 space-y-12">
            <div className="space-y-6">
              <div className="font-mono text-sm tracking-widest uppercase flex items-center gap-3">
                <span className="text-editorial-meta">03</span>
                <span className="text-brand-red w-4 h-[1px] bg-brand-red inline-block"></span>
                <span className="text-editorial-secondary font-semibold">{t('content.section_label')}</span>
              </div>
              <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-editorial-primary leading-[0.9]">
                {t('content.title1')} <br /> <span className="text-editorial-body font-normal">{t('content.title2')}</span>
              </h2>
              <p className="text-xl md:text-2xl text-editorial-body font-medium leading-relaxed pt-4">
                {t('content.description')}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 pt-4">
              {t('content.vision').map((v, i) => (
                <div key={i} className="space-y-3 p-6 border border-gray-100 bg-white hover:border-brand-red/20 transition-colors">
                  <h4 className="text-sm font-bold text-editorial-secondary uppercase tracking-widest">{v.label}</h4>
                  <p className="text-editorial-body text-sm leading-relaxed">
                    {v.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <a 
                href="https://www.tiktok.com/@byhijar" 
                target="_blank" 
                rel="noreferrer"
                className="inline-flex items-center gap-4 text-editorial-primary font-bold text-lg group hover:text-brand-red transition-colors"
              >
                <FaTiktok className="text-2xl text-brand-red" /> 
                {t('content.cta_youtube')}
                <FaChevronRight className="text-sm group-hover:translate-x-2 transition-transform" />
              </a>
            </div>
          </div>

          {/* Right: Simple Visual */}
          <div className="lg:col-span-5">
            <motion.div 
              className="relative p-2 bg-white shadow-2xl border border-gray-100"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <div className="absolute inset-0 bg-brand-red/5 -m-4 -z-10 rotate-3"></div>
              <img 
                src="/creator_studio_thumbnail.png" 
                alt="Creator Workspace" 
                className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute top-4 left-4 px-3 py-1 bg-brand-red text-white text-[10px] font-bold uppercase tracking-widest">
                {t('content.status')}
              </div>
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
}
