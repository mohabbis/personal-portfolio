"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";

import { PixelMonkey } from "@/components/ui/pixel-monkey";
import { PixelMordecai } from "@/components/ui/pixel-mordecai";
import { PixelRigby } from "@/components/ui/pixel-rigby";
import { PixelRaceCar } from "@/components/ui/pixel-race-car";

function useNightMode() {
  const [isNight, setIsNight] = useState(false);
  useEffect(() => {
    const el = document.documentElement;
    const check = () => setIsNight(el.classList.contains("night-race"));
    check();
    const obs = new MutationObserver(check);
    obs.observe(el, { attributes: true, attributeFilter: ["class"] });
    return () => obs.disconnect();
  }, []);
  return isNight;
}

const SPEED_LINES = [
  { top: 22, width: 45, delay: 0, opacity: 0.5 },
  { top: 38, width: 65, delay: 0.3, opacity: 0.35 },
  { top: 50, width: 30, delay: 0.7, opacity: 0.25 },
  { top: 62, width: 55, delay: 0.15, opacity: 0.4 },
  { top: 75, width: 40, delay: 0.55, opacity: 0.3 },
];

export function HomeAboutCharacters() {
  const isNight = useNightMode();
  const containerRef = useRef<HTMLDivElement>(null);
  const [carWidth, setCarWidth] = useState(600);

  useEffect(() => {
    if (containerRef.current) {
      setCarWidth(containerRef.current.offsetWidth);
    }
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative mb-6 h-64 w-full overflow-hidden rounded-[1.5rem] border border-white/10 bg-card shadow-soft sm:h-72"
    >
      <AnimatePresence mode="wait">
        {isNight ? (
          <motion.div
            key="night"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="absolute inset-0 bg-[#0c0a09]"
          >
            {/* Speed lines */}
            {SPEED_LINES.map(({ top, width, delay, opacity }) => (
              <div
                key={top}
                className="absolute h-[2px] rounded-full animate-speed-line"
                style={{
                  top: `${top}%`,
                  right: 0,
                  width: `${width}%`,
                  background: `rgba(251,191,36,${opacity})`,
                  animationDelay: `${delay}s`,
                }}
              />
            ))}
            {/* F1 car looping left → right */}
            <motion.div
              className="absolute top-1/2 -translate-y-1/2"
              animate={{ x: [-220, carWidth + 220] }}
              transition={{
                duration: 2.4,
                ease: [0.2, 0, 0.6, 1],
                repeat: Infinity,
                repeatDelay: 0.6,
              }}
            >
              <PixelRaceCar className="w-[216px] h-auto" />
            </motion.div>
          </motion.div>
        ) : (
          <motion.div
            key="day"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="absolute inset-0 flex items-end justify-around px-6 pb-5 bg-[#F6F2EB]"
          >
            {/* Pixel ground strip */}
            <div className="absolute bottom-0 left-0 right-0 h-3 bg-[#C4B49A] opacity-60" />

            <div className="animate-idle-bounce" style={{ animationDelay: "0.4s" }}>
              <PixelMordecai className="h-36 w-auto sm:h-40" />
            </div>
            <div className="animate-monkey-dance">
              <PixelMonkey className="h-36 w-auto sm:h-40" />
            </div>
            <div className="animate-idle-bounce" style={{ animationDelay: "0.8s" }}>
              <PixelRigby className="h-32 w-auto sm:h-36" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
