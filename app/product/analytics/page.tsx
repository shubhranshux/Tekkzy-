"use client";

import { motion } from "framer-motion";
import { ArrowRight, BarChart3, PieChart, LineChart, TrendingUp, Eye, Filter, Download, Share2, Layers, Database, Zap, Globe2, Table2 } from "lucide-react";
import Link from "next/link";

export default function AnalyticsPage() {
  return (
    <main>
      {/* Dashboard-style hero — unique to Analytics */}
      <section style={{ padding: "120px 24px 60px", background: "linear-gradient(180deg, #eef2ff 0%, #fff 60%)" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "48px" }}>
            <motion.span className="pill" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <BarChart3 size={14} /> TEKKZY ANALYTICS
            </motion.span>
            <motion.h1 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} style={{ fontSize: "clamp(42px, 6vw, 68px)", letterSpacing: "-2px", marginTop: "24px" }}>
              See Everything.<br /><span style={{ color: "#4565cf" }}>Know Everything.</span>
            </motion.h1>
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }} style={{ maxWidth: "600px", margin: "20px auto 36px", fontSize: "18px", lineHeight: "1.7", color: "#4a5d7a" }}>
              Real-time dashboards, interactive reports, and AI-powered insights that turn raw data into confident business decisions.
            </motion.p>
          </div>

          {/* Mock dashboard — unique visual */}
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.6 }} style={{ background: "#fff", borderRadius: "20px", border: "1px solid #e2e8f0", padding: "24px", boxShadow: "0 20px 60px rgba(0,0,0,0.06)" }}>
            <div style={{ display: "flex", gap: "8px", marginBottom: "20px" }}>
              <div style={{ width: "12px", height: "12px", borderRadius: "50%", background: "#ff5f57" }} />
              <div style={{ width: "12px", height: "12px", borderRadius: "50%", background: "#ffbd2e" }} />
              <div style={{ width: "12px", height: "12px", borderRadius: "50%", background: "#28c840" }} />
              <span style={{ fontSize: "12px", color: "#94a3b8", marginLeft: "12px" }}>Tekkzy Analytics — Revenue Dashboard</span>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "16px", marginBottom: "20px" }}>
              {[
                { label: "Total Revenue", value: "₹2.4Cr", change: "+18.2%", up: true },
                { label: "Active Users", value: "12,847", change: "+7.3%", up: true },
                { label: "Conversion Rate", value: "3.42%", change: "+0.8%", up: true },
                { label: "Avg Order Value", value: "₹4,250", change: "-2.1%", up: false },
              ].map((m, i) => (
                <motion.div key={m.label} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 + i * 0.1 }} style={{ padding: "16px", background: "#f8fafc", borderRadius: "12px" }}>
                  <div style={{ fontSize: "11px", color: "#64748b", fontWeight: 600, marginBottom: "4px" }}>{m.label}</div>
                  <div style={{ fontSize: "24px", fontWeight: 900, color: "#0b152a", letterSpacing: "-1px" }}>{m.value}</div>
                  <div style={{ fontSize: "12px", fontWeight: 700, color: m.up ? "#1ba77e" : "#e54d4d", marginTop: "2px" }}>{m.change}</div>
                </motion.div>
              ))}
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: "16px" }}>
              <div style={{ background: "#f8fafc", borderRadius: "12px", padding: "20px", height: "180px", display: "flex", alignItems: "flex-end", gap: "6px" }}>
                {[40, 55, 35, 65, 80, 60, 75, 90, 70, 85, 95, 88].map((h, i) => (
                  <motion.div key={i} initial={{ height: 0 }} animate={{ height: `${h}%` }} transition={{ delay: 0.8 + i * 0.05, duration: 0.4 }} style={{ flex: 1, background: `linear-gradient(180deg, #4565cf, #4565cf80)`, borderRadius: "4px 4px 0 0", minHeight: "4px" }} />
                ))}
              </div>
              <div style={{ background: "#f8fafc", borderRadius: "12px", padding: "20px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                <div style={{ width: "100px", height: "100px", borderRadius: "50%", border: "8px solid #4565cf", borderRightColor: "#e2e8f0", borderBottomColor: "#e2e8f0", transform: "rotate(-45deg)" }} />
                <div style={{ fontSize: "12px", color: "#64748b", marginTop: "12px", fontWeight: 600 }}>Revenue Split</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Feature showcase — alternating layout */}
      <section style={{ padding: "80px 24px", maxWidth: "1000px", margin: "0 auto" }}>
        {[
          { icon: Eye, title: "Real-Time Dashboards", desc: "Drag-and-drop dashboard builder with 50+ widget types. KPI cards, charts, tables, maps, and funnels — all updating in real-time. Share dashboards with your team or embed them in your product.", color: "#4565cf" },
          { icon: Filter, title: "Advanced Filtering", desc: "Slice and dice your data with powerful filters, segments, and cohort analysis. Save custom views, create comparison periods, and drill down into any metric with a single click.", color: "#1ba77e" },
          { icon: Download, title: "Automated Reports", desc: "Schedule daily, weekly, or monthly reports delivered to email, Slack, or Teams. PDF, CSV, and Excel exports with custom branding and white-label options.", color: "#e95812" },
          { icon: Share2, title: "Collaborative Insights", desc: "Annotate charts, share discoveries, set alerts on metric thresholds, and build a culture of data-driven decision making across your organization.", color: "#896dff" },
        ].map((f, i) => (
          <motion.div key={f.title} initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} style={{ display: "flex", gap: "32px", alignItems: "flex-start", padding: "40px 0", borderBottom: i < 3 ? "1px solid #e2e8f0" : "none", flexDirection: i % 2 === 0 ? "row" : "row-reverse" }}>
            <div style={{ width: "64px", height: "64px", borderRadius: "16px", background: `${f.color}12`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              <f.icon size={28} style={{ color: f.color }} />
            </div>
            <div>
              <h3 style={{ fontSize: "22px", fontWeight: 800, marginBottom: "8px" }}>{f.title}</h3>
              <p style={{ fontSize: "15px", color: "#4a5d7a", lineHeight: "1.7", margin: 0 }}>{f.desc}</p>
            </div>
          </motion.div>
        ))}
      </section>

      {/* Data sources — logo-style grid, unique */}
      <section style={{ padding: "80px 24px", background: "#f7faff" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto", textAlign: "center" }}>
          <span className="eyebrow">CONNECT ANY DATA SOURCE</span>
          <h2 style={{ fontSize: "clamp(28px, 4vw, 38px)", letterSpacing: "-1px", marginTop: "12px" }}>All your data in one place.</h2>
          <p style={{ maxWidth: "560px", margin: "16px auto 40px", color: "#4a5d7a" }}>Pull data from databases, APIs, spreadsheets, cloud services, and third-party tools into unified dashboards.</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))", gap: "12px" }}>
            {[
              { icon: Database, name: "PostgreSQL" }, { icon: Database, name: "MySQL" }, { icon: Globe2, name: "REST APIs" },
              { icon: Table2, name: "Google Sheets" }, { icon: Layers, name: "MongoDB" }, { icon: Zap, name: "Webhooks" },
              { icon: Database, name: "BigQuery" }, { icon: LineChart, name: "Salesforce" }, { icon: PieChart, name: "HubSpot" },
            ].map((src, i) => (
              <motion.div key={src.name} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.04 }} style={{ padding: "20px", background: "#fff", borderRadius: "12px", border: "1px solid #e2e8f0", display: "flex", alignItems: "center", gap: "10px" }}>
                <src.icon size={18} style={{ color: "#4565cf" }} />
                <span style={{ fontSize: "13px", fontWeight: 700, color: "#0b152a" }}>{src.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section section-shell">
        <div><h2>Turn your data into decisions.</h2><p>See Tekkzy Analytics in action with a live demo using your own data.</p></div>
        <div className="cta-actions">
          <Link className="button" href="/#contact">Get Live Demo <ArrowRight size={16} /></Link>
          <Link className="text-link" href="/products">View All Products <ArrowRight size={14} /></Link>
        </div>
      </section>
    </main>
  );
}
