"use client";

import { motion } from "framer-motion";
import { ArrowRight, Layers, BarChart3, DollarSign, Package, Users, FileText, TrendingUp, Shield, Zap, CheckCircle2, Clock, Globe2, Boxes } from "lucide-react";
import Link from "next/link";

const modules = [
  { icon: DollarSign, title: "Finance & Accounting", desc: "Automate invoicing, track expenses, manage budgets, and generate real-time financial reports with complete audit trails.", color: "#1760ed" },
  { icon: Package, title: "Inventory Management", desc: "Track stock levels across warehouses, automate reorder points, and optimize supply chain with predictive analytics.", color: "#1ba77e" },
  { icon: Users, title: "Human Resources", desc: "Manage employee lifecycle from hiring to payroll, attendance tracking, leave management, and performance reviews.", color: "#896dff" },
  { icon: FileText, title: "Procurement", desc: "Streamline vendor management, purchase orders, approvals, and contracts with automated workflows.", color: "#e95812" },
  { icon: BarChart3, title: "Business Intelligence", desc: "Real-time dashboards, custom reports, KPI tracking, and predictive analytics across all departments.", color: "#36b2ba" },
  { icon: Boxes, title: "Manufacturing", desc: "Bill of materials, production planning, work orders, quality control, and shop floor management.", color: "#d97b1e" },
];

const benefits = [
  { value: "60%", label: "Less Manual Data Entry", desc: "Automated workflows eliminate repetitive tasks" },
  { value: "3.5x", label: "Faster Processing", desc: "Real-time data flow across departments" },
  { value: "99.9%", label: "Data Accuracy", desc: "Single source of truth eliminates errors" },
  { value: "40%", label: "Cost Reduction", desc: "Streamlined operations reduce overhead" },
];

export default function ErpPage() {
  return (
    <main>
      <section className="split-hero">
        <div>
          <motion.span className="pill" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <Layers size={14} /> TEKKZY ERP
          </motion.span>
          <motion.h1 initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }} style={{ fontSize: "clamp(38px, 5vw, 60px)" }}>
            Run Your Entire<br />Business From<br />One Platform.
          </motion.h1>
          <motion.p initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }} style={{ fontSize: "17px", color: "#4a5d7a", marginBottom: "32px", lineHeight: "1.7", maxWidth: "500px" }}>
            Tekkzy ERP unifies finance, inventory, HR, procurement, and operations into a single intelligent system. Stop managing spreadsheets — start managing your business.
          </motion.p>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
            <Link href="/#contact" className="button" style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}>
              Request a Demo <ArrowRight size={16} />
            </Link>
            <Link href="/product/solutions/core-business" className="button button-outline" style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}>
              Explore Core Business
            </Link>
          </motion.div>
        </div>
        <div>
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.3 }} style={{ background: "linear-gradient(135deg, #1760ed10, #1760ed05)", borderRadius: "20px", padding: "48px 32px", border: "1px solid #e2e8f0", position: "relative", overflow: "hidden" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
              {benefits.map((b, i) => (
                <motion.div key={b.label} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 + i * 0.1 }} style={{ padding: "20px", background: "#fff", borderRadius: "12px", border: "1px solid #e2e8f0" }}>
                  <div style={{ fontSize: "28px", fontWeight: 900, color: "#1760ed", letterSpacing: "-1px" }}>{b.value}</div>
                  <div style={{ fontSize: "13px", fontWeight: 800, color: "#0b152a", marginTop: "4px" }}>{b.label}</div>
                  <div style={{ fontSize: "12px", color: "#4a5d7a", marginTop: "2px" }}>{b.desc}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section style={{ padding: "80px 24px", maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "56px" }}>
          <span className="eyebrow">COMPLETE ERP MODULES</span>
          <h2 style={{ fontSize: "clamp(28px, 4vw, 42px)", letterSpacing: "-1px", marginTop: "12px" }}>Everything your business needs.<br />All connected.</h2>
          <p style={{ maxWidth: "600px", margin: "16px auto 0", color: "#4a5d7a", fontSize: "16px", lineHeight: "1.7" }}>Each module works independently or together, sharing data in real-time to give you complete operational visibility.</p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))", gap: "24px" }}>
          {modules.map((m, i) => (
            <motion.div key={m.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} style={{ padding: "32px", background: "#fff", border: "1px solid #e2e8f0", borderRadius: "16px", transition: "transform 0.2s, box-shadow 0.2s" }} className="solution-index-card">
              <m.icon size={28} style={{ color: m.color, marginBottom: "16px" }} />
              <h3 style={{ fontSize: "18px", fontWeight: 800, marginBottom: "8px", color: "#0b152a" }}>{m.title}</h3>
              <p style={{ fontSize: "14px", color: "#4a5d7a", lineHeight: "1.7", margin: 0 }}>{m.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section style={{ padding: "80px 24px", background: "#f7faff" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "56px" }}>
            <span className="eyebrow">WHY TEKKZY ERP</span>
            <h2 style={{ fontSize: "clamp(28px, 4vw, 42px)", letterSpacing: "-1px", marginTop: "12px" }}>Built different from legacy ERPs.</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "20px" }}>
            {[
              { icon: Zap, title: "Deploy in Weeks, Not Years", desc: "No 18-month implementation cycles. Our modular architecture lets you go live module-by-module." },
              { icon: Globe2, title: "Cloud-Native Architecture", desc: "Access your ERP from anywhere. No servers to manage, automatic updates, 99.99% uptime guaranteed." },
              { icon: Shield, title: "Enterprise-Grade Security", desc: "SOC 2 compliant, end-to-end encryption, role-based access control, and complete audit trails." },
              { icon: TrendingUp, title: "AI-Powered Insights", desc: "Built-in AI analyzes patterns, predicts demand, flags anomalies, and recommends optimizations." },
              { icon: Clock, title: "Real-Time Everything", desc: "No batch processing. Every transaction, every report, every dashboard updates in real-time." },
              { icon: CheckCircle2, title: "Seamless Integrations", desc: "Connect with 200+ tools including Stripe, QuickBooks, Salesforce, Shopify, and custom APIs." },
            ].map((item, i) => (
              <motion.div key={item.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }} style={{ padding: "28px", background: "#fff", borderRadius: "14px", border: "1px solid #e2e8f0" }}>
                <item.icon size={22} style={{ color: "#1760ed", marginBottom: "12px" }} />
                <h4 style={{ fontSize: "16px", fontWeight: 800, marginBottom: "6px" }}>{item.title}</h4>
                <p style={{ fontSize: "13px", color: "#4a5d7a", lineHeight: "1.6", margin: 0 }}>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "80px 24px", maxWidth: "900px", margin: "0 auto", textAlign: "center" }}>
        <span className="eyebrow">HOW IT WORKS</span>
        <h2 style={{ fontSize: "clamp(28px, 4vw, 42px)", letterSpacing: "-1px", marginTop: "12px" }}>From chaos to clarity in 4 steps.</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: "24px", marginTop: "48px", textAlign: "left" }}>
          {[
            { step: "01", title: "Discover", desc: "We map your current processes, pain points, and data flows to design the ideal ERP architecture." },
            { step: "02", title: "Configure", desc: "Customize modules, workflows, approval chains, and reports to match your exact business logic." },
            { step: "03", title: "Migrate", desc: "Safely transfer your existing data with validation, deduplication, and integrity checks." },
            { step: "04", title: "Launch", desc: "Go live with training, support, and continuous optimization to ensure adoption and ROI." },
          ].map((s, i) => (
            <motion.div key={s.step} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
              <span style={{ fontSize: "36px", fontWeight: 900, color: "#1760ed20", letterSpacing: "-2px" }}>{s.step}</span>
              <h4 style={{ fontSize: "16px", fontWeight: 800, margin: "4px 0 6px" }}>{s.title}</h4>
              <p style={{ fontSize: "13px", color: "#4a5d7a", lineHeight: "1.6", margin: 0 }}>{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="cta-section section-shell">
        <div><h2>Ready to modernize your operations?</h2><p>Get a personalized demo of Tekkzy ERP tailored to your industry and business size.</p></div>
        <div className="cta-actions">
          <Link className="button" href="/#contact">Schedule a Demo <ArrowRight size={16} /></Link>
          <Link className="text-link" href="/products">View All Products <ArrowRight size={14} /></Link>
        </div>
      </section>
    </main>
  );
}
