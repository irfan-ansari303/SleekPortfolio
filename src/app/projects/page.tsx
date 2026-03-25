import { ProjectCard } from "@/components/ProjectCard";
import { FolderGit2, ArrowLeft } from "@/components/Icons";
import Link from "next/link";
import { Metadata } from "next";
import { allProjects } from "@/data/projects";

export const metadata: Metadata = {
  title: 'All Projects | Irfan Ansari',
  description: 'A complete list of my past and present projects.',
};

export default function ProjectsPage() {
  return (
    <main className="min-h-screen animate-fade-in pb-20 max-w-5xl mx-auto px-6 pt-10">
      <div className="mb-10">
        <Link
          href="/"
          className="inline-flex items-center gap-2 theme-text-muted hover:text-indigo-400 transition-colors group mb-6"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </Link>
        <div className="flex items-center gap-4">
          <div className="p-3 rounded-2xl glass-card border border-white/10 text-emerald-400 shadow-xl shadow-emerald-500/10">
            <FolderGit2 size={32} />
          </div>
          <div>
            <h1 className="text-4xl font-bold theme-heading tracking-tight">All Projects</h1>
            <p className="theme-text-muted mt-1">A showcase of my recent work</p>
          </div>
        </div>
        <p className="mt-6 theme-text-muted text-lg max-w-3xl leading-relaxed">
          Here is a collection of my recent work, ranging from scalable backend APIs to dynamic, modern frontend interfaces.
        </p>
      </div>

      <div className="flex flex-col gap-8">
        {allProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </main>
  );
}
