type PixelCameraProps = {
  className?: string;
};

export function PixelCamera({ className }: PixelCameraProps) {
  return (
    <svg
      viewBox="0 0 24 14"
      shapeRendering="crispEdges"
      className={className}
      aria-hidden={true}
    >
      <rect x="3" y="0" width="3" height="1" fill="#fef3c7" />
      <rect x="18" y="0" width="2" height="1" fill="#dc2626" />

      <rect x="0" y="1" width="24" height="2" fill="#1f2937" />
      <rect x="0" y="2" width="24" height="1" fill="#f97316" opacity="0.55" />

      <rect x="0" y="3" width="24" height="9" fill="#1f2937" />

      <rect x="7" y="4" width="10" height="7" fill="#4b5563" />
      <rect x="6" y="5" width="12" height="5" fill="#4b5563" />

      <rect x="8" y="5" width="8" height="5" fill="#374151" />
      <rect x="7" y="6" width="10" height="3" fill="#374151" />

      <rect x="9" y="6" width="6" height="3" fill="#030712" />
      <rect x="8" y="7" width="8" height="1" fill="#030712" />

      <rect x="9" y="6" width="2" height="1" fill="#94a3b8" opacity="0.85" />

      <rect x="0" y="11" width="24" height="1" fill="#0f172a" />

      <rect x="2" y="12" width="3" height="1" fill="#0f172a" />
      <rect x="19" y="12" width="3" height="1" fill="#0f172a" />
    </svg>
  );
}
