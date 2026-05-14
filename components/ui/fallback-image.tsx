"use client";

import { useState } from "react";

import Image, { type ImageProps } from "next/image";

import { cn } from "@/lib/utils";

type FallbackImageProps = Omit<ImageProps, "src" | "alt"> & {
  src?: string;
  alt: string;
  fallbackLabel?: string;
  className?: string;
  imageClassName?: string;
};

function shouldSkipOptimization(src?: string) {
  if (!src) return false;

  const cleanSrc = src.split("?")[0]?.toLowerCase() ?? "";
  return cleanSrc.endsWith(".svg") || cleanSrc.endsWith(".gif");
}

export function FallbackImage({
  src,
  alt,
  fallbackLabel = "Image pending",
  className,
  imageClassName,
  unoptimized,
  ...props
}: FallbackImageProps) {
  const [failed, setFailed] = useState(false);
  const showImage = Boolean(src) && !failed;
  const skipOptimization = unoptimized ?? shouldSkipOptimization(src);

  return (
    <div
      className={cn(
        "relative h-full w-full overflow-hidden bg-[radial-gradient(circle_at_28%_20%,hsl(var(--accent)/0.3),transparent_32%),linear-gradient(135deg,hsl(var(--muted)),hsl(var(--card)))]",
        className
      )}
    >
      <div className="absolute inset-0 opacity-60 [background-image:linear-gradient(120deg,hsl(var(--foreground)/0.08)_1px,transparent_1px)] [background-size:18px_18px]" />
      {showImage ? (
        <Image
          {...props}
          src={src!}
          alt={alt}
          unoptimized={skipOptimization}
          onError={() => setFailed(true)}
          className={cn("object-cover", imageClassName)}
        />
      ) : (
        fallbackLabel ? (
          <div className="absolute inset-0 flex items-end p-5">
            <span className="rounded-full border border-white/12 bg-black/28 px-3 py-1 text-xs uppercase tracking-[0.18em] text-white/68 backdrop-blur">
              {fallbackLabel}
            </span>
          </div>
        ) : null
      )}
    </div>
  );
}
