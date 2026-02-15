import { motion } from "framer-motion";

export default function Trayectoria() {
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
                            <span className="text-gray-400">03</span>
                            <span className="text-brand-red">//</span>
                            <span className="text-gray-900 font-semibold">Trayectoria</span>
                        </div>
                        <h2 className="text-5xl md:text-7xl font-bold text-gray-950 tracking-tighter leading-tight">
                            Manifiesto.
                        </h2>
                    </div>

                    <div className="space-y-6 text-lg text-gray-600 leading-relaxed font-normal">
                        <p className="font-medium text-gray-900 text-xl">
                            Escribir código es fácil. Entender el negocio es lo difícil.
                        </p>
                        <p>
                            Opero en esa intersección. No soy una agencia que subcontrata ni un freelancer que desaparece. Soy un ingeniero que entiende que tu software es un activo, no un gasto decorativo.
                        </p>
                        <p>
                            Mi trabajo no termina en el despliegue. Termina cuando el sistema es estable, seguro y rentable. Si buscas validación rápida, usa herramientas no-code. Si buscas cimientos sólidos para escalar durante los próximos 5 años, estás en el lugar correcto.
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
                                transition={{ duration: 2.5, ease: "easeInOut" }}
                                style={typeof window !== 'undefined' && window.matchMedia('(hover: hover)').matches ? { filter: 'none' } : {}}
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
