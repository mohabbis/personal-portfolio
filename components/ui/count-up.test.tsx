import { act, render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";

import { CountUp } from "@/components/ui/count-up";

function mockMatchMedia(reducedMotion: boolean) {
  window.matchMedia = vi.fn().mockImplementation((query: string) => ({
    matches: reducedMotion && query === "(prefers-reduced-motion: reduce)",
    media: query,
    onchange: null,
    addListener: vi.fn(),
    removeListener: vi.fn(),
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  }));
}

describe("CountUp — prefers-reduced-motion: reduce", () => {
  beforeEach(() => mockMatchMedia(true));

  it("immediately renders the final value", () => {
    render(<CountUp to={42} />);
    expect(screen.getByText("42")).toBeInTheDocument();
  });

  it("does not create an IntersectionObserver", () => {
    const observeSpy = vi.fn();
    vi.stubGlobal(
      "IntersectionObserver",
      vi.fn(function () { return { observe: observeSpy, disconnect: vi.fn() }; })
    );
    render(<CountUp to={10} />);
    expect(observeSpy).not.toHaveBeenCalled();
  });
});

describe("CountUp — no reduced motion", () => {
  beforeEach(() => mockMatchMedia(false));

  it("renders 0 initially before intersection fires", () => {
    vi.stubGlobal(
      "IntersectionObserver",
      vi.fn(function () { return { observe: vi.fn(), disconnect: vi.fn() }; })
    );
    render(<CountUp to={100} />);
    expect(screen.getByText("0")).toBeInTheDocument();
  });

  it("registers an IntersectionObserver on the span element", () => {
    const observeSpy = vi.fn();
    vi.stubGlobal(
      "IntersectionObserver",
      vi.fn(function () { return { observe: observeSpy, disconnect: vi.fn() }; })
    );
    render(<CountUp to={50} />);
    expect(observeSpy).toHaveBeenCalledTimes(1);
  });

  it("disconnects the observer on unmount", () => {
    const disconnectSpy = vi.fn();
    vi.stubGlobal(
      "IntersectionObserver",
      vi.fn(function () { return { observe: vi.fn(), disconnect: disconnectSpy }; })
    );
    const { unmount } = render(<CountUp to={50} />);
    unmount();
    expect(disconnectSpy).toHaveBeenCalledTimes(1);
  });

  it("renders the final value after the animation completes", () => {
    let intersectCb: IntersectionObserverCallback | null = null;
    vi.stubGlobal(
      "IntersectionObserver",
      vi.fn(function (cb: IntersectionObserverCallback) {
        intersectCb = cb;
        return { observe: vi.fn(), disconnect: vi.fn() };
      })
    );

    let rafCb: ((t: number) => void) | null = null;
    vi.spyOn(window, "requestAnimationFrame").mockImplementation((cb) => {
      rafCb = cb as (t: number) => void;
      return 1;
    });

    // start = 0; first rAF fires at now=100ms with duration=100 → t=1 → value=99
    vi.spyOn(performance, "now").mockReturnValue(0);

    render(<CountUp to={99} duration={100} />);

    act(() => {
      intersectCb!(
        [{ isIntersecting: true, intersectionRatio: 1 } as IntersectionObserverEntry],
        {} as IntersectionObserver
      );
    });

    vi.spyOn(performance, "now").mockReturnValue(100);
    act(() => { rafCb!(100); });

    expect(screen.getByText("99")).toBeInTheDocument();

    vi.restoreAllMocks();
  });
});
