export function RGBStripe() {
  return (
    <div
      aria-hidden
      className="rgb-flow"
      style={{
        height: 3,
        width: "100%",
        background:
          "linear-gradient(90deg, #ff0000, #ff8800, #ffff00, #00cc44, #00ccff, #6644ff, #cc00ff, #ff0000)",
        opacity: 0.55,
      }}
    />
  );
}
