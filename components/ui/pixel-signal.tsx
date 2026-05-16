type PixelSignalProps = {
  className?: string;
};

export function PixelSignal({ className }: PixelSignalProps) {
  return (
    <svg
      viewBox="0 0 19 17"
      shapeRendering="crispEdges"
      className={className}
      aria-hidden={true}
    >
      <rect x="0" y="14" width="3" height="3" fill="#f97316" className="signal-bar-1" />
      <rect x="4" y="11" width="3" height="6" fill="#f97316" className="signal-bar-2" />
      <rect x="8" y="8" width="3" height="9" fill="#f97316" className="signal-bar-3" />
      <rect x="12" y="5" width="3" height="12" fill="#f97316" className="signal-bar-4" />
      <rect x="16" y="2" width="3" height="15" fill="#f97316" className="signal-bar-5" />
    </svg>
  );
}
