export function CarWashGuysSiteFlowDiagram() {
  return (
    <div className="relative overflow-hidden rounded-[2rem] border border-[#d99a3a]/[0.18] bg-[#0a0a0c] p-4 shadow-[0_30px_100px_rgba(0,0,0,0.32)] sm:p-6">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_12%,rgba(217,154,58,0.16),transparent_35%),radial-gradient(circle_at_82%_88%,rgba(217,154,58,0.08),transparent_42%)]" />
      <div className="relative space-y-5">
        <div>
          <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-[#d99a3a]">Site flow</p>
          <h3 className="mt-3 font-display text-3xl font-light tracking-[-0.04em] text-white/85 sm:text-4xl">Car Wash Guys</h3>
        </div>
        <div className="relative overflow-hidden rounded-[1.5rem] border border-white/[0.08] bg-[#11141d] p-4 sm:p-8">
          <svg viewBox="0 0 1000 620" role="img" aria-label="Car Wash Guys site flow with entrance at rear gate and exit at the sign side" className="h-auto w-full">
            <rect x="48" y="64" width="904" height="492" rx="38" fill="#161923" stroke="rgba(255,255,255,0.12)" />
            <rect x="124" y="98" width="154" height="424" rx="24" fill="#252833" />
            <rect x="334" y="112" width="194" height="394" rx="20" fill="#20232d" />
            <rect x="566" y="112" width="160" height="394" rx="20" fill="#2a2d36" />
            <rect x="746" y="112" width="92" height="394" rx="14" fill="#1d2029" />
            <rect x="760" y="434" width="64" height="52" rx="6" fill="#d99a3a" />
            <text x="792" y="464" textAnchor="middle" fill="#11141d" fontSize="18" fontWeight="700">SIGN</text>
            <path d="M 858 98 L 760 98 L 760 188 L 668 188 L 668 424 L 836 424" fill="none" stroke="#d99a3a" strokeWidth="14" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M 668 188 L 668 424" fill="none" stroke="#f8fafc" strokeWidth="10" strokeLinecap="round" />
            <path d="M 668 424 L 836 424" fill="none" stroke="#f8fafc" strokeWidth="10" strokeLinecap="round" />
            <path d="M 668 424 L 506 424 L 506 514" fill="none" stroke="#67e8f9" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" opacity="0.75" />
            <circle cx="858" cy="98" r="18" fill="#d99a3a" />
            <circle cx="836" cy="424" r="18" fill="#f8fafc" />
            <text x="858" y="60" textAnchor="middle" fill="#d99a3a" fontSize="22" fontWeight="600">Rear gate entrance</text>
            <text x="836" y="472" textAnchor="middle" fill="#f8fafc" fontSize="22" fontWeight="600">Exit by sign</text>
            <text x="506" y="552" textAnchor="middle" fill="#67e8f9" fontSize="19" fontWeight="500">Vacuum path</text>
          </svg>
        </div>
      </div>
    </div>
  );
}
