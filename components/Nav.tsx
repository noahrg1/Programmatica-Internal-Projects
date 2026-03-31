export default function Nav() {
  return (
    <header className="w-full border-b border-gray-100 bg-white sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo / Brand */}
        <a href="/" className="text-lg font-semibold tracking-tight text-gray-900">
          Programmatica <span className="text-brand-accent font-bold">Projects</span>
        </a>

        {/* Nav links — add pages here as the site grows */}
        <nav className="hidden md:flex items-center gap-6 text-sm text-gray-600">
          <a href="#projects" className="hover:text-gray-900 transition-colors">Projects</a>
          <a href="#about" className="hover:text-gray-900 transition-colors">About</a>
          <a href="#contact" className="hover:text-gray-900 transition-colors">Contact</a>
        </nav>

        {/* CTA — optional */}
        <a
          href="https://github.com/noahrg1/Programmatica-Internal-Projects"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-medium bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors"
        >
          GitHub
        </a>
      </div>
    </header>
  );
}
