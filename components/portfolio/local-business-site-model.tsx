"use client";

import { useEffect, useRef, useState } from "react";

type HitRegion = { id: string; x: number; y: number; w: number; h: number };

type State = {
  currentX: number;
  currentY: number;
  targetX: number;
  targetY: number;
  drag: boolean;
  px: number;
  py: number;
  downX: number;
  downY: number;
  lastTime: number;
  hitRegions: HitRegion[];
};

const INFO_COPY: Record<string, { title: string; body: string }> = {
  logo: {
    title: "Fancy Car Wash — primary sign",
    body: "The launch identity mounted above the wash entrance: a navy car under a light-blue spray, paired with the italic Fancy Car Wash wordmark."
  },
  monument: {
    title: "Monument sign",
    body: "A roadside repeat of the brand mark, kept legible from the street while construction and final photography come online."
  },
  "vacuum-1": {
    title: "Self-serve vacuum bay",
    body: "Part of the finishing area in front of the wash — customers vacuum interiors after their wash cycle."
  },
  "vacuum-2": {
    title: "Self-serve vacuum bay",
    body: "A second vacuum island, spaced for easy pull-through and queueing during busy hours."
  },
  "vacuum-3": {
    title: "Self-serve vacuum bay",
    body: "The third vacuum bay, closing out the finishing row near the lot edge."
  },
  tunnel: {
    title: "Wash tunnel & garage door",
    body: "The tunnel entrance, complete with rollover door and interior brush rollers visible just past the threshold."
  }
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

function drawFancyBadge(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  w: number,
  u: number,
  logo: HTMLImageElement | null,
  compact = false
) {
  const h = compact ? 9 * u : 8 * u;
  rr(ctx, x, y, w, h, 0.9 * u);
  ctx.fillStyle = "#001b44";
  ctx.fill();
  ctx.strokeStyle = "rgba(69,153,195,.5)";
  ctx.lineWidth = 0.35 * u;
  ctx.stroke();

  ctx.textAlign = "left";
  ctx.fillStyle = "#4599c3";
  ctx.font = `700 ${compact ? 1.4 * u : 1.6 * u}px Arial`;
  ctx.fillText("COMING SOON", x + 1.4 * u, y + (compact ? 2.0 : 1.9) * u);

  // Logo plate hosting the real Fancy Car Wash mark
  const plateX = x + 1.2 * u;
  const plateY = y + (compact ? 2.6 : 2.5) * u;
  const plateW = w - 2.4 * u;
  const plateH = h - (compact ? 3.8 : 3.7) * u;
  rr(ctx, plateX, plateY, plateW, plateH, 0.5 * u);
  ctx.fillStyle = "#f7efe3";
  ctx.fill();

  if (logo && logo.complete && logo.naturalWidth > 0) {
    const ratio = logo.naturalWidth / logo.naturalHeight;
    const padding = 0.6 * u;
    const availW = plateW - padding * 2;
    const availH = plateH - padding * 2;
    let dw = availW;
    let dh = availW / ratio;
    if (dh > availH) {
      dh = availH;
      dw = availH * ratio;
    }
    const dx = plateX + (plateW - dw) / 2;
    const dy = plateY + (plateH - dh) / 2;
    ctx.drawImage(logo, dx, dy, dw, dh);
  }

  return { x, y, w, h };
}

function drawVacuum(ctx: CanvasRenderingContext2D, x: number, y: number, u: number) {
  // Pedestal
  ctx.fillStyle = "#0c1416";
  rr(ctx, x - 2 * u, y - 7 * u, 4 * u, 7 * u, 0.6 * u);
  ctx.fill();
  ctx.strokeStyle = "rgba(69,153,195,.4)";
  ctx.lineWidth = 0.25 * u;
  ctx.stroke();
  // Brand stripe
  ctx.fillStyle = "#4599c3";
  rr(ctx, x - 2 * u, y - 7 * u, 4 * u, 1.4 * u, 0.6 * u);
  ctx.fill();
  // Hose
  ctx.beginPath();
  ctx.moveTo(x + 2 * u, y - 5 * u);
  ctx.quadraticCurveTo(x + 4.5 * u, y - 4 * u, x + 4 * u, y - 1.5 * u);
  ctx.strokeStyle = "#1c2a2d";
  ctx.lineWidth = 0.7 * u;
  ctx.lineCap = "round";
  ctx.stroke();
  // Nozzle
  ctx.fillStyle = "#9aa3a1";
  rr(ctx, x + 3.4 * u, y - 1.8 * u, 1.4 * u, 1 * u, 0.3 * u);
  ctx.fill();

  return { x: x - 2.5 * u, y: y - 7.5 * u, w: 7 * u, h: 6.5 * u };
}

function draw(canvas: HTMLCanvasElement, s: State, logo: HTMLImageElement | null) {
  const ctx = canvas.getContext("2d");
  if (!ctx) return;
  const ratio = Math.min(window.devicePixelRatio || 1, 2);
  const w = Math.floor(canvas.clientWidth * ratio);
  const h = Math.floor(canvas.clientHeight * ratio);
  if (canvas.width !== w || canvas.height !== h) { canvas.width = w; canvas.height = h; }

  ctx.imageSmoothingEnabled = true;
  ctx.imageSmoothingQuality = "high";

  s.hitRegions = [];

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

  // Garage door / wash tunnel entrance
  ctx.fillStyle = "#050708";
  rr(ctx, cx - 42*u, base - 19*u, 16*u, 15*u, 1.1*u);
  ctx.fill();
  ctx.strokeStyle = "rgba(69,153,195,.3)";
  ctx.lineWidth = .3*u;
  ctx.stroke();

  // Recessed tunnel mouth
  const tunnelGrad = ctx.createLinearGradient(cx - 41*u, base - 17.5*u, cx - 41*u, base - 5*u);
  tunnelGrad.addColorStop(0, "#000000");
  tunnelGrad.addColorStop(1, "#0c1416");
  ctx.fillStyle = tunnelGrad;
  rr(ctx, cx - 40.5*u, base - 17.5*u, 13*u, 12*u, .8*u);
  ctx.fill();

  // Door slats
  for (let i = 1; i < 5; i++) {
    line(ctx, [[cx - 40.5*u, base - 17.5*u + i*2.4*u], [cx - 27.5*u, base - 17.5*u + i*2.4*u]], "rgba(69,153,195,.12)", .25*u);
  }

  // Brush rollers visible just inside the tunnel
  ctx.fillStyle = "#4599c3";
  rr(ctx, cx - 39*u, base - 16.5*u, 1.6*u, 9.5*u, .8*u);
  ctx.fill();
  rr(ctx, cx - 30*u, base - 16.5*u, 1.6*u, 9.5*u, .8*u);
  ctx.fill();

  s.hitRegions.push({ id: "tunnel", x: cx - 42*u, y: base - 19*u, w: 16*u, h: 15*u });

  // Primary "Coming Soon" sign panel, mounted above the garage
  const mainBadge = drawFancyBadge(ctx, cx - 44*u, base - 28*u, 28*u, u, logo);
  s.hitRegions.push({ id: "logo", ...mainBadge });

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

  // Self-serve vacuum bays along the front of the lot
  ([
    [-35, 22],
    [-27, 19],
    [-19, 16]
  ] as Array<[number, number]>).forEach(([x, y], i) => {
    const region = drawVacuum(ctx, cx + x*u, base + y*u, u);
    s.hitRegions.push({ id: `vacuum-${i + 1}`, ...region });
  });

  // Standalone monument sign near the road, in the foreground clear of the building
  const monumentBadge = drawFancyBadge(ctx, cx - 10*u, base + 6*u, 22*u, u, logo, true);
  s.hitRegions.push({ id: "monument", ...monumentBadge });
  line(ctx, [[cx + 1*u, base + 15*u], [cx + 1*u, base + 21*u]], "rgba(154,165,166,.6)", 1.1*u);
  ctx.fillStyle = "#171f21";
  rr(ctx, cx - 1.5*u, base + 20*u, 5*u, 1.6*u, .5*u);
  ctx.fill();

  ctx.restore();
}

function getCanvasPoint(canvas: HTMLCanvasElement, clientX: number, clientY: number) {
  const rect = canvas.getBoundingClientRect();
  return {
    x: (clientX - rect.left) * (canvas.width / rect.width),
    y: (clientY - rect.top) * (canvas.height / rect.height)
  };
}

function hitTest(regions: HitRegion[], x: number, y: number) {
  for (let i = regions.length - 1; i >= 0; i--) {
    const r = regions[i];
    if (x >= r.x && x <= r.x + r.w && y >= r.y && y <= r.y + r.h) return r.id;
  }
  return null;
}

export function LocalBusinessSiteModel() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const logoRef = useRef<HTMLImageElement | null>(null);
  const state = useRef<State>({
    currentX: 0,
    currentY: 0,
    targetX: 0,
    targetY: 0,
    drag: false,
    px: 0,
    py: 0,
    downX: 0,
    downY: 0,
    lastTime: 0,
    hitRegions: []
  });
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    const img = new window.Image();
    img.src = "/images/projects/fancy-car-wash-logo.svg";
    logoRef.current = img;
  }, []);

  useEffect(() => {
    let frame = 0;
    const loop = (time: number) => {
      const elapsed = state.current.lastTime ? Math.min(32, time - state.current.lastTime) : 16;
      state.current.lastTime = time;

      if (!state.current.drag) state.current.targetX += elapsed * 0.00045;
      const ease = 1 - Math.pow(0.001, elapsed / 1000);
      state.current.currentX += (state.current.targetX - state.current.currentX) * ease;
      state.current.currentY += (state.current.targetY - state.current.currentY) * ease;

      if (canvasRef.current) draw(canvasRef.current, state.current, logoRef.current);
      frame = requestAnimationFrame(loop);
    };
    loop(0);
    return () => cancelAnimationFrame(frame);
  }, []);

  const activeInfo = activeId ? INFO_COPY[activeId] : null;

  return (
    <div className="relative overflow-hidden rounded-[2rem] border border-[#67e8f9]/[0.16] bg-[#041014] p-4 shadow-[0_30px_100px_rgba(0,0,0,0.32)] sm:p-6">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_12%,rgba(103,232,249,0.18),transparent_35%),radial-gradient(circle_at_82%_88%,rgba(6,182,212,0.10),transparent_42%)]" />
      <div className="relative space-y-5">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-[#67e8f9]">Interactive property model</p>
            <h3 className="mt-3 font-display text-3xl font-light tracking-[-0.04em] text-white/85 sm:text-4xl">Fancy Car Wash site massing</h3>
          </div>
          <p className="max-w-xl text-sm font-light leading-6 text-white/50">A front-biased architectural study of the launch-stage property: wash entrance and tunnel, branded sign panels, white facade panels, canopy rhythm, vacuum bays, monument sign, pavement, and utility edge. Tap the signage, vacuums, or tunnel for details.</p>
        </div>
        <div className="relative min-h-[520px] overflow-hidden rounded-[1.5rem] border border-white/[0.08] bg-[#06171b] sm:min-h-[650px]">
          <canvas
            ref={canvasRef}
            className="h-full min-h-[520px] w-full touch-none cursor-grab active:cursor-grabbing sm:min-h-[650px]"
            aria-label="Interactive 3D-styled model of the Fancy Car Wash property concept"
            onPointerDown={(e) => {
              state.current.drag = true;
              state.current.px = e.clientX;
              state.current.py = e.clientY;
              state.current.downX = e.clientX;
              state.current.downY = e.clientY;
            }}
            onPointerMove={(e) => {
              if (!state.current.drag) return;
              state.current.targetX += (e.clientX - state.current.px) * .0032;
              state.current.targetY += (e.clientY - state.current.py) * .0024;
              state.current.targetY = Math.max(-.75, Math.min(.75, state.current.targetY));
              state.current.px = e.clientX;
              state.current.py = e.clientY;
            }}
            onPointerUp={(e) => {
              state.current.drag = false;
              const moved = Math.hypot(e.clientX - state.current.downX, e.clientY - state.current.downY);
              if (moved > 6 || !canvasRef.current) return;
              const point = getCanvasPoint(canvasRef.current, e.clientX, e.clientY);
              const hit = hitTest(state.current.hitRegions, point.x, point.y);
              setActiveId(hit);
            }}
            onPointerCancel={() => { state.current.drag = false; }}
          />
          <div className="pointer-events-none absolute left-5 top-5 rounded-full border border-white/[0.08] bg-[#030c0f]/60 px-4 py-2 text-[10px] uppercase tracking-[0.16em] text-white/38 backdrop-blur-xl">Drag to rotate &middot; tap to inspect</div>
          {activeInfo ? (
            <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-[#67e8f9]/20 bg-[#030c0f]/85 p-4 backdrop-blur-xl sm:max-w-sm">
              <div className="flex items-start justify-between gap-3">
                <p className="text-xs font-medium uppercase tracking-[0.14em] text-[#67e8f9]">{activeInfo.title}</p>
                <button
                  type="button"
                  onClick={() => setActiveId(null)}
                  aria-label="Close"
                  className="text-white/40 transition-colors hover:text-white/80"
                >
                  &times;
                </button>
              </div>
              <p className="mt-2 text-sm font-light leading-6 text-white/65">{activeInfo.body}</p>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
