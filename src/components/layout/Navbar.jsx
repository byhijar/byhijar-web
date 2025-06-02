import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const scrollTo = (id) => {
    const el = document.querySelector(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setOpen(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);

    const checkDarkMode = () => {
      setDarkMode(document.documentElement.classList.contains("dark"));
    };

    window.addEventListener("scroll", handleScroll);
    const observer = new MutationObserver(checkDarkMode);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    checkDarkMode();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

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
      className={`fixed top-0 left-0 w-full z-50 border-b border-gray-200 dark:border-gray-800 transition-all duration-300 ${
        scrolled
          ? "bg-white dark:bg-gray-900 shadow-md"
          : "bg-white/80 dark:bg-gray-900/60 backdrop-blur-md"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo / Branding */}
        <div
          className="flex items-center gap-3 cursor-pointer"
          onClick={() => scrollTo("#inicio")}
        >
          <img
            src={darkMode ? "/logos/logo-morado.png" : "/logos/logo-rojo.png"}
            alt="Logo de ByHijar Web Solutions"
            className="h-10 w-10 rounded-sm object-contain"
            loading="lazy"
          />
          <span className="text-lg font-semibold tracking-tight">
            {darkMode ? (
              <span className="text-purple-400">ByHijar Web Solutions</span>
            ) : (
              <span className="text-red-600">ByHijar Web Solutions</span>
            )}
          </span>
        </div>


        {/* Desktop Nav */}
        <nav
          className="hidden md:flex items-center space-x-6 text-sm font-medium text-gray-800 dark:text-gray-100"
          aria-label="Main navigation"
        >
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Mobile Button */}
        <button
          className="md:hidden text-2xl text-purple-500 dark:text-purple-400 focus:outline-none"
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation menu"
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Nav */}
      {open && (
        <nav
          className="md:hidden bg-white dark:bg-gray-900 px-4 py-4 border-t border-gray-200 dark:border-gray-700 space-y-3"
          aria-label="Mobile navigation"
        >
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className="block w-full text-left text-gray-800 dark:text-gray-100 hover:text-purple-600 dark:hover:text-purple-400"
            >
              {link.label}
            </button>
          ))}
        </nav>
      )}
    </header>
  );
}
