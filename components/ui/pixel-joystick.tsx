type PixelJoystickProps = {
  className?: string;
};

export function PixelJoystick({ className }: PixelJoystickProps) {
  return (
    <svg
      viewBox="0 0 32 34"
      shapeRendering="crispEdges"
      className={className}
      aria-hidden={true}
    >
      {/* Joystick ball + shaft — animated */}
      <g className="joystick-tilt" style={{ transformOrigin: "13px 24px" }}>
        {/* Ball */}
        <rect x="9" y="4" width="8" height="8" fill="#2D2520" />
        <rect x="8" y="6" width="10" height="4" fill="#2D2520" />
        {/* Ball shine */}
        <rect x="10" y="5" width="2" height="2" fill="#A89E96" opacity="0.55" />
        {/* Shaft */}
        <rect x="11" y="12" width="4" height="12" fill="#4A433E" />
      </g>
      {/* Base plate */}
      <rect x="0" y="22" width="32" height="12" fill="#2D2520" />
      <rect x="0" y="22" width="32" height="2" fill="#4A433E" />
      {/* Button A — red */}
      <rect x="21" y="25" width="7" height="7" fill="#dc2626" />
      <rect x="22" y="26" width="2" height="2" fill="#ef4444" opacity="0.55" />
      {/* Button B — yellow */}
      <rect x="13" y="26" width="6" height="6" fill="#fbbf24" />
      <rect x="14" y="27" width="2" height="2" fill="#fde68a" opacity="0.55" />
      {/* Start button */}
      <rect x="3" y="28" width="6" height="2" fill="#6B6058" />
    </svg>
  );
}
