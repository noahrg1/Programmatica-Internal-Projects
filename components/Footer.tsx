export default function Footer() {
  return (
    <footer className="w-full border-t border-gray-100 bg-white">
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-400">
        <p>© {new Date().getFullYear()} Programmatica. All rights reserved.</p>

        <div className="flex items-center gap-4">
          <a
            href="https://github.com/noahrg1/Programmatica-Internal-Projects"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-600 transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://programmatica.co.nz"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-600 transition-colors"
          >
            programmatica.co.nz
          </a>
        </div>
      </div>
    </footer>
  );
}
