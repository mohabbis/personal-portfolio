"use client";

import { useMemo, useState } from "react";

import {
  Conversation,
  ConversationContent,
  ConversationScrollButton
} from "@/components/ai-elements/conversation";
import {
  Message,
  MessageContent,
  MessageResponse
} from "@/components/ai-elements/message";
import {
  Reasoning,
  ReasoningContent,
  ReasoningTrigger
} from "@/components/ai-elements/reasoning";
import {
  Source,
  Sources,
  SourcesContent,
  SourcesTrigger
} from "@/components/ai-elements/sources";
import {
  Suggestion,
  Suggestions
} from "@/components/ai-elements/suggestion";
import { Shimmer } from "@/components/ai-elements/shimmer";

type BriefPrompt = {
  id: string;
  prompt: string;
  response: string;
  reasoning: string;
  sources: Array<{
    href: string;
    title: string;
  }>;
};

const briefPrompts: BriefPrompt[] = [
  {
    id: "difference",
    prompt: "What makes MuHome different from a generic smart-home dashboard?",
    response:
      "MuHome is framed less like a wall of devices and more like a **decision surface**.\n\n- It starts with the current state of the home, not a long list of controls.\n- Routine-heavy moments like evening wind-down or leaving home get clearer priority.\n- Automation is treated as something the user should trust, inspect, and override quickly.\n\nThat combination makes the concept feel calmer and more believable than a dashboard that simply exposes every switch at once.",
    reasoning:
      "This answer leans on product framing instead of feature count. The important distinction is not that MuHome can control lights, but that it prioritizes readable state, routine context, and fast manual correction.",
    sources: [
      { href: "/portfolio/muhome", title: "MuHome case study" },
      { href: "/portfolio/connected-device-playground", title: "Connected Device Playground" }
    ]
  },
  {
    id: "trust",
    prompt: "How does MuHome reduce automation anxiety for the user?",
    response:
      "The concept reduces automation anxiety by making the system feel **inspectable**.\n\n- Device state stays visible instead of disappearing behind scenes or vague labels.\n- Manual actions and routines live close together, so the user can recover quickly if something feels off.\n- The interface favors low-noise confirmations over constant visual drama.\n\nThe goal is simple: people should understand what the home is doing without needing to decode it.",
    reasoning:
      "Smart-home interfaces often fail when they hide too much behind automation. This answer surfaces the trust angle because that is the sharper product problem than just adding more controls.",
    sources: [
      { href: "/portfolio/muhome", title: "MuHome case study" },
      { href: "/experience", title: "Experience" }
    ]
  },
  {
    id: "proof",
    prompt: "What does MuHome prove about Muhammad's product thinking?",
    response:
      "MuHome shows that Muhammad can move from an abstract space into a **coherent product argument**.\n\n- He identifies the real friction: messy status, weak routine framing, and noisy control layers.\n- He turns that friction into interface priorities rather than decorative mockups.\n- He presents the idea in a way that makes the concept easy to evaluate.\n\nThat is useful product thinking because it connects problem framing, interface decisions, and communication quality.",
    reasoning:
      "The strongest claim this project can make is about judgment. The response therefore focuses on how the concept is framed and defended, not on pretending it is already a fully shipped system.",
    sources: [
      { href: "/portfolio/muhome", title: "MuHome case study" },
      { href: "/about", title: "About" },
      { href: "/photography", title: "Photography" }
    ]
  }
];

export function MuHomeAiBrief() {
  const [activePromptId, setActivePromptId] = useState(briefPrompts[0].id);

  const activePrompt = useMemo(
    () => briefPrompts.find((prompt) => prompt.id === activePromptId) ?? briefPrompts[0],
    [activePromptId]
  );

  return (
    <div className="rounded-[2rem] border border-border bg-card p-6 shadow-soft sm:p-8">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="space-y-2">
          <p className="text-sm uppercase tracking-[0.18em] text-muted-foreground">AI Elements</p>
          <h3 className="font-display text-3xl text-foreground">MuHome briefing panel</h3>
        </div>

        <div className="rounded-full border border-border bg-background px-4 py-2 text-sm text-muted-foreground">
          <Shimmer as="span" className="font-medium">
            AI-powered portfolio preview
          </Shimmer>
        </div>
      </div>

      <p className="mt-4 max-w-3xl text-sm leading-7 text-muted-foreground">
        This is a lightweight portfolio-native assistant surface built with Vercel AI Elements. Instead of a generic
        chatbot shell, it previews how Muhammad frames MuHome as a product concept and explains the thinking behind it.
      </p>

      <div className="mt-6">
        <Suggestions>
          {briefPrompts.map((prompt) => (
            <Suggestion
              key={prompt.id}
              suggestion={prompt.prompt}
              onClick={() => setActivePromptId(prompt.id)}
              variant={activePrompt.id === prompt.id ? "secondary" : "outline"}
            />
          ))}
        </Suggestions>
      </div>

      <Conversation className="mt-6 h-[29rem] rounded-[1.75rem] border border-border bg-background">
        <ConversationContent className="gap-6 p-5 sm:p-6">
          <Message from="user">
            <MessageContent>
              <p>{activePrompt.prompt}</p>
            </MessageContent>
          </Message>

          <Message from="assistant">
            <MessageContent className="max-w-3xl rounded-[1.5rem] border border-border bg-card px-5 py-4 shadow-soft">
              <MessageResponse>{activePrompt.response}</MessageResponse>

              <Reasoning className="mt-4" defaultOpen={false}>
                <ReasoningTrigger />
                <ReasoningContent>{activePrompt.reasoning}</ReasoningContent>
              </Reasoning>

              <Sources className="mt-5">
                <SourcesTrigger count={activePrompt.sources.length} />
                <SourcesContent>
                  {activePrompt.sources.map((source) => (
                    <Source key={source.href} href={source.href} title={source.title} />
                  ))}
                </SourcesContent>
              </Sources>
            </MessageContent>
          </Message>
        </ConversationContent>

        <ConversationScrollButton />
      </Conversation>
    </div>
  );
}
