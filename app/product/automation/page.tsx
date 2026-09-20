"use client";

import { motion } from "framer-motion";
import { ArrowRight, Zap, GitBranch, Clock, Bell, FileCheck, RotateCcw, Settings, Layers, BrainCircuit, Shield, Workflow, CheckCircle2, Repeat } from "lucide-react";
import Link from "next/link";

const workflows = [
  { title: "Invoice Approval", steps: ["Invoice Received", "Manager Review", "Finance Approval", "Payment Processed"], color: "#20a68c" },
  { title: "Employee Onboarding", steps: ["Offer Accepted", "HR Setup", "IT Provisioning", "Team Assignment"], color: "#1760ed" },
  { title: "Lead Qualification", steps: ["Form Submitted", "AI Scoring", "Sales Assignment", "Outreach Triggered"], color: "#896dff" },
];

export default function AutomationPage() {
  return (
    <main>
      {/* Dark hero — unique to Automation */}
      <section style={{ padding: "140px 24px 100px", background: "linear-gradient(180deg, #0b152a 0%, #162240 100%)", color: "#fff", textAlign: "center" }}>
        <motion.span className="pill" initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ borderColor: "#20a68c60", color: "#4aedc4" }}>
          <Zap size={14} /> TEKKZY AUTOMATION
        </motion.span>
        <motion.h1 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} style={{ fontSize: "clamp(42px, 6vw, 72px)", letterSpacing: "-2px", marginTop: "24px", maxWidth: "700px", marginLeft: "auto", marginRight: "auto" }}>
          Automate the<br /><span style={{ color: "#4aedc4" }}>Mundane.</span><br />Accelerate the Important.
        </motion.h1>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }} style={{ maxWidth: "600px", margin: "24px auto 40px", fontSize: "18px", lineHeight: "1.7", color: "#8fa0c4" }}>
          Build powerful automations without code. Connect systems, trigger workflows, and let AI handle the repetitive work while your team focuses on high-impact tasks.
        </motion.p>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} style={{ display: "flex", gap: "16px", justifyContent: "center" }}>
          <Link href="/#contact" className="button" style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "#20a68c", borderColor: "#20a68c" }}>Start Automating <ArrowRight size={16} /></Link>
        </motion.div>

        {/* Live workflow visualizations — unique */}
        <div style={{ display: "flex", gap: "24px", justifyContent: "center", marginTop: "64px", flexWrap: "wrap" }}>
          {workflows.map((w, wi) => (
            <motion.div key={w.title} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 + wi * 0.15 }} style={{ background: "#1a2d4d", borderRadius: "16px", padding: "24px", border: "1px solid #2a3f6a", width: "280px", textAlign: "left" }}>
              <div style={{ fontSize: "12px", fontWeight: 800, color: w.color, letterSpacing: "0.5px", marginBottom: "16px" }}>{w.title}</div>
              {w.steps.map((step, si) => (
                <div key={step} style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: si < w.steps.length - 1 ? "4px" : "0" }}>
                  <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ delay: 1 + wi * 0.3 + si * 0.4, duration: 0.5 }} style={{ width: "8px", height: "8px", borderRadius: "50%", background: w.color, flexShrink: 0 }} />
                  <span style={{ fontSize: "12px", color: "#8fa0c4" }}>{step}</span>
                  {si < w.steps.length - 1 && <div style={{ position: "absolute", left: "27px", width: "2px", height: "16px", background: `${w.color}30` }} />}
                </div>
              ))}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Automation types — horizontal cards */}
      <section style={{ padding: "80px 24px", maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "56px" }}>
          <span className="eyebrow">AUTOMATION TYPES</span>
          <h2 style={{ fontSize: "clamp(28px, 4vw, 42px)", letterSpacing: "-1px", marginTop: "12px" }}>Automate anything.<br />No code required.</h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "20px" }}>
          {[
            { icon: GitBranch, title: "Workflow Automation", desc: "Build multi-step workflows with conditional logic, branching paths, parallel processing, and error handling.", color: "#20a68c" },
            { icon: Clock, title: "Scheduled Tasks", desc: "Run reports, sync data, send reminders, and execute batch operations on custom schedules.", color: "#1760ed" },
            { icon: Bell, title: "Event-Driven Triggers", desc: "React to form submissions, status changes, email arrivals, webhook events, and database updates instantly.", color: "#e95812" },
            { icon: FileCheck, title: "Approval Chains", desc: "Multi-level approval workflows with escalation, delegation, timeout rules, and mobile notifications.", color: "#896dff" },
            { icon: RotateCcw, title: "Data Sync", desc: "Keep data synchronized across CRM, ERP, email, accounting, and 200+ third-party integrations.", color: "#d97b1e" },
            { icon: BrainCircuit, title: "AI Automation", desc: "Let AI classify emails, extract data from documents, generate responses, and make routing decisions.", color: "#36b2ba" },
            { icon: Settings, title: "Custom Actions", desc: "Build custom automation actions with our API — call external services, transform data, or execute scripts.", color: "#1ba77e" },
            { icon: Repeat, title: "Recurring Processes", desc: "Monthly billing runs, quarterly reports, annual reviews — automate every recurring business process.", color: "#4565cf" },
          ].map((a, i) => (
            <motion.div key={a.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }} style={{ padding: "28px", background: "#fff", borderRadius: "14px", border: "1px solid #e2e8f0" }}>
              <div style={{ width: "44px", height: "44px", borderRadius: "12px", background: `${a.color}12`, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "16px" }}>
                <a.icon size={22} style={{ color: a.color }} />
              </div>
              <h3 style={{ fontSize: "16px", fontWeight: 800, marginBottom: "6px" }}>{a.title}</h3>
              <p style={{ fontSize: "13px", color: "#4a5d7a", lineHeight: "1.6", margin: 0 }}>{a.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ROI Calculator style — unique */}
      <section style={{ padding: "80px 24px", background: "#0b152a", color: "#fff" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto", textAlign: "center" }}>
          <span style={{ fontSize: "12px", fontWeight: 800, letterSpacing: "2px", color: "#4aedc4" }}>THE IMPACT</span>
          <h2 style={{ fontSize: "clamp(28px, 4vw, 42px)", letterSpacing: "-1px", marginTop: "12px", color: "#fff" }}>Hours saved. Errors eliminated.</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: "24px", marginTop: "48px" }}>
            {[
              { value: "847", unit: "hrs/month", label: "Average time saved per client" },
              { value: "96%", unit: "", label: "Reduction in manual errors" },
              { value: "12x", unit: "", label: "Faster process completion" },
              { value: "200+", unit: "", label: "Pre-built automation templates" },
            ].map((s, i) => (
              <motion.div key={s.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} style={{ padding: "24px", background: "#1a2d4d", borderRadius: "14px", border: "1px solid #2a3f6a" }}>
                <div style={{ fontSize: "36px", fontWeight: 900, color: "#4aedc4", letterSpacing: "-2px" }}>{s.value}<span style={{ fontSize: "16px", color: "#8fa0c4" }}>{s.unit}</span></div>
                <div style={{ fontSize: "12px", color: "#8fa0c4", marginTop: "6px" }}>{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section section-shell">
        <div><h2>Stop doing manually what can be automated.</h2><p>See how Tekkzy Automation can save your team hundreds of hours every month.</p></div>
        <div className="cta-actions">
          <Link className="button" href="/#contact" style={{ background: "#20a68c", borderColor: "#20a68c" }}>Start Automating <ArrowRight size={16} /></Link>
          <Link className="text-link" href="/product">View All Products <ArrowRight size={14} /></Link>
        </div>
      </section>
    </main>
  );
}
