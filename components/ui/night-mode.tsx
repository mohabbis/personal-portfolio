"use client";

import { useCallback, useEffect, useState } from "react";

type Theme = "warm" | "bright" | "night";

const STORAGE_KEY = "theme-pref";
const CYCLE: Theme[] = ["warm", "bright", "night"];

function getAutoTheme(): Theme {
  const hour = new Date().getHours();
  return hour >= 20 || hour < 7 ? "night" : "warm";
}

function readStored(): Theme | null {
  const pref = localStorage.getItem(STORAGE_KEY);
  if (pref === "night") return "night";
  if (pref === "bright") return "bright";
  if (pref === "day" || pref === "warm") return "warm";
  return null;
}

export function NightMode() {
  const [theme, setTheme] = useState<Theme>("warm");
  const [mounted, setMounted] = useState(false);

  const apply = useCallback((next: Theme, save = true) => {
    const el = document.documentElement;
    el.classList.remove("night-race", "bright-mode");
    if (next === "night") el.classList.add("night-race");
    if (next === "bright") el.classList.add("bright-mode");
    if (save) localStorage.setItem(STORAGE_KEY, next);
    setTheme(next);
  }, []);

  useEffect(() => {
    const stored = readStored();
    apply(stored ?? getAutoTheme(), false);
    setMounted(true);

    function handleKey(e: KeyboardEvent) {
      const active = document.activeElement;
      if (active instanceof HTMLInputElement || active instanceof HTMLTextAreaElement) return;
      if (e.key.toLowerCase() === "n" && !e.metaKey && !e.ctrlKey && !e.altKey) {
        setTheme(prev => {
          const next = CYCLE[(CYCLE.indexOf(prev) + 1) % CYCLE.length];
          apply(next);
          return next;
        });
      }
    }
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!mounted) return null;

  const label = theme === "night" ? "🌙 Night Race" : theme === "bright" ? "◎ Bright" : "☀ Warm";
  const next = CYCLE[(CYCLE.indexOf(theme) + 1) % CYCLE.length];

  return (
    <button
      aria-label={`Switch to ${next} mode`}
      onClick={() => apply(next)}
      style={{
        position: "fixed",
        bottom: 20,
        left: "50%",
        transform: "translateX(-50%)",
        zIndex: 58,
        fontSize: 10,
        fontFamily: "monospace",
        letterSpacing: "0.2em",
        color: "hsl(34 14% 68%)",
        background: "hsl(24 16% 14% / 0.85)",
        border: "1px solid hsl(24 12% 28%)",
        borderRadius: 20,
        cursor: "pointer",
        padding: "6px 14px",
        userSelect: "none",
        textTransform: "uppercase",
        whiteSpace: "nowrap",
        backdropFilter: "blur(8px)",
      }}
    >
      {label}
    </button>
  );
}
