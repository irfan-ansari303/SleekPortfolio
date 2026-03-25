// Custom inline SVG icons to replace lucide-react dependency

type IconProps = {
  size?: number;
  className?: string;
};

/* --- GENERAL UI ICONS --- */
export function Github({ size = 24, className = "" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

export function Linkedin({ size = 24, className = "" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export function Twitter({ size = 24, className = "" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  );
}

/* --- BRAND LOGOS (ORIGINAL PATHS) --- */

export function ReactLogo({ size = 24, className = "" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="-11.5 -10.23174 23 20.46348" fill="none" className={className}>
      <circle cx="0" cy="0" r="2.05" fill="#61dafb" />
      <g stroke="#61dafb" strokeWidth="1" fill="none">
        <ellipse rx="11" ry="4.2" />
        <ellipse rx="11" ry="4.2" transform="rotate(60)" />
        <ellipse rx="11" ry="4.2" transform="rotate(120)" />
      </g>
    </svg>
  );
}

export function NextjsLogo({ size = 24, className = "" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 128 128" fill="none" className={className}>
      <circle cx="64" cy="64" r="64" fill="currentColor" />
      <path d="M107.5 106L61.6 48L53.5 48V88H59.5V57.6L101.4 110.1C103.5 108.8 105.6 107.4 107.5 106Z" fill="white" />
      <path d="M85 48H79V80H85V48Z" fill="white" />
    </svg>
  );
}

export function JsLogo({ size = 24, className = "" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 630 630" className={className}>
      <rect width="630" height="630" fill="#f7df1e" />
      <path d="m423.2 492.19c12.69 20.72 29.2 35.95 58.4 35.95 24.53 0 40.2-12.26 40.2-29.2 0-20.3-16.1-27.49-43.1-39.3l-14.8-6.35c-42.72-18.2-71.1-41-71.1-89.2 0-44.4 33.83-78.23 86.7-78.23 37.64 0 64.7 13.1 84.2 47.4l-46.1 29.6c-10.15-18.2-21.14-25.38-38.1-25.38-17.34 0-28.33 9.3-28.33 21.14 0 16.3 10.15 22.1 33.1 31.86l14.8 6.34c51.2 21.9 81.3 43.14 81.3 94.3 0 52.7-39.9 83.5-98.3 83.5-59.5 0-93.5-29.26-108-60.8zM249.2 235.19v253.5c0 36.37-22.1 52.88-53.7 52.88-30.8 0-51.2-14.4-65-37.1l43.2-25.2c9.5 15.6 18 21.8 28.5 21.8 11.4 0 17.6-5 17.6-19.6v-246.3z" fill="#323330" />
    </svg>
  );
}

export function TailwindLogo({ size = 24, className = "" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M12 6C9.33333 6 6.66667 7.33333 4 10C6.66667 10 8 9.33333 8 8C8 10.6667 6.66667 12 4 12C6.66667 12 9.33333 10.6667 12 8C9.33333 8 8 8.66667 8 10M12 12C14.6667 12 17.3333 10.6667 20 8C17.3333 8 16 8.66667 16 10C16 7.33333 17.3333 6 20 6C17.3333 6 14.6667 7.33333 12 10C14.6667 10 16 9.33333 16 8" stroke="#38bdf8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function MongodbLogo({ size = 24, className = "" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M12 2C12 2 8 8 8 13C8 18 12 22 12 22C12 22 16 18 16 13C16 8 12 2 12 2Z" fill="#47A248" />
      <path d="M12 4V20" stroke="#13AA52" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function PostgresLogo({ size = 24, className = "" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M12 2C8 2 4 5 4 10C4 15 8 22 12 22C16 22 20 15 20 10C20 5 16 2" fill="#336791" />
      <path d="M12 5C10 5 8 7 8 10C8 13 10 15 12 15C14 15 16 13 16 10C16 7 14 5 12 5Z" fill="white" opacity="0.4" />
    </svg>
  );
}

export function RedisLogo({ size = 24, className = "" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M12 2L4 6V18L12 22L20 18V6L12 2Z" fill="#D82C20" />
      <path d="M12 6L7 8.5V15.5L12 18L17 15.5V8.5L12 6Z" fill="white" />
    </svg>
  );
}

export function GitLogo({ size = 24, className = "" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M21.5 11.5L12.5 2.5C12.2 2.2 11.8 2.2 11.5 2.5L2.5 11.5C2.2 11.8 2.2 12.2 2.5 12.5L11.5 21.5C11.8 21.8 12.2 21.8 12.5 21.5L21.5 12.5C21.8 12.2 21.8 11.8 21.5 11.5Z" fill="#F05032" />
      <path d="M15 11C15 11.6 14.6 12 14 12C13.4 12 13 11.6 13 11V8C13 7.4 13.4 7 14 7C14.6 7 15 7.4 15 8V11ZM11 15C11 15.6 10.6 16 10 16C9.4 16 9 15.6 9 15V12C9 11.4 9.4 11 10 11C10.6 11 11 11.4 11 12V15Z" fill="white" />
    </svg>
  );
}

export function DockerLogo({ size = 24, className = "" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M2 13C2 13 4 11 8 11C12 11 19 13 22 13C22 13 22 16 18 19C14 22 4 22 2 19V13Z" fill="#2496ED" />
      <rect x="5" y="6" width="3" height="3" fill="#2496ED" />
      <rect x="9" y="6" width="3" height="3" fill="#2496ED" />
      <rect x="13" y="6" width="3" height="3" fill="#2496ED" />
      <rect x="5" y="2" width="3" height="3" fill="#2496ED" />
    </svg>
  );
}

export function VercelLogo({ size = 24, className = "" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 1L24 22H0L12 1Z" />
    </svg>
  );
}

export function NodejsLogo({ size = 24, className = "" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M12 2L4 6V18L12 22L20 18V6L12 2Z" fill="#339933" />
      <path d="M12 8V16" stroke="white" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function OpenAI({ size = 24, className = "" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" fill="#10A37F" />
      <path d="M12 7V17M7 12H17" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function ClaudeLogo({ size = 24, className = "" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <circle cx="12" cy="12" r="10" fill="#D97757" />
      <path d="M12 8V16M8 12H16" stroke="white" strokeWidth="2" />
    </svg>
  );
}




/* --- REMAINING UI ICONS --- */

export function ExternalLink({ size = 24, className = "" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M15 3h6v6" /><path d="M10 14 21 3" /><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    </svg>
  );
}

export function FolderGit2({ size = 24, className = "" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M9 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v5" />
      <circle cx="13" cy="12" r="2" /><path d="M18 19c-2.8 0-5-2.2-5-5v8" /><circle cx="20" cy="19" r="2" />
    </svg>
  );
}

export function ArrowRight({ size = 24, className = "" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
    </svg>
  );
}

export function ArrowLeft({ size = 24, className = "" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="m12 19-7-7 7-7" /><path d="M19 12H5" />
    </svg>
  );
}

export function Vscode({ size = 24, className = "" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M17.15 3.52L11 8.5L6.3 5.4L2.8 7.3V16.7L6.3 18.6L11 15.5L17.15 20.48L21.2 18V6L17.15 3.52Z" fill="#0065A9" />
      <path d="M17.15 3.52L11 8.5V15.5L17.15 20.48V3.52Z" fill="#007ACC" />
      <path d="M6.3 18.6L11 15.5L21.2 6L17.15 3.52L6.3 10.8V18.6Z" fill="#1F9CF0" />
      <path d="M6.3 5.4L11 8.5L21.2 18L17.15 20.48L6.3 13.2V5.4Z" fill="#0065A9" />
    </svg>
  );
}

export function Sun({ size = 24, className = "" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2" /><path d="M12 20v2" /><path d="m4.93 4.93 1.41 1.41" /><path d="m17.66 17.66 1.41 1.41" />
      <path d="M2 12h2" /><path d="M20 12h2" /><path d="m6.34 17.66-1.41 1.41" /><path d="m19.07 4.93-1.41 1.41" />
    </svg>
  );
}

export function Moon({ size = 24, className = "" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
    </svg>
  );
}

