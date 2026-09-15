import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { SketchCar } from "@/components/ui/sketch-car";

describe("SketchCar", () => {
  it("exposes an accessible label, since the hero carries no text", () => {
    render(<SketchCar />);
    expect(screen.getByRole("img")).toHaveAccessibleName(/line drawing of a car/i);
  });

  it("merges a caller className with the sketch-car hook class", () => {
    render(<SketchCar className="max-w-[38rem]" />);
    const svg = screen.getByRole("img");
    expect(svg).toHaveClass("sketch-car");
    expect(svg).toHaveClass("max-w-[38rem]");
  });

  it("normalises every drawn shape to pathLength 1 so one dash pattern fits all", () => {
    const { container } = render(<SketchCar />);
    const drawn = container.querySelectorAll("[data-draw]");

    expect(drawn.length).toBeGreaterThan(0);
    for (const el of drawn) {
      expect(el.getAttribute("pathLength")).toBe("1");
    }
  });

  it("staggers the draw-in with per-element custom properties", () => {
    const { container } = render(<SketchCar />);

    for (const el of container.querySelectorAll<SVGElement>("[data-draw]")) {
      expect(el.style.getPropertyValue("--draw-delay")).toMatch(/^[\d.]+s$/);
      expect(el.style.getPropertyValue("--draw-duration")).toMatch(/^[\d.]+s$/);
    }
  });

  it("renders the highlight sweep as its own undrawn path", () => {
    const { container } = render(<SketchCar />);
    const sweep = container.querySelector(".sketch-car__sweep");

    expect(sweep).not.toBeNull();
    expect(sweep!.hasAttribute("data-draw")).toBe(false);
  });
});
