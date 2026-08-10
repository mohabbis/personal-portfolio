"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

import { cn } from "@/lib/utils";

type ProximityHeadlineProps = {
  text: string;
  className?: string;
};

type LetterProps = {
  char: string;
  pointerX: ReturnType<typeof useMotionValue<number>>;
  pointerY: ReturnType<typeof useMotionValue<number>>;
  active: boolean;
};

const MAX_SHIFT = 16;
const INFLUENCE_RADIUS = 180;

function ProximityLetter({ char, pointerX, pointerY, active }: LetterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const xMV = useMotionValue(0);
  const yMV = useMotionValue(0);
  const opacityMV = useMotionValue(1);
  const x = useSpring(xMV, { stiffness: 240, damping: 26, mass: 0.4 });
  const y = useSpring(yMV, { stiffness: 240, damping: 26, mass: 0.4 });
  const opacity = useSpring(opacityMV, { stiffness: 180, damping: 24 });

  useEffect(() => {
    if (!active) {
      xMV.set(0);
      yMV.set(0);
      opacityMV.set(1);
      return;
    }

    const sync = () => {
      const el = ref.current;
      if (!el) return;

      const px = pointerX.get();
      const py = pointerY.get();
      if (px === -9999) {
        xMV.set(0);
        yMV.set(0);
        opacityMV.set(1);
        return;
      }

      const rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = px - cx;
      const dy = py - cy;
      const dist = Math.hypot(dx, dy);

      if (dist >= INFLUENCE_RADIUS) {
        xMV.set(0);
        yMV.set(0);
        opacityMV.set(1);
        return;
      }

      const falloff = 1 - dist / INFLUENCE_RADIUS;
      const pull = falloff * falloff;
      xMV.set((dx / INFLUENCE_RADIUS) * MAX_SHIFT * pull);
      yMV.set((dy / INFLUENCE_RADIUS) * MAX_SHIFT * pull);
      opacityMV.set(0.68 + pull * 0.32);
    };

    const unsubX = pointerX.on("change", sync);
    const unsubY = pointerY.on("change", sync);
    sync();

    return () => {
      unsubX();
      unsubY();
    };
  }, [active, opacityMV, pointerX, pointerY, xMV, yMV]);

  if (char === " ") {
    return <span className="inline-block w-[0.28em]">{"\u00a0"}</span>;
  }

  return (
    <motion.span
      ref={ref}
      aria-hidden="true"
      className="inline-block will-change-transform"
      style={{ x, y, opacity }}
    >
      {char}
    </motion.span>
  );
}

export function ProximityHeadline({ text, className }: ProximityHeadlineProps) {
  const containerRef = useRef<HTMLHeadingElement>(null);
  const pointerX = useMotionValue(-9999);
  const pointerY = useMotionValue(-9999);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");

    if (reducedMotion.matches) {
      setActive(false);
      return;
    }

    // Prefer media-query detection, but also enable on the first real mouse move.
    // Some environments misreport pointer capability even when a mouse is present.
    if (finePointer.matches) {
      setActive(true);
    }

    const onFirstMouse = (event: PointerEvent) => {
      if (event.pointerType === "mouse") {
        setActive(true);
        window.removeEventListener("pointermove", onFirstMouse);
      }
    };

    const onReducedMotionChange = () => {
      if (reducedMotion.matches) {
        setActive(false);
        window.removeEventListener("pointermove", onFirstMouse);
      }
    };

    window.addEventListener("pointermove", onFirstMouse, { passive: true });
    reducedMotion.addEventListener("change", onReducedMotionChange);

    return () => {
      window.removeEventListener("pointermove", onFirstMouse);
      reducedMotion.removeEventListener("change", onReducedMotionChange);
    };
  }, []);

  useEffect(() => {
    if (!active) return;

    const el = containerRef.current;
    if (!el) return;

    // Track across the hero section so letters respond before the cursor is on the text.
    const root = el.closest("section") ?? el;

    const onMove = (event: PointerEvent) => {
      if (event.pointerType && event.pointerType !== "mouse") return;
      pointerX.set(event.clientX);
      pointerY.set(event.clientY);
    };

    const onLeave = () => {
      pointerX.set(-9999);
      pointerY.set(-9999);
    };

    root.addEventListener("pointermove", onMove, { passive: true });
    root.addEventListener("pointerleave", onLeave);
    return () => {
      root.removeEventListener("pointermove", onMove);
      root.removeEventListener("pointerleave", onLeave);
    };
  }, [active, pointerX, pointerY]);

  const words = text.split(" ");

  return (
    <h1 ref={containerRef} className={cn(className)} aria-label={text}>
      {active
        ? words.map((word, wordIndex) => (
            <span key={`${word}-${wordIndex}`} className="inline-block whitespace-nowrap">
              {Array.from(word).map((char, charIndex) => (
                <ProximityLetter
                  key={`${wordIndex}-${charIndex}-${char}`}
                  char={char}
                  pointerX={pointerX}
                  pointerY={pointerY}
                  active={active}
                />
              ))}
              {wordIndex < words.length - 1 ? (
                <span className="inline-block w-[0.28em]" aria-hidden="true">
                  {"\u00a0"}
                </span>
              ) : null}
            </span>
          ))
        : text}
    </h1>
  );
}
