"use client";

import { useEffect } from "react";

const COLORS = ["hsl(31 42% 60%)", "#ff8800", "#ffd600", "hsl(38 30% 88%)"];
const COUNT = 10;

export function ClickSparks() {
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      for (let i = 0; i < COUNT; i++) {
        const angle = (Math.PI * 2 * i) / COUNT + (Math.random() - 0.5) * 0.6;
        const speed = 44 + Math.random() * 64;
        const vx = Math.cos(angle) * speed;
        const vy = Math.sin(angle) * speed;
        const duration = 420 + Math.random() * 220;
        const size = 3 + Math.random() * 3;
        const color = COLORS[Math.floor(Math.random() * COLORS.length)];

        const el = document.createElement("div");
        el.style.cssText = `
          position:fixed;
          left:${e.clientX - size / 2}px;
          top:${e.clientY - size / 2}px;
          width:${size}px;
          height:${size}px;
          border-radius:50%;
          background:${color};
          pointer-events:none;
          z-index:9999;
          --vx:${vx}px;
          --vy:${vy}px;
          animation:spark-fly ${duration}ms ease-out forwards;
        `;
        document.body.appendChild(el);
        setTimeout(() => el.remove(), duration + 50);
      }
    };

    window.addEventListener("mousedown", handler);
    return () => window.removeEventListener("mousedown", handler);
  }, []);

  return null;
}
