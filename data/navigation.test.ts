import { describe, expect, it } from "vitest";

import { navigation } from "@/data/navigation";

describe("navigation data", () => {
  it("exports a non-empty array", () => {
    expect(navigation.length).toBeGreaterThan(0);
  });

  it("every item has a non-empty label and an internal href", () => {
    for (const item of navigation) {
      expect(item.label, "label").toBeTruthy();
      expect(item.href, `${item.label}: href`).toMatch(/^\//);
    }
  });

  it("hrefs are unique", () => {
    const hrefs = navigation.map((item) => item.href);
    expect(new Set(hrefs).size).toBe(hrefs.length);
  });
});
