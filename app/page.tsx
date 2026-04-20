import { Hero } from "@/components/sections/home/Hero";
import { TrustBar } from "@/components/sections/home/TrustBar";
import { ValueProps } from "@/components/sections/home/ValueProps";
import { ProcessTimeline } from "@/components/sections/home/ProcessTimeline";
import { ServicesPreview } from "@/components/sections/home/ServicesPreview";
import { CaseStudyTeaser } from "@/components/sections/home/CaseStudyTeaser";
import { FAQ } from "@/components/sections/home/FAQ";
import { FinalCTA } from "@/components/sections/home/FinalCTA";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <ValueProps />
      <ProcessTimeline />
      <ServicesPreview />
      <CaseStudyTeaser />
      <FAQ />
      <FinalCTA />
    </>
  );
}
