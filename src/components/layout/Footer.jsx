import {
  FaInstagram,
  FaWhatsapp,
  FaLinkedin,
  FaTiktok,
  FaEnvelope,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-sm text-center md:text-left">
          © {new Date().getFullYear()} <span className="text-white font-semibold">ByHijar Web Solutions</span>
        </p>

        <div className="text-sm text-center md:text-right">
          <p className="text-gray-300 font-medium mb-2">¿Conversamos? Estoy disponible en:</p>
          <div className="flex flex-wrap justify-center md:justify-end gap-4 text-lg">
            <a href="mailto:byhijar@gmail.com" className="hover:text-white transition" title="Email">
              <FaEnvelope />
            </a>
            <a href="https://www.instagram.com/byhijar" target="_blank" rel="noreferrer" className="hover:text-white transition" title="Instagram">
              <FaInstagram />
            </a>
            <a href="https://wa.me/56945955335" target="_blank" rel="noreferrer" className="hover:text-white transition" title="WhatsApp">
              <FaWhatsapp />
            </a>
            <a href="https://www.linkedin.com/in/jose-hijar-127727247/" target="_blank" rel="noreferrer" className="hover:text-white transition" title="LinkedIn">
              <FaLinkedin />
            </a>
            <a href="https://tiktok.com/@byhijar" target="_blank" rel="noreferrer" className="hover:text-white transition" title="TikTok">
              <FaTiktok />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
