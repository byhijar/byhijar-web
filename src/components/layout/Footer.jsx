import { FaInstagram, FaTiktok, FaLinkedin } from "react-icons/fa";
import { useLanguage } from "../../context/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-white text-gray-500 py-12 px-6 border-t border-gray-100 mt-12">
      <div className="max-w-6xl mx-auto flex flex-col md:grid md:grid-cols-3 justify-between items-start md:items-center gap-8 md:gap-0">

        {/* Left: Identity */}
        <div className="space-y-1">
          <h3 className="font-mono text-gray-900 font-semibold text-lg">byhijar_</h3>
          <p className="text-sm font-medium text-gray-400">{t('footer.builder')}</p>
          <p className="text-xs text-gray-400">{t('footer.location')}</p>
        </div>

        {/* Right: Social */}
        <div className="md:col-span-2 flex flex-col md:flex-row justify-end items-start md:items-center gap-8 md:gap-16">
          <div className="flex gap-6 text-xl">
            <a href="https://www.instagram.com/byhijar/" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-brand-red transition-colors duration-300">
              <FaInstagram />
            </a>
            <a href="https://www.tiktok.com/@byhijar" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-brand-red transition-colors duration-300">
              <FaTiktok />
            </a>
            <a href="https://www.linkedin.com/in/jose-hijar-127727247/" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-brand-red transition-colors duration-300">
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-12 pt-6 border-t border-gray-50 text-center md:text-left flex flex-col md:flex-row justify-between text-xs text-gray-400">
        <p>© {new Date().getFullYear()} ByHijar — {t('footer.built_with')}</p>
      </div>
    </footer>
  );
}
