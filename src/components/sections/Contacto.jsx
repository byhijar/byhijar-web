import { useState, useEffect, useRef } from "react";
import { FaArrowRight } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";
import ReCAPTCHA from "react-google-recaptcha";
import { useLanguage } from "../../context/LanguageContext";

export default function ContactoForm() {
  const { t, language } = useLanguage();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);
  const [captchaToken, setCaptchaToken] = useState(null);
  const [envError, setEnvError] = useState(false);

  const recaptchaRef = useRef(null);

  // Environment Variables
  const recaptchaKey = import.meta.env.VITE_RECAPTCHA_SITE_KEY;
  const emailServiceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const emailTemplateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const emailPublicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
  const isTestKey = recaptchaKey?.startsWith("6LeIxAcTAAAAA");

  useEffect(() => {
    if (!recaptchaKey || !emailServiceId || !emailTemplateId || !emailPublicKey) {
      if (import.meta.env.PROD) {
        setEnvError(true);
      }
    }
  }, [recaptchaKey, emailServiceId, emailTemplateId, emailPublicKey]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleCaptcha = (token) => {
    setCaptchaToken(token);
  };

  const handleExpire = () => {
    setCaptchaToken(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(null);

    if (!form.name || !form.email || !form.message) {
      setStatus("incompleto");
      return;
    }

    if (recaptchaKey && !captchaToken) {
      setStatus("captcha");
      return;
    }

    if (envError) return;

    setLoading(true);

    try {
      if (emailServiceId && emailTemplateId && emailPublicKey) {
        await emailjs.send(
          emailServiceId,
          emailTemplateId,
          {
            name: form.name,
            email: form.email,
            message: `${form.message}\n\n----\nMensaje enviado desde byhijar.cl (Idioma: ${language})`,
          },
          emailPublicKey
        );
      }
      setStatus("ok");
      setForm({ name: "", email: "", message: "" });
      setCaptchaToken(null);
      if (recaptchaRef.current) recaptchaRef.current.reset();
    } catch (err) {
      console.error("EmailJS Error:", err);
      setStatus("error");
      if (recaptchaRef.current) recaptchaRef.current.reset();
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-editorial-bg py-20 md:py-28 px-6 md:px-12 text-editorial-primary border-t border-gray-100">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
        {/* Left Column: Context */}
        <div className="lg:col-span-5 space-y-6">
          <div className="font-mono text-xs md:text-sm tracking-widest uppercase flex items-center gap-3">
            <span className="text-editorial-meta font-bold">04</span>
            <span className="text-brand-red w-4 h-[1px] bg-brand-red inline-block"></span>
            <span className="text-editorial-secondary font-semibold">{t("contact.section_label")}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-editorial-primary leading-tight">
            {t("contact.title1")} <br /> {t("contact.title2")}
          </h2>
          <p className="text-base sm:text-lg text-editorial-body leading-relaxed font-medium">
            {t("contact.description")}
          </p>
        </div>

        {/* Right Column: Lineal Form */}
        <div className="lg:col-span-7 pt-2 relative z-10">
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="space-y-6">
              <div className="relative group">
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder={t("contact.labels.name_placeholder")}
                  required
                  className="w-full bg-transparent border-b border-gray-300 py-3.5 text-lg md:text-xl text-editorial-primary placeholder-gray-300 focus:outline-none focus:border-brand-red transition-all duration-300"
                />
                <label className="absolute -top-3 left-0 text-[11px] font-bold uppercase tracking-widest text-editorial-meta group-focus-within:text-brand-red transition-colors font-mono">
                  {t("contact.labels.identity")}
                </label>
              </div>

              <div className="relative group">
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder={t("contact.labels.email_placeholder")}
                  required
                  className="w-full bg-transparent border-b border-gray-300 py-3.5 text-lg md:text-xl text-editorial-primary placeholder-gray-300 focus:outline-none focus:border-brand-red transition-all duration-300"
                />
                <label className="absolute -top-3 left-0 text-[11px] font-bold uppercase tracking-widest text-editorial-meta group-focus-within:text-brand-red transition-colors font-mono">
                  {t("contact.labels.contact")}
                </label>
              </div>

              <div className="relative group">
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder={t("contact.labels.message_placeholder")}
                  required
                  rows="4"
                  className="w-full bg-transparent border-b border-gray-300 py-3.5 text-lg md:text-xl text-editorial-primary placeholder-gray-300 focus:outline-none focus:border-brand-red transition-all duration-300 resize-none"
                />
                <label className="absolute -top-3 left-0 text-[11px] font-bold uppercase tracking-widest text-editorial-meta group-focus-within:text-brand-red transition-colors font-mono">
                  {t("contact.labels.context")}
                </label>
              </div>
            </div>

            <div className="space-y-6">
              {/* Stable container to prevent layout shift and plain text artifacts */}
              {recaptchaKey && (
                <div className="min-h-[78px] flex flex-col justify-center origin-left transform scale-90 sm:scale-100">
                  <ReCAPTCHA
                    key={language}
                    ref={recaptchaRef}
                    sitekey={recaptchaKey}
                    hl={language}
                    onChange={handleCaptcha}
                    onExpired={handleExpire}
                  />
                  {isTestKey && <p className="text-xs text-yellow-600 mt-2">⚠️ Test Mode</p>}
                </div>
              )}

              <button
                type="submit"
                disabled={loading || envError || (recaptchaKey && !captchaToken)}
                className={`group flex items-center gap-3 text-lg md:text-xl font-bold transition-all duration-300 ${
                  loading || envError || (recaptchaKey && !captchaToken)
                    ? "text-gray-300 cursor-not-allowed"
                    : "text-editorial-primary hover:text-brand-red cursor-pointer"
                }`}
              >
                {loading ? t("contact.labels.sending") : t("contact.labels.submit")}
                <FaArrowRight
                  className={`text-base transition-transform duration-300 ${
                    !loading && !envError && (!recaptchaKey || captchaToken)
                      ? "group-hover:translate-x-2 text-brand-red"
                      : ""
                  }`}
                />
              </button>

              <AnimatePresence>
                {status === "ok" && (
                  <motion.p
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-green-700 font-semibold text-sm"
                  >
                    {t("contact.status.ok")}
                  </motion.p>
                )}
                {status === "error" && (
                  <motion.p
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-brand-red font-medium text-sm"
                  >
                    {t("contact.status.error")}
                  </motion.p>
                )}
                {(status === "captcha" || status === "incompleto") && (
                  <motion.p
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-brand-red font-medium text-sm"
                  >
                    {t("contact.status.captcha")}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
