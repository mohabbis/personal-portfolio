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
      "MuHome is not trying to be another screen full of switches.\n\n- It starts with what the home is doing right now.\n- Common routines like leaving or winding down are easier to find.\n- If automation does something weird, manual control stays close.\n\nThe point is to make the home feel easier to understand, not just give the user more buttons.",
    reasoning:
      "The important difference is not feature count. It is that MuHome prioritizes readable state, routine context, and quick correction.",
    sources: [
      { href: "/portfolio/muhome", title: "MuHome case study" },
      { href: "/portfolio/connected-device-playground", title: "Connected Device Playground" }
    ]
  },
  {
    id: "trust",
    prompt: "How does MuHome reduce automation anxiety for the user?",
    response:
      "It reduces that anxiety by making the system easier to check.\n\n- Device status stays visible.\n- Manual actions and routines live near each other.\n- The app explains changes without making every small thing feel dramatic.\n\nThe goal is simple: people should know what the home is doing without decoding the app.",
    reasoning:
      "Smart-home interfaces often fail when they hide too much behind automation. The trust problem matters more than adding another control.",
    sources: [
      { href: "/portfolio/muhome", title: "MuHome case study" },
      { href: "/experience", title: "Experience" }
    ]
  },
  {
    id: "proof",
    prompt: "What does MuHome prove about Muhammad's product thinking?",
    response:
      "MuHome shows that Muhammad can take a broad idea and make it more specific.\n\n- He identifies the friction: unclear status, buried routines, and too many controls.\n- He turns that into interface priorities instead of just making nice-looking screens.\n- He presents the project clearly enough for someone else to judge the idea.\n\nThat is the product thinking I wanted this project to show.",
    reasoning:
      "The strongest claim this project can make is about judgment. It is a concept, so the focus should be how the idea is framed and explained.",
    sources: [
      { href: "/portfolio/muhome", title: "MuHome case study" },
      { href: "/#about", title: "About" },
      { href: "/#photography", title: "Photography" }
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
            Portfolio preview
          </Shimmer>
        </div>
      </div>

      <p className="mt-4 max-w-3xl text-sm leading-7 text-muted-foreground">
        This panel gives a quick read on MuHome without making someone dig through the full case study first.
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
