import { PageHero } from "@/components/sections/PageHero";
import { Story } from "@/components/sections/about/Story";
import { Principles } from "@/components/sections/about/Principles";
import { FounderCard } from "@/components/sections/about/FounderCard";
import { CairnMeaning } from "@/components/sections/about/CairnMeaning";
import { FinalCTA } from "@/components/sections/home/FinalCTA";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "About",
  description:
    "Cairnity is an AI consultancy for small and mid-sized businesses, founded by senior operators who've shipped applied AI in the real world.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title={
          <>
            Senior operators,
            <br />
            <span className="italic text-[--fg-muted]">applied to your business.</span>
          </>
        }
        description="Cairnity is a small consultancy by design. Every engagement is led by people who've shipped real software, run real teams, and felt real customer pressure."
      />

      <Story />
      <Principles />
      <FounderCard />
      <CairnMeaning />
      <FinalCTA />
    </>
  );
}
