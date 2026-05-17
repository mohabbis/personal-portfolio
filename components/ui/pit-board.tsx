"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

const SESSION_START = Date.now();

function getPageCount(): number {
  try {
    const n = parseInt(sessionStorage.getItem("pb-pages") ?? "0");
    return isNaN(n) ? 1 : n;
  } catch { return 1; }
}

function bumpPageCount() {
  try {
    const n = getPageCount();
    sessionStorage.setItem("pb-pages", String(n + 1));
  } catch { /* */ }
}

export function PitBoard() {
  const [open, setOpen] = useState(false);
  const [elapsed, setElapsed] = useState(0);
  const [depth, setDepth] = useState(0);
  const [pages, setPages] = useState(1);
  const [sector, setSector] = useState("SECTOR 1");

  useEffect(() => {
    bumpPageCount();

    const onKey = (e: KeyboardEvent) => {
      const active = document.activeElement;
      if (active instanceof HTMLInputElement || active instanceof HTMLTextAreaElement) return;
      if (e.key.toLowerCase() === "p" && !e.metaKey && !e.ctrlKey && !e.altKey) {
        setOpen((o) => !o);
      }
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);

    const tick = setInterval(() => {
      const sec = Math.floor((Date.now() - SESSION_START) / 1000);
      setElapsed(sec);

      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      const d = scrollable > 0 ? Math.round((window.scrollY / scrollable) * 100) : 0;
      setDepth(d);
      setPages(getPageCount());

      if (d < 25) setSector("SECTOR 1 — HERO");
      else if (d < 50) setSector("SECTOR 2 — PROJECTS");
      else if (d < 75) setSector("SECTOR 3 — EXPERIENCE");
      else setSector("SECTOR 4 — CONTACT");
    }, 500);

    return () => {
      window.removeEventListener("keydown", onKey);
      clearInterval(tick);
    };
  }, []);

  const mm = String(Math.floor(elapsed / 60)).padStart(2, "0");
  const ss = String(elapsed % 60).padStart(2, "0");

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.18 }}
          onClick={() => setOpen(false)}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 80,
            background: "rgba(12, 8, 6, 0.94)",
            backdropFilter: "blur(16px)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            fontFamily: "monospace",
          }}
        >
          <motion.div
            initial={{ scale: 0.94, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.96, opacity: 0 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
            style={{ textAlign: "center", padding: "40px 24px" }}
          >
            <p style={{ fontSize: 9, color: "hsl(31 42% 50%)", letterSpacing: "0.35em", marginBottom: 36, textTransform: "uppercase" }}>
              ▪ PIT BOARD ▪
            </p>

            <p style={{ fontSize: 80, color: "hsl(38 30% 92%)", letterSpacing: "0.04em", lineHeight: 1, marginBottom: 48, fontVariantNumeric: "tabular-nums" }}>
              {mm}:{ss}
            </p>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px 56px", marginBottom: 40, minWidth: 260 }}>
              <div>
                <p style={{ fontSize: 8, color: "hsl(34 14% 40%)", letterSpacing: "0.28em", textTransform: "uppercase" }}>Scroll Depth</p>
                <p style={{ fontSize: 32, color: "hsl(31 42% 56%)", marginTop: 6, fontVariantNumeric: "tabular-nums" }}>{depth}%</p>
              </div>
              <div>
                <p style={{ fontSize: 8, color: "hsl(34 14% 40%)", letterSpacing: "0.28em", textTransform: "uppercase" }}>Pages Visited</p>
                <p style={{ fontSize: 32, color: "hsl(31 42% 56%)", marginTop: 6 }}>{pages}</p>
              </div>
            </div>

            <p style={{ fontSize: 10, color: "hsl(34 14% 62%)", letterSpacing: "0.22em", textTransform: "uppercase", marginBottom: 6 }}>
              {sector}
            </p>
            <p style={{ fontSize: 8, color: "hsl(34 14% 32%)", letterSpacing: "0.2em", textTransform: "uppercase" }}>
              Circuit: muharafiq.com
            </p>

            <p style={{ fontSize: 8, color: "hsl(34 14% 24%)", letterSpacing: "0.14em", textTransform: "uppercase", marginTop: 40 }}>
              ESC or click to close · press P to toggle
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
