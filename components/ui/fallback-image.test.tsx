import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

vi.mock("next/image", () => ({
  default: ({ src, alt, ...props }: { src: { src?: string } | string; alt: string; [k: string]: unknown }) => {
    const resolvedSrc = typeof src === "object" && src !== null ? (src as { src: string }).src : src;
    // eslint-disable-next-line @next/next/no-img-element
    return <img src={resolvedSrc as string} alt={alt} {...(props as object)} />;
  },
}));

import { FallbackImage } from "@/components/ui/fallback-image";

describe("FallbackImage", () => {
  it("renders the image when src is provided", () => {
    render(<FallbackImage src="https://example.com/photo.jpg" alt="A photo" width={400} height={300} />);
    expect(screen.getByAltText("A photo")).toBeInTheDocument();
  });

  it("renders the fallback label when no src is provided", () => {
    render(<FallbackImage alt="no-src" fallbackLabel="Image pending" width={400} height={300} />);
    expect(screen.queryByRole("img")).not.toBeInTheDocument();
    expect(screen.getByText("Image pending")).toBeInTheDocument();
  });

  it("uses custom fallbackLabel text", () => {
    render(<FallbackImage alt="x" fallbackLabel="Coming soon" width={100} height={100} />);
    expect(screen.getByText("Coming soon")).toBeInTheDocument();
  });

  it("defaults to 'Image pending' when fallbackLabel is not supplied", () => {
    render(<FallbackImage alt="x" width={100} height={100} />);
    expect(screen.getByText("Image pending")).toBeInTheDocument();
  });

  it("switches to fallback after image load error", () => {
    render(<FallbackImage src="https://example.com/broken.jpg" alt="Broken" width={200} height={150} />);
    const img = screen.getByAltText("Broken");
    fireEvent.error(img);
    expect(screen.queryByAltText("Broken")).not.toBeInTheDocument();
    expect(screen.getByText("Image pending")).toBeInTheDocument();
  });

  it("renders nothing inside the container when fallbackLabel is empty string and no src", () => {
    const { container } = render(
      <FallbackImage alt="empty" fallbackLabel="" width={100} height={100} />
    );
    expect(container.querySelectorAll("span")).toHaveLength(0);
    expect(container.querySelectorAll("img")).toHaveLength(0);
  });
});
