"use client";

import { motion } from "framer-motion";
import { ArrowRight, Layers, BrainCircuit, MessageSquare, FileSearch, Database, Sparkles, Bot, BarChart3, Code2, Lightbulb, Shield, Zap, Globe2 } from "lucide-react";
import Link from "next/link";

const capabilities = [
  { icon: MessageSquare, title: "Conversational AI", desc: "Natural language interface that understands context, remembers conversations, and executes complex multi-step tasks across your business systems.", color: "#7157ee" },
  { icon: FileSearch, title: "Document Intelligence", desc: "Upload contracts, invoices, reports — AI extracts key data, summarizes content, and answers questions about your documents instantly.", color: "#1760ed" },
  { icon: Database, title: "Data Analysis", desc: "Ask questions in plain English. AI queries your databases, creates visualizations, identifies trends, and generates actionable insights.", color: "#1ba77e" },
  { icon: Code2, title: "Code Generation", desc: "Describe what you need — AI writes SQL queries, API integrations, automation scripts, and generates technical documentation.", color: "#e95812" },
  { icon: Lightbulb, title: "Smart Recommendations", desc: "AI analyzes patterns across your operations and proactively suggests optimizations, cost savings, and growth opportunities.", color: "#d97b1e" },
  { icon: BarChart3, title: "Predictive Analytics", desc: "Forecast revenue, predict customer churn, anticipate inventory needs, and model business scenarios with AI-powered predictions.", color: "#36b2ba" },
];

export default function AiAssistantPage() {
  return (
    <main>
      <section className="split-hero">
        <div>
          <motion.span className="pill" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <BrainCircuit size={14} /> TEKKZY AI ASSISTANT
          </motion.span>
          <motion.h1 initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }} style={{ fontSize: "clamp(38px, 5vw, 60px)" }}>
            Your Intelligent<br />Business Partner.<br />Always On.
          </motion.h1>
          <motion.p initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }} style={{ fontSize: "17px", color: "#4a5d7a", marginBottom: "32px", lineHeight: "1.7", maxWidth: "500px" }}>
            Tekkzy AI Assistant connects to all your business systems — ERP, CRM, analytics, documents — and gives every team member the power to ask questions, get answers, and take action using natural language.
          </motion.p>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
            <Link href="/#contact" className="button" style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}>Try AI Assistant <ArrowRight size={16} /></Link>
            <Link href="/product/automation" className="button button-outline" style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}>See Automation</Link>
          </motion.div>
        </div>
        <div>
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.3 }} style={{ background: "linear-gradient(135deg, #7157ee10, #7157ee05)", borderRadius: "20px", padding: "32px", border: "1px solid #e2e8f0" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {[
                { q: "What were our top 5 products by revenue last quarter?", a: "Here are your top 5 products ranked by Q3 revenue..." },
                { q: "Draft a follow-up email to clients with overdue invoices", a: "I've drafted personalized emails for 12 clients with overdue invoices..." },
                { q: "Predict next month's inventory needs for warehouse A", a: "Based on seasonal trends and current velocity, I recommend..." },
              ].map((chat, i) => (
                <motion.div key={i} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 + i * 0.15 }}>
                  <div style={{ background: "#f0f5ff", borderRadius: "12px 12px 12px 4px", padding: "12px 16px", marginBottom: "8px", fontSize: "13px", color: "#0b152a", fontWeight: 600 }}>{chat.q}</div>
                  <div style={{ background: "#fff", borderRadius: "12px 12px 4px 12px", padding: "12px 16px", fontSize: "12px", color: "#4a5d7a", border: "1px solid #e2e8f0" }}><Bot size={14} style={{ display: "inline", marginRight: "6px", color: "#7157ee" }} />{chat.a}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section style={{ padding: "80px 24px", maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "56px" }}>
          <span className="eyebrow">AI CAPABILITIES</span>
          <h2 style={{ fontSize: "clamp(28px, 4vw, 42px)", letterSpacing: "-1px", marginTop: "12px" }}>More than a chatbot.<br />A business intelligence engine.</h2>
          <p style={{ maxWidth: "600px", margin: "16px auto 0", color: "#4a5d7a", fontSize: "16px", lineHeight: "1.7" }}>Tekkzy AI doesn't just answer questions — it understands your business context, connects to live data, and takes action on your behalf.</p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))", gap: "24px" }}>
          {capabilities.map((c, i) => (
            <motion.div key={c.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="solution-index-card" style={{ padding: "32px", background: "#fff", border: "1px solid #e2e8f0", borderRadius: "16px" }}>
              <c.icon size={28} style={{ color: c.color, marginBottom: "16px" }} />
              <h3 style={{ fontSize: "18px", fontWeight: 800, marginBottom: "8px" }}>{c.title}</h3>
              <p style={{ fontSize: "14px", color: "#4a5d7a", lineHeight: "1.7", margin: 0 }}>{c.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section style={{ padding: "80px 24px", background: "#f7faff" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto", textAlign: "center" }}>
          <span className="eyebrow">SECURITY & TRUST</span>
          <h2 style={{ fontSize: "clamp(28px, 4vw, 42px)", letterSpacing: "-1px", marginTop: "12px" }}>Enterprise AI you can trust.</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))", gap: "20px", marginTop: "48px", textAlign: "left" }}>
            {[
              { icon: Shield, title: "Data Privacy First", desc: "Your data never leaves your environment. AI processes everything within your secure cloud instance." },
              { icon: Zap, title: "Role-Based Access", desc: "AI respects user permissions. Sales sees sales data, HR sees HR data — no unauthorized access." },
              { icon: Globe2, title: "Audit Trail", desc: "Every AI interaction is logged with timestamps, user IDs, and data accessed for complete compliance." },
              { icon: Sparkles, title: "Continuous Learning", desc: "AI improves over time by learning your business terminology, preferences, and patterns — privately." },
            ].map((item, i) => (
              <motion.div key={item.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} style={{ padding: "28px", background: "#fff", borderRadius: "14px", border: "1px solid #e2e8f0" }}>
                <item.icon size={22} style={{ color: "#7157ee", marginBottom: "12px" }} />
                <h4 style={{ fontSize: "16px", fontWeight: 800, marginBottom: "6px" }}>{item.title}</h4>
                <p style={{ fontSize: "13px", color: "#4a5d7a", lineHeight: "1.6", margin: 0 }}>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section section-shell">
        <div><h2>Put AI to work for your business.</h2><p>See how Tekkzy AI Assistant can transform how your team operates, decides, and grows.</p></div>
        <div className="cta-actions">
          <Link className="button" href="/#contact">Request AI Demo <ArrowRight size={16} /></Link>
          <Link className="text-link" href="/products">View All Products <ArrowRight size={14} /></Link>
        </div>
      </section>
    </main>
  );
}
