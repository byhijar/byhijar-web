import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
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
    { id: "#inicio", label: "Inicio" },
    { id: "#servicios", label: "Servicios" },
    { id: "#proyectos", label: "Proyectos" },
    { id: "#sobre-mi", label: "Sobre mí" },
    { id: "#testimonios", label: "Testimonios" },
    { id: "#tech", label: "Tech Stack" },
    { id: "#blog", label: "Blog" },
    { id: "#contacto", label: "Contacto" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 border-b border-gray-200 transition-all duration-300 ${scrolled
        ? "bg-white shadow-md"
        : "bg-white/80 backdrop-blur-md"
        }`}
    >
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo / Branding */}
        <div
          className="flex items-center gap-3 cursor-pointer"
          onClick={() => scrollTo("#inicio")}
        >
          <img
            src="/logos/logo-rojo.png"
            alt="Logo de ByHijar Web Solutions"
            className="h-10 w-10 rounded-sm object-contain"
            // Adding a small background or border might be needed if logo is dark on dark, 
            // but usually red contrasts well on dark gray.
            loading="lazy"
          />
          <span className="text-lg font-semibold tracking-tight">
            <span className="text-brand-red">ByHijar Web Solutions</span>
          </span>
        </div>

        {/* Desktop Nav */}
        <nav
          className="hidden md:flex items-center space-x-6 text-sm font-medium text-gray-800"
          aria-label="Main navigation"
        >
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className="hover:text-brand-red transition-colors"
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Mobile Actions */}
        <div className="md:hidden flex items-center gap-4">
          <button
            className="text-2xl text-brand-red focus:outline-none"
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
          className="md:hidden bg-white px-4 py-4 border-t border-gray-200 space-y-3"
          aria-label="Mobile navigation"
        >
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className="block w-full text-left text-gray-800 hover:text-brand-red"
            >
              {link.label}
            </button>
          ))}
        </nav>
      )}
    </header>
  );
}
