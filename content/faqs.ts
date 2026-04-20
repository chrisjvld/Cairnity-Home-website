export interface Faq {
  q: string;
  a: string;
}

export const faqs: Faq[] = [
  {
    q: "We're not a tech company. Is AI even right for us?",
    a: "Most of our clients aren't tech companies — they're freight brokerages, accounting firms, RIAs, manufacturers, agencies. The right question isn't 'are we technical enough?' It's 'where in our work would faster judgment, faster writing, or faster lookups change what we can offer customers?' That's the conversation we run with you on day one.",
  },
  {
    q: "Will we end up locked into a vendor or platform?",
    a: "No. We're model- and tool-agnostic by design. We build on the tools your team already uses where we can, recommend best-of-breed where we can't, and document everything so a different partner — or your own team — could take it forward.",
  },
  {
    q: "How do you handle our data and our customers' data?",
    a: "Carefully. We default to deployments that keep your data inside your existing trust boundary, use providers with enterprise-grade data agreements (no training on your inputs), and walk through compliance considerations specific to your industry up front. Security review is part of every engagement, not an afterthought.",
  },
  {
    q: "What does a typical engagement cost?",
    a: "Workshops start in the low five figures. Audit engagements typically land between $20–40k depending on scope. Implementation projects vary widely with what we're building — we share a detailed estimate before any work starts, and we don't bill against scope creep we caused. Fractional leadership is a monthly retainer.",
  },
  {
    q: "How quickly can we see results?",
    a: "From a literacy workshop, the same week. From an audit, two to three weeks to a prioritized roadmap. Implementation projects typically ship a working v1 in 6–10 weeks. We optimize for momentum — small, visible wins early, then compound from there.",
  },
  {
    q: "Do you only work with US-based companies?",
    a: "We work primarily with North American and EU SMBs, but we'll happily meet you wherever your team works. Time zones we can solve. Trust we can't fake — so we always start with a free 30-minute conversation.",
  },
];
