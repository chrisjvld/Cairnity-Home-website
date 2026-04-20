"use client";

import * as Accordion from "@radix-ui/react-accordion";
import { Plus } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { faqs } from "@/content/faqs";

export function FAQ() {
  return (
    <section className="py-24 md:py-32">
      <div className="container-x">
        <SectionHeading
          eyebrow="Common questions"
          title={
            <>
              Answers to what
              <br />
              <span className="italic text-[--fg-muted]">SMB leaders ask first.</span>
            </>
          }
        />

        <div className="mt-14 grid gap-12 md:grid-cols-[1fr_1.4fr]">
          <div className="hidden md:block">
            <p className="text-[--fg-muted] max-w-sm text-lg">
              Don&apos;t see your question? We answer every email personally —
              usually within the same business day.
            </p>
          </div>

          <Accordion.Root
            type="single"
            collapsible
            className="border-t border-[--border]"
          >
            {faqs.map((f, i) => (
              <Accordion.Item
                key={i}
                value={`item-${i}`}
                className="border-b border-[--border] group"
              >
                <Accordion.Header>
                  <Accordion.Trigger className="flex w-full items-center justify-between gap-6 py-6 text-left text-[--fg] transition-colors hover:text-[--accent] focus-visible:outline-none">
                    <span className="font-display text-xl md:text-2xl text-balance">
                      {f.q}
                    </span>
                    <Plus className="size-5 shrink-0 transition-transform duration-500 group-data-[state=open]:rotate-45 text-[--fg-muted] group-hover:text-[--accent]" />
                  </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content className="overflow-hidden text-[--fg-muted] data-[state=closed]:animate-[accordion-up_0.3s_ease] data-[state=open]:animate-[accordion-down_0.3s_ease]">
                  <div className="pb-6 pr-12 max-w-2xl text-pretty">{f.a}</div>
                </Accordion.Content>
              </Accordion.Item>
            ))}
          </Accordion.Root>
        </div>
      </div>
    </section>
  );
}
