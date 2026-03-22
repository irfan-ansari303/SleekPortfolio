import { User } from "./Icons";

export function Bio() {
  return (
    <section className="mt-10 animate-fade-in">
      <div className="glass-card rounded-xl p-6 md:p-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-8 flex items-center justify-center rounded-lg bg-indigo-500/10 text-indigo-400 border border-indigo-500/10">
            <User size={18} />
          </div>
          <h2 className="text-lg font-semibold text-white tracking-tight">About</h2>
        </div>

        <p className="text-slate-400 leading-relaxed text-[15px] md:text-base">
          A Full Stack Developer skilled in developing web applications using{" "}
          <span className="text-slate-200">Express.js</span>,{" "}
          <span className="text-slate-200">React.js</span> and modern frameworks.
          Connecting databases with{" "}
          <span className="text-blue-400">PostgreSQL</span> and{" "}
          <span className="text-emerald-400">MongoDB</span>, deploying production-ready apps.
        </p>
      </div>

      {/* Subtle divider */}
      <div className="gradient-line mt-10" />
    </section>
  );
}
