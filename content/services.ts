export type ServiceIcon =
  | "graduationCap"
  | "telescope"
  | "wrench"
  | "compass";

export interface Service {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  description: string;
  outcomes: string[];
  deliverables: string[];
  icon: ServiceIcon;
}

export const services: Service[] = [
  {
    id: "literacy",
    slug: "ai-literacy",
    title: "AI Literacy & Workshops",
    tagline: "Bring your whole team up to speed — without the hype.",
    description:
      "Hands-on training tailored to your team's roles and tools. We cut through the noise so people understand what AI can and can't do, and start using it well — by the end of the same week.",
    outcomes: [
      "A common vocabulary across leadership and frontline staff",
      "Confident, safe day-to-day use of modern AI tools",
      "Internal champions who can keep momentum going",
    ],
    deliverables: [
      "Half- or full-day workshops (in-person or remote)",
      "Role-specific playbooks (sales, ops, finance, support)",
      "Curated tool recommendations and prompt libraries",
    ],
    icon: "graduationCap",
  },
  {
    id: "audits",
    slug: "workflow-audits",
    title: "Workflow Audits",
    tagline: "Find the highest-ROI places to apply AI in your business.",
    description:
      "We sit with your teams, map the work as it actually happens, and surface the handful of workflows where AI will deliver outsized leverage — backed by realistic cost and time estimates.",
    outcomes: [
      "A prioritized roadmap of 5–10 high-impact opportunities",
      "Clear effort, cost, and ROI estimates for each",
      "Risk and compliance considerations called out upfront",
    ],
    deliverables: [
      "Process maps for the workflows we touched",
      "Opportunity register with owner and effort estimates",
      "Executive readout and 90-day implementation plan",
    ],
    icon: "telescope",
  },
  {
    id: "implementation",
    slug: "custom-implementation",
    title: "Custom Implementation",
    tagline: "Build the AI tools your business actually needs.",
    description:
      "From an internal copilot for your support team to an autonomous research agent for your analysts — we ship production-grade software that fits cleanly into your stack and your operating reality.",
    outcomes: [
      "Working software in production, not slide decks",
      "Measurable lift on the metric you actually care about",
      "Documentation and handoff your team can own",
    ],
    deliverables: [
      "LLM-powered apps, agents, and integrations",
      "Evaluation harness and observability for ongoing quality",
      "Onboarding sessions and source-of-truth documentation",
    ],
    icon: "wrench",
  },
  {
    id: "fractional",
    slug: "fractional-leadership",
    title: "Fractional AI Leadership",
    tagline: "An experienced AI operator on your leadership team — part-time.",
    description:
      "An ongoing engagement where we own AI strategy, vendor selection, and execution oversight alongside your existing team. The right call for businesses that need senior judgment without a full-time hire.",
    outcomes: [
      "A coherent, prioritized AI roadmap that ships",
      "Vendor and tool decisions made with experience behind them",
      "A team that compounds capability quarter over quarter",
    ],
    deliverables: [
      "Weekly working sessions with leadership",
      "Quarterly strategy reviews and budget guidance",
      "On-call advisory for your team's day-to-day questions",
    ],
    icon: "compass",
  },
];
