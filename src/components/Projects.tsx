import { ProjectCard, Project } from "./ProjectCard";
import { FolderGit2, ArrowRight } from "./Icons";
import Link from "next/link";

const featuredProjects: Project[] = [
  {
    id: "1",
    title: "Analytics Dashboard Pro",
    description: "A comprehensive SaaS analytics dashboard with real-time data visualization. Built with Next.js App Router, Tailwind CSS, and Recharts. Features dark mode, responsive design, and mock API integration.",
    thumbnail: "/project1.png",
    tags: ["Next.js", "React", "Tailwind CSS", "Recharts"],
    status: "Live",
    liveLink: "#",
    githubLink: "#",
  },
  {
    id: "2",
    title: "AI Chat Interface",
    description: "Modern landing page for an AI-powered enterprise solution. Features fluid animations, glassmorphism UI elements, and a clean neon-accented dark theme optimized for conversion.",
    thumbnail: "/project2.png",
    tags: ["React", "Framer Motion", "Tailwind CSS"],
    status: "Completed",
    liveLink: "#",
    githubLink: "#",
  }
];

export function Projects() {
  return (
    <section className="mt-10 animate-fade-in-delay-2">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-8 h-8 flex items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/10">
          <FolderGit2 size={18} />
        </div>
        <h2 className="text-lg font-semibold text-white tracking-tight">Featured Projects</h2>
      </div>

      <div className="flex flex-col gap-5">
        {featuredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      <div className="mt-8 flex justify-center">
        <Link
          href="/projects"
          className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.05] hover:border-white/[0.12] text-slate-300 hover:text-white text-sm font-medium transition-all duration-300"
        >
          View More Projects
          <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
        </Link>
      </div>
    </section>
  );
}
