import { FaCode, FaPalette, FaRocket } from "react-icons/fa";

export default function Servicios() {
  return (
    <section
      id="servicios"
      className="bg-white py-20 px-4 text-gray-800"
    >
      <h2 className="text-4xl font-bold text-center mb-12">
        Servicios que potencian tu negocio
      </h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        {/* Presencia Web */}
        <div className="bg-gray-100 p-6 md:p-8 rounded-xl shadow-lg hover:shadow-xl transition flex flex-col h-full border border-gray-200">
          <FaCode className="text-4xl mb-6 text-brand-red" />
          <h3 className="text-2xl font-bold mb-3">Presencia Web</h3>
          <p className="text-gray-700 mb-6 flex-grow">
            Ideal para campañas o profesionales que necesitan visibilidad inmediata y conversión rápida.
          </p>
          <ul className="text-sm text-gray-600 space-y-3 mb-8">
            <li className="flex items-center gap-2">✓ Landing Page o One Page</li>
            <li className="flex items-center gap-2">✓ Diseño responsivo y rápido</li>
            <li className="flex items-center gap-2">✓ Integración con WhatsApp</li>
            <li className="flex items-center gap-2">✓ Formulario de contacto basico</li>
          </ul>
          <div className="mt-auto pt-6 border-t border-gray-300">
            <p className="text-sm text-gray-500 mb-1">Inversión única desde</p>
            <p className="text-3xl font-bold text-brand-red mb-4">$250.000 <span className="text-sm font-normal text-gray-500">CLP</span></p>
            <a href="#contacto" className="block w-full text-center bg-brand-red hover:bg-red-700 text-white font-medium py-3 rounded-lg transition-colors">
              Cotizar este plan
            </a>
          </div>
        </div>

        {/* Sitios Corporativos & E-Commerce */}
        <div className="bg-white p-6 md:p-8 rounded-xl shadow-2xl hover:shadow-red-500/20 transition flex flex-col h-full border-2 border-brand-red relative transform md:-translate-y-4">
          <div className="absolute top-0 right-0 bg-brand-red text-white text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg">
            MÁS POPULAR
          </div>
          <FaRocket className="text-4xl mb-6 text-brand-red" />
          <h3 className="text-2xl font-bold mb-3">Corporativo & E-Commerce</h3>
          <p className="text-gray-700 mb-6 flex-grow">
            Plataformas completas, administrables y escalables para tu operación diaria.
          </p>
          <ul className="text-sm text-gray-600 space-y-3 mb-8">
            <li className="flex items-center gap-2">✓ Panel de administración autogestionable</li>
            <li className="flex items-center gap-2">✓ Catálogo de productos o blog</li>
            <li className="flex items-center gap-2">✓ Optimización SEO avanzada</li>
            <li className="flex items-center gap-2">✓ Integración con pasarelas de pago</li>
          </ul>
          <div className="mt-auto pt-6 border-t border-gray-200">
            <p className="text-sm text-gray-500 mb-1">Inversión única desde</p>
            <p className="text-3xl font-bold text-brand-red mb-4">$450.000 <span className="text-sm font-normal text-gray-500">CLP</span></p>
            <a href="#contacto" className="block w-full text-center bg-brand-red hover:bg-red-700 text-white font-medium py-3 rounded-lg transition-colors">
              Cotizar proyecto
            </a>
          </div>
        </div>

        {/* Consultoría & Soporte */}
        <div className="bg-gray-100 p-6 md:p-8 rounded-xl shadow-lg hover:shadow-xl transition flex flex-col h-full border border-gray-200">
          <FaPalette className="text-4xl mb-6 text-brand-red" />
          <h3 className="text-2xl font-bold mb-3">Consultoría & Soporte</h3>
          <p className="text-gray-700 mb-6 flex-grow">
            Acompañamiento técnico anual, actualizaciones y optimización continua de tu activo digital.
          </p>
          <ul className="text-sm text-gray-600 space-y-3 mb-8">
            <li className="flex items-center gap-2">✓ Mantenimiento preventivo</li>
            <li className="flex items-center gap-2">✓ Actualizaciones de seguridad</li>
            <li className="flex items-center gap-2">✓ Asesoría en mejoras continuas</li>
            <li className="flex items-center gap-2">✓ Soporte prioritario</li>
          </ul>
          <div className="mt-auto pt-6 border-t border-gray-300">
            <p className="text-sm text-gray-500 mb-1">Planes flexibles</p>
            <p className="text-2xl font-bold text-brand-red mb-4">A medida <span className="text-sm font-normal text-gray-500">/ Cotizar</span></p>
            <a href="#contacto" className="block w-full text-center border-2 border-brand-red text-brand-red hover:bg-red-50 font-medium py-3 rounded-lg transition-colors">
              Consultar planes
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
