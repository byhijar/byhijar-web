import { motion } from "framer-motion";
import { FaLayerGroup, FaCogs, FaShieldAlt, FaServer, FaRobot, FaNetworkWired } from "react-icons/fa";

export default function Enfoque() {
    const philosophy = [
        {
            icon: <FaLayerGroup />,
            title: "Arquitectura vs. Parches",
            desc: "No escribo código para salir del paso. Diseño estructuras pensadas para escalar y mantenerse en el tiempo sin deuda técnica innecesaria."
        },
        {
            icon: <FaCogs />,
            title: "Automatización Real",
            desc: "Si un proceso se repite más de tres veces, debe ser un script. Elimino la carga operativa manual para que los equipos se enfoquen en lo importante."
        },
        {
            icon: <FaShieldAlt />,
            title: "Estabilidad Primero",
            desc: "Prefiero tecnologías probadas y aburridas que funcionan (Django, PostgreSQL) a frameworks de moda que rompen producción cada semana."
        }
    ];

    return (
        <section id="enfoque" className="bg-editorial-bg py-32 px-6 md:px-12 text-editorial-body border-b border-gray-100 relative">
            {/* Background Structural Guide Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-gray-100 -z-0 hidden md:block"></div>

            <div className="max-w-7xl mx-auto space-y-32 relative z-10">

                {/* Chapter Header - Left Aligned with Structural Line */}
                <div className="grid md:grid-cols-2 gap-12 items-end">
                    <div className="relative">
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
                            <span className="text-editorial-secondary font-semibold">Enfoque</span>
                        </div>
                        <motion.h2
                            className="text-5xl md:text-8xl font-bold tracking-tighter text-editorial-primary leading-[0.9]"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            Ingeniería <br /> aplicada.
                        </motion.h2>
                    </div>
                    <div className="pb-4">
                        <p className="text-xl text-editorial-body leading-relaxed font-medium">
                            La programación es solo la herramienta. El verdadero trabajo es diseñar sistemas que resuelvan problemas de negocio de forma definitiva.
                        </p>
                    </div>
                </div>

                {/* Staggered Grid Layout (2 col then 1 col) */}
                <div className="grid md:grid-cols-12 gap-12">

                    {/* Item 1 - Spans 6 */}
                    <div className="md:col-span-6 border-t border-gray-200 pt-8 transition-all duration-300 desktop-hover-scale hover:border-brand-red/30 hover:shadow-sm group">
                        <div className="text-3xl text-brand-red mb-6 transition-transform duration-300"><FaLayerGroup /></div>
                        <h3 className="text-2xl font-bold text-editorial-primary mb-4">Arquitectura vs. Parches</h3>
                        <p className="text-lg text-editorial-body leading-relaxed max-w-sm">No escribo código para salir del paso. Diseño estructuras pensadas para escalar y mantenerse.</p>
                    </div>

                    {/* Item 2 - Spans 6, pushed down */}
                    <div className="md:col-span-6 md:mt-24 border-t border-gray-200 pt-8 transition-all duration-300 desktop-hover-scale hover:border-brand-red/30 hover:shadow-sm group">
                        <div className="text-3xl text-brand-red mb-6 transition-transform duration-300"><FaCogs /></div>
                        <h3 className="text-2xl font-bold text-editorial-primary mb-4">Automatización Real</h3>
                        <p className="text-lg text-editorial-body leading-relaxed max-w-sm">Si un proceso se repite, debe ser un script. Elimino la carga operativa manual.</p>
                    </div>

                    {/* Item 3 - Spans 6, pushed further */}
                    <div className="md:col-span-6 md:col-start-4 md:mt-12 border-t border-gray-200 pt-8 transition-all duration-300 desktop-hover-scale hover:border-brand-red/30 hover:shadow-sm group">
                        <div className="text-3xl text-brand-red mb-6 transition-transform duration-300"><FaShieldAlt /></div>
                        <h3 className="text-2xl font-bold text-editorial-primary mb-4">Estabilidad Primero</h3>
                        <p className="text-lg text-editorial-body leading-relaxed">Prefiero tecnologías probadas (Django, DRF, Postgres) a modas pasajeras.</p>
                    </div>

                </div>

                {/* Integrated Tech Block */}
                <div className="border-t-2 border-brand-red pt-12 mt-24 grid md:grid-cols-3 gap-8">
                    <div>
                        <h4 className="font-bold text-editorial-secondary uppercase tracking-widest text-sm mb-4">Backend Core</h4>
                        <p className="font-mono text-sm text-editorial-meta">Django Framework <br /> Django Rest Framework <br /> PostgreSQL</p>
                    </div>
                    <div>
                        <h4 className="font-bold text-editorial-secondary uppercase tracking-widest text-sm mb-4">Frontend</h4>
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
