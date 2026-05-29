import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type TagProps = {
  children: ReactNode;
  className?: string;
};

export function Tag({ children, className }: TagProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-white/[0.10] bg-white/[0.04] px-3 py-1 text-[0.72rem] font-light tracking-[0.01em] text-foreground/68",
        className
      )}
    >
      {children}
    </span>
  );
}
