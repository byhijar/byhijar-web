import { Helmet } from "react-helmet";

export default function SEO() {
  return (
    <Helmet>
      <html lang="es" />
      <title>ByHijar Web Solutions | Desarrollo web y branding con actitud</title>

      <meta
        name="description"
        content="Transforma tu presencia digital con sitios web modernos, branding visual potente y soluciones personalizadas. Desarrollado por José Hijar para marcas con actitud."
      />
      <meta
        name="keywords"
        content="desarrollo web en Chile, diseño web moderno, branding digital, sitios web personalizados, soluciones para emprendedores, José Hijar, páginas web para negocios"
      />
      <meta name="author" content="José Hijar" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="es_CL" />
      <meta property="og:url" content="https://byhijar.netlify.app/" />
      <meta
        property="og:title"
        content="ByHijar Web Solutions | Desarrollo web y branding con actitud"
      />
      <meta
        property="og:description"
        content="Impulsa tu marca con un sitio web funcional, atractivo y con personalidad. Hablemos hoy."
      />
      <meta property="og:image" content="https://byhijar.netlify.app/logo.png" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@byhijar" />
      <meta name="twitter:url" content="https://byhijar.netlify.app/" />
      <meta
        name="twitter:title"
        content="ByHijar Web Solutions | Desarrollo web y branding con actitud"
      />
      <meta
        name="twitter:description"
        content="Desarrollo web, branding visual y soluciones digitales a tu medida. Sitios web que conectan."
      />
      <meta name="twitter:image" content="https://byhijar.netlify.app/logo.png" />
    </Helmet>
  );
}
