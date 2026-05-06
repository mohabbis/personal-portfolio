import Image from "next/image";

import { SiteFrame } from "@/components/layout/site-frame";
import { PageIntro } from "@/components/sections/page-intro";
import { Container } from "@/components/ui/container";
import { Tag } from "@/components/ui/tag";
import { ButtonLink } from "@/components/ui/button-link";

const projectScopeItems = [
  "Flipper Zero native application development",
  "Smart home device management and automation",
  "Phone focus mode integration and workflows",
  "Device inventory and state management",
  "Routine-aware alerts and notifications"
] as const;

const companionAppCards = [
  {
    title: "Stats View",
    description:
      "Quick access to portfolio metrics: project count, technology stack, and areas of focus."
  },
  {
    title: "Projects View",
    description: "Browse all four main projects with navigation controls. Navigate with arrow keys."
  },
  {
    title: "About View",
    description: "Personal branding and focus areas: software, product design, and embedded systems."
  }
] as const;

const howItWorksSteps = [
  {
    label: "Left/Right arrows",
    text: "Switch between Stats, Projects, and About views"
  },
  {
    label: "Up/Down arrows",
    text: "Navigate through projects"
  },
  {
    label: "Back button",
    text: "Exit the application"
  }
] as const;

const whyThisMattersCards = [
  {
    title: "Connected Device Thinking",
    description:
      "Shows how to design experiences across different platforms and form factors. A Flipper Zero isn't a primary interface, but it can be a meaningful one for specific use cases."
  },
  {
    title: "Embedded Systems Practice",
    description:
      "Demonstrates low-level C programming, hardware constraints, and how to build responsive interfaces within strict memory and display limitations."
  },
  {
    title: "Product Experimentation",
    description:
      "Keeps the boundary between exploration and execution clear. This playground is where ideas move from \"interesting\" to \"worth building for real.\""
  },
  {
    title: "Future Integration",
    description:
      "The architecture supports expanding into smart home control, device notifications, and automation workflows as the ecosystem grows."
  }
] as const;

const technicalTags = ["Flipper Zero SDK", "Embedded C", "uFBT Build System", "LVGL", "Hardware Integration"] as const;

const roadmapPhases = [
  {
    title: "Phase 2: Smart Home Integration",
    description:
      "Connect the Flipper to smart home devices via WiFi or NFC. Display device status, control lights, and manage automations directly from the Flipper."
  },
  {
    title: "Phase 3: Phone Integration",
    description:
      "Bidirectional communication with iOS focus modes. Use the Flipper to trigger device routines and receive notifications about focus state changes."
  },
  {
    title: "Phase 4: Routine Management",
    description:
      "Build complex automations that respond to time, location, focus mode, and device state. The Flipper becomes a control center for personalized workflows."
  }
] as const;

export default function ConnectedDevicePlaygroundPage() {
  return (
    <SiteFrame currentPath="/portfolio">
      <PageIntro
        eyebrow="Connected Device Playground"
        title="A practical exploration area for embedded systems and connected devices."
        description="Flipper Zero apps, smart home automation, and device workflows that can become real product features."
      />

      <section className="py-16 sm:py-20">
        <Container className="space-y-16">
          <div className="grid gap-8 lg:grid-cols-2">
            <div>
              <h2 className="font-display text-3xl text-foreground mb-4">Overview</h2>
              <p className="text-base leading-7 text-muted-foreground mb-6">
                The Connected Device Playground is an experimental space for exploring how different devices can
                interact, communicate, and create meaningful user experiences. It's where rapid prototyping meets
                product thinking.
              </p>
              <p className="text-base leading-7 text-muted-foreground">
                The project demonstrates embedded systems design, hardware integration, and the process of turning
                quick experiments into feature-ready implementations.
              </p>
            </div>

            <div className="rounded-[1.75rem] border border-border bg-card p-8">
              <h3 className="font-display text-lg text-foreground mb-4">Project Scope</h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                {projectScopeItems.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="text-primary mt-1">→</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="border-t border-border/70 pt-16">
            <h2 className="font-display text-3xl text-foreground mb-4">Portfolio Companion App</h2>
            <p className="text-base leading-7 text-muted-foreground mb-8">
              A native Flipper Zero application that brings portfolio information directly to the device. The app
              demonstrates embedded UI design principles within the constraints of a small monochrome display.
            </p>

            <div className="grid gap-8 lg:grid-cols-3 mb-8">
              {companionAppCards.map((card) => (
                <div
                  key={card.title}
                  className="rounded-[1.75rem] border border-border bg-card/50 p-6"
                >
                  <h3 className="font-display text-lg text-foreground mb-3">{card.title}</h3>
                  <p className="text-sm text-muted-foreground">{card.description}</p>
                </div>
              ))}
            </div>

            <div className="bg-card/40 border border-border rounded-[1.75rem] p-8">
              <h3 className="font-display text-lg text-foreground mb-3">How It Works</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {howItWorksSteps.map((step) => (
                  <li key={step.label}>
                    <strong className="text-foreground">{step.label}:</strong> {step.text}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="border-t border-border/70 pt-16">
            <h2 className="font-display text-3xl text-foreground mb-4">Flipper Zero Demo</h2>
            <p className="text-base leading-7 text-muted-foreground mb-8">
              Here's the portfolio companion app running on a Flipper Zero device:
            </p>

            <div className="rounded-[1.75rem] border border-border bg-card/50 p-8 flex justify-center">
              <Image
                src="/nfc/flipper-image.jpeg"
                alt="Flipper Zero portfolio companion app demo"
                width={400}
                height={400}
                priority
              />
            </div>
          </div>

          <div className="border-t border-border/70 pt-16">
            <h2 className="font-display text-3xl text-foreground mb-4">Why This Matters</h2>
            <div className="grid gap-6 lg:grid-cols-2">
              {whyThisMattersCards.map((card) => (
                <div
                  key={card.title}
                  className="rounded-[1.75rem] border border-border bg-background p-6"
                >
                  <h3 className="font-display text-base text-foreground mb-2">{card.title}</h3>
                  <p className="text-sm leading-6 text-muted-foreground">{card.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="border-t border-border/70 pt-16">
            <h2 className="font-display text-3xl text-foreground mb-4">Technical Stack</h2>
            <div className="flex flex-wrap gap-2">
              {technicalTags.map((tech) => (
                <Tag key={tech}>{tech}</Tag>
              ))}
            </div>
          </div>

          <div className="border-t border-border/70 pt-16 pb-16">
            <h2 className="font-display text-3xl text-foreground mb-4">Future Roadmap</h2>
            <div className="space-y-4">
              {roadmapPhases.map((phase) => (
                <div
                  key={phase.title}
                  className="rounded-[1.75rem] border border-border bg-card/40 p-6"
                >
                  <h3 className="font-display text-base text-foreground mb-2">{phase.title}</h3>
                  <p className="text-sm text-muted-foreground">{phase.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center pt-8">
            <ButtonLink href="/#projects">Back to projects</ButtonLink>
          </div>
        </Container>
      </section>
    </SiteFrame>
  );
}
