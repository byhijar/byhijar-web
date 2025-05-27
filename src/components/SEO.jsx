import { Helmet } from "react-helmet";

export default function SEO() {
  return (
    <Helmet>
      <title>ByHijar Web Solutions | Sitios web que conectan</title>
      <meta
        name="description"
        content="ByHijar transforma ideas en sitios web funcionales, modernos y con actitud. Branding, desarrollo web y soluciones digitales para marcas que quieren destacar."
      />
      <meta
        name="keywords"
        content="desarrollo web profesional, diseño de páginas web, soluciones digitales para emprendedores, branding web, José Ijar"
      />
      <meta name="author" content="José Ijar" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://byhijar.netlify.app/" />
      <meta property="og:title" content="ByHijar Web Solutions | Sitios web que conectan" />
      <meta
        property="og:description"
        content="Desarrollo web moderno, branding y soluciones digitales con actitud. Hablemos de tu idea."
      />
      <meta property="og:image" content="https://byhijar.netlify.app/logo.png" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://byhijar.netlify.app/" />
      <meta property="twitter:title" content="ByHijar Web Solutions | Sitios web que conectan" />
      <meta
        property="twitter:description"
        content="Desarrollo web moderno, branding y soluciones digitales con actitud. Hablemos de tu idea."
      />
      <meta property="twitter:image" content="https://byhijar.netlify.app/logo.png" />
    </Helmet>
  );
}
