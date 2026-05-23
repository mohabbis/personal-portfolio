"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import composite from "@/public/images/gallery/IMG_2097.jpeg";

const TRIGGER = ["a", "s", "i", "g"];

export function AsigEasterEgg() {
  const [open, setOpen] = useState(false);
  const [seq, setSeq] = useState<string[]>([]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const active = document.activeElement;
      if (active instanceof HTMLInputElement || active instanceof HTMLTextAreaElement) return;

      if (e.key === "Escape") {
        setOpen(false);
        return;
      }

      setSeq((prev) => {
        const next = [...prev, e.key.toLowerCase()].slice(-TRIGGER.length);
        if (next.join("") === TRIGGER.join("")) {
          setOpen(true);
          return [];
        }
        return next;
      });
    };

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.28 }}
          onClick={() => setOpen(false)}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 9000,
            background: "rgba(8, 4, 2, 0.93)",
            backdropFilter: "blur(20px)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
          }}
        >
          <motion.div
            initial={{ scale: 0.88, opacity: 0, y: 28 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.92, opacity: 0, y: 16 }}
            transition={{ duration: 0.42, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 18,
              maxWidth: 700,
              width: "92vw",
            }}
          >
            <div style={{ textAlign: "center" }}>
              <div
                style={{
                  fontFamily: "Georgia, serif",
                  fontSize: "clamp(20px, 3.5vw, 34px)",
                  fontWeight: 700,
                  color: "hsl(38 30% 92%)",
                  letterSpacing: "0.04em",
                  marginBottom: 6,
                }}
              >
                Alpha Sigma Phi
              </div>
              <div
                style={{
                  fontFamily: "var(--font-mono, monospace)",
                  fontSize: "clamp(10px, 1.6vw, 13px)",
                  letterSpacing: "0.18em",
                  color: "hsl(33 65% 47%)",
                  textTransform: "uppercase",
                }}
              >
                Theta Chapter &nbsp;·&nbsp; University of Michigan &nbsp;·&nbsp; 2024–2025
              </div>
            </div>

            <div
              style={{
                borderRadius: 10,
                overflow: "hidden",
                boxShadow:
                  "0 0 64px rgba(198,128,42,0.18), 0 20px 56px rgba(0,0,0,0.65)",
                border: "1px solid hsl(33 65% 47% / 0.28)",
              }}
            >
              <Image
                src={composite}
                alt="Alpha Sigma Phi Theta Chapter 2024–2025 composite"
                style={{ display: "block", maxHeight: "58vh", width: "auto" }}
                priority
              />
            </div>

            <div
              style={{
                fontFamily: "var(--font-mono, monospace)",
                fontSize: 10,
                letterSpacing: "0.14em",
                color: "hsl(34 14% 44%)",
                textTransform: "uppercase",
              }}
            >
              Press Esc or click to close
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
