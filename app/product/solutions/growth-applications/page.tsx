"use client";

import { motion } from "framer-motion";
import { ScanLine, Target, Waypoints, Blocks, BarChart3, Megaphone, SearchCode, PenTool, Rocket, LineChart, ArrowRight, CheckCircle2, TrendingUp, Users } from "lucide-react";
import Link from "next/link";

export default function GrowthApplicationsPage() {
  return (
    <main>
      {/* ── GRADIENT HERO ── */}
      <section className="solution-hero" style={{ padding: "130px 24px 80px", background: "radial-gradient(circle at 50% 0%, #e8f0ff, #fff 70%)" }}>
        <motion.span className="pill" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <Rocket size={14} /> GROWTH & APPLICATIONS
        </motion.span>
        <motion.h1 initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} style={{ fontSize: "clamp(48px, 6vw, 72px)" }}>
          Scale Revenue.<br/>Build Products.
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }} style={{ maxWidth: "620px" }}>
          True business growth requires more than great ideas — it requires the right technology and strategy working in perfect harmony. We build bespoke software and deploy data-driven marketing engines designed to aggressively capture market share.
        </motion.p>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} style={{ display: "flex", gap: "16px", justifyContent: "center", marginTop: "8px" }}>
          <Link href="/#contact" className="button" style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}>
            Talk to a Growth Expert <ArrowRight size={16} />
          </Link>
        </motion.div>
      </section>

      {/* ── METRICS ── */}
      <section className="metric-strip">
        <div className="metric-item"><strong>10x</strong><span>Average ROI</span></div>
        <div className="metric-item"><strong>85%</strong><span>Lead Quality Lift</span></div>
        <div className="metric-item"><strong>50+</strong><span>SaaS Products Built</span></div>
        <div className="metric-item"><strong>3M+</strong><span>Users Onboarded</span></div>
      </section>

      {/* ── BENTO GRID ── */}
      <section style={{ maxWidth: "1100px", margin: "0 auto", padding: "80px 24px" }}>
        <div style={{ textAlign: "center", marginBottom: "60px" }}>
          <span className="pill"><BarChart3 size={14} /> WHAT WE DO</span>
          <h2 style={{ fontSize: "36px", fontWeight: 800, marginTop: "16px", letterSpacing: "-1px", color: "#0b1630" }}>Growth Services</h2>
        </div>
        <div className="outcome-bento" style={{ gridTemplateColumns: "1fr 1fr", maxWidth: "100%", gridTemplateRows: "auto auto", gap: "20px" }}>
          <div className="bento-card bento-primary" style={{ gridRow: "span 2", padding: "40px" }}>
            <span className="bento-kicker">MARKETING ENGINE</span>
            <h3 style={{ fontSize: "34px", marginTop: "24px" }}>Precision Digital Campaigns</h3>
            <p style={{ marginTop: "16px", opacity: 0.9, lineHeight: 1.7, fontSize: "15px" }}>
              Stop guessing with your ad spend. We deploy data-backed, highly targeted campaigns across social media, search engines, and display networks. Our team manages the entire funnel — from awareness to conversion — using advanced attribution modeling, lookalike audiences, and real-time bid optimization.
            </p>
            <p style={{ marginTop: "12px", opacity: 0.8, lineHeight: 1.7, fontSize: "14px" }}>
              Every campaign is backed by rigorous A/B testing, creative iteration, and weekly performance reviews. We don't set and forget — we actively optimize to maximize every dollar of your marketing budget.
            </p>
            <div className="signal-rings" style={{ opacity: 0.5 }}><i/><i/><i/></div>
          </div>
          <div className="bento-card" style={{ padding: "32px" }}>
            <Target color="#1760ed" size={28} style={{ marginBottom: "12px" }} />
            <h4 style={{ margin: "0 0 8px", fontSize: "20px", fontWeight: 800, color: "#0b1630" }}>Advanced SEO</h4>
            <p style={{ margin: 0, color: "#4a5d7a", fontSize: "14px", lineHeight: 1.6 }}>Dominate search rankings for high-intent keywords. We handle technical SEO audits, content strategy, schema markup, and authoritative link building to capture organic traffic consistently.</p>
          </div>
          <div className="bento-card" style={{ padding: "32px" }}>
            <Megaphone color="#e95812" size={28} style={{ marginBottom: "12px" }} />
            <h4 style={{ margin: "0 0 8px", fontSize: "20px", fontWeight: 800, color: "#0b1630" }}>Social Media Strategy</h4>
            <p style={{ margin: 0, color: "#4a5d7a", fontSize: "14px", lineHeight: 1.6 }}>Build an engaged community across Instagram, LinkedIn, Twitter, and TikTok. Our social team creates platform-native content calendars, runs paid social campaigns, and manages influencer partnerships.</p>
          </div>
        </div>
      </section>

      {/* ── APPLICATIONS SECTION ── */}
      <section className="solution-features" style={{ background: "#f8fbff", padding: "100px 24px", maxWidth: "100%", borderTop: "1px solid #edf2f9" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "60px" }}>
            <span className="pill"><Blocks size={14} /> CUSTOM SOFTWARE</span>
            <h2 style={{ fontSize: "36px", fontWeight: 800, marginTop: "16px", letterSpacing: "-1px", color: "#0b1630" }}>Application Development</h2>
            <p style={{ color: "#4a5d7a", maxWidth: "550px", margin: "16px auto 0", lineHeight: "1.6" }}>Off-the-shelf software rarely fits perfectly. We develop bespoke applications tailored to your exact operational needs.</p>
          </div>
          <div className="solution-features-grid">
            {[
              { icon: <Waypoints size={22} />, title: "Custom Business Software", desc: "Bespoke applications designed to automate your unique workflows. We integrate deeply with your existing tools — CRMs, ERPs, payment gateways, and third-party APIs — to create a seamless operational ecosystem.", color: "#896dff" },
              { icon: <Blocks size={22} />, title: "SaaS Platform Development", desc: "Turn your idea into a scalable, revenue-generating SaaS product. We architect multi-tenant platforms with secure user management, tiered subscription billing via Stripe, administrative dashboards, and usage analytics.", color: "#1760ed" },
              { icon: <SearchCode size={22} />, title: "API & Integration Layer", desc: "We build robust REST and GraphQL APIs that connect your internal systems with external partners. Rate limiting, authentication, versioning, and comprehensive documentation are built-in from day one.", color: "#1ba77e" },
              { icon: <PenTool size={22} />, title: "Internal Tools & Admin Panels", desc: "Streamline your operations with custom internal tools that your team actually loves using. From content management to order processing to reporting dashboards — we build the tools that save your team hours every day.", color: "#e95812" },
              { icon: <LineChart size={22} />, title: "Analytics & BI Dashboards", desc: "Visualize your data in real-time with custom dashboards. Track KPIs, monitor campaign performance, and make data-driven decisions with interactive charts, filters, and automated reporting.", color: "#36b2ba" },
              { icon: <Users size={22} />, title: "Customer Portals", desc: "Self-service portals that empower your customers to manage accounts, track orders, submit tickets, and access resources. Reduce support costs while improving customer satisfaction.", color: "#6b56e1" },
            ].map((item, i) => (
              <div key={i} className="feature-card">
                <div className="feature-icon" style={{ background: item.color }}>{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── GROWTH PROCESS ── */}
      <section style={{ padding: "100px 24px", maxWidth: "1000px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "60px" }}>
          <span className="pill"><TrendingUp size={14} /> THE GROWTH PLAYBOOK</span>
          <h2 style={{ fontSize: "36px", fontWeight: 800, marginTop: "16px", letterSpacing: "-1px", color: "#0b1630" }}>How We Drive Growth</h2>
        </div>
        <div className="table-features-grid">
          {[
            { step: "01", title: "Audit & Strategy", desc: "We start with a comprehensive audit of your current digital presence, analytics, and competitive landscape. This produces a detailed growth roadmap with prioritized initiatives, projected ROI, and clear milestones." },
            { step: "02", title: "Build the Foundation", desc: "Implement tracking infrastructure (GA4, GTM, conversion pixels), set up marketing automation (HubSpot, Mailchimp), and build landing pages optimized for conversion. The foundation must be solid before we scale." },
            { step: "03", title: "Launch & Test", desc: "Deploy initial campaigns across channels with systematic A/B testing. We test headlines, creatives, audiences, and offers to find the winning combination before scaling spend." },
            { step: "04", title: "Scale What Works", desc: "Once we identify high-performing channels and creatives, we aggressively scale budget while maintaining ROI. We expand to new audiences, launch retargeting campaigns, and build automated nurture sequences." },
            { step: "05", title: "Optimize & Report", desc: "Weekly performance reviews, monthly strategy sessions, and quarterly business reviews. We provide transparent reporting with actionable insights — not vanity metrics." },
          ].map((item, i) => (
            <div key={i} className="table-feature-row">
              <h3><span style={{ color: "#1760ed", fontSize: "28px", fontWeight: 900 }}>{item.step}</span> {item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── BENEFITS ── */}
      <section className="solution-benefits">
        <div className="benefits-inner">
          <h2>Why Partner with Tekkzy for Growth?</h2>
          <div className="benefits-grid">
            {[
              { title: "Data-Driven Decision Making", desc: "We eliminate gut-feelings from the equation. Every marketing campaign and software feature is backed by rigorous analytics, A/B testing, and measurable KPIs." },
              { title: "Infinitely Scalable Architecture", desc: "Our applications use cloud-native, microservices-based architectures that effortlessly handle traffic spikes and user growth without re-engineering." },
              { title: "Agile & Rapid Delivery", desc: "Speed to market is a competitive advantage. Our agile methodology ensures fast iterations, regular feature releases, and the ability to pivot rapidly." },
              { title: "Full-Stack Marketing", desc: "From SEO and PPC to email automation and conversion rate optimization — we handle the entire marketing stack so you have one accountable partner." },
              { title: "Revenue-Focused Metrics", desc: "We track revenue, not vanity metrics. Our reporting connects marketing spend directly to pipeline, closed deals, and customer lifetime value." },
              { title: "Dedicated Growth Team", desc: "You get a dedicated squad — strategist, designer, developer, and data analyst — who become an extension of your team and deeply understand your business." },
            ].map((item, i) => (
              <div key={i} className="benefit-item">
                <CheckCircle2 size={24} />
                <div><h4>{item.title}</h4><p>{item.desc}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="solution-cta">
        <h2>Ready to accelerate your growth?</h2>
        <p>Partner with us to build the applications and campaigns that scale your revenue.</p>
        <Link href="/#contact" className="button" style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}>
          Get Your Growth Plan <ArrowRight size={16} />
        </Link>
      </section>
    </main>
  );
}
