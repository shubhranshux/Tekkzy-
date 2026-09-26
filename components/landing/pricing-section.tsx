"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Check,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Zap,
  Layers,
  Headphones,
  Building2,
  HelpCircle,
} from "lucide-react";

interface PlanFeature {
  text: string;
  included: boolean;
  highlight?: boolean;
}

interface PlanTier {
  id: string;
  name: string;
  badge?: string;
  tagline: string;
  monthlyPrice: number;
  annualPrice: number;
  isPopular?: boolean;
  icon: typeof Layers;
  features: PlanFeature[];
  ctaText: string;
  ctaHref: string;
  tone: "basic" | "popular" | "enterprise";
}

const pricingPlans: PlanTier[] = [
  {
    id: "starter",
    name: "Starter",
    tagline: "Essential digital systems for single outlets, clinics, and emerging businesses.",
    monthlyPrice: 1499,
    annualPrice: 1199,
    icon: Zap,
    tone: "basic",
    ctaText: "Get Started Free",
    ctaHref: "/contact?plan=starter",
    features: [
      { text: "Core ERP & billing point-of-sale", included: true },
      { text: "Real-time stock & inventory alerts", included: true },
      { text: "Up to 5 team operator accounts", included: true },
      { text: "Daily cloud backups & security", included: true },
      { text: "WhatsApp & SMS invoice delivery", included: true },
      { text: "Standard email & chat support", included: true },
      { text: "AI Assistant & custom workflows", included: false },
      { text: "Multi-branch sync & enterprise SLA", included: false },
    ],
  },
  {
    id: "growth",
    name: "Professional",
    badge: "Most Popular",
    tagline: "High-performance platform for growing businesses, multi-counter brands, and gyms.",
    monthlyPrice: 3499,
    annualPrice: 2799,
    isPopular: true,
    icon: Sparkles,
    tone: "popular",
    ctaText: "Start 14-Day Free Trial",
    ctaHref: "/contact?plan=professional",
    features: [
      { text: "Everything in Starter, plus:", included: true, highlight: true },
      { text: "Multi-location & branch synchronization", included: true },
      { text: "AI automation & intelligent order routing", included: true },
      { text: "Executive analytics & real-time revenue BI", included: true },
      { text: "Customer loyalty, CRM & member portal", included: true },
      { text: "Unlimited staff & manager logins", included: true },
      { text: "Priority 24/7 support with account lead", included: true },
      { text: "Custom API & payment gateway webhooks", included: true },
    ],
  },
  {
    id: "enterprise",
    name: "Enterprise",
    badge: "Industrial & Multi-Branch",
    tagline: "Bespoke digital architecture, dedicated cloud infrastructure, and custom workflows.",
    monthlyPrice: 7999,
    annualPrice: 6399,
    icon: Building2,
    tone: "enterprise",
    ctaText: "Contact Architecture Team",
    ctaHref: "/contact?plan=enterprise",
    features: [
      { text: "Everything in Professional, plus:", included: true, highlight: true },
      { text: "Custom ERP module development", included: true },
      { text: "Dedicated isolated cloud infrastructure", included: true },
      { text: "Legacy software & hardware integration", included: true },
      { text: "99.99% uptime guarantee with strict SLA", included: true },
      { text: "Role-based granular security & audit logs", included: true },
      { text: "On-site onboarding & staff training", included: true },
      { text: "Dedicated solutions architect & CTO line", included: true },
    ],
  },
];

export default function PricingSection() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "annual">("annual");

  return (
    <section className="pricing-section landing-section" id="pricing">
      <div className="pricing-heading">
        <div className="landing-label">
          <span />
          Transparent & Scalable
        </div>
        <h2>
          Flexible Plans for <span>Every Business</span>
        </h2>
        <p>
          Invest in technology that pays for itself. Upgrade, downgrade, or switch plans anytime with zero hidden fees.
        </p>

        {/* Billing Switcher Toggle */}
        <div className="pricing-toggle-wrap">
          <div className="pricing-toggle-container" role="radiogroup" aria-label="Billing cycle">
            <button
              type="button"
              className={`pricing-toggle-tab ${billingCycle === "monthly" ? "active" : ""}`}
              onClick={() => setBillingCycle("monthly")}
              aria-checked={billingCycle === "monthly"}
              role="radio"
            >
              Monthly Billing
            </button>
            <button
              type="button"
              className={`pricing-toggle-tab ${billingCycle === "annual" ? "active" : ""}`}
              onClick={() => setBillingCycle("annual")}
              aria-checked={billingCycle === "annual"}
              role="radio"
            >
              Annual Billing
              <span className="pricing-discount-pill">Save 20%</span>
            </button>
          </div>
        </div>
      </div>

      {/* Pricing Cards Grid */}
      <div className="pricing-grid-enhanced">
        {pricingPlans.map((plan) => {
          const currentPrice = billingCycle === "annual" ? plan.annualPrice : plan.monthlyPrice;
          const Icon = plan.icon;

          return (
            <article
              key={plan.id}
              className={`pricing-card-enhanced ${plan.isPopular ? "is-featured" : ""} plan-tone-${plan.tone}`}
            >
              {plan.badge && (
                <div className="pricing-popular-flag">
                  {plan.isPopular && <Sparkles size={12} aria-hidden="true" />}
                  <span>{plan.badge}</span>
                </div>
              )}

              <div className="pricing-card-header">
                <div className="pricing-card-icon-wrap">
                  <Icon size={22} />
                </div>
                <div>
                  <h3 className="pricing-card-title">{plan.name}</h3>
                  <p className="pricing-card-desc">{plan.tagline}</p>
                </div>
              </div>

              <div className="pricing-price-box">
                <div className="pricing-price-row">
                  <span className="pricing-currency">₹</span>
                  <span className="pricing-amount">
                    {currentPrice.toLocaleString("en-IN")}
                  </span>
                  <span className="pricing-duration">/month</span>
                </div>
                <div className="pricing-billing-hint">
                  {billingCycle === "annual" ? (
                    <span className="text-emerald-600">Billed annually (₹{(currentPrice * 12).toLocaleString("en-IN")}/yr)</span>
                  ) : (
                    <span>Billed monthly, cancel anytime</span>
                  )}
                </div>
              </div>

              <div className="pricing-cta-wrap">
                <Link
                  href={plan.ctaHref}
                  className={`pricing-cta-btn ${plan.isPopular ? "pricing-cta-popular" : "pricing-cta-default"}`}
                >
                  <span>{plan.ctaText}</span>
                  <ArrowRight size={15} />
                </Link>
              </div>

              <div className="pricing-features-section">
                <span className="pricing-features-title">What&apos;s included:</span>
                <ul className="pricing-feature-list">
                  {plan.features.map((feat, idx) => (
                    <li
                      key={idx}
                      className={`pricing-feature-item ${feat.included ? "is-included" : "is-excluded"} ${
                        feat.highlight ? "is-highlight" : ""
                      }`}
                    >
                      <div className="pricing-check-icon">
                        {feat.included ? (
                          <Check size={14} className="check-active" />
                        ) : (
                          <span className="check-inactive">—</span>
                        )}
                      </div>
                      <span className="pricing-feature-text">{feat.text}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pricing-card-glow" />
            </article>
          );
        })}
      </div>

      {/* Trust & Guarantee Strip */}
      <div className="pricing-trust-banner">
        <div className="pricing-trust-item">
          <ShieldCheck size={18} className="trust-icon" />
          <div>
            <strong>14-Day Money-Back Guarantee</strong>
            <p>Try risk-free with full support.</p>
          </div>
        </div>
        <div className="pricing-trust-item">
          <Zap size={18} className="trust-icon" />
          <div>
            <strong>Zero Setup Or Hidden Fees</strong>
            <p>Transparent pricing from day one.</p>
          </div>
        </div>
        <div className="pricing-trust-item">
          <Headphones size={18} className="trust-icon" />
          <div>
            <strong>Free Data Migration & Onboarding</strong>
            <p>Our engineers assist with migration.</p>
          </div>
        </div>
      </div>

      {/* Enterprise Consultation Callout */}
      <div className="pricing-custom-callout">
        <div className="callout-content">
          <div className="callout-icon">
            <HelpCircle size={24} />
          </div>
          <div>
            <h4>Need a tailored enterprise deployment or on-premise integration?</h4>
            <p>
              We build custom software pipelines, multi-warehouse integrations, and industrial IoT solutions for clients like Vedanta.
            </p>
          </div>
        </div>
        <Link href="/contact" className="callout-action">
          Talk to a Tech Specialist <ArrowRight size={15} />
        </Link>
      </div>
    </section>
  );
}
