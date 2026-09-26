"use client";

import Link from "next/link";
import {
  ArrowRight,
  Linkedin,
  Instagram,
  Youtube,
  Mail,
  Phone,
  MapPin,
  ShieldCheck,
  Globe,
} from "lucide-react";
import { useState } from "react";

const footerLinks = {
  PRODUCTS: [
    { label: "ERP", href: "/product/erp" },
    { label: "CRM", href: "/product/crm" },
    { label: "AI Assistant", href: "/product/ai-assistant" },
    { label: "Analytics", href: "/product/analytics" },
    { label: "HR Suite", href: "/product/hr-suite" },
    { label: "SEO", href: "/product/seo" },
    { label: "Digital Marketing", href: "/product/digital-marketing" },
  ],
  COMPANY: [
    { label: "About Us", href: "/about" },
    { label: "Careers", href: "/careers" },
    { label: "Contact", href: "/contact" },
    { label: "Blog", href: "#" },
    { label: "Press", href: "#" },
  ],
  RESOURCES: [
    { label: "Documentation", href: "#" },
    { label: "Case Studies", href: "#" },
    { label: "Help Center", href: "#" },
    { label: "API Reference", href: "#" },
    { label: "Status", href: "#" },
  ],
};

function XIcon({ size = 13 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function Soc2Icon({ size = 13 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 2l2.4 3.6 4.3-.3 1 4.2 3.8 2-1.8 3.9 2.2 3.7-4 .8-.7 4.2-4.2-1-3.6 2.4-2.4-3.6-4.3.3-1-4.2-3.8-2 1.8-3.9-2.2-3.7 4-.8.7-4.2 4.2 1z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

export function Footer() {
  const [email, setEmail] = useState("");

  return (
    <footer className="site-footer">
      <div className="footer-top">
        {/* Brand Column */}
        <div className="footer-brand-col">
          <Link className="brand" href="/#top" aria-label="Tekkzy Home">
            <img src="/LOGO.png" alt="Tekkzy" className="brand-logo footer-logo" />
          </Link>
          <span className="footer-subtitle">Cloud · AI · Automation</span>
          <p className="footer-tagline">
            Building intelligent software and cloud solutions for a{" "}
            <span className="footer-highlight">smarter, more connected tomorrow.</span>
          </p>

          <div className="footer-socials">
            <a href="#" aria-label="LinkedIn" className="social-icon">
              <Linkedin size={15} />
            </a>
            <a href="#" aria-label="X" className="social-icon">
              <XIcon size={13} />
            </a>
            <a href="#" aria-label="Instagram" className="social-icon">
              <Instagram size={15} />
            </a>
            <a href="#" aria-label="YouTube" className="social-icon">
              <Youtube size={15} />
            </a>

          </div>

          <div className="footer-contact-row">
            <span><Mail size={14} /> hello@tekkzy.com</span>
            <span><Phone size={14} /> +91 98765 43210</span>
            <span><MapPin size={14} /> India</span>
          </div>
        </div>

        {/* Link Columns */}
        {Object.entries(footerLinks).map(([title, links]) => (
          <div key={title} className="footer-link-col">
            <h4>{title}</h4>
            <ul>
              {links.map(({ label, href }) => (
                <li key={label}>
                  <Link href={href}>{label}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Newsletter Card */}
        <div className="footer-newsletter-col">
          {/* 3D Paper Plane & Flight Trail Illustration */}
          <div className="newsletter-plane-wrapper" aria-hidden="true">
            <svg
              className="newsletter-plane-svg"
              viewBox="0 0 120 120"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Flight Trails */}
              <path
                d="M38 98C18 96 16 78 30 64C44 50 68 56 62 76C56 94 36 92 26 80C14 66 24 38 52 28C72 20 90 24 96 28"
                stroke="#bfdbfe"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeDasharray="3 3"
                opacity="0.8"
              />
              <path
                d="M48 88C64 90 76 78 68 64C60 50 40 54 44 70C48 82 62 86 76 74C88 64 92 46 96 30"
                stroke="#93c5fd"
                strokeWidth="1.2"
                strokeLinecap="round"
                opacity="0.75"
              />
              {/* Folded 3D Paper Plane */}
              <g transform="translate(68, 16) rotate(16)">
                {/* Main upper wing facet */}
                <polygon points="40,8 10,28 0,4" fill="#3b82f6" />
                {/* Highlight top facet */}
                <polygon points="40,8 18,12 0,4" fill="#60a5fa" />
                {/* Lower right wing facet */}
                <polygon points="40,8 8,40 10,28" fill="#1d4ed8" />
                {/* Underside keel / shadow */}
                <polygon points="10,28 6,36 18,29" fill="#1e40af" />
              </g>
            </svg>
          </div>

          <span className="footer-kicker">STAY IN THE LOOP</span>
          <h4>
            Build what&apos;s next, <br />
            <span className="footer-highlight">together.</span>
          </h4>
          <p>Get product updates, insights, and resources delivered to your inbox.</p>

          <form
            className="newsletter-form"
            aria-label="Newsletter signup"
            onSubmit={(e) => {
              e.preventDefault();
              setEmail("");
            }}
          >
            <input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit" aria-label="Subscribe to updates">
              <ArrowRight size={16} />
            </button>
          </form>

          <small className="newsletter-note">No spam. Unsubscribe anytime.</small>

          <div className="footer-badges">
            <span>
              <ShieldCheck size={13} /> 99.9% Uptime
            </span>
            <span>
              <Soc2Icon size={13} /> SOC 2
            </span>
            <span>
              <Globe size={13} /> ISO 27001
            </span>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <span className="footer-bottom-copyright">
          © {new Date().getFullYear()} Tekkzy. All rights reserved.
        </span>

        <div className="footer-bottom-right">
          <div className="footer-bottom-links">
            <Link href="#">Privacy Policy</Link>
            <span className="footer-link-divider" aria-hidden="true">|</span>
            <Link href="#">Terms of Service</Link>
            <span className="footer-link-divider" aria-hidden="true">|</span>
            <Link href="#">Cookie Policy</Link>
          </div>

          <div className="footer-section-divider" aria-hidden="true" />

          <div className="footer-bottom-tagline">
            <span className="footer-tagline-text">Smarter Technology.</span>
            <span className="footer-tagline-brand">
              Brighter Futures.
              <i className="footer-tagline-line" aria-hidden="true" />
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
