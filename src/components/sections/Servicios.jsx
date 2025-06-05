
import { useState } from "react";
import { FaCode, FaPalette, FaRocket, FaTimes } from "react-icons/fa";
import { Dialog } from "@headlessui/react";

export default function Servicios() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section
      id="servicios"
      className="bg-white dark:bg-gray-950 py-20 px-4 text-gray-800 dark:text-gray-100"
    >
      <h2 className="text-4xl font-bold text-center mb-12">
        Servicios que potencian tu negocio
      </h2>

      <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
        {/* Desarrollo Web */}
        <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition">
          <FaCode className="text-3xl mb-4 text-purple-600 dark:text-purple-400" />
          <h3 className="text-xl font-semibold mb-2">Desarrollo Web</h3>
          <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
            Creo sitios rápidos, modernos y escalables que se adaptan a tu negocio. 
            Tu web será tu mejor vendedor, disponible 24/7 y diseñada para convertir.
          </p>
          <ul className="text-xs text-gray-600 dark:text-gray-400 list-disc list-inside space-y-1 mb-3">
            <li>Landing pages persuasivas</li>
            <li>Webs administrables con panel personalizado</li>
            <li>Integración de formularios, base de datos y más</li>
            <li>Desarrollo con React, Firebase o Django</li>
          </ul>
          <button
            onClick={() => setIsOpen(true)}
            className="text-sm text-purple-600 hover:underline dark:text-purple-400"
          >
            Ver precios estimados →
          </button>
        </div>

        {/* Diseño Visual y Branding */}
        <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition">
          <FaPalette className="text-3xl mb-4 text-purple-600 dark:text-purple-400" />
          <h3 className="text-xl font-semibold mb-2">Diseño Visual y Branding</h3>
          <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
            Diseño a medida que representa tu marca. No uso plantillas genéricas, sino identidad visual pensada en tu público.
          </p>
          <ul className="text-xs text-gray-600 dark:text-gray-400 list-disc list-inside space-y-1 mb-3">
            <li>Diseño UX/UI enfocado en experiencia del usuario</li>
            <li>Paleta de colores, estilo e iconografía a medida</li>
            <li>Diseño responsive para todos los dispositivos</li>
            <li>Adaptación de logos y material gráfico</li>
          </ul>
          <button
            onClick={() => setIsOpen(true)}
            className="text-sm text-purple-600 hover:underline dark:text-purple-400"
          >
            Ver precios estimados →
          </button>
        </div>

        {/* Acompañamiento */}
        <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition">
          <FaRocket className="text-3xl mb-4 text-purple-600 dark:text-purple-400" />
          <h3 className="text-xl font-semibold mb-2">Lanzamiento y Soporte</h3>
          <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
            Te acompaño en el proceso completo: desde poner tu sitio en línea hasta mantenerlo actualizado y seguro.
          </p>
          <ul className="text-xs text-gray-600 dark:text-gray-400 list-disc list-inside space-y-1 mb-3">
            <li>Gestión de dominio y hosting</li>
            <li>Configuración de correos corporativos</li>
            <li>Monitoreo de rendimiento y soporte técnico</li>
            <li>Actualizaciones y mejoras según necesidades</li>
          </ul>
          <button
            onClick={() => setIsOpen(true)}
            className="text-sm text-purple-600 hover:underline dark:text-purple-400"
          >
            Ver precios estimados →
          </button>
        </div>
      </div>

      {/* Modal de precios */}
      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="fixed inset-0 z-50 flex items-center justify-center px-4 backdrop-blur-sm"
      >
        <Dialog.Panel className="max-w-md w-full bg-white dark:bg-gray-800 rounded-xl p-6 shadow-xl relative">
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 dark:hover:text-white"
          >
            <FaTimes />
          </button>
          <Dialog.Title className="text-lg font-bold mb-3 text-purple-600 dark:text-purple-400">
            ¿Cuánto cuesta crear tu sitio web?
          </Dialog.Title>
          <Dialog.Description className="text-sm text-gray-600 dark:text-gray-300">
            Cada proyecto es único, pero aquí tienes una guía de precios referenciales:
          </Dialog.Description>
          <ul className="mt-4 text-sm text-gray-700 dark:text-gray-200 space-y-2">
            <li>🌐 Landing page: desde $70.000 CLP</li>
            <li>🛍️ Web administrable: $150.000 – $250.000 CLP</li>
            <li>🎨 Diseño visual o rebranding: desde $50.000 CLP</li>
            <li>🚀 Acompañamiento anual: desde $60.000 CLP</li>
          </ul>
          <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
            Para una cotización exacta, solo necesitas escribirme 😉
          </p>
          <div className="mt-6 flex gap-3">
            <a
              href="#contacto"
              onClick={() => setIsOpen(false)}
              className="flex-1 text-center bg-purple-600 text-white py-2 rounded-md hover:bg-purple-700 transition"
            >
              Escríbeme
            </a>
            <a
              href="https://wa.me/56945955335"
              target="_blank"
              className="flex-1 text-center border border-purple-600 text-purple-600 py-2 rounded-md hover:bg-purple-50 dark:hover:bg-purple-900/10"
            >
              WhatsApp
            </a>
          </div>
        </Dialog.Panel>
      </Dialog>
    </section>
  );
}
