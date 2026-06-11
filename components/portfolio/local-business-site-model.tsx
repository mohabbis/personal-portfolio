"use client";

import { useEffect, useRef } from "react";

type Point = [number, number, number];
type Face = { points: Point[]; color: string };

function tone(hex: string, amount: number) {
  const n = Number.parseInt(hex.slice(1), 16);
  const r = Math.max(0, Math.min(255, (n >> 16) + amount));
  const g = Math.max(0, Math.min(255, ((n >> 8) & 255) + amount));
  const b = Math.max(0, Math.min(255, (n & 255) + amount));
  return `rgb(${r}, ${g}, ${b})`;
}

function prism(x: number, y: number, z: number, w: number, d: number, h: number, color: string): Face[] {
  const l = x - w / 2;
  const r = x + w / 2;
  const f = y - d / 2;
  const b = y + d / 2;
  return [
    { color, points: [[l, f, z + h], [r, f, z + h], [r, b, z + h], [l, b, z + h]] },
    { color: tone(color, -20), points: [[l, b, z], [r, b, z], [r, b, z + h], [l, b, z + h]] },
    { color: tone(color, -12), points: [[r, f, z], [r, b, z], [r, b, z + h], [r, f, z + h]] },
    { color: tone(color, 8), points: [[l, f, z], [r, f, z], [r, f, z + h], [l, f, z + h]] }
  ];
}

function model() {
  const faces: Face[] = [];
  faces.push(...prism(0, 0, -0.08, 11, 6.4, 0.12, "#1b2527"));
  faces.push(...prism(-0.2, 2.05, 0, 9.6, 0.7, 0.06, "#2a3436"));
  faces.push(...prism(-0.45, 2.85, 0, 10.4, 0.22, 0.05, "#d6ccba"));

  faces.push(...prism(-2.05, -0.65, 0, 4.45, 1.7, 1.35, "#0e1416"));
  faces.push(...prism(-3.55, -1.55, 0.04, 1.28, 0.18, 0.65, "#050708"));
  faces.push(...prism(-3.55, -1.66, 0.78, 1.12, 0.06, 0.12, "#67e8f9"));

  [-2.55, -1.62, -0.7].forEach((x) => faces.push(...prism(x, -0.62, 1.38, 0.72, 1.58, 0.06, "#edf8f8")));
  [-2.8, -1.9, -1, -0.1].forEach((x) => faces.push(...prism(x, 0.26, 0.05, 0.45, 0.08, 0.52, "#263335")));

  faces.push(...prism(1.55, 0.78, 0.04, 4.7, 1.12, 0.08, "#0b1112"));
  faces.push(...prism(1.55, 0.78, 0.83, 4.6, 1.04, 0.09, "#eaf8f7"));
  for (let i = 0; i < 7; i += 1) {
    const x = -0.45 + i * 0.68;
    faces.push(...prism(x, 0.28, 0.04, 0.08, 0.08, 0.86, "#eaf8f7"));
    faces.push(...prism(x, 1.24, 0.04, 0.08, 0.08, 0.86, "#eaf8f7"));
    faces.push(...prism(x, 0.76, 0.9, 0.08, 1.1, 0.04, "#eaf8f7"));
    faces.push(...prism(x + 0.18, 0.73, 0.08, 0.12, 0.16, 0.28, "#f2d247"));
  }

  faces.push(...prism(3.45, -1.15, 0, 0.7, 0.18, 1.35, "#eaf8f7"));
  faces.push(...prism(3.45, -1.29, 0.34, 0.52, 0.06, 0.58, "#0b1112"));
  faces.push(...prism(3.45, -1.34, 0.7, 0.35, 0.04, 0.08, "#67e8f9"));

  [-3, -2.4, -1.8, -1.2, -0.6].forEach((x, i) => faces.push(...prism(x, 1.15 + (i % 2) * 0.16, 0.05, 0.42, 0.42, 0.34, i % 3 === 0 ? "#121719" : i % 3 === 1 ? "#eef4f2" : "#8a8e88")));
  [-4.8, -4.25, -3.7].forEach((x, i) => {
    faces.push(...prism(x, -2.5 + i * 0.22, 0, 0.05, 0.05, 2.25, "#9aa5a6"));
    faces.push(...prism(x, -2.5 + i * 0.22, 1.82, 0.85, 0.05, 0.05, "#9aa5a6"));
  });
  [-4.2, -2.5, -0.8, 0.9, 2.6, 4.3].forEach((x) => faces.push(...prism(x, 3.08, 0.02, 0.75, 0.3, 0.12, "#536b4f")));

  return faces;
}

function rotate(point: Point, tilt: number, spin: number): Point {
  const [x, y, z] = point;
  const ct = Math.cos(tilt);
  const st = Math.sin(tilt);
  const cs = Math.cos(spin);
  const ss = Math.sin(spin);
  const y2 = y * ct - z * st;
  const z2 = y * st + z * ct;
  return [x * cs - y2 * ss, x * ss + y2 * cs, z2];
}

function depth(face: Face, tilt: number, spin: number) {
  return face.points.reduce((sum, point) => sum + rotate(point, tilt, spin)[2], 0) / face.points.length;
}

function draw(canvas: HTMLCanvasElement, tilt: number, spin: number) {
  const ctx = canvas.getContext("2d");
  if (!ctx) return;
  const ratio = window.devicePixelRatio || 1;
  const width = Math.max(1, Math.floor(canvas.clientWidth * ratio));
  const height = Math.max(1, Math.floor(canvas.clientHeight * ratio));
  if (canvas.width !== width || canvas.height !== height) {
    canvas.width = width;
    canvas.height = height;
  }

  const gradient = ctx.createLinearGradient(0, 0, 0, height);
  gradient.addColorStop(0, "#082127");
  gradient.addColorStop(1, "#02090b");
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, width, height);

  const scale = Math.min(width, height) * 0.16;
  const faces = model().sort((a, b) => depth(a, tilt, spin) - depth(b, tilt, spin));
  for (const face of faces) {
    const projected = face.points.map((point) => {
      const [x, y, z] = rotate(point, tilt, spin);
      const perspective = 12 / (12 + z);
      return [width / 2 + x * scale * perspective, height / 2 + y * scale * perspective] as const;
    });
    ctx.beginPath();
    projected.forEach(([x, y], index) => index === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y));
    ctx.closePath();
    ctx.fillStyle = face.color;
    ctx.fill();
    ctx.strokeStyle = "rgba(255,255,255,0.08)";
    ctx.stroke();
  }
}

export function LocalBusinessSiteModel() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const state = useRef({ tilt: -0.82, spin: -0.42, active: false, x: 0, y: 0 });

  useEffect(() => {
    let frame = 0;
    const loop = () => {
      if (canvasRef.current) {
        if (!state.current.active) state.current.spin += 0.0016;
        draw(canvasRef.current, state.current.tilt, state.current.spin);
      }
      frame = requestAnimationFrame(loop);
    };
    loop();
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <div className="relative overflow-hidden rounded-[2rem] border border-[#67e8f9]/[0.16] bg-[#041014] p-5 shadow-[0_30px_100px_rgba(0,0,0,0.32)] sm:p-8">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_12%,rgba(103,232,249,0.18),transparent_35%),radial-gradient(circle_at_82%_88%,rgba(6,182,212,0.10),transparent_42%)]" />
      <div className="relative grid gap-8 lg:grid-cols-[0.86fr_1.14fr] lg:items-center">
        <div>
          <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-[#67e8f9]">Interactive property model</p>
          <h3 className="mt-4 font-display text-3xl font-light tracking-[-0.04em] text-white/85 sm:text-4xl">A miniature architectural model of the launch-stage site.</h3>
          <p className="mt-4 max-w-2xl text-sm font-light leading-7 text-white/62 sm:text-base sm:leading-8">Built from the reference photos as a simplified 3D scene: black-and-white wash building, front bay, side canopy, monument sign, pavement, landscape spheres, utility edge, and curb condition.</p>
        </div>
        <div className="relative min-h-[420px] overflow-hidden rounded-[1.5rem] border border-white/[0.08] bg-[#06171b] sm:min-h-[560px]">
          <canvas
            ref={canvasRef}
            className="h-full min-h-[420px] w-full touch-none cursor-grab active:cursor-grabbing sm:min-h-[560px]"
            aria-label="Interactive 3D model of the Fancy Car Wash property concept"
            onPointerDown={(event) => { state.current.active = true; state.current.x = event.clientX; state.current.y = event.clientY; }}
            onPointerMove={(event) => {
              if (!state.current.active) return;
              state.current.spin += (event.clientX - state.current.x) * 0.008;
              state.current.tilt += (event.clientY - state.current.y) * 0.006;
              state.current.tilt = Math.max(-1.25, Math.min(-0.45, state.current.tilt));
              state.current.x = event.clientX;
              state.current.y = event.clientY;
            }}
            onPointerUp={() => { state.current.active = false; }}
            onPointerCancel={() => { state.current.active = false; }}
          />
        </div>
      </div>
    </div>
  );
}
