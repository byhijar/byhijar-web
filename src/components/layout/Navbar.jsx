import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      let current = "";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop - 150) {
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
    { id: "#proyectos", label: "Proyectos", sectionId: "proyectos" },
    { id: "#enfoque", label: "Enfoque", sectionId: "enfoque" },
    { id: "#trayectoria", label: "Trayectoria", sectionId: "trayectoria" },
    { id: "#tech", label: "Tech", sectionId: "tech" },
    { id: "#contacto", label: "Contacto", sectionId: "contacto" },
  ];

  return (
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
        </nav>
      )}
    </header>
  );
}
