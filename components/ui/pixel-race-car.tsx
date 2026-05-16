type PixelRaceCarProps = {
  className?: string;
};

export function PixelRaceCar({ className }: PixelRaceCarProps) {
  return (
    <svg
      viewBox="0 0 36 12"
      shapeRendering="crispEdges"
      className={className}
      aria-hidden={true}
    >
      <rect x="2" y="7" width="3" height="1" fill="#cbd5e1" opacity="0.35" />
      <rect x="0" y="7" width="2" height="1" fill="#cbd5e1" opacity="0.2" />

      <rect x="17" y="2" width="2" height="1" fill="#fb923c" />
      <rect x="16" y="3" width="4" height="1" fill="#1f2937" />

      <rect x="13" y="4" width="10" height="1" fill="#dc2626" />
      <rect x="7" y="5" width="27" height="1" fill="#dc2626" />
      <rect x="5" y="6" width="30" height="1" fill="#dc2626" />
      <rect x="14" y="6" width="13" height="1" fill="#fbbf24" />
      <rect x="6" y="7" width="28" height="1" fill="#991b1b" />

      <rect x="4" y="5" width="2" height="2" fill="#f3f4f6" />
      <rect x="4" y="4" width="1" height="1" fill="#f3f4f6" />

      <rect x="34" y="6" width="2" height="1" fill="#f3f4f6" />
      <rect x="35" y="7" width="1" height="1" fill="#f3f4f6" />

      <rect x="9" y="8" width="4" height="3" fill="#111827" />
      <rect x="8" y="9" width="6" height="1" fill="#111827" />
      <rect x="10" y="9" width="2" height="1" fill="#6b7280" />
      <rect x="10" y="10" width="1" height="1" fill="#9ca3af" />

      <rect x="26" y="8" width="4" height="3" fill="#111827" />
      <rect x="25" y="9" width="6" height="1" fill="#111827" />
      <rect x="27" y="9" width="2" height="1" fill="#6b7280" />
      <rect x="27" y="10" width="1" height="1" fill="#9ca3af" />
    </svg>
  );
}
