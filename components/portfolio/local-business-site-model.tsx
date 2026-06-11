"use client";

import { useEffect, useRef } from "react";

type State = {
  currentX: number;
  currentY: number;
  targetX: number;
  targetY: number;
  drag: boolean;
  px: number;
  py: number;
  lastTime: number;
};

function rr(ctx: CanvasRenderingContext2D, x: number, y: number, w: number, h: number, r: number) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.lineTo(x + w - r, y);
  ctx.quadraticCurveTo(x + w, y, x + w, y + r);
  ctx.lineTo(x + w, y + h - r);
  ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
  ctx.lineTo(x + r, y + h);
  ctx.quadraticCurveTo(x, y + h, x, y + h - r);
  ctx.lineTo(x, y + r);
  ctx.quadraticCurveTo(x, y, x + r, y);
  ctx.closePath();
}

function line(ctx: CanvasRenderingContext2D, pts: Array<[number, number]>, color: string, width: number) {
  ctx.beginPath();
  pts.forEach(([x, y], i) => (i ? ctx.lineTo(x, y) : ctx.moveTo(x, y)));
  ctx.strokeStyle = color;
  ctx.lineWidth = width;
  ctx.lineCap = "round";
  ctx.lineJoin = "round";
  ctx.stroke();
}

function poly(ctx: CanvasRenderingContext2D, pts: Array<[number, number]>, fill: string, stroke?: string, lineWidth = 0) {
  ctx.beginPath();
  pts.forEach(([x, y], i) => (i ? ctx.lineTo(x, y) : ctx.moveTo(x, y)));
  ctx.closePath();
  ctx.fillStyle = fill;
  ctx.fill();
  if (stroke) {
    ctx.strokeStyle = stroke;
    ctx.lineWidth = lineWidth;
    ctx.stroke();
  }
}

function lerp(a: [number, number], b: [number, number], t: number): [number, number] {
  return [a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t];
}

function drawFancyBadge(ctx: CanvasRenderingContext2D, x: number, y: number, w: number, u: number, compact = false) {
  const h = compact ? 9 * u : 8 * u;
  rr(ctx, x, y, w, h, 0.9 * u);
  ctx.fillStyle = "#0b1112";
  ctx.fill();
  ctx.strokeStyle = "rgba(103,232,249,.42)";
  ctx.lineWidth = 0.35 * u;
  ctx.stroke();

  const iconX = x + 2.4 * u;
  const iconY = y + h * 0.5;
  ctx.beginPath();
  ctx.moveTo(iconX, iconY + 1.9 * u);
  ctx.lineTo(iconX + 2.2 * u, iconY - 2.3 * u);
  ctx.lineTo(iconX + 4.4 * u, iconY + 1.9 * u);
  ctx.closePath();
  ctx.strokeStyle = "#67e8f9";
  ctx.lineWidth = 0.42 * u;
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(iconX + 1.2 * u, iconY + 0.6 * u);
  ctx.lineTo(iconX + 2.2 * u, iconY - 0.8 * u);
  ctx.lineTo(iconX + 3.2 * u, iconY + 0.6 * u);
  ctx.strokeStyle = "rgba(238,248,248,.85)";
  ctx.lineWidth = 0.32 * u;
  ctx.stroke();

  ctx.textAlign = "left";
  ctx.fillStyle = "#67e8f9";
  ctx.font = `700 ${compact ? 1.55 * u : 1.8 * u}px Arial`;
  ctx.fillText("COMING SOON", x + 7.4 * u, y + (compact ? 3.0 : 2.8) * u);
  ctx.fillStyle = "#eef8f8";
  ctx.font = `900 ${compact ? 2.0 * u : 2.25 * u}px Arial`;
  ctx.fillText("FANCY", x + 7.4 * u, y + (compact ? 5.5 : 5.2) * u);
  ctx.font = `900 ${compact ? 1.65 * u : 1.9 * u}px Arial`;
  ctx.fillText("CAR WASH", x + 7.4 * u, y + (compact ? 7.6 : 7.2) * u);
}

function draw(canvas: HTMLCanvasElement, s: State) {
  const ctx = canvas.getContext("2d");
  if (!ctx) return;
  const ratio = Math.min(window.devicePixelRatio || 1, 2);
  const w = Math.floor(canvas.clientWidth * ratio);
  const h = Math.floor(canvas.clientHeight * ratio);
  if (canvas.width !== w || canvas.height !== h) { canvas.width = w; canvas.height = h; }

  ctx.imageSmoothingEnabled = true;
  ctx.imageSmoothingQuality = "high";

  const u = Math.min(w, h) / 100;
  const cx = w * 0.5 + Math.sin(s.currentX) * 4 * u;
  const base = h * 0.66 + Math.sin(s.currentY) * 2 * u;

  const bg = ctx.createLinearGradient(0, 0, 0, h);
  bg.addColorStop(0, "#082127");
  bg.addColorStop(1, "#02090b");
  ctx.fillStyle = bg;
  ctx.fillRect(0, 0, w, h);

  ctx.save();
  ctx.shadowColor = "rgba(0,0,0,.28)";
  ctx.shadowBlur = 1.8 * u;
  ctx.shadowOffsetY = 1.2 * u;

  // Distant neighboring building, for depth
  poly(ctx, [
    [cx - 50*u, base - 14*u],
    [cx - 21*u, base - 16*u],
    [cx - 21*u, base - 4*u],
    [cx - 50*u, base - 4*u]
  ], "#0b181c");

  // Background utility poles + wires
  [-48, -44, -40].forEach((x, i) => {
    line(ctx, [[cx + x*u, base - 50*u], [cx + x*u, base - 9*u]], "rgba(154,165,166,.5)", .55*u);
    line(ctx, [[cx + (x-5)*u, base + (-44+i)*u], [cx + (x+5)*u, base + (-44+i)*u]], "rgba(154,165,166,.4)", .45*u);
  });
  for (let i = 0; i < 5; i++) {
    line(ctx, [[cx - 50*u, base + (-46+i*2)*u], [cx + 49*u, base + (-22+i*2)*u]], "rgba(154,165,166,.18)", .3*u);
  }

  // Pavement / parking lot
  poly(ctx, [
    [cx - 49*u, base - 1*u],
    [cx + 30*u, base - 9*u],
    [cx + 49*u, base + 22*u],
    [cx - 41*u, base + 27*u]
  ], "#1a2324");

  // Building volume: front-biased box, dark office/sign wing on the left,
  // white wash-bay wing on the right
  const FBL: [number, number] = [cx - 46*u, base - 2*u];
  const FBR: [number, number] = [cx + 30*u, base - 10*u];
  const FTL: [number, number] = [cx - 46*u, base - 24*u];
  const FTR: [number, number] = [cx + 30*u, base - 32*u];
  const BTL: [number, number] = [cx - 40*u, base - 28*u];
  const BTR: [number, number] = [cx + 36*u, base - 36*u];
  const BBR: [number, number] = [cx + 36*u, base - 14*u];
  const split = 0.42;
  const divBottom = lerp(FBL, FBR, split);
  const divTop = lerp(FTL, FTR, split);

  poly(ctx, [FBR, BBR, BTR, FTR], "#070b0c");
  poly(ctx, [FTL, FTR, BTR, BTL], "#11171a", "rgba(255,255,255,.05)", .25*u);
  poly(ctx, [FBL, divBottom, divTop, FTL], "#171f21");
  poly(ctx, [divBottom, FBR, FTR, divTop], "#eef4f2");

  // Garage door
  ctx.fillStyle = "#050708";
  rr(ctx, cx - 42*u, base - 19*u, 16*u, 15*u, 1.1*u);
  ctx.fill();
  ctx.strokeStyle = "rgba(103,232,249,.2)";
  ctx.lineWidth = .3*u;
  ctx.stroke();

  // Primary "Coming Soon" sign panel, mounted above the garage
  drawFancyBadge(ctx, cx - 44*u, base - 28*u, 28*u, u);

  // White facade panels
  [-10, -3, 4, 11, 18, 25].forEach((x, i) => {
    ctx.fillStyle = i % 2 === 0 ? "#e3ebe9" : "#ffffff";
    ctx.fillRect(cx + x*u, base - 29*u, 5.5*u, 20*u);
  });

  // Roofline windows
  [22, 25.4].forEach((x) => {
    ctx.fillStyle = "#9fb4b6";
    rr(ctx, cx + x*u, base - 31.5*u, 2.4*u, 2.4*u, .4*u);
    ctx.fill();
  });

  // Entrance door
  ctx.fillStyle = "#10171a";
  rr(ctx, cx + 18*u, base - 17*u, 6*u, 11*u, .5*u);
  ctx.fill();
  line(ctx, [[cx + 21*u, base - 17*u], [cx + 21*u, base - 6*u]], "rgba(255,255,255,.12)", .25*u);

  // Wash-tunnel canopy, receding across the lot
  for (let i = 0; i < 5; i++) {
    const scale = 1 - i * 0.07;
    const x = cx + (27 + i * 5.5) * u;
    const y = base + (-7 - i * 0.8) * u;
    const ph = 14 * u * scale;
    const r = 4.5 * u * scale;
    line(ctx, [[x, y], [x, y - ph]], "rgba(239,249,248,.85)", .8*u*scale);
    ctx.beginPath();
    ctx.arc(x + r*0.6, y - ph + r*0.8, r, Math.PI, Math.PI*1.85);
    ctx.strokeStyle = "rgba(239,249,248,.9)";
    ctx.lineWidth = .8*u*scale;
    ctx.stroke();
    ctx.fillStyle = "#f1d247";
    rr(ctx, x + 0.3*u*scale, y - ph*0.4, 1.4*u*scale, 4*u*scale, .5*u*scale);
    ctx.fill();
  }

  // Landscape spheres along the front of the building
  ([
    [-40, 2, "#13191b"],
    [-34, 4, "#eef4f2"],
    [-28, 1.5, "#eef4f2"],
    [-22, 4, "#9aa3a1"],
    [-16, 2, "#eef4f2"],
    [-10, 4, "#13191b"]
  ] as Array<[number, number, string]>).forEach(([x, y, c]) => {
    ctx.beginPath();
    ctx.arc(cx + x*u, base + y*u, 3.8*u, 0, Math.PI*2);
    ctx.fillStyle = c;
    ctx.fill();
  });

  // Standalone monument sign near the road, in the foreground clear of the building
  drawFancyBadge(ctx, cx - 10*u, base + 6*u, 22*u, u, true);
  line(ctx, [[cx + 1*u, base + 15*u], [cx + 1*u, base + 21*u]], "rgba(154,165,166,.6)", 1.1*u);
  ctx.fillStyle = "#171f21";
  rr(ctx, cx - 1.5*u, base + 20*u, 5*u, 1.6*u, .5*u);
  ctx.fill();

  ctx.restore();
}

export function LocalBusinessSiteModel() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const state = useRef<State>({ currentX: 0, currentY: 0, targetX: 0, targetY: 0, drag: false, px: 0, py: 0, lastTime: 0 });

  useEffect(() => {
    let frame = 0;
    const loop = (time: number) => {
      const elapsed = state.current.lastTime ? Math.min(32, time - state.current.lastTime) : 16;
      state.current.lastTime = time;

      if (!state.current.drag) state.current.targetX += elapsed * 0.00045;
      const ease = 1 - Math.pow(0.001, elapsed / 1000);
      state.current.currentX += (state.current.targetX - state.current.currentX) * ease;
      state.current.currentY += (state.current.targetY - state.current.currentY) * ease;

      if (canvasRef.current) draw(canvasRef.current, state.current);
      frame = requestAnimationFrame(loop);
    };
    loop(0);
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
          <p className="max-w-xl text-sm font-light leading-6 text-white/50">A front-biased architectural study of the launch-stage property: wash entrance, branded sign panels, white facade panels, canopy rhythm, monument sign, pavement, and utility edge.</p>
        </div>
        <div className="relative min-h-[520px] overflow-hidden rounded-[1.5rem] border border-white/[0.08] bg-[#06171b] sm:min-h-[650px]">
          <canvas
            ref={canvasRef}
            className="h-full min-h-[520px] w-full touch-none cursor-grab active:cursor-grabbing sm:min-h-[650px]"
            aria-label="Interactive 3D-styled model of the Fancy Car Wash property concept"
            onPointerDown={(e) => { state.current.drag = true; state.current.px = e.clientX; state.current.py = e.clientY; }}
            onPointerMove={(e) => {
              if (!state.current.drag) return;
              state.current.targetX += (e.clientX - state.current.px) * .0032;
              state.current.targetY += (e.clientY - state.current.py) * .0024;
              state.current.targetY = Math.max(-.75, Math.min(.75, state.current.targetY));
              state.current.px = e.clientX;
              state.current.py = e.clientY;
            }}
            onPointerUp={() => { state.current.drag = false; }}
            onPointerCancel={() => { state.current.drag = false; }}
          />
          <div className="pointer-events-none absolute left-5 top-5 rounded-full border border-white/[0.08] bg-[#030c0f]/60 px-4 py-2 text-[10px] uppercase tracking-[0.16em] text-white/38 backdrop-blur-xl">Drag to rotate</div>
        </div>
      </div>
    </div>
  );
}
