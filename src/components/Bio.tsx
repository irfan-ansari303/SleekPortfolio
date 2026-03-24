

export function Bio() {
  return (
    <section className="mt-2 animate-fade-in px-2 sm:px-0">
      <div className="relative">
        {/* Header using theme-heading for consistency */}
        <h2 className="text-xl font-bold theme-heading tracking-tight mb-4">
          About Me
        </h2>

        {/* 
            Body text using theme-text-muted for a sophisticated, breathable look in both modes.
            Key highlights use theme-text to stand out.
        */}
        <p className="theme-text-secondary leading-relaxed text-[15px] md:text-base font-medium transition-colors duration-500">
          A Full Stack Developer skilled in developing web applications using{" "}
          <span className="theme-text font-bold uppercase tracking-tight">Express.js</span>,{" "}
          <span className="theme-text font-bold uppercase tracking-tight">React.js</span> and modern frameworks.
          Connecting databases with{" "}
          <span className="theme-text font-bold uppercase tracking-tight">PostgreSQL</span> and{" "}
          <span className="theme-text font-bold uppercase tracking-tight">MongoDB</span>, deploying production-ready apps.
        </p>
      </div>
    </section>
  );
}
