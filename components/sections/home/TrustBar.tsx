import { Marquee } from "@/components/ui/Marquee";

const tools = [
  "OpenAI",
  "Anthropic",
  "Vercel",
  "Supabase",
  "LangChain",
  "Pinecone",
  "Snowflake",
  "Zapier",
  "HubSpot",
  "Airtable",
  "Notion",
  "Slack",
];

export function TrustBar() {
  return (
    <section className="py-16 md:py-20 border-y border-[--border]">
      <div className="container-x">
        <p className="mb-8 text-center text-xs uppercase tracking-[0.25em] text-[--fg-faint]">
          We build with the tools your team already trusts
        </p>
        <Marquee speed="slow">
          {tools.map((t) => (
            <div
              key={t}
              className="font-display text-2xl md:text-3xl text-[--fg-muted] hover:text-[--fg] transition-colors duration-300 select-none"
            >
              {t}
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
