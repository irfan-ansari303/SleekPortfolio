"use client";

import { useEffect, useState, useRef, useCallback } from "react";
import { Sun, Moon } from "./Icons";

function playToggleSound() {
  try {
    const audio = new Audio('/sound.wav');
    audio.play();
  } catch {
    // silently fail
  }
}

export function ThemeToggle() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [mounted, setMounted] = useState(false);
  const btnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    setMounted(true);
    const stored = localStorage.getItem("theme");
    const isLight = stored === "light";
    setTheme(isLight ? "light" : "dark");
    document.documentElement.classList.toggle("light", isLight);
    document.documentElement.classList.toggle("dark", !isLight);
  }, []);

  const applyTheme = useCallback((next: "dark" | "light") => {
    setTheme(next);
    localStorage.setItem("theme", next);
    document.documentElement.classList.toggle("light", next === "light");
    document.documentElement.classList.toggle("dark", next === "dark");
  }, []);

  const toggle = useCallback(() => {
    const next = theme === "dark" ? "light" : "dark";

    playToggleSound();

    if (!btnRef.current) {
      applyTheme(next);
      return;
    }

    const rect = btnRef.current.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;

    // Calculate max radius to cover entire page
    const maxX = Math.max(cx, window.innerWidth - cx);
    const maxY = Math.max(cy, document.documentElement.scrollHeight - cy);
    const maxRadius = Math.sqrt(maxX * maxX + maxY * maxY);

    // Set CSS custom properties for the animation origin
    document.documentElement.style.setProperty("--reveal-x", `${cx}px`);
    document.documentElement.style.setProperty("--reveal-y", `${cy}px`);
    document.documentElement.style.setProperty("--reveal-radius", `${maxRadius}px`);

    // Use View Transition API if available
    const doc = document as Document & {
      startViewTransition?: (cb: () => void) => { ready: Promise<void> };
    };

    if (doc.startViewTransition) {
      const transition = doc.startViewTransition(() => {
        applyTheme(next);
      });

      transition.ready.then(() => {
        // Animate the new view with expanding circle clip-path
        document.documentElement.animate(
          [
            { clipPath: `circle(0px at ${cx}px ${cy}px)` },
            { clipPath: `circle(${maxRadius}px at ${cx}px ${cy}px)` },
          ],
          {
            duration: 700,
            easing: "cubic-bezier(0.22, 1, 0.36, 1)",
            pseudoElement: "::view-transition-new(root)",
          }
        );
      });
    } else {
      // Fallback: just apply the theme instantly
      applyTheme(next);
    }
  }, [theme, applyTheme]);

  if (!mounted) {
    return (
      <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full theme-toggle-glass flex items-center justify-center opacity-50">
        <Moon size={14} />
      </div>
    );
  }

  return (
    <button
      ref={btnRef}
      onClick={toggle}
      aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
      className="group flex flex-shrink-0 items-center justify-center w-8 h-8 sm:w-9 sm:h-9 rounded-full theme-toggle-glass cursor-pointer active:scale-90"
    >
      <span className="transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12">
        {theme === "dark" ? <Sun size={14} /> : <Moon size={14} />}
      </span>
    </button>
  );
}
