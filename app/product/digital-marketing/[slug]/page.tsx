import React from "react";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  CheckCircle2,
  Layers,
  Wrench,
  ShieldCheck,
  FileCheck2,
  HelpCircle,
  Sparkles,
} from "lucide-react";
import { SERVICES_MAP } from "../services-data";
import "./service-detail.css";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return Object.keys(SERVICES_MAP).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const service = SERVICES_MAP[slug];

  if (!service) {
    return {
      title: "Service Not Found — Tekkzy",
    };
  }

  return {
    title: `${service.title} — Digital Marketing Services | Tekkzy`,
    description: service.overview,
  };
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const service = SERVICES_MAP[slug];

  if (!service) {
    notFound();
  }

  // All other services for bottom cross-navigation
  const otherServices = Object.values(SERVICES_MAP).filter((s) => s.slug !== slug);

  return (
    <div className="service-detail-page">
      {/* ── 1. Hero Section (Balanced Split Layout) ── */}
      <section className="sd-hero-section">
        <div className="sd-container">
          <div className="sd-top-nav">
            <Link href="/product/digital-marketing" className="sd-back-link">
              <ArrowLeft size={15} /> All Digital Marketing Services
            </Link>
          </div>

          <div className="sd-hero-grid">
            <div className="sd-hero-content">
              <h1 className="sd-hero-title">{service.title}</h1>
              <p className="sd-hero-subtitle" style={{ color: service.color }}>
                {service.subtitle}
              </p>
              <p className="sd-hero-overview">{service.overview}</p>

              {/* Service Attribute Badges Row */}
              <div className="sd-hero-specs-row">
                <span className="sd-hero-spec-pill">
                  <strong>Domain:</strong> Digital Marketing
                </span>
                <span className="sd-hero-spec-pill">
                  <strong>Pacing:</strong> Sprint-Based Execution
                </span>
                <span className="sd-hero-spec-pill">
                  <strong>Reporting:</strong> Weekly Live Dashboards
                </span>
                <span className="sd-hero-spec-pill">
                  <strong>Attribution:</strong> Server-Side & First-Party
                </span>
              </div>
            </div>

            <div className="sd-hero-image-wrap">
              <Image
                src={service.image}
                alt={service.title}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 550px"
                style={{ objectFit: "cover" }}
              />
              <div className="sd-hero-image-overlay" />
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. Full-Width Metrics Band ── */}
      <section className="sd-metrics-section">
        <div className="sd-container">
          <div className="sd-metrics-grid">
            {service.metrics.map((m) => (
              <div key={m.label} className="sd-metric-card">
                <div className="sd-metric-value" style={{ color: service.color }}>
                  {m.value}
                </div>
                <div className="sd-metric-label">{m.label}</div>
                <div className="sd-metric-desc">{m.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. Core Strategic Pillars (Full-Width 2x2 Grid) ── */}
      <section className="sd-pillars-section">
        <div className="sd-container">
          <div className="sd-section-header">
            <span className="eyebrow">STRATEGIC ARCHITECTURE</span>
            <h2>Core Pillars of Excellence</h2>
            <p>Every operational pillar engineered for sustainable performance and compounding organic advantage.</p>
          </div>

          <div className="sd-pillars-grid">
            {service.pillars.map((pillar) => (
              <div key={pillar.title} className="sd-pillar-card">
                <h3 className="sd-pillar-title">{pillar.title}</h3>
                <p className="sd-pillar-desc">{pillar.desc}</p>
                <ul className="sd-pillar-list">
                  {pillar.highlights.map((item) => (
                    <li key={item} className="sd-pillar-item">
                      <CheckCircle2 size={16} style={{ color: service.color }} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. 5-Phase Systematic Execution Framework ── */}
      <section className="sd-process-section">
        <div className="sd-container">
          <div className="sd-section-header">
            <span className="eyebrow">METHODOLOGY & EXECUTION</span>
            <h2>Our 5-Phase Systematic Framework</h2>
            <p>A rigorous, battle-tested methodology taking campaigns from diagnostic audit to sustained market dominance.</p>
          </div>

          <div className="sd-process-list">
            {service.process.map((step) => (
              <div key={step.step} className="sd-process-card">
                <div className="sd-process-badge">
                  <span className="sd-process-num" style={{ color: service.color }}>
                    {step.step}
                  </span>
                  <span className="sd-process-phase">{step.phase}</span>
                </div>
                <div className="sd-process-info">
                  <h4>{step.title}</h4>
                  <p>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. Concrete Deliverables & Specialized Technology (Balanced 2-Column Split) ── */}
      <section className="sd-deliverables-section">
        <div className="sd-container">
          <div className="sd-section-header">
            <span className="eyebrow">OUTPUTS & TOOLING</span>
            <h2>Concrete Deliverables & Specialized Technology</h2>
            <p>Full transparency on artifacts received and the enterprise tool ecosystem powering your results.</p>
          </div>

          <div className="sd-deliverables-split-grid">
            {/* Left Box: Included Deliverables */}
            <div className="sd-deliverables-card">
              <h3>
                <FileCheck2 size={20} style={{ color: "#10b981" }} /> Included Deliverables & Artifacts
              </h3>
              <div className="sd-deliverables-items-grid">
                {service.deliverables.map((item) => (
                  <div key={item} className="sd-deliverable-item">
                    <CheckCircle2 size={16} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Box: Specialized Tech Stack & Trust Commitments */}
            <div className="sd-deliverables-card">
              <h3>
                <Wrench size={20} style={{ color: service.color }} /> Specialized Tech Stack
              </h3>
              <div className="sd-tool-badges-wrap">
                {service.tools.map((t) => (
                  <span key={t} className="sd-tool-badge">
                    {t}
                  </span>
                ))}
              </div>

              <h3 style={{ marginTop: "32px" }}>
                <ShieldCheck size={20} style={{ color: "#10b981" }} /> Core Commitments
              </h3>
              <ul className="sd-commitments-list">
                <li className="sd-commitment-item">
                  <CheckCircle2 size={16} color="#10b981" />
                  <span>100% white-hat algorithmic compliance and brand safety</span>
                </li>
                <li className="sd-commitment-item">
                  <CheckCircle2 size={16} color="#10b981" />
                  <span>Direct strategic access with dedicated domain specialists</span>
                </li>
                <li className="sd-commitment-item">
                  <CheckCircle2 size={16} color="#10b981" />
                  <span>Full client ownership of all data, ad accounts, and creative assets</span>
                </li>
                <li className="sd-commitment-item">
                  <CheckCircle2 size={16} color="#10b981" />
                  <span>Transparent weekly and monthly live ROI attribution reporting</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. Full-Width Balanced Knowledge Base FAQs ── */}
      <section className="sd-faq-section">
        <div className="sd-container">
          <div className="sd-section-header">
            <span className="eyebrow">KNOWLEDGE BASE</span>
            <h2>Frequently Asked Questions</h2>
            <p>Clear, straightforward answers about how we manage and scale {service.title}.</p>
          </div>

          <div className="sd-faq-grid">
            {service.faqs.map((faq) => (
              <div key={faq.question} className="sd-faq-card">
                <h4 className="sd-faq-question">{faq.question}</h4>
                <p className="sd-faq-answer">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. Cross-Navigation Grid to Other Services ── */}
      <section className="sd-other-section">
        <div className="sd-container">
          <div className="sd-section-header" style={{ marginBottom: "36px" }}>
            <span className="eyebrow">EXPLORE ALL CHANNELS</span>
            <h2>Other Digital Marketing Services</h2>
            <p>Every channel, every touchpoint, interconnected for maximum compounding velocity.</p>
          </div>

          <div className="sd-other-grid">
            {otherServices.map((other) => (
              <Link
                key={other.slug}
                href={`/product/digital-marketing/${other.slug}`}
                className="sd-other-card"
              >
                <span
                  className="sd-other-dot"
                  style={{ backgroundColor: other.color }}
                />
                <span>{other.title}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
