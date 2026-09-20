"use client";

import { motion } from "framer-motion";
import { ArrowRight, Search, TrendingUp, Globe2, FileText, BarChart3, Target, Link2, Gauge, CheckCircle2, Layers, Zap, Eye, MousePointerClick } from "lucide-react";
import Link from "next/link";

const process = [
  { step: "01", title: "Technical SEO Audit", desc: "We crawl your entire site — indexing issues, broken links, page speed, mobile usability, Core Web Vitals, schema markup, and crawl budget analysis.", icon: Gauge, color: "#f59e0b" },
  { step: "02", title: "Keyword Strategy", desc: "Deep keyword research with search intent mapping, competitor gap analysis, long-tail opportunities, and content clustering for topical authority.", icon: Search, color: "#1760ed" },
  { step: "03", title: "On-Page Optimization", desc: "Title tags, meta descriptions, header hierarchy, internal linking, image optimization, content structure, and semantic HTML improvements.", icon: FileText, color: "#1ba77e" },
  { step: "04", title: "Content Engine", desc: "Content briefs, blog posts, landing pages, pillar pages, and FAQ content — all mapped to your keyword strategy and buyer journey.", icon: Layers, color: "#896dff" },
  { step: "05", title: "Link Building", desc: "White-hat outreach, digital PR, guest posting, broken link reclamation, and authority building through high-quality backlink acquisition.", icon: Link2, color: "#e95812" },
  { step: "06", title: "Analytics & Reporting", desc: "Monthly rankings reports, organic traffic analysis, conversion tracking, competitor monitoring, and ROI dashboards.", icon: BarChart3, color: "#36b2ba" },
];

export default function SeoPage() {
  return (
    <main>
      {/* Full-width gradient hero — unique to SEO */}
      <section style={{ padding: "140px 24px 100px", background: "linear-gradient(180deg, #fff9e6 0%, #fff 60%)", textAlign: "center" }}>
        <motion.span className="pill" initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ borderColor: "#f59e0b40" }}>
          <Search size={14} /> TEKKZY SEO
        </motion.span>
        <motion.h1 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} style={{ fontSize: "clamp(42px, 6vw, 72px)", letterSpacing: "-2px", marginTop: "24px", maxWidth: "800px", marginLeft: "auto", marginRight: "auto" }}>
          Rank Higher.<br /><span style={{ color: "#f59e0b" }}>Get Found.</span><br />Grow Organically.
        </motion.h1>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }} style={{ maxWidth: "640px", margin: "24px auto 40px", fontSize: "18px", lineHeight: "1.7", color: "#4a5d7a" }}>
          Tekkzy SEO combines technical expertise, data-driven strategy, and AI-powered content to dominate search rankings and drive sustainable organic growth.
        </motion.p>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/#contact" className="button" style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "#f59e0b", borderColor: "#f59e0b" }}>Get Free SEO Audit <ArrowRight size={16} /></Link>
          <Link href="/product/digital-marketing" className="button button-outline" style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}>See Digital Marketing</Link>
        </motion.div>

        {/* Metrics bar — unique element */}
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} style={{ display: "flex", justifyContent: "center", gap: "48px", marginTop: "64px", flexWrap: "wrap" }}>
          {[
            { icon: TrendingUp, value: "312%", label: "Avg Organic Traffic Increase" },
            { icon: Eye, value: "Top 3", label: "Keyword Rankings" },
            { icon: MousePointerClick, value: "4.2x", label: "More Qualified Leads" },
            { icon: Globe2, value: "150+", label: "Sites Optimized" },
          ].map((m, i) => (
            <div key={m.label} style={{ textAlign: "center" }}>
              <m.icon size={20} style={{ color: "#f59e0b", marginBottom: "8px" }} />
              <div style={{ fontSize: "28px", fontWeight: 900, color: "#0b152a", letterSpacing: "-1px" }}>{m.value}</div>
              <div style={{ fontSize: "12px", color: "#4a5d7a", fontWeight: 600, marginTop: "2px" }}>{m.label}</div>
            </div>
          ))}
        </motion.div>
      </section>

      {/* Numbered process — vertical timeline layout, unique to SEO */}
      <section style={{ padding: "80px 24px", maxWidth: "900px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "56px" }}>
          <span className="eyebrow">OUR SEO PROCESS</span>
          <h2 style={{ fontSize: "clamp(28px, 4vw, 42px)", letterSpacing: "-1px", marginTop: "12px" }}>A proven 6-step framework<br />for organic growth.</h2>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
          {process.map((p, i) => (
            <motion.div key={p.step} initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} style={{ display: "grid", gridTemplateColumns: "60px 1fr", gap: "24px", padding: "32px 0", borderBottom: i < process.length - 1 ? "1px solid #e2e8f0" : "none" }}>
              <div style={{ width: "56px", height: "56px", borderRadius: "14px", background: `${p.color}12`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <p.icon size={24} style={{ color: p.color }} />
              </div>
              <div>
                <span style={{ fontSize: "11px", fontWeight: 900, color: p.color, letterSpacing: "1px" }}>STEP {p.step}</span>
                <h3 style={{ fontSize: "20px", fontWeight: 800, margin: "4px 0 8px", color: "#0b152a" }}>{p.title}</h3>
                <p style={{ fontSize: "14px", color: "#4a5d7a", lineHeight: "1.7", margin: 0 }}>{p.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Comparison table — unique to SEO */}
      <section style={{ padding: "80px 24px", background: "#fefce8" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
          <span className="eyebrow">SEO vs PAID ADS</span>
          <h2 style={{ fontSize: "clamp(28px, 4vw, 38px)", letterSpacing: "-1px", marginTop: "12px", marginBottom: "40px" }}>Why organic search wins long-term.</h2>
          <div style={{ background: "#fff", borderRadius: "16px", overflow: "hidden", border: "1px solid #e2e8f0" }}>
            {[
              { metric: "Cost per Click", seo: "Free (after ranking)", paid: "$2 - $50+ per click" },
              { metric: "Traffic When You Stop", seo: "Keeps coming", paid: "Drops to zero" },
              { metric: "Trust & Credibility", seo: "High (earned)", paid: "Lower (bought)" },
              { metric: "Long-Term ROI", seo: "Compounds over time", paid: "Linear spend" },
              { metric: "Click-Through Rate", seo: "30-40% (position 1)", paid: "2-5% average" },
            ].map((row, i) => (
              <div key={row.metric} style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", borderBottom: i < 4 ? "1px solid #f0f0f0" : "none", fontSize: "14px" }}>
                <div style={{ padding: "16px 20px", fontWeight: 700, color: "#0b152a", textAlign: "left" }}>{row.metric}</div>
                <div style={{ padding: "16px 20px", color: "#1ba77e", fontWeight: 600, background: "#f0fdf4" }}><CheckCircle2 size={14} style={{ display: "inline", marginRight: "4px" }} />{row.seo}</div>
                <div style={{ padding: "16px 20px", color: "#4a5d7a" }}>{row.paid}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section section-shell">
        <div><h2>Ready to own page one?</h2><p>Get a free SEO audit and discover how much organic traffic you&apos;re leaving on the table.</p></div>
        <div className="cta-actions">
          <Link className="button" href="/#contact" style={{ background: "#f59e0b", borderColor: "#f59e0b" }}>Get Free SEO Audit <ArrowRight size={16} /></Link>
          <Link className="text-link" href="/product">View All Products <ArrowRight size={14} /></Link>
        </div>
      </section>
    </main>
  );
}
