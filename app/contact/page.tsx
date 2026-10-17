"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ShieldCheck,
  CheckCircle2,
  Copy,
  Check,
  ExternalLink,
  MessageSquare,
  Send,
  Building2,
  ArrowRight,
  Headphones,
} from "lucide-react";
import { CONTACT_DETAILS } from "@/lib/constants";
import "./contact.css";

export default function ContactPage() {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "ERP & Business Systems",
    timeline: "Immediate (1–2 weeks)",
    message: "",
  });

  const handleCopy = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 900);
  };

  return (
    <div className="contact-page-root">
      {/* ── Top Hero ── */}
      <section className="contact-hero">
        <h1>
          Let’s Build Something <span>Transformative Together</span>
        </h1>
        <p>
          Whether you need an architectural review, custom ERP deployment,
          autonomous AI pipelines, or technical consultation, our engineering team
          is ready to assist.
        </p>

        <div className="contact-quick-perks">
          <div className="contact-perk-item">
            <span className="contact-perk-dot" />
            <span>Guaranteed &lt; 2 Hr SLA</span>
          </div>
          <div className="contact-perk-item">
            <ShieldCheck size={16} color="#1760ed" />
            <span>Strict NDA & Zero-Trust Governance</span>
          </div>
          <div className="contact-perk-item">
            <Building2 size={16} color="#7c3aed" />
            <span>Direct Access to Senior Solutions Architects</span>
          </div>
        </div>
      </section>

      {/* ── Key Contact Channel Cards Grid ── */}
      <section className="contact-cards-grid">
        {/* Phone / Call */}
        <div className="contact-channel-card">
          <div>
            <div className="contact-channel-head">
              <div className="contact-channel-icon-wrap" style={{ background: "#ecfdf5", color: "#10b981" }}>
                <Phone size={22} />
              </div>
              <div>
                <p className="contact-channel-title">Phone & WhatsApp</p>
                <div className="contact-channel-val">{CONTACT_DETAILS.phone}</div>
              </div>
            </div>
            <p className="contact-channel-desc">
              Speak directly with an enterprise advisor or initiate a fast
              technical chat on WhatsApp.
            </p>
          </div>
          <div className="contact-channel-actions">
            <a
              href={`tel:${CONTACT_DETAILS.phoneRaw}`}
              className="contact-action-btn btn-primary"
            >
              <Phone size={14} /> Call Now
            </a>
            <a
              href={`https://wa.me/919692064432?text=${encodeURIComponent(
                "Hello Tekkzy, I would like to discuss an enterprise project."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-action-btn btn-whatsapp"
            >
              <MessageSquare size={14} /> WhatsApp
            </a>
            <button
              type="button"
              onClick={() => handleCopy(CONTACT_DETAILS.phone, "phone")}
              className="contact-action-btn btn-secondary"
              title="Copy phone number"
            >
              {copiedKey === "phone" ? (
                <>
                  <Check size={13} color="#10b981" /> Copied
                </>
              ) : (
                <>
                  <Copy size={13} /> Copy
                </>
              )}
            </button>
          </div>
        </div>

        {/* Email */}
        <div className="contact-channel-card">
          <div>
            <div className="contact-channel-head">
              <div className="contact-channel-icon-wrap">
                <Mail size={22} />
              </div>
              <div>
                <p className="contact-channel-title">Official Inquiries</p>
                <div className="contact-channel-val">{CONTACT_DETAILS.email}</div>
              </div>
            </div>
            <p className="contact-channel-desc">
              For tenders, RFP proposals, architecture documents, and enterprise
              solution specifications.
            </p>
          </div>
          <div className="contact-channel-actions">
            <a
              href={`mailto:${CONTACT_DETAILS.email}`}
              className="contact-action-btn btn-primary"
            >
              <Mail size={14} /> Write Email
            </a>
            <button
              type="button"
              onClick={() => handleCopy(CONTACT_DETAILS.email, "email")}
              className="contact-action-btn btn-secondary"
              title="Copy email address"
            >
              {copiedKey === "email" ? (
                <>
                  <Check size={13} color="#10b981" /> Copied
                </>
              ) : (
                <>
                  <Copy size={13} /> Copy
                </>
              )}
            </button>
          </div>
        </div>

        {/* Address / Headquarters */}
        <div className="contact-channel-card">
          <div>
            <div className="contact-channel-head">
              <div className="contact-channel-icon-wrap" style={{ background: "#f5f3ff", color: "#7c3aed" }}>
                <MapPin size={22} />
              </div>
              <div>
                <p className="contact-channel-title">
                  Headquarters
                  <span className="contact-plus-badge">{CONTACT_DETAILS.plusCode}</span>
                </p>
                <div className="contact-channel-val" style={{ fontSize: "15px", lineHeight: "1.35" }}>
                  {CONTACT_DETAILS.addressLine1}, {CONTACT_DETAILS.addressLine2}, {CONTACT_DETAILS.stateAndZip}
                </div>
              </div>
            </div>
            <p className="contact-channel-desc">
              Visit our innovation and engineering office in Bhawanipatna, Odisha.
            </p>
          </div>
          <div className="contact-channel-actions">
            <a
              href={CONTACT_DETAILS.mapsDirectLink}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-action-btn btn-primary"
            >
              <ExternalLink size={14} /> Get Directions
            </a>
            <button
              type="button"
              onClick={() => handleCopy(CONTACT_DETAILS.fullAddress, "address")}
              className="contact-action-btn btn-secondary"
              title="Copy full address"
            >
              {copiedKey === "address" ? (
                <>
                  <Check size={13} color="#10b981" /> Copied
                </>
              ) : (
                <>
                  <Copy size={13} /> Copy
                </>
              )}
            </button>
          </div>
        </div>

        {/* Hours & SLA */}
        <div className="contact-channel-card">
          <div>
            <div className="contact-channel-head">
              <div className="contact-channel-icon-wrap" style={{ background: "#fffbeb", color: "#d97706" }}>
                <Clock size={22} />
              </div>
              <div>
                <p className="contact-channel-title">Operating Hours</p>
                <div className="contact-channel-val" style={{ fontSize: "16px" }}>
                  Mon – Sat · 9 AM – 7 PM IST
                </div>
              </div>
            </div>
            <p className="contact-channel-desc">
              Active engineering hours. Critical infrastructure support lines
              operate 24/7/365 under enterprise SLAs.
            </p>
          </div>
          <div className="contact-channel-actions">
            <div
              className="contact-action-btn btn-secondary"
              style={{ cursor: "default", background: "#f8fafc", color: "#166534" }}
            >
              <CheckCircle2 size={14} color="#10b981" /> Active Hotline Ready
            </div>
          </div>
        </div>
      </section>

      {/* ── Main Two-Column Grid: Form & Live Map ── */}
      <section className="contact-main-grid">
        {/* Left: Interactive Form */}
        <div className="contact-form-card">
          <div className="contact-form-header">
            <h2>Start a Technical Discussion</h2>
            <p>
              Fill out the details below. A solutions architect will reach out
              with a tailored proposal.
            </p>
          </div>

          {submitted ? (
            <div className="contact-success-banner">
              <CheckCircle2 size={24} style={{ flexShrink: 0, marginTop: "2px" }} />
              <div>
                <h4 style={{ margin: "0 0 4px", fontSize: "16px", fontWeight: "700" }}>
                  Message Received Successfully!
                </h4>
                <p style={{ margin: 0, fontSize: "13.5px", lineHeight: "1.5" }}>
                  Thank you, <strong>{formData.name}</strong>. Our enterprise
                  team will contact you at <strong>{formData.email}</strong> or{" "}
                  <strong>{formData.phone || "phone"}</strong> within 2 hours.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  style={{
                    marginTop: "12px",
                    background: "none",
                    border: "none",
                    color: "#059669",
                    fontWeight: "700",
                    cursor: "pointer",
                    textDecoration: "underline",
                    fontSize: "13px",
                    padding: 0,
                  }}
                >
                  Send another inquiry →
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="contact-form-row">
                <div className="contact-input-group">
                  <label htmlFor="contact-name">Your Full Name *</label>
                  <input
                    id="contact-name"
                    required
                    type="text"
                    placeholder="e.g. Rahul Sharma"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                  />
                </div>
                <div className="contact-input-group">
                  <label htmlFor="contact-email">Work Email *</label>
                  <input
                    id="contact-email"
                    required
                    type="email"
                    placeholder="name@company.com"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                  />
                </div>
              </div>

              <div className="contact-form-row">
                <div className="contact-input-group">
                  <label htmlFor="contact-phone">Phone Number *</label>
                  <input
                    id="contact-phone"
                    required
                    type="tel"
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                  />
                </div>
                <div className="contact-input-group">
                  <label htmlFor="contact-company">Company / Organization</label>
                  <input
                    id="contact-company"
                    type="text"
                    placeholder="e.g. Apex Industries"
                    value={formData.company}
                    onChange={(e) =>
                      setFormData({ ...formData, company: e.target.value })
                    }
                  />
                </div>
              </div>

              <div className="contact-form-row">
                <div className="contact-input-group">
                  <label htmlFor="contact-service">Solution of Interest</label>
                  <select
                    id="contact-service"
                    value={formData.service}
                    onChange={(e) =>
                      setFormData({ ...formData, service: e.target.value })
                    }
                  >
                    <option>ERP & Core Business Systems</option>
                    <option>CRM & Customer Operations</option>
                    <option>AI Assistant & Autonomous Workflows</option>
                    <option>Cloud Infrastructure & High-Availability</option>
                    <option>Data Lakehouse & Business Analytics</option>
                    <option>SEO & Digital Growth Marketing</option>
                    <option>Custom Enterprise Software Architecture</option>
                  </select>
                </div>
                <div className="contact-input-group">
                  <label htmlFor="contact-timeline">Project Timeline</label>
                  <select
                    id="contact-timeline"
                    value={formData.timeline}
                    onChange={(e) =>
                      setFormData({ ...formData, timeline: e.target.value })
                    }
                  >
                    <option>Immediate (1–2 weeks)</option>
                    <option>Next Quarter (1–3 months)</option>
                    <option>Planning & Budgeting Phase</option>
                    <option>Exploring Capabilities / Demo Request</option>
                  </select>
                </div>
              </div>

              <div className="contact-input-group">
                <label htmlFor="contact-message">
                  Project Details / Requirements *
                </label>
                <textarea
                  id="contact-message"
                  required
                  rows={4}
                  placeholder="Tell us about your operational challenges, current tech stack, or objectives..."
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="contact-submit-btn"
              >
                {isSubmitting ? (
                  "Sending Your Inquiry..."
                ) : (
                  <>
                    <Send size={16} /> Submit Enterprise Request
                  </>
                )}
              </button>

              <div className="contact-form-guarantees">
                <span>
                  <ShieldCheck size={14} color="#10b981" /> 100% Privacy Protected
                </span>
                <span>
                  <Clock size={14} color="#1760ed" /> Fast &lt; 2h Response
                </span>
                <span>
                  <CheckCircle2 size={14} color="#7c3aed" /> No Spam Guarantee
                </span>
              </div>
            </form>
          )}
        </div>

        {/* Right: Accurate Map & Office Location Card */}
        <div className="contact-map-card">
          <div className="contact-map-header">
            <h3>
              <MapPin size={20} color="#1760ed" />
              Tekkzy Innovation Hub
              <span className="contact-plus-badge">{CONTACT_DETAILS.plusCode}</span>
            </h3>
            <p>{CONTACT_DETAILS.fullAddress}</p>
          </div>

          <div className="contact-map-iframe-wrap">
            <iframe
              title="Tekkzy Office Location Map"
              src={CONTACT_DETAILS.mapsEmbedUrl}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <div className="contact-map-footer">
            <div className="contact-coord-text">
              <Building2 size={15} />
              <span>Bhawanipatna, Kalahandi, Odisha 766001</span>
            </div>
            <a
              href={CONTACT_DETAILS.mapsDirectLink}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-action-btn btn-primary"
              style={{ fontSize: "12.5px", padding: "6px 14px" }}
            >
              <ExternalLink size={13} /> View Large Map
            </a>
          </div>
        </div>
      </section>

      {/* ── FAQ Strip ── */}
      <section className="contact-faq-strip">
        <div className="contact-faq-heading">
          <div className="contact-badge-pill" style={{ margin: "0 auto 12px" }}>
            <Headphones size={13} /> Direct Support FAQ
          </div>
          <h3>Frequently Asked Questions</h3>
        </div>

        <div className="contact-faq-grid">
          <div className="contact-faq-item">
            <h4>How quickly will someone reach out?</h4>
            <p>
              During active business hours (Mon–Sat, 9 AM – 7 PM IST), a solution
              architect responds within 2 hours.
            </p>
          </div>
          <div className="contact-faq-item">
            <h4>Can we execute an NDA prior to discussions?</h4>
            <p>
              Yes. We take enterprise IP seriously and can execute mutual
              confidentiality non-disclosure agreements before review.
            </p>
          </div>
          <div className="contact-faq-item">
            <h4>Do you provide on-site deployment & training?</h4>
            <p>
              Yes. Our engineers travel for on-site hardware integrations, ERP
              rollouts, and staff training across Odisha and India.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
