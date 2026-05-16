"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";

const LIGHTS = [
  { id: "red", off: "#2e0d0d", on: "#ff2800", glow: "0 0 36px 14px rgba(255,40,0,0.65)" },
  { id: "yellow", off: "#281800", on: "#ffc000", glow: "0 0 36px 14px rgba(255,192,0,0.65)" },
  { id: "green", off: "#071f0e", on: "#00cc44", glow: "0 0 36px 14px rgba(0,204,68,0.65)" },
];

export function RaceIntro() {
  const [show, setShow] = useState(false);
  const [litCount, setLitCount] = useState(0);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem("race-seen")) return;
    sessionStorage.setItem("race-seen", "1");
    setShow(true);

    const timers = [
      setTimeout(() => setLitCount(1), 280),
      setTimeout(() => setLitCount(2), 680),
      setTimeout(() => setLitCount(3), 1080),
      setTimeout(() => setFading(true), 1720),
    ];

    return () => timers.forEach(clearTimeout);
  }, []);

  if (!show) return null;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: fading ? 0 : 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      onAnimationComplete={() => { if (fading) setShow(false); }}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "hsl(24 18% 5%)",
        pointerEvents: fading ? "none" : "all",
      }}
    >
      <div
        style={{
          display: "flex",
          gap: 16,
          padding: "20px 30px",
          borderRadius: 20,
          background: "hsl(24 14% 8%)",
          border: "1px solid hsl(24 10% 18%)",
          boxShadow: "0 12px 48px rgba(0,0,0,0.7), inset 0 1px 0 hsl(24 10% 22% / 0.5)",
        }}
      >
        {LIGHTS.map((light, i) => {
          const isLit = litCount > i;
          const isGreen = light.id === "green";
          return (
            <motion.div
              key={light.id}
              animate={{
                backgroundColor: isLit ? light.on : light.off,
                boxShadow: isLit ? light.glow : "0 0 0px 0px transparent",
                scale: isGreen && isLit ? [1, 1.12, 1] : 1,
              }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              style={{
                width: 50,
                height: 50,
                borderRadius: "50%",
                border: "2px solid hsl(24 10% 24%)",
                flexShrink: 0,
              }}
            />
          );
        })}
      </div>

      <motion.p
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: litCount >= 3 ? 0.35 : 0, y: litCount >= 3 ? 0 : 6 }}
        transition={{ duration: 0.3 }}
        style={{
          marginTop: 20,
          fontSize: 10,
          letterSpacing: "0.22em",
          textTransform: "uppercase",
          color: "hsl(34 14% 68%)",
          fontFamily: "var(--font-sans)",
        }}
      >
        Lights out
      </motion.p>
    </motion.div>
  );
}
