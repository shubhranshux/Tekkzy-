"use client";

import React from "react";
import {
  Calendar,
  ArrowRight,
  MessageSquare,
  CheckCircle2,
  Clock,
  Video,
  ShieldCheck,
  ExternalLink,
} from "lucide-react";
import { CONTACT_DETAILS } from "@/lib/constants";
import "./demo-pricing-spotlight.css";

export default function DemoPricingSpotlight() {
  const whatsappMessage = encodeURIComponent(
    "Hi Tekkzy! I would like to book a meeting to discuss the ₹699/month starter plan for my business."
  );

  return (
    <section className="demo-pricing-section" id="pricing">
      <div className="demo-pricing-glow" aria-hidden="true" />

      <div className="demo-pricing-container">
        <div className="demo-minimal-card demo-wide-card">
          {/* ── Left Column: Pricing Narrative & Direct Actions ── */}
          <div className="demo-spotlight-left">
            <h2 className="demo-minimal-title">
              <div>Pricing Starts At</div>
              <div className="demo-minimal-price-tag">
                <span className="demo-minimal-currency">₹</span>
                <span className="demo-minimal-num">699</span>
                <span className="demo-minimal-cycle">/ month</span>
              </div>
            </h2>

            <p className="demo-minimal-desc">
              Intelligent software, bespoke automation, and enterprise cloud tools
              engineered to scale your operations effortlessly.
            </p>

            <div className="demo-feature-list">
              <div className="demo-feature-row">
                <div className="demo-check-badge">
                  <CheckCircle2 size={16} />
                </div>
                <div className="demo-feature-info">
                  <span className="demo-feature-head">Rapid 48-Hour Onboarding</span>
                  <span className="demo-feature-desc">Zero setup friction or legacy migration bottlenecks</span>
                </div>
              </div>

              <div className="demo-feature-row">
                <div className="demo-check-badge">
                  <CheckCircle2 size={16} />
                </div>
                <div className="demo-feature-info">
                  <span className="demo-feature-head">Transparent Monthly Model</span>
                  <span className="demo-feature-desc">Predictable pricing with zero hidden fees or lock-ins</span>
                </div>
              </div>

              <div className="demo-feature-row">
                <div className="demo-check-badge">
                  <CheckCircle2 size={16} />
                </div>
                <div className="demo-feature-info">
                  <span className="demo-feature-head">Dedicated Engineering Support</span>
                  <span className="demo-feature-desc">Direct access to technical leads &amp; 24/7 SLA</span>
                </div>
              </div>
            </div>

            <div className="demo-left-actions">
              <a
                href="https://calendly.com/tekkzy"
                target="_blank"
                rel="noopener noreferrer"
                className="demo-book-btn"
              >
                <Calendar size={17} />
                <span>Book Meeting</span>
                <ArrowRight size={16} />
              </a>

              <a
                href={`https://wa.me/${CONTACT_DETAILS.phoneRaw.replace("+", "")}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="demo-wa-btn"
              >
                <MessageSquare size={16} />
                <span>WhatsApp Us ({CONTACT_DETAILS.phoneDisplay})</span>
              </a>
            </div>
          </div>

          {/* ── Right Column: Let's Connect Interactive Concierge Card ── */}
          <div className="demo-spotlight-right">
            <div className="demo-connect-panel">
              <h3 className="demo-connect-heading">Let&apos;s Connect</h3>
              <p className="demo-connect-subheading">
                Pick a convenient time on Calendly to discuss project scope, architecture, and get an exact quote.
              </p>

              <div className="demo-session-meta-grid">
                <div className="demo-session-meta-item">
                  <div className="demo-meta-icon-box">
                    <Clock size={16} />
                  </div>
                  <div className="demo-meta-text-box">
                    <span className="demo-meta-label">Session Duration</span>
                    <strong className="demo-meta-value">30 Minutes · 1-on-1 Consultation</strong>
                  </div>
                </div>

                <div className="demo-session-meta-item">
                  <div className="demo-meta-icon-box">
                    <Video size={16} />
                  </div>
                  <div className="demo-meta-text-box">
                    <span className="demo-meta-label">Meeting Format</span>
                    <strong className="demo-meta-value">Google Meet / Video Link</strong>
                  </div>
                </div>

                <div className="demo-session-meta-item demo-session-meta-full">
                  <div className="demo-meta-icon-box">
                    <ShieldCheck size={16} />
                  </div>
                  <div className="demo-meta-text-box">
                    <span className="demo-meta-label">What to Expect</span>
                    <strong className="demo-meta-value">Custom Roadmap &amp; Cost Estimation</strong>
                  </div>
                </div>
              </div>

              <a
                href="https://calendly.com/tekkzy"
                target="_blank"
                rel="noopener noreferrer"
                className="demo-schedule-calendly-btn"
              >
                <Calendar size={18} />
                <span>Schedule on Calendly</span>
                <ExternalLink size={15} />
              </a>

              <div className="demo-calendly-notice">
                <span>⚡ Instant invite confirmation · No credit card required</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
