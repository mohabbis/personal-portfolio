type PixelLaptopProps = {
  className?: string;
};

export function PixelLaptop({ className }: PixelLaptopProps) {
  return (
    <svg
      viewBox="0 0 36 28"
      shapeRendering="crispEdges"
      className={className}
      aria-hidden={true}
    >
      {/* Screen bezel */}
      <rect x="3" y="0" width="30" height="20" fill="#2D2520" />
      {/* Screen glass */}
      <rect x="5" y="2" width="26" height="16" fill="#141210" />
      {/* Title bar accent */}
      <rect x="7" y="4" width="22" height="2" fill="#C6802A" opacity="0.55" />
      {/* Code lines */}
      <rect x="7" y="8" width="16" height="1" fill="#6B6058" />
      <rect x="7" y="11" width="20" height="1" fill="#6B6058" />
      <rect x="7" y="14" width="12" height="1" fill="#6B6058" />
      {/* Blinking cursor */}
      <rect x="19" y="14" width="1" height="2" fill="#C6802A" className="screen-cursor" />
      {/* Hinge */}
      <rect x="3" y="20" width="30" height="2" fill="#1A1714" />
      {/* Keyboard base */}
      <rect x="1" y="22" width="34" height="6" fill="#2D2520" />
      {/* Keys row 1 */}
      <rect x="4" y="23" width="2" height="1" fill="#4A433E" />
      <rect x="7" y="23" width="2" height="1" fill="#4A433E" />
      <rect x="10" y="23" width="2" height="1" fill="#4A433E" />
      <rect x="13" y="23" width="2" height="1" fill="#4A433E" />
      <rect x="16" y="23" width="2" height="1" fill="#4A433E" />
      <rect x="19" y="23" width="2" height="1" fill="#4A433E" />
      <rect x="22" y="23" width="2" height="1" fill="#4A433E" />
      <rect x="25" y="23" width="2" height="1" fill="#4A433E" />
      <rect x="28" y="23" width="2" height="1" fill="#4A433E" />
      {/* Keys row 2 */}
      <rect x="5" y="25" width="2" height="1" fill="#4A433E" />
      <rect x="8" y="25" width="2" height="1" fill="#4A433E" />
      <rect x="11" y="25" width="2" height="1" fill="#4A433E" />
      <rect x="14" y="25" width="2" height="1" fill="#4A433E" />
      <rect x="17" y="25" width="2" height="1" fill="#4A433E" />
      <rect x="20" y="25" width="2" height="1" fill="#4A433E" />
      <rect x="23" y="25" width="2" height="1" fill="#4A433E" />
      <rect x="26" y="25" width="2" height="1" fill="#4A433E" />
      {/* Trackpad */}
      <rect x="13" y="26" width="10" height="1" fill="#4A433E" />
    </svg>
  );
}
