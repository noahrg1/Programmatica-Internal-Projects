export default function Hero() {
  return (
    <section className="flex-1 flex flex-col items-center justify-center text-center px-6 py-24 bg-white">
      <div className="max-w-3xl mx-auto space-y-6">
        {/* Badge */}
        <span className="inline-block text-xs font-semibold tracking-widest uppercase text-brand-accent bg-red-50 px-3 py-1 rounded-full">
          Work in progress
        </span>

        {/* Headline */}
        <h1 className="text-5xl font-bold tracking-tight text-gray-900 leading-tight">
          Programmatica <br />
          <span className="text-brand-accent">Internal Projects</span>
        </h1>

        {/* Subheading */}
        <p className="text-lg text-gray-500 max-w-xl mx-auto">
          A collaborative space for the Programmatica team. Projects, tools, and experiments — built together.
        </p>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center pt-4">
          <a
            href="#projects"
            className="px-6 py-3 bg-gray-900 text-white text-sm font-medium rounded-lg hover:bg-gray-700 transition-colors"
          >
            View Projects
          </a>
          <a
            href="https://github.com/noahrg1/Programmatica-Internal-Projects"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 border border-gray-200 text-gray-700 text-sm font-medium rounded-lg hover:bg-gray-50 transition-colors"
          >
            Contribute on GitHub
          </a>
        </div>
      </div>

      {/* Projects section placeholder */}
      <div id="projects" className="mt-24 w-full max-w-5xl mx-auto">
        <h2 className="text-2xl font-semibold text-gray-900 mb-8">Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Project card placeholder — duplicate or replace as needed */}
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="border border-dashed border-gray-200 rounded-xl p-6 text-left space-y-2 hover:border-gray-400 transition-colors"
            >
              <div className="w-8 h-8 rounded-md bg-gray-100" />
              <h3 className="font-medium text-gray-700">Project {i}</h3>
              <p className="text-sm text-gray-400">Description coming soon.</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
