import Link from "next/link";

import { navigation } from "@/data/navigation";
import { siteConfig } from "@/data/site";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";

type SiteHeaderProps = {
  currentPath: string;
};

export function SiteHeader({ currentPath }: SiteHeaderProps) {
  return (
    <header className="sticky top-0 z-30 border-b border-foreground/[0.055] bg-background/78 backdrop-blur-2xl">
      <Container className="py-3.5">
        <div className="flex items-center justify-between gap-8">
          <Link
            href="/"
            aria-label={`${siteConfig.name} home`}
            className="flex shrink-0 items-center gap-3 text-foreground"
          >
            <span className="inline-flex h-[24px] w-[24px] items-center justify-center rounded-full border border-foreground/12 bg-card/60">
              <span className="font-mono text-[10px] font-medium text-foreground/72">M</span>
            </span>
            <span className="font-mono text-[11px] font-medium tracking-[0.2em] text-foreground/82">MUHA</span>
          </Link>

          <nav className="flex items-center gap-6 overflow-x-auto sm:gap-8">
            {navigation.map((item) => {
              const isActive = currentPath === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "shrink-0 border-b pb-1.5 text-[12px] font-normal tracking-[0.04em] transition-colors duration-200",
                    isActive
                      ? "border-foreground/32 text-foreground"
                      : "border-transparent text-foreground/48 hover:text-foreground"
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>
      </Container>
    </header>
  );
}
