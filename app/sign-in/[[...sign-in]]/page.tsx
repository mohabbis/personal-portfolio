import type { Metadata } from "next";
import { SignIn } from "@clerk/nextjs";

import { SiteFrame } from "@/components/layout/site-frame";
import { Container } from "@/components/ui/container";

export const metadata: Metadata = {
  title: "Sign in",
  description: "Sign in to access private portfolio tools."
};

export default function SignInPage() {
  return (
    <SiteFrame currentPath="/sign-in">
      <section className="py-16 sm:py-20">
        <Container className="grid place-items-center">
          <div className="w-full max-w-md rounded-[2rem] border border-border bg-card p-6 shadow-soft sm:p-8">
            <SignIn
              routing="path"
              path="/sign-in"
              signUpUrl="/sign-up"
              forceRedirectUrl="/admin"
            />
          </div>
        </Container>
      </section>
    </SiteFrame>
  );
}
