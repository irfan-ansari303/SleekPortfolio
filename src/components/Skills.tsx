import { 
  Terminal, Code2, Layers, Database, Box, Hexagon, AppWindow, Pocket, 
  Server, Cpu, Cloud, GitBranch, Bot, Sparkles, Code
} from "./Icons";

type Skill = {
  name: string;
  icon: React.ReactNode;
  color: string;
};

const skills: Skill[] = [
  { name: "C++", icon: <Terminal size={14} />, color: "text-blue-400 border-blue-500/15 hover:border-blue-500/30 hover:bg-blue-500/5" },
  { name: "JavaScript", icon: <Code size={14} />, color: "text-yellow-400 border-yellow-400/15 hover:border-yellow-400/30 hover:bg-yellow-400/5" },
  { name: "React.js", icon: <Code2 size={14} />, color: "text-cyan-400 border-cyan-400/15 hover:border-cyan-400/30 hover:bg-cyan-400/5" },
  { name: "Next.js", icon: <Hexagon size={14} />, color: "text-white border-white/15 hover:border-white/30 hover:bg-white/5" },
  { name: "TailwindCSS", icon: <Pocket size={14} />, color: "text-teal-400 border-teal-400/15 hover:border-teal-400/30 hover:bg-teal-400/5" },
  { name: "Shadcn UI", icon: <AppWindow size={14} />, color: "text-zinc-300 border-zinc-400/15 hover:border-zinc-400/30 hover:bg-zinc-400/5" },
  { name: "Node.js", icon: <Server size={14} />, color: "text-green-400 border-green-500/15 hover:border-green-500/30 hover:bg-green-500/5" },
  { name: "Express.js", icon: <Layers size={14} />, color: "text-slate-300 border-slate-400/15 hover:border-slate-400/30 hover:bg-slate-400/5" },
  { name: "Prisma", icon: <Box size={14} />, color: "text-indigo-400 border-indigo-400/15 hover:border-indigo-400/30 hover:bg-indigo-400/5" },
  { name: "PostgreSQL", icon: <Database size={14} />, color: "text-blue-400 border-blue-400/15 hover:border-blue-400/30 hover:bg-blue-400/5" },
  { name: "MongoDB", icon: <Database size={14} />, color: "text-green-500 border-green-500/15 hover:border-green-500/30 hover:bg-green-500/5" },
  { name: "Redis", icon: <Database size={14} />, color: "text-red-400 border-red-400/15 hover:border-red-400/30 hover:bg-red-400/5" },
  { name: "Vercel", icon: <Cloud size={14} />, color: "text-white border-white/15 hover:border-white/30 hover:bg-white/5" },
  { name: "Docker", icon: <Box size={14} />, color: "text-sky-400 border-sky-400/15 hover:border-sky-400/30 hover:bg-sky-400/5" },
  { name: "Git", icon: <GitBranch size={14} />, color: "text-orange-400 border-orange-400/15 hover:border-orange-400/30 hover:bg-orange-400/5" },
  { name: "Anthropic Claude", icon: <Bot size={14} />, color: "text-amber-400 border-amber-400/15 hover:border-amber-400/30 hover:bg-amber-400/5" },
  { name: "OpenAI", icon: <Sparkles size={14} />, color: "text-emerald-400 border-emerald-400/15 hover:border-emerald-400/30 hover:bg-emerald-400/5" },
];

export function Skills() {
  return (
    <section className="mt-10 animate-fade-in-delay">
      <div className="flex items-center gap-3 mb-5">
        <div className="w-8 h-8 flex items-center justify-center rounded-lg section-icon-glass bg-purple-500/10 text-purple-400 border border-purple-500/10">
          <Cpu size={18} />
        </div>
        <h2 className="text-lg font-semibold theme-heading tracking-tight">Skills & Tech Stack</h2>
      </div>

      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <div
            key={index}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-[13px] font-medium glass-badge transition-all duration-300 cursor-default hover:scale-[1.03] ${skill.color}`}
          >
            {skill.icon}
            <span>{skill.name}</span>
          </div>
        ))}
      </div>

      {/* Divider */}
      <div className="gradient-line mt-12" />
    </section>
  );
}
