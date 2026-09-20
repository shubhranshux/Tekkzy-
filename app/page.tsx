import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  Check,
  ChevronRight,
  CircleCheck,
  Cloud,
  Code2,
  Cpu,
  Database,
  Gem,
  Heart,
  Layers3,
  LineChart,
  MessageCircle,
  Network,
  Play,
  Rocket,
  ShieldCheck,
  Sparkles,
  Users,
  Workflow,
  Zap,
} from "lucide-react";
import WhoWeAre from "@/components/about/who-we-are";
import LandingMotion from "@/components/landing/landing-motion";
import ProductEcosystem from "@/components/landing/product-ecosystem";

const products = ["ERP", "CRM", "HR Suite", "Inventory", "Analytics", "AI Assistant", "Automation", "Digital Marketing", "SEO"];
const trusted = ["Novara", "Lumen", "Piotra", "Cloudify", "Zenith", "Orbit", "Nexora", "Velora"];
const values = [
  { title: "Connected Solutions", text: "Everything works together across your business.", icon: Network, tone: "blue" },
  { title: "AI Automation", text: "Work smarter with intelligent workflows.", icon: Sparkles, tone: "violet" },
  { title: "Business Intelligence", text: "See clearly. Decide confidently.", icon: BarChart3, tone: "green" },
  { title: "Scalable Technology", text: "Built to grow with you.", icon: Layers3, tone: "orange" },
  { title: "People Experience", text: "Simple tools your teams love.", icon: Heart, tone: "pink" },
];

const plans = [
  { name: "Basic", price: "₹1,000", text: "For small teams starting their digital journey.", features: ["Core features", "Email support", "Standard integrations", "Simple reporting"], tone: "basic" },
  { name: "Standard", price: "₹2,500", text: "Ideal for growing businesses that need more power.", features: ["Everything in Basic", "Team collaboration tools", "Priority support", "Analytics and reports"], tone: "standard", popular: true },
  { name: "Advanced", price: "₹5,000", text: "For larger teams with advanced needs.", features: ["Everything in Standard", "Advanced automation", "API access", "24/7 support"], tone: "advanced" },
];

function SectionLabel({ children }: { children: React.ReactNode }) {
  return <div className="landing-label"><span />{children}</div>;
}

function MiniDashboard() {
  return (
    <div className="mini-dashboard">
      <div className="mini-dashboard-top"><span className="mini-brand-dot" /> <b>tekkzy</b><span className="mini-dashboard-user">Welcome back, Arjun</span></div>
      <div className="mini-dashboard-body">
        <aside><span className="active"><Cloud size={12} /> Overview</span><span><BarChart3 size={12} /> Analytics</span><span><Users size={12} /> People</span><span><Workflow size={12} /> Automation</span><span><Database size={12} /> Data</span></aside>
        <div className="mini-dashboard-main"><p className="mini-muted">Your business overview</p><h4>Good morning, Arjun</h4><div className="metric-row"><div><small>Revenue</small><strong>₹12,40,000</strong><em>+18.4%</em></div><div><small>Active users</small><strong>1,284</strong><em>+8.2%</em></div><div><small>Projects</small><strong>48</strong><em>+12.1%</em></div></div><div className="mini-chart"><span /><span /><span /><span /><span /><span /><span /></div></div>
      </div>
    </div>
  );
}

export default function HomePage() {
  return (
    <LandingMotion><div className="landing-page" id="top">
      <section className="landing-hero">
        <div className="landing-hero-copy">
          <SectionLabel>Intelligent Cloud Platform</SectionLabel>
          <h1>Smart Technology<br />for a <span>Stronger<br />Tomorrow</span></h1>
          <p>Empower your business with intelligent, connected, and scalable technology designed to simplify complexity and accelerate growth.</p>
          <div className="landing-actions"><Link className="landing-primary" href="/contact">Get Started <ArrowRight size={15} /></Link><button className="landing-video"><span><Play size={12} fill="currentColor" /></span> Watch Video</button></div>
          <div className="hero-proof"><span><CircleCheck size={15} /> AI-Driven Platforms</span><span><Zap size={15} /> Built for Growth</span><span><Users size={15} /> People-Centric</span></div>
        </div>
        <div className="landing-hero-art">
          <div className="hero-grid-glow" />
          <div className="hero-photo"><Image src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&q=80" alt="Tekkzy team building with technology" fill priority sizes="(max-width: 780px) 94vw, 54vw" style={{ objectFit: "cover", objectPosition: "50% 40%" }} /></div>
          <div className="hero-card hero-card-top"><span className="hero-card-icon"><Sparkles size={15} /></span><small>AI Assistant</small><b>Always on</b></div>
          <div className="hero-card hero-card-chart"><small>Business Growth</small><b>+32%</b><div className="hero-sparkline"><i /><i /><i /><i /><i /><i /></div></div>
          <div className="hero-card hero-card-bottom"><small>Real Revenue</small><b>₹12,40,000</b><span>+18.4% this month</span></div>
          <div className="hero-note">Technology<br />that works<br /><i>for people</i><svg viewBox="0 0 100 18"><path d="M2 14C28 4 61 2 98 9" /></svg></div>
        </div>
      </section>

      <div className="trust-strip"><span className="trust-heading">Trusted by businesses across industries</span>{trusted.map((name) => <span className="trust-logo" key={name}><Gem size={13} />{name}</span>)}</div>

      <WhoWeAre />

      <ProductEcosystem />

      <section className="process-section landing-section"><div className="process-copy"><SectionLabel>How It Works</SectionLabel><h2>From Idea to <span>Impact</span></h2><p>A simple, streamlined process to get you from concept to fully functional solution.</p><div className="process-steps">{[["01", "Choose a Plan", "Select the right plan that fits your needs."], ["02", "Chat With Us", "Discuss your business requirements and goals."], ["03", "Share the Data", "Share the data, assets, and details."], ["04", "We Build", "Our team designs and customizes the solution."], ["05", "Launch & Grow", "Go live and start experiencing the power of technology."]].map(([number, title, text]) => <div className="process-step" key={number}><b>{number}</b><div><strong>{title}</strong><p>{text}</p></div></div>)}</div></div><div className="process-art"><div className="process-path" /><div className="process-tile tile-plan"><span>01</span><Gem size={20} /><b>Plan</b></div><div className="process-tile tile-discover"><span>02</span><Network size={20} /><b>Discover</b></div><div className="process-tile tile-build"><span>03</span><Code2 size={20} /><b>Build</b></div><div className="process-tile tile-launch"><span>04</span><Rocket size={20} /><b>Launch</b></div><div className="process-note">Your goals.<br /><i>Our process.</i><br />Real results.</div></div></section>

      <section className="values-section landing-section"><div className="values-heading"><SectionLabel>Built for Business</SectionLabel><h2>Built for <span>Higher</span></h2><p>We combine innovation, simplicity, and real-world experience to deliver technology that makes a difference.</p></div><div className="values-grid">{values.map(({ title, text, icon: Icon, tone }) => <article className={`value-card value-${tone}`} key={title}><div className="value-icon"><Icon size={20} /></div><h3>{title}</h3><p>{text}</p></article>)}</div></section>



      <section className="pricing-section landing-section"><div className="pricing-heading"><SectionLabel>Pricing</SectionLabel><h2>Flexible Plans for <span>Every Business</span></h2><p>Choose a plan that fits your needs. Upgrade anytime as you grow.</p></div><div className="pricing-grid">{plans.map((plan) => <article className={`pricing-card plan-${plan.tone}`} key={plan.name}>{plan.popular && <div className="popular-pill">Most Popular</div>}{plan.tone === "advanced" && <div className="advanced-badge"><span>✦</span> Built for scale</div>}<div className="pricing-card-icon"><Layers3 size={18} /></div><h3>{plan.name}</h3><p>{plan.text}</p><strong className="plan-price">{plan.price}<small>/month</small></strong><ul>{plan.features.map((feature, featureIndex) => <li key={`${plan.name}-${featureIndex}`}><Check size={13} />{feature}</li>)}</ul><Link href="/contact" className="plan-link">Get Started <ArrowRight size={14} /></Link><div className="plan-orb" /></article>)}</div></section>

      <section className="testimonial-section landing-section"><div className="testimonial-image"><Image src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80" alt="Tekkzy customer success" fill sizes="(max-width: 780px) 94vw, 38vw" style={{ objectFit: "cover", objectPosition: "52% 50%" }} /><div className="testimonial-company"><b>The Crest</b><span>Customer since 2023</span></div></div><div className="testimonial-copy"><SectionLabel>Customer Stories</SectionLabel><h2>Real Businesses.<br /><span>Real Progress.</span></h2><p>See how organizations are using Tekkzy to solve real problems and grow faster.</p><div className="quote-mark">“</div><blockquote>Tekkzy has streamlined our operations and given us better visibility across all departments. Our team is more productive and our guests are happier than ever.</blockquote><strong>Operations Manager</strong><small>The Crest Hospitality Group</small></div></section>

      <section className="technology-section landing-section"><div className="technology-image"><div className="tech-board"><div className="tech-board-nav"><span /><span /><span /></div><div className="tech-board-content"><div className="tech-board-title">Team intelligence</div><div className="tech-board-bars"><i /><i /><i /><i /></div><div className="tech-board-users"><b /><b /><b /><b /><b /></div></div></div><div className="tech-float tech-float-one"><Sparkles size={14} /> AI Assistant</div><div className="tech-float tech-float-two"><Users size={14} /> Insights</div></div><div className="technology-copy"><SectionLabel>Technology Works Best With People</SectionLabel><h2>Technology Works<br /><span>Best with People</span></h2><p>We believe in a future where creativity and AI work together. Technology empowers your team — it doesn’t replace them.</p><div className="tech-bullets"><span><Users size={16} /> Empower Teams</span><span><ShieldCheck size={16} /> Work Smarter</span><span><Heart size={16} /> Achieve More</span></div></div></section>

      <section className="principles-section landing-section"><div className="principles-heading"><SectionLabel>Our Values</SectionLabel><h2>Principles That<br /><span>Guide Us</span></h2><p>These values shape how we build, work, and help our customers succeed.</p></div><div className="principles-grid">{[["01", "Customer Focus", "Your success is our priority.", "blue"], ["02", "Innovation", "We embrace what’s next.", "violet"], ["03", "Simplicity", "Powerful technology, made simple.", "green"], ["04", "Trust", "Built for the long term.", "orange"]].map(([number, title, text, tone]) => <article className={`principle-card principle-${tone}`} key={number}><b>{number}</b><h3>{title}</h3><p>{text}</p></article>)}</div></section>

      <section className="landing-cta"><div><SectionLabel>Ready to Build</SectionLabel><h2>Ready to transform<br /><span>your business?</span></h2><p>Join hundreds of businesses using Tekkzy to work smarter, move faster, and achieve more.</p><Link className="landing-primary" href="/contact">Start a Project <ArrowRight size={15} /></Link></div><div className="cta-city"><i /><i /><i /><i /><i /><i /><i /><span>Smarter<br />businesses.<br /><em>Brighter futures.</em></span></div></section>
    </div></LandingMotion>
  );
}
