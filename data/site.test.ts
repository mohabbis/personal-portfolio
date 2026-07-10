import { describe, expect, it } from "vitest";

import { contactItems, highlights, siteConfig, socialLinks, workingPrinciples } from "@/data/site";

describe("siteConfig.hero", () => {
  it("headline and subheadline are non-empty", () => {
    expect(siteConfig.hero.headline).toBeTruthy();
    expect(siteConfig.hero.subheadline).toBeTruthy();
  });

  it("primary and secondary CTAs have a label and an internal href", () => {
    for (const cta of [siteConfig.hero.primaryCta, siteConfig.hero.secondaryCta]) {
      expect(cta.label).toBeTruthy();
      expect(cta.href).toMatch(/^\//);
    }
  });
});

describe("siteConfig.about", () => {
  it("has a non-empty intro and at least one paragraph", () => {
    expect(siteConfig.about.intro).toBeTruthy();
    expect(siteConfig.about.paragraphs.length).toBeGreaterThan(0);
  });

  it("every paragraph is non-empty", () => {
    for (const paragraph of siteConfig.about.paragraphs) {
      expect(paragraph).toBeTruthy();
    }
  });
});

describe("siteConfig.focusAreas", () => {
  it("has a non-empty title and at least one bullet", () => {
    expect(siteConfig.focusAreas.title).toBeTruthy();
    expect(siteConfig.focusAreas.bullets.length).toBeGreaterThan(0);
  });

  it("every bullet is non-empty", () => {
    for (const bullet of siteConfig.focusAreas.bullets) {
      expect(bullet).toBeTruthy();
    }
  });
});

describe.each([
  ["highlights", highlights],
  ["workingPrinciples", workingPrinciples]
])("%s", (_name, items) => {
  it("exports a non-empty array", () => {
    expect(items.length).toBeGreaterThan(0);
  });

  it("every item has a non-empty title and description", () => {
    for (const item of items) {
      expect(item.title, "title").toBeTruthy();
      expect(item.description, `${item.title}: description`).toBeTruthy();
    }
  });
});

describe("contactItems", () => {
  it("exports a non-empty array", () => {
    expect(contactItems.length).toBeGreaterThan(0);
  });

  it("every item has non-empty label, value, href, and note", () => {
    for (const item of contactItems) {
      expect(item.label, `label`).toBeTruthy();
      expect(item.value, `${item.label}: value`).toBeTruthy();
      expect(item.href, `${item.label}: href`).toBeTruthy();
      expect(item.note, `${item.label}: note`).toBeTruthy();
    }
  });

  it("email item href uses mailto: protocol", () => {
    const emailItem = contactItems.find((i) => i.label === "Email");
    expect(emailItem).toBeDefined();
    expect(emailItem!.href).toMatch(/^mailto:/);
  });

  it("mailto: address matches siteConfig.email", () => {
    const emailItem = contactItems.find((i) => i.label === "Email");
    // href may carry a prefilled ?subject= query, so match the address prefix
    expect(emailItem!.href).toMatch(new RegExp(`^mailto:${siteConfig.email}(\\?|$)`));
  });

  it("internal hrefs start with /", () => {
    const internal = contactItems.filter(
      (i) =>
        !i.href.startsWith("mailto:") &&
        !i.href.startsWith("tel:") &&
        !i.href.startsWith("http")
    );
    for (const item of internal) {
      expect(item.href, `${item.label}: internal href`).toMatch(/^\//);
    }
  });

  it("external hrefs start with https://", () => {
    const external = contactItems.filter((i) => i.href.startsWith("http"));
    for (const item of external) {
      expect(item.href, `${item.label}: external href`).toMatch(/^https:\/\//);
    }
  });
});

describe("socialLinks", () => {
  it("exports a non-empty array", () => {
    expect(socialLinks.length).toBeGreaterThan(0);
  });

  it("every link has a non-empty label and href", () => {
    for (const link of socialLinks) {
      expect(link.label).toBeTruthy();
      expect(link.href).toBeTruthy();
    }
  });

  it("each href uses mailto:, https://, or / prefix", () => {
    for (const link of socialLinks) {
      const valid =
        link.href.startsWith("mailto:") ||
        link.href.startsWith("https://") ||
        link.href.startsWith("/");
      expect(valid, `"${link.label}" href "${link.href}" has unexpected prefix`).toBe(true);
    }
  });

  it("labels are unique", () => {
    const labels = socialLinks.map((l) => l.label);
    expect(new Set(labels).size).toBe(labels.length);
  });
});
