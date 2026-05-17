"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { X } from "lucide-react";

const MESSAGES = [
  { id: "welcome", delay: 4000, text: "Box, box. Photography page is worth a look." },
  { id: "lap", delay: 55000, text: "Fastest lap on this session. Keep exploring." },
];

export function TeamRadio() {
  const [current, setCurrent] = useState<(typeof MESSAGES)[0] | null>(null);

  useEffect(() => {
    let shown: string[];
    try {
      shown = JSON.parse(sessionStorage.getItem("tr-shown") ?? "[]");
    } catch {
      shown = [];
    }

    const timers: ReturnType<typeof setTimeout>[] = [];

    MESSAGES.forEach((msg) => {
      if (shown.includes(msg.id)) return;
      const t = setTimeout(() => {
        setCurrent(msg);
        shown = [...shown, msg.id];
        sessionStorage.setItem("tr-shown", JSON.stringify(shown));
        const dismiss = setTimeout(() => setCurrent(null), 6500);
        timers.push(dismiss);
      }, msg.delay);
      timers.push(t);
    });

    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <AnimatePresence>
      {current && (
        <motion.div
          key={current.id}
          initial={{ opacity: 0, y: 16, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 10, scale: 0.97 }}
          transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
          style={{
            position: "fixed",
            bottom: 24,
            right: 24,
            zIndex: 60,
            maxWidth: 272,
            background: "hsl(24 16% 11% / 0.96)",
            border: "1px solid hsl(24 12% 22%)",
            borderRadius: 14,
            padding: "12px 14px",
            display: "flex",
            alignItems: "flex-start",
            gap: 10,
            backdropFilter: "blur(16px)",
            boxShadow: "0 8px 40px rgba(0,0,0,0.45)",
          }}
        >
          <div style={{ flex: 1, minWidth: 0 }}>
            <p style={{ fontSize: 10, fontFamily: "monospace", color: "hsl(31 42% 56%)", textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: 5 }}>
              📻 Team Radio
            </p>
            <p style={{ fontSize: 13, lineHeight: 1.55, color: "hsl(34 14% 72%)", margin: 0 }}>
              {current.text}
            </p>
          </div>
          <button
            onClick={() => setCurrent(null)}
            aria-label="Dismiss"
            style={{ flexShrink: 0, background: "none", border: "none", cursor: "pointer", color: "hsl(34 14% 45%)", padding: 2, display: "flex" }}
          >
            <X size={14} />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
