"use client";

import { useCallback, useState } from "react";

const modelDetails = ["Black-and-white facade", "Side wash bays", "Vacuum canopy", "Monument sign"];
const viewPresets = [
  { label: "Front", rx: 58, rz: -28 },
  { label: "Canopy", rx: 56, rz: -46 },
  { label: "Signage", rx: 60, rz: -12 }
];

export function LocalBusinessSiteModel() {
  const [rotation, setRotation] = useState({ rx: 58, rz: -28 });

  const handlePointerMove = useCallback((event: React.PointerEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;

    setRotation({
      rx: 56 + y * -10,
      rz: -28 + x * 34
    });
  }, []);

  return (
    <div className="relative overflow-hidden rounded-[2rem] border border-[#67e8f9]/[0.16] bg-[#041014] p-5 shadow-[0_30px_100px_rgba(0,0,0,0.32)] sm:p-8">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_12%,rgba(103,232,249,0.18),transparent_35%),radial-gradient(circle_at_82%_88%,rgba(6,182,212,0.10),transparent_42%)]" />
      <div className="relative grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
        <div>
          <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-[#67e8f9]">Interactive site model</p>
          <h3 className="mt-4 font-display text-3xl font-light tracking-[-0.04em] text-white/85 sm:text-4xl">
            A closer model of the property from the reference photos.
          </h3>
          <p className="mt-4 max-w-2xl text-sm font-light leading-7 text-white/62 sm:text-base sm:leading-8">
            This version maps the visible building, front wash entry, black-and-white paneling, long side bay rhythm, canopy arches, monument sign, utility edge, pavement, sidewalk, and landscape strip while keeping unfinished launch details private.
          </p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {modelDetails.map((detail) => (
              <div key={detail} className="rounded-2xl border border-white/[0.08] bg-white/[0.04] px-4 py-3 text-xs font-light tracking-[0.08em] text-white/50">
                {detail}
              </div>
            ))}
          </div>
          <div className="mt-6 flex flex-wrap gap-2">
            {viewPresets.map((preset) => (
              <button
                key={preset.label}
                type="button"
                onClick={() => setRotation({ rx: preset.rx, rz: preset.rz })}
                className="rounded-full border border-[#67e8f9]/20 bg-[#67e8f9]/[0.06] px-4 py-2 text-[10px] uppercase tracking-[0.16em] text-[#67e8f9]/70 transition hover:border-[#67e8f9]/40 hover:bg-[#67e8f9]/[0.12] hover:text-[#67e8f9]"
              >
                {preset.label}
              </button>
            ))}
          </div>
        </div>

        <div
          className="group relative min-h-[390px] cursor-grab overflow-hidden rounded-[1.5rem] border border-white/[0.08] bg-[#06171b] active:cursor-grabbing sm:min-h-[500px]"
          onPointerMove={handlePointerMove}
        >
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(103,232,249,0.09),transparent_42%),radial-gradient(circle_at_50%_100%,rgba(6,182,212,0.14),transparent_46%)]" />
          <div className="absolute left-0 top-0 h-full w-full bg-[linear-gradient(110deg,transparent_0_66%,rgba(255,255,255,0.05)_66%_67%,transparent_67%)]" />
          <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-[#020a0d] to-transparent" />

          <div className="absolute inset-0 flex items-center justify-center [perspective:1150px]">
            <div
              className="relative h-[300px] w-[540px] max-w-[92vw] transition-transform duration-300 ease-out [transform-style:preserve-3d] sm:h-[360px] sm:w-[650px]"
              style={{ transform: `rotateX(${rotation.rx}deg) rotateZ(${rotation.rz}deg)` }}
            >
              <div className="absolute left-1/2 top-1/2 h-[300px] w-[640px] -translate-x-1/2 -translate-y-1/2 rounded-[2rem] bg-[#192225] shadow-[0_38px_90px_rgba(0,0,0,0.48)] ring-1 ring-white/[0.08]" />
              <div className="absolute left-[18px] top-[224px] h-[42px] w-[590px] rounded-xl bg-[#202a2d] ring-1 ring-white/[0.05]" />
              <div className="absolute left-[4px] top-[272px] h-[18px] w-[610px] rounded-full bg-[#d8d1c3]/20" />
              <div className="absolute left-[0px] top-[298px] h-[18px] w-[610px] rounded-full bg-[#60714d]/60" />

              <div className="absolute left-[70px] top-[58px] h-[132px] w-[360px] rounded-[0.9rem] bg-[#101719] shadow-[18px_22px_0_rgba(2,10,13,0.50)] ring-1 ring-white/[0.08]">
                <div className="absolute left-0 top-0 h-full w-[74px] rounded-l-[0.9rem] bg-[#0b1012]" />
                <div className="absolute left-[86px] top-0 h-full w-[62px] bg-[#eef8f8]" />
                <div className="absolute left-[164px] top-0 h-full w-[62px] bg-[#101719]" />
                <div className="absolute left-[242px] top-0 h-full w-[62px] bg-[#eef8f8]" />
                <div className="absolute left-[22px] top-[22px] h-[34px] w-[152px] rounded-sm bg-[#071114] ring-1 ring-[#67e8f9]/20">
                  <div className="absolute left-4 top-2 h-1.5 w-24 rounded-full bg-[#67e8f9]" />
                  <div className="absolute left-4 top-5 h-1.5 w-28 rounded-full bg-white/80" />
                </div>
                <div className="absolute bottom-0 left-[24px] h-[62px] w-[112px] rounded-t-md bg-[#05090a] ring-1 ring-white/[0.08]" />
                <div className="absolute bottom-0 left-[180px] h-[58px] w-[58px] rounded-t bg-[#233033] ring-1 ring-white/[0.08]" />
                <div className="absolute bottom-0 left-[256px] h-[58px] w-[54px] rounded-t bg-[#233033] ring-1 ring-white/[0.08]" />
                <div className="absolute -right-5 top-9 h-24 w-8 rounded-md bg-[#eaf8f7] shadow-[0_14px_24px_rgba(0,0,0,0.30)]" />
              </div>

              <div className="absolute left-[270px] top-[160px] h-[70px] w-[280px] rounded-[0.8rem] bg-[#0d1416] shadow-[14px_20px_0_rgba(2,10,13,0.45)] ring-1 ring-white/[0.07]">
                <div className="absolute -top-9 left-4 right-4 h-10 rounded-t-[1rem] border-t-[6px] border-[#eef8f8]/90 bg-transparent" />
                {[0, 1, 2, 3, 4, 5].map((bay) => (
                  <div key={bay} className="absolute top-3 h-12 w-8 rounded-full border-2 border-[#dceaea]/80" style={{ left: `${18 + bay * 42}px` }} />
                ))}
                {[0, 1, 2, 3, 4, 5].map((post) => (
                  <div key={post} className="absolute top-0 h-20 w-1.5 bg-[#eef8f8]/80" style={{ left: `${30 + post * 42}px` }} />
                ))}
                {[0, 1, 2, 3, 4].map((bollard) => (
                  <div key={bollard} className="absolute top-8 h-8 w-3 rounded-full bg-[#f7d447]" style={{ left: `${50 + bollard * 42}px` }} />
                ))}
              </div>

              <div className="absolute left-[388px] top-[44px] h-[104px] w-[54px] rounded-md bg-[#eaf8f7] shadow-[12px_16px_0_rgba(0,0,0,0.34)] ring-1 ring-white/[0.08]">
                <div className="absolute inset-x-2 top-3 h-10 rounded-sm bg-[#101719]" />
                <div className="absolute left-3 top-8 h-1.5 w-8 rounded-full bg-[#67e8f9]" />
                <div className="absolute bottom-3 left-1/2 h-8 w-1 -translate-x-1/2 bg-[#101719]" />
              </div>

              {[0, 1, 2, 3, 4, 5, 6].map((sphere) => (
                <div
                  key={sphere}
                  className="absolute h-12 w-12 rounded-full shadow-[8px_12px_20px_rgba(0,0,0,0.26)] ring-1 ring-white/[0.05]"
                  style={{
                    left: `${124 + sphere * 33}px`,
                    top: `${178 + (sphere % 2) * 16}px`,
                    background: sphere % 3 === 0 ? "#121719" : sphere % 3 === 1 ? "#f0f5f4" : "#8b8f88"
                  }}
                />
              ))}

              {[0, 1, 2, 3, 4, 5].map((stripe) => (
                <div key={stripe} className="absolute h-1.5 w-40 rounded-full bg-white/12" style={{ left: `${96 + stripe * 68}px`, top: `${248 + (stripe % 2) * 14}px` }} />
              ))}

              {[0, 1, 2, 3, 4].map((shrub) => (
                <div key={shrub} className="absolute h-7 w-14 rounded-[50%] bg-[#5e7758] shadow-[0_8px_16px_rgba(0,0,0,0.22)]" style={{ left: `${70 + shrub * 96}px`, top: `${286 + (shrub % 2) * 12}px` }} />
              ))}

              {[0, 1, 2].map((pole) => (
                <div key={pole} className="absolute h-40 w-1.5 bg-[#9aa5a6]/80 shadow-[6px_8px_12px_rgba(0,0,0,0.25)]" style={{ left: `${42 + pole * 38}px`, top: `${10 + pole * 8}px` }}>
                  <div className="absolute -left-8 top-3 h-1 w-16 bg-[#9aa5a6]/70" />
                  <div className="absolute -left-4 top-8 h-1 w-12 bg-[#9aa5a6]/70" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
