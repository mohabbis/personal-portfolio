import { existsSync } from "node:fs";
import { join } from "node:path";

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

  it("titles are unique", () => {
    const titles = projects.map((p) => p.title);
    expect(new Set(titles).size).toBe(titles.length);
  });

  it("hrefs are valid external or internal routes", () => {
    for (const project of projects) {
      if (project.href) {
        expect(project.href, `${project.slug}: href`).toMatch(/^(https?:\/\/|\/)/);
      }
    }
  });

  it("a project with an href also has a ctaLabel", () => {
    for (const project of projects.filter((p) => p.href)) {
      expect(project.ctaLabel, `${project.slug}: ctaLabel`).toBeTruthy();
    }
  });

  it("every featured project is linkable via an href", () => {
    for (const project of projects.filter((p) => p.featured)) {
      expect(project.href, `${project.slug}: featured href`).toBeTruthy();
    }
  });

  it("imageFit, when set, is either cover or contain", () => {
    for (const project of projects) {
      if (project.imageFit) {
        expect(["cover", "contain"], `${project.slug}: imageFit`).toContain(project.imageFit);
      }
    }
  });

  it("local image paths point to files that exist in /public", () => {
    for (const project of projects) {
      if (project.image.startsWith("/")) {
        const filePath = join(process.cwd(), "public", project.image);
        expect(existsSync(filePath), `${project.slug}: missing asset ${project.image}`).toBe(true);
      }
    }
  });
});
