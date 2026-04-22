import { useState, useEffect } from "react";
import { FaBars, FaTimes, FaGlobe } from "react-icons/fa";
import { Helmet } from "react-helmet-async";
import { useLanguage } from "../../context/LanguageContext";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const { language, toggleLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      let current = "";

      // Check if we're at the bottom of the page
      if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 50) {
        setActiveSection("contacto");
        return;
      }

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        // Adjusted threshold for better accuracy
        if (window.scrollY >= sectionTop - 250) {
          current = section.getAttribute("id");
        }
      });

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id) => {
    const el = document.querySelector(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setOpen(false);
    }
  };

  const navLinks = [
    { id: "#proyectos", label: t('nav.projects'), sectionId: "proyectos" },
    { id: "#enfoque", label: t('nav.approach'), sectionId: "enfoque" },
    { id: "#contenido", label: t('nav.content'), sectionId: "contenido" },
    { id: "#trayectoria", label: t('nav.trajectory'), sectionId: "trayectoria" },
    { id: "#tech", label: t('nav.tech'), sectionId: "tech" },
    { id: "#contacto", label: t('nav.contact'), sectionId: "contacto" },
  ];

  const getPageTitle = (section) => {
    const base = 'ByHijar — System Builder';
    switch (section) {
      case 'proyectos': return `${t('nav.projects')} | ByHijar`;
      case 'contenido': return `${t('nav.content')} | ByHijar`;
      case 'enfoque': return `${t('nav.approach')} | ByHijar`;
      case 'trayectoria': return `${t('nav.trajectory')} | ByHijar`;
      case 'tech': return `${t('nav.tech')} | ByHijar`;
      case 'contacto': return `${t('nav.contact')} | ByHijar`;
      default: return base;
    }
  };

  return (
    <>
      <Helmet>
        <title>{getPageTitle(activeSection)}</title>
      </Helmet>
      <header
        className="fixed top-0 left-0 w-full z-50 bg-editorial-bg/95 backdrop-blur-sm border-b border-gray-100 transition-all duration-300"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 h-20 flex justify-between items-center">
          {/* Logo / Branding */}
          <div
            className="flex items-center gap-3 cursor-pointer group"
            onClick={() => scrollTo("#inicio")}
          >
            <span className="text-lg font-semibold tracking-tight text-editorial-primary font-mono transition-colors">
              byhijar<span className="text-gray-300 transition-colors duration-300 group-hover:text-brand-red">_</span>
            </span>
          </div>

          {/* Desktop Nav */}
          <nav
            className="hidden md:flex items-center space-x-10 text-sm font-medium text-editorial-body"
            aria-label="Main navigation"
          >
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className={`relative py-1 group transition-colors ${activeSection === link.sectionId ? "text-editorial-primary font-semibold" : "text-editorial-body hover:text-editorial-primary"
                  }`}
              >
                {link.label}
                <span
                  className={`absolute bottom-0 left-0 h-[2px] bg-brand-red transition-all duration-300 ease-out
                  ${activeSection === link.sectionId ? "w-full" : "w-0 group-hover:w-full"}`}
                ></span>
              </button>
            ))}

            <button
              onClick={toggleLanguage}
              className="flex items-center gap-2 px-3 py-1 border border-gray-200 rounded-full hover:border-brand-red hover:text-brand-red transition-all duration-300 text-xs font-bold uppercase tracking-widest"
            >
              <FaGlobe /> {language === 'es' ? 'EN' : 'ES'}
            </button>
          </nav>

          {/* Mobile Actions */}
          <div className="md:hidden flex items-center gap-4">
            <button
              className="text-xl text-editorial-primary focus:outline-none"
              onClick={() => setOpen(!open)}
              aria-label="Toggle navigation menu"
            >
              {open ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {open && (
          <nav
            className="md:hidden bg-editorial-bg px-6 py-4 border-b border-gray-100 space-y-4 absolute w-full left-0 top-20 shadow-lg"
            aria-label="Mobile navigation"
          >
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className={`block w-full text-left font-medium text-lg py-2 border-b border-gray-50 last:border-0 ${activeSection === link.sectionId ? "text-brand-red" : "text-editorial-secondary"
                  }`}
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={toggleLanguage}
              className="w-full text-left font-bold text-sm py-4 text-editorial-secondary flex items-center gap-3 border-t border-gray-100"
            >
              <FaGlobe /> {language === 'es' ? 'Switch to English' : 'Cambiar a Español'}
            </button>
          </nav>
        )}
      </header>
    </>
  );
}
