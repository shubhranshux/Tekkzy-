"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  Shield,
  ShieldCheck,
  Lock,
  KeyRound,
  UserCheck,
  Workflow,
  Server,
  Eye,
  CheckCircle2,
  FileText,
  ArrowRight,
  ChevronDown,
  Globe,
  Database,
  Cpu,
  Layers,
  AlertCircle,
  ExternalLink,
  Download,
  Terminal,
  Activity,
} from "lucide-react";

/* ── animation helpers ── */
const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.15 },
  transition: { duration: 0.6, delay, ease: EASE },
});

const fadeLeft = (delay = 0) => ({
  initial: { opacity: 0, x: -30 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true, amount: 0.15 },
  transition: { duration: 0.6, delay, ease: EASE },
});

const pillars = [
  {
    id: "access",
    icon: Lock,
    title: "Secure Access & IAM",
    badge: "Zero-Trust Identity",
    summary: "Comprehensive identity federation, mandatory MFA, and granular conditional access policies.",
    details: [
      "Enterprise SAML 2.0 and OIDC SSO integration (Okta, Microsoft Entra ID, Google Workspace)",
      "Hardware token & biometric authentication support via FIDO2 / WebAuthn passkeys",
      "Adaptive session management with automatic anomaly detection and immediate token revocation",
      "IP allowlisting and geographic perimeter fences for mission-critical operations",
    ],
    tag: "IAM / SSO",
  },
  {
    id: "data",
    icon: ShieldCheck,
    title: "Data Protection & Encryption",
    badge: "AES-256 & TLS 1.3",
    summary: "End-to-end cryptographic safeguards shielding data across all states and endpoints.",
    details: [
      "Data at rest encrypted via AES-256 GCM using automated envelope encryption",
      "All transit protected by modern TLS 1.3 with Perfect Forward Secrecy (PFS)",
      "FIPS 140-2 Level 3 Hardware Security Modules (HSM) for enterprise key management",
      "Field-level encryption for sensitive PII, credentials, and financial ledger data",
    ],
    tag: "Cryptography",
  },
  {
    id: "permissions",
    icon: UserCheck,
    title: "Controlled Permissions",
    badge: "Least-Privilege RBAC",
    summary: "Fine-grained role and attribute-based permissions ensuring strict operational isolation.",
    details: [
      "Hierarchical Role-Based (RBAC) and Attribute-Based (ABAC) authorization models",
      "Ephemeral just-in-time access grants with mandatory multi-party approval workflows",
      "Immutable, cryptographically hashed audit trails tracking every read, write, and export",
      "Separation of duties (SoD) enforcement across production databases and billing pipelines",
    ],
    tag: "Governance",
  },
  {
    id: "workflows",
    icon: Workflow,
    title: "Secure Workflows & SecOps",
    badge: "Automated Guardrails",
    summary: "Proactive defenses, signed events, and continuous pipeline scanning at scale.",
    details: [
      "HMAC-SHA256 cryptographically signed webhook payloads and API idempotency keys",
      "Isolated container sandboxes for automated scripting and data ingestion tasks",
      "Automated SAST, DAST, and software composition analysis (SCA) embedded into CI/CD",
      "Edge Web Application Firewall (WAF) with layer 3/4/7 DDoS mitigation and rate limiting",
    ],
    tag: "SecOps",
  },
  {
    id: "infrastructure",
    icon: Server,
    title: "Reliable Infrastructure",
    badge: "99.99% Uptime SLA",
    summary: "Resilient cloud architecture with sub-second failover and multi-region redundancy.",
    details: [
      "Tier-4 cloud data centers with automated multi-availability-zone data replication",
      "Sub-15 second automated recovery time objective (RTO) and sub-1 minute RPO",
      "Automated daily differential snapshots and 30-day continuous point-in-time recovery",
      "Isolated tenant databases and virtual private cloud (VPC) network segmentation",
    ],
    tag: "Resilience",
  },
  {
    id: "privacy",
    icon: Eye,
    title: "Privacy & Compliance",
    badge: "Data Sovereignty",
    summary: "Strict global regulatory adherence and complete transparency over your corporate assets.",
    details: [
      "Full compliance with GDPR (EU), Digital Personal Data Protection (DPDP) Act, and HIPAA guidelines",
      "Zero customer data used to train, fine-tune, or calibrate public AI or LLM models",
      "Regional data residency guarantees (choose local data centers in India, US, or EU)",
      "One-click complete data export and cryptographically verified data erasure upon contract termination",
    ],
    tag: "Privacy",
  },
];

const complianceStandards = [
  {
    title: "SOC 2 Type II",
    status: "Certified",
    desc: "Rigorous independent third-party audit verifying Security, Availability, and Confidentiality trust principles.",
    icon: ShieldCheck,
  },
  {
    title: "ISO/IEC 27001:2022",
    status: "Certified",
    desc: "International gold standard for Information Security Management Systems (ISMS) implementation.",
    icon: Shield,
  },
  {
    title: "GDPR & DPDP Compliant",
    status: "Verified",
    desc: "Adherence to European Union and Indian data protection regulations, guaranteeing individual data rights.",
    icon: Globe,
  },
  {
    title: "HIPAA Ready",
    status: "Attested",
    desc: "Administrative, physical, and technical safeguards configured to support protected health information (PHI).",
    icon: Activity,
  },
  {
    title: "PCI-DSS Level 1",
    status: "Compliant",
    desc: "Certified payment processing handling sensitive cardholder information through tokenized isolation.",
    icon: Lock,
  },
  {
    title: "Zero AI Model Training",
    status: "Guaranteed",
    desc: "Explicit contractual clause guaranteeing customer business data is never ingested for foundation AI training.",
    icon: Cpu,
  },
];

const faqs = [
  {
    q: "Where is my business data hosted, and can we choose our data region?",
    a: "Yes. Tekkzy operates tier-4 cloud regions across India, North America, and Europe. Enterprise customers can explicitly designate their preferred geographic region to ensure strict data residency and sovereign regulatory compliance.",
  },
  {
    q: "Does Tekkzy train AI models on my company's proprietary data?",
    a: "Never. We enforce a zero data retention policy for generative AI. Your customer interactions, ERP entries, telemetry, and documents are solely processed to serve your immediate workflows and are never fed into foundational or shared AI model training sets.",
  },
  {
    q: "How frequently are security audits and penetration tests performed?",
    a: "We conduct annual CREST-accredited external penetration tests, continuous automated vulnerability scanning across our entire infrastructure, and weekly dependency vulnerability triage. Audit executive summaries are available under NDA.",
  },
  {
    q: "How does Tekkzy handle employee access to customer production data?",
    a: "Tekkzy employees have zero persistent access to production customer datastores. Any administrative intervention requires multi-party approval, a time-restricted ephemeral token, and a customer-visible audit log record.",
  },
  {
    q: "What is your disaster recovery and data backup schedule?",
    a: "All customer data is continuously replicated across multiple availability zones. We execute automated encrypted snapshots every 6 hours and maintain 30-day point-in-time recovery (PITR) with an RPO of under 1 minute and an RTO under 15 seconds.",
  },
  {
    q: "How can our enterprise procurement team request your SOC 2 report?",
    a: "You can request our SOC 2 Type II audit report, ISO 27001 certificate, and vendor security questionnaire package by contacting our compliance office directly through this page.",
  },
];

export default function SecurityPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [activeLayer, setActiveLayer] = useState<number>(0);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  const layers = [
    {
      title: "Edge & Perimeter",
      badge: "L3/L4/L7 Defense",
      desc: "Traffic reaches global edge locations shielded by Cloudflare Magic Transit, modern TLS 1.3, intelligent DDoS scrubbing, and an automated Web Application Firewall (WAF).",
      metrics: ["< 15ms Edge Latency", "100+ Tbps DDoS Capacity", "TLS 1.3 Mandatory"],
    },
    {
      title: "Application & Microservices",
      badge: "Zero-Trust Architecture",
      desc: "Microservices communicate via mutual TLS (mTLS) with cryptographically signed tokens. Strict Content Security Policies (CSP) and automated static/dynamic code analysis block injection vulnerabilities.",
      metrics: ["mTLS Service Mesh", "Automated DAST in CI", "Signed Payloads"],
    },
    {
      title: "Data & Encryption Engine",
      badge: "Envelope Encryption",
      desc: "Databases utilize per-tenant encryption keys managed in certified HSMs. Field-level masking shields sensitive identifiers before they touch application memory.",
      metrics: ["AES-256 GCM", "Automated Key Rotation", "Tenant DB Isolation"],
    },
    {
      title: "Audit & Observability",
      badge: "Continuous SIEM",
      desc: "Every system event, administrative change, and authentication attempt is streamed to write-once, tamper-evident log stores with 24/7 AI-driven behavioral threat detection.",
      metrics: ["Immutable WORM Storage", "< 5 Min Detection SLA", "Real-time SIEM Alerting"],
    },
  ];

  return (
    <div className="security-page">
      {/* ═══════════════ HERO ═══════════════ */}
      <section className="security-hero">
        <div className="security-hero-glow" />
        <div className="security-hero-inner section-shell">
          <motion.div className="security-hero-content" {...fade(0)}>
            <div className="security-pill">
              <ShieldCheck size={14} className="security-pill-icon" />
              <span>ENTERPRISE SECURITY & TRUST</span>
            </div>

            <h1 className="security-hero-title">
              Bank-Grade Protection for Your <span>Mission-Critical Data</span>
            </h1>

            <p className="security-hero-desc">
              Security isn&apos;t an afterthought at Tekkzy — it is our core engineering foundation.
              We provide enterprise-scale protection, continuous encryption, zero-trust access controls,
              and verified compliance standards.
            </p>

            <div className="security-hero-actions">
              <Link href="/contact" className="button">
                Request Security Package <ArrowRight size={15} />
              </Link>
              <a href="#pillars" className="button button-outline security-whitepaper-btn">
                <FileText size={15} /> Explore Core Pillars
              </a>
            </div>

            {/* Live Security Telemetry Bar */}
            <div className="security-telemetry-bar">
              <div className="telemetry-item">
                <div className="telemetry-icon-wrap">
                  <Shield size={18} />
                </div>
                <div className="telemetry-text">
                  <strong>AES-256 GCM</strong>
                  <span>Always-on encryption</span>
                </div>
              </div>

              <div className="telemetry-sep" />

              <div className="telemetry-item">
                <div className="telemetry-icon-wrap green">
                  <CheckCircle2 size={18} />
                </div>
                <div className="telemetry-text">
                  <strong>Zero Breaches</strong>
                  <span>Clean security record</span>
                </div>
              </div>

              <div className="telemetry-sep" />

              <div className="telemetry-item">
                <div className="telemetry-icon-wrap blue">
                  <Activity size={18} />
                </div>
                <div className="telemetry-text">
                  <strong>99.99% SLA</strong>
                  <span>High availability uptime</span>
                </div>
              </div>

              <div className="telemetry-sep" />

              <div className="telemetry-item">
                <div className="telemetry-icon-wrap purple">
                  <Lock size={18} />
                </div>
                <div className="telemetry-text">
                  <strong>SOC 2 & ISO 27001</strong>
                  <span>Audited compliance</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════ COMPLIANCE STANDARDS ═══════════════ */}
      <section className="security-standards-section">
        <div className="security-standards-inner section-shell">
          <motion.div className="security-section-header" {...fade(0)}>
            <span className="eyebrow">VERIFIED ASSURANCE</span>
            <h2>Certified Compliance & Governance</h2>
            <p>
              We adhere to the highest global standards to give your IT, security, and legal
              teams complete confidence in our platform.
            </p>
          </motion.div>

          <div className="security-standards-grid">
            {complianceStandards.map((std, i) => (
              <motion.div key={std.title} className="security-standard-card" {...fade(i * 0.08)}>
                <div className="standard-card-top">
                  <div className="standard-icon-box">
                    <std.icon size={22} />
                  </div>
                  <span className="standard-status-badge">{std.status}</span>
                </div>
                <h3>{std.title}</h3>
                <p>{std.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ 6 PILLARS EXPANDED ═══════════════ */}
      <section className="security-pillars-section" id="pillars">
        <div className="security-pillars-inner section-shell">
          <motion.div className="security-section-header" {...fade(0)}>
            <span className="eyebrow">PROTECTION BLUEPRINT</span>
            <h2>The Six Pillars of Tekkzy Security</h2>
            <p>
              Deep, multi-layered defenses engineered into every component of our cloud
              architecture to safeguard your critical business operations.
            </p>
          </motion.div>

          <div className="security-pillars-grid">
            {pillars.map((pillar, i) => (
              <motion.div key={pillar.id} className="security-pillar-card" {...fade(i * 0.08)}>
                <div className="pillar-card-header">
                  <div className="pillar-icon-box">
                    <pillar.icon size={22} />
                  </div>
                  <div className="pillar-header-text">
                    <div className="pillar-badge-row">
                      <span className="pillar-tag">{pillar.tag}</span>
                      <span className="pillar-badge">{pillar.badge}</span>
                    </div>
                    <h3>{pillar.title}</h3>
                  </div>
                </div>

                <p className="pillar-summary">{pillar.summary}</p>

                <div className="pillar-details-list">
                  {pillar.details.map((detail, idx) => (
                    <div key={idx} className="pillar-detail-item">
                      <CheckCircle2 size={15} className="pillar-check-icon" />
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ ARCHITECTURE MATRIX ═══════════════ */}
      <section className="security-arch-section">
        <div className="security-arch-inner section-shell">
          <motion.div className="security-section-header" {...fade(0)}>
            <span className="eyebrow" style={{ color: "#79a5ff" }}>DEFENSE IN DEPTH</span>
            <h2 style={{ color: "#ffffff" }}>Multi-Tier Security Architecture</h2>
            <p style={{ color: "#a6b9d6" }}>
              Explore how each layer of the Tekkzy stack isolates and guards your corporate workload.
            </p>
          </motion.div>

          <div className="security-arch-container">
            <div className="security-arch-tabs">
              {layers.map((layer, idx) => (
                <button
                  key={layer.title}
                  type="button"
                  className={`security-arch-tab ${activeLayer === idx ? "active" : ""}`}
                  onClick={() => setActiveLayer(idx)}
                >
                  <span className="arch-tab-num">0{idx + 1}</span>
                  <div className="arch-tab-info">
                    <strong>{layer.title}</strong>
                    <small>{layer.badge}</small>
                  </div>
                </button>
              ))}
            </div>

            <div className="security-arch-display">
              <div className="arch-display-card">
                <div className="arch-display-top">
                  <span className="arch-display-badge">{layers[activeLayer].badge}</span>
                  <h3>{layers[activeLayer].title}</h3>
                </div>
                <p className="arch-display-desc">{layers[activeLayer].desc}</p>
                <div className="arch-display-metrics">
                  {layers[activeLayer].metrics.map((metric, i) => (
                    <span key={i} className="arch-metric-pill">
                      <CheckCircle2 size={13} /> {metric}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ VULNERABILITY DISCLOSURE ═══════════════ */}
      <section className="security-disclosure-section">
        <div className="security-disclosure-inner section-shell">
          <div className="security-disclosure-box">
            <div className="disclosure-content">
              <div className="disclosure-badge">
                <Terminal size={14} /> RESPONSIBLE DISCLOSURE
              </div>
              <h3>Security Researcher & Bug Bounty Program</h3>
              <p>
                We believe in collaborating with the global security community to maintain our defense perimeter.
                If you discover a potential vulnerability in our services, please submit a report following our
                responsible disclosure policy.
              </p>
              <div className="disclosure-contact">
                <span>Security Inbox: <strong>security@tekkzy.com</strong></span>
                <span className="disclosure-sla">Initial response within 24 hours</span>
              </div>
            </div>
            <div className="disclosure-actions">
              <Link href="/contact" className="button">
                Submit Report <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ FAQS ═══════════════ */}
      <section className="security-faq-section">
        <div className="security-faq-inner section-shell">
          <motion.div className="security-section-header" {...fade(0)}>
            <span className="eyebrow">COMMON INQUIRIES</span>
            <h2>Frequently Asked Security Questions</h2>
            <p>
              Straightforward answers to the most common questions raised by enterprise procurement and risk teams.
            </p>
          </motion.div>

          <div className="security-faq-list">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div key={idx} className={`security-faq-item ${isOpen ? "open" : ""}`}>
                  <button
                    type="button"
                    className="security-faq-trigger"
                    onClick={() => toggleFaq(idx)}
                    aria-expanded={isOpen}
                  >
                    <span>{faq.q}</span>
                    <ChevronDown size={18} className="faq-chevron" />
                  </button>
                  {isOpen && (
                    <div className="security-faq-answer">
                      <p>{faq.a}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════ CTA BANNER ═══════════════ */}
      <section className="security-cta-section">
        <div className="security-cta-glow" />
        <motion.div className="security-cta-inner section-shell" {...fade(0)}>
          <span className="eyebrow" style={{ color: "#9abaff" }}>PARTNER WITH CONFIDENCE</span>
          <h2>
            Ready to Review Our <span>Security Architecture?</span>
          </h2>
          <p>
            Request our complete security questionnaire responses, SOC 2 Type II audit packages,
            and discuss compliance requirements directly with our security engineering leaders.
          </p>
          <div className="security-cta-buttons">
            <Link href="/contact" className="button">
              Schedule Security Briefing <ArrowRight size={15} />
            </Link>
            <Link href="/about" className="button button-outline" style={{ background: "rgba(255,255,255,0.08)", color: "#fff", borderColor: "rgba(255,255,255,0.2)" }}>
              Back to About Us
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
