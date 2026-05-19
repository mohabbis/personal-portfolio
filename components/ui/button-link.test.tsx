import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

vi.mock("next/link", () => ({
  default: ({ href, children, ...props }: { href: string; children: React.ReactNode; [k: string]: unknown }) => (
    <a href={href} {...(props as object)}>{children}</a>
  ),
}));

import { ButtonLink } from "@/components/ui/button-link";

describe("ButtonLink", () => {
  it("renders an anchor element with the correct href", () => {
    render(<ButtonLink href="/about">About</ButtonLink>);
    expect(screen.getByRole("link", { name: "About" })).toHaveAttribute("href", "/about");
  });

  it("renders children as link text", () => {
    render(<ButtonLink href="/">Home</ButtonLink>);
    expect(screen.getByText("Home")).toBeInTheDocument();
  });

  it("primary variant (default) applies bg-accent and border-accent classes", () => {
    render(<ButtonLink href="/">Primary</ButtonLink>);
    const link = screen.getByRole("link");
    expect(link.className).toContain("bg-accent");
    expect(link.className).toContain("border-accent");
  });

  it("secondary variant applies a background and border class", () => {
    render(<ButtonLink href="/" variant="secondary">Secondary</ButtonLink>);
    const link = screen.getByRole("link");
    expect(link.className).toContain("bg-");
    expect(link.className).toContain("border-");
  });

  it("ghost variant applies border-transparent", () => {
    render(<ButtonLink href="/" variant="ghost">Ghost</ButtonLink>);
    expect(screen.getByRole("link").className).toContain("border-transparent");
  });

  it("merges additional className prop", () => {
    render(<ButtonLink href="/" className="extra-class">Merge</ButtonLink>);
    expect(screen.getByRole("link").className).toContain("extra-class");
  });

  it("passes target and rel through to the anchor", () => {
    render(
      <ButtonLink href="https://example.com" target="_blank" rel="noreferrer">
        External
      </ButtonLink>
    );
    const link = screen.getByRole("link");
    expect(link).toHaveAttribute("target", "_blank");
    expect(link).toHaveAttribute("rel", "noreferrer");
  });

  it("always includes rounded-full regardless of variant", () => {
    const { rerender } = render(<ButtonLink href="/">A</ButtonLink>);
    expect(screen.getByRole("link").className).toContain("rounded-full");

    rerender(<ButtonLink href="/" variant="secondary">A</ButtonLink>);
    expect(screen.getByRole("link").className).toContain("rounded-full");

    rerender(<ButtonLink href="/" variant="ghost">A</ButtonLink>);
    expect(screen.getByRole("link").className).toContain("rounded-full");
  });
});
