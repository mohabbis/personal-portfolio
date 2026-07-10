import { describe, expect, it } from "vitest";

import { gallery } from "@/data/gallery";

describe("gallery data", () => {
  it("exports a non-empty array", () => {
    expect(gallery.length).toBeGreaterThan(0);
  });

  it("every photo has a defined image source", () => {
    for (const [index, photo] of gallery.entries()) {
      expect(photo.image, `photo ${index}: image`).toBeTruthy();
    }
  });

  it("every photo has descriptive, non-empty alt text", () => {
    for (const [index, photo] of gallery.entries()) {
      expect(photo.alt, `photo ${index}: alt`).toBeTruthy();
      expect(photo.alt.trim().length, `photo ${index}: alt length`).toBeGreaterThan(3);
    }
  });

  it("alt text is unique across the gallery", () => {
    const alts = gallery.map((photo) => photo.alt);
    expect(new Set(alts).size).toBe(alts.length);
  });
});
