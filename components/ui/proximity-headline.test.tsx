import { render, screen, waitFor } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";

vi.mock("motion/react", () => {
  const React = require("react");
  const make = (tag: string) =>
    React.forwardRef(
      ({ children, style: _s, ...rest }: Record<string, unknown>, ref: unknown) =>
        React.createElement(tag, { ...rest, ref }, children)
    );
  return {
    motion: new Proxy({} as Record<string, unknown>, { get: (_t, tag: string) => make(tag) }),
    useMotionValue: (init: number) => ({
      get: () => init,
      set: vi.fn(),
      on: () => () => undefined
    }),
    useSpring: (v: unknown) => v
  };
});

import { ProximityHeadline } from "@/components/ui/proximity-headline";

function mockMedia({ reducedMotion = false, finePointer = false } = {}) {
  window.matchMedia = vi.fn().mockImplementation((query: string) => ({
    matches:
      (reducedMotion && query === "(prefers-reduced-motion: reduce)") ||
      (finePointer && query === "(hover: hover) and (pointer: fine)"),
    media: query,
    onchange: null,
    addListener: vi.fn(),
    removeListener: vi.fn(),
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn()
  }));
}

describe("ProximityHeadline", () => {
  beforeEach(() => mockMedia({ finePointer: false }));

  it("renders the full headline for assistive tech", () => {
    render(<ProximityHeadline text="Start with how it should feel." />);
    expect(screen.getByRole("heading", { name: "Start with how it should feel." })).toBeInTheDocument();
  });

  it("starts as plain text before a fine pointer is proven", () => {
    render(<ProximityHeadline text="Start with how it should feel." />);
    const heading = screen.getByRole("heading", { name: "Start with how it should feel." });
    expect(heading.textContent).toBe("Start with how it should feel.");
  });

  it("splits into letter spans when fine pointer media matches", async () => {
    mockMedia({ finePointer: true, reducedMotion: false });
    render(<ProximityHeadline text="Start with how it should feel." />);
    const heading = screen.getByRole("heading", { name: "Start with how it should feel." });
    await waitFor(() => {
      expect(heading.children.length).toBeGreaterThan(0);
    });
  });

  it("falls back to plain text when reduced motion is preferred", () => {
    mockMedia({ finePointer: true, reducedMotion: true });
    render(<ProximityHeadline text="Start with how it should feel." />);
    const heading = screen.getByRole("heading", { name: "Start with how it should feel." });
    expect(heading.textContent).toBe("Start with how it should feel.");
    expect(heading.children.length).toBe(0);
  });
});
