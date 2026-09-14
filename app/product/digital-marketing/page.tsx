"use client";

import { motion } from "framer-motion";
import { ArrowRight, Megaphone, Target, PenTool, Mail, BarChart3, Share2, Search, PlaySquare, MessageSquare, Globe2, Zap, TrendingUp, MousePointerClick, Eye } from "lucide-react";
import Link from "next/link";

const channels = [
  { icon: Search, name: "SEO", desc: "Organic search dominance", color: "#f59e0b", link: "/products/seo" },
  { icon: Share2, name: "Social Media", desc: "Brand & community growth", color: "#e54d75" },
  { icon: Target, name: "PPC Advertising", desc: "Google & Meta ads", color: "#1760ed" },
  { icon: Mail, name: "Email Marketing", desc: "Nurture & convert", color: "#1ba77e" },
  { icon: PlaySquare, name: "Video Marketing", desc: "YouTube & reels", color: "#e95812" },
  { icon: PenTool, name: "Content Marketing", desc: "Blogs, whitepapers, guides", color: "#896dff" },
];

export default function DigitalMarketingProductPage() {
  return (
    <main>
      {/* Split-color hero — unique */}
      <section style={{ padding: "140px 24px 100px", background: "linear-gradient(135deg, #ecfdf5 0%, #f0f5ff 50%, #fdf2f8 100%)", textAlign: "center" }}>
        <motion.span className="pill" initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ borderColor: "#2ba88e40" }}>
          <Megaphone size={14} /> TEKKZY DIGITAL MARKETING
        </motion.span>
        <motion.h1 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} style={{ fontSize: "clamp(42px, 6vw, 68px)", letterSpacing: "-2px", marginTop: "24px", maxWidth: "800px", marginLeft: "auto", marginRight: "auto" }}>
          Campaigns That<br /><span style={{ background: "linear-gradient(135deg, #2ba88e, #1760ed, #e54d75)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Actually Convert.</span>
        </motion.h1>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }} style={{ maxWidth: "620px", margin: "24px auto 40px", fontSize: "18px", lineHeight: "1.7", color: "#4a5d7a" }}>
          From strategy to execution to measurement — Tekkzy Digital Marketing combines data, creativity, and AI to drive growth across every digital channel.
        </motion.p>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} style={{ display: "flex", gap: "16px", justifyContent: "center" }}>
          <Link href="/#contact" className="button" style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "#2ba88e", borderColor: "#2ba88e" }}>Get Marketing Plan <ArrowRight size={16} /></Link>
        </motion.div>

        {/* Channel cards — circular layout feel */}
        <div style={{ display: "flex", justifyContent: "center", gap: "16px", marginTop: "60px", flexWrap: "wrap" }}>
          {channels.map((ch, i) => (
            <motion.div key={ch.name} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 + i * 0.08 }} style={{ padding: "20px 24px", background: "#fff", borderRadius: "14px", border: "1px solid #e2e8f0", display: "flex", alignItems: "center", gap: "12px", minWidth: "200px", boxShadow: "0 2px 8px rgba(0,0,0,0.04)" }}>
              <div style={{ width: "40px", height: "40px", borderRadius: "10px", background: `${ch.color}12`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <ch.icon size={20} style={{ color: ch.color }} />
              </div>
              <div style={{ textAlign: "left" }}>
                <div style={{ fontSize: "14px", fontWeight: 800, color: "#0b152a" }}>{ch.name}</div>
                <div style={{ fontSize: "11px", color: "#4a5d7a" }}>{ch.desc}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Results showcase — big numbers */}
      <section style={{ padding: "80px 24px", background: "#0b152a", color: "#fff" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "48px" }}>
            <span style={{ fontSize: "12px", fontWeight: 800, letterSpacing: "2px", color: "#4aedc4" }}>REAL RESULTS</span>
            <h2 style={{ fontSize: "clamp(28px, 4vw, 42px)", letterSpacing: "-1px", marginTop: "12px", color: "#fff" }}>Performance that speaks for itself.</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: "24px" }}>
            {[
              { icon: TrendingUp, value: "312%", label: "Average Traffic Growth", desc: "Across 50+ client campaigns" },
              { icon: MousePointerClick, value: "4.8x", label: "ROAS on Paid Campaigns", desc: "Return on ad spend" },
              { icon: Eye, value: "10M+", label: "Impressions Generated Monthly", desc: "Across all channels" },
              { icon: BarChart3, value: "67%", label: "Lower Cost Per Acquisition", desc: "Compared to industry average" },
            ].map((s, i) => (
              <motion.div key={s.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} style={{ padding: "32px", background: "#1a2d4d", borderRadius: "16px", border: "1px solid #2a3f6a" }}>
                <s.icon size={24} style={{ color: "#4aedc4", marginBottom: "16px" }} />
                <div style={{ fontSize: "36px", fontWeight: 900, color: "#fff", letterSpacing: "-2px" }}>{s.value}</div>
                <div style={{ fontSize: "14px", fontWeight: 800, color: "#e2e8f0", marginTop: "4px" }}>{s.label}</div>
                <div style={{ fontSize: "12px", color: "#8fa0c4", marginTop: "4px" }}>{s.desc}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services — detailed cards */}
      <section style={{ padding: "80px 24px", maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "56px" }}>
          <span className="eyebrow">OUR SERVICES</span>
          <h2 style={{ fontSize: "clamp(28px, 4vw, 42px)", letterSpacing: "-1px", marginTop: "12px" }}>Full-stack digital marketing.</h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))", gap: "24px" }}>
          {[
            { icon: Search, title: "Search Engine Optimization", desc: "Technical audits, keyword strategy, content optimization, link building, and local SEO. We don't just improve rankings — we drive qualified organic traffic that converts.", color: "#f59e0b" },
            { icon: Target, title: "Paid Advertising (PPC)", desc: "Google Ads, Meta Ads, LinkedIn Ads — expertly managed campaigns with A/B testing, audience targeting, bid optimization, and conversion tracking for maximum ROAS.", color: "#1760ed" },
            { icon: Share2, title: "Social Media Marketing", desc: "Strategy, content creation, community management, influencer partnerships, and paid social campaigns across Instagram, LinkedIn, Twitter, and emerging platforms.", color: "#e54d75" },
            { icon: PenTool, title: "Content Marketing", desc: "Blog strategy, long-form content, whitepapers, case studies, infographics, and video scripts — all built around your target keywords and buyer journey.", color: "#896dff" },
            { icon: Mail, title: "Email & Marketing Automation", desc: "Drip campaigns, newsletter design, segmentation, personalization, A/B testing, and automated workflows that nurture leads through your entire funnel.", color: "#1ba77e" },
            { icon: Globe2, title: "Conversion Rate Optimization", desc: "Landing page optimization, A/B testing, heat map analysis, user journey mapping, and data-driven UX improvements that turn visitors into customers.", color: "#e95812" },
          ].map((s, i) => (
            <motion.div key={s.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="solution-index-card" style={{ padding: "32px", background: "#fff", border: "1px solid #e2e8f0", borderRadius: "16px" }}>
              <s.icon size={28} style={{ color: s.color, marginBottom: "16px" }} />
              <h3 style={{ fontSize: "18px", fontWeight: 800, marginBottom: "8px" }}>{s.title}</h3>
              <p style={{ fontSize: "14px", color: "#4a5d7a", lineHeight: "1.7", margin: 0 }}>{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="cta-section section-shell">
        <div><h2>Ready to grow your digital presence?</h2><p>Get a free marketing audit and discover untapped growth opportunities.</p></div>
        <div className="cta-actions">
          <Link className="button" href="/#contact" style={{ background: "#2ba88e", borderColor: "#2ba88e" }}>Get Free Audit <ArrowRight size={16} /></Link>
          <Link className="text-link" href="/products">View All Products <ArrowRight size={14} /></Link>
        </div>
      </section>
    </main>
  );
}
