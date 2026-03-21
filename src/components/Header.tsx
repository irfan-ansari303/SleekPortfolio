import Image from "next/image";
import { Github, Linkedin, Mail, Twitter } from "./Icons";

export function Header() {
  return (
    <header className="relative pb-10 mb-2">
      {/* Main content */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="flex items-center gap-5">
          {/* Profile picture with gradient ring */}
          <div className="relative group">
            <div className="absolute -inset-0.5 rounded-full bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 opacity-60 group-hover:opacity-100 blur-sm transition-opacity duration-500" />
            <div className="relative w-20 h-20 rounded-full p-[2px] bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500">
              <div className="w-full h-full rounded-full overflow-hidden bg-[#050507]">
                <Image
                  src="/profile.png"
                  alt="Irfan Ansari"
                  width={80}
                  height={80}
                  className="object-cover w-full h-full transition-transform hover:scale-110 duration-700"
                />
              </div>
            </div>
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-white">
              Irfan Ansari
            </h1>
            <p className="text-slate-500 font-medium text-sm mt-0.5 tracking-wide uppercase">
              Full Stack Developer &middot; Engineer
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <SocialLink href="https://github.com" icon={<Github size={18} />} label="GitHub" />
          <SocialLink href="https://linkedin.com" icon={<Linkedin size={18} />} label="LinkedIn" />
          <SocialLink href="https://twitter.com" icon={<Twitter size={18} />} label="Twitter" />
          <SocialLink href="mailto:contact@example.com" icon={<Mail size={18} />} label="Email" />
        </div>
      </div>

      {/* Gradient line border */}
      <div className="gradient-line mt-10" />
    </header>
  );
}

function SocialLink({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="flex items-center justify-center w-10 h-10 rounded-full border border-white/[0.06] bg-white/[0.02] text-slate-500 hover:text-white hover:border-white/[0.15] hover:bg-white/[0.05] transition-all duration-300"
    >
      {icon}
    </a>
  );
}
