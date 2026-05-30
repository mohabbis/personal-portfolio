"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

type Theme = "warm" | "bright" | "night";

function themeForPath(pathname: string): Theme {
  if (pathname.startsWith("/portfolio") || pathname.startsWith("/projects")) return "bright";
  if (pathname.startsWith("/photography") || pathname.startsWith("/gallery")) return "night";
  return "warm";
}

function applyTheme(theme: Theme) {
  const el = document.documentElement;
  el.classList.remove("night-race", "bright-mode");

  if (theme === "night") el.classList.add("night-race");
  if (theme === "bright") el.classList.add("bright-mode");
}

export function NightMode() {
  const pathname = usePathname() ?? "/";

  useEffect(() => {
    applyTheme(themeForPath(pathname));
  }, [pathname]);

  return null;
}
