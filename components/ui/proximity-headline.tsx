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

const MAX_SHIFT = 10;
const INFLUENCE_RADIUS = 140;

function ProximityLetter({ char, pointerX, pointerY, active }: LetterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const xMV = useMotionValue(0);
  const yMV = useMotionValue(0);
  const opacityMV = useMotionValue(1);
  const x = useSpring(xMV, { stiffness: 260, damping: 28, mass: 0.35 });
  const y = useSpring(yMV, { stiffness: 260, damping: 28, mass: 0.35 });
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

      const rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = pointerX.get() - cx;
      const dy = pointerY.get() - cy;
      const dist = Math.hypot(dx, dy);

      if (dist >= INFLUENCE_RADIUS || pointerX.get() === -9999) {
        xMV.set(0);
        yMV.set(0);
        opacityMV.set(1);
        return;
      }

      const falloff = 1 - dist / INFLUENCE_RADIUS;
      const pull = falloff * falloff;
      xMV.set((dx / INFLUENCE_RADIUS) * MAX_SHIFT * pull);
      yMV.set((dy / INFLUENCE_RADIUS) * MAX_SHIFT * pull);
      opacityMV.set(0.72 + pull * 0.28);
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
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    const updateActive = () => {
      setActive(finePointer.matches && !reducedMotion.matches);
    };

    updateActive();
    finePointer.addEventListener("change", updateActive);
    reducedMotion.addEventListener("change", updateActive);

    return () => {
      finePointer.removeEventListener("change", updateActive);
      reducedMotion.removeEventListener("change", updateActive);
    };
  }, []);

  useEffect(() => {
    if (!active) return;

    const el = containerRef.current;
    if (!el) return;

    // Track across the hero section so letters respond before the cursor is on the text.
    const root = el.closest("section") ?? el;

    const onMove = (event: PointerEvent) => {
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
