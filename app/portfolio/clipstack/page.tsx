import type { Metadata } from "next";

import { CaseStudy } from "@/components/portfolio/case-study";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Clipstack Case Study",
  description:
    "A local-first clipboard history for macOS. It lives in the menu bar, keeps recent text and images, and never sends anything off your Mac.",
  path: "/portfolio/clipstack"
});

export default function ClipstackCaseStudyPage() {
  return (
    <CaseStudy
      name="Clipstack"
      headline="Everything you copied, still on your Mac."
      intro="Clipstack is a menu-bar clipboard history for macOS. It quietly keeps the text and images you copy, lets you search them, and puts any of them back on the clipboard. No accounts, no sync, no network access."
      image="/images/projects/clipstack-cover.svg"
      imageAlt="Clipstack popover showing a searchable list of recently copied text and images"
      repoUrl="https://github.com/mohabbis/clipstack"
      facts={[
        { label: "Role", value: "Product design, SwiftUI, AppKit" },
        { label: "Stack", value: "Swift · SwiftUI · SwiftPM · App Sandbox" },
        { label: "Platform", value: "macOS 14 Sonoma and later" },
        { label: "Status", value: "Open source" }
      ]}
      problemTitle="Clipboard managers ask for a lot of trust. This one asks for almost none."
      problem="Your clipboard holds passwords, addresses, and half-written messages. I wanted history without handing any of that to a server or granting Accessibility access, so every decision starts from keeping it small and local."
      decisions={[
        {
          name: "Keyboard first",
          desc: "Open it and start typing. Arrow keys move, Return copies, and Cmd 1-9 grabs one of the first nine items without touching the mouse."
        },
        {
          name: "Stays local",
          desc: "History lives in a sandboxed folder on your Mac. There is no account, sync, telemetry, or network code to trust."
        },
        {
          name: "No Accessibility permission",
          desc: "Clipstack only puts items back on the clipboard. You press Cmd V yourself, so it never needs to simulate keystrokes."
        },
        {
          name: "Privacy you can see",
          desc: "Pause capture in one click with the state always visible, exclude apps, set retention, and delete one item or everything."
        }
      ]}
    />
  );
}
