export function RGBStripe() {
  return (
    <div
      aria-hidden={true}
      className="rgb-flow"
      style={{
        height: 3,
        width: "100%",
        background:
          "linear-gradient(90deg, #00ccff, #ff44cc, #00ccff, #ff44cc, #00ccff)",
        opacity: 0.7,
      }}
    />
  );
}
