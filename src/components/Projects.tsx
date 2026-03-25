import { ProjectCard } from "./ProjectCard";
import { ArrowRight } from "./Icons";
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

      <div className="mt-8 flex justify-center">
        <Link
          href="/projects"
          className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full border theme-border-secondary text-sm font-medium transition-all duration-300"
        >
          View More Projects
          <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
        </Link>
      </div>
    </section>
  );
}
