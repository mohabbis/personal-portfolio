import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      // Keep foundational design controls centralized here so restyling stays low-friction.
      colors: {
        background: "hsl(var(--background) / <alpha-value>)",
        foreground: "hsl(var(--foreground) / <alpha-value>)",
        muted: "hsl(var(--muted) / <alpha-value>)",
        "muted-foreground": "hsl(var(--muted-foreground) / <alpha-value>)",
        border: "hsl(var(--border) / <alpha-value>)",
        input: "hsl(var(--input) / <alpha-value>)",
        card: "hsl(var(--card) / <alpha-value>)",
        primary: "hsl(var(--primary) / <alpha-value>)",
        "primary-foreground": "hsl(var(--primary-foreground) / <alpha-value>)",
        secondary: "hsl(var(--secondary) / <alpha-value>)",
        "secondary-foreground": "hsl(var(--secondary-foreground) / <alpha-value>)",
        accent: "hsl(var(--accent) / <alpha-value>)",
        "accent-foreground": "hsl(var(--accent-foreground) / <alpha-value>)"
        ,
        ring: "hsl(var(--ring) / <alpha-value>)",
        destructive: "hsl(var(--destructive) / <alpha-value>)"
      },
      fontFamily: {
        sans: ["var(--font-sans)", "sans-serif"],
        display: ["var(--font-display)", "serif"],
        mono: ["var(--font-mono)", "monospace"]
      },
      maxWidth: {
        site: "74rem",
        prose: "46rem"
      },
      boxShadow: {
        soft: "0 8px 24px -8px rgba(20, 18, 16, 0.10)",
        card: "0 8px 24px -12px rgba(20, 18, 16, 0.12)",
        lift: "0 14px 40px -16px rgba(20, 18, 16, 0.18)"
      },
      transitionTimingFunction: {
        gentle: "cubic-bezier(0.16, 1, 0.3, 1)"
      }
    }
  },
  plugins: [tailwindcssAnimate]
};

export default config;
