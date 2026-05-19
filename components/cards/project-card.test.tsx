import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

vi.mock("next/image", () => ({
  default: ({ src, alt, ...props }: { src: { src?: string } | string; alt: string; [k: string]: unknown }) => {
    const resolvedSrc = typeof src === "object" && src !== null ? (src as { src: string }).src : src;
    // eslint-disable-next-line @next/next/no-img-element
    return <img src={resolvedSrc as string} alt={alt} />;
  },
}));

vi.mock("motion/react", () => {
  const React = require("react");
  const make = (tag: string) =>
    React.forwardRef(
      ({ children, whileHover: _wh, transition: _tr, style: _s, ...rest }: Record<string, unknown>, ref: unknown) =>
        React.createElement(tag, { ...rest, ref }, children)
    );
  return {
    motion: new Proxy({} as Record<string, unknown>, { get: (_t, tag: string) => make(tag) }),
    useMotionValue: (init: number) => ({ get: () => init, set: vi.fn() }),
    useSpring: (v: unknown) => v,
    AnimatePresence: ({ children }: { children: React.ReactNode }) => children,
  };
});

import { ProjectCard } from "@/components/cards/project-card";
import type { ProjectItem } from "@/lib/types";

const baseProps: ProjectItem = {
  slug: "test-project",
  title: "Test Project",
  category: "Testing · Vitest",
  summary: "A project for unit testing.",
  impact: "Confirmed component correctness.",
  tags: ["TypeScript", "React"],
  image: "/images/test.svg",
};

describe("ProjectCard — without href", () => {
  it("renders an article element, not a link", () => {
    const { container } = render(<ProjectCard {...baseProps} />);
    expect(container.querySelector("article")).toBeInTheDocument();
    expect(container.querySelector("a")).not.toBeInTheDocument();
  });

  it("does not render the hover overlay (.z-20)", () => {
    const { container } = render(<ProjectCard {...baseProps} />);
    expect(container.querySelector(".z-20")).not.toBeInTheDocument();
  });

  it("renders title, category, and summary", () => {
    const { getByText } = render(<ProjectCard {...baseProps} />);
    expect(getByText("Test Project")).toBeInTheDocument();
    expect(getByText("Testing · Vitest")).toBeInTheDocument();
    expect(getByText("A project for unit testing.")).toBeInTheDocument();
  });

  it("renders the impact string", () => {
    const { getByText } = render(<ProjectCard {...baseProps} />);
    expect(getByText("Confirmed component correctness.")).toBeInTheDocument();
  });

  it("renders all tags", () => {
    const { getByText } = render(<ProjectCard {...baseProps} />);
    expect(getByText("TypeScript")).toBeInTheDocument();
    expect(getByText("React")).toBeInTheDocument();
  });

  it("renders the image with alt matching title", () => {
    render(<ProjectCard {...baseProps} />);
    expect(screen.getByAltText("Test Project")).toBeInTheDocument();
  });
});

describe("ProjectCard — with href", () => {
  const props: ProjectItem = { ...baseProps, href: "https://example.com/project" };

  it("renders an anchor element, not an article", () => {
    const { container } = render(<ProjectCard {...props} />);
    expect(container.querySelector("a")).toBeInTheDocument();
    expect(container.querySelector("article")).not.toBeInTheDocument();
  });

  it("anchor href matches the href prop", () => {
    const { container } = render(<ProjectCard {...props} />);
    expect(container.querySelector("a")).toHaveAttribute("href", "https://example.com/project");
  });

  it("anchor has target=_blank and rel=noreferrer", () => {
    const { container } = render(<ProjectCard {...props} />);
    const a = container.querySelector("a");
    expect(a).toHaveAttribute("target", "_blank");
    expect(a).toHaveAttribute("rel", "noreferrer");
  });

  it("renders the hover overlay (.z-20) when href is present", () => {
    const { container } = render(<ProjectCard {...props} />);
    expect(container.querySelector(".z-20")).toBeInTheDocument();
  });

  it("still renders title and all tags", () => {
    const { getByText } = render(<ProjectCard {...props} />);
    expect(getByText("Test Project")).toBeInTheDocument();
    expect(getByText("TypeScript")).toBeInTheDocument();
    expect(getByText("React")).toBeInTheDocument();
  });
});
