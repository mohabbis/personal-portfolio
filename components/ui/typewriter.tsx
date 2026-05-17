"use client";

import { useEffect, useState } from "react";

const PHRASES = [
  "Work · Writing · Photography",
  "Product designer & developer",
  "Chicago, Illinois",
];

const TYPE_SPEED = 55;
const ERASE_SPEED = 28;
const PAUSE_MS = 2400;

export function Typewriter() {
  const [phraseIdx, setPhraseIdx] = useState(0);
  const [displayed, setDisplayed] = useState(PHRASES[0]);
  const [isErasing, setIsErasing] = useState(false);
  const [isPaused, setIsPaused] = useState(true);

  useEffect(() => {
    const phrase = PHRASES[phraseIdx];

    if (isPaused) {
      const id = setTimeout(() => { setIsPaused(false); setIsErasing(true); }, PAUSE_MS);
      return () => clearTimeout(id);
    }

    if (isErasing) {
      if (displayed.length === 0) {
        setPhraseIdx((i) => (i + 1) % PHRASES.length);
        setIsErasing(false);
        return;
      }
      const id = setTimeout(() => setDisplayed((d) => d.slice(0, -1)), ERASE_SPEED);
      return () => clearTimeout(id);
    }

    if (displayed.length < phrase.length) {
      const id = setTimeout(() => setDisplayed(phrase.slice(0, displayed.length + 1)), TYPE_SPEED);
      return () => clearTimeout(id);
    }

    setIsPaused(true);
  }, [displayed, isErasing, isPaused, phraseIdx]);

  return (
    <span>
      {displayed}
      <span className="screen-cursor" aria-hidden={true} style={{ marginLeft: 1 }}>|</span>
    </span>
  );
}
