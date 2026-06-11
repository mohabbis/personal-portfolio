"use client";

import { useEffect, useRef } from "react";

type Point = [number, number, number];
type Face = { points: Point[]; color: string };
type Line = { points: Point[]; color: string; width?: number };

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
    { color: tone(color, -22), points: [[l, b, z], [r, b, z], [r, b, z + h], [l, b, z + h]] },
    { color: tone(color, -14), points: [[r, f, z], [r, b, z], [r, b, z + h], [r, f, z + h]] },
    { color: tone(color, 8), points: [[l, f, z], [r, f, z], [r, f, z + h], [l, f, z + h]] }
  ];
}

function model() {
  const faces: Face[] = [];
  const lines: Line[] = [];

  faces.push(...prism(0, 0.9, -0.08, 11.8, 8.8, 0.12, "#1a2324"));
  faces.push(...prism(-0.1, 2.85, 0, 10.9, 1.05, 0.07, "#263033"));
  faces.push(...prism(-0.3, 4.15, 0.01, 11.4, 0.28, 0.05, "#d7cdbb"));
  faces.push(...prism(-0.2, 4.5, 0.02, 11.5, 0.28, 0.05, "#586f4f"));

  faces.push(...prism(-2.7, -0.25, 0, 5.15, 1.75, 1.32, "#0d1315"));
  faces.push(...prism(-4.35, -1.18, 0.04, 1.4, 0.18, 0.66, "#050708"));
  faces.push(...prism(-4.35, -1.29, 0.8, 1.28, 0.06, 0.18, "#101719"));
  faces.push(...prism(-4.35, -1.34, 0.94, 0.9, 0.04, 0.05, "#67e8f9"));
  faces.push(...prism(-4.35, -1.34, 1.04, 0.74, 0.04, 0.05, "#eef8f8"));

  [-2.95, -1.95, -0.95].forEach((x) => faces.push(...prism(x, -0.25, 1.36, 0.78, 1.62, 0.06, "#edf8f8")));
  [-2.75, -2.05, -1.35, -0.65].forEach((x) => faces.push(...prism(x, 0.72, 0.05, 0.38, 0.08, 0.58, "#253235")));
  faces.push(...prism(-1.0, -1.19, 0.05, 0.36, 0.1, 0.92, "#dce8e7"));
  faces.push(...prism(-0.55, -1.19, 0.05, 0.32, 0.1, 0.55, "#0b1112"));

  faces.push(...prism(1.55, 1.15, 0.04, 5.9, 1.15, 0.08, "#0b1112"));
  faces.push(...prism(1.55, 1.15, 0.86, 5.75, 1.06, 0.08, "#eaf8f7"));
  for (let i = 0; i < 9; i += 1) {
    const x = -1.1 + i * 0.66;
    faces.push(...prism(x, 0.62, 0.04, 0.07, 0.07, 0.9, "#eaf8f7"));
    faces.push(...prism(x, 1.67, 0.04, 0.07, 0.07, 0.9, "#eaf8f7"));
    faces.push(...prism(x, 1.14, 0.95, 0.07, 1.15, 0.04, "#eaf8f7"));
    faces.push(...prism(x + 0.18, 1.1, 0.07, 0.11, 0.16, 0.32, "#f2d247"));
    const arch: Point[] = [];
    for (let step = 0; step <= 12; step += 1) {
      const t = Math.PI * (step / 12);
      arch.push([x + Math.cos(t) * 0.3, 1.14 + Math.sin(t) * 0.55, 0.98]);
    }
    lines.push({ points: arch, color: "rgba(234,248,247,0.92)", width: 2 });
  }

  faces.push(...prism(4.35, -0.95, 0, 0.72, 0.2, 1.42, "#eaf8f7"));
  faces.push(...prism(4.35, -1.1, 0.36, 0.52, 0.06, 0.6, "#0b1112"));
  faces.push(...prism(4.35, -1.15, 0.74, 0.34, 0.04, 0.08, "#67e8f9"));
  faces.push(...prism(4.05, -0.95, 0, 0.07, 0.07, 1.45, "#121719"));
  faces.push(...prism(4.65, -0.95, 0, 0.07, 0.07, 1.45, "#121719"));

  [[-3.35,1.65,"#121719"],[-2.75,1.82,"#eef4f2"],[-2.15,1.62,"#8a8e88"],[-1.55,1.86,"#121719"],[-0.95,1.7,"#eef4f2"],[-0.35,1.9,"#8a8e88"]].forEach(([x,y,c]) => faces.push(...prism(Number(x), Number(y), 0.05, 0.46, 0.46, 0.34, String(c))));

  [-5.05, -4.55, -4.05].forEach((x, i) => {
    faces.push(...prism(x, -2.25 + i * 0.24, 0, 0.06, 0.06, 2.45, "#9aa5a6"));
    faces.push(...prism(x, -2.25 + i * 0.24, 1.95, 0.98, 0.05, 0.05, "#9aa5a6"));
    faces.push(...prism(x, -2.25 + i * 0.24, 1.55, 0.72, 0.04, 0.04, "#9aa5a6"));
  });
  for (let i = 0; i < 5; i += 1) {
    lines.push({ points: [[-5.5, -2.75, 2.3 + i * 0.08], [5.65, -0.75, 2.65 + i * 0.08]], color: "rgba(154,165,166,0.38)", width: 1 });
  }

  [-4.8, -3.0, -1.2, 0.6, 2.4, 4.2].forEach((x) => faces.push(...prism(x, 4.55, 0.02, 0.75, 0.3, 0.12, "#536b4f")));
  for (let i = 0; i < 7; i += 1) lines.push({ points: [[-5.3 + i * 1.5, 2.45, 0.05], [-4.4 + i * 1.5, 3.68, 0.05]], color: "rgba(255,255,255,0.12)", width: 2 });

  return { faces, lines };
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

function project(point: Point, width: number, height: number, scale: number) {
  const [x, y, z] = point;
  const perspective = 12 / (12 + z);
  return [width / 2 + x * scale * perspective, height / 2 + y * scale * perspective] as const;
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
  gradient.addColorStop(0.72, "#061417");
  gradient.addColorStop(1, "#02090b");
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, width, height);

  ctx.save();
  ctx.globalAlpha = 0.26;
  ctx.fillStyle = "#67e8f9";
  ctx.beginPath();
  ctx.ellipse(width * 0.55, height * 0.72, width * 0.34, height * 0.09, -0.08, 0, Math.PI * 2);
  ctx.fill();
  ctx.restore();

  const scale = Math.min(width, height) * 0.15;
  const { faces, lines } = model();
  faces.sort((a, b) => depth(a, tilt, spin) - depth(b, tilt, spin));
  for (const face of faces) {
    const projected = face.points.map((point) => project(rotate(point, tilt, spin), width, height, scale));
    ctx.beginPath();
    projected.forEach(([x, y], index) => index === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y));
    ctx.closePath();
    ctx.fillStyle = face.color;
    ctx.fill();
    ctx.strokeStyle = "rgba(255,255,255,0.09)";
    ctx.stroke();
  }
  for (const line of lines) {
    const projected = line.points.map((point) => project(rotate(point, tilt, spin), width, height, scale));
    ctx.beginPath();
    projected.forEach(([x, y], index) => index === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y));
    ctx.strokeStyle = line.color;
    ctx.lineWidth = (line.width ?? 1) * ratio;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.stroke();
  }
}

export function LocalBusinessSiteModel() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const state = useRef({ tilt: -0.74, spin: -0.2, active: false, x: 0, y: 0 });

  useEffect(() => {
    let frame = 0;
    const loop = () => {
      if (canvasRef.current) {
        if (!state.current.active) state.current.spin += 0.0012;
        draw(canvasRef.current, state.current.tilt, state.current.spin);
      }
      frame = requestAnimationFrame(loop);
    };
    loop();
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <div className="relative overflow-hidden rounded-[2rem] border border-[#67e8f9]/[0.16] bg-[#041014] p-4 shadow-[0_30px_100px_rgba(0,0,0,0.32)] sm:p-6">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_12%,rgba(103,232,249,0.18),transparent_35%),radial-gradient(circle_at_82%_88%,rgba(6,182,212,0.10),transparent_42%)]" />
      <div className="relative space-y-5">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-[#67e8f9]">Interactive property model</p>
            <h3 className="mt-3 font-display text-3xl font-light tracking-[-0.04em] text-white/85 sm:text-4xl">Fancy Car Wash site massing</h3>
          </div>
          <p className="max-w-xl text-sm font-light leading-6 text-white/50">A larger architectural study of the launch-stage property: front wash bay, white facade panels, long canopy rhythm, monument sign, utility edge, and deep asphalt run.</p>
        </div>
        <div className="relative min-h-[520px] overflow-hidden rounded-[1.5rem] border border-white/[0.08] bg-[#06171b] sm:min-h-[650px]">
          <canvas
            ref={canvasRef}
            className="h-full min-h-[520px] w-full touch-none cursor-grab active:cursor-grabbing sm:min-h-[650px]"
            aria-label="Interactive 3D model of the Fancy Car Wash property concept"
            onPointerDown={(event) => { state.current.active = true; state.current.x = event.clientX; state.current.y = event.clientY; }}
            onPointerMove={(event) => {
              if (!state.current.active) return;
              state.current.spin += (event.clientX - state.current.x) * 0.008;
              state.current.tilt += (event.clientY - state.current.y) * 0.006;
              state.current.tilt = Math.max(-1.18, Math.min(-0.42, state.current.tilt));
              state.current.x = event.clientX;
              state.current.y = event.clientY;
            }}
            onPointerUp={() => { state.current.active = false; }}
            onPointerCancel={() => { state.current.active = false; }}
          />
          <div className="pointer-events-none absolute left-5 top-5 rounded-full border border-white/[0.08] bg-[#030c0f]/60 px-4 py-2 text-[10px] uppercase tracking-[0.16em] text-white/38 backdrop-blur-xl">Drag to rotate</div>
        </div>
      </div>
    </div>
  );
}
