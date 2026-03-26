import { ProjectCard } from "./ProjectCard";
import Link from "next/link";
import { allProjects } from "@/data/projects";

// Show the first 2 projects on the home page as "Featured"
const featuredProjects = allProjects.slice(0, 2);

export function Projects() {
  return (
    <section className="mt-10 animate-fade-in-delay-2">
      <div className="flex items-center gap-3 mb-6">
        <h2 className="text-lg font-semibold theme-heading tracking-tight">Featured Projects</h2>
      </div>

      <div className="flex flex-col gap-4">
        {featuredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      <div className="mt-10 flex justify-center">
        <Link
          href="/projects"
          className="px-8 py-2.5 rounded-xl bg-white/70 dark:bg-white/[0.03] backdrop-blur-md border border-black/5 dark:border-white/10 text-black text-[14px] font-medium shadow-sm hover:shadow-md hover:bg-white/90 dark:hover:bg-white/[0.06] transition-all duration-300"
        >
          Show all Projects
        </Link>
      </div>
    </section>
  );
}
