import { useState, useEffect, useRef } from "react";
import { FaBars, FaTimes, FaGlobe } from "react-icons/fa";
import { Helmet } from "react-helmet-async";
import { useLanguage, SUPPORTED_LANGUAGES } from "../../context/LanguageContext";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [langMenuOpen, setLangMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const { language, setLanguage, t } = useLanguage();
  const langMenuRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      let current = "";

      // Check if we're at the bottom of the page
      if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 80) {
        setActiveSection("contacto");
        return;
      }

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 250) {
          current = section.getAttribute("id");
        }
      });

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile language menu on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (langMenuRef.current && !langMenuRef.current.contains(e.target)) {
        setLangMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const scrollTo = (id) => {
    const aliasMap = {
      '#problem': '#problema',
      '#solutions': '#soluciones',
      '#about': '#sobre-mi',
      '#contact': '#contacto',
      '#home': '#inicio'
    };
    const targetId = aliasMap[id] || id;
    const el = document.querySelector(targetId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setOpen(false);
    }
  };

  const navLinks = [
    { id: "#problema", label: t('nav.problem'), sectionId: "problema" },
    { id: "#soluciones", label: t('nav.solutions'), sectionId: "soluciones" },
    { id: "#sobre-mi", label: t('nav.about'), sectionId: "sobre-mi" },
    { id: "#contacto", label: t('nav.contact'), sectionId: "contacto" },
  ];

  const getPageTitle = (section) => {
    const base = 'ByHijar — Sistemas & Agentes de IA';
    switch (section) {
      case 'problema': return `${t('nav.problem')} | ByHijar`;
      case 'soluciones': return `${t('nav.solutions')} | ByHijar`;
      case 'sobre-mi': return `${t('nav.about')} | ByHijar`;
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
                className={`relative py-1 group transition-colors ${
                  activeSection === link.sectionId ? "text-editorial-primary font-semibold" : "text-editorial-body hover:text-editorial-primary"
                }`}
              >
                {link.label}
                <span
                  className={`absolute bottom-0 left-0 h-[2px] bg-brand-red transition-all duration-300 ease-out
                  ${activeSection === link.sectionId ? "w-full" : "w-0 group-hover:w-full"}`}
                ></span>
              </button>
            ))}

            {/* Desktop: Full Tri-language Selector (ES | EN | IT) */}
            <div className="flex items-center gap-1 p-1 border border-gray-200 rounded-full text-xs font-mono font-bold">
              <FaGlobe className="text-gray-400 ml-2 mr-1" />
              {SUPPORTED_LANGUAGES.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => setLanguage(lang.code)}
                  className={`px-2.5 py-0.5 rounded-full transition-all duration-200 ${
                    language === lang.code
                      ? "bg-brand-red text-white shadow-sm"
                      : "text-gray-500 hover:text-editorial-primary hover:bg-gray-100"
                  }`}
                  aria-label={`Cambiar idioma a ${lang.label}`}
                >
                  {lang.label}
                </button>
              ))}
            </div>
          </nav>

          {/* Mobile Actions (< md): Compact dropdown (ES ▾) + Menu button */}
          <div className="md:hidden flex items-center gap-3">
            <div className="relative" ref={langMenuRef}>
              <button
                onClick={() => setLangMenuOpen(!langMenuOpen)}
                className="flex items-center gap-1.5 px-3 py-1 border border-gray-200 rounded-full text-xs font-mono font-bold text-editorial-primary bg-white/90 active:bg-gray-100 transition-all shadow-sm"
                aria-label="Seleccionar idioma"
                aria-expanded={langMenuOpen}
              >
                <FaGlobe className="text-gray-400 text-xs" />
                <span className="uppercase text-brand-red">{language}</span>
                <span className="text-[10px] text-gray-500">▾</span>
              </button>

              {langMenuOpen && (
                <div className="absolute right-0 mt-2 py-1.5 w-28 bg-white border border-gray-200 rounded-xl shadow-xl z-50 font-mono text-xs overflow-hidden">
                  {SUPPORTED_LANGUAGES.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setLanguage(lang.code);
                        setLangMenuOpen(false);
                      }}
                      className={`w-full text-left px-3.5 py-2 flex items-center justify-between transition-colors ${
                        language === lang.code
                          ? "bg-brand-red/10 text-brand-red font-bold"
                          : "text-gray-600 hover:bg-gray-50"
                      }`}
                    >
                      <span>{lang.label}</span>
                      {language === lang.code && <span className="text-brand-red text-xs">✓</span>}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button
              className="text-xl text-editorial-primary p-2 focus:outline-none"
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
                className={`block w-full text-left font-medium text-lg py-2 border-b border-gray-50 last:border-0 ${
                  activeSection === link.sectionId ? "text-brand-red font-bold" : "text-editorial-secondary"
                }`}
              >
                {link.label}
              </button>
            ))}
          </nav>
        )}
      </header>
    </>
  );
}
