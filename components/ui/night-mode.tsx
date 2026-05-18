"use client";

import { useCallback, useEffect, useState } from "react";

export function NightMode() {
  const [isNight, setIsNight] = useState(false);

  const applyNight = useCallback((next: boolean) => {
    if (next) {
      document.documentElement.classList.add("night-race");
      localStorage.setItem("theme-pref", "night");
    } else {
      document.documentElement.classList.remove("night-race");
      localStorage.setItem("theme-pref", "day");
    }
    setIsNight(next);
  }, []);

  useEffect(() => {
    const pref = localStorage.getItem("theme-pref");
    let shouldBeNight: boolean;

    if (pref === "night") {
      shouldBeNight = true;
    } else if (pref === "day") {
      shouldBeNight = false;
    } else {
      const hour = new Date().getHours();
      shouldBeNight = hour >= 20 || hour < 6;
    }

    if (shouldBeNight) {
      document.documentElement.classList.add("night-race");
      setIsNight(true);
    }

    function handleKey(e: KeyboardEvent) {
      const active = document.activeElement;
      if (active instanceof HTMLInputElement || active instanceof HTMLTextAreaElement) return;
      if (e.key.toLowerCase() === "n" && !e.metaKey && !e.ctrlKey && !e.altKey) {
        setIsNight(prev => {
          const next = !prev;
          if (next) {
            document.documentElement.classList.add("night-race");
            localStorage.setItem("theme-pref", "night");
          } else {
            document.documentElement.classList.remove("night-race");
            localStorage.setItem("theme-pref", "day");
          }
          return next;
        });
      }
    }

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  if (!isNight) return null;

  return (
    <button
      aria-label="Switch to day mode"
      onClick={() => applyNight(false)}
      style={{
        position: "fixed",
        bottom: 24,
        left: "50%",
        transform: "translateX(-50%)",
        zIndex: 58,
        fontSize: 9,
        fontFamily: "monospace",
        letterSpacing: "0.22em",
        color: "hsl(34 14% 42%)",
        background: "none",
        border: "none",
        cursor: "pointer",
        padding: "4px 8px",
        userSelect: "none",
        textTransform: "uppercase",
        whiteSpace: "nowrap",
      }}
    >
      🌙 Night Race
    </button>
  );
}
