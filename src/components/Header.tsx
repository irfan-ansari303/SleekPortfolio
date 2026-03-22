import Image from "next/image";
import { Github, Linkedin, Mail, Twitter } from "./Icons";
import { Cinzel } from "next/font/google";

const cinzel = Cinzel({ subsets: ["latin"] });

export function Header() {
  return (
    <header className="relative pb-8 mb-8">
      
      {/* BANNER SECTION */}
      <div className="-mx-8 md:-mx-12 h-36 sm:h-44 overflow-hidden relative border-y border-white/10">
        <Image 
          src="/banner.png" 
          alt="Profile Banner"
          fill
          className="object-cover"
          priority
        />
        {/* Subtle dark gradient overlay to make things pop */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
      </div>

      {/* PROFILE INFO SECTION */}
      <div className="relative w-full">
        
        {/* Avatar, Name, and Socials container */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 sm:gap-6 relative z-10">
          
          <div className="flex flex-col gap-4">
            {/* Profile Avatar - positioned to cut 1/4 into the banner */}
            <div className="relative shrink-0 w-20 h-20 sm:w-28 sm:h-28 -mt-5 sm:-mt-7">
              <div className="relative border-2 border-white rounded-full overflow-hidden w-full h-full bg-[#0a0a0f]">
                <Image
                  src="/profile.png"
                  alt="Irfan Ansari"
                  width={80}
                  height={80}
                  className="object-cover w-full h-full"
                  priority
                />
              </div>
            </div>

            {/* Name + Role */}
            <div className="space-y-1">
              <h1 className={`text-3xl md:text-4xl font-bold text-white tracking-tight ${cinzel.className}`}>
                Irfan Ansari
              </h1>
              <p className="text-slate-400 text-sm md:text-base tracking-wide uppercase font-medium">
                code&middot; Engineer
              </p>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-2 self-start sm:self-end w-full sm:w-auto justify-end sm:justify-start translate-y-2 sm:translate-y-1">
            <SocialLink href="https://github.com" icon={<Github size={14} />} label="GitHub" />
            <SocialLink href="https://twitter.com" icon={<Twitter size={14} />} label="Twitter" />
            <SocialLink href="https://linkedin.com" icon={<Linkedin size={14} />} label="LinkedIn" />
            <SocialLink href="mailto:contact@example.com" icon={<Mail size={14} />} label="Email" />
          </div>

        </div>

      </div>

      {/* Gradient Divider */}
      <div className="-mx-8 md:-mx-12 mt-8 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />

    </header>
  );
}

function SocialLink({
  href,
  icon,
  label,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="group flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 rounded-full border border-white/20 bg-transparent text-slate-300 transition-all duration-300 hover:text-white hover:border-white/50 hover:bg-white/5"
    >
      <span className="transition-transform duration-300 group-hover:scale-110">
        {icon}
      </span>
    </a>
  );
}