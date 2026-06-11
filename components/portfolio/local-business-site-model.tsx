export function LocalBusinessSiteModel() {
  const details = ["Brand facade", "Service flow", "Vacuum canopy", "Launch-ready web system"];

  return (
    <div className="relative overflow-hidden rounded-[2rem] border border-[#67e8f9]/[0.16] bg-[#041014] p-5 sm:p-8">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_12%,rgba(103,232,249,0.18),transparent_35%),radial-gradient(circle_at_82%_88%,rgba(6,182,212,0.10),transparent_42%)]" />
      <div className="relative grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div>
          <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-[#67e8f9]">Site visualization</p>
          <h3 className="mt-4 font-display text-3xl font-light tracking-[-0.04em] text-white/85 sm:text-4xl">
            A construction-stage property model for the brand system.
          </h3>
          <p className="mt-4 max-w-2xl text-sm font-light leading-7 text-white/62 sm:text-base sm:leading-8">
            A stylized architectural model that shows the business before final launch photography exists. It keeps the case study polished without publishing an address or linking to unfinished work.
          </p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {details.map((detail) => (
              <div key={detail} className="rounded-2xl border border-white/[0.08] bg-white/[0.04] px-4 py-3 text-xs font-light tracking-[0.08em] text-white/50">
                {detail}
              </div>
            ))}
          </div>
        </div>

        <div className="relative min-h-[360px] overflow-hidden rounded-[1.5rem] border border-white/[0.08] bg-[#06171b]">
          <div className="absolute left-1/2 top-1/2 h-[250px] w-[360px] -translate-x-1/2 -translate-y-1/2 rotate-[-10deg] rounded-[2rem] bg-[#171f20] ring-1 ring-white/[0.08]" />
          <div className="absolute left-[28%] top-[35%] h-20 w-40 rotate-[-10deg] rounded-md bg-[#e8f9fc]">
            <div className="absolute inset-x-0 top-0 h-4 rounded-t-md bg-[#111719]" />
            <div className="absolute left-4 top-7 h-7 w-28 rounded-sm bg-[#101719]" />
            <div className="absolute left-6 top-9 h-1.5 w-20 rounded-full bg-[#67e8f9]" />
            <div className="absolute bottom-0 left-5 h-7 w-7 rounded-t-sm bg-[#263235]" />
            <div className="absolute bottom-0 right-7 h-7 w-9 rounded-t-sm bg-[#263235]" />
          </div>
          <div className="absolute left-[49%] top-[45%] h-10 w-36 rotate-[-10deg] rounded bg-[#0f1517]">
            <div className="absolute -top-2 left-0 right-0 h-2 rounded-t bg-[#e8f9fc]" />
            <div className="absolute left-4 top-3 h-1.5 w-24 rounded-full bg-[#67e8f9]/80" />
            <div className="absolute -bottom-6 left-5 h-6 w-1.5 bg-[#e8f9fc]/80" />
            <div className="absolute -bottom-6 right-5 h-6 w-1.5 bg-[#e8f9fc]/80" />
          </div>
          <div className="absolute right-[21%] top-[31%] h-24 w-11 rotate-[-10deg] rounded-md bg-[#e8f9fc]">
            <div className="absolute inset-x-1 top-2 h-9 rounded-sm bg-[#101719]" />
            <div className="absolute left-2 top-5 h-1 w-7 rounded-full bg-[#67e8f9]" />
            <div className="absolute bottom-3 left-1/2 h-8 w-1 -translate-x-1/2 bg-[#101719]" />
          </div>
          <div className="absolute left-[19%] top-[66%] h-2 w-52 rotate-[-10deg] rounded-full bg-white/12" />
          <div className="absolute left-[22%] top-[71%] h-2 w-44 rotate-[-10deg] rounded-full bg-white/8" />
          <div className="absolute bottom-6 left-6 rounded-full border border-[#67e8f9]/20 bg-[#67e8f9]/[0.07] px-4 py-2 text-[10px] uppercase tracking-[0.18em] text-[#67e8f9]/70">
            Concept model
          </div>
        </div>
      </div>
    </div>
  );
}
