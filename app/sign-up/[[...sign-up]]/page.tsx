import type { Metadata } from "next";
import { SignUp } from "@clerk/nextjs";

import { SiteFrame } from "@/components/layout/site-frame";
import { Container } from "@/components/ui/container";

export const metadata: Metadata = {
  title: "Sign up",
  description: "Create an account to access private portfolio tools."
};

export default function SignUpPage() {
  return (
    <SiteFrame currentPath="/sign-up">
      <section className="py-16 sm:py-20">
        <Container className="grid place-items-center">
          <div className="w-full max-w-md rounded-[2rem] border border-border bg-card p-6 shadow-soft sm:p-8">
            <SignUp
              routing="path"
              path="/sign-up"
              signInUrl="/sign-in"
              forceRedirectUrl="/admin"
            />
          </div>
        </Container>
      </section>
    </SiteFrame>
  );
}
