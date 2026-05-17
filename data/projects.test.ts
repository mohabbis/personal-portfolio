import { describe, expect, it } from "vitest";

import { projects } from "@/data/projects";

describe("projects data", () => {
  it("has at least one project", () => {
    expect(projects.length).toBeGreaterThan(0);
  });

  it("every project has required non-empty fields", () => {
    for (const project of projects) {
      expect(project.slug, `${project.slug}: slug`).toBeTruthy();
      expect(project.title, `${project.slug}: title`).toBeTruthy();
      expect(project.category, `${project.slug}: category`).toBeTruthy();
      expect(project.summary, `${project.slug}: summary`).toBeTruthy();
      expect(project.impact, `${project.slug}: impact`).toBeTruthy();
      expect(project.image, `${project.slug}: image`).toBeTruthy();
    }
  });

  it("every project has a non-empty tags array", () => {
    for (const project of projects) {
      expect(Array.isArray(project.tags), `${project.slug}: tags is array`).toBe(true);
      expect(project.tags.length, `${project.slug}: tags non-empty`).toBeGreaterThan(0);
    }
  });

  it("at least one project is featured", () => {
    expect(projects.some((p) => p.featured)).toBe(true);
  });

  it("slugs are unique", () => {
    const slugs = projects.map((p) => p.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
  });

  it("external hrefs start with https://", () => {
    for (const project of projects) {
      if (project.href) {
        expect(project.href, `${project.slug}: href`).toMatch(/^https?:\/\//);
      }
    }
  });
});
