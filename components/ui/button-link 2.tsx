import type { ReactNode } from "react";

import Link from "next/link";

import { cn } from "@/lib/utils";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  target?: string;
  rel?: string;
};

const variants = {
  primary:
    "border border-accent bg-accent text-accent-foreground shadow-soft hover:-translate-y-0.5 hover:opacity-95",
  secondary:
    "border border-border bg-card/92 text-foreground hover:border-foreground/30 hover:bg-muted/55",
  ghost:
    "border border-transparent text-foreground hover:bg-muted/50"
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className,
  target,
  rel
}: ButtonLinkProps) {
  return (
    <Link
      href={href}
      target={target}
      rel={rel}
      className={cn(
        "inline-flex items-center justify-center rounded-full px-4 py-2.5 text-sm font-medium transition-all duration-200 ease-gentle",
        variants[variant],
        className
      )}
    >
      {children}
    </Link>
  );
}
