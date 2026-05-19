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
    "border border-accent bg-accent text-accent-foreground shadow-[0_14px_34px_hsl(30_28%_5%_/_0.2)] hover:-translate-y-0.5 hover:opacity-95",
  secondary:
    "border border-white/[0.10] bg-white/[0.04] text-foreground hover:border-white/[0.18] hover:bg-white/[0.07]",
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
        "inline-flex items-center justify-center rounded-full px-4 py-2.5 text-sm font-medium transition-all duration-[250ms] ease-gentle",
        variants[variant],
        className
      )}
    >
      {children}
    </Link>
  );
}
