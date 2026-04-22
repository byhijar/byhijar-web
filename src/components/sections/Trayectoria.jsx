import { motion } from "framer-motion";
import { useIsDesktop } from "../../hooks/useIsDesktop";
import { ANIMATION_CONFIG } from "../../config/theme";
import { useLanguage } from "../../context/LanguageContext";

export default function Trayectoria() {
    const isDesktop = useIsDesktop();
    const { t } = useLanguage();

    return (
        <section id="trayectoria" className="bg-white py-32 px-4 text-gray-800 border-b border-gray-100">
            <div className="max-w-6xl mx-auto grid md:grid-cols-12 gap-12 items-start">

                {/* Text Content */}
                <motion.div
                    className="md:col-span-7 space-y-10 order-2 md:order-1"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <div className="space-y-4">
                        <div className="font-mono text-sm tracking-widest uppercase flex items-center gap-2">
                            <span className="text-gray-400">04</span>
                            <span className="text-brand-red">//</span>
                            <span className="text-gray-900 font-semibold">{t('trajectory.section_label')}</span>
                        </div>
                        <h2 className="text-5xl md:text-7xl font-bold text-gray-950 tracking-tighter leading-tight">
                            {t('trajectory.title')}
                        </h2>
                    </div>

                    <div className="space-y-6 text-lg text-gray-600 leading-relaxed font-normal">
                        <p className="font-medium text-gray-900 text-xl">
                            {t('trajectory.manifesto_main')}
                        </p>
                        <p>
                            {t('trajectory.p1')}
                        </p>
                        <p>
                            {t('trajectory.p2')}
                        </p>
                        <div className="pt-6">
                            <p className="text-sm font-mono text-gray-400 mt-2">José Hijar — System Builder</p>
                        </div>
                    </div>
                </motion.div>

                {/* Editorial Image */}
                <motion.div
                    className="md:col-span-5 order-1 md:order-2 pl-4 pb-4"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                >
                    <div className="relative bg-gray-100">
                        {/* The Image */}
                        <div className="relative z-10 aspect-[3/4] overflow-hidden">
                            <motion.img
                                src="/img/jose2.jpg"
                                alt="José Hijar"
                                className="object-cover w-full h-full desktop-hover-grayscale transition-all duration-500"
                                initial={{ filter: "grayscale(100%)" }}
                                whileInView={{ filter: "grayscale(0%)" }}
                                viewport={{ once: false, margin: "-20%" }}
                                transition={{ duration: ANIMATION_CONFIG.duration, ease: ANIMATION_CONFIG.ease }}
                                style={isDesktop ? { filter: 'none' } : {}}
                            />
                        </div>

                        {/* Editorial Offset Frame - Behind */}
                        <div className="absolute top-4 left-4 w-full h-full border border-gray-300 z-0 pointer-events-none"></div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
