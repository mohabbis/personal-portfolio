type PixelHeadphonesProps = {
  className?: string;
};

export function PixelHeadphones({ className }: PixelHeadphonesProps) {
  return (
    <svg
      viewBox="0 0 48 28"
      shapeRendering="crispEdges"
      className={className}
      aria-hidden={true}
    >
      {/* Headband arc */}
      <rect x="20" y="0" width="8" height="4" fill="#1f2937" />
      <rect x="14" y="2" width="6" height="3" fill="#1f2937" />
      <rect x="28" y="2" width="6" height="3" fill="#1f2937" />
      <rect x="11" y="5" width="5" height="3" fill="#1f2937" />
      <rect x="32" y="5" width="5" height="3" fill="#1f2937" />

      {/* Left ear cup */}
      <rect x="8" y="8" width="8" height="16" fill="#1f2937" />
      <rect x="10" y="10" width="4" height="12" fill="#374151" />
      {/* Left speaker grill */}
      <rect x="11" y="12" width="2" height="1" fill="#4b5563" />
      <rect x="11" y="14" width="2" height="1" fill="#4b5563" />
      <rect x="11" y="16" width="2" height="1" fill="#4b5563" />
      <rect x="11" y="18" width="2" height="1" fill="#4b5563" />

      {/* Right ear cup */}
      <rect x="32" y="8" width="8" height="16" fill="#1f2937" />
      <rect x="34" y="10" width="4" height="12" fill="#374151" />
      {/* Right speaker grill */}
      <rect x="35" y="12" width="2" height="1" fill="#4b5563" />
      <rect x="35" y="14" width="2" height="1" fill="#4b5563" />
      <rect x="35" y="16" width="2" height="1" fill="#4b5563" />
      <rect x="35" y="18" width="2" height="1" fill="#4b5563" />

      {/* Left sound waves */}
      <rect x="5" y="14" width="2" height="1" fill="#f97316" className="sound-wave-1" />
      <rect x="3" y="12" width="1" height="1" fill="#f97316" className="sound-wave-2" />
      <rect x="3" y="16" width="1" height="1" fill="#f97316" className="sound-wave-2" />
      <rect x="1" y="10" width="1" height="1" fill="#f97316" className="sound-wave-3" />
      <rect x="1" y="18" width="1" height="1" fill="#f97316" className="sound-wave-3" />

      {/* Right sound waves */}
      <rect x="41" y="14" width="2" height="1" fill="#f97316" className="sound-wave-1" />
      <rect x="44" y="12" width="1" height="1" fill="#f97316" className="sound-wave-2" />
      <rect x="44" y="16" width="1" height="1" fill="#f97316" className="sound-wave-2" />
      <rect x="46" y="10" width="1" height="1" fill="#f97316" className="sound-wave-3" />
      <rect x="46" y="18" width="1" height="1" fill="#f97316" className="sound-wave-3" />
    </svg>
  );
}
