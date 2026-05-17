"use client";

import { useEffect, useState } from "react";

export function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const update = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(scrollable > 0 ? window.scrollY / scrollable : 0);
    };
    window.addEventListener("scroll", update, { passive: true });
    update();
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <div
      aria-hidden={true}
      style={{
        position: "absolute",
        bottom: -1,
        left: 0,
        height: 2,
        width: `${progress * 100}%`,
        background: "linear-gradient(90deg, #ffd600, #ff6600, #ff2200)",
        transition: "width 80ms linear",
        pointerEvents: "none",
      }}
    />
  );
}
