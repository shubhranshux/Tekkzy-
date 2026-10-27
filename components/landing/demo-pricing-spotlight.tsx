"use client";

import React from "react";
import { Phone, ArrowRight, Sparkles } from "lucide-react";
import { CONTACT_DETAILS } from "@/lib/constants";
import "./demo-pricing-spotlight.css";

export default function DemoPricingSpotlight() {
  const whatsappMessage = encodeURIComponent(
    "Hi Tekkzy! I would like to book a call to discuss the ₹699/month starter plan for my business."
  );

  return (
    <section className="demo-pricing-section" id="pricing">
      <div className="demo-pricing-glow" aria-hidden="true" />

      <div className="demo-pricing-container">
        <div className="demo-minimal-card">
          <div className="demo-minimal-badge">
            <Sparkles size={13} />
            <span>Pricing</span>
          </div>

          <h2 className="demo-minimal-title">
            Pricing starts from <span className="demo-minimal-price">₹699</span>
            <span className="demo-minimal-period"> / mo</span>
          </h2>

          <p className="demo-minimal-desc">
            Intelligent software, bespoke automation, and enterprise cloud tools
            engineered to scale your operations effortlessly.
          </p>

          <div className="demo-minimal-actions">
            <a
              href={`tel:${CONTACT_DETAILS.phoneRaw}`}
              className="demo-minimal-btn"
            >
              <Phone size={17} />
              <span>Book a Call</span>
              <ArrowRight size={17} className="demo-btn-arrow" />
            </a>

            <a
              href={`https://wa.me/${CONTACT_DETAILS.phoneRaw.replace("+", "")}?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="demo-minimal-secondary"
            >
              WhatsApp Us ({CONTACT_DETAILS.phoneDisplay})
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
