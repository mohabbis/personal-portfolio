"use client";

import { useEffect, useRef, type CSSProperties, type ReactNode } from "react";

import { cn } from "@/lib/utils";

type HeroAtmosphereProps = {
  children: ReactNode;
  className?: string;
};

/**
 * Pointer-reactive gallery lighting for the home hero.
 * Sets --hero-x / --hero-y so the ambient wash follows fine pointers.
 */
export function HeroAtmosphere({ children, className }: HeroAtmosphereProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (!finePointer.matches || reducedMotion.matches) return;

    let frame = 0;

    const onMove = (event: PointerEvent) => {
      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        frame = 0;
        const rect = el.getBoundingClientRect();
        const x = ((event.clientX - rect.left) / rect.width) * 100;
        const y = ((event.clientY - rect.top) / rect.height) * 100;
        el.style.setProperty("--hero-x", `${Math.min(100, Math.max(0, x)).toFixed(2)}%`);
        el.style.setProperty("--hero-y", `${Math.min(100, Math.max(0, y)).toFixed(2)}%`);
      });
    };

    const onLeave = () => {
      el.style.setProperty("--hero-x", "18%");
      el.style.setProperty("--hero-y", "16%");
    };

    el.addEventListener("pointermove", onMove, { passive: true });
    el.addEventListener("pointerleave", onLeave);
    return () => {
      el.removeEventListener("pointermove", onMove);
      el.removeEventListener("pointerleave", onLeave);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <section
      ref={ref}
      className={cn("hero-atmosphere relative min-h-[calc(100vh-5rem)] overflow-hidden bg-background", className)}
      style={{ "--hero-x": "18%", "--hero-y": "16%" } as CSSProperties}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 transition-[background] duration-300 ease-out"
        style={{
          background: `
            radial-gradient(circle at var(--hero-x) var(--hero-y), hsl(var(--accent) / 0.18), transparent 34%),
            radial-gradient(circle at 78% 18%, hsl(var(--foreground) / 0.06), transparent 32%)
          `
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-6 top-8 h-px bg-gradient-to-r from-transparent via-foreground/12 to-transparent"
      />
      {children}
    </section>
  );
}
