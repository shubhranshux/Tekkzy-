"use client";

import Link from "next/link";
import { ArrowRight, Linkedin, Twitter, Instagram, Github, Mail, Phone, MapPin } from "lucide-react";
import { useState } from "react";

const footerLinks = {
  Products: [
    { label: "ERP", href: "/product/erp" },
    { label: "CRM", href: "/product/crm" },
    { label: "AI Assistant", href: "/product/ai-assistant" },
    { label: "Analytics", href: "/product/analytics" },
    { label: "HR Suite", href: "/product/hr-suite" },
    { label: "SEO", href: "/product/seo" },
    { label: "Digital Marketing", href: "/product/digital-marketing" },
  ],
  Company: [
    { label: "About Us", href: "/about" },
    { label: "Careers", href: "/careers" },
    { label: "Contact", href: "/contact" },
    { label: "Blog", href: "#" },
    { label: "Press", href: "#" },
  ],
  Resources: [
    { label: "Documentation", href: "#" },
    { label: "Case Studies", href: "#" },
    { label: "Help Center", href: "#" },
    { label: "API Reference", href: "#" },
    { label: "Status", href: "#" },
  ],
};

const socials = [
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Github, href: "#", label: "GitHub" },
];

export function Footer() {
  const [email, setEmail] = useState("");

  return (
    <footer className="site-footer">
      <div className="footer-top">
        <div className="footer-brand-col">
          <Link className="brand" href="#top">
            <img src="/LOGO.png" alt="Tekkzy" className="brand-logo footer-logo" />
          </Link>
          <p className="footer-tagline">
            Intelligent cloud platform that connects your software, data, AI and automation into one system built for growth.
          </p>
          <div className="footer-socials">
            {socials.map(({ icon: Icon, href, label }) => (
              <a key={label} href={href} aria-label={label} className="social-icon">
                <Icon size={18} />
              </a>
            ))}
          </div>
          <div className="footer-contact-row">
            <span><Mail size={14} /> hello@tekkzy.com</span>
            <span><Phone size={14} /> +91 98765 43210</span>
            <span><MapPin size={14} /> India</span>
          </div>
        </div>

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

        <div className="footer-newsletter-col">
          <h4>Stay Updated</h4>
          <p>Get product updates, engineering insights and company news.</p>
          <form
            className="newsletter-form"
            onSubmit={(e) => {
              e.preventDefault();
              setEmail("");
            }}
          >
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit">
              <ArrowRight size={16} />
            </button>
          </form>
          <div className="footer-badges">
            <span>99.9% Uptime</span>
            <span>SOC 2</span>
            <span>ISO 27001</span>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Tekkzy. Built for what&apos;s next.</span>
        <div className="footer-bottom-links">
          <Link href="#">Privacy Policy</Link>
          <Link href="#">Terms of Service</Link>
          <Link href="#">Cookie Policy</Link>
        </div>
      </div>
    </footer>
  );
}
