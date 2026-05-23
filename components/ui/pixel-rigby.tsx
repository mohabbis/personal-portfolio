export function PixelRigby({ className }: { className?: string }) {
  const R = "#9B6B3A"; // brown body
  const D = "#2D1A0A"; // dark raccoon mask
  const W = "#F0E8D8"; // white eyes inside mask
  const N = "#C88A52"; // lighter nose
  const L = "#5C3A18"; // darker legs/feet

  return (
    <svg viewBox="0 0 32 60" shapeRendering="crispEdges" className={className} aria-hidden>
      {/* Ears */}
      <rect x="4" y="0" width="4" height="4" fill={R} />
      <rect x="24" y="0" width="4" height="4" fill={R} />
      {/* Head top */}
      <rect x="8" y="4" width="16" height="4" fill={R} />
      {/* Head */}
      <rect x="4" y="8" width="24" height="4" fill={R} />
      {/* Mask top */}
      <rect x="0" y="12" width="8" height="4" fill={R} />
      <rect x="8" y="12" width="16" height="4" fill={D} />
      <rect x="24" y="12" width="8" height="4" fill={R} />
      {/* Eyes in mask */}
      <rect x="0" y="16" width="8" height="4" fill={R} />
      <rect x="8" y="16" width="4" height="4" fill={D} />
      <rect x="12" y="16" width="4" height="4" fill={W} />
      <rect x="16" y="16" width="4" height="4" fill={D} />
      <rect x="20" y="16" width="4" height="4" fill={W} />
      <rect x="24" y="16" width="4" height="4" fill={D} />
      <rect x="28" y="16" width="4" height="4" fill={R} />
      {/* Mask lower */}
      <rect x="0" y="20" width="8" height="4" fill={R} />
      <rect x="8" y="20" width="16" height="4" fill={D} />
      <rect x="24" y="20" width="8" height="4" fill={R} />
      {/* Nose / muzzle */}
      <rect x="0" y="24" width="12" height="4" fill={R} />
      <rect x="12" y="24" width="8" height="4" fill={N} />
      <rect x="20" y="24" width="12" height="4" fill={R} />
      {/* Chin */}
      <rect x="4" y="28" width="24" height="4" fill={R} />
      {/* Body */}
      <rect x="4" y="32" width="24" height="4" fill={R} />
      <rect x="0" y="36" width="32" height="8" fill={R} />
      <rect x="4" y="44" width="24" height="4" fill={R} />
      {/* Lower body */}
      <rect x="8" y="48" width="16" height="4" fill={R} />
      {/* Legs */}
      <rect x="8" y="52" width="16" height="4" fill={L} />
      {/* Feet */}
      <rect x="4" y="56" width="8" height="4" fill={L} />
      <rect x="20" y="56" width="8" height="4" fill={L} />
    </svg>
  );
}
