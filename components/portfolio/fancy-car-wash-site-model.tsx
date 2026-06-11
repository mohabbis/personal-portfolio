export function FancyCarWashSiteModel() {
  const canopyBays = Array.from({ length: 5 });
  const laneLines = Array.from({ length: 6 });
  const shrubs = Array.from({ length: 9 });

  return (
    <div className="relative overflow-hidden rounded-[2rem] border border-[#67e8f9]/[0.18] bg-[#061114] shadow-[0_28px_90px_rgba(0,0,0,0.32)]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_26%_20%,rgba(103,232,249,0.18),transparent_34%),radial-gradient(circle_at_72%_78%,rgba(6,182,212,0.12),transparent_42%)]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#67e8f9]/40 to-transparent" />

      <div className="grid gap-8 p-6 sm:p-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:p-10">
        <div className="relative min-h-[360px] overflow-hidden rounded-[1.5rem] border border-white/[0.08] bg-[#07181c] sm:min-h-[430px]">
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(103,232,249,0.10),transparent_46%),radial-gradient(circle_at_50%_100%,rgba(6,182,212,0.16),transparent_48%)]" />
          <div className="absolute left-1/2 top-[54%] h-[260px] w-[760px] -translate-x-1/2 -translate-y-1/2 rounded-[50%] bg-[#d8e7e5]/[0.08] blur-2xl" />

          <div className="absolute inset-0 flex items-center justify-center [perspective:1150px]">
            <div className="relative h-[280px] w-[430px] max-w-[88vw] animate-[siteModelDrift_14s_ease-in-out_infinite] [transform-style:preserve-3d] [transform:rotateX(58deg)_rotateZ(-34deg)] sm:h-[330px] sm:w-[520px]">
              <div className="absolute left-1/2 top-1/2 h-[270px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-[2rem] border border-white/[0.08] bg-[#172126] shadow-[0_36px_80px_rgba(0,0,0,0.42)] sm:h-[315px] sm:w-[590px]" />

              <div className="absolute left-[32px] top-[46px] h-[116px] w-[330px] rounded-[1.1rem] bg-[#11181c] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.07),0_24px_42px_rgba(0,0,0,0.30)] sm:left-[52px] sm:top-[54px] sm:h-[136px] sm:w-[390px]">
                <div className="absolute inset-x-5 top-4 h-8 rounded-[0.7rem] bg-[#f3fbfb] shadow-[0_8px_24px_rgba(255,255,255,0.10)]" />
                <div className="absolute left-7 top-6 h-2 w-28 rounded-full bg-[#11181c]" />
                <div className="absolute left-7 top-10 h-2 w-20 rounded-full bg-[#67e8f9]/70" />
                <div className="absolute bottom-4 left-7 grid grid-cols-4 gap-2">
                  {[0, 1, 2, 3].map((bay) => (
                    <span key={bay} className="h-9 w-12 rounded-[0.45rem] border border-[#67e8f9]/20 bg-[#061114] shadow-[inset_0_8px_18px_rgba(103,232,249,0.08)]" />
                  ))}
                </div>
                <div className="absolute -right-5 top-8 h-20 w-8 rounded-md bg-[#f7fbfa] shadow-[0_16px_28px_rgba(0,0,0,0.24)]" />
              </div>

              <div className="absolute left-[72px] top-[202px] h-42 w-[330px] rounded-[1rem] bg-[#0c1518] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.06),0_18px_34px_rgba(0,0,0,0.26)] sm:left-[98px] sm:top-[230px] sm:w-[390px]">
                <div className="absolute -top-5 left-4 right-4 h-7 rounded-t-[0.8rem] bg-[#f5fbfa] shadow-[0_14px_24px_rgba(0,0,0,0.16)]" />
                <div className="absolute inset-x-7 top-4 flex justify-between">
                  {canopyBays.map((_, bay) => (
                    <span key={bay} className="h-16 w-3 rounded-full bg-[#e6f4f4] shadow-[0_0_14px_rgba(103,232,249,0.18)]" />
                  ))}
                </div>
                <div className="absolute inset-x-8 bottom-4 flex justify-between">
                  {canopyBays.map((_, bay) => (
                    <span key={bay} className="h-8 w-8 rounded-full border border-[#67e8f9]/20 bg-[#11181c] shadow-[inset_0_0_16px_rgba(103,232,249,0.12)]" />
                  ))}
                </div>
              </div>

              <div className="absolute left-[18px] top-[192px] h-4 w-[420px] rounded-full bg-[#e7f8f8]/15 sm:left-[36px] sm:w-[478px]" />
              <div className="absolute left-[22px] top-[216px] grid h-[70px] w-[410px] grid-cols-6 gap-4 sm:left-[42px] sm:w-[468px]">
                {laneLines.map((_, line) => (
                  <span key={line} className="h-px self-center bg-[#67e8f9]/20" />
                ))}
              </div>

              <div className="absolute right-[28px] top-[34px] h-24 w-14 rounded-[0.8rem] bg-[#eaf8f7] shadow-[0_16px_26px_rgba(0,0,0,0.26)] sm:right-[48px]">
                <div className="absolute inset-x-2 top-3 h-3 rounded-full bg-[#11181c]" />
                <div className="absolute inset-x-3 top-9 h-2 rounded-full bg-[#67e8f9]" />
                <div className="absolute inset-x-3 top-14 h-2 rounded-full bg-[#11181c]/70" />
              </div>

              {shrubs.map((_, shrub) => (
                <span
                  key={shrub}
                  className="absolute h-5 w-8 rounded-[50%] bg-[#4f6f5a] shadow-[0_8px_16px_rgba(0,0,0,0.20)]"
                  style={{
                    left: `${18 + ((shrub * 49) % 415)}px`,
                    top: `${18 + ((shrub * 73) % 265)}px`
                  }}
                />
              ))}
            </div>
          </div>

          <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between gap-4 rounded-full border border-white/[0.08] bg-[#030c0f]/70 px-4 py-3 backdrop-blur-xl">
            <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-white/38">Interactive-style site study</p>
            <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-[#67e8f9]/75">Under construction</p>
          </div>
        </div>

        <div>
          <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-[#67e8f9]">3D Site Visualization</p>
          <h3 className="mt-4 font-display text-3xl font-light tracking-[-0.04em] text-white/88 sm:text-4xl">
            A spatial brand system for a business still being built.
          </h3>
          <p className="mt-5 text-base font-light leading-8 text-white/66">
            The model frames the property as a design asset instead of pretending the work is finished. It uses simplified massing, wash-bay structure, canopy rhythm, signage, pavement, and landscape zones to show how brand, web, and physical customer experience can develop together.
          </p>
          <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
            {[
              "Building massing",
              "Canopy rhythm",
              "Signage system",
              "Launch-stage polish"
            ].map((item) => (
              <div key={item} className="rounded-2xl border border-white/[0.08] bg-white/[0.04] px-4 py-3 text-sm font-light text-white/58">
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes siteModelDrift {
          0%, 100% { transform: rotateX(58deg) rotateZ(-34deg) translateY(0); }
          50% { transform: rotateX(58deg) rotateZ(-28deg) translateY(-8px); }
        }
      `}</style>
    </div>
  );
}
