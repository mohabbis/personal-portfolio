"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { Moon, Sun } from "lucide-react";

const STORAGE_KEY = "theme-pref";
const DAY_START_HOUR = 7;
const NIGHT_START_HOUR = 19;

type Theme = "day" | "night";
type ThemeSource = "auto" | "manual";

function getTimeZoneTheme(date = new Date()): Theme {
  const hour = date.getHours();
  return hour >= DAY_START_HOUR && hour < NIGHT_START_HOUR ? "day" : "night";
}

function getTimeZoneLabel() {
  return Intl.DateTimeFormat().resolvedOptions().timeZone || "local time";
}

function getStoredTheme(): Theme | null {
  const saved = localStorage.getItem(STORAGE_KEY);
  return saved === "night" || saved === "day" ? saved : null;
}

export function NightMode() {
  const [theme, setTheme] = useState<Theme>("day");
  const [themeSource, setThemeSource] = useState<ThemeSource>("auto");
  const [isMounted, setIsMounted] = useState(false);

  const timeZoneLabel = useMemo(() => {
    if (!isMounted) return "local time";
    return getTimeZoneLabel();
  }, [isMounted]);

  const applyTheme = useCallback((nextTheme: Theme, source: ThemeSource = "auto") => {
    const isNight = nextTheme === "night";

    document.documentElement.classList.toggle("night-race", isNight);
    document.documentElement.dataset.theme = isNight ? "dark" : "light";
    document.documentElement.dataset.themeSource = source;
    setTheme(nextTheme);
    setThemeSource(source);
  }, []);

  const applyAutomaticTheme = useCallback(() => {
    applyTheme(getTimeZoneTheme(), "auto");
  }, [applyTheme]);

  const toggleTheme = useCallback(() => {
    const nextTheme = theme === "night" ? "day" : "night";
    localStorage.setItem(STORAGE_KEY, nextTheme);
    applyTheme(nextTheme, "manual");
  }, [applyTheme, theme]);

  useEffect(() => {
    const storedTheme = getStoredTheme();

    if (storedTheme) {
      applyTheme(storedTheme, "manual");
    } else {
      applyAutomaticTheme();
    }

    setIsMounted(true);
  }, [applyAutomaticTheme, applyTheme]);

  useEffect(() => {
    if (!isMounted || themeSource === "manual") return;

    const updateAutomaticTheme = () => {
      if (getStoredTheme()) return;
      applyAutomaticTheme();
    };

    const intervalId = window.setInterval(updateAutomaticTheme, 60 * 1000);
    window.addEventListener("focus", updateAutomaticTheme);
    document.addEventListener("visibilitychange", updateAutomaticTheme);

    return () => {
      window.clearInterval(intervalId);
      window.removeEventListener("focus", updateAutomaticTheme);
      document.removeEventListener("visibilitychange", updateAutomaticTheme);
    };
  }, [applyAutomaticTheme, isMounted, themeSource]);

  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      const active = document.activeElement;

      if (active instanceof HTMLInputElement || active instanceof HTMLTextAreaElement) return;

      if (e.key.toLowerCase() === "n" && !e.metaKey && !e.ctrlKey && !e.altKey) {
        const nextTheme = theme === "night" ? "day" : "night";
        localStorage.setItem(STORAGE_KEY, nextTheme);
        applyTheme(nextTheme, "manual");
      }
    }

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [applyTheme, theme]);

  const isNight = theme === "night";
  const actionLabel = isNight ? "Switch to light mode" : "Switch to dark mode";
  const sourceLabel = themeSource === "auto" ? `Auto theme based on ${timeZoneLabel}` : "Manual theme override saved";

  return (
    <button
      type="button"
      aria-label={`${actionLabel}. ${sourceLabel}`}
      aria-pressed={isNight}
      className="theme-toggle"
      onClick={toggleTheme}
      title={`${actionLabel} · ${sourceLabel}`}
      suppressHydrationWarning
    >
      <span className="sr-only">{actionLabel}</span>
      {isMounted && isNight ? <Sun size={20} strokeWidth={1.8} /> : <Moon size={20} strokeWidth={1.8} />}
    </button>
  );
}
