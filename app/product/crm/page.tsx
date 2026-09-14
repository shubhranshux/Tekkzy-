"use client";

import { motion } from "framer-motion";
import { ArrowRight, Layers, Users, Mail, Phone, BarChart3, Target, Handshake, MessageSquare, TrendingUp, Zap, Globe2, PieChart, Filter, Bell, Calendar } from "lucide-react";
import Link from "next/link";

const features = [
  { icon: Users, title: "Contact Management", desc: "360° customer profiles with interaction history, notes, tags, and custom fields. Never lose track of a relationship.", color: "#1760ed" },
  { icon: Filter, title: "Pipeline Management", desc: "Visual drag-and-drop deal pipelines with stages, probability scoring, and automated follow-ups.", color: "#896dff" },
  { icon: Mail, title: "Email Integration", desc: "Two-way email sync with templates, sequences, tracking, and automated outreach campaigns.", color: "#e95812" },
  { icon: BarChart3, title: "Sales Analytics", desc: "Revenue forecasting, win/loss analysis, team performance, and custom report builders.", color: "#1ba77e" },
  { icon: Bell, title: "Smart Notifications", desc: "AI-powered alerts for deal risks, upsell opportunities, contract renewals, and engagement drops.", color: "#d97b1e" },
  { icon: Calendar, title: "Activity Tracking", desc: "Log calls, meetings, tasks, and notes. Automated activity reminders and team calendars.", color: "#36b2ba" },
];

const stats = [
  { value: "200+", label: "Businesses Powered" },
  { value: "45%", label: "Avg Deal Close Rate Increase" },
  { value: "2.8x", label: "More Pipeline Visibility" },
  { value: "98%", label: "Customer Satisfaction" },
];

export default function CrmPage() {
  return (
    <main>
      <section className="split-hero">
        <div>
          <motion.span className="pill" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <Layers size={14} /> TEKKZY CRM
          </motion.span>
          <motion.h1 initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }} style={{ fontSize: "clamp(38px, 5vw, 60px)" }}>
            Build Stronger<br />Relationships.<br />Close More Deals.
          </motion.h1>
          <motion.p initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }} style={{ fontSize: "17px", color: "#4a5d7a", marginBottom: "32px", lineHeight: "1.7", maxWidth: "500px" }}>
            Tekkzy CRM gives your sales, marketing, and support teams a unified view of every customer — from first touch to loyal advocate. Powered by AI, designed for growth.
          </motion.p>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
            <Link href="/#contact" className="button" style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}>Start Free Trial <ArrowRight size={16} /></Link>
            <Link href="/product/solutions/core-business" className="button button-outline" style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}>See How It Works</Link>
          </motion.div>
        </div>
        <div>
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.3 }} style={{ background: "linear-gradient(135deg, #3f60ea10, #3f60ea05)", borderRadius: "20px", padding: "40px 28px", border: "1px solid #e2e8f0" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
              {stats.map((s, i) => (
                <motion.div key={s.label} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 + i * 0.1 }} style={{ padding: "20px", background: "#fff", borderRadius: "12px", border: "1px solid #e2e8f0", textAlign: "center" }}>
                  <div style={{ fontSize: "28px", fontWeight: 900, color: "#3f60ea", letterSpacing: "-1px" }}>{s.value}</div>
                  <div style={{ fontSize: "12px", fontWeight: 700, color: "#4a5d7a", marginTop: "4px" }}>{s.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section style={{ padding: "80px 24px", maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "56px" }}>
          <span className="eyebrow">POWERFUL FEATURES</span>
          <h2 style={{ fontSize: "clamp(28px, 4vw, 42px)", letterSpacing: "-1px", marginTop: "12px" }}>Everything you need to manage<br />customer relationships.</h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))", gap: "24px" }}>
          {features.map((f, i) => (
            <motion.div key={f.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="solution-index-card" style={{ padding: "32px", background: "#fff", border: "1px solid #e2e8f0", borderRadius: "16px" }}>
              <f.icon size={28} style={{ color: f.color, marginBottom: "16px" }} />
              <h3 style={{ fontSize: "18px", fontWeight: 800, marginBottom: "8px" }}>{f.title}</h3>
              <p style={{ fontSize: "14px", color: "#4a5d7a", lineHeight: "1.7", margin: 0 }}>{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section style={{ padding: "80px 24px", background: "#f7faff" }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "48px" }}>
            <span className="eyebrow">CRM THAT GROWS WITH YOU</span>
            <h2 style={{ fontSize: "clamp(28px, 4vw, 42px)", letterSpacing: "-1px", marginTop: "12px" }}>From startup to enterprise.</h2>
            <p style={{ maxWidth: "600px", margin: "16px auto 0", color: "#4a5d7a", fontSize: "16px", lineHeight: "1.7" }}>Whether you have 10 contacts or 10 million, Tekkzy CRM scales with your business without complexity.</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "20px" }}>
            {[
              { icon: Zap, title: "AI Lead Scoring", desc: "Machine learning ranks your leads by conversion probability, so your team focuses on what matters." },
              { icon: Globe2, title: "Multi-Channel Engagement", desc: "Email, phone, chat, social — engage customers on their preferred channel from one unified inbox." },
              { icon: PieChart, title: "Revenue Intelligence", desc: "AI analyzes deal patterns, identifies risks, and suggests actions to accelerate your pipeline." },
              { icon: Handshake, title: "Partner Portal", desc: "Give partners their own dashboard to manage referrals, co-selling opportunities, and commissions." },
              { icon: Target, title: "Campaign Attribution", desc: "Track which marketing campaigns drive revenue with multi-touch attribution modeling." },
              { icon: MessageSquare, title: "Conversational AI", desc: "Built-in chatbot qualifies leads, books meetings, and answers FAQs 24/7 on your website." },
            ].map((item, i) => (
              <motion.div key={item.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }} style={{ padding: "28px", background: "#fff", borderRadius: "14px", border: "1px solid #e2e8f0" }}>
                <item.icon size={22} style={{ color: "#3f60ea", marginBottom: "12px" }} />
                <h4 style={{ fontSize: "16px", fontWeight: 800, marginBottom: "6px" }}>{item.title}</h4>
                <p style={{ fontSize: "13px", color: "#4a5d7a", lineHeight: "1.6", margin: 0 }}>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section section-shell">
        <div><h2>Start building better relationships today.</h2><p>Join 200+ businesses using Tekkzy CRM to close more deals and grow faster.</p></div>
        <div className="cta-actions">
          <Link className="button" href="/#contact">Start Free Trial <ArrowRight size={16} /></Link>
          <Link className="text-link" href="/products">View All Products <ArrowRight size={14} /></Link>
        </div>
      </section>
    </main>
  );
}
