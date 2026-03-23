import { Header } from "@/components/Header";
import { Bio } from "@/components/Bio";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";

export default function Home() {
  return (
    <main className="min-h-screen ">
      <Header />
      <Bio />
      <Skills />
      <Projects />
      
      {/* Footer */}
      <footer className="mt-24 pt-6 border-t theme-footer-border text-center pb-10">
        <p className="theme-footer-text text-xs tracking-wide">&copy; {new Date().getFullYear()} Irfan Ansari &middot; All rights reserved</p>
        <p className="mt-1 theme-footer-sub text-[11px]">Built with Next.js &amp; Tailwind CSS</p>
      </footer>
    </main>
  );
}
