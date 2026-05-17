"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

export function CursorLabel() {
  const [label, setLabel] = useState<string | null>(null);
  const posRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const isFine = window.matchMedia("(pointer: fine)").matches;
    if (!isFine) return;

    const onMove = (e: MouseEvent) => {
      if (posRef.current) {
        posRef.current.style.left = `${e.clientX + 20}px`;
        posRef.current.style.top = `${e.clientY - 12}px`;
      }
    };

    const onOver = (e: MouseEvent) => {
      const target = e.target as Element;
      const cursorEl = target.closest("[data-cursor]");
      if (cursorEl) { setLabel(cursorEl.getAttribute("data-cursor")); return; }
      const extLink = target.closest("a[target='_blank']");
      if (extLink) { setLabel("Open ↗"); return; }
      setLabel(null);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    document.addEventListener("mouseover", onOver);
    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onOver);
    };
  }, []);

  return (
    <div ref={posRef} style={{ position: "fixed", top: 0, left: 0, zIndex: 9998, pointerEvents: "none" }}>
      <AnimatePresence>
        {label && (
          <motion.div
            initial={{ opacity: 0, scale: 0.82 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.82 }}
            transition={{ duration: 0.14 }}
            style={{
              fontSize: 11,
              fontFamily: "monospace",
              letterSpacing: "0.06em",
              color: "hsl(38 30% 92%)",
              background: "hsl(24 16% 11% / 0.9)",
              border: "1px solid hsl(24 12% 24%)",
              padding: "4px 10px",
              borderRadius: 100,
              backdropFilter: "blur(10px)",
              whiteSpace: "nowrap",
              userSelect: "none",
            }}
          >
            {label}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
