import { useState, useEffect } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";
import ReCAPTCHA from "react-google-recaptcha";

export default function ContactoForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);
  const [captchaToken, setCaptchaToken] = useState(null);
  const [envError, setEnvError] = useState(false);
  const [missingKeys, setMissingKeys] = useState([]);

  // Environment Variables
  const recaptchaKey = import.meta.env.VITE_RECAPTCHA_SITE_KEY;
  const emailServiceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const emailTemplateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const emailPublicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  // Google Test Key Detection
  const isTestKey = recaptchaKey?.startsWith("6LeIxAcTAAAAA");

  useEffect(() => {
    const missingVars = [];
    if (!recaptchaKey) missingVars.push("VITE_RECAPTCHA_SITE_KEY");
    if (!emailServiceId) missingVars.push("VITE_EMAILJS_SERVICE_ID");
    if (!emailTemplateId) missingVars.push("VITE_EMAILJS_TEMPLATE_ID");
    if (!emailPublicKey) missingVars.push("VITE_EMAILJS_PUBLIC_KEY");

    if (missingVars.length > 0) {
      console.warn("⚠️ [Config Check] Missing environment variables:", missingVars);
      setMissingKeys(missingVars);
      setEnvError(true);
    } else {
      setEnvError(false);
      setMissingKeys([]);
    }

    if (isTestKey) {
      console.warn("⚠️ [Config Check] Using Google ReCAPTCHA Test Key. THIS IS FOR TESTING ONLY. Do not use in production.");
    }
  }, [recaptchaKey, emailServiceId, emailTemplateId, emailPublicKey, isTestKey]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleCaptcha = (token) => {
    setCaptchaToken(token);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(null);

    // Validaciones básicas
    if (!form.name || !form.email || !form.message) {
      setStatus("incompleto");
      return;
    }

    if (!captchaToken) {
      setStatus("captcha");
      return;
    }

    if (envError) {
      console.error("❌ Cannot submit: Missing environment variables");
      return;
    }

    setLoading(true);

    const dataConFirma = {
      ...form,
      message: `${form.message}\n\n----\nMensaje enviado desde byhijar.cl`,
    };

    try {
      console.log("🚀 Iniciando envío...");

      // Intento EmailJS
      try {
        await emailjs.send(
          emailServiceId,
          emailTemplateId,
          {
            name: form.name,
            email: form.email,
            message: dataConFirma.message,
          },
          emailPublicKey
        );
        console.log("✅ EmailJS enviado OK");
      } catch (emailError) {
        console.error("❌ Error EmailJS:", emailError);
        throw new Error(`EmailJS Failed: ${JSON.stringify(emailError)}`);
      }

      setStatus("ok");
      setForm({ name: "", email: "", message: "" });
      setCaptchaToken(null);
    } catch (err) {
      console.error("❌ Error General:", err);
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contacto"
      className="bg-white py-16 px-4 text-gray-900"
      aria-labelledby="contacto-title"
    >
      <div className="max-w-2xl mx-auto text-center space-y-4">
        <h2 id="contacto-title" className="text-4xl font-bold">
          ¿Listo para transformar tu idea en realidad?
        </h2>
        <p className="text-lg text-gray-600">
          Házmelo saber. Estoy aquí para ayudarte a lanzar, escalar o simplemente empezar.
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="mt-10 max-w-xl mx-auto space-y-6 bg-gray-100 p-8 rounded-xl shadow-md transition-colors"
      >
        <div>
          <label htmlFor="name" className="block text-sm mb-1 font-medium">
            ¿Cómo te llamas?
          </label>
          <input
            id="name"
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Escribe tu nombre aquí"
            required
            disabled={envError}
            className="w-full p-3 border border-gray-300 bg-white text-gray-900 rounded disabled:opacity-50"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm mb-1 font-medium">
            ¿Dónde te escribo?
          </label>
          <input
            id="email"
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Tu correo electrónico"
            required
            disabled={envError}
            className="w-full p-3 border border-gray-300 bg-white text-gray-900 rounded disabled:opacity-50"
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm mb-1 font-medium">
            ¿Qué necesitas?
          </label>
          <textarea
            id="message"
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Contáme brevemente tu idea, proyecto o problema"
            required
            disabled={envError}
            className="w-full p-3 border border-gray-300 bg-white text-gray-900 rounded h-36 disabled:opacity-50"
          />
        </div>

        <div className="flex justify-center flex-col items-center gap-2">
          {recaptchaKey ? (
            <>
              <ReCAPTCHA
                sitekey={recaptchaKey}
                onChange={handleCaptcha}
              />
              {isTestKey && (
                <p className="text-xs text-yellow-600 font-medium">
                  ⚠️ Modo Test Activado (Key de Prueba)
                </p>
              )}
            </>
          ) : (
            <div className="p-4 bg-yellow-100 text-yellow-800 rounded text-sm border border-yellow-200">
              ⚠️ Captcha no configurado (Falta Site Key)
            </div>
          )}
        </div>

        <button
          type="submit"
          disabled={loading || envError || !recaptchaKey}
          className={`w-full ${loading || envError || !recaptchaKey
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-brand-red hover:bg-red-700"
            } text-white py-3 rounded font-semibold transition`}
        >
          {loading ? "Enviando..." : envError ? `Formulario temporalmente deshabilitado por configuración.` : "Enviar mensaje ahora"}
        </button>

        {envError && (
          <div className="mt-4 p-4 bg-red-100 text-red-800 rounded text-sm border border-red-200">
            <p className="font-bold">⚠️ Error de Configuración</p>
            <p>Formulario temporalmente deshabilitado por configuración.</p>
            <p className="text-xs mt-2 text-red-600">Revisar consola para ver las llaves faltantes.</p>
          </div>
        )}

        <AnimatePresence>
          {status === "ok" && (
            <motion.p
              className="text-green-600 text-center font-medium"
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
            >
              ¡Gracias por tu mensaje! Te responderé lo antes posible.
            </motion.p>
          )}
          {status === "error" && (
            <motion.p
              className="text-red-600 text-center font-medium"
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
            >
              Algo salió mal. Intenta nuevamente o escríbeme por WhatsApp.
            </motion.p>
          )}
          {status === "captcha" && (
            <motion.p
              className="text-yellow-600 text-center font-medium"
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
            >
              Por favor completa el captcha antes de enviar.
            </motion.p>
          )}
          {status === "incompleto" && (
            <motion.p
              className="text-red-500 text-center font-medium"
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
            >
              Por favor completa todos los campos del formulario.
            </motion.p>
          )}
        </AnimatePresence>

      </form>

      <div className="mt-8 text-center">
        <p className="mb-3 text-gray-700 text-base">
          ¿Tienes dudas o prefieres una conversación directa?
        </p>
        <a
          href="https://wa.me/56945955335"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center bg-green-600 hover:bg-green-700 text-white px-5 py-2.5 rounded-full font-medium transition"
        >
          <FaWhatsapp className="mr-2 text-lg" /> Contáctame por WhatsApp
        </a>
      </div>
    </section>
  );
}
