"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

type Theme = "warm" | "gallery";

function themeForPath(pathname: string): Theme {
  if (
    pathname.startsWith("/photography") ||
    pathname.startsWith("/gallery") ||
    pathname.startsWith("/portfolio/lumen") ||
    pathname.startsWith("/portfolio/operations")
  ) return "gallery";
  return "warm";
}

function applyTheme(theme: Theme) {
  const el = document.documentElement;
  el.classList.remove("night-race", "bright-mode");

  if (theme === "gallery") el.classList.add("night-race");
}

export function NightMode() {
  const pathname = usePathname() ?? "/";

  useEffect(() => {
    applyTheme(themeForPath(pathname));
  }, [pathname]);

  return null;
}
