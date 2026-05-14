"use client";

import Link from "next/link";
import { SignInButton, UserButton, useAuth } from "@clerk/nextjs";

import { cn } from "@/lib/utils";

export function SiteHeaderAuth() {
  const { isLoaded, isSignedIn } = useAuth();

  if (!isLoaded) {
    return <div className="h-10 w-28 rounded-full border border-border bg-card/60" />;
  }

  return (
    <div className="flex items-center gap-3">
      {!isSignedIn ? (
        <SignInButton mode="modal" forceRedirectUrl="/admin" fallbackRedirectUrl="/admin">
          <button
            type="button"
            className={cn(
              "inline-flex items-center justify-center rounded-full border border-border bg-card/92 px-4 py-2.5 text-sm font-medium",
              "text-foreground transition-all duration-200 ease-gentle hover:border-foreground/30 hover:bg-muted/55"
            )}
          >
            Sign in
          </button>
        </SignInButton>
      ) : (
        <>
          <Link
            href="/admin"
            className={cn(
              "inline-flex items-center justify-center rounded-full border border-border bg-card/92 px-4 py-2.5 text-sm font-medium",
              "text-foreground transition-all duration-200 ease-gentle hover:border-foreground/30 hover:bg-muted/55"
            )}
          >
            Admin
          </Link>
          <UserButton />
        </>
      )}
    </div>
  );
}
