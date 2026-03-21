import Image from "next/image";
import { ExternalLink, Github, Activity } from "./Icons";

export type Project = {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  tags: string[];
  status: string;
  liveLink: string;
  githubLink: string;
};

export function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="glass-card glass-card-hover rounded-xl overflow-hidden group">
      <div className="flex flex-col md:flex-row">
        {/* Thumbnail */}
        <div className="md:w-[38%] relative aspect-video md:aspect-auto md:min-h-[220px] overflow-hidden shrink-0">
          <Image
            src={project.thumbnail}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#050507]/80 hidden md:block" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050507]/80 to-transparent md:hidden" />
        </div>

        {/* Content */}
        <div className="flex flex-col flex-grow justify-between p-5 md:p-6">
          <div>
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-xl font-bold text-white group-hover:text-indigo-400 transition-colors duration-300">
                {project.title}
              </h3>
              <span className="flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/15 uppercase tracking-wide">
                <Activity size={10} />
                {project.status}
              </span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed mb-4 line-clamp-3">
              {project.description}
            </p>
            
            {/* Tags */}
            <div className="flex flex-wrap gap-1.5 mb-5">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-0.5 text-[11px] font-medium rounded-md bg-white/[0.03] text-slate-400 border border-white/[0.06]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="flex items-center gap-3">
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-indigo-600/80 hover:bg-indigo-500 text-white font-medium text-xs transition-all duration-300 shadow-lg shadow-indigo-500/15"
            >
              <ExternalLink size={13} />
              Live Demo
            </a>
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg border border-white/[0.08] hover:border-white/[0.15] hover:bg-white/[0.03] text-slate-300 font-medium text-xs transition-all duration-300"
            >
              <Github size={13} />
              Source Code
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
