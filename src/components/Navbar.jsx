import { useState, useEffect } from "react";

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
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    const checkDarkMode = () => {
      const isDark = document.documentElement.classList.contains("dark");
      setDarkMode(isDark);
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

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
        scrolled ? "bg-white dark:bg-gray-900 shadow-md" : "bg-white dark:bg-gray-900"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 py-2 flex justify-between items-center">
        <div
          className="flex items-center cursor-pointer"
          onClick={() => scrollTo("#inicio")}
        >
          <img
            src={darkMode ? "/logo-morado.png" : "/logo-rojo.png"}
            alt="ByHijar Web Solutions"
            className="h-10 w-10 mr-2"
          />
          <span className="text-lg font-bold">
            {darkMode ? (
              <span className="text-purple-400">ByHijar Web Solutions</span>
            ) : (
              <span className="text-red-600">ByHijar</span>
            )}
          </span>
        </div>

        <nav className="hidden md:flex space-x-6 text-sm font-medium text-gray-800 dark:text-gray-100">
          <button onClick={() => scrollTo("#inicio")} className="hover:text-purple-600 dark:hover:text-purple-400">
            Inicio
          </button>
          <button onClick={() => scrollTo("#servicios")} className="hover:text-purple-600 dark:hover:text-purple-400">
            Servicios
          </button>
          <button onClick={() => scrollTo("#casos")} className="hover:text-purple-600 dark:hover:text-purple-400">
            Casos
          </button>
          <button onClick={() => scrollTo("#sobre-mi")} className="hover:text-purple-600 dark:hover:text-purple-400">
            Sobre mí
          </button>
          <button onClick={() => scrollTo("#contacto")} className="hover:text-purple-600 dark:hover:text-purple-400">
            Contacto
          </button>
        </nav>

        <button
          className="md:hidden text-purple-400 dark:text-purple-400 focus:outline-none"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-white dark:bg-gray-900 px-4 py-2 border-t border-gray-200 dark:border-gray-700 space-y-2">
          <button onClick={() => scrollTo("#inicio")} className="block w-full text-left">
            Inicio
          </button>
          <button onClick={() => scrollTo("#servicios")} className="block w-full text-left">
            Servicios
          </button>
          <button onClick={() => scrollTo("#casos")} className="block w-full text-left">
            Casos
          </button>
          <button onClick={() => scrollTo("#sobre-mi")} className="block w-full text-left">
            Sobre mí
          </button>
          <button onClick={() => scrollTo("#contacto")} className="block w-full text-left">
            Contacto
          </button>
        </div>
      )}
    </header>
  );
}
