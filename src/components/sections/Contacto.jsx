import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase/config";
import { FaWhatsapp } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";
import ReCAPTCHA from "react-google-recaptcha";

export default function ContactoForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);
  const [captchaToken, setCaptchaToken] = useState(null);

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

    setLoading(true);

    const dataConFirma = {
      ...form,
      message: `${form.message}\n\n----\nMensaje enviado desde byhijar.cl`,
    };

    try {
      await addDoc(collection(db, "leads"), form);

      await emailjs.send(
        "service_ntzeabv",
        "template_ty72il9",
        {
          name: form.name,
          email: form.email,
          message: dataConFirma.message,
        },
        "7NppPVTz-0ZFnPS_6"
      );

      setStatus("ok");
      setForm({ name: "", email: "", message: "" });
      setCaptchaToken(null);
    } catch (err) {
      console.error("❌ Error al enviar mensaje:", err);
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contacto"
      className="bg-white dark:bg-gray-900 py-16 px-4 text-gray-900 dark:text-gray-100"
      aria-labelledby="contacto-title"
    >
      <div className="max-w-2xl mx-auto text-center space-y-4">
        <h2 id="contacto-title" className="text-4xl font-bold">
          ¿Listo para transformar tu idea en realidad?
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Házmelo saber. Estoy aquí para ayudarte a lanzar, escalar o simplemente empezar.
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="mt-10 max-w-xl mx-auto space-y-6 bg-gray-100 dark:bg-gray-800 p-8 rounded-xl shadow-md transition-colors"
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
            className="w-full p-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 rounded"
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
            className="w-full p-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 rounded"
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
            className="w-full p-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 rounded h-36"
          />
        </div>

        <div className="flex justify-center">
          <ReCAPTCHA
            sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}
            onChange={handleCaptcha}
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className={`w-full ${
            loading
              ? "bg-purple-400 cursor-not-allowed"
              : "bg-purple-600 hover:bg-purple-700 dark:bg-purple-500 dark:hover:bg-purple-600"
          } text-white py-3 rounded font-semibold transition`}
        >
          {loading ? "Enviando..." : "Enviar mensaje ahora"}
        </button>

        <AnimatePresence>
          {status === "ok" && (
            <motion.p
              className="text-green-600 dark:text-green-400 text-center font-medium"
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
            >
              ¡Gracias por tu mensaje! Te responderé lo antes posible.
            </motion.p>
          )}
          {status === "error" && (
            <motion.p
              className="text-red-600 dark:text-red-400 text-center font-medium"
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
            >
              Algo salió mal. Intenta nuevamente o escríbeme por WhatsApp.
            </motion.p>
          )}
          {status === "captcha" && (
            <motion.p
              className="text-yellow-600 dark:text-yellow-400 text-center font-medium"
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
            >
              Por favor completa el captcha antes de enviar.
            </motion.p>
          )}
          {status === "incompleto" && (
            <motion.p
              className="text-red-500 dark:text-red-300 text-center font-medium"
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
        <p className="mb-3 text-gray-700 dark:text-gray-300 text-base">
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
