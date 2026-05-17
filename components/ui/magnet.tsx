"use client";

import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";
import type { ReactNode } from "react";

type MagnetProps = {
  children: ReactNode;
  strength?: number;
  radius?: number;
};

export function Magnet({ children, strength = 0.28, radius = 80 }: MagnetProps) {
  const ref = useRef<HTMLDivElement>(null);
  const xMV = useMotionValue(0);
  const yMV = useMotionValue(0);
  const x = useSpring(xMV, { stiffness: 200, damping: 22 });
  const y = useSpring(yMV, { stiffness: 200, damping: 22 });

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = e.clientX - cx;
      const dy = e.clientY - cy;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < radius) {
        const scale = (1 - dist / radius) * strength;
        xMV.set(dx * scale);
        yMV.set(dy * scale);
      } else {
        xMV.set(0);
        yMV.set(0);
      }
    };
    window.addEventListener("mousemove", handler, { passive: true });
    return () => window.removeEventListener("mousemove", handler);
  }, [radius, strength, xMV, yMV]);

  return (
    <motion.div ref={ref} style={{ x, y, display: "inline-block" }}>
      {children}
    </motion.div>
  );
}
