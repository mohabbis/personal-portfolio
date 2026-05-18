"use client";

import { useCallback, useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

const STORAGE_KEY = "theme-pref";

type Theme = "day" | "night";

function getInitialTheme(): Theme {
  const saved = localStorage.getItem(STORAGE_KEY);

  if (saved === "night" || saved === "day") {
    return saved;
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "night" : "day";
}

export function NightMode() {
  const [theme, setTheme] = useState<Theme>("day");
  const [isMounted, setIsMounted] = useState(false);

  const applyTheme = useCallback((nextTheme: Theme) => {
    const isNight = nextTheme === "night";

    document.documentElement.classList.toggle("night-race", isNight);
    document.documentElement.dataset.theme = isNight ? "dark" : "light";
    localStorage.setItem(STORAGE_KEY, nextTheme);
    setTheme(nextTheme);
  }, []);

  const toggleTheme = useCallback(() => {
    applyTheme(theme === "night" ? "day" : "night");
  }, [applyTheme, theme]);

  useEffect(() => {
    const initialTheme = getInitialTheme();
    applyTheme(initialTheme);
    setIsMounted(true);
  }, [applyTheme]);

  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      const active = document.activeElement;

      if (active instanceof HTMLInputElement || active instanceof HTMLTextAreaElement) return;

      if (e.key.toLowerCase() === "n" && !e.metaKey && !e.ctrlKey && !e.altKey) {
        setTheme((currentTheme) => {
          const nextTheme = currentTheme === "night" ? "day" : "night";
          const isNight = nextTheme === "night";

          document.documentElement.classList.toggle("night-race", isNight);
          document.documentElement.dataset.theme = isNight ? "dark" : "light";
          localStorage.setItem(STORAGE_KEY, nextTheme);

          return nextTheme;
        });
      }
    }

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  const isNight = theme === "night";

  return (
    <button
      type="button"
      aria-label={isNight ? "Switch to light mode" : "Switch to dark mode"}
      aria-pressed={isNight}
      className="theme-toggle"
      onClick={toggleTheme}
      title={isNight ? "Switch to light mode" : "Switch to dark mode"}
      suppressHydrationWarning
    >
      <span className="sr-only">{isNight ? "Switch to light mode" : "Switch to dark mode"}</span>
      {isMounted && isNight ? <Sun size={20} strokeWidth={1.8} /> : <Moon size={20} strokeWidth={1.8} />}
    </button>
  );
}
