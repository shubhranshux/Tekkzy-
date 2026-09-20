import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowRight,
  BarChart3,
  Check,
  ChevronRight,
  CircleGauge,
  CloudCog,
  Factory,
  HeartPulse,
  Landmark,
  MapPinned,
  PackageCheck,
  PanelTop,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  Store,
  Truck,
  UsersRound,
  type LucideIcon,
} from "lucide-react";

const industryData: Record<
  string,
  {
    name: string;
    kicker: string;
    headline: string;
    description: string;
    icon: LucideIcon;
    accent: string;
    soft: string;
    metrics: { value: string; label: string }[];
    playbook: { title: string; text: string; icon: LucideIcon }[];
    stack: string[];
    quote: string;
    customer: string;
  }
> = {
  retail: {
    name: "Retail",
    kicker: "CONNECTED COMMERCE",
    headline: "Make every customer moment count.",
    description: "Bring storefronts, inventory, customer data, marketing, and fulfillment into one calm operating picture — so teams can move quickly and customers never feel the handoff.",
    icon: Store,
    accent: "#1760ed",
    soft: "#edf4ff",
    metrics: [{ value: "32%", label: "faster replenishment" }, { value: "4.2x", label: "more campaign visibility" }, { value: "99.9%", label: "inventory accuracy" }],
    playbook: [
      { title: "Unified inventory", text: "Keep stock, transfers, and reorder points visible across every location and channel.", icon: PackageCheck },
      { title: "Customer intelligence", text: "Give teams the context to personalize service and build stronger repeat relationships.", icon: UsersRound },
      { title: "Growth workflows", text: "Connect campaigns, conversions, and revenue without stitching reports together by hand.", icon: BarChart3 },
    ],
    stack: ["Commerce operations", "Inventory control", "CRM", "Campaign intelligence", "Analytics"],
    quote: "We can finally see the full customer journey, not just the last transaction.",
    customer: "Head of Digital, multi-location retailer",
  },
  healthcare: {
    name: "Healthcare",
    kicker: "HUMAN-CENTRIC SYSTEMS",
    headline: "Give care teams more time for care.",
    description: "Design secure, connected workflows that reduce administrative friction, improve visibility, and help every patient interaction feel more considered.",
    icon: HeartPulse,
    accent: "#d34f83",
    soft: "#fff0f6",
    metrics: [{ value: "48%", label: "less manual coordination" }, { value: "2.8x", label: "faster case visibility" }, { value: "24/7", label: "secure access" }],
    playbook: [
      { title: "Patient journeys", text: "Orchestrate appointments, communication, documents, and follow-ups in one connected flow.", icon: HeartPulse },
      { title: "Protected data", text: "Build role-aware experiences with clear access controls and a complete activity trail.", icon: ShieldCheck },
      { title: "Operational clarity", text: "Surface capacity, service levels, and bottlenecks before they affect the patient experience.", icon: CircleGauge },
    ],
    stack: ["Patient portals", "Care operations", "Secure data", "Workflow automation", "Service analytics"],
    quote: "The best technology disappears into the workflow and leaves more room for the human work.",
    customer: "Operations lead, growing care network",
  },
  finance: {
    name: "Finance",
    kicker: "TRUSTED BY DESIGN",
    headline: "Move with confidence when the stakes are high.",
    description: "Turn complex financial operations into clear, auditable systems with the security, automation, and reporting leaders need to make faster decisions.",
    icon: Landmark,
    accent: "#6a54dd",
    soft: "#f3f0ff",
    metrics: [{ value: "60%", label: "fewer manual checks" }, { value: "3.5x", label: "faster reporting" }, { value: "100%", label: "audit trail coverage" }],
    playbook: [
      { title: "Control by default", text: "Give every process the right approvals, permissions, and evidence from the start.", icon: ShieldCheck },
      { title: "Always-current reporting", text: "Replace spreadsheet consolidation with live dashboards for cash, risk, and performance.", icon: BarChart3 },
      { title: "Intelligent operations", text: "Automate repetitive checks and surface anomalies while the decision window is still open.", icon: Sparkles },
    ],
    stack: ["Finance operations", "Risk workflows", "BI dashboards", "Audit readiness", "Secure integrations"],
    quote: "Clarity is a competitive advantage when every decision has a cost.",
    customer: "CFO, regional financial services group",
  },
  manufacturing: {
    name: "Manufacturing",
    kicker: "SMARTER OPERATIONS",
    headline: "Make the whole line work as one.",
    description: "Connect planning, production, inventory, quality, and suppliers so teams can spot constraints early and keep work moving with less waste.",
    icon: Factory,
    accent: "#e76520",
    soft: "#fff3eb",
    metrics: [{ value: "28%", label: "faster production planning" }, { value: "40%", label: "less avoidable downtime" }, { value: "3.1x", label: "better supplier visibility" }],
    playbook: [
      { title: "Production control", text: "Keep work orders, capacity, and quality checks aligned from planning through completion.", icon: Factory },
      { title: "Supply chain signal", text: "See demand, stock, supplier risk, and movement in one operating view.", icon: Truck },
      { title: "Continuous improvement", text: "Turn shop-floor data into the next best action for every team.", icon: Sparkles },
    ],
    stack: ["Production planning", "Quality control", "Supply chain", "Warehouse operations", "Predictive analytics"],
    quote: "When the signal is shared, every shift can make a better decision sooner.",
    customer: "COO, precision manufacturing company",
  },
  "real-estate": {
    name: "Real Estate",
    kicker: "PROPERTY INTELLIGENCE",
    headline: "Bring every property decision into focus.",
    description: "Connect property operations, leads, tenants, service teams, and financial performance in a system that makes the portfolio easier to grow.",
    icon: PanelTop,
    accent: "#1b9a78",
    soft: "#edfaf5",
    metrics: [{ value: "2.4x", label: "faster lead response" }, { value: "35%", label: "less operational follow-up" }, { value: "18%", label: "higher portfolio visibility" }],
    playbook: [
      { title: "Lead to lease", text: "Create a consistent path from inquiry to viewing, application, and move-in.", icon: MapPinned },
      { title: "Portfolio view", text: "Unify occupancy, revenue, maintenance, and tenant experience metrics by property.", icon: BarChart3 },
      { title: "Service at scale", text: "Automate requests and handoffs so teams respond faster without losing the human touch.", icon: UsersRound },
    ],
    stack: ["Property CRM", "Leasing workflows", "Maintenance", "Portfolio analytics", "Tenant experience"],
    quote: "We spend less time finding the story in the data and more time acting on it.",
    customer: "Director of Operations, property group",
  },
  logistics: {
    name: "Logistics",
    kicker: "FLOW WITHOUT FRICTION",
    headline: "Keep every shipment moving forward.",
    description: "Coordinate orders, routes, fleet, warehouses, and customer updates with shared data that helps your network adapt in real time.",
    icon: Truck,
    accent: "#d17b1d",
    soft: "#fff7e8",
    metrics: [{ value: "22%", label: "better route efficiency" }, { value: "31%", label: "faster exception handling" }, { value: "96%", label: "on-time visibility" }],
    playbook: [
      { title: "Network visibility", text: "Track the flow from order to delivery with a shared operational source of truth.", icon: Truck },
      { title: "Exception intelligence", text: "Flag delays, capacity issues, and route changes before they become customer surprises.", icon: CircleGauge },
      { title: "Customer confidence", text: "Give customers and teams timely updates that are clear, useful, and connected.", icon: ShoppingBag },
    ],
    stack: ["Order management", "Fleet visibility", "Route planning", "Warehouse control", "Customer updates"],
    quote: "The network is always moving. Our systems finally move with it.",
    customer: "VP Operations, national logistics network",
  },
  education: {
    name: "Education",
    kicker: "CONNECTED LEARNING",
    headline: "Build better journeys for every learner.",
    description: "Unify admissions, learning, communication, operations, and outcomes to help institutions deliver a more personal experience at every stage.",
    icon: UsersRound,
    accent: "#2778d8",
    soft: "#edf6ff",
    metrics: [{ value: "41%", label: "faster student support" }, { value: "3x", label: "more complete learner view" }, { value: "29%", label: "higher engagement signal" }],
    playbook: [
      { title: "Learner 360", text: "Connect enrollment, engagement, support, and outcomes so no learner becomes a blind spot.", icon: UsersRound },
      { title: "Digital campus", text: "Make the everyday experience clearer with portals, workflows, and timely communication.", icon: PanelTop },
      { title: "Evidence-led growth", text: "See what is working across programs and act on the signal with confidence.", icon: BarChart3 },
    ],
    stack: ["Student systems", "Learning portals", "Admissions", "Engagement analytics", "Workflow automation"],
    quote: "A connected experience helps every learner feel seen, supported, and ready for what is next.",
    customer: "Dean of Digital Learning, education group",
  },
};

export function generateStaticParams() {
  return Object.keys(industryData).map((slug) => ({ slug }));
}

export default async function IndustryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const industry = industryData[slug];
  if (!industry) notFound();

  const Icon = industry.icon;

  return (
    <main className="industry-page" style={{ "--industry-accent": industry.accent, "--industry-soft": industry.soft } as React.CSSProperties}>
      <section className="industry-hero section-shell">
        <div className="industry-breadcrumb"><Link href="/product">Products</Link><ChevronRight size={13} /><span>{industry.name}</span></div>
        <div className="industry-hero-grid">
          <div className="industry-hero-copy">
            <span className="industry-kicker"><Icon size={15} /> {industry.kicker}</span>
            <h1>{industry.headline}</h1>
            <p>{industry.description}</p>
            <div className="industry-actions"><Link className="button" href="/contact">Talk to an expert <ArrowRight size={16} /></Link><Link className="button button-outline" href="/product">Explore the platform</Link></div>
            <div className="industry-proof"><span><Check size={15} /> Designed around your workflows</span><span><Check size={15} /> Built to scale with you</span></div>
          </div>
          <div className="industry-hero-art" aria-label={`${industry.name} operating dashboard preview`}>
            <div className="industry-orbit orbit-one" /><div className="industry-orbit orbit-two" />
            <div className="industry-dashboard">
              <div className="industry-dashboard-top"><span className="industry-window-dots"><i /><i /><i /></span><b>{industry.name} intelligence</b><span className="industry-live"><i /> Live</span></div>
              <div className="industry-dashboard-body"><aside><span className="active"><CircleGauge size={14} /> Overview</span><span><BarChart3 size={14} /> Performance</span><span><CloudCog size={14} /> Operations</span><span><ShieldCheck size={14} /> Controls</span></aside><div className="industry-dashboard-content"><small>Today&apos;s operating picture</small><h3>Everything in view.</h3><div className="industry-stat-grid">{industry.metrics.map((metric) => <div key={metric.label}><b>{metric.value}</b><span>{metric.label}</span></div>)}</div><div className="industry-chart"><i /><i /><i /><i /><i /><i /><i /><span /></div></div></div>
            </div>
            <div className="industry-float industry-float-one"><Sparkles size={15} /><span>Next best action</span><b>Ready to review</b></div>
            <div className="industry-float industry-float-two"><ShieldCheck size={15} /><span>System health</span><b>99.9% protected</b></div>
          </div>
        </div>
      </section>

      <section className="industry-metrics section-shell">{industry.metrics.map((metric) => <div key={metric.label}><strong>{metric.value}</strong><span>{metric.label}</span></div>)}<div className="industry-metrics-note"><span>TEKKZY FOR {industry.name.toUpperCase()}</span><b>One connected system for the moments that matter.</b></div></section>

      <section className="industry-playbook section-shell"><div className="industry-section-heading"><span className="eyebrow">THE {industry.name.toUpperCase()} PLAYBOOK</span><h2>Less friction.<br /><span>More momentum.</span></h2><p>Bring the right data, people, and decisions together in the workflows your team already understands.</p></div><div className="industry-playbook-grid">{industry.playbook.map(({ title, text, icon: PlaybookIcon }, index) => <article key={title}><div className="industry-card-number">0{index + 1}</div><div className="industry-card-icon"><PlaybookIcon size={20} /></div><h3>{title}</h3><p>{text}</p><Link href="/contact" aria-label={`Learn more about ${title}`}>Explore this capability <ArrowRight size={14} /></Link></article>)}</div></section>

      <section className="industry-stack"><div className="section-shell industry-stack-inner"><div><span className="eyebrow">BUILT AROUND YOUR REALITY</span><h2>Composable by design.<br /><span>Complete in practice.</span></h2><p>Start with the workflows that matter now. Add intelligence, automation, and new capabilities as your organization grows.</p></div><div className="industry-stack-list">{industry.stack.map((item, index) => <div key={item}><span>{String(index + 1).padStart(2, "0")}</span><b>{item}</b><Check size={15} /></div>)}</div></div></section>

      <section className="industry-quote section-shell"><div className="industry-quote-mark">“</div><blockquote>{industry.quote}</blockquote><span>{industry.customer}</span><div className="industry-quote-line" /></section>

      <section className="industry-cta section-shell"><div><span className="industry-kicker"><Icon size={15} /> READY WHEN YOU ARE</span><h2>Make the next move<br /><span>with more clarity.</span></h2><p>Tell us where the friction is. We&apos;ll help you map a smarter way forward.</p></div><Link className="button" href="/contact">Start a conversation <ArrowRight size={16} /></Link></section>
    </main>
  );
}
