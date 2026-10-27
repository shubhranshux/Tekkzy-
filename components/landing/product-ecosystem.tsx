"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Workflow, GitBranch, Sparkles, Package, Megaphone, Search } from "lucide-react";
import "./product-ecosystem.css";

interface ProductBox {
  id: string;
  tag: string;
  title: string;
  desc: string;
  href: string;
  type: "featured" | "standard" | "technical" | "photo";
  icon?: React.ElementType;
  ctaText: string;
}

const PRODUCTS: ProductBox[] = [
  // ── ROW 1 ──
  {
    id: "digital-marketing",
    tag: "TEKKZY // 01",
    title: "Digital Marketing",
    desc: "Multi-channel campaign orchestration, audience analytics, and conversion ROI acceleration across all digital channels.",
    href: "/product/digital-marketing",
    type: "featured",
    ctaText: "Explore Marketing",
  },
  {
    id: "erp",
    tag: "TEKKZY // 02",
    title: "Enterprise ERP",
    desc: "We design and deploy safe, scalable enterprise resource operations tailored to each organization's operating conditions.",
    href: "/product/erp",
    type: "standard",
    ctaText: "Explore ERP",
  },
  {
    id: "crm",
    tag: "TEKKZY // 03",
    title: "Intelligent CRM",
    desc: "Deals, contact intelligence, and multi-channel revenue workflows in real-time.",
    href: "/product/crm",
    type: "standard",
    ctaText: "Explore CRM",
  },

  // ── ROW 2 ──
  {
    id: "ai-assistant",
    tag: "TEKKZY // 04",
    title: "Autonomous AI",
    desc: "Enterprise generative copilots automating daily team execution, smart synthesis, and proactive workflows.",
    href: "/product/ai-assistant",
    type: "technical",
    icon: Sparkles,
    ctaText: "Explore AI",
  },
  {
    id: "automation",
    tag: "TEKKZY // 05",
    title: "Workflow Engine",
    desc: "Zero-code trigger-and-action pipelines orchestrating data across your entire modern application stack.",
    href: "/product/automation",
    type: "technical",
    icon: Workflow,
    ctaText: "Explore Automation",
  },
  {
    id: "analytics",
    tag: "TEKKZY // 06",
    title: "Executive Analytics",
    desc: "Real-time decision intelligence, predictive financial forecasting, and automated executive reporting.",
    href: "/product/analytics",
    type: "technical",
    icon: GitBranch,
    ctaText: "Explore Analytics",
  },

  // ── ROW 3 ──
  {
    id: "hr-suite",
    tag: "TEKKZY // 07",
    title: "HR Suite & People",
    desc: "Empower your modern workforce with automated payroll, talent intelligence, and human-first culture tools.",
    href: "/product/hr-suite",
    type: "photo",
    ctaText: "Explore HR Suite",
  },
  {
    id: "inventory",
    tag: "TEKKZY // 08",
    title: "Smart Inventory",
    desc: "Multi-bay warehouse tracking, predictive stock replenishment, and automated fulfillment routing across hubs.",
    href: "/product/inventory",
    type: "technical",
    icon: Package,
    ctaText: "Explore Inventory",
  },
  {
    id: "seo",
    tag: "TEKKZY // 09",
    title: "SEO & Visibility",
    desc: "Search dominance intelligence, automated technical audits, and organic authority growth for market leaders.",
    href: "/product/seo",
    type: "standard",
    icon: Search,
    ctaText: "Explore SEO",
  },
];

export default function ProductEcosystem() {
  return (
    <section className="product-grid-section" id="product-ecosystem" aria-labelledby="product-grid-heading">
      <div className="product-grid-container">
        {/* Section Header */}
        <div className="product-grid-header">
          <div className="product-grid-eyebrow">
            <span className="product-grid-eyebrow-dot" />
            Product Ecosystem
          </div>
          <h2 id="product-grid-heading">
            Everything You Need to <span>Run and Grow</span> Your Business
          </h2>
          <p>
            A complete suite of intelligent business tools, designed to work better together.
          </p>
        </div>

        {/* 3x3 Grid Box Layout (Cominvi-style with 3 full rows) */}
        <div className="cominvi-grid" role="region" aria-label="Tekkzy Core Products">
          {PRODUCTS.map((product) => {
            const Icon = product.icon;

            if (product.type === "photo") {
              return (
                <Link
                  key={product.id}
                  href={product.href}
                  className="cominvi-card cominvi-card-photo"
                  aria-label={`${product.title} - ${product.ctaText}`}
                >
                  <div className="cominvi-photo-bg">
                    <Image
                      src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=900&q=80"
                      alt="Tekkzy Team collaborating"
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="cominvi-photo-image"
                    />
                    <div className="cominvi-photo-overlay" />
                  </div>

                  <div className="cominvi-card-top">
                    <span className="cominvi-card-tag">{product.tag}</span>
                  </div>

                  <div className="cominvi-card-content">
                    <h3 className="cominvi-card-title">{product.title}</h3>
                    <p className="cominvi-card-desc">{product.desc}</p>
                  </div>

                  <div className="cominvi-card-bottom">
                    <span className="cominvi-card-cta">
                      {product.ctaText}
                      <ArrowUpRight size={16} className="cominvi-card-arrow" />
                    </span>
                  </div>
                </Link>
              );
            }

            if (product.type === "technical") {
              return (
                <Link
                  key={product.id}
                  href={product.href}
                  className="cominvi-card cominvi-card-technical"
                  aria-label={`${product.title} - ${product.ctaText}`}
                >
                  <div className="cominvi-card-top">
                    <span className="cominvi-card-tag">{product.tag}</span>
                    {Icon && (
                      <div className="cominvi-card-icon-wrap" aria-hidden="true">
                        <Icon size={28} strokeWidth={1.5} />
                      </div>
                    )}
                  </div>

                  <div className="cominvi-card-content">
                    <h3 className="cominvi-card-title">{product.title}</h3>
                    <p className="cominvi-card-desc">{product.desc}</p>
                  </div>

                  <div className="cominvi-card-bottom">
                    <span className="cominvi-card-cta">
                      {product.ctaText}
                      <ArrowUpRight size={16} className="cominvi-card-arrow" />
                    </span>
                  </div>
                </Link>
              );
            }

            if (product.type === "featured") {
              return (
                <Link
                  key={product.id}
                  href={product.href}
                  className="cominvi-card cominvi-card-featured"
                  aria-label={`${product.title} - ${product.ctaText}`}
                >
                  <div className="cominvi-card-top">
                    <span className="cominvi-card-tag">{product.tag}</span>
                    <Sparkles size={18} opacity={0.8} />
                  </div>

                  <div className="cominvi-card-content">
                    <h3 className="cominvi-card-title">{product.title}</h3>
                    <p className="cominvi-card-desc">{product.desc}</p>
                  </div>

                  <div className="cominvi-card-bottom">
                    <span className="cominvi-card-cta">
                      {product.ctaText}
                      <ArrowUpRight size={16} className="cominvi-card-arrow" />
                    </span>
                  </div>
                </Link>
              );
            }

            // Standard Editorial Card
            return (
              <Link
                key={product.id}
                href={product.href}
                className="cominvi-card cominvi-card-standard"
                aria-label={`${product.title} - ${product.ctaText}`}
              >
                <div className="cominvi-card-top">
                  <span className="cominvi-card-tag">{product.tag}</span>
                  {Icon && (
                    <div className="cominvi-card-icon-wrap" aria-hidden="true">
                      <Icon size={26} strokeWidth={1.5} />
                    </div>
                  )}
                </div>

                <div className="cominvi-card-content">
                  <h3 className="cominvi-card-title">{product.title}</h3>
                  <p className="cominvi-card-desc">{product.desc}</p>
                </div>

                <div className="cominvi-card-bottom">
                  <span className="cominvi-card-cta">
                    {product.ctaText}
                    <ArrowUpRight size={16} className="cominvi-card-arrow" />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
