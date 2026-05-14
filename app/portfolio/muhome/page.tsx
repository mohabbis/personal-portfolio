"use client";

import { useState } from "react";
import Link from "next/link";
import type { Metadata } from "next";

const features = [
  { icon: "M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18", label: "Unified device control", detail: "Govee, Hue, Kasa, and Home Assistant under one surface" },
  { icon: "M13 10V3L4 14h7v7l9-11h-7z", label: "Automation routines", detail: "Scene-based presets that trigger on time, motion, or command" },
  { icon: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z", label: "Local-first desktop app", detail: "Built with Tauri, React, and TypeScript — runs on your Mac" },
];

export default function MuHomeLaunchPage() {
  const [launching, setLaunching] = useState(false);

  function launch() {
    setLaunching(true);
    setTimeout(() => {
      window.location.href = "https://muhome.vercel.app";
    }, 700);
  }

  return (
    <>
      {/* Fade overlay that matches muhome's background */}
      <div
        aria-hidden="true"
        style={{
          position: "fixed",
          inset: 0,
          background: "#070b08",
          opacity: launching ? 1 : 0,
          transition: "opacity 0.7s cubic-bezier(0.4, 0, 0.2, 1)",
          pointerEvents: "none",
          zIndex: 60,
        }}
      />

      <div className="min-h-screen flex flex-col">
        {/* Back nav */}
        <nav className="px-6 py-5 sm:px-10">
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M19 12H5M12 5l-7 7 7 7" />
            </svg>
            Portfolio
          </Link>
        </nav>

        {/* Hero */}
        <main className="flex-1 flex flex-col items-center justify-center px-6 py-16 text-center">
          {/* Glow */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 overflow-hidden"
            style={{ zIndex: 0 }}
          >
            <div style={{
              position: "absolute",
              top: "20%",
              left: "50%",
              transform: "translateX(-50%)",
              width: 480,
              height: 480,
              borderRadius: "50%",
              background: "radial-gradient(circle, hsl(142 40% 28% / 0.22) 0%, transparent 70%)",
              filter: "blur(40px)",
            }} />
          </div>

          <div className="relative z-10 max-w-2xl">
            <p
              className="text-sm font-semibold uppercase tracking-widest mb-5"
              style={{ color: "hsl(28 74% 58% / 0.85)" }}
            >
              Smart home project
            </p>

            <h1 className="text-6xl sm:text-7xl font-bold tracking-tight mb-6" style={{ letterSpacing: "-0.04em" }}>
              Muhome
            </h1>

            <p className="text-lg sm:text-xl leading-relaxed mb-3" style={{ color: "hsl(42 28% 92% / 0.72)" }}>
              A local-first smart home command surface built for a real setup — not a demo.
            </p>
            <p className="text-base leading-relaxed mb-12" style={{ color: "hsl(42 28% 92% / 0.48)" }}>
              Controls Govee, Philips Hue, Kasa, and Home Assistant devices from one unified dashboard. Built with Tauri, React, and TypeScript.
            </p>

            {/* Features */}
            <div className="grid gap-4 sm:grid-cols-3 mb-14 text-left">
              {features.map((f) => (
                <div
                  key={f.label}
                  className="rounded-2xl p-5"
                  style={{ background: "hsl(222 20% 10% / 0.7)", border: "1px solid hsl(222 15% 20%)" }}
                >
                  <svg
                    width="18" height="18" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"
                    className="mb-3" style={{ color: "hsl(28 74% 58%)" }} aria-hidden="true"
                  >
                    <path d={f.icon} />
                  </svg>
                  <p className="text-sm font-semibold mb-1" style={{ color: "hsl(42 28% 92%)" }}>{f.label}</p>
                  <p className="text-xs leading-5" style={{ color: "hsl(42 28% 92% / 0.52)" }}>{f.detail}</p>
                </div>
              ))}
            </div>

            {/* Launch button */}
            <button
              onClick={launch}
              disabled={launching}
              className="inline-flex items-center gap-3 rounded-full px-8 py-4 text-base font-semibold transition-all duration-200"
              style={{
                background: launching
                  ? "hsl(142 35% 22%)"
                  : "hsl(142 35% 20%)",
                color: "#d4f0d4",
                border: "1px solid hsl(142 35% 32%)",
                boxShadow: "0 0 32px hsl(142 40% 18% / 0.6)",
                opacity: launching ? 0.7 : 1,
                transform: launching ? "scale(0.97)" : "scale(1)",
                cursor: launching ? "default" : "pointer",
              }}
            >
              {launching ? (
                <>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="animate-spin" aria-hidden="true">
                    <path d="M21 12a9 9 0 11-6.219-8.56" />
                  </svg>
                  Launching…
                </>
              ) : (
                <>
                  Launch Muhome
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </>
              )}
            </button>

            <p className="mt-5 text-xs" style={{ color: "hsl(42 28% 92% / 0.32)" }}>
              Opens muhome.vercel.app
            </p>
          </div>
        </main>
      </div>
    </>
  );
}
