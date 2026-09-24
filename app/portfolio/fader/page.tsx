import type { Metadata } from "next";

import { CaseStudy } from "@/components/portfolio/case-study";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Fader Case Study",
  description:
    "A menu-bar audio splitter for macOS. Every app that is playing gets its own volume, mute, and output device.",
  path: "/portfolio/fader"
});

export default function FaderCaseStudyPage() {
  return (
    <CaseStudy
      name="Fader"
      headline="One Mac, every app on its own fader."
      intro="Fader is a menu-bar mixer for macOS. Each app that is playing gets its own volume, mute, and output device, so Spotify can stay on your headphones while the browser plays through the speakers."
      image="/images/projects/fader-app.jpg"
      imageAlt="Fader menu-bar panel with a master slider and, for each playing app, a volume slider, mute button and output picker"
      siteUrl="https://fader.muharafiq.vercel.app"
      repoUrl="https://github.com/mohabbis/fader"
      facts={[
        { label: "Role", value: "Product design, Swift, Core Audio" },
        { label: "Stack", value: "Swift · SwiftUI · Core Audio process taps" },
        { label: "Platform", value: "macOS 14.2 and later" },
        { label: "Status", value: "Open source · MIT" }
      ]}
      problemTitle="macOS gives you one volume and one output. Most days need more than that."
      problem="Music, calls, and videos all fight over the same slider. Fader captures each app with a Core Audio process tap, applies that app's volume, and plays it on the device you pick. Quit it and audio goes back to the system output."
      decisions={[
        {
          name: "Only what's playing",
          desc: "The panel lists apps that are making sound right now, and holds a row for a couple of seconds between tracks so it doesn't flicker."
        },
        {
          name: "Remembers you",
          desc: "Each app's volume, mute, and device are saved. New apps follow the system output until you choose otherwise."
        },
        {
          name: "Handles unplugging",
          desc: "Pull your headphones and that app falls back to the system output, then returns to them when they reconnect."
        },
        {
          name: "Logic you can test",
          desc: "Routing rules, app grouping, and saved settings live in a separate core module with unit tests that run without Core Audio."
        }
      ]}
    />
  );
}
