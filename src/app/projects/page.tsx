import { ProjectCard, Project } from "@/components/ProjectCard";
import { FolderGit2, ArrowLeft } from "@/components/Icons";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'All Projects | Irfan Ansari',
  description: 'A complete list of my past and present projects.',
};

const allProjects: Project[] = [
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
  },
  {
    id: "3",
    title: "E-Commerce Platform API",
    description: "Robust backend system for a mid-sized e-commerce platform. Handles authentication, product catalog, cart logic, and integration with Stripe for seamless payment processing.",
    thumbnail: "/project1.png",
    tags: ["Express.js", "Node.js", "PostgreSQL", "Prisma"],
    status: "Completed",
    liveLink: "#",
    githubLink: "#",
  },
  {
    id: "4",
    title: "Real-time Collaboration Tool",
    description: "Workspace application supporting real-time document editing and team messaging. Employs WebSockets and Redis for syncing state across connected clients.",
    thumbnail: "/project2.png",
    tags: ["Next.js", "Socket.io", "Redis", "MongoDB"],
    status: "In Progress",
    liveLink: "#",
    githubLink: "#",
  }
];

export default function ProjectsPage() {
  return (
    <main className="min-h-screen animate-fade-in pb-20">
      <div className="mb-10">
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 theme-text-muted hover:text-indigo-400 transition-colors group mb-6"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </Link>
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-emerald-500/20 text-emerald-400">
            <FolderGit2 size={32} />
          </div>
          <h1 className="text-4xl font-bold theme-heading tracking-tight">All Projects</h1>
        </div>
        <p className="mt-4 theme-text-muted text-lg max-w-2xl">
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
