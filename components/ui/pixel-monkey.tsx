export function PixelMonkey({ className }: { className?: string }) {
  const B = "#7C4A22";
  const F = "#C88040";
  const E = "#1A0A04";
  const M = "#5C2E10";

  return (
    <svg viewBox="0 0 40 64" shapeRendering="crispEdges" className={className} aria-hidden>
      {/* Head top */}
      <rect x="8" y="0" width="24" height="4" fill={B} />
      {/* Head */}
      <rect x="4" y="4" width="32" height="4" fill={B} />
      {/* Ears + head */}
      <rect x="0" y="8" width="4" height="4" fill={B} />
      <rect x="8" y="8" width="24" height="4" fill={B} />
      <rect x="36" y="8" width="4" height="4" fill={B} />
      {/* Face top */}
      <rect x="0" y="12" width="4" height="4" fill={B} />
      <rect x="8" y="12" width="24" height="4" fill={F} />
      <rect x="36" y="12" width="4" height="4" fill={B} />
      {/* Eyes row */}
      <rect x="0" y="16" width="4" height="4" fill={B} />
      <rect x="8" y="16" width="4" height="4" fill={F} />
      <rect x="12" y="16" width="4" height="4" fill={E} />
      <rect x="16" y="16" width="8" height="4" fill={F} />
      <rect x="24" y="16" width="4" height="4" fill={E} />
      <rect x="28" y="16" width="4" height="4" fill={F} />
      <rect x="36" y="16" width="4" height="4" fill={B} />
      {/* Nose */}
      <rect x="0" y="20" width="4" height="4" fill={B} />
      <rect x="8" y="20" width="24" height="4" fill={F} />
      <rect x="36" y="20" width="4" height="4" fill={B} />
      {/* Mouth */}
      <rect x="0" y="24" width="4" height="4" fill={B} />
      <rect x="8" y="24" width="8" height="4" fill={F} />
      <rect x="16" y="24" width="8" height="4" fill={M} />
      <rect x="24" y="24" width="8" height="4" fill={F} />
      <rect x="36" y="24" width="4" height="4" fill={B} />
      {/* Chin */}
      <rect x="8" y="28" width="24" height="4" fill={B} />
      {/* Neck */}
      <rect x="12" y="32" width="16" height="4" fill={B} />
      {/* Shoulders */}
      <rect x="4" y="36" width="32" height="4" fill={B} />
      {/* Arms out + body */}
      <rect x="0" y="40" width="8" height="8" fill={B} />
      <rect x="12" y="40" width="16" height="8" fill={B} />
      <rect x="32" y="40" width="8" height="8" fill={B} />
      {/* Lower body */}
      <rect x="12" y="48" width="16" height="8" fill={B} />
      {/* Legs */}
      <rect x="8" y="56" width="8" height="4" fill={B} />
      <rect x="24" y="56" width="8" height="4" fill={B} />
      {/* Feet */}
      <rect x="4" y="60" width="12" height="4" fill={B} />
      <rect x="24" y="60" width="12" height="4" fill={B} />
    </svg>
  );
}
