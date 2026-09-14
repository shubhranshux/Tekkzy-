"use client";

import { motion } from "framer-motion";
import { Database, LineChart, Network, Lock, Braces, ArrowRight, TableProperties, Binary, CodeSquare, CheckCircle2, CloudFog } from "lucide-react";
import Link from "next/link";

export default function DataLayerPage() {
  return (
    <main>
      {/* ── SPLIT HERO ── */}
      <section className="split-hero">
        <div>
          <motion.span className="pill" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <Database size={14} /> THE DATA LAYER
          </motion.span>
          <motion.h1 initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
            Data is your<br/>Most Valuable<br/>Asset.
          </motion.h1>
          <motion.p initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.1 }} style={{ fontSize: "17px", color: "#4a5d7a", marginBottom: "32px", lineHeight: "1.7", maxWidth: "480px" }}>
            We architect robust data pipelines, data lakes, and warehouses that turn chaotic raw data into structured, actionable business intelligence. Stop guessing. Start knowing.
          </motion.p>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
            <Link href="/#contact" className="button" style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}>
              Request a Data Audit <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
        <div className="hero-visual">
          <div style={{ position: "relative", width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
            {/* Isometric abstract visual */}
            <svg width="240" height="240" viewBox="0 0 240 240" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M120 40L200 80V160L120 200L40 160V80L120 40Z" fill="url(#paint0_linear)" stroke="#1760ed" strokeWidth="2"/>
              <path d="M120 40L120 120M120 120L200 80M120 120L40 80" stroke="#1760ed" strokeWidth="2" strokeOpacity="0.5"/>
              <defs>
                <linearGradient id="paint0_linear" x1="120" y1="40" x2="120" y2="200" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#1760ed" stopOpacity="0.2"/>
                  <stop offset="1" stopColor="#1760ed" stopOpacity="0.05"/>
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
      </section>

      {/* ── METRICS STRIP ── */}
      <section className="metric-strip">
        <div className="metric-item"><strong>PBs</strong><span>Data Processed Daily</span></div>
        <div className="metric-item"><strong>&lt;50ms</strong><span>Query Latency</span></div>
        <div className="metric-item"><strong>100%</strong><span>HIPAA/SOC2 Compliant</span></div>
        <div className="metric-item"><strong>99.99%</strong><span>Data Availability</span></div>
      </section>

      {/* ── CORE FEATURES ── */}
      <section className="solution-features" style={{ background: "#f8fbff", padding: "100px 24px", maxWidth: "100%", borderTop: "1px solid #edf2f9" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "60px" }}>
            <span className="pill"><TableProperties size={14} /> ARCHITECTURE</span>
            <h2 style={{ fontSize: "36px", fontWeight: 800, marginTop: "16px", letterSpacing: "-1px", color: "#0b1630" }}>Modern Data Stack</h2>
            <p style={{ color: "#4a5d7a", maxWidth: "600px", margin: "16px auto 0", lineHeight: "1.6" }}>We design scalable ELT/ETL pipelines that centralize your data from dozens of disparate sources into a highly governed, single source of truth.</p>
          </div>
          
          <div className="solution-features-grid">
            <div className="feature-card">
              <div className="feature-icon" style={{ background: "#1760ed" }}><CloudFog size={22} /></div>
              <h3>Data Warehousing & Lakes</h3>
              <p>Expert implementation of Snowflake, Google BigQuery, and Amazon Redshift. We design star schemas and data vaults optimized for lightning-fast BI queries and machine learning workloads.</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon" style={{ background: "#1ba77e" }}><Network size={22} /></div>
              <h3>Data Engineering & ELT</h3>
              <p>Robust data pipelines using dbt, Airflow, and Fivetran. We extract data from CRMs, ERPs, ad platforms, and custom databases, transforming it into clean, reliable analytical models.</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon" style={{ background: "#e95812" }}><LineChart size={22} /></div>
              <h3>Business Intelligence</h3>
              <p>Visualizing your data using Tableau, Looker, and PowerBI. We build semantic layers and self-service dashboards so non-technical teams can slice and dice data securely.</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon" style={{ background: "#896dff" }}><CodeSquare size={22} /></div>
              <h3>Machine Learning Ops (MLOps)</h3>
              <p>Move your models out of Jupyter notebooks and into production. We build scalable infrastructure for model training, deployment, drift monitoring, and A/B testing inference endpoints.</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon" style={{ background: "#36b2ba" }}><Binary size={22} /></div>
              <h3>Master Data Management</h3>
              <p>Resolve duplicate records and establish canonical entities. We build identity resolution pipelines that combine disparate user records into a unified 360-degree customer view.</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon" style={{ background: "#d94242" }}><Lock size={22} /></div>
              <h3>Data Governance & Privacy</h3>
              <p>Implement column-level security, PII masking, and data cataloging (using tools like Alation or Monte Carlo). Ensure strict compliance with GDPR, CCPA, and HIPAA regulations.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── TABLE FEATURES ── */}
      <section style={{ padding: "100px 24px", maxWidth: "1000px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "60px" }}>
          <h2 style={{ fontSize: "36px", fontWeight: 800, color: "#0b1630" }}>The Data Journey</h2>
          <p style={{ color: "#4a5d7a", margin: "16px auto 0" }}>How we transform raw noise into strategic business value.</p>
        </div>
        
        <div className="table-features-grid">
          <div className="table-feature-row">
            <h3><Braces size={28} color="#1760ed" /> 1. Ingestion</h3>
            <p>We connect to all your disparate data sources — APIs, webhooks, flat files, legacy SQL databases — and stream them in real-time or batch into a secure data lake (S3/GCS).</p>
          </div>
          <div className="table-feature-row">
            <h3><TableProperties size={28} color="#1760ed" /> 2. Transformation</h3>
            <p>Using dbt (data build tool), we write version-controlled SQL to clean the data, enforce naming conventions, handle nulls, and join tables into denormalized analytics-ready models.</p>
          </div>
          <div className="table-feature-row">
            <h3><Network size={28} color="#1760ed" /> 3. Orchestration</h3>
            <p>We deploy Apache Airflow or Prefect to schedule dependencies. If the Salesforce extraction fails, the downstream transformation job waits and alerts the engineering team via Slack.</p>
          </div>
          <div className="table-feature-row">
            <h3><LineChart size={28} color="#1760ed" /> 4. Activation</h3>
            <p>Data shouldn't just sit in a dashboard. We use Reverse ETL (Census/Hightouch) to push calculated metrics (like "churn probability") back into your CRM so sales reps can act immediately.</p>
          </div>
        </div>
      </section>

      {/* ── BENEFITS ── */}
      <section className="solution-benefits">
        <div className="benefits-inner">
          <h2>Why Tekkzy for Data?</h2>
          <div className="benefits-grid">
            <div className="benefit-item">
              <CheckCircle2 size={24} />
              <div><h4>Engineering Rigor</h4><p>We apply software engineering best practices — CI/CD, version control, automated testing — to data pipelines. No more silently failing dashboards.</p></div>
            </div>
            <div className="benefit-item">
              <CheckCircle2 size={24} />
              <div><h4>Cost Optimization</h4><p>Cloud data warehouses charge by compute. We heavily optimize your SQL, partitioning, and clustering strategies to cut your Snowflake/BigQuery bills in half.</p></div>
            </div>
            <div className="benefit-item">
              <CheckCircle2 size={24} />
              <div><h4>Vendor Agnostic</h4><p>We aren't tied to a specific tool. We recommend the exact stack (AWS, GCP, Azure, Snowflake, Databricks) that fits your budget and technical maturity.</p></div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="solution-cta">
        <h2>Stop guessing. Start knowing.</h2>
        <p>Your competitors are already weaponizing their data. It's time to build your data layer.</p>
        <Link href="/#contact" className="button" style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}>
          Talk to a Data Engineer <ArrowRight size={16} />
        </Link>
      </section>
    </main>
  );
}
