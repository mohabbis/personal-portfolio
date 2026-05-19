"use client";

import { useCallback, useEffect, useState } from "react";

const STORAGE_KEY = "theme-pref";

function getAutoNight(): boolean {
  const hour = new Date().getHours();
  return hour >= 20 || hour < 7;
}

export function NightMode() {
  const [isNight, setIsNight] = useState(false);
  const [mounted, setMounted] = useState(false);

  const apply = useCallback((next: boolean, save = true) => {
    document.documentElement.classList.toggle("night-race", next);
    if (save) localStorage.setItem(STORAGE_KEY, next ? "night" : "day");
    setIsNight(next);
  }, []);

  useEffect(() => {
    const pref = localStorage.getItem(STORAGE_KEY);
    if (pref === "night") apply(true, false);
    else if (pref === "day") apply(false, false);
    else apply(getAutoNight(), false);
    setMounted(true);

    function handleKey(e: KeyboardEvent) {
      const active = document.activeElement;
      if (active instanceof HTMLInputElement || active instanceof HTMLTextAreaElement) return;
      if (e.key.toLowerCase() === "n" && !e.metaKey && !e.ctrlKey && !e.altKey) {
        setIsNight(prev => { apply(!prev); return !prev; });
      }
    }
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!mounted) return null;

  return (
    <button
      aria-label={isNight ? "Switch to day mode" : "Switch to night mode"}
      onClick={() => apply(!isNight)}
      style={{
        position: "fixed",
        bottom: "calc(env(safe-area-inset-bottom, 0px) + 18px)",
        left: "50%",
        transform: "translateX(-50%)",
        zIndex: 58,
        fontSize: 10,
        fontFamily: "monospace",
        letterSpacing: "0.2em",
        color: "hsl(34 14% 68%)",
        background: "hsl(24 16% 14% / 0.88)",
        border: "1px solid hsl(24 12% 28%)",
        borderRadius: 999,
        cursor: "pointer",
        padding: "7px 15px",
        userSelect: "none",
        textTransform: "uppercase",
        whiteSpace: "nowrap",
        backdropFilter: "blur(10px)",
        boxShadow: "0 10px 30px rgba(0,0,0,0.28)",
      }}
    >
      {isNight ? "🌙 Night Race" : "☀ Day Mode"}
    </button>
  );
}
