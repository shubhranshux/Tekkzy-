import {
  Search,
  Globe2,
  Target,
  Share2,
  PenTool,
  Mail,
  PlaySquare,
  TrendingUp,
  Users,
  Star,
  BarChart3,
  CheckCircle2,
  Layers,
  Zap,
  Gauge,
  LineChart,
  ShieldCheck,
  LucideIcon,
} from "lucide-react";

export interface ServiceDetail {
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  color: string;
  gradient: string;
  image: string;
  overview: string;
  metrics: { value: string; label: string; desc: string }[];
  pillars: { title: string; desc: string; highlights: string[] }[];
  process: { step: string; phase: string; title: string; desc: string }[];
  deliverables: string[];
  tools: string[];
  faqs: { question: string; answer: string }[];
}

export const SERVICES_MAP: Record<string, ServiceDetail> = {
  "seo": {
    slug: "seo",
    title: "Search Engine Optimization",
    subtitle: "Topical Authority, Technical Health & Compounding Organic Growth",
    category: "Organic Search",
    color: "#f59e0b",
    gradient: "linear-gradient(135deg, rgba(245, 158, 11, 0.15), rgba(245, 158, 11, 0.02))",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80",
    overview:
      "Search Engine Optimization (SEO) at Tekkzy is built on technical accuracy, semantic content architectures, and authoritative entity building. Rather than chasing short-lived algorithmic tricks, we engineer long-term organic search dominance that turns high-intent buyer searches into dependable inbound pipeline.",
    metrics: [
      { value: "312%", label: "Average Traffic Increase", desc: "Across sustained 6-month campaigns" },
      { value: "Top 3", label: "Target Keyword Placements", desc: "For primary high-intent commercial terms" },
      { value: "< 1.2s", label: "Core Web Vitals LCP", desc: "Technical performance speed score" },
      { value: "4.8x", label: "Organic ROI Multiple", desc: "Calculated against alternative PPC costs" },
    ],
    pillars: [
      {
        title: "Technical SEO & Site Architecture",
        desc: "Ensuring search engine crawlers can index, interpret, and rank every strategic page without friction.",
        highlights: [
          "Core Web Vitals & mobile page experience audit",
          "Structured data, JSON-LD schema, & rich snippets",
          "Crawl budget optimization & canonical tag hygiene",
          "Internal linking graph & semantic taxonomy modeling",
        ],
      },
      {
        title: "Topical Authority & Content Strategy",
        desc: "Building deep content clusters that satisfy user intent across informational, commercial, and transactional queries.",
        highlights: [
          "Search intent mapping & competitive content gap analysis",
          "Pillar-cluster content architecture planning",
          "Entity-based SEO and semantic keyword coverage",
          "E-E-A-T credibility framework implementation",
        ],
      },
      {
        title: "Authority Building & Digital PR",
        desc: "Securing contextual editorial backlinks and brand mentions from top-tier publications in your domain.",
        highlights: [
          "White-hat contextual link acquisition & brand citations",
          "Digital PR campaigns & industry resource creation",
          "Competitor backlink profile reverse engineering",
          "Unlinked brand mention reclamation & broken link updates",
        ],
      },
      {
        title: "Local Search & Multi-Location SEO",
        desc: "Dominating local map packs and high-intent regional searches for service areas.",
        highlights: [
          "Google Maps 3-Pack geo-ranking optimization",
          "Local citation consistency (NAP) across 50+ directories",
          "Location-specific landing pages and localized schema",
          "Review generation velocity & geo-tagged engagement",
        ],
      },
    ],
    process: [
      { step: "01", phase: "Discovery & Audit", title: "Comprehensive Deep Audit", desc: "Full crawl inspection across 100+ technical checkpoints, indexation errors, backlink toxicity, and competitive positioning." },
      { step: "02", phase: "Strategy", title: "Keyword & Entity Mapping", desc: "Structuring your target keyword hierarchy and defining pillar topics based on commercial intent and search volume." },
      { step: "03", phase: "Execution", title: "On-Page & Technical Remediation", desc: "Direct implementation of title tags, header hierarchies, schema markup, site speed improvements, and internal linking." },
      { step: "04", phase: "Content", title: "Content Engine Deployment", desc: "Publishing and optimizing high-impact articles, comparison guides, and landing pages designed to rank and convert." },
      { step: "05", phase: "Scale", title: "Backlink Outreach & Monitoring", desc: "Sustained digital PR, backlink acquisition, rank tracking, and ongoing algorithm updates adaptation." },
    ],
    deliverables: [
      "Initial 40+ page comprehensive Technical SEO audit & health scorecard",
      "Prioritized keyword target roadmap organized by intent and difficulty",
      "Full JSON-LD structured data implementation across all page types",
      "Bi-weekly ranking updates and keyword position velocity reports",
      "Monthly executive organic traffic and assisted-conversion dashboard",
      "Continuous algorithmic monitoring and proactive optimization adjustments",
    ],
    tools: ["Google Search Console", "Ahrefs Enterprise", "SEMrush", "Screaming Frog", "PageSpeed Insights", "SurferSEO"],
    faqs: [
      {
        question: "How long does it typically take to see measurable SEO results?",
        answer: "Initial indexing improvements and technical crawl fixes often show positive movement within 4 to 8 weeks. Compounding organic traffic gains and competitive page-one rankings typically mature between 3 to 6 months as domain authority builds.",
      },
      {
        question: "Do you guarantee first-position Google rankings?",
        answer: "No reputable agency guarantees position #1 because search engines frequently update their algorithms. Instead, we guarantee rigorous adherence to white-hat guidelines, comprehensive technical excellence, and transparent progress metrics.",
      },
      {
        question: "How does SEO integrate with paid advertising?",
        answer: "SEO and paid search complement each other. Insights from paid ad search queries inform organic content targets, while top organic rankings reduce reliance on expensive PPC bidding for brand terms.",
      },
    ],
  },
  "google-business-profile": {
    slug: "google-business-profile",
    title: "Google Business Profile",
    subtitle: "Local Map Dominance, Review Acceleration & High-Intent Footfall",
    category: "Local Discovery",
    color: "#2f8aef",
    gradient: "linear-gradient(135deg, rgba(47, 138, 239, 0.15), rgba(47, 138, 239, 0.02))",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1200&q=80",
    overview:
      "Your Google Business Profile (GBP) is often the very first touchpoint a prospective local customer encounters. We turn local search into your most reliable customer acquisition engine through map-pack ranking optimization, reputation engineering, photo updates, and structured attribute management.",
    metrics: [
      { value: "4.7x", label: "Local Map Pack Clicks", desc: "Increase in direction & call requests" },
      { value: "#1-3", label: "Google Maps 3-Pack Rank", desc: "Within high-density service radii" },
      { value: "85%", label: "Local Search Intent Rate", desc: "Searches converting into contact within 24h" },
      { value: "+180%", label: "Direct Phone Calls", desc: "Generated straight from Google Search" },
    ],
    pillars: [
      {
        title: "Profile Architecture & Verification",
        desc: "Meticulously structuring every profile field to align with Google's local algorithmic ranking signals.",
        highlights: [
          "Primary and secondary category selection strategy",
          "Exact NAP (Name, Address, Phone) data consistency",
          "Geographic service area polygon definition",
          "Custom business description embedded with localized terms",
        ],
      },
      {
        title: "Review Velocity & Reputation Management",
        desc: "Transforming customer sentiment into a self-sustaining local ranking flywheel.",
        highlights: [
          "Systematic post-purchase review request workflows",
          "Keyword-rich, brand-aligned public review responses",
          "Flagging and dispute management for fraudulent reviews",
          "Star rating protection and sentiment monitoring",
        ],
      },
      {
        title: "Local Citations & Geotagged Media",
        desc: "Establishing undeniable geographic relevance across search ecosystems.",
        highlights: [
          "High-resolution geotagged visual asset uploads",
          "Consistent citation distribution across tier-1 directories",
          "Weekly Google Posts announcing offers and updates",
          "Menu, product catalog, and service list integration",
        ],
      },
      {
        title: "Local Map Pack Analytics & Grid Tracking",
        desc: "Tracking hyper-local rankings block by block across your target operating radius.",
        highlights: [
          "Geo-grid ranking heatmaps tracking positions mile by mile",
          "Competitor proximity analysis and visibility scoring",
          "Call tracking and UTM-tagged website click attribution",
          "Monthly discovery vs direct search performance audits",
        ],
      },
    ],
    process: [
      { step: "01", phase: "Audit", title: "NAP Consistency & Profile Check", desc: "Diagnosing current map rankings, category mismatches, duplicate listings, and citation discrepancies." },
      { step: "02", phase: "Optimization", title: "Complete Profile Remodel", desc: "Rewriting business descriptions, selecting optimal primary categories, and uploading branded geo-tagged imagery." },
      { step: "03", phase: "Content", title: "Weekly Google Updates & Products", desc: "Setting up automated weekly posts, featured product showcases, and FAQ entries directly inside GBP." },
      { step: "04", phase: "Citations", title: "Directory Sync & Citation Building", desc: "Syncing information across Apple Maps, Bing Places, Justdial, Yelp, and localized trade directories." },
      { step: "05", phase: "Reviews", title: "Review Generation Workflow", desc: "Implementing automated review capture systems with QR codes and SMS triggers to steadily climb star ratings." },
    ],
    deliverables: [
      "Complete Google Business Profile overhaul and category calibration",
      "Local geo-grid ranking heatmap report measuring block-by-block ranks",
      "Directory audit cleaning duplicate listings and broken citations",
      "Monthly scheduled Google Updates and promotional visual assets",
      "Customer review generation templates and QR card design assets",
      "Transparent monthly call, click-to-map, and website visit reports",
    ],
    tools: ["Google Business Profile API", "Local Falcon", "BrightLocal", "Whitespark", "PlePer Tools"],
    faqs: [
      {
        question: "Why is the Google 3-Pack so critical for local businesses?",
        answer: "The Google 3-Pack occupies prime screen real estate above regular organic search results on mobile and desktop. It captures over 40% of all local search clicks and produces the highest immediate conversion rate.",
      },
      {
        question: "Can multiple physical locations be managed under one brand?",
        answer: "Yes, we handle multi-location GBP setups with unified reporting while keeping each location's geo-relevance, reviews, and specific service menus strictly localized.",
      },
      {
        question: "How do Google reviews impact local search rankings?",
        answer: "Review quantity, review velocity (how often new reviews arrive), overall star rating, and the keywords customers use in their reviews are among the top ranking signals for local search algorithms.",
      },
    ],
  },
  "paid-advertising": {
    slug: "paid-advertising",
    title: "Paid Advertising (PPC)",
    subtitle: "High-Intent Search, Meta Performance & ROAS-Driven Scale",
    category: "Paid Performance",
    color: "#1760ed",
    gradient: "linear-gradient(135deg, rgba(23, 96, 237, 0.15), rgba(23, 96, 237, 0.02))",
    image: "https://images.unsplash.com/photo-1611926653458-09294b3142bf?w=1200&q=80",
    overview:
      "We build paid media architectures where every rupee spent is tracked directly against pipeline and closed revenue. From high-intent Google Search campaigns capturing urgent demand to scalable Meta and LinkedIn social ads generating brand interest, our PPC systems are optimized for maximum return on ad spend.",
    metrics: [
      { value: "4.8x", label: "Average Campaign ROAS", desc: "Target return on ad spend across client accounts" },
      { value: "-42%", label: "Lower Cost Per Acquisition", desc: "Compared to pre-audit benchmark averages" },
      { value: "99.8%", label: "Attribution Accuracy", desc: "Server-side tracking & Conversion API sync" },
      { value: "15M+", label: "Targeted Paid Impressions", desc: "Delivered to verified buyer demographics" },
    ],
    pillars: [
      {
        title: "Google Search & Performance Max",
        desc: "Capturing buyers at the exact moment they search for your solutions.",
        highlights: [
          "Single-theme ad groups with exact match keyword bidding",
          "Comprehensive negative keyword libraries preventing wasted spend",
          "Responsive search ads with continuous headline A/B testing",
          "Performance Max asset group optimization with audience signals",
        ],
      },
      {
        title: "Meta Ads (Instagram & Facebook)",
        desc: "Scalable direct-response visual campaigns reaching qualified buyer profiles.",
        highlights: [
          "Interest, demographic, and Lookalike audience modeling",
          "High-converting video and carousel ad creative production",
          "Full-funnel remarketing targeting non-converting visitors",
          "Dynamic product ads syncing directly with your inventory",
        ],
      },
      {
        title: "B2B LinkedIn Advertising",
        desc: "Precise account-based targeting targeting decision-makers by job title and company size.",
        highlights: [
          "Job title, seniority, and industry segmentation",
          "Sponsored content, lead gen forms, and document ads",
          "Matched Audiences syncing your CRM contact lists",
          "High-ticket B2B lead qualification frameworks",
        ],
      },
      {
        title: "Server-Side Tracking & First-Party Data",
        desc: "Bulletproof conversion attribution resilient against cookie depreciation and iOS privacy updates.",
        highlights: [
          "Meta Conversions API (CAPI) & Google Enhanced Conversions",
          "Google Tag Manager server-side container deployment",
          "Offline conversion import syncing closed sales to ad accounts",
          "Multi-touch attribution modeling across the entire buyer journey",
        ],
      },
    ],
    process: [
      { step: "01", phase: "Tracking", title: "Conversion Tracking Architecture", desc: "Setting up server-side pixels, custom events, and Google Analytics 4 tracking to guarantee zero data loss." },
      { step: "02", phase: "Research", title: "Audience & Competitor Intelligence", desc: "Mining competitor ad libraries, researching search queries, and segmenting target buyer cohorts." },
      { step: "03", phase: "Creative", title: "High-Converting Ad Copy & Visuals", desc: "Writing persuasive copy angles and designing high-stopping-power creatives tailored to each platform." },
      { step: "04", phase: "Launch", title: "Granular Campaign Launch", desc: "Deploying campaigns with strict budget caps, manual bid controls, and structured testing environments." },
      { step: "05", phase: "Scale", title: "Daily Bid & ROAS Optimization", desc: "Pruning underperforming segments, shifting budget to winning creatives, and scaling spend profitably." },
    ],
    deliverables: [
      "Custom server-side conversion tracking setup (Meta CAPI + Google Enhanced)",
      "Dedicated ad creative library with multiple format variations (1:1, 9:16, 16:9)",
      "Weekly negative keyword pruning and search term optimization logs",
      "A/B creative testing reports identifying top-performing hooks and CTAs",
      "Live 24/7 client performance dashboard with real-time spend and ROAS metrics",
      "Bi-weekly strategic review aligning ad spend with business revenue goals",
    ],
    tools: ["Google Ads", "Meta Ads Manager", "LinkedIn Campaign Manager", "Google Tag Manager", "GA4", "Looker Studio"],
    faqs: [
      {
        question: "How do you prevent wasted ad spend?",
        answer: "We employ comprehensive negative keyword lists, tight geographic radiuses, strict placement exclusions, and daily search query monitoring to ensure your budget is never spent on irrelevant clicks.",
      },
      {
        question: "What minimum ad budget is recommended to start?",
        answer: "We recommend an ad spend budget that allows at least 30 to 50 conversions per month for the algorithmic bidding models to learn and optimize effectively, tailored to your specific industry CPCs.",
      },
      {
        question: "Who owns the ad accounts and creative assets?",
        answer: "You retain 100% full ownership of your ad accounts, pixel data, and creative assets. Tekkzy is granted manager access, ensuring complete transparency at all times.",
      },
    ],
  },
  "social-media-marketing": {
    slug: "social-media-marketing",
    title: "Social Media Marketing",
    subtitle: "Organic Community Building, Content Narrative & Brand Resonance",
    category: "Brand Presence",
    color: "#e54d75",
    gradient: "linear-gradient(135deg, rgba(229, 77, 117, 0.15), rgba(229, 77, 117, 0.02))",
    image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=1200&q=80",
    overview:
      "Modern social media is no longer about broadcast posting; it is about building cultural relevance, narrative momentum, and loyal community. We plan, write, design, and manage high-engagement content architectures across Instagram, LinkedIn, and emerging platforms that turn passive scrollers into passionate brand advocates.",
    metrics: [
      { value: "4.2x", label: "Average Engagement Surge", desc: "Saves, shares, and substantive comments" },
      { value: "68%", label: "Audience Retention Rate", desc: "Short-form video completion metric" },
      { value: "24/7", label: "Community Monitoring", desc: "Direct message and comment response coverage" },
      { value: "100%", label: "Original Creative", desc: "No generic stock graphics or recycled templates" },
    ],
    pillars: [
      {
        title: "Content Strategy & Visual Identity",
        desc: "Establishing a coherent tone, editorial voice, and design standard that distinguishes your brand.",
        highlights: [
          "Bespoke brand design language and typographic styling",
          "Content pillars balancing education, entertainment, and trust",
          "Monthly editorial calendar with theme-based story arcs",
          "Fast-turnaround trend reactive content creation",
        ],
      },
      {
        title: "Short-Form Video & Reels Production",
        desc: "Capitalizing on algorithm-favored video content designed to maximize reach.",
        highlights: [
          "Hook-driven scriptwriting optimized for high retention",
          "Dynamic captions, sound design, and motion typography",
          "Platform-native pacing tailored for Instagram and LinkedIn",
          "Founder-led personal branding and behind-the-scenes storytelling",
        ],
      },
      {
        title: "Community Management & Engagement",
        desc: "Nurturing genuine human relationships within comments and direct messages.",
        highlights: [
          "Active daily reply protocols across all public comments",
          "Outbound engagement with complementary creators and brands",
          "DM conversation workflows routing qualified leads to sales",
          "Reputation risk mitigation and community sentiment tracking",
        ],
      },
      {
        title: "Analytics & Audience Growth Intelligence",
        desc: "Translating social metrics into actionable product and audience insights.",
        highlights: [
          "Detailed saves vs shares virality diagnostic reports",
          "Follower demographic, location, and active hour analysis",
          "Content format benchmarking (Reel vs Carousel vs Static)",
          "Conversion tracking attributing web traffic from social links",
        ],
      },
    ],
    process: [
      { step: "01", phase: "Voice", title: "Brand Voice & Visual Standards", desc: "Defining your social identity, color palettes, typographic hierarchy, and community engagement guidelines." },
      { step: "02", phase: "Planning", title: "Monthly Editorial Calendar", desc: "Mapping out a balanced 30-day schedule of carousels, videos, stories, and thought-leadership pieces." },
      { step: "03", phase: "Production", title: "High-End Asset Creation", desc: "Designing carousel graphics, writing persuasive captions, and editing short-form video reels." },
      { step: "04", phase: "Publishing", title: "Optimal Scheduling & Management", desc: "Distributing content during peak audience activity times with strategic hashtag clustering." },
      { step: "05", phase: "Community", title: "Daily Community Interaction", desc: "Replying to comments, engaging with followers, and turning DMs into warm client relationships." },
    ],
    deliverables: [
      "Custom monthly editorial calendar with pre-approved publishing dates",
      "12 to 20 bespoke designed posts, infographics, and carousel sets",
      "4 to 8 high-retention edited short-form video reels with custom audio",
      "Daily comment and message response coverage according to brand SOPs",
      "Monthly comprehensive reach, impressions, and engagement audit",
      "Dedicated link-in-bio hub directing social traffic to key offerings",
    ],
    tools: ["Figma", "Adobe After Effects", "Buffer", "Hootsuite", "Meta Business Suite", "Sprout Social"],
    faqs: [
      {
        question: "How often should my business publish on social media?",
        answer: "Quality and consistency always outperform sheer volume. We typically recommend 3 to 5 high-value, beautifully produced posts per week combined with daily story updates for maximum algorithmic favor and audience loyalty.",
      },
      {
        question: "Can social media generate direct B2B client inquiries?",
        answer: "Yes, especially on platforms like LinkedIn and Instagram when content focuses on case studies, actionable frameworks, and founder authority. Many of our clients report direct inquiries originating in direct messages.",
      },
      {
        question: "Do you create the video content or does our team need to record?",
        answer: "We support both models: our team can produce complete motion graphics and animated reels independently, or we provide your team with detailed recording scripts and edit your raw footage into polished reels.",
      },
    ],
  },
  "content-marketing": {
    slug: "content-marketing",
    title: "Content Marketing",
    subtitle: "Thought Leadership, Pillar Articles & Buyer Journey Enablement",
    category: "Organic Authority",
    color: "#896dff",
    gradient: "linear-gradient(135deg, rgba(137, 109, 255, 0.15), rgba(137, 109, 255, 0.02))",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&q=80",
    overview:
      "Content marketing is the compound interest of modern business. We build authoritative editorial engines that educate buyers, answer critical objections, and establish your brand as the undeniable benchmark in your space. Every piece of content is engineered for both human readability and search engine topical authority.",
    metrics: [
      { value: "3.8x", label: "Time On Page Average", desc: "High engagement on long-form editorial pieces" },
      { value: "62%", label: "Assisted Conversion Rate", desc: "Articles read prior to contact initiation" },
      { value: "100%", label: "Original Research Driven", desc: "No generic AI filler or shallow summaries" },
      { value: "+210%", label: "Inbound Backlink Velocity", desc: "Earned naturally from authoritative citations" },
    ],
    pillars: [
      {
        title: "Pillar-Cluster Topic Architecture",
        desc: "Organizing your domain knowledge into structured hubs that signal comprehensive topical authority.",
        highlights: [
          "Definitive ultimate guides (pillar pages) anchored on primary terms",
          "Supporting sub-topic clusters answering long-tail search intent",
          "Structured internal cross-linking guiding reader discovery",
          "Content lifecycle auditing and evergreen refresh schedules",
        ],
      },
      {
        title: "Customer Journey Content Mapping",
        desc: "Creating content specifically aligned with each stage of customer consideration.",
        highlights: [
          "Top-of-funnel educational problem discovery articles",
          "Middle-of-funnel comparison and evaluation frameworks",
          "Bottom-of-funnel case studies and implementation breakdowns",
          "Customer enablement guides reducing post-purchase churn",
        ],
      },
      {
        title: "Original Research & Whitepapers",
        desc: "Publishing proprietary data reports that industry publications cite as reference benchmarks.",
        highlights: [
          "Industry survey design and quantitative data synthesis",
          "Downloadable whitepapers and comprehensive benchmark reports",
          "Interactive calculators and downloadable workflow templates",
          "Press-ready data infographics engineered for digital PR sharing",
        ],
      },
      {
        title: "Content Repurposing Flywheel",
        desc: "Maximizing the leverage of every single primary long-form asset across multiple channels.",
        highlights: [
          "Transforming long-form articles into LinkedIn carousel decks",
          "Extracting quote cards and infographic snippets for social media",
          "Adapting written articles into video script concepts and newsletters",
          "Creating quick-reference PDF summaries for sales team enablement",
        ],
      },
    ],
    process: [
      { step: "01", phase: "Research", title: "Topical Gap & Intent Audit", desc: "Analyzing search queries, customer questions, and competitor content gaps to build an editorial pipeline." },
      { step: "02", phase: "Briefing", title: "Comprehensive Editorial Briefs", desc: "Structuring each article with primary keywords, semantic entities, target word counts, and expert interview notes." },
      { step: "03", phase: "Writing", title: "In-Depth Expert Authoring", desc: "Drafting thoroughly researched, clear, and engaging articles that demonstrate genuine subject matter mastery." },
      { step: "04", phase: "Design", title: "Custom Visuals & Diagrams", desc: "Creating bespoke diagrams, charts, and header graphics that make complex concepts visually intuitive." },
      { step: "05", phase: "Syndication", title: "Distribution & Amplification", desc: "Distributing through email newsletters, social networks, and community channels for initial readership." },
    ],
    deliverables: [
      "Quarterly content strategy roadmap aligned with commercial goals",
      "2 to 6 deep-dive long-form articles (1,500 - 3,000+ words) per month",
      "Custom branded visual charts, frameworks, and infographic diagrams",
      "Ready-to-publish CMS formatting with complete on-page SEO meta tags",
      "Content repurposing kits (LinkedIn carousels + newsletter editions)",
      "Quarterly content performance and organic ranking contribution reviews",
    ],
    tools: ["Clearscope", "SurferSEO", "Notion", "Figma", "Google Docs", "Ahrefs"],
    faqs: [
      {
        question: "How is your content marketing different from generic AI-generated articles?",
        answer: "AI produces predictable, average summaries of what already exists on Google. Our writers craft unique perspectives with real-world examples, proprietary insights, customized diagrams, and rigorous fact-checking that build genuine intellectual authority.",
      },
      {
        question: "How does content marketing directly contribute to revenue?",
        answer: "High-value content answers customer questions before they speak with sales, shortens sales cycles, builds trust that justifies premium pricing, and continuously captures organic search demand without ongoing ad spend.",
      },
      {
        question: "Can our team review and approve articles before publication?",
        answer: "Yes, our editorial workflow includes collaborative review stages where your subject matter experts can provide feedback, add anecdotes, and approve final drafts before anything goes live.",
      },
    ],
  },
  "email-marketing": {
    slug: "email-marketing",
    title: "Email & Marketing Automation",
    subtitle: "Automated Lifecycle Flows, Retention Engineering & Inbox Deliverability",
    category: "Lifecycle Marketing",
    color: "#1ba77e",
    gradient: "linear-gradient(135deg, rgba(27, 167, 126, 0.15), rgba(27, 167, 126, 0.02))",
    image: "https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=1200&q=80",
    overview:
      "Email marketing delivers the highest ROI of any digital channel because you own the audience. We build sophisticated marketing automation workflows, behavior-triggered nurture series, and high-converting editorial newsletters that keep your brand top of mind and systematically convert subscribers into loyal buyers.",
    metrics: [
      { value: "42:1", label: "Average Email ROI", desc: "Industry benchmark for owned email marketing" },
      { value: "48.6%", label: "Average Open Rate", desc: "Achieved through smart domain warming & segmentation" },
      { value: "99.4%", label: "Inbox Placement Rate", desc: "Rigorous SPF, DKIM, and DMARC technical hygiene" },
      { value: "+38%", label: "Repeat Customer Revenue", desc: "Driven by automated post-purchase lifecycle flows" },
    ],
    pillars: [
      {
        title: "Technical Deliverability & Domain Health",
        desc: "Ensuring your emails land squarely in the primary inbox rather than the spam or promotions tab.",
        highlights: [
          "Complete SPF, DKIM, DMARC, and BIMI record authentication",
          "Domain reputation monitoring and dedicated IP warming",
          "Automated list hygiene pruning unengaged subscribers",
          "Spam-trigger word scanning and HTML payload optimization",
        ],
      },
      {
        title: "Automated Lifecycle Customer Journeys",
        desc: "Setting up intelligent, behavior-triggered flows that nurture prospects around the clock.",
        highlights: [
          "High-converting 5-part welcome series introducing your brand",
          "Browse abandonment and abandoned checkout recovery workflows",
          "Post-purchase onboarding and VIP customer appreciation series",
          "Win-back and re-engagement flows for inactive subscribers",
        ],
      },
      {
        title: "Audience Segmentation & Dynamic Personalization",
        desc: "Sending the right message to the right person at the precise right moment.",
        highlights: [
          "Behavioral segmentation based on purchase frequency and RFM tiers",
          "Dynamic content blocks tailored to past browsing history",
          "Predictive send-time optimization matching individual open habits",
          "Multi-branch conditional logic adapting to user interactions",
        ],
      },
      {
        title: "Editorial Newsletters & Promotional Campaigns",
        desc: "Creating value-driven newsletters that subscribers genuinely look forward to reading.",
        highlights: [
          "Clean, minimalist, responsive email layout design",
          "Compelling, curiosity-driven subject line A/B testing",
          "Strategic seasonal promotional calendar planning",
          "Clear, single-action conversion architecture in every broadcast",
        ],
      },
    ],
    process: [
      { step: "01", phase: "Audit", title: "Deliverability & Technical Setup", desc: "Verifying DNS authentication, cleaning stale contact lists, and analyzing historical open and bounce metrics." },
      { step: "02", phase: "Infrastructure", title: "Core Lifecycle Automation", desc: "Designing and building the 4 essential automated flows: Welcome, Abandoned Cart, Post-Purchase, and Winback." },
      { step: "03", phase: "Design", title: "Bespoke Responsive Templates", desc: "Crafting on-brand, accessible email templates optimized for dark mode and mobile mail clients." },
      { step: "04", phase: "Segmentation", title: "List Segmentation Rules", desc: "Organizing your subscriber base into high-intent segments based on engagement recency and purchase behavior." },
      { step: "05", phase: "Testing", title: "Continuous A/B Testing", desc: "Testing subject lines, preview text, send times, and CTA layouts to systematically raise engagement rates." },
    ],
    deliverables: [
      "Complete DNS security authentication (SPF, DKIM, DMARC) setup",
      "Full library of 4+ automated lifecycle email flows with custom copy",
      "Mobile-responsive, dark-mode tested master email newsletter templates",
      "Weekly or bi-weekly scheduled broadcast campaign creation and dispatch",
      "Comprehensive monthly deliverability, open rate, and attribution reports",
      "List hygiene maintenance protocols keeping bounce rates below 1%",
    ],
    tools: ["Klaviyo", "Mailchimp", "Brevo", "HubSpot", "Litmus", "ZeroBounce"],
    faqs: [
      {
        question: "Why do our current emails land in the spam or promotions folder?",
        answer: "Common culprits include missing DKIM/DMARC records, sending to stale unverified lists, high spam complaint rates, heavy image-only layouts, or using spam-triggering words in subject lines. We remediate all these factors.",
      },
      {
        question: "How many automated flows should a business have?",
        answer: "Every business should have at least four foundational flows: Welcome/Induction, Cart/Intent Abandonment, Post-Purchase Nurture, and Inactive Re-engagement. Advanced setups include VIP rewards and replenishment reminders.",
      },
      {
        question: "Can email marketing integrate with our CRM or e-commerce platform?",
        answer: "Yes, we integrate email automation platforms with Shopify, WooCommerce, WordPress, custom APIs, and CRMs like HubSpot and Salesforce for real-time customer data synchronization.",
      },
    ],
  },
  "cinematic-video-marketing": {
    slug: "cinematic-video-marketing",
    title: "Cinematic Video Marketing",
    subtitle: "High-Retention Visual Storytelling, Brand Films & Short-Form Edits",
    category: "Video Production",
    color: "#d75062",
    gradient: "linear-gradient(135deg, rgba(215, 80, 98, 0.15), rgba(215, 80, 98, 0.02))",
    image: "https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?w=1200&q=80",
    overview:
      "Video commands more consumer attention than all other digital formats combined. We conceptualize, script, edit, and optimize cinematic brand films, high-retention social reels, and educational YouTube content that arrest attention within the first three seconds and drive lasting emotional brand recall.",
    metrics: [
      { value: "3.2s", label: "Average Hook Hold Time", desc: "Capturing viewer attention before scroll-away" },
      { value: "82%", label: "Average Video Watch Time", desc: "Maintained through dynamic editorial pacing" },
      { value: "4K UHD", label: "Cinematic Master Exports", desc: "Color-graded broadcast-quality deliverables" },
      { value: "5.4x", label: "Higher Share Rate", desc: "Compared to static image or carousel assets" },
    ],
    pillars: [
      {
        title: "Short-Form Social Video & Reels",
        desc: "Engineering high-velocity vertical videos designed specifically for platform algorithms.",
        highlights: [
          "Psychological hook construction within frames 0 to 90",
          "Dynamic kinetic subtitles and sound design accents",
          "Seamless looping edit techniques maximizing replay counts",
          "Platform-specific aspect ratios (9:16 vertical priority)",
        ],
      },
      {
        title: "Cinematic Brand Films & Product Showcases",
        desc: "Crafting aspirational flagship films that define your company's stature.",
        highlights: [
          "Story-driven narrative arc articulating your founder mission",
          "Professional color grading and cinematic sound design",
          "3D product motion graphics and visual effects integration",
          "Modular edits formatted for website hero banners and keynote decks",
        ],
      },
      {
        title: "YouTube Channel Strategy & Long-Form Content",
        desc: "Building a durable video library that generates organic search traffic for years.",
        highlights: [
          "High-CTR thumbnail concepting and A/B packaging design",
          "Comprehensive YouTube SEO optimization (tags, chapters, transcripts)",
          "Content structure designed to maximize watch time and session duration",
          "End screen and playlist retention funnels keeping viewers on-channel",
        ],
      },
      {
        title: "Direct-Response Paid Video Creatives",
        desc: "Videos built with the explicit goal of driving clicks, signups, and sales.",
        highlights: [
          "UGC (User-Generated Content) style authentic product demonstrations",
          "Problem-agitation-solution visual structure",
          "Multiple opening hook variations for multivariate ad testing",
          "Clear, high-contrast visual call-to-actions throughout",
        ],
      },
    ],
    process: [
      { step: "01", phase: "Concept", title: "Creative Concept & Storyboarding", desc: "Brainstorming core themes, scripting opening hooks, and developing shot lists and visual storyboards." },
      { step: "02", phase: "Scripting", title: "Retention-Engineered Scripting", desc: "Writing tight, compelling dialogue and voiceover copy timed precisely to second-by-second pacing." },
      { step: "03", phase: "Production", title: "Filming & Asset Collection", desc: "Capturing footage or curating high-definition B-roll, product capture, and voice talent recordings." },
      { step: "04", phase: "Post-Production", title: "Editing, Color & Sound Design", desc: "Executing pacing cuts, kinetic motion text, cinematic color grades, and multi-track audio mastering." },
      { step: "05", phase: "Delivery", title: "Multi-Platform Export & Delivery", desc: "Exporting in high-bitrate formats optimized for YouTube, Instagram Reels, TikTok, and web embeds." },
    ],
    deliverables: [
      "Custom video concept decks, scripts, and shot-by-shot storyboards",
      "Full 4K master exports and platform-optimized compressed files",
      "Multiple hook variations (3 to 5 unique intros) for paid ad testing",
      "Custom branded thumbnail packages with high-contrast typography",
      "Burned-in animated kinetic captions and clean subtitle tracks (.SRT)",
      "Sound design master files with fully licensed commercial audio tracks",
    ],
    tools: ["DaVinci Resolve Studio", "Adobe Premiere Pro", "After Effects", "Epidemic Sound", "CapCut Pro", "Figma"],
    faqs: [
      {
        question: "Can you edit videos if we already have raw footage recorded?",
        answer: "Absolutely. Many clients send us raw footage from their phones or cameras, and our editors transform it into polished, dynamic videos with captions, color grading, sound design, and motion graphics.",
      },
      {
        question: "What is the typical turnaround time for a video project?",
        answer: "Short-form social reels are typically edited and delivered within 48 to 72 hours. Comprehensive cinematic brand films or commercial product videos take 2 to 3 weeks from scripting to final delivery.",
      },
      {
        question: "Are all background music tracks licensed for commercial advertising?",
        answer: "Yes, 100% of the music tracks, sound effects, and voiceovers we use are fully licensed for commercial use and paid advertising with zero copyright strike risk.",
      },
    ],
  },
  "conversion-rate-optimization": {
    slug: "conversion-rate-optimization",
    title: "Conversion Rate Optimization (CRO)",
    subtitle: "UX Auditing, A/B Hypothesis Testing & Frictionless Buying Funnels",
    category: "Conversion Engineering",
    color: "#e95812",
    gradient: "linear-gradient(135deg, rgba(233, 88, 18, 0.15), rgba(233, 88, 18, 0.02))",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80",
    overview:
      "Driving website traffic is useless if your visitors fail to convert. Our CRO methodology combines quantitative analytics, heatmap user session recordings, and empirical A/B testing to identify friction points and systematically turn a higher percentage of existing visitors into paying customers without increasing ad spend.",
    metrics: [
      { value: "+64%", label: "Average Conversion Rate Lift", desc: "Across primary checkout & lead generation funnels" },
      { value: "95%+", label: "Statistical Significance", desc: "Rigorous scientific benchmark for all A/B test calls" },
      { value: "-28%", label: "Form Abandonment Drop", desc: "Achieved through streamlined input architectures" },
      { value: "2.4x", label: "Pipeline Value from Same Traffic", desc: "Direct revenue expansion without extra media cost" },
    ],
    pillars: [
      {
        title: "User Experience & Friction Auditing",
        desc: "Diagnosing the exact psychological and technical roadblocks preventing conversions.",
        highlights: [
          "Session recording analysis uncovering user hesitation patterns",
          "Scroll map and click heatmap diagnostic evaluations",
          "Mobile usability, touch target, and viewport friction reviews",
          "Checkout and lead capture form field drop-off analysis",
        ],
      },
      {
        title: "Hypothesis-Driven A/B Testing",
        desc: "Validating every design decision with empirical user conversion data.",
        highlights: [
          "Structured testing roadmaps prioritized by ICE score framework",
          "Headline, value proposition, and CTA placement testing",
          "Social proof hierarchy and trust badge positioning experiments",
          "Page layout, pricing table, and feature comparison A/B splits",
        ],
      },
      {
        title: "Persuasive Copywriting & Cognitive Ergonomics",
        desc: "Aligning page narrative with buyer psychology to eliminate purchase anxiety.",
        highlights: [
          "Clarifying confusing technical jargon into immediate value statements",
          "Addressing buyer objections and risk reversals (guarantees/security)",
          "Microcopy optimization for form labels, buttons, and error states",
          "Visual hierarchy guiding eyes effortlessly toward the conversion goal",
        ],
      },
      {
        title: "Landing Page Architecture & Speed Optimization",
        desc: "Engineering razor-fast dedicated landing pages customized for specific traffic sources.",
        highlights: [
          "Sub-1-second mobile load time optimization",
          "Dynamic text replacement matching visitor search keywords",
          "Single-objective conversion funnels with zero navigation leaks",
          "Sticky mobile call-to-actions ensuring perpetual conversion access",
        ],
      },
    ],
    process: [
      { step: "01", phase: "Telemetry", title: "Quantitative & Qualitative Telemetry", desc: "Deploying heatmaps, session recording software, and setting up granular funnel step tracking in GA4." },
      { step: "02", phase: "Heuristic", title: "Heuristic UX Evaluation", desc: "Inspecting every page element against verified conversion principles to compile a list of friction points." },
      { step: "03", phase: "Hypothesis", title: "Prioritized Testing Roadmap", desc: "Formulating test hypotheses with expected lift and ranking them based on Impact, Confidence, and Ease." },
      { step: "04", phase: "Engineering", title: "A/B Variant Design & Launch", desc: "Designing high-fidelity test variants and implementing code in split-testing software." },
      { step: "05", phase: "Validation", title: "Statistical Analysis & Rollout", desc: "Monitoring test traffic until 95%+ statistical significance is reached, then pushing winners live permanently." },
    ],
    deliverables: [
      "Full-funnel UX and conversion friction diagnostic teardown report",
      "Heatmap, scroll map, and session recording behavioral summary decks",
      "Prioritized ICE-scored A/B testing backlog roadmap",
      "High-fidelity Figma wireframes and prototypes of test variants",
      "Monthly test result scorecards showing conversion rate deltas and ROI",
      "Permanent code deployment of winning variants to production",
    ],
    tools: ["Hotjar", "Microsoft Clarity", "Google Optimize / VWO", "Figma", "GA4", "Mixpanel"],
    faqs: [
      {
        question: "How much website traffic is required to run meaningful A/B tests?",
        answer: "A/B testing is most effective with at least 15,000 to 20,000 monthly unique visitors so tests reach statistical confidence within 2 to 4 weeks. For lower traffic sites, we execute qualitative heuristic improvements that deliver immediate baseline lifts.",
      },
      {
        question: "Can CRO improve conversion without redesigning our entire website?",
        answer: "Yes. In fact, isolated element tests (such as headline rewrites, simplified form steps, and social proof repositioning) often generate larger conversion gains than risky, expensive site-wide redesigns.",
      },
      {
        question: "How do you ensure changes do not hurt existing SEO rankings?",
        answer: "We ensure all test variants maintain critical heading structures, content keywords, schema markup, and metadata so your search visibility is protected while conversions increase.",
      },
    ],
  },
  "influencer-marketing": {
    slug: "influencer-marketing",
    title: "Influencer & Creator Marketing",
    subtitle: "Authentic Creator Partnerships, Cultural Endorsement & Viral Reach",
    category: "Creator Alliances",
    color: "#7157ee",
    gradient: "linear-gradient(135deg, rgba(113, 87, 238, 0.15), rgba(113, 87, 238, 0.02))",
    image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1200&q=80",
    overview:
      "Consumers trust creators far more than corporate advertisements. We engineer high-credibility influencer campaigns by partnering with niche authorities, subject matter creators, and cultural figures whose audiences directly match your buyer demographic. Every partnership is grounded in authentic product integration and performance accountability.",
    metrics: [
      { value: "5.1x", label: "Earned Media Value (EMV)", desc: "Average return compared to traditional media buy" },
      { value: "0%", label: "Fake Follower Exposure", desc: "Rigorous algorithmic bot & engagement audit" },
      { value: "120+", label: "Vetted Creator Network", desc: "Across tech, lifestyle, business, and retail" },
      { value: "3.6x", label: "Higher Trust Score", desc: "Compared to brand-sponsored commercial claims" },
    ],
    pillars: [
      {
        title: "Creator Discovery & Authenticity Vetting",
        desc: "Screening partners through deep data analysis to ensure zero fake audience inflation.",
        highlights: [
          "Follower authenticity and engagement rate historical audits",
          "Audience demographic, age, location, and gender alignment",
          "Brand safety screening and historical content review",
          "Niche category authority and audience sentiment checks",
        ],
      },
      {
        title: "Campaign Concepting & Creative Briefs",
        desc: "Equipping creators with creative freedom while maintaining strict brand messaging guardrails.",
        highlights: [
          "Story-first campaign hooks aligned with your product value",
          "Comprehensive briefs detailing do's, don'ts, and required talking points",
          "Sample script guidelines ensuring authentic organic tone",
          "Multi-format package agreements (Reels, Stories, Dedicated Videos)",
        ],
      },
      {
        title: "Contracting, Negotiation & Rights Management",
        desc: "Handling end-to-end commercial negotiations and digital usage rights.",
        highlights: [
          "Fixed-fee and performance-tiered hybrid compensation structures",
          "Full digital whitelisting (Spark Ads & Partnership Ads) rights",
          "Clear milestone deliverables and approval timeline contracts",
          "Perpetual organic usage rights for brand owned channels",
        ],
      },
      {
        title: "Performance Tracking & Attribution",
        desc: "Measuring actual business impact through trackable links, codes, and post-campaign data.",
        highlights: [
          "Unique creator promo codes and UTM-tagged attribution links",
          "Real-time tracking of impressions, saves, shares, and clicks",
          "Conversion and revenue tracking per creator partner",
          "Comprehensive post-campaign ROI and audience sentiment analysis",
        ],
      },
    ],
    process: [
      { step: "01", phase: "Strategy", title: "Campaign Persona & Goals", desc: "Defining target audience profiles, campaign deliverables, product hooks, and primary performance KPIs." },
      { step: "02", phase: "Scouting", title: "Creator Discovery & Vetting", desc: "Sourcing 30 to 50 vetted candidates and analyzing audience demographics, engagement quality, and brand fit." },
      { step: "03", phase: "Contracting", title: "Outreach & Deal Negotiation", desc: "Securing competitive rates, deliverable schedules, and digital ad usage rights under formal agreement." },
      { step: "04", phase: "Approval", title: "Content Review & Approval", desc: "Reviewing draft videos, captions, and tags to ensure message accuracy before public distribution." },
      { step: "05", phase: "Amplification", title: "Whitelisting & Paid Boosts", desc: "Running paid Partnership Ads directly through top-performing creator handles to scale winning content." },
    ],
    deliverables: [
      "Curated creator roster with complete demographic and engagement scorecards",
      "Comprehensive creator creative brief and production guideline documents",
      "Executed legal contracts securing deliverables and digital ad usage rights",
      "Pre-screened and approved final video and photo assets before publish",
      "Live attribution spreadsheet tracking coupon codes, clicks, and sales",
      "End-of-campaign performance deck with earned media value calculation",
    ],
    tools: ["Modash", "HypeAuditor", "CreatorIQ", "Upfluence", "Meta Partnership Ads Manager"],
    faqs: [
      {
        question: "How do you detect fake or bought followers?",
        answer: "We use diagnostic tools like Modash and HypeAuditor to evaluate comment-to-follower ratios, sudden spikes in audience history, geographic clustering anomalies, and bot comment patterns before recommending any creator.",
      },
      {
        question: "What is creator whitelisting (Partnership Ads)?",
        answer: "Whitelisting allows us to run paid ads directly through a creator's verified social profile with their permission. This combines the trust of a creator endorsement with the laser-targeted reach of the Meta ad algorithm.",
      },
      {
        question: "Should we work with macro-influencers or micro-influencers?",
        answer: "Micro-influencers (10k to 100k followers) frequently deliver 3x to 5x higher engagement and significantly greater authenticity at a fraction of the cost. We typically recommend diversified portfolios balancing both.",
      },
    ],
  },
  "reputation-management": {
    slug: "reputation-management",
    title: "Reputation & PR Marketing",
    subtitle: "Brand Protection, Executive Authority & Media Placement",
    category: "Reputation Defense",
    color: "#d99c0b",
    gradient: "linear-gradient(135deg, rgba(217, 156, 11, 0.15), rgba(217, 156, 11, 0.02))",
    image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=1200&q=80",
    overview:
      "Trust takes years to build and seconds to destroy. Our reputation and PR systems actively monitor public sentiment, suppress defamatory search results, amplify positive editorial coverage, and establish your executive leadership as recognized voices in your industry across major digital publications.",
    metrics: [
      { value: "98%", label: "Positive Brand Sentiment", desc: "Maintained across Google page one search results" },
      { value: "< 15m", label: "Crisis Alert Latency", desc: "Rapid brand mention notification and triage" },
      { value: "4.9★", label: "Average Review Score", desc: "Across Google, Trustpilot, and Glassdoor" },
      { value: "35+", label: "Earned Press Features", desc: "Placed in mainstream and trade publications" },
    ],
    pillars: [
      {
        title: "Search Engine Reputation Defense (SERM)",
        desc: "Owning the entire first page of Google for your brand and founder names.",
        highlights: [
          "Optimizing positive web properties to dominate brand search results",
          "Suppressing unfair negative third-party links and defamatory reviews",
          "Claiming and verifying brand profiles across 40+ authoritative platforms",
          "Wikipedia page evaluation, creation, and guideline compliance",
        ],
      },
      {
        title: "Digital PR & Editorial Media Placements",
        desc: "Securing authoritative coverage that builds credibility and earns high-tier backlinks.",
        highlights: [
          "Strategic press release drafting and wire service distribution",
          "Direct journalist pitching across business and trade publications",
          "HARO / Connectively expert commentary placement",
          "Founder podcast interviews and guest keynote speaking features",
        ],
      },
      {
        title: "Review Generation & Star Rating Elevation",
        desc: "Building an overwhelming wall of authentic positive reviews across review sites.",
        highlights: [
          "Systematic post-sale review invitation workflows",
          "Multi-platform monitoring (Google, Trustpilot, G2, Glassdoor)",
          "Professional public response protocols for negative feedback",
          "Legal removal appeals for policy-violating fraudulent reviews",
        ],
      },
      {
        title: "Executive Thought Leadership",
        desc: "Positioning your C-suite as forward-thinking industry authorities on LinkedIn and media.",
        highlights: [
          "Ghostwritten long-form executive essays and industry commentary",
          "LinkedIn personal brand growth management for founders",
          "Media interview prep, talking points, and op-ed submissions",
          "Industry award nominations and credential verification",
        ],
      },
    ],
    process: [
      { step: "01", phase: "Audit", title: "Brand Reputation Audit", desc: "Cataloging all current Google results, review site scores, news mentions, and social sentiment patterns." },
      { step: "02", phase: "Defense", title: "Digital Property Perimeter Setup", desc: "Claiming, optimizing, and interlinking authoritative brand assets to dominate page one search results." },
      { step: "03", phase: "PR", title: "Media Narrative & Press Angles", desc: "Developing compelling newsworthy angles around company milestones, research, and innovations." },
      { step: "04", phase: "Pitching", title: "Journalist & Editor Outreach", desc: "Pitching story angles directly to vetted reporters, podcasters, and industry publications." },
      { step: "05", phase: "Monitoring", title: "24/7 Brand Sentinel Monitoring", desc: "Real-time automated scanning across news, Reddit, forums, and social channels for immediate response." },
    ],
    deliverables: [
      "Initial 360-degree Brand Health & Search Sentiment Audit report",
      "Network of 15+ verified, optimized brand profile assets created and linked",
      "Monthly customized digital PR pitches and journalist outreach campaigns",
      "Automated multi-channel review generation workflow integrations",
      "Quarterly executive thought leadership op-ed and article placements",
      "Real-time alert dashboard monitoring brand and executive mentions",
    ],
    tools: ["Brandwatch", "Muck Rack", "HARO / Connectively", "Reputation.com", "Google Alerts", "BuzzSumo"],
    faqs: [
      {
        question: "Can unfair or false negative reviews be legally removed?",
        answer: "Yes. Google, Trustpilot, and other platforms maintain strict community standards against hate speech, conflicts of interest, spam, and factual fabrications. We systematically gather evidence and appeal policy-violating reviews through official dispute channels.",
      },
      {
        question: "How do you push negative search results off page one?",
        answer: "By creating, optimizing, and building high authority for positive, brand-owned assets (such as press releases, executive profiles, Crunchbase entries, YouTube channels, and digital PR features), we push unhelpful links down onto page two and three where less than 2% of users ever look.",
      },
      {
        question: "How is Digital PR different from traditional advertising?",
        answer: "Advertising is paid promotion where you control the placement. Digital PR is earned media coverage where respected journalists write about your brand because of its story value. Earned coverage carries significantly higher trust, authority, and SEO value.",
      },
    ],
  },
  "affiliate-marketing": {
    slug: "affiliate-marketing",
    title: "Affiliate & Performance Marketing",
    subtitle: "Partner Ecosystems, Multi-Touch Attribution & Scalable Revenue Share",
    category: "Performance Alliances",
    color: "#2ba88e",
    gradient: "linear-gradient(135deg, rgba(43, 168, 142, 0.15), rgba(43, 168, 142, 0.02))",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=1200&q=80",
    overview:
      "Affiliate and performance partner marketing allows you to acquire customers on a 100% pay-for-performance model. We build, recruit, manage, and scale high-producing partner programs connecting your brand with niche publishers, review websites, media buyers, and affiliate creators who promote your products at zero upfront risk.",
    metrics: [
      { value: "0 Upfront", label: "Media Spend Risk", desc: "Commissions paid strictly on verified closed revenue" },
      { value: "32%+", label: "Affiliate Revenue Share", desc: "Contribution to total company top-line revenue" },
      { value: "99.9%", label: "Fraud Prevention Rate", desc: "Real-time IP, cookie, and bot conversion validation" },
      { value: "250+", label: "Active Publisher Network", desc: "Vetted niche reviewers, comparison hubs, and media outlets" },
    ],
    pillars: [
      {
        title: "Commission Architecture & Program Design",
        desc: "Designing profitable commission structures that incentivize top publishers without eroding margins.",
        highlights: [
          "Tiered commission models rewarding high-volume partner tiers",
          "Competitive commission benchmarking against industry leaders",
          "Cookie duration (30 to 90 days) and first-click vs last-click rules",
          "Comprehensive affiliate terms of service preventing brand bidding abuses",
        ],
      },
      {
        title: "Targeted Publisher Recruitment & Onboarding",
        desc: "Proactively recruiting high-authority content sites and industry comparison platforms.",
        highlights: [
          "Direct outreach to top-ranking niche comparison and review websites",
          "Streamlined partner onboarding with custom creative asset kits",
          "Dedicated publisher communications and promotional announcements",
          "Exclusive discount code generation for strategic tier-1 partners",
        ],
      },
      {
        title: "Attribution Tracking & Anti-Fraud Security",
        desc: "Guaranteeing precision tracking while eliminating fraudulent commissions.",
        highlights: [
          "Server-to-server (S2S) postback and pixel tracking integration",
          "Automated detection of coupon-scraping browser extension hijacking",
          "Brand-name PPC keyword bidding violation monitoring and enforcement",
          "Cross-device and multi-channel attribution deduplication",
        ],
      },
      {
        title: "Partner Enablement & Revenue Optimization",
        desc: "Arming your partners with the tools, banners, and copy they need to sell effectively.",
        highlights: [
          "High-converting banner ad sets, text links, and copy swipe files",
          "Deep-linking tools enabling affiliates to link directly to specific SKUs",
          "Monthly partner newsletters featuring upcoming product promotions",
          "Co-branded landing page creation for high-volume VIP publishers",
        ],
      },
    ],
    process: [
      { step: "01", phase: "Design", title: "Program Architecture & Economics", desc: "Setting commission rates, payout schedules, program rules, and legal affiliate terms of service." },
      { step: "02", phase: "Software", title: "Tracking Platform Integration", desc: "Installing tracking pixels, postbacks, and product catalogs on platforms like Impact, ShareASale, or Rewardful." },
      { step: "03", phase: "Recruitment", title: "Proactive Publisher Sourcing", desc: "Reaching out directly to 100+ relevant publishers, bloggers, and comparison hubs in your industry." },
      { step: "04", phase: "Enablement", title: "Partner Tooling & Asset Distribution", desc: "Providing affiliates with high-performing banners, text copy, coupon codes, and product review units." },
      { step: "05", phase: "Optimization", title: "Fraud Auditing & Scaling", desc: "Reviewing conversions for validity, pruning non-performers, and scaling commissions for top producers." },
    ],
    deliverables: [
      "Custom affiliate program structure and competitive commission framework",
      "Complete technical tracking installation (S2S postbacks & webhook integration)",
      "Affiliate legal Terms & Conditions preventing brand bidding and cookie stuffing",
      "Full digital creative kit (banners, social assets, copy swipe files, email copy)",
      "Proactive monthly outreach to 50+ new potential publishing partners",
      "Monthly affiliate revenue, commission audit, and fraud protection report",
    ],
    tools: ["Impact.com", "ShareASale", "CJ Affiliate", "Rewardful", "Everflow", "BrandVerity"],
    faqs: [
      {
        question: "How do you prevent affiliates from bidding on our own brand keywords in Google Ads?",
        answer: "We enforce strict Terms of Service that explicitly forbid paid search bidding on brand terms, misspellings, and brand+coupon variations. We utilize automated monitoring tools like BrandVerity to catch and immediately disqualify any violators.",
      },
      {
        question: "What tracking platform is best for our business?",
        answer: "For SaaS and subscription businesses, platforms like Rewardful or PartnerStack excel with recurring commission logic. For e-commerce and retail, networks like Impact.com and ShareASale provide vast publisher ecosystems and robust anti-fraud filters.",
      },
      {
        question: "When are affiliate commissions paid out?",
        answer: "Commissions are typically locked after your standard customer return/refund window (e.g., 30 days post-purchase) so you only ever pay commissions on legitimate, retained revenue.",
      },
    ],
  },
};
