import { Header } from "@/components/Header";
import { Bio } from "@/components/Bio";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Bio />
      <Skills />
      <Projects />
      
      {/* Footer */}
      <footer className="mt-24 pt-6 border-t border-white/[0.04] text-center pb-10">
        <p className="text-slate-600 text-xs tracking-wide">&copy; {new Date().getFullYear()} Irfan Ansari &middot; All rights reserved</p>
        <p className="mt-1 text-slate-700 text-[11px]">Built with Next.js &amp; Tailwind CSS</p>
      </footer>
    </main>
  );
}
