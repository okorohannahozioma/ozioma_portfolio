export interface EngineItem {
  meta: string;
  quote: string;
  friction: string;
  channel: string;
  hook: string;
  body: string;
  impact: string;
}

export const ENGINE_DATA: EngineItem[] = [
  {
    meta: "Slack Voice Memo • 1:42min",
    quote: "Honestly Hannah, people obsess over microservices and kubernetes clusters when 90% of early startups are burning $30k a month on infrastructure they don’t need. It’s driven by engineering ego, not business resilience.",
    friction: "The Friction: Brilliant instinct, but lacks the strategic pacing to command enterprise C-suite authority.",
    channel: "LinkedIn Long-Form",
    hook: "“Your infrastructure bill isn’t high because your product is scaling.<br class='hidden sm:inline'/><span class='text-purple-400 italic font-normal'> It’s high because your engineering team’s ego is.”</span>",
    body: "Last month, I looked at a startup burning $34,000/mo on multi-region Kubernetes. Their active users? 412 customers.\n\nWe traded mechanical simplicity for architectural vanity. The best code is the boring monolith that keeps your burn rate below your revenue line.",
    impact: "142k impressions • 2 Enterprise Inbound leads ($180k ACV)",
  },
  {
    meta: "Founder Zoom Note • 0:58min",
    quote: "Why do patients still carry paper folders between clinics? Hospitals hoard records because they're terrified of liability, while people suffer in triage because doctor B has no idea what doctor A prescribed.",
    friction: "The Friction: Raw emotional frustration that needed structured institutional authority to move healthcare partners.",
    channel: "Executive Substack & LinkedIn",
    hook: "“Hospitals don’t hoard patient data to prevent malpractice.<br class='hidden sm:inline'/><span class='text-purple-400 italic font-normal'> They hoard it to defend market share.”</span>",
    body: "In an era where banking records sync globally in 400ms, why does a cardiologist still require a faxed PDF from down the street?\n\nInteroperability was never a technical bottleneck. It is a business model conflict masquerading as regulatory compliance.",
    impact: "84k reads • Direct outreach from 3 state hospital networks",
  },
  {
    meta: "WhatsApp Audio Note • 2:15min",
    quote: "We raised our price by 400% and everybody panicked thinking clients would churn. But our close rates actually doubled. When you sell something to an enterprise for $2k/mo, they literally think it's a toy.",
    friction: "The Friction: Sharp contrarian take that could risk sounding abrasive without buyer psychology framing.",
    channel: "Founder Case Study",
    hook: "“The most expensive mistake we made was pricing our software like a utility<br class='hidden sm:inline'/><span class='text-purple-400 italic font-normal'> instead of an insurance policy.”</span>",
    body: "When we charged $2,000/month, procurement treated us like an experiment. At $8,500/month, our conversion rate doubled.\n\nIn enterprise B2B, low price signals low conviction. Fortune 500s buy the vendor where the cost of failure is already priced in.",
    impact: "280k reach • 45 inbound founder DMs requesting the model",
  },
];