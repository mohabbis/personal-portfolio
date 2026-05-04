import type { ReactNode } from "react";

import { Tag } from "@/components/ui/tag";
import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  actions?: ReactNode;
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  actions,
  className
}: SectionHeadingProps) {
  const centered = align === "center";

  return (
    <div
      className={cn(
        "flex flex-col gap-5",
        centered && "items-center text-center",
        className
      )}
    >
      {eyebrow ? <Tag>{eyebrow}</Tag> : null}

      <div className="space-y-3">
        <h2 className="max-w-3xl font-display text-3xl tracking-tight text-foreground sm:text-4xl">
          {title}
        </h2>
        {description ? (
          <p className="max-w-prose text-base leading-7 text-muted-foreground sm:text-lg">
            {description}
          </p>
        ) : null}
      </div>

      {actions ? <div className="flex flex-wrap gap-3">{actions}</div> : null}
    </div>
  );
}
