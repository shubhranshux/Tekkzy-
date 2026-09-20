"use client";

import { motion } from "framer-motion";
import { ArrowRight, Users, Calendar, Wallet, ClipboardCheck, GraduationCap, Heart, Award, Clock, UserPlus, FileText, BarChart3, Layers, Shield } from "lucide-react";
import Link from "next/link";

export default function HrSuitePage() {
  return (
    <main>
      {/* People-centric hero with avatar grid — unique */}
      <section style={{ padding: "120px 24px 80px", background: "linear-gradient(135deg, #fdf2f8 0%, #faf5ff 50%, #fff 100%)" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "60px", alignItems: "center" }}>
          <div>
            <motion.span className="pill" initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ borderColor: "#e0569040" }}>
              <Users size={14} /> TEKKZY HR SUITE
            </motion.span>
            <motion.h1 initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} style={{ fontSize: "clamp(38px, 5vw, 58px)", letterSpacing: "-1.5px", marginTop: "24px" }}>
              Your People<br />Deserve Better<br /><span style={{ color: "#e05690" }}>HR Software.</span>
            </motion.h1>
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }} style={{ fontSize: "17px", color: "#4a5d7a", marginTop: "20px", lineHeight: "1.7", maxWidth: "480px" }}>
              From hiring to retiring — manage every aspect of the employee journey with a platform that&apos;s as human as the people it serves.
            </motion.p>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} style={{ marginTop: "32px", display: "flex", gap: "16px", flexWrap: "wrap" }}>
              <Link href="/#contact" className="button" style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "#e05690", borderColor: "#e05690" }}>Start Free Trial <ArrowRight size={16} /></Link>
            </motion.div>
          </div>
          {/* Employee card stack — unique visual */}
          <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }} style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            {[
              { name: "Priya Sharma", role: "Engineering Lead", status: "On Leave", statusColor: "#f59e0b", avatar: "PS" },
              { name: "Arjun Mehta", role: "Product Designer", status: "Active", statusColor: "#1ba77e", avatar: "AM" },
              { name: "Sneha Iyer", role: "HR Manager", status: "In Meeting", statusColor: "#896dff", avatar: "SI" },
              { name: "Raj Patel", role: "DevOps Engineer", status: "Active", statusColor: "#1ba77e", avatar: "RP" },
            ].map((emp, i) => (
              <motion.div key={emp.name} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 + i * 0.12 }} style={{ display: "flex", alignItems: "center", gap: "16px", padding: "16px 20px", background: "#fff", borderRadius: "14px", border: "1px solid #e2e8f0", boxShadow: "0 2px 8px rgba(0,0,0,0.04)" }}>
                <div style={{ width: "44px", height: "44px", borderRadius: "50%", background: `${emp.statusColor}15`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "14px", fontWeight: 800, color: emp.statusColor }}>{emp.avatar}</div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: "14px", fontWeight: 800, color: "#0b152a" }}>{emp.name}</div>
                  <div style={{ fontSize: "12px", color: "#4a5d7a" }}>{emp.role}</div>
                </div>
                <span style={{ fontSize: "11px", fontWeight: 700, color: emp.statusColor, background: `${emp.statusColor}12`, padding: "4px 10px", borderRadius: "20px" }}>{emp.status}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Module grid — icon-heavy cards */}
      <section style={{ padding: "80px 24px", maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "56px" }}>
          <span className="eyebrow">HR MODULES</span>
          <h2 style={{ fontSize: "clamp(28px, 4vw, 42px)", letterSpacing: "-1px", marginTop: "12px" }}>Everything HR needs.<br />Nothing they don&apos;t.</h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: "20px" }}>
          {[
            { icon: UserPlus, title: "Recruitment & ATS", desc: "Job postings, applicant tracking, interview scheduling, offer management, and onboarding workflows.", color: "#e05690" },
            { icon: Calendar, title: "Leave & Attendance", desc: "Leave policies, approvals, time tracking, shift management, and biometric integration.", color: "#1760ed" },
            { icon: Wallet, title: "Payroll Processing", desc: "Automated salary calculations, tax deductions, statutory compliance, payslip generation, and bank transfers.", color: "#1ba77e" },
            { icon: ClipboardCheck, title: "Performance Reviews", desc: "Goal setting, 360° feedback, competency mapping, appraisal cycles, and development plans.", color: "#896dff" },
            { icon: GraduationCap, title: "Learning & Training", desc: "Course management, skill assessments, certification tracking, and personalized learning paths.", color: "#f59e0b" },
            { icon: Heart, title: "Employee Engagement", desc: "Pulse surveys, mood tracking, recognition programs, team events, and wellness initiatives.", color: "#e95812" },
            { icon: FileText, title: "Document Management", desc: "Digital employee files, e-signatures, policy acknowledgments, and compliance documentation.", color: "#36b2ba" },
            { icon: Shield, title: "Compliance & Policies", desc: "Labor law compliance, policy templates, audit trails, and automated regulatory updates.", color: "#4565cf" },
          ].map((m, i) => (
            <motion.div key={m.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }} style={{ padding: "28px", background: "#fff", borderRadius: "16px", border: "1px solid #e2e8f0" }}>
              <div style={{ width: "48px", height: "48px", borderRadius: "12px", background: `${m.color}10`, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "16px" }}>
                <m.icon size={24} style={{ color: m.color }} />
              </div>
              <h3 style={{ fontSize: "16px", fontWeight: 800, marginBottom: "6px" }}>{m.title}</h3>
              <p style={{ fontSize: "13px", color: "#4a5d7a", lineHeight: "1.6", margin: 0 }}>{m.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Employee lifecycle — horizontal flow, unique */}
      <section style={{ padding: "80px 24px", background: "#fdf2f8" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", textAlign: "center" }}>
          <span className="eyebrow">EMPLOYEE LIFECYCLE</span>
          <h2 style={{ fontSize: "clamp(28px, 4vw, 38px)", letterSpacing: "-1px", marginTop: "12px", marginBottom: "48px" }}>From hire to retire. All in one place.</h2>
          <div style={{ display: "flex", justifyContent: "center", gap: "8px", flexWrap: "wrap" }}>
            {["Recruit", "Onboard", "Manage", "Develop", "Engage", "Retain", "Offboard"].map((stage, i) => (
              <motion.div key={stage} initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <div style={{ padding: "12px 24px", background: "#fff", borderRadius: "12px", border: "1px solid #e2e8f0", fontSize: "14px", fontWeight: 800, color: "#0b152a" }}>{stage}</div>
                  {i < 6 && <span style={{ color: "#e0569060", fontSize: "18px" }}>→</span>}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section section-shell">
        <div><h2>Build a workplace people love.</h2><p>See how Tekkzy HR Suite transforms the employee experience from day one.</p></div>
        <div className="cta-actions">
          <Link className="button" href="/#contact" style={{ background: "#e05690", borderColor: "#e05690" }}>Start Free Trial <ArrowRight size={16} /></Link>
          <Link className="text-link" href="/product">View All Products <ArrowRight size={14} /></Link>
        </div>
      </section>
    </main>
  );
}
