"use client";

import { motion } from "framer-motion";
import { MonitorSmartphone, TabletSmartphone, Globe2, Layers, Paintbrush, Zap, Users, Code2, ArrowRight, CheckCircle2, Star, TrendingUp } from "lucide-react";
import Link from "next/link";

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } };

export default function DigitalExperiencePage() {
  return (
    <main>
      {/* ── SPLIT HERO ── */}
      <section className="split-hero">
        <div>
          <motion.span className="pill" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <Layers size={14} /> DIGITAL EXPERIENCE
          </motion.span>
          <motion.h1 initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
            Craft Digital<br/>Experiences That<br/>Convert.
          </motion.h1>
          <motion.p initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.1 }} style={{ fontSize: "17px", color: "#4a5d7a", marginBottom: "32px", lineHeight: "1.7", maxWidth: "480px" }}>
            In today's hyper-connected world, your digital touchpoints are the first and most important interactions customers have with your brand. We engineer high-performance interfaces that don't just look beautiful — they drive measurable business outcomes.
          </motion.p>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
            <Link href="/#contact" className="button" style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}>
              Start a Project <ArrowRight size={16} />
            </Link>
            <Link href="/#contact" className="button button-outline" style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}>
              View Case Studies
            </Link>
          </motion.div>

          {/* Trust indicators */}
          <div style={{ display: "flex", gap: "24px", marginTop: "40px", flexWrap: "wrap" }}>
            <span style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "13px", fontWeight: 700, color: "#1a2840" }}>
              <CheckCircle2 size={16} color="#1760ed" /> 200+ Projects Delivered
            </span>
            <span style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "13px", fontWeight: 700, color: "#1a2840" }}>
              <Star size={16} color="#1760ed" /> 4.9/5 Client Rating
            </span>
          </div>
        </div>
        <div className="hero-visual">
          <MonitorSmartphone size={120} color="#1760ed" opacity={0.15} />
        </div>
      </section>

      {/* ── METRICS STRIP ── */}
      <section className="metric-strip">
        <div className="metric-item"><strong>98%</strong><span>Client Retention</span></div>
        <div className="metric-item"><strong>3x</strong><span>Faster Load Times</span></div>
        <div className="metric-item"><strong>200+</strong><span>Apps Delivered</span></div>
        <div className="metric-item"><strong>45%</strong><span>Avg Conversion Lift</span></div>
      </section>

      {/* ── ZIG-ZAG FEATURES ── */}
      <section className="zig-zag-section">
        <div className="zig-zag-row">
          <div className="zz-visual" style={{ background: "linear-gradient(135deg, #edf3ff, #dce7ff)" }}>
            <MonitorSmartphone size={64} color="#1760ed" />
          </div>
          <div className="zz-content">
            <h3>Lightning-Fast Web Applications</h3>
            <p>We build highly responsive, performance-optimized web applications using cutting-edge frameworks like React, Next.js, and Vue.js. Every application is engineered for speed — optimized Core Web Vitals, lazy-loaded assets, and server-side rendering ensure your users get a flawless experience whether they're on a desktop or a smartphone.</p>
            <p style={{ marginTop: "16px" }}>Our development process includes rigorous performance budgeting, automated Lighthouse audits, and real-user monitoring to ensure your application stays fast as it grows. We don't just build — we continuously optimize.</p>
          </div>
        </div>

        <div className="zig-zag-row">
          <div className="zz-visual" style={{ background: "linear-gradient(135deg, #e9faf1, #d2f7e9)" }}>
            <TabletSmartphone size={64} color="#1ba77e" />
          </div>
          <div className="zz-content">
            <h3>Native & Cross-Platform Mobile Apps</h3>
            <p>Reach your customers wherever they are with beautifully crafted mobile experiences. We develop native iOS and Android applications, as well as cross-platform solutions using React Native and Flutter. Our mobile apps prioritize fluid 60fps animations, offline-first architecture, and intuitive gesture-based interactions.</p>
            <p style={{ marginTop: "16px" }}>From complex e-commerce flows to real-time collaboration tools, we've shipped mobile applications used by millions of users across 40+ countries. Every app we build undergoes extensive device testing across 200+ device configurations.</p>
          </div>
        </div>

        <div className="zig-zag-row">
          <div className="zz-visual" style={{ background: "linear-gradient(135deg, #f3edff, #e8e0ff)" }}>
            <Globe2 size={64} color="#896dff" />
          </div>
          <div className="zz-content">
            <h3>Progressive Web Apps (PWA)</h3>
            <p>Bridge the gap between web and mobile with Progressive Web Apps that offer native-like experiences directly in the browser. Our PWAs feature push notifications, hardware access, background sync, and robust offline functionality — all without the friction of app store downloads and approval processes.</p>
            <p style={{ marginTop: "16px" }}>PWAs are the perfect solution for businesses that need wide reach without maintaining separate codebases. We've seen clients achieve 3x higher engagement rates and 2x better conversion after switching from traditional websites to PWAs.</p>
          </div>
        </div>

        <div className="zig-zag-row">
          <div className="zz-visual" style={{ background: "linear-gradient(135deg, #fff5e6, #ffe8cc)" }}>
            <Paintbrush size={64} color="#e95812" />
          </div>
          <div className="zz-content">
            <h3>UX/UI Design & Design Systems</h3>
            <p>Great software starts with great design. Our UX team conducts deep user research, creates journey maps, wireframes, and interactive prototypes before a single line of code is written. We design with accessibility (WCAG 2.1 AA) baked in from day one.</p>
            <p style={{ marginTop: "16px" }}>We also build comprehensive design systems — reusable component libraries with documented tokens, patterns, and guidelines — that ensure visual consistency across your entire product ecosystem and dramatically speed up future development.</p>
          </div>
        </div>
      </section>

      {/* ── CAPABILITIES GRID ── */}
      <section className="solution-features" style={{ background: "#f8fbff", padding: "100px 24px", maxWidth: "100%", borderTop: "1px solid #edf2f9" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "60px" }}>
            <span className="pill"><Code2 size={14} /> OUR TECH STACK</span>
            <h2 style={{ fontSize: "36px", fontWeight: 800, marginTop: "16px", letterSpacing: "-1px", color: "#0b1630" }}>Technologies We Master</h2>
            <p style={{ color: "#4a5d7a", maxWidth: "500px", margin: "16px auto 0", lineHeight: "1.6" }}>We stay at the cutting edge of frontend and mobile technology to deliver the best possible experiences.</p>
          </div>
          <div className="solution-features-grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))" }}>
            {[
              { icon: <Zap size={22} />, title: "React & Next.js", desc: "Server-side rendering, static generation, and edge computing for blazing-fast web apps with excellent SEO.", color: "#1760ed" },
              { icon: <Layers size={22} />, title: "React Native & Flutter", desc: "Cross-platform mobile development that delivers native performance and feel on both iOS and Android.", color: "#1ba77e" },
              { icon: <Paintbrush size={22} />, title: "Figma & Storybook", desc: "Collaborative design workflows with interactive component documentation and visual regression testing.", color: "#896dff" },
              { icon: <Globe2 size={22} />, title: "TypeScript", desc: "Type-safe codebases that catch bugs at compile time, improve developer productivity, and make refactoring fearless.", color: "#36b2ba" },
              { icon: <TrendingUp size={22} />, title: "Performance Tooling", desc: "Lighthouse CI, WebPageTest, Sentry, and custom real-user monitoring for continuous performance optimization.", color: "#e95812" },
              { icon: <Users size={22} />, title: "Accessibility (a11y)", desc: "WCAG 2.1 AA compliant interfaces with screen reader support, keyboard navigation, and ARIA attributes.", color: "#6b56e1" },
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

      {/* ── PROCESS SECTION ── */}
      <section style={{ padding: "100px 24px", maxWidth: "1000px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "60px" }}>
          <span className="pill"><Zap size={14} /> HOW WE WORK</span>
          <h2 style={{ fontSize: "36px", fontWeight: 800, marginTop: "16px", letterSpacing: "-1px", color: "#0b1630" }}>Our Development Process</h2>
          <p style={{ color: "#4a5d7a", maxWidth: "500px", margin: "16px auto 0", lineHeight: "1.6" }}>A battle-tested methodology refined over 200+ projects ensures predictable outcomes and zero surprises.</p>
        </div>
        <div className="table-features-grid">
          {[
            { step: "01", title: "Discovery & Research", desc: "We start by deeply understanding your users, business goals, and competitive landscape through stakeholder interviews, user surveys, and analytics audits. This phase produces detailed personas, journey maps, and a prioritized feature roadmap." },
            { step: "02", title: "Design & Prototype", desc: "Our design team creates wireframes and high-fidelity interactive prototypes in Figma. We conduct usability testing with real users to validate every assumption before moving to development. No guesswork — only data-backed decisions." },
            { step: "03", title: "Agile Development", desc: "We build in 2-week sprints with continuous integration and deployment. Every sprint includes a demo to stakeholders, ensuring the product evolves in the right direction. Code reviews, automated testing, and performance budgets are non-negotiable." },
            { step: "04", title: "QA & Launch", desc: "Comprehensive testing across 200+ device/browser combinations, load testing for peak traffic, accessibility audits, and security penetration testing. We manage the entire deployment pipeline from staging to production." },
            { step: "05", title: "Iterate & Optimize", desc: "Post-launch, we monitor real-user metrics, run A/B tests, and continuously optimize. Our clients see an average 45% improvement in key conversion metrics within the first 90 days after launch." },
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
          <h2>Why Choose Tekkzy for Digital Experience?</h2>
          <div className="benefits-grid">
            {[
              { title: "User-Centric Design Philosophy", desc: "Every pixel and interaction is purposefully designed based on deep user research and usability testing. We don't just write code — we solve real human problems." },
              { title: "Uncompromising Performance", desc: "We obsess over Core Web Vitals, bundle sizes, and rendering strategies. Your digital experiences will load in under 2 seconds and run buttery smooth on any device." },
              { title: "True Omnichannel Consistency", desc: "Centralized design systems guarantee a unified brand experience whether your user is on a smartwatch, phone, tablet, laptop, or 4K television." },
              { title: "Built for Scale", desc: "Our architectures handle millions of concurrent users. We use edge computing, CDNs, and intelligent caching to ensure global performance without compromise." },
              { title: "Security First", desc: "Every application we build follows OWASP security guidelines. We implement CSP headers, input sanitization, rate limiting, and regular security audits." },
              { title: "Ongoing Partnership", desc: "We don't disappear after launch. Our maintenance and optimization retainers ensure your digital products keep improving and stay ahead of competitors." },
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
        <h2>Ready to transform your digital presence?</h2>
        <p>Let's build a world-class experience your customers will love and your competitors will envy.</p>
        <Link href="/#contact" className="button" style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}>
          Start Your Project <ArrowRight size={16} />
        </Link>
      </section>
    </main>
  );
}
