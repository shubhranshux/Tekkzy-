import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  Check,
  ChevronRight,
  CircleCheck,
  Cloud,
  Cpu,
  Database,
  Heart,
  Layers3,
  LineChart,
  MessageCircle,
  Network,
  Play,
  Rocket,
  ShieldCheck,
  Sparkles,
  Star,
  Users,
  Workflow,
  Zap,
} from "lucide-react";
import WhoWeAre from "@/components/about/who-we-are";
import LandingMotion from "@/components/landing/landing-motion";
import ProductEcosystem from "@/components/landing/product-ecosystem";
import HowItWorksSection from "@/components/landing/how-it-works";
import TestimonialsSection from "@/components/landing/testimonials-section";
import PrinciplesSection from "@/components/landing/principles-section";
import PricingSection from "@/components/landing/pricing-section";
import FaqSection from "@/components/landing/faq-section";

const products = ["ERP", "CRM", "HR Suite", "Inventory", "Analytics", "AI Assistant", "Automation", "Digital Marketing", "SEO"];
const clientLogos = [
  { name: "Vedanta", src: "/logos/vedanta.jpeg" },
  { name: "Fitness World 2.0", src: "/logos/fitness-world.png" },
  { name: "Hotel MM Royal Palace", src: "/logos/mm-royal-palace.png" },
  { name: "Hangout Restro Cafe", src: "/logos/hangout.jpeg" },
  { name: "Manas Restaurant & Cafe", src: "/logos/manas.jpeg" },
  { name: "Onebite", src: "/logos/onebite.png" },
  { name: "Pabitra Electricals", src: "/logos/pabitra.png" },
  { name: "Shribarenyam", src: "/logos/shribarenyam.jpeg" },
];
const values = [
  { title: "Connected Solutions", text: "Everything works together across your business.", icon: Network, tone: "blue" },
  { title: "AI Automation", text: "Work smarter with intelligent workflows.", icon: Sparkles, tone: "violet" },
  { title: "Business Intelligence", text: "See clearly. Decide confidently.", icon: BarChart3, tone: "green" },
  { title: "Scalable Technology", text: "Built to grow with you.", icon: Layers3, tone: "orange" },
  { title: "People Experience", text: "Simple tools your teams love.", icon: Heart, tone: "pink" },
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
          <div className="hero-badge-pill">
            <span className="hero-badge-glow" />
            <Sparkles size={13} className="hero-badge-icon" />
            <span>Intelligent Enterprise Cloud Suite</span>
            <ChevronRight size={13} className="hero-badge-arrow" />
          </div>
          <h1>Smart Technology<br />for a <span>Stronger<br />Tomorrow</span></h1>
          <p>Empower your business with intelligent, connected, and scalable technology. From ERP &amp; POS to AI automation and real-time analytics, Tekkzy simplifies complexity to accelerate growth.</p>
          <div className="landing-actions">
            <Link className="landing-primary hero-btn-glow" href="/contact">
              <span>Start Free Trial</span>
              <ArrowRight size={15} />
            </Link>
            <Link className="landing-video" href="/product">
              <span><Play size={12} fill="currentColor" /></span>
              <span>Explore Platform</span>
            </Link>
          </div>

          <div className="hero-social-proof">
            <div className="hero-client-avatars">
              <span className="client-avatar-pill" title="Vedanta">
                <Image src="/logos/vedanta.jpeg" alt="Vedanta" width={22} height={22} />
              </span>
              <span className="client-avatar-pill" title="Fitness World 2.0">
                <Image src="/logos/fitness-world.png" alt="Fitness World" width={22} height={22} />
              </span>
              <span className="client-avatar-pill" title="Hotel MM Royal Palace">
                <Image src="/logos/mm-royal-palace.png" alt="MM Royal Palace" width={22} height={22} />
              </span>
              <span className="client-avatar-pill" title="Onebite">
                <Image src="/logos/onebite.png" alt="Onebite" width={22} height={22} />
              </span>
            </div>
            <div className="hero-proof-text">
              <div className="hero-proof-stars">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} size={11} className="star-solid" />
                ))}
                <strong>4.9 / 5.0</strong>
              </div>
              <span>Trusted by 150+ organizations across industries</span>
            </div>
          </div>

          <div className="hero-proof">
            <span><CircleCheck size={14} /> AI-Driven Automation</span>
            <span><Zap size={14} /> 99.99% Cloud Uptime</span>
            <span><ShieldCheck size={14} /> Enterprise Security</span>
          </div>
        </div>

        <div className="landing-hero-art">
          <div className="hero-grid-glow" />
          <div className="hero-mesh-orb hero-mesh-orb-1" />
          <div className="hero-mesh-orb hero-mesh-orb-2" />

          {/* Glassmorphic Dashboard Showcase */}
          <div className="hero-photo hero-dashboard-frame">
            <div className="hero-dash-header">
              <div className="hero-dash-dots">
                <span className="dot-red" />
                <span className="dot-yellow" />
                <span className="dot-green" />
              </div>
              <div className="hero-dash-search">
                <Sparkles size={11} />
                <span>Tekkzy AI Copilot: Real-time business intelligence</span>
              </div>
              <div className="hero-dash-status">
                <span className="status-live-dot" />
                <small>Live</small>
              </div>
            </div>

            <div className="hero-dash-body">
              <div className="dash-overview-top">
                <div>
                  <small>Operations Hub</small>
                  <h4>Enterprise Overview</h4>
                </div>
                <div className="dash-sync-badge">
                  <span>99.98% Synchronized</span>
                </div>
              </div>

              <div className="dash-kpi-row">
                <div className="dash-kpi-item">
                  <small>Monthly Volume</small>
                  <strong>₹24,80,000</strong>
                  <em>+28.4%</em>
                </div>
                <div className="dash-kpi-item">
                  <small>Workflows Saved</small>
                  <strong>142 hrs</strong>
                  <em>Automated</em>
                </div>
                <div className="dash-kpi-item">
                  <small>Active Outlets</small>
                  <strong>48 Units</strong>
                  <em>Zero Latency</em>
                </div>
              </div>

              <div className="dash-chart-card">
                <div className="dash-chart-label">
                  <span>Real-Time Business Velocity</span>
                  <small>Updated 2s ago</small>
                </div>
                <div className="dash-bars">
                  <span style={{ height: "35%" }} />
                  <span style={{ height: "55%" }} />
                  <span style={{ height: "42%" }} />
                  <span style={{ height: "78%" }} />
                  <span style={{ height: "65%" }} />
                  <span style={{ height: "92%" }} />
                  <span style={{ height: "80%" }} />
                  <span style={{ height: "96%" }} />
                </div>
              </div>

              <div className="dash-activity-strip">
                <div className="dash-activity-item">
                  <span className="activity-dot dot-blue" />
                  <p>Vedanta: Enterprise workflow pipeline operational</p>
                </div>
                <div className="dash-activity-item">
                  <span className="activity-dot dot-gold" />
                  <p>Hotel MM Royal: Banquet reservations auto-synced</p>
                </div>
              </div>
            </div>
          </div>

          {/* Floating High-Impact Cards */}
          <div className="hero-card hero-card-top">
            <span className="hero-card-icon"><Sparkles size={15} /></span>
            <small>AI Assistant</small>
            <b>Always Active</b>
          </div>

          <div className="hero-card hero-card-chart">
            <small>Business Velocity</small>
            <b>+38.5%</b>
            <div className="hero-sparkline">
              <i /><i /><i /><i /><i /><i />
            </div>
          </div>

          <div className="hero-card hero-card-bottom">
            <small>Enterprise Revenue</small>
            <b>₹12,40,000</b>
            <span>+18.4% this month</span>
          </div>

          <div className="hero-note hero-performance-pill">
            <ShieldCheck size={14} />
            <span>High-Speed Cloud Architecture</span>
          </div>
        </div>
      </section>

      <div className="trust-strip">
        <span className="trust-heading">Trusted by businesses across industries</span>
        <div className="logo-carousel">
          <div className="logo-carousel-track">
            {[...clientLogos, ...clientLogos].map((logo, i) => (
              <div className="logo-carousel-item" key={`${logo.name}-${i}`}>
                <Image src={logo.src} alt={logo.name} width={120} height={60} style={{ objectFit: "contain" }} />
              </div>
            ))}
          </div>
        </div>
      </div>

      <WhoWeAre />

      <ProductEcosystem />

      <HowItWorksSection />

      <section className="values-section landing-section"><div className="values-heading"><SectionLabel>Built for Business</SectionLabel><h2>Built for <span>Higher</span></h2><p>We combine innovation, simplicity, and real-world experience to deliver technology that makes a difference.</p></div><div className="values-grid">{values.map(({ title, text, icon: Icon, tone }) => <article className={`value-card value-${tone}`} key={title}><div className="value-icon"><Icon size={20} /></div><h3>{title}</h3><p>{text}</p></article>)}</div></section>

      <PricingSection />

      <section className="technology-section landing-section"><div className="technology-image"><div className="tech-board"><div className="tech-board-nav"><span /><span /><span /></div><div className="tech-board-content"><div className="tech-board-title">Team intelligence</div><div className="tech-board-bars"><i /><i /><i /><i /></div><div className="tech-board-users"><b /><b /><b /><b /><b /></div></div></div><div className="tech-float tech-float-one"><Sparkles size={14} /> AI Assistant</div><div className="tech-float tech-float-two"><Users size={14} /> Insights</div></div><div className="technology-copy"><SectionLabel>Technology Works Best With People</SectionLabel><h2>Technology Works<br /><span>Best with People</span></h2><p>We believe in a future where creativity and AI work together. Technology empowers your team — it doesn’t replace them.</p><div className="tech-bullets"><span><Users size={16} /> Empower Teams</span><span><ShieldCheck size={16} /> Work Smarter</span><span><Heart size={16} /> Achieve More</span></div></div></section>

      <PrinciplesSection />

      <TestimonialsSection />

      <FaqSection />
    </div></LandingMotion>
  );
}
