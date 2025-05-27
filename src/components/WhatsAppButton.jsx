import { FaWhatsapp } from "react-icons/fa";
import { useEffect, useState } from "react";

export default function WhatsAppButton() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setShow(true), 800); // pequeño delay de entrada
    return () => clearTimeout(timeout);
  }, []);

  return (
    <a
      href="https://wa.me/569XXXXXXXX" // ← Cambia por tu número real
      target="_blank"
      rel="noreferrer"
      className={`fixed bottom-8 right-6 z-50 rounded-full p-4 text-white bg-green-500 hover:bg-green-600 shadow-xl transition-all duration-300 ${
        show ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
      } animate-pulse hover:animate-none`}
      style={{ marginBottom: 'env(safe-area-inset-bottom)' }} // para móviles modernos
      title="Escríbeme por WhatsApp"
    >
      <FaWhatsapp size={28} />
    </a>
  );
}
