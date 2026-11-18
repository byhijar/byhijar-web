import { Helmet } from "react-helmet-async";

export default function SEO() {
  return (
    <Helmet>
      <html lang="es" />
      <title>ByHijar — Sistemas & Agentes de IA para Vender y Agendar</title>

      <meta
        name="description"
        content="Sistemas y agentes de IA para vender y agendar en piloto automático por WhatsApp e Instagram. Creadores de Klous. Por José Híjar."
      />
      <meta
        name="keywords"
        content="agentes de IA, automatización WhatsApp, Klous, agendamiento automático, ventas por chat, chatbots inteligentes Chile, José Híjar, ByHijar"
      />
      <meta name="author" content="José Híjar" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="es_CL" />
      <meta property="og:url" content="https://byhijar.cl" />
      <meta
        property="og:title"
        content="ByHijar — Sistemas y Agentes de IA para Ventas y Agendamiento"
      />
      <meta
        property="og:description"
        content="Elimina el trabajo manual de tu operación diaria. Automatiza la atención, validación de pagos y agendamiento 24/7 con Klous."
      />
      <meta property="og:image" content="https://byhijar.cl/logos/logo-rojo.png" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@byhijar" />
      <meta name="twitter:url" content="https://byhijar.cl" />
      <meta
        name="twitter:title"
        content="ByHijar — Sistemas y Agentes de IA para Ventas y Agendamiento"
      />
      <meta
        name="twitter:description"
        content="Elimina el trabajo manual de tu operación diaria. Automatiza WhatsApp e Instagram con Klous."
      />
      <meta name="twitter:image" content="https://byhijar.cl/logos/logo-rojo.png" />
    </Helmet>
  );
}
