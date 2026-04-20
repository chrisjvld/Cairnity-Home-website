import { PageHero } from "@/components/sections/PageHero";
import { ServicePillar } from "@/components/sections/services/ServicePillar";
import { EngagementModels } from "@/components/sections/services/EngagementModels";
import { FinalCTA } from "@/components/sections/home/FinalCTA";
import { services } from "@/content/services";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Services",
  description:
    "AI literacy workshops, workflow audits, custom implementation, and fractional AI leadership for small and mid-sized businesses.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title={
          <>
            Four ways we put AI to work
            <br />
            <span className="italic text-[--fg-muted]">in your business.</span>
          </>
        }
        description="From a single workshop to a multi-quarter retainer, every Cairnity engagement is led by senior operators with skin in the game."
      />

      <section className="py-12 md:py-20">
        <div className="container-x space-y-32 md:space-y-40">
          {services.map((s, i) => (
            <ServicePillar key={s.id} service={s} index={i} />
          ))}
        </div>
      </section>

      <EngagementModels />

      <FinalCTA />
    </>
  );
}
