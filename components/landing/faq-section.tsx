"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle, MessageSquare, Sparkles } from "lucide-react";
import Link from "next/link";

const faqs = [
  {
    q: "What is Tekkzy and how can it help my business?",
    a: "Tekkzy is an intelligent cloud platform that unifies ERP, CRM, AI-powered analytics, automation, and more into a single ecosystem. It helps businesses streamline operations, make data-driven decisions, and scale faster — all without juggling multiple disconnected tools.",
    icon: Sparkles,
  },
  {
    q: "How long does it take to get started?",
    a: "Most teams are up and running within days, not months. Our guided onboarding, migration tools, and dedicated support team ensure a seamless transition from your existing systems to Tekkzy.",
    icon: Sparkles,
  },
  {
    q: "Is my data secure on Tekkzy?",
    a: "Absolutely. Tekkzy is SOC 2 certified and ISO 27001 compliant with 99.9% uptime. All data is encrypted at rest and in transit, with role-based access controls and continuous security monitoring.",
    icon: Sparkles,
  },
  {
    q: "Can Tekkzy integrate with tools we already use?",
    a: "Yes. Tekkzy offers a comprehensive API and pre-built integrations with popular platforms including Google Workspace, Slack, payment gateways, shipping providers, and many more.",
    icon: Sparkles,
  },
  {
    q: "What kind of support do you offer?",
    a: "We offer 24/7 priority support for all business plans, along with a dedicated success manager, comprehensive documentation, and a community forum. Enterprise customers also get on-site training and custom SLAs.",
    icon: Sparkles,
  },
  {
    q: "Can I try Tekkzy before committing?",
    a: "Yes! We offer a 14-day free trial with full access to all features — no credit card required. You can also request a personalized demo from our team to see how Tekkzy fits your specific workflow.",
    icon: Sparkles,
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="faq-section landing-section">
      <div className="faq-header">
        {/* Decorative glow */}
        <div className="faq-header-glow" aria-hidden="true" />

        <span className="faq-label">
          <HelpCircle size={12} />
          FAQ
        </span>
        <h2>
          Frequently Asked <br />
          <span>Questions</span>
        </h2>
        <p>
          Everything you need to know about Tekkzy. Can&apos;t find your answer?{" "}
          <Link href="/contact" className="faq-contact-link">
            Get in touch →
          </Link>
        </p>

        {/* Stats strip */}
        <div className="faq-stats">
          <div className="faq-stat">
            <strong>500+</strong>
            <small>Businesses served</small>
          </div>
          <div className="faq-stat-divider" />
          <div className="faq-stat">
            <strong>99.9%</strong>
            <small>Uptime guaranteed</small>
          </div>
          <div className="faq-stat-divider" />
          <div className="faq-stat">
            <strong>24/7</strong>
            <small>Support available</small>
          </div>
        </div>

        {/* Still have questions CTA */}
        <div className="faq-cta-card">
          <MessageSquare size={20} className="faq-cta-icon" />
          <div>
            <strong>Still have questions?</strong>
            <p>Our team is happy to help you.</p>
          </div>
          <Link href="/contact" className="faq-cta-btn">
            Contact Us
          </Link>
        </div>
      </div>

      <div className="faq-list">
        {faqs.map((faq, i) => {
          const isOpen = openIndex === i;
          return (
            <div
              className={`faq-item${isOpen ? " faq-open" : ""}`}
              key={i}
            >
              <button
                className="faq-question"
                onClick={() => setOpenIndex(isOpen ? null : i)}
                aria-expanded={isOpen}
              >
                <span className="faq-q-number">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="faq-q-text">{faq.q}</span>
                <span className="faq-chevron-wrap">
                  <ChevronDown
                    size={16}
                    className={`faq-chevron${isOpen ? " faq-chevron-open" : ""}`}
                  />
                </span>
              </button>
              <div
                className="faq-answer-wrap"
                style={{
                  maxHeight: isOpen ? 300 : 0,
                  opacity: isOpen ? 1 : 0,
                }}
              >
                <p className="faq-answer">{faq.a}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
