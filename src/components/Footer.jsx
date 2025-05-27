export default function Footer() {
  return (
    <footer className="bg-black text-gray-400 py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        <p className="text-sm">© {new Date().getFullYear()} ByHijar Web Solutions</p>

        <div className="text-sm text-center md:text-right space-y-1">
          <p className="mb-1 font-medium text-gray-300">Hablemos donde más te acomode 👇</p>
          <div className="flex flex-wrap justify-center md:justify-end gap-3">
            <a href="mailto:hola@byhijar.cl" className="hover:text-white transition">✉️ Email</a>
            <a href="https://www.instagram.com/byhijar" target="_blank" rel="noreferrer" className="hover:text-white transition">📸 Instagram</a>
            <a href="https://wa.me/569XXXXXXX" target="_blank" rel="noreferrer" className="hover:text-white transition">💬 WhatsApp</a>
            <a href="https://linkedin.com/in/tuusuario" target="_blank" rel="noreferrer" className="hover:text-white transition">💼 LinkedIn</a>
            <a href="https://tiktok.com/@byhijar" target="_blank" rel="noreferrer" className="hover:text-white transition">🎵 TikTok</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
