"use client";

import { useEffect, useState } from "react";

export function NightMode() {
  const [isNight, setIsNight] = useState(false);

  useEffect(() => {
    const hour = new Date().getHours();
    if (hour >= 20 || hour < 6) {
      document.documentElement.classList.add("night-race");
      setIsNight(true);
    }
  }, []);

  if (!isNight) return null;

  return (
    <div
      aria-hidden={true}
      style={{
        position: "fixed",
        bottom: 24,
        left: "50%",
        transform: "translateX(-50%)",
        zIndex: 58,
        fontSize: 9,
        fontFamily: "monospace",
        letterSpacing: "0.22em",
        color: "hsl(34 14% 32%)",
        pointerEvents: "none",
        userSelect: "none",
        textTransform: "uppercase",
        whiteSpace: "nowrap",
      }}
    >
      🌙 Night Race
    </div>
  );
}
