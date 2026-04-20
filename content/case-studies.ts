export interface Metric {
  label: string;
  value: string;
  detail?: string;
}

export interface CaseStudy {
  slug: string;
  client: string;
  industry: string;
  headline: string;
  summary: string;
  metrics: Metric[];
  challenge: string;
  approach: string[];
  outcome: string;
  quote?: { text: string; author: string; role: string };
  duration: string;
  services: string[];
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "ridgeline-logistics",
    client: "Ridgeline Logistics",
    industry: "3PL & Fulfillment",
    headline:
      "Cut quote turnaround from days to minutes for a 60-person freight brokerage.",
    summary:
      "We replaced a brittle spreadsheet-and-email quoting process with an AI-assisted internal tool that drafts, prices, and sends customer quotes in under two minutes — with a human still in the loop on every send.",
    metrics: [
      { value: "94%", label: "Faster quote turnaround", detail: "from 2 days to ~6 minutes" },
      { value: "+38%", label: "Quote-to-book rate", detail: "vs. trailing 90-day baseline" },
      { value: "$420k", label: "Annualised margin lift", detail: "in the first six months" },
    ],
    challenge:
      "Ridgeline's brokers were drowning in inbound RFQs, losing winnable business simply because they couldn't respond fast enough. Their pricing logic lived in a single analyst's head and a sprawling spreadsheet, which made delegation nearly impossible.",
    approach: [
      "Spent two weeks shadowing brokers to map the real quoting workflow end-to-end.",
      "Codified pricing rules into a versioned config that non-engineers could edit safely.",
      "Built a quoting copilot inside their existing TMS that drafts a full quote — including margin, equipment notes, and customer-friendly language — that the broker reviews and sends.",
      "Wired up an evaluation harness that flags quotes drifting from historical pricing patterns for human review.",
    ],
    outcome:
      "Ridgeline now responds to inbound RFQs faster than any competitor in their lane. The analyst who used to be the pricing bottleneck has been promoted into a strategy role, and the team books 38% more of the quotes they send.",
    quote: {
      text: "We hired Cairnity expecting a tool. We got a faster company.",
      author: "Marisol Devereaux",
      role: "COO, Ridgeline Logistics",
    },
    duration: "10 weeks",
    services: ["Workflow audit", "Custom implementation", "Team training"],
  },
  {
    slug: "alder-wealth",
    client: "Alder Wealth Advisors",
    industry: "Independent RIA",
    headline:
      "Reclaimed 1,200 advisor hours a year by automating client-meeting prep.",
    summary:
      "An AI-powered briefing system that pulls together holdings, life events, and recent communications into a one-page meeting prep document — so advisors walk into every conversation already informed.",
    metrics: [
      { value: "1,200 hrs", label: "Reclaimed advisor capacity per year" },
      { value: "11", label: "Advisors using it daily", detail: "across two offices" },
      { value: "100%", label: "Meeting-prep coverage", detail: "up from ~60% manually" },
    ],
    challenge:
      "Alder's advisors were spending the first 45 minutes of every client meeting day pulling together prep across three systems. Quality was inconsistent — newer advisors often went in cold — and the senior partners felt the firm's service standard slipping.",
    approach: [
      "Ran a half-day workshop with all 11 advisors to define what a 'great prep doc' actually looks like.",
      "Built a secure pipeline that pulls from their CRM, portfolio system, and email — never sending client data to public model providers.",
      "Generated a templated prep brief delivered to each advisor's inbox the night before every meeting, with citations back to source records.",
      "Added a feedback loop so advisors can rate briefs and improve the prompts over time.",
    ],
    outcome:
      "Every client meeting now starts with the same high standard of prep. Senior partners report it's the single biggest service-quality improvement they've shipped in five years, and junior advisors are ramping noticeably faster.",
    quote: {
      text: "It's like every advisor on the team got a personal chief of staff.",
      author: "James Okafor",
      role: "Managing Partner, Alder Wealth",
    },
    duration: "8 weeks",
    services: ["AI literacy", "Custom implementation", "Fractional leadership"],
  },
];
