import { motion } from "framer-motion";
import { FaLayerGroup, FaCogs, FaShieldAlt, FaServer, FaRobot, FaNetworkWired } from "react-icons/fa";
import { useLanguage } from "../../context/LanguageContext";

export default function Enfoque() {
    const { t } = useLanguage();
    const philosophyIcons = [<FaLayerGroup />, <FaCogs />, <FaShieldAlt />, <FaRobot />];

    return (
        <section id="enfoque" className="bg-editorial-bg py-32 px-6 md:px-12 text-editorial-body border-b border-gray-100 relative">
            {/* Background Structural Guide Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-gray-100 -z-0 hidden md:block"></div>

            <div className="max-w-7xl mx-auto space-y-32 relative z-10">

                {/* Chapter Header - Left Aligned with Structural Line */}
                <div className="grid md:grid-cols-12 gap-12 items-end">
                    <div className="relative md:col-span-7">
                        {/* Animated Vertical Line */}
                        <motion.div
                            className="absolute -left-6 top-2 bottom-0 w-[1px] bg-brand-red hidden md:block"
                            initial={{ scaleY: 0 }}
                            whileInView={{ scaleY: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.0, ease: "easeInOut" }}
                            style={{ originY: 0 }}
                        />

                        <div className="font-mono text-sm tracking-widest uppercase flex items-center gap-3 mb-6">
                            <span className="text-editorial-meta">02</span>
                            <span className="text-brand-red w-4 h-[1px] bg-brand-red inline-block"></span>
                            <span className="text-editorial-secondary font-semibold">{t('approach.section_label')}</span>
                        </div>
                        <motion.h2
                            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-editorial-primary leading-[0.9]"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            {t('approach.title1')} <br /> {t('approach.title2')}
                        </motion.h2>
                    </div>
                    <div className="pb-4 md:col-span-5">
                        <p className="text-xl text-editorial-body leading-relaxed font-medium">
                            {t('approach.description')}
                        </p>
                    </div>
                </div>

                {/* Staggered Grid Layout (2 col then 1 col) */}
                <div className="grid md:grid-cols-12 gap-12">
                    {t('approach.items').map((item, index) => (
                        <div 
                            key={index} 
                            className={`md:col-span-6 border-t border-gray-200 pt-8 transition-all duration-300 desktop-hover-scale hover:border-brand-red/30 hover:shadow-sm group ${index % 2 !== 0 ? 'md:mt-24' : ''}`}
                        >
                            <div className="text-3xl text-brand-red mb-6 transition-transform duration-300">
                                {philosophyIcons[index]}
                            </div>
                            <h3 className="text-2xl font-bold text-editorial-primary mb-4">{item.title}</h3>
                            <p className="text-lg text-editorial-body leading-relaxed max-w-sm">{item.desc}</p>
                        </div>
                    ))}
                </div>

                {/* Integrated Tech Block */}
                <div className="border-t-2 border-brand-red pt-12 mt-24 grid md:grid-cols-3 gap-8">
                    <div>
                        <h4 className="font-bold text-editorial-secondary uppercase tracking-widest text-sm mb-4">{t('tech.categories.1')}</h4>
                        <p className="font-mono text-sm text-editorial-meta">Django Framework <br /> Django Rest Framework <br /> PostgreSQL</p>
                    </div>
                    <div>
                        <h4 className="font-bold text-editorial-secondary uppercase tracking-widest text-sm mb-4">{t('tech.categories.0')}</h4>
                        <p className="font-mono text-sm text-editorial-meta">React.js <br /> Tailwind CSS <br /> Framer Motion</p>
                    </div>
                    <div>
                        <h4 className="font-bold text-editorial-secondary uppercase tracking-widest text-sm mb-4">Infraestructura</h4>
                        <p className="font-mono text-sm text-editorial-meta">Docker Containers <br /> Nginx <br /> CI/CD Pipelines</p>
                    </div>
                </div>

            </div>
        </section>
    );
}
