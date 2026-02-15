import { useState, useEffect } from "react";
import { FaWhatsapp, FaArrowRight } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";
import ReCAPTCHA from "react-google-recaptcha";

export default function ContactoForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);
  const [captchaToken, setCaptchaToken] = useState(null);
  const [envError, setEnvError] = useState(false);

  // Environment Variables
  const recaptchaKey = import.meta.env.VITE_RECAPTCHA_SITE_KEY;
  const emailServiceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const emailTemplateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const emailPublicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
  const isTestKey = recaptchaKey?.startsWith("6LeIxAcTAAAAA");

  useEffect(() => {
    if (!recaptchaKey || !emailServiceId || !emailTemplateId || !emailPublicKey) {
      setEnvError(true);
    }
  }, [recaptchaKey, emailServiceId, emailTemplateId, emailPublicKey]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleCaptcha = (token) => {
    setCaptchaToken(token);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(null);

    if (!form.name || !form.email || !form.message) {
      setStatus("incompleto");
      return;
    }

    if (!captchaToken) {
      setStatus("captcha");
      return;
    }

    if (envError) return;

    setLoading(true);

    try {
      await emailjs.send(
        emailServiceId,
        emailTemplateId,
        {
          name: form.name,
          email: form.email,
          message: `${form.message}\n\n----\nMensaje enviado desde byhijar.cl`,
        },
        emailPublicKey
      );
      setStatus("ok");
      setForm({ name: "", email: "", message: "" });
      setCaptchaToken(null);
    } catch (err) {
      console.error(err);
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contacto" className="bg-editorial-bg py-32 px-6 md:px-12 text-editorial-primary border-t border-gray-100">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-20 items-start">

        {/* Left Column: Editorial Context */}
        <div className="lg:col-span-5 space-y-12">
          <div className="space-y-6">
            <div className="font-mono text-sm tracking-widest uppercase flex items-center gap-3">
              <span className="text-editorial-meta">04</span>
              <span className="text-brand-red w-4 h-[1px] bg-brand-red inline-block"></span>
              <span className="text-editorial-secondary font-semibold">Solicitud</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-editorial-primary leading-[0.9]">
              Hablemos de <br /> arquitectura.
            </h2>
            <p className="text-xl text-editorial-body leading-relaxed font-medium">
              Si tu operación está en caos (planillas, WhatsApp, duplicidad), lo convertimos en un sistema estable.
            </p>
          </div>

          <div className="space-y-8 border-t border-gray-200 pt-8">
            <div className="space-y-4">
              <h3 className="text-sm font-bold uppercase tracking-widest text-editorial-secondary">Alcance</h3>
              <ul className="space-y-2 text-editorial-body text-lg">
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-brand-red rounded-full"></span> Automatización de Procesos</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-brand-red rounded-full"></span> Desarrollo Backend & APIs</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-brand-red rounded-full"></span> Integración de Sistemas</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-sm font-bold uppercase tracking-widest text-editorial-secondary">Stack</h3>
              <p className="font-mono text-editorial-meta text-sm">
                Django / DRF / React / PostgreSQL
              </p>
            </div>
          </div>

          <div className="pt-4">
            <a
              href="https://wa.me/56945955335"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 text-brand-red font-bold hover:text-red-800 transition-colors text-lg"
            >
              <FaWhatsapp className="text-xl" /> Chat Directo (WhatsApp)
            </a>
          </div>
        </div>

        {/* Right Column: Lineal Form */}
        <div className="lg:col-span-7 pt-4 relative z-10">
          <form onSubmit={handleSubmit} className="space-y-12">

            <div className="space-y-8">
              <div className="relative group">
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Nombre / Organización"
                  required
                  className="w-full bg-transparent border-b border-gray-300 py-4 text-xl md:text-2xl text-editorial-primary placeholder-gray-300 focus:outline-none focus:border-brand-red transition-all duration-300 disabled:opacity-50"
                />
                <label className="absolute -top-3 left-0 text-xs font-bold uppercase tracking-widest text-editorial-meta group-focus-within:text-brand-red transition-colors">
                  Identidad
                </label>
              </div>

              <div className="relative group">
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="correo@organizacion.com"
                  required
                  className="w-full bg-transparent border-b border-gray-300 py-4 text-xl md:text-2xl text-editorial-primary placeholder-gray-300 focus:outline-none focus:border-brand-red transition-all duration-300 disabled:opacity-50"
                />
                <label className="absolute -top-3 left-0 text-xs font-bold uppercase tracking-widest text-editorial-meta group-focus-within:text-brand-red transition-colors">
                  Contacto
                </label>
              </div>

              <div className="relative group">
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Describe el problema y el contexto del sistema que necesitas."
                  required
                  rows="4"
                  className="w-full bg-transparent border-b border-gray-300 py-4 text-xl md:text-2xl text-editorial-primary placeholder-gray-300 focus:outline-none focus:border-brand-red transition-all duration-300 disabled:opacity-50 resize-none"
                />
                <label className="absolute -top-3 left-0 text-xs font-bold uppercase tracking-widest text-editorial-meta group-focus-within:text-brand-red transition-colors">
                  Contexto & Requerimiento
                </label>
              </div>
            </div>

            <div className="space-y-6">
              {recaptchaKey && (
                <div className="transform scale-90 origin-left">
                  <ReCAPTCHA sitekey={recaptchaKey} onChange={handleCaptcha} />
                  {isTestKey && <p className="text-xs text-yellow-600 mt-2">⚠️ Test Mode</p>}
                </div>
              )}

              <button
                type="submit"
                disabled={loading || envError || !recaptchaKey}
                className={`group flex items-center gap-4 text-xl md:text-2xl font-bold transition-all duration-300
                            ${loading || envError || !recaptchaKey ? 'text-gray-300 cursor-not-allowed' : 'text-editorial-primary hover:text-brand-red'}
                        `}
              >
                {loading ? "Enviando Solicitud..." : "Enviar Solicitud"}
                <FaArrowRight className={`text-lg transition-transform duration-300 ${!loading && !envError && recaptchaKey ? 'group-hover:translate-x-2' : ''}`} />
              </button>

              <AnimatePresence>
                {status === "ok" && (
                  <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-brand-red font-medium">
                    Solicitud recibida. Analizaré el caso y responderé en breve.
                  </motion.p>
                )}
                {status === "error" && (
                  <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-red-600 font-medium">
                    Error en el envío. Por favor intenta vía WhatsApp.
                  </motion.p>
                )}
                {(status === "captcha" || status === "incompleto") && (
                  <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-editorial-body font-medium">
                    Por favor completa todos los campos y la verificación.
                  </motion.p>
                )}
              </AnimatePresence>
            </div>

          </form>
        </div>

      </div>
    </section>
  );
}
