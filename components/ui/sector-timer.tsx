"use client";

import { useEffect, useState } from "react";

export function SectorTimer() {
  const [elapsed, setElapsed] = useState(0);

  useEffect(() => {
    const start = Date.now();
    const id = setInterval(() => setElapsed(Date.now() - start), 67);
    return () => clearInterval(id);
  }, []);

  const totalSec = Math.floor(elapsed / 1000);
  const mm = String(Math.floor(totalSec / 60)).padStart(2, "0");
  const ss = String(totalSec % 60).padStart(2, "0");
  const cc = String(Math.floor((elapsed % 1000) / 10)).padStart(2, "0");

  return (
    <span
      style={{
        fontSize: 7,
        color: "hsl(34 14% 45%)",
        fontFamily: "monospace",
        letterSpacing: "0.08em",
      }}
    >
      {mm}:{ss}.{cc}
    </span>
  );
}
