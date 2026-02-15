export default function Footer() {
  return (
    <footer className="bg-white text-gray-500 py-12 px-6 border-t border-gray-100 mt-12">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8 md:gap-0">

        {/* Left: Identity */}
        <div className="space-y-1">
          <h3 className="font-mono text-gray-900 font-semibold text-lg">byhijar_</h3>
          <p className="text-sm font-medium text-gray-400">System Builder</p>
          <p className="text-xs text-gray-400">Santiago, Chile</p>
        </div>

        {/* Right: Technical Context */}
        <div className="text-left md:text-right space-y-1">
          <p className="font-mono text-xs uppercase tracking-wider text-gray-400 font-bold mb-2">Core Stack</p>
          <p className="text-sm font-medium text-gray-600">Django & DRF / React / PostgreSQL</p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-12 pt-6 border-t border-gray-50 text-center md:text-left flex flex-col md:flex-row justify-between text-xs text-gray-400">
        <p>© {new Date().getFullYear()} ByHijar — Built with structure.</p>
      </div>
    </footer>
  );
}
