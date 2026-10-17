"use client";

import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  ExternalLink,
  MessageSquare,
  Sparkles,
  Building2,
  Clock,
} from "lucide-react";
import { CONTACT_DETAILS } from "@/lib/constants";
import "./contact-section.css";

export default function ContactSection() {
  return (
    <section className="landing-contact-section landing-section" id="contact">
      <div className="landing-contact-ambient-glow" aria-hidden="true" />

      <div className="landing-contact-container">
        {/* Header */}
        <div className="landing-contact-header">
          <div className="landing-label">
            <span />
            <Sparkles size={12} />
            Direct Communications
          </div>
          <h2>
            Let&apos;s Build Your Next <br />
            <span>Breakthrough System</span>
          </h2>
          <p>
            Have a project in mind, need architectural guidance, or want to
            schedule a tailored enterprise demo? Reach out directly.
          </p>
        </div>

        {/* Content Box */}
        <div className="landing-contact-grid">
          {/* Left Column: Direct Info Cards */}
          <div className="landing-contact-info-col">
            {/* Phone Card */}
            <div className="landing-contact-card">
              <div className="landing-contact-icon-box phone-icon">
                <Phone size={20} />
              </div>
              <div className="landing-contact-card-content">
                <span className="landing-contact-card-label">Direct Phone & WhatsApp</span>
                <h4>{CONTACT_DETAILS.phone}</h4>
                <p>Mon – Sat, 9:00 AM – 7:00 PM IST · Immediate response</p>
                <div className="landing-contact-actions">
                  <a
                    href={`tel:${CONTACT_DETAILS.phoneRaw}`}
                    className="landing-contact-sub-btn"
                  >
                    <Phone size={13} /> Call
                  </a>
                  <a
                    href={`https://wa.me/919692064432?text=${encodeURIComponent(
                      "Hello Tekkzy, I would like to discuss a project."
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="landing-contact-sub-btn whatsapp-btn"
                  >
                    <MessageSquare size={13} /> WhatsApp
                  </a>
                </div>
              </div>
            </div>

            {/* Email Card */}
            <div className="landing-contact-card">
              <div className="landing-contact-icon-box mail-icon">
                <Mail size={20} />
              </div>
              <div className="landing-contact-card-content">
                <span className="landing-contact-card-label">Official Inquiries & Proposals</span>
                <h4>{CONTACT_DETAILS.email}</h4>
                <p>Enterprise RFP submissions, partnerships & architecture reviews</p>
                <div className="landing-contact-actions">
                  <a
                    href={`mailto:${CONTACT_DETAILS.email}`}
                    className="landing-contact-sub-btn"
                  >
                    <Mail size={13} /> Write Email
                  </a>
                </div>
              </div>
            </div>

            {/* Address Card */}
            <div className="landing-contact-card">
              <div className="landing-contact-icon-box location-icon">
                <MapPin size={20} />
              </div>
              <div className="landing-contact-card-content">
                <span className="landing-contact-card-label">
                  Headquarters
                  <span className="landing-plus-badge">{CONTACT_DETAILS.plusCode}</span>
                </span>
                <h4>{CONTACT_DETAILS.addressLine1}</h4>
                <p>
                  {CONTACT_DETAILS.addressLine2}, {CONTACT_DETAILS.stateAndZip}
                </p>
                <div className="landing-contact-actions">
                  <a
                    href={CONTACT_DETAILS.mapsDirectLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="landing-contact-sub-btn"
                  >
                    <ExternalLink size={13} /> Open in Google Maps
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Live Map Preview & Primary CTA */}
          <div className="landing-contact-map-col">
            <div className="landing-map-frame">
              <div className="landing-map-bar">
                <div className="landing-map-title">
                  <Building2 size={15} color="#1760ed" />
                  <span>Tekkzy Engineering HQ · Bhawanipatna</span>
                </div>
                <a
                  href={CONTACT_DETAILS.mapsDirectLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="landing-map-link"
                >
                  Get Directions <ExternalLink size={12} />
                </a>
              </div>

              <div className="landing-map-embed">
                <iframe
                  title="Tekkzy Location Map"
                  src={CONTACT_DETAILS.mapsEmbedUrl}
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              <div className="landing-map-bottom-cta">
                <div className="landing-map-hours">
                  <Clock size={14} color="#10b981" />
                  <span>24/7 Enterprise Response Guaranteed</span>
                </div>
                <Link href="/contact" className="landing-contact-primary-btn">
                  Open Contact Page & Form <ArrowRight size={15} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
