export function RGBStripe() {
  return (
    <div
      aria-hidden={true}
      className="rgb-flow"
      style={{
        height: 3,
        width: "100%",
        background:
          "linear-gradient(90deg, #ffd600, #ff6600, #ff2200, #ff6600, #ffd600)",
        opacity: 0.7,
      }}
    />
  );
}
