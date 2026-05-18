"use client";

import { useEffect, useState } from "react";

export function NightMode() {
  const [isNight, setIsNight] = useState(false);

  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      const active = document.activeElement;
      if (active instanceof HTMLInputElement || active instanceof HTMLTextAreaElement) return;
      if (e.key.toLowerCase() === "n" && !e.metaKey && !e.ctrlKey && !e.altKey) {
        setIsNight(prev => {
          const next = !prev;
          if (next) document.documentElement.classList.add("night-race");
          else document.documentElement.classList.remove("night-race");
          return next;
        });
      }
    }
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  function toggle() {
    setIsNight(prev => {
      const next = !prev;
      if (next) document.documentElement.classList.add("night-race");
      else document.documentElement.classList.remove("night-race");
      return next;
    });
  }

  if (!isNight) return null;

  return (
    <button
      aria-label="Toggle night mode off"
      onClick={toggle}
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
