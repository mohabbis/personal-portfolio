import { describe, expect, it } from "vitest";

import { cn, shouldSkipOptimization } from "@/lib/utils";

describe("cn", () => {
  it("joins multiple strings", () => {
    expect(cn("a", "b", "c")).toBe("a b c");
  });

  it("filters out falsy values", () => {
    expect(cn("a", false, null, undefined, "b")).toBe("a b");
  });

  it("returns empty string when all values are falsy", () => {
    expect(cn(false, null, undefined)).toBe("");
  });

  it("returns empty string with no arguments", () => {
    expect(cn()).toBe("");
  });

  it("handles a single string", () => {
    expect(cn("only")).toBe("only");
  });
});

describe("shouldSkipOptimization", () => {
  it("returns false when src is undefined", () => {
    expect(shouldSkipOptimization(undefined)).toBe(false);
  });

  it("returns false when src is empty string", () => {
    expect(shouldSkipOptimization("")).toBe(false);
  });

  it("returns true for a local path", () => {
    expect(shouldSkipOptimization("/images/photo.jpg")).toBe(true);
  });

  it("returns true for an SVG URL", () => {
    expect(shouldSkipOptimization("https://example.com/icon.svg")).toBe(true);
  });

  it("returns true for a GIF URL", () => {
    expect(shouldSkipOptimization("https://example.com/anim.gif")).toBe(true);
  });

  it("returns false for a remote JPEG", () => {
    expect(shouldSkipOptimization("https://example.com/photo.jpg")).toBe(false);
  });

  it("returns false for a remote WebP", () => {
    expect(shouldSkipOptimization("https://example.com/photo.webp")).toBe(false);
  });

  it("strips query string before checking extension", () => {
    expect(shouldSkipOptimization("https://example.com/icon.svg?v=2")).toBe(true);
    expect(shouldSkipOptimization("https://example.com/photo.jpg?w=800")).toBe(false);
  });
});
