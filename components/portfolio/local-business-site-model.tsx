"use client";

import { useEffect, useRef } from "react";

type State = { x: number; y: number; drag: boolean; px: number; py: number };

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

function draw(canvas: HTMLCanvasElement, s: State) {
  const ctx = canvas.getContext("2d");
  if (!ctx) return;
  const ratio = window.devicePixelRatio || 1;
  const w = Math.floor(canvas.clientWidth * ratio);
  const h = Math.floor(canvas.clientHeight * ratio);
  if (canvas.width !== w || canvas.height !== h) { canvas.width = w; canvas.height = h; }

  const u = Math.min(w, h) / 100;
  const cx = w * 0.5 + Math.sin(s.x) * 4 * u;
  const base = h * 0.66 + Math.sin(s.y) * 2 * u;

  const bg = ctx.createLinearGradient(0, 0, 0, h);
  bg.addColorStop(0, "#082127");
  bg.addColorStop(1, "#02090b");
  ctx.fillStyle = bg;
  ctx.fillRect(0, 0, w, h);

  ctx.fillStyle = "#1a2324";
  ctx.beginPath();
  ctx.moveTo(cx - 52*u, base - 2*u);
  ctx.lineTo(cx + 50*u, base - 12*u);
  ctx.lineTo(cx + 56*u, base + 20*u);
  ctx.lineTo(cx - 44*u, base + 27*u);
  ctx.closePath();
  ctx.fill();

  ctx.fillStyle = "#0d1315";
  ctx.beginPath();
  ctx.moveTo(cx - 45*u, base - 30*u);
  ctx.lineTo(cx + 8*u, base - 36*u);
  ctx.lineTo(cx + 14*u, base - 6*u);
  ctx.lineTo(cx - 41*u, base - 1*u);
  ctx.closePath();
  ctx.fill();
  ctx.strokeStyle = "rgba(255,255,255,.12)";
  ctx.stroke();

  ctx.fillStyle = "#050708";
  rr(ctx, cx - 42*u, base - 22*u, 18*u, 16*u, 1.2*u);
  ctx.fill();
  ctx.strokeStyle = "rgba(103,232,249,.25)";
  ctx.stroke();

  ctx.fillStyle = "#111719";
  rr(ctx, cx - 42*u, base - 34*u, 26*u, 8*u, 1*u);
  ctx.fill();
  ctx.fillStyle = "#67e8f9";
  ctx.fillRect(cx - 38*u, base - 31*u, 18*u, 1.2*u);
  ctx.fillStyle = "#eef8f8";
  ctx.fillRect(cx - 36*u, base - 28.6*u, 14*u, 1.2*u);

  [-15, -5, 5].forEach((x, i) => {
    ctx.fillStyle = i === 1 ? "#101719" : "#edf8f8";
    ctx.beginPath();
    ctx.moveTo(cx + x*u, base - 33*u);
    ctx.lineTo(cx + (x+8)*u, base - 34*u);
    ctx.lineTo(cx + (x+8)*u, base - 8*u);
    ctx.lineTo(cx + x*u, base - 7*u);
    ctx.closePath();
    ctx.fill();
  });

  for (let row = 0; row < 3; row++) for (let col = 0; col < 3; col++) {
    ctx.fillStyle = "#b7c8c6";
    ctx.fillRect(cx + (7 + col*2)*u, base + (-21 + row*2.4)*u, 1.4*u, 1.4*u);
  }

  const startX = cx + 10*u;
  const startY = base - 18*u;
  for (let i = 0; i < 9; i++) {
    const x = startX + i*6*u;
    const y = startY - i*0.8*u;
    line(ctx, [[x, y + 18*u], [x, y + 1*u]], "rgba(239,249,248,.82)", .75*u);
    ctx.beginPath();
    ctx.arc(x + 3*u, y + 4*u, 5*u, Math.PI, Math.PI*1.78);
    ctx.strokeStyle = "rgba(239,249,248,.9)";
    ctx.lineWidth = .75*u;
    ctx.stroke();
    ctx.fillStyle = "#f1d247";
    rr(ctx, x + 1*u, y + 13*u, 1.5*u, 4.3*u, .5*u);
    ctx.fill();
  }

  [[-35,2,"#121719"],[-30,4,"#eef4f2"],[-25,2,"#858a85"],[-20,5,"#eef4f2"],[-10,5,"#eef4f2"],[-5,3,"#121719"]].forEach(([x,y,c]) => {
    ctx.beginPath();
    ctx.arc(cx + Number(x)*u, base + Number(y)*u, 4.2*u, 0, Math.PI*2);
    ctx.fillStyle = String(c);
    ctx.fill();
  });

  ctx.fillStyle = "#eaf8f7";
  rr(ctx, cx + 39*u, base - 37*u, 9*u, 19*u, .8*u);
  ctx.fill();
  ctx.fillStyle = "#0b1112";
  rr(ctx, cx + 40*u, base - 33*u, 7*u, 9*u, .4*u);
  ctx.fill();
  ctx.fillStyle = "#67e8f9";
  ctx.fillRect(cx + 41*u, base - 30*u, 5*u, 1*u);

  [-50,-45,-40].forEach((x, i) => {
    line(ctx, [[cx + x*u, base - 56*u], [cx + x*u, base - 18*u]], "rgba(154,165,166,.75)", .6*u);
    line(ctx, [[cx + (x-6)*u, base + (-48+i)*u], [cx + (x+6)*u, base + (-48+i)*u]], "rgba(154,165,166,.6)", .5*u);
  });
  for (let i=0; i<5; i++) line(ctx, [[cx - 57*u, base + (-53+i*2)*u], [cx + 58*u, base + (-31+i*2)*u]], "rgba(154,165,166,.25)", .32*u);
}

export function LocalBusinessSiteModel() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const state = useRef<State>({ x: 0, y: 0, drag: false, px: 0, py: 0 });

  useEffect(() => {
    let frame = 0;
    const loop = () => {
      if (canvasRef.current) {
        if (!state.current.drag) state.current.x += 0.003;
        draw(canvasRef.current, state.current);
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
          <p className="max-w-xl text-sm font-light leading-6 text-white/50">A front-biased architectural study of the launch-stage property: wash entrance, sign band, white facade panels, canopy rhythm, monument sign, pavement, and utility edge.</p>
        </div>
        <div className="relative min-h-[520px] overflow-hidden rounded-[1.5rem] border border-white/[0.08] bg-[#06171b] sm:min-h-[650px]">
          <canvas
            ref={canvasRef}
            className="h-full min-h-[520px] w-full touch-none cursor-grab active:cursor-grabbing sm:min-h-[650px]"
            aria-label="Interactive 3D-styled model of the Fancy Car Wash property concept"
            onPointerDown={(e) => { state.current.drag = true; state.current.px = e.clientX; state.current.py = e.clientY; }}
            onPointerMove={(e) => {
              if (!state.current.drag) return;
              state.current.x += (e.clientX - state.current.px) * .004;
              state.current.y += (e.clientY - state.current.py) * .003;
              state.current.y = Math.max(-.75, Math.min(.75, state.current.y));
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
