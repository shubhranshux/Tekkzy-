"use client";

import { motion } from "framer-motion";
import { Building2, Briefcase, Calculator, Users, Clock, ShieldCheck, Database, Server, CheckCircle2, Factory, Package, ArrowRight, LineChart } from "lucide-react";
import Link from "next/link";

export default function CoreBusinessPage() {
  return (
    <main>
      {/* ── DARK HERO ── */}
      <section className="dark-hero dark-hero-grid">
        <motion.span className="pill" style={{ background: "rgba(255,255,255,0.1)", color: "#fff", border: "1px solid rgba(255,255,255,0.2)" }} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <Building2 size={14} /> CORE BUSINESS OPERATIONS
        </motion.span>
        <motion.h1 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} style={{ fontSize: "clamp(42px, 6vw, 68px)", letterSpacing: "-1.5px", marginTop: "24px" }}>
          Modernize Your Core.<br/>Automate Everything.
        </motion.h1>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.1 }} style={{ maxWidth: "680px", margin: "24px auto 40px", fontSize: "18px", lineHeight: "1.7", color: "#a1b0cd" }}>
          Legacy systems and manual workflows drain resources and stall growth. We implement intelligent, scalable ERP and operational systems that automate the mundane and provide real-time visibility into your entire business.
        </motion.p>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} style={{ display: "flex", gap: "16px", justifyContent: "center" }}>
          <Link href="/#contact" className="button" style={{ background: "#1760ed", color: "#fff", display: "inline-flex", alignItems: "center", gap: "8px", border: "none" }}>
            Schedule an Operations Audit <ArrowRight size={16} />
          </Link>
        </motion.div>
      </section>

      {/* ── METRICS STRIP ── */}
      <section className="metric-strip" style={{ background: "#0b152a", borderBottom: "1px solid rgba(255,255,255,0.1)", color: "#fff" }}>
        <div className="metric-item">
          <strong style={{ color: "#fff" }}>60%</strong>
          <span style={{ color: "#6b7c93" }}>Reduction in Manual Data Entry</span>
        </div>
        <div className="metric-item">
          <strong style={{ color: "#fff" }}>99.9%</strong>
          <span style={{ color: "#6b7c93" }}>Inventory Accuracy</span>
        </div>
        <div className="metric-item">
          <strong style={{ color: "#fff" }}>3.5x</strong>
          <span style={{ color: "#6b7c93" }}>Faster Order Processing</span>
        </div>
        <div className="metric-item">
          <strong style={{ color: "#fff" }}>100%</strong>
          <span style={{ color: "#6b7c93" }}>Real-Time Financial Visibility</span>
        </div>
      </section>

      {/* ── CORE OPERATIONS FEATURES ── */}
      <section className="solution-features" style={{ padding: "100px 24px" }}>
        <div style={{ textAlign: "center", marginBottom: "60px" }}>
          <h2 style={{ fontSize: "36px", fontWeight: 800, letterSpacing: "-1px", color: "#0b1630" }}>Enterprise Resource Planning (ERP) Solutions</h2>
          <p style={{ color: "#4a5d7a", maxWidth: "600px", margin: "16px auto 0", lineHeight: "1.6" }}>We don't just install software; we engineer operational ecosystems. Our ERP solutions break down data silos and unite your organization under a single source of truth.</p>
        </div>
        
        <div className="solution-features-grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))" }}>
          <div className="feature-card">
            <div className="feature-icon" style={{ background: "linear-gradient(135deg, #1760ed, #0840b2)" }}>
              <Calculator size={22} />
            </div>
            <h3>Financial Management</h3>
            <p>Automate accounts payable, accounts receivable, and general ledger operations. Get real-time cash flow analysis, automated reconciliation, and one-click financial reporting that complies with global accounting standards.</p>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon" style={{ background: "linear-gradient(135deg, #1ba77e, #0e7a5a)" }}>
              <Package size={22} />
            </div>
            <h3>Supply Chain & Inventory</h3>
            <p>End-to-end visibility from procurement to fulfillment. Implement predictive demand forecasting, multi-warehouse management, barcode scanning, and automated reorder points to prevent stockouts and reduce holding costs.</p>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon" style={{ background: "linear-gradient(135deg, #e95812, #b54009)" }}>
              <Users size={22} />
            </div>
            <h3>Human Resources (HRIS)</h3>
            <p>Manage the entire employee lifecycle. Centralize payroll processing, benefits administration, performance reviews, and time-tracking in a secure, self-service portal that your employees will actually use.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon" style={{ background: "linear-gradient(135deg, #896dff, #5b40cc)" }}>
              <Factory size={22} />
            </div>
            <h3>Manufacturing & Production</h3>
            <p>Optimize shop floor operations with capacity planning, bill of materials (BOM) management, quality control routing, and IoT machine integrations that track production efficiency (OEE) in real-time.</p>
          </div>
        </div>
      </section>

      {/* ── ZIG-ZAG ── */}
      <section className="zig-zag-section" style={{ background: "#f8fbff", padding: "100px 24px", maxWidth: "100%", borderTop: "1px solid #edf2f9", borderBottom: "1px solid #edf2f9" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gap: "100px" }}>
          <div className="zig-zag-row">
            <div className="zz-visual" style={{ background: "#fff", border: "1px solid #edf2f9", boxShadow: "0 10px 30px rgba(0,0,0,0.05)" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: "12px", width: "100%", padding: "40px" }}>
                <div style={{ height: "40px", background: "#f4f7fb", borderRadius: "8px", width: "100%", position: "relative", overflow: "hidden" }}>
                  <motion.div animate={{ x: ["-100%", "100%"] }} transition={{ repeat: Infinity, duration: 2, ease: "linear" }} style={{ position: "absolute", top: 0, bottom: 0, width: "30%", background: "linear-gradient(90deg, transparent, rgba(23,96,237,0.1), transparent)" }} />
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
                  <div style={{ height: "120px", background: "#f4f7fb", borderRadius: "8px" }} />
                  <div style={{ height: "120px", background: "#f4f7fb", borderRadius: "8px" }} />
                </div>
                <div style={{ height: "40px", background: "#f4f7fb", borderRadius: "8px", width: "60%" }} />
              </div>
            </div>
            <div className="zz-content">
              <h3>Legacy System Modernization</h3>
              <p>Outdated AS400s, disjointed spreadsheets, and on-premise monoliths are technical debt that slows you down. We safely migrate your critical business logic and historical data from fragile legacy systems to modern, cloud-native architectures.</p>
              <p style={{ marginTop: "16px" }}>Our migration strategy is risk-averse. We use a strangler fig pattern to gradually replace legacy components, ensuring zero downtime for your daily operations while we rebuild your core on reliable AWS or Google Cloud infrastructure.</p>
            </div>
          </div>

          <div className="zig-zag-row">
            <div className="zz-visual" style={{ background: "#fff", border: "1px solid #edf2f9", boxShadow: "0 10px 30px rgba(0,0,0,0.05)" }}>
              <div style={{ position: "relative", width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Database size={80} color="#1ba77e" />
                <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 10, ease: "linear" }} style={{ position: "absolute", width: "140px", height: "140px", border: "2px dashed #1ba77e", borderRadius: "50%", opacity: 0.3 }} />
              </div>
            </div>
            <div className="zz-content">
              <h3>Intelligent Automation (RPA)</h3>
              <p>Stop paying humans to do robotic work. We deploy Robotic Process Automation (RPA) scripts and AI agents to handle invoice processing, data entry, compliance checks, and report generation.</p>
              <p style={{ marginTop: "16px" }}>By automating high-volume, repetitive tasks, you reduce human error to zero and free up your workforce to focus on high-value, strategic initiatives. Our automation pipelines run 24/7, accelerating your operational cadence.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── PROCESS STEPS ── */}
      <section style={{ padding: "100px 24px", maxWidth: "900px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "60px" }}>
          <h2 style={{ fontSize: "36px", fontWeight: 800, color: "#0b1630" }}>Implementation Roadmap</h2>
          <p style={{ color: "#4a5d7a", margin: "16px auto 0" }}>Enterprise software implementations fail because of poor planning, not poor technology. Here is how we guarantee success.</p>
        </div>
        
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          {[
            { step: "Phase 1: Process Mining", desc: "We map your existing workflows, identify bottlenecks, and document exact requirements before selecting or building any software." },
            { step: "Phase 2: Architecture & Design", desc: "We design the data models, system architecture, and integration layers ensuring the new system supports your 5-year growth plan." },
            { step: "Phase 3: Phased Rollout", desc: "We build and deploy in functional modules (e.g., Financials first, then Inventory) to minimize organizational shock." },
            { step: "Phase 4: Data Migration", desc: "Secure extraction, cleansing, and loading of your historical data. We run parallel tests to ensure 100% data fidelity." },
            { step: "Phase 5: Change Management", desc: "Comprehensive employee training, documentation, and on-site support during the critical go-live period." }
          ].map((item, i) => (
            <div key={i} style={{ display: "flex", gap: "24px", padding: "32px", background: "#fff", border: "1px solid #edf2f9", borderRadius: "12px", alignItems: "center" }}>
              <div style={{ width: "60px", height: "60px", borderRadius: "50%", background: "#f0f5ff", color: "#1760ed", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "24px", fontWeight: 800, flexShrink: 0 }}>
                {i + 1}
              </div>
              <div>
                <h4 style={{ fontSize: "20px", fontWeight: 800, color: "#0b152a", marginBottom: "8px" }}>{item.step}</h4>
                <p style={{ color: "#4a5d7a", margin: 0, lineHeight: "1.6" }}>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="solution-cta" style={{ background: "#0b152a", color: "#fff" }}>
        <h2 style={{ color: "#fff" }}>Stop managing spreadsheets. Start managing growth.</h2>
        <p style={{ color: "#8ba0c8" }}>Let's architect an operational backbone that scales infinitely.</p>
        <Link href="/#contact" className="button" style={{ background: "#1760ed", color: "#fff", display: "inline-flex", alignItems: "center", gap: "8px", border: "none" }}>
          Contact Our Architects <ArrowRight size={16} />
        </Link>
      </section>
    </main>
  );
}
