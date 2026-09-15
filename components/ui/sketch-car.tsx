import type { CSSProperties } from "react";

import { cn } from "@/lib/utils";

type SketchCarProps = {
  className?: string;
};

/**
 * Home hero centrepiece: a car profile that draws itself like a sketch,
 * then catches a slow marigold highlight along the body line.
 *
 * Pure CSS (stroke-dashoffset on pathLength-normalised geometry), so this
 * stays a server component. Reduced-motion renders the finished drawing.
 */
const draw = (delay: string, duration: string) =>
  ({ "--draw-delay": delay, "--draw-duration": duration }) as CSSProperties;

const BODY =
  "M 36 188 C 32 166, 38 150, 56 145 L 128 133 C 148 130, 160 127, 172 118 L 238 76 C 250 68, 264 64, 280 64 L 366 64 C 396 64, 422 71, 444 84 L 548 142 C 566 151, 578 162, 580 176 L 581 188 L 540 188 A 48 48 0 0 0 444 188 L 204 188 A 48 48 0 0 0 108 188 Z";

export function SketchCar({ className }: SketchCarProps) {
  return (
    <svg
      viewBox="0 0 640 268"
      role="img"
      aria-label="Line drawing of a car in profile, sketched stroke by stroke"
      className={cn("sketch-car h-auto w-full overflow-visible", className)}
    >
      <defs>
        <radialGradient id="sketch-car-shadow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="hsl(var(--foreground))" stopOpacity="0.20" />
          <stop offset="100%" stopColor="hsl(var(--foreground))" stopOpacity="0" />
        </radialGradient>
      </defs>

      <ellipse
        className="sketch-car__shadow"
        cx="308"
        cy="236"
        rx="252"
        ry="14"
        fill="url(#sketch-car-shadow)"
      />

      <g fill="none" strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke">
        {/* Road */}
        <line
          data-draw
          style={draw("0s", "1.1s")}
          pathLength={1}
          x1="8"
          y1="232"
          x2="632"
          y2="232"
          className="stroke-foreground/15"
          strokeWidth={1}
          vectorEffect="non-scaling-stroke"
        />

        {/* Body */}
        <path
          data-draw
          style={draw("0.2s", "1.7s")}
          pathLength={1}
          d={BODY}
          className="stroke-foreground/75"
          strokeWidth={2}
          vectorEffect="non-scaling-stroke"
        />

        {/* Greenhouse */}
        <path
          data-draw
          style={draw("1.25s", "0.8s")}
          pathLength={1}
          d="M 192 114 L 246 80 C 256 73, 268 70, 280 70 L 364 70 C 390 70, 412 77, 430 88 L 468 110 Z"
          className="stroke-foreground/45"
          strokeWidth={1.4}
          vectorEffect="non-scaling-stroke"
        />

        {/* Wheels */}
        <circle
          data-draw
          style={draw("1.45s", "0.7s")}
          pathLength={1}
          cx="156"
          cy="186"
          r="44"
          className="stroke-foreground/65"
          strokeWidth={1.8}
          vectorEffect="non-scaling-stroke"
        />
        <circle
          data-draw
          style={draw("1.45s", "0.7s")}
          pathLength={1}
          cx="492"
          cy="186"
          r="44"
          className="stroke-foreground/65"
          strokeWidth={1.8}
          vectorEffect="non-scaling-stroke"
        />
        <circle
          data-draw
          style={draw("1.9s", "0.6s")}
          pathLength={1}
          cx="156"
          cy="186"
          r="17"
          className="stroke-foreground/35"
          strokeWidth={1.4}
          vectorEffect="non-scaling-stroke"
        />
        <circle
          data-draw
          style={draw("1.9s", "0.6s")}
          pathLength={1}
          cx="492"
          cy="186"
          r="17"
          className="stroke-foreground/35"
          strokeWidth={1.4}
          vectorEffect="non-scaling-stroke"
        />

        {/* Details: pillar, door seam, handle, lamps */}
        <g className="stroke-foreground/35" strokeWidth={1.25}>
          <path
            data-draw
            style={draw("2.05s", "0.5s")}
            pathLength={1}
            d="M 328 70 L 332 112"
            vectorEffect="non-scaling-stroke"
          />
          <path
            data-draw
            style={draw("2.15s", "0.55s")}
            pathLength={1}
            d="M 292 116 C 290 140, 288 164, 288 188"
            vectorEffect="non-scaling-stroke"
          />
          <path
            data-draw
            style={draw("2.35s", "0.4s")}
            pathLength={1}
            d="M 318 138 L 342 137"
            vectorEffect="non-scaling-stroke"
          />
          <path
            data-draw
            style={draw("2.35s", "0.4s")}
            pathLength={1}
            d="M 44 152 C 56 148, 66 146, 78 145"
            vectorEffect="non-scaling-stroke"
          />
          <path
            data-draw
            style={draw("2.35s", "0.4s")}
            pathLength={1}
            d="M 558 152 L 574 159"
            vectorEffect="non-scaling-stroke"
          />
        </g>

        {/* Marigold highlight travelling the body line */}
        <path
          className="sketch-car__sweep stroke-accent"
          pathLength={1}
          d={BODY}
          strokeWidth={2.5}
          vectorEffect="non-scaling-stroke"
        />
      </g>
    </svg>
  );
}
