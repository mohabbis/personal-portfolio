export function PixelMordecai({ className }: { className?: string }) {
  const K = "#111827"; // black head
  const W = "#F0F0F0"; // white eye area
  const E = "#111827"; // dark pupil (same as K, renders on white bg)
  const bk = "#F59E0B"; // orange beak
  const U = "#3B82F6"; // blue body
  const C = "#E5E7EB"; // white chest
  const L = "#374151"; // dark legs

  return (
    <svg viewBox="0 0 32 64" shapeRendering="crispEdges" className={className} aria-hidden>
      {/* Crest */}
      <rect x="8" y="0" width="16" height="4" fill={K} />
      {/* Head */}
      <rect x="4" y="4" width="24" height="4" fill={K} />
      {/* Full head + cheeks */}
      <rect x="0" y="8" width="32" height="4" fill={K} />
      {/* White eye band */}
      <rect x="0" y="12" width="4" height="4" fill={K} />
      <rect x="4" y="12" width="24" height="4" fill={W} />
      <rect x="28" y="12" width="4" height="4" fill={K} />
      {/* Eyes */}
      <rect x="0" y="16" width="4" height="4" fill={K} />
      <rect x="4" y="16" width="8" height="4" fill={W} />
      <rect x="12" y="16" width="4" height="4" fill={E} />
      <rect x="16" y="16" width="4" height="4" fill={W} />
      <rect x="20" y="16" width="4" height="4" fill={E} />
      <rect x="24" y="16" width="4" height="4" fill={W} />
      <rect x="28" y="16" width="4" height="4" fill={K} />
      {/* Beak */}
      <rect x="8" y="20" width="4" height="4" fill={K} />
      <rect x="12" y="20" width="8" height="4" fill={bk} />
      <rect x="20" y="20" width="4" height="4" fill={K} />
      {/* Blue neck */}
      <rect x="8" y="24" width="16" height="4" fill={U} />
      {/* Body top */}
      <rect x="4" y="28" width="24" height="4" fill={U} />
      {/* Chest rows */}
      <rect x="4" y="32" width="4" height="8" fill={U} />
      <rect x="8" y="32" width="16" height="8" fill={C} />
      <rect x="24" y="32" width="4" height="8" fill={U} />
      {/* Full body width */}
      <rect x="0" y="40" width="8" height="4" fill={U} />
      <rect x="8" y="40" width="16" height="4" fill={C} />
      <rect x="24" y="40" width="8" height="4" fill={U} />
      {/* Lower blue body */}
      <rect x="8" y="44" width="16" height="4" fill={U} />
      {/* Legs */}
      <rect x="8" y="48" width="16" height="8" fill={L} />
      {/* Feet */}
      <rect x="4" y="56" width="8" height="4" fill={L} />
      <rect x="20" y="56" width="8" height="4" fill={L} />
      {/* Foot base */}
      <rect x="0" y="60" width="8" height="4" fill={L} />
      <rect x="24" y="60" width="8" height="4" fill={L} />
    </svg>
  );
}
