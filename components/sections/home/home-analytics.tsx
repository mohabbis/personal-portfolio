"use client";

import { useEffect } from "react";

import { track } from "@/lib/analytics";

// Keeps the home page sections as server components: clicks are captured by
// delegation on any [data-track] element, and the Lumen flagship band fires a
// one-time `lumen_seen` event once 60% of it is visible.
export function HomeAnalytics() {
  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      const tracked = target?.closest<HTMLElement>("[data-track]");
      const name = tracked?.dataset.track;
      if (name) track(name);
    };

    document.addEventListener("click", onClick);

    const flagship = document.getElementById("projects");
    let observer: IntersectionObserver | undefined;

    if (flagship) {
      observer = new IntersectionObserver(
        ([entry], obs) => {
          if (entry.isIntersecting) {
            track("lumen_seen", { threshold: 0.6 });
            obs.disconnect();
          }
        },
        { threshold: 0.6 }
      );
      observer.observe(flagship);
    }

    return () => {
      document.removeEventListener("click", onClick);
      observer?.disconnect();
    };
  }, []);

  return null;
}
