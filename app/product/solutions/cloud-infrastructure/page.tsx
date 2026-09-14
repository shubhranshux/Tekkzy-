"use client";

import { motion } from "framer-motion";
import { Cloud, Server, Shield, Cpu, Activity, ArrowRight, Zap, Network, Container, Lock, GaugeCircle, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export default function CloudInfrastructurePage() {
  return (
    <main>
      {/* ── GRID HERO ── */}
      <section className="solution-hero" style={{ padding: "120px 24px 80px", backgroundImage: "radial-gradient(circle at center, #edf2f9 1px, transparent 1px)", backgroundSize: "30px 30px" }}>
        <motion.span className="pill" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <Cloud size={14} /> CLOUD INFRASTRUCTURE
        </motion.span>
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} style={{ fontSize: "clamp(48px, 6vw, 72px)", letterSpacing: "-1.5px", marginTop: "24px" }}>
          Infinitely Scalable.<br/>Secure by Design.
        </motion.h1>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.1 }} style={{ maxWidth: "680px", margin: "24px auto 40px", fontSize: "18px", lineHeight: "1.7", color: "#4a5d7a" }}>
          We architect, deploy, and manage enterprise-grade cloud infrastructure on AWS, Google Cloud, and Azure. Stop worrying about server maintenance and start focusing on your product.
        </motion.p>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} style={{ display: "flex", gap: "16px", justifyContent: "center" }}>
          <Link href="/#contact" className="button" style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}>
            Get a Free Architecture Audit <ArrowRight size={16} />
          </Link>
        </motion.div>
      </section>

      {/* ── METRICS STRIP ── */}
      <section className="metric-strip" style={{ borderTop: "1px solid #edf2f9", borderBottom: "1px solid #edf2f9" }}>
        <div className="metric-item"><strong>99.999%</strong><span>Uptime SLA</span></div>
        <div className="metric-item"><strong>40%</strong><span>Avg Cloud Cost Reduction</span></div>
        <div className="metric-item"><strong>15 mins</strong><span>Incident Response Time</span></div>
        <div className="metric-item"><strong>0</strong><span>Security Breaches</span></div>
      </section>

      {/* ── FEATURES GRID ── */}
      <section className="solution-features" style={{ padding: "100px 24px" }}>
        <div style={{ textAlign: "center", marginBottom: "60px" }}>
          <h2 style={{ fontSize: "36px", fontWeight: 800, color: "#0b1630", letterSpacing: "-1px" }}>Our DevOps & Cloud Capabilities</h2>
        </div>
        
        <div className="solution-features-grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))" }}>
          <div className="feature-card">
            <div className="feature-icon" style={{ background: "#1760ed" }}><Server size={22} /></div>
            <h3>Cloud Migrations</h3>
            <p>Seamlessly migrate from on-premise servers or legacy hosts to modern cloud providers (AWS, GCP, Azure). We use a lift-and-reshape approach to ensure zero downtime and immediate cost benefits.</p>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon" style={{ background: "#1ba77e" }}><Container size={22} /></div>
            <h3>Containerization & Kubernetes</h3>
            <p>We package your applications into Docker containers and orchestrate them with Kubernetes (EKS, GKE). This guarantees your application runs consistently across any environment and auto-scales on demand.</p>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon" style={{ background: "#896dff" }}><Cpu size={22} /></div>
            <h3>Serverless Architecture</h3>
            <p>Reduce operational overhead entirely. We architect event-driven applications using AWS Lambda or Google Cloud Functions, meaning you only pay for compute time exactly when your code is running.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon" style={{ background: "#e95812" }}><Zap size={22} /></div>
            <h3>CI/CD Pipelines</h3>
            <p>Automate your software delivery. We build robust CI/CD pipelines using GitHub Actions, GitLab CI, or Jenkins. Code is automatically tested, scanned for vulnerabilities, and deployed to production safely.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon" style={{ background: "#d94242" }}><Lock size={22} /></div>
            <h3>DevSecOps & Compliance</h3>
            <p>Security is embedded, not bolted on. We implement WAFs, DDoS protection, IAM least-privilege policies, and automated vulnerability scanning to ensure compliance with PCI-DSS, HIPAA, and SOC2.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon" style={{ background: "#36b2ba" }}><GaugeCircle size={22} /></div>
            <h3>Infrastructure as Code (IaC)</h3>
            <p>We codify your entire infrastructure using Terraform or AWS CDK. This makes your environments reproducible, auditable, and easily deployable to multiple regions for disaster recovery.</p>
          </div>
        </div>
      </section>

      {/* ── ZIG-ZAG ── */}
      <section className="zig-zag-section" style={{ background: "#f8fbff", padding: "100px 24px", maxWidth: "100%", borderTop: "1px solid #edf2f9" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gap: "100px" }}>
          
          <div className="zig-zag-row">
            <div className="zz-visual" style={{ background: "linear-gradient(135deg, #1a2840, #0b152a)", color: "#1760ed" }}>
              <Activity size={80} strokeWidth={1} />
            </div>
            <div className="zz-content">
              <h3>24/7 Managed Services</h3>
              <p>Your infrastructure needs monitoring around the clock. Our Site Reliability Engineers (SREs) provide 24/7/365 monitoring using Datadog and New Relic. We detect anomalies and fix them before your users ever notice an issue.</p>
              <p style={{ marginTop: "16px" }}>We handle OS patching, database backups, SSL certificate rotation, and incident response, acting as a seamless extension of your engineering team.</p>
            </div>
          </div>

          <div className="zig-zag-row">
            <div className="zz-visual" style={{ background: "linear-gradient(135deg, #e9faf1, #d2f7e9)", color: "#1ba77e" }}>
              <Network size={80} strokeWidth={1} />
            </div>
            <div className="zz-content">
              <h3>Cloud Cost Optimization (FinOps)</h3>
              <p>Don't let your cloud bill spiral out of control. We conduct deep architectural reviews to identify wasted resources, underutilized instances, and inefficient storage tiers.</p>
              <p style={{ marginTop: "16px" }}>By implementing auto-scaling policies, purchasing Reserved Instances/Savings Plans, and leveraging spot instances for stateless workloads, we typically reduce our clients' cloud spend by 30-40%.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="solution-cta">
        <h2>Future-proof your infrastructure.</h2>
        <p>Let's build a secure, scalable, and cost-effective foundation for your applications.</p>
        <Link href="/#contact" className="button" style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}>
          Schedule a Consultation <ArrowRight size={16} />
        </Link>
      </section>
    </main>
  );
}
