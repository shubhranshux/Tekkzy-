"use client";

import React from "react";
import Link from "next/link";
import {
  Linkedin,
  Instagram,
  Youtube,
  Github,
  ShieldCheck,
  Award,
} from "lucide-react";
import { CONTACT_DETAILS } from "@/lib/constants";
import "./footer.css";

function XIcon({ size = 13 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function DiscordIcon({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.929 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.894.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
    </svg>
  );
}

const FOOTER_COLUMNS = [
  {
    title: "Products",
    links: [
      { label: "ERP Platform", href: "/product/erp" },
      { label: "Intelligent CRM", href: "/product/crm" },
      { label: "AI Copilot", href: "/product/ai-assistant" },
      { label: "Workflow Engine", href: "/product/automation" },
      { label: "Cloud BI & Analytics", href: "/product/analytics" },
      { label: "Smart Inventory", href: "/product/inventory" },
      { label: "Model Training", href: "/solutions/ai-models" },
    ],
  },
  {
    title: "Capabilities",
    links: [
      { label: "Autonomous Agents", href: "/product/ai-assistant" },
      { label: "Speech to Text", href: "/solutions/voice-ai" },
      { label: "Doc Digitisation", href: "/solutions/ocr" },
      { label: "Neural Translation", href: "/solutions/translation" },
      { label: "Custom Models", href: "/solutions/models" },
      { label: "Telemetry & Logs", href: "/solutions/telemetry" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Building AI Agents", href: "/whats-possible" },
      { label: "Events & Demos", href: "/contact" },
      { label: "Customer Stories", href: "/#testimonials" },
      { label: "Documentation", href: "/about" },
      { label: "API Pricing", href: "/#pricing" },
      { label: "Integrations", href: "/solutions" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Careers", href: "/careers" },
      { label: "Contact Us", href: "/contact" },
      { label: "About Tekkzy", href: "/about" },
      { label: "Brand Guidelines", href: "/about" },
      { label: "Partnerships", href: "/contact" },
      { label: "Press & Media", href: "/about" },
    ],
  },
  {
    title: "Legal & Trust",
    links: [
      { label: "Terms of Service", href: "/security" },
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Refund & Cancellation", href: "/refund-policy" },
      { label: "EULA & Licenses", href: "/security" },
      { label: "Security & SOC 2", href: "/security" },
      { label: "Enterprise SLA", href: "/security" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="site-footer-sarvam" id="footer">
      <div className="footer-sarvam-inner">
        {/* Top Grid: Left Identity/Badges/Address + Right Navigation Columns */}
        <div className="footer-sarvam-top-grid">
          {/* Left Identity Column */}
          <div className="footer-sarvam-left-col">
            {/* Compliance Badges matching Sarvam reference */}
            <div className="footer-sarvam-badges-row">
              <div className="footer-compliance-badge">
                <div className="footer-badge-icon-wrap">
                  <ShieldCheck size={16} />
                </div>
                <strong>ISO 27001</strong>
                <span>Certified</span>
              </div>

              <div className="footer-compliance-badge">
                <div className="footer-badge-icon-wrap">
                  <Award size={16} />
                </div>
                <strong>AICPA SOC 2</strong>
                <span>Type 1 & 2</span>
              </div>
            </div>

            {/* Social Links matching Sarvam */}
            <div className="footer-sarvam-socials-group">
              <span className="footer-sarvam-socials-label">Find us at</span>
              <div className="footer-sarvam-social-icons">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="footer-sarvam-social-btn"
                >
                  <Linkedin size={15} />
                </a>
                <a
                  href="https://x.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="X / Twitter"
                  className="footer-sarvam-social-btn"
                >
                  <XIcon size={13} />
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                  className="footer-sarvam-social-btn"
                >
                  <Youtube size={15} />
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="footer-sarvam-social-btn"
                >
                  <Github size={15} />
                </a>
                <a
                  href="https://discord.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Discord"
                  className="footer-sarvam-social-btn"
                >
                  <DiscordIcon size={14} />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="footer-sarvam-social-btn"
                >
                  <Instagram size={15} />
                </a>
              </div>
            </div>

            {/* Company Registration Card */}
            <div className="footer-sarvam-corp-card">
              <p>
                <strong>© {new Date().getFullYear()} Tekkzy Private Limited.</strong>
                <br />
                All rights reserved.
              </p>
              <p>
                {CONTACT_DETAILS.fullAddress}
              </p>
            </div>
          </div>

          {/* Right Navigation Columns */}
          <div className="footer-sarvam-nav-grid">
            {FOOTER_COLUMNS.map((col) => (
              <div key={col.title} className="footer-sarvam-col">
                <h4 className="footer-sarvam-col-title">{col.title}</h4>
                <ul className="footer-sarvam-links-list">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <Link href={link.href} className="footer-sarvam-link">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── THE GIGANTIC SARVAM-STYLE TEKKZY WORDMARK AT THE BOTTOM ── */}
      <div className="footer-sarvam-wordmark-container" aria-hidden="true">
        <span className="footer-sarvam-wordmark-text">
          TEKKZY
        </span>
      </div>
    </footer>
  );
}

export default Footer;
