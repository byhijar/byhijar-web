import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase/config";
import { FaWhatsapp } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

export default function ContactoForm() {
  const [form, setForm] = useState({ nombre: "", correo: "", mensaje: "" });
  const [status, setStatus] = useState(null);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "leads"), form);
      setStatus("ok");
      setForm({ nombre: "", correo: "", mensaje: "" });
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  return (
    <section
      id="contacto"
      className="bg-white dark:bg-gray-900 py-16 px-4 text-gray-900 dark:text-gray-100"
      aria-labelledby="contacto-title"
    >
      <h2 id="contacto-title" className="text-3xl font-bold text-center mb-10">
        Hablemos de tu idea
      </h2>

      <form
        onSubmit={handleSubmit}
        className="max-w-xl mx-auto space-y-5 bg-gray-100 dark:bg-gray-800 p-6 rounded-xl shadow-md transition-colors"
      >
        <div>
          <label htmlFor="nombre" className="block text-sm mb-1">Nombre</label>
          <input
            id="nombre"
            type="text"
            name="nombre"
            placeholder="Tu nombre"
            value={form.nombre}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 rounded"
          />
        </div>
        <div>
          <label htmlFor="correo" className="block text-sm mb-1">Correo</label>
          <input
            id="correo"
            type="email"
            name="correo"
            placeholder="Tu correo"
            value={form.correo}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 rounded"
          />
        </div>
        <div>
          <label htmlFor="mensaje" className="block text-sm mb-1">Mensaje</label>
          <textarea
            id="mensaje"
            name="mensaje"
            placeholder="¿En qué te puedo ayudar?"
            value={form.mensaje}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 rounded h-32"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-purple-600 hover:bg-purple-700 dark:bg-purple-500 dark:hover:bg-purple-600 text-white py-3 rounded transition"
        >
          Enviar mensaje
        </button>

        <AnimatePresence>
          {status === "ok" && (
            <motion.p
              className="text-green-600 dark:text-green-400 text-center"
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
            >
              ¡Mensaje enviado correctamente!
            </motion.p>
          )}
          {status === "error" && (
            <motion.p
              className="text-red-600 dark:text-red-400 text-center"
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
            >
              Ocurrió un error. Intenta nuevamente.
            </motion.p>
          )}
        </AnimatePresence>
      </form>

      <div className="mt-8 text-center">
        <a
          href="https://wa.me/569XXXXXXX"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded transition"
        >
          <FaWhatsapp className="mr-2" /> WhatsApp Directo
        </a>
      </div>
    </section>
  );
}
