"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  Megaphone,
  Target,
  PenTool,
  Mail,
  BarChart3,
  Share2,
  Search,
  PlaySquare,
  Globe2,
  TrendingUp,
  MousePointerClick,
  Eye,
  Zap,
  CheckCircle2,
  Star,
  ChevronRight,
  Users,
  Sparkles,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.15 },
  transition: { duration: 0.65, delay, ease: EASE },
});

/* ── Data ── */
const channels = [
  { icon: Search, name: "SEO", desc: "Organic search dominance", color: "#f59e0b", link: "/product/seo" },
  { icon: Share2, name: "Social Media", desc: "Brand & community growth", color: "#e54d75" },
  { icon: Target, name: "PPC Advertising", desc: "Google & Meta ads", color: "#1760ed" },
  { icon: Mail, name: "Email Marketing", desc: "Nurture & convert", color: "#1ba77e" },
  { icon: PlaySquare, name: "Video Marketing", desc: "YouTube & reels", color: "#e95812" },
  { icon: PenTool, name: "Content Marketing", desc: "Blogs, whitepapers, guides", color: "#896dff" },
];

const services = [
  { icon: Search, title: "Search Engine Optimization", desc: "Technical audits, keyword strategy, content optimization, link building, and local SEO. We drive qualified organic traffic that converts.", color: "#f59e0b", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&q=80" },
  { icon: Target, title: "Paid Advertising (PPC)", desc: "Google Ads, Meta Ads, LinkedIn Ads — expertly managed campaigns with A/B testing, audience targeting, and conversion tracking for maximum ROAS.", color: "#1760ed", image: "https://images.unsplash.com/photo-1611926653458-09294b3142bf?w=500&q=80" },
  { icon: Share2, title: "Social Media Marketing", desc: "Strategy, content creation, community management, and paid social campaigns across Instagram, LinkedIn, Twitter, and emerging platforms.", color: "#e54d75", image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=500&q=80" },
  { icon: PenTool, title: "Content Marketing", desc: "Blog strategy, long-form content, whitepapers, case studies, infographics, and video scripts — built around your target keywords and buyer journey.", color: "#896dff", image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&q=80" },
  { icon: Mail, title: "Email & Marketing Automation", desc: "Drip campaigns, newsletter design, segmentation, personalization, A/B testing, and automated workflows that nurture leads through your funnel.", color: "#1ba77e", image: "https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=500&q=80" },
  { icon: Globe2, title: "Conversion Rate Optimization", desc: "Landing page optimization, A/B testing, heat map analysis, user journey mapping, and data-driven UX improvements that turn visitors into customers.", color: "#e95812", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&q=80" },
];

const stats = [
  { icon: TrendingUp, value: "312%", label: "Average Traffic Growth", desc: "Across 50+ client campaigns" },
  { icon: MousePointerClick, value: "4.8x", label: "ROAS on Paid Campaigns", desc: "Return on ad spend" },
  { icon: Eye, value: "10M+", label: "Monthly Impressions", desc: "Across all channels" },
  { icon: BarChart3, value: "67%", label: "Lower Cost Per Acquisition", desc: "vs. industry average" },
];

const clients = [
  {
    name: "Rajesh Sharma",
    role: "CMO, TechCorp",
    image: "https://i.pravatar.cc/150?u=rajesh-dm",
    quote: "Tekkzy's digital marketing team transformed our online presence. Our organic traffic grew 420% in 8 months, and our cost per lead dropped by 58%.",
    result: "420% organic traffic growth",
    stars: 5,
  },
  {
    name: "Priya Mehta",
    role: "VP Marketing, NextGen",
    image: "https://i.pravatar.cc/150?u=priya-dm",
    quote: "The PPC campaigns Tekkzy runs for us consistently deliver 5.2x ROAS. Their data-driven approach and weekly optimization calls set them apart.",
    result: "5.2x return on ad spend",
    stars: 5,
  },
  {
    name: "David Chen",
    role: "Head of Growth, Synergy",
    image: "https://i.pravatar.cc/150?u=david-dm",
    quote: "From SEO to social media to email — Tekkzy handles our entire digital strategy. Best agency decision we've ever made.",
    result: "3x qualified leads in 6 months",
    stars: 5,
  },
  {
    name: "Sneha Iyer",
    role: "Founder, Velocity",
    image: "https://i.pravatar.cc/150?u=sneha-dm",
    quote: "They don't just run campaigns — they understand our business deeply. The content strategy they built drives 60% of our new business pipeline.",
    result: "60% of pipeline from content",
    stars: 5,
  },
];

const process = [
  { step: "01", title: "Discovery & Audit", desc: "Deep dive into your business, competitors, audience, and current digital presence to identify opportunities.", icon: Search },
  { step: "02", title: "Strategy & Planning", desc: "Build a customized multi-channel strategy with clear KPIs, timelines, and budget allocation.", icon: Target },
  { step: "03", title: "Content & Creative", desc: "Produce high-quality content, ad creatives, landing pages, and campaign assets.", icon: PenTool },
  { step: "04", title: "Launch & Execute", desc: "Deploy campaigns across all channels with precise targeting and tracking.", icon: Zap },
  { step: "05", title: "Measure & Optimize", desc: "Continuous monitoring, A/B testing, and optimization to improve ROI every week.", icon: BarChart3 },
  { step: "06", title: "Scale & Grow", desc: "Double down on what works, expand to new channels, and compound growth.", icon: TrendingUp },
];

export default function DigitalMarketingPage() {
  const reduced = useReducedMotion();

  return (
    <main className="dm-page">

      {/* ── Hero ── */}
      <section className="dm-hero">
        <div className="dm-hero-bg">
          <Image
            src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1600&q=80"
            alt="Digital Marketing"
            fill
            style={{ objectFit: "cover" }}
            priority
          />
          <div className="dm-hero-overlay" />
        </div>
        <div className="dm-hero-content section-shell">
          <motion.span className="pill" style={{ background: "rgba(255,255,255,.12)", color: "#4aedc4", borderColor: "rgba(74,237,196,.3)" }} {...fade()}>
            <Megaphone size={14} /> TEKKZY DIGITAL MARKETING
          </motion.span>
          <motion.h1 {...fade(0.08)}>
            Campaigns That<br />
            <span>Actually Convert.</span>
          </motion.h1>
          <motion.p {...fade(0.14)}>
            From strategy to execution to measurement — Tekkzy Digital Marketing combines data, creativity, and AI to drive growth across every digital channel.
          </motion.p>
          <motion.div className="dm-hero-actions" {...fade(0.2)}>
            <Link href="/#contact" className="button" style={{ background: "#2ba88e", borderColor: "#2ba88e" }}>
              Get Marketing Plan <ArrowRight size={16} />
            </Link>
            <Link href="#services" className="button button-outline" style={{ color: "#fff", borderColor: "rgba(255,255,255,.3)" }}>
              Our Services <ChevronRight size={16} />
            </Link>
          </motion.div>
          {/* Channel pills */}
          <motion.div className="dm-channel-pills" {...fade(0.28)}>
            {channels.map((ch) => (
              <span key={ch.name} className="dm-channel-pill">
                <ch.icon size={15} style={{ color: ch.color }} /> {ch.name}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="dm-stats-section">
        <div className="dm-stats-grid section-shell">
          {stats.map((s, i) => (
            <motion.div key={s.label} className="dm-stat-card" {...fade(i * 0.08)}>
              <s.icon size={24} className="dm-stat-icon" />
              <div className="dm-stat-value">{s.value}</div>
              <div className="dm-stat-label">{s.label}</div>
              <div className="dm-stat-desc">{s.desc}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── Services with Images ── */}
      <section id="services" className="dm-services-section section-shell">
        <motion.div className="dm-section-header" {...fade()}>
          <span className="eyebrow">OUR SERVICES</span>
          <h2>Full-stack digital marketing.</h2>
          <p>Every channel, every touchpoint, one unified strategy built around your growth.</p>
        </motion.div>
        <div className="dm-services-grid-full">
          {services.map((s, i) => (
            <motion.div key={s.title} className="dm-service-card-full" {...fade(i * 0.06)}>
              <div className="dm-service-img">
                <Image src={s.image} alt={s.title} fill sizes="(max-width: 768px) 100vw, 400px" style={{ objectFit: "cover" }} />
                <div className="dm-service-img-overlay" />
                <div className="dm-service-icon-badge" style={{ background: s.color }}>
                  <s.icon size={20} color="#fff" />
                </div>
              </div>
              <div className="dm-service-body">
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                <Link href="/#contact" className="dm-service-link">
                  Get Started <ArrowRight size={13} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── Process ── */}
      <section className="dm-process-section">
        <div className="section-shell">
          <motion.div className="dm-section-header" {...fade()}>
            <span className="eyebrow" style={{ color: "#4aedc4" }}>HOW WE WORK</span>
            <h2 style={{ color: "#fff" }}>Our proven 6-step process.</h2>
            <p style={{ color: "#8fa0c4" }}>A systematic approach to growing your digital presence with measurable results.</p>
          </motion.div>
          <div className="dm-process-grid">
            {process.map((p, i) => (
              <motion.div key={p.step} className="dm-process-card" {...fade(i * 0.06)}>
                <span className="dm-process-step">{p.step}</span>
                <div className="dm-process-icon-wrap">
                  <p.icon size={22} />
                </div>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Client Testimonials ── */}
      <section className="dm-clients-section section-shell">
        <motion.div className="dm-section-header" {...fade()}>
          <span className="eyebrow">CLIENT SUCCESS STORIES</span>
          <h2>Trusted by ambitious brands.</h2>
          <p>Real results from real businesses that partnered with Tekkzy Digital Marketing.</p>
        </motion.div>
        <div className="dm-clients-grid">
          {clients.map((c, i) => (
            <motion.div key={c.name} className="dm-client-card" {...fade(i * 0.08)}>
              <div className="dm-client-stars">
                {Array.from({ length: c.stars }).map((_, si) => (
                  <Star key={si} size={14} fill="#f59e0b" color="#f59e0b" />
                ))}
              </div>
              <p className="dm-client-quote">&ldquo;{c.quote}&rdquo;</p>
              <div className="dm-client-result">
                <CheckCircle2 size={14} /> {c.result}
              </div>
              <div className="dm-client-author">
                <img src={c.image} alt={c.name} className="dm-client-avatar" />
                <div>
                  <strong>{c.name}</strong>
                  <small>{c.role}</small>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── Why Tekkzy ── */}
      <section className="dm-why-section section-shell">
        <motion.div className="dm-why-grid" {...fade()}>
          <div className="dm-why-content">
            <span className="eyebrow">WHY TEKKZY</span>
            <h2>Your growth partner,<br />not just another agency.</h2>
            <ul className="dm-why-list">
              <li><CheckCircle2 size={18} /> <span><strong>Transparent reporting</strong> — Real-time dashboards, weekly calls, no hidden metrics</span></li>
              <li><CheckCircle2 size={18} /> <span><strong>Dedicated strategist</strong> — Your own senior marketing lead, not a rotating team</span></li>
              <li><CheckCircle2 size={18} /> <span><strong>AI-powered insights</strong> — We use Tekkzy AI to find patterns humans miss</span></li>
              <li><CheckCircle2 size={18} /> <span><strong>Full-funnel approach</strong> — From awareness to conversion to retention</span></li>
              <li><CheckCircle2 size={18} /> <span><strong>No long-term contracts</strong> — Performance keeps you, not paperwork</span></li>
            </ul>
            <Link href="/#contact" className="button" style={{ marginTop: "24px", background: "#2ba88e", borderColor: "#2ba88e" }}>
              Start Growing Today <ArrowRight size={16} />
            </Link>
          </div>
          <div className="dm-why-image">
            <Image
              src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&q=80"
              alt="Marketing team collaboration"
              fill
              sizes="(max-width: 768px) 100vw, 500px"
              style={{ objectFit: "cover", borderRadius: "16px" }}
            />
          </div>
        </motion.div>
      </section>

      {/* ── CTA ── */}
      <section className="dm-cta-section">
        <div className="section-shell" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "24px", padding: "60px max(28px, calc((100vw - 1420px) / 2))" }}>
          <div>
            <h2 style={{ color: "#fff", margin: "0 0 10px", fontSize: "clamp(28px, 3vw, 42px)", letterSpacing: "-1px" }}>Ready to grow your digital presence?</h2>
            <p style={{ color: "#8fa0c4", margin: 0, fontSize: "15px" }}>Get a free marketing audit and discover untapped growth opportunities.</p>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
            <Link className="button" href="/#contact" style={{ background: "#2ba88e", borderColor: "#2ba88e" }}>Get Free Audit <ArrowRight size={16} /></Link>
            <Link className="text-link" href="/product" style={{ color: "#7da9ff" }}>View All Products <ArrowRight size={14} /></Link>
          </div>
        </div>
      </section>
    </main>
  );
}
