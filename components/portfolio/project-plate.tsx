import Image from "next/image";

import { cn } from "@/lib/utils";

type ProjectPlateProps = {
  variant?: "brand" | "interface" | "system";
  title: string;
  image: string;
  imageAlt: string;
  meta: string[];
  backgroundClassName?: string;
  imageClassName?: string;
  className?: string;
  priority?: boolean;
};

const variantStyles = {
  brand: "bg-[#002556] text-white",
  interface: "bg-[#1a0e06] text-white",
  system: "bg-card text-foreground"
};

const frameStyles = {
  brand: "border-white/10 bg-white/[0.035]",
  interface: "border-white/10 bg-white/[0.05]",
  system: "border-foreground/[0.08] bg-background/70"
};

const metaStyles = {
  brand: "border-white/12 bg-white/[0.06] text-white/68",
  interface: "border-white/12 bg-white/[0.07] text-white/68",
  system: "border-foreground/10 bg-card/70 text-muted-foreground"
};

export function ProjectPlate({
  variant = "brand",
  title,
  image,
  imageAlt,
  meta,
  backgroundClassName,
  imageClassName,
  className,
  priority = false
}: ProjectPlateProps) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-[1.75rem] border border-foreground/[0.08] shadow-soft",
        variantStyles[variant],
        backgroundClassName,
        className
      )}
    >
      <div className="relative min-h-[22rem] p-4 sm:min-h-[30rem] sm:p-6">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_24%_18%,rgba(255,255,255,0.16),transparent_32%),linear-gradient(135deg,rgba(255,255,255,0.08),transparent_42%)]" />
        <div className="pointer-events-none absolute inset-x-6 top-6 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent" />

        <div
          className={cn(
            "relative flex min-h-[15rem] items-center justify-center rounded-[1.25rem] border p-8 sm:min-h-[22rem] sm:p-12",
            frameStyles[variant]
          )}
        >
          <div className="relative h-40 w-full max-w-[26rem] sm:h-52 sm:max-w-[34rem]">
            <Image
              src={image}
              alt={imageAlt}
              fill
              priority={priority}
              sizes="(max-width: 640px) 80vw, 544px"
              className={cn("object-contain", imageClassName)}
            />
          </div>
        </div>

        <div className="relative mt-5 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <h2 className="font-display text-4xl leading-none tracking-[-0.055em] sm:text-6xl">
            {title}
          </h2>
          <div className="flex flex-wrap gap-2 sm:justify-end">
            {meta.map((item) => (
              <span
                key={item}
                className={cn(
                  "rounded-full border px-3 py-1.5 text-[11px] font-light tracking-[0.04em] backdrop-blur-xl",
                  metaStyles[variant]
                )}
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
