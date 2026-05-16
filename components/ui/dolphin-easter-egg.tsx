"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

export function DolphinEasterEgg() {
  const [jumps, setJumps] = useState<number[]>([]);

  const launch = () => {
    setJumps((prev) => [...prev, Date.now() + Math.random()]);
  };

  const finish = (id: number) => {
    setJumps((prev) => prev.filter((x) => x !== id));
  };

  return (
    <>
      <button
        type="button"
        onClick={launch}
        aria-label="Send a dolphin jumping across the screen"
        className="sun-pulse cursor-pointer appearance-none border-0 bg-transparent p-0 text-base leading-none transition-transform hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50 focus-visible:rounded-sm"
      >
        🔆
      </button>

      <AnimatePresence>
        {jumps.map((id) => (
          <motion.div
            key={id}
            initial={{ x: "-10vw", y: 0, rotate: 12 }}
            animate={{
              x: ["-10vw", "30vw", "50vw", "70vw", "115vw"],
              y: [0, -212, -300, -212, 0],
              rotate: [12, -12, 0, 14, -14],
            }}
            transition={{
              duration: 1.9,
              ease: "linear",
              times: [0, 0.25, 0.5, 0.75, 1],
            }}
            onAnimationComplete={() => finish(id)}
            style={{
              position: "fixed",
              bottom: 24,
              left: 0,
              fontSize: 44,
              zIndex: 50,
              pointerEvents: "none",
              filter: "drop-shadow(0 4px 12px rgba(56,189,248,0.45))",
            }}
            aria-hidden={true}
          >
            🐬
          </motion.div>
        ))}
      </AnimatePresence>
    </>
  );
}
