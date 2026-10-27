"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  RotateCcw,
  Calendar,
  Clock,
  Printer,
  Copy,
  Check,
  ChevronRight,
  ShieldAlert,
  CreditCard,
  LayoutDashboard,
  Code2,
  TrendingUp,
  Receipt,
  Mail,
  ArrowRight,
  HelpCircle,
  CheckCircle2,
  AlertCircle,
  FileText,
  BadgeCheck,
} from "lucide-react";
import { CONTACT_DETAILS } from "@/lib/constants";
import "./refund-policy.css";

export default function RefundPolicyPage() {
  const [copiedLink, setCopiedLink] = useState(false);

  const handleCopyLink = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2400);
    }
  };

  const handlePrint = () => {
    if (typeof window !== "undefined") {
      window.print();
    }
  };

  return (
    <div className="refund-policy-page">
      {/* ── Official Corporate Print Letterhead (Print / PDF Only) ── */}
      <div className="print-letterhead" aria-hidden="true">
        <div className="print-letterhead-top">
          <div className="print-letterhead-brand">
            <img src="/LOGO.png" alt="Tekkzy" className="print-letterhead-logo" />
            <div className="print-letterhead-brand-text">
              <span className="print-corp-name">TEKKZY INTELLIGENT CLOUD APPLICATIONS PVT. LTD.</span>
              <span className="print-corp-sub">CIN / Incorporation: Under Companies Act, 2013 • Registered in Odisha, India</span>
            </div>
          </div>
          <div className="print-letterhead-meta">
            <span className="print-meta-badge">OFFICIAL CORPORATE POLICY</span>
            <span className="print-meta-row"><strong>Document Ref:</strong> TKZ-LEGAL-REF-2023</span>
            <span className="print-meta-row"><strong>Jurisdiction:</strong> Bhawanipatna, Odisha, India</span>
            <span className="print-meta-row"><strong>Last Updated:</strong> October 2023</span>
          </div>
        </div>
        <div className="print-letterhead-divider" />
      </div>

      {/* ── Top Hero Section (Crisp White Background) ── */}
      <section className="refund-hero">
        <div className="refund-hero-inner">
          <div className="refund-breadcrumbs">
            <Link href="/">Home</Link>
            <ChevronRight size={13} />
            <Link href="/about">Legal & Governance</Link>
            <ChevronRight size={13} />
            <span style={{ color: "#0f172a" }}>Refund & Cancellation Policy</span>
          </div>

          <div className="refund-hero-badge-row">
            <span className="refund-pill">
              <RotateCcw size={14} /> Service Terms & Assurance
            </span>
            <span className="refund-date-badge">
              <Calendar size={14} /> Last Updated: October 2023
            </span>
            <span className="refund-date-badge">
              <Clock size={14} /> 3 Min Read
            </span>
          </div>

          <h1 className="refund-hero-title">
            Refund & Cancellation Policy
            <span>Tekkzy Intelligent Cloud Applications Pvt. Ltd.</span>
          </h1>

          <p className="refund-hero-desc">
            We are dedicated to delivering exceptional business software, cloud architectures, and digital
            growth services. This policy clarifies cancellation timelines, refund eligibility, and payment
            processing terms across all our engagements.
          </p>

          <div className="refund-hero-actions">
            <button
              type="button"
              className={`refund-action-btn ${copiedLink ? "copied" : ""}`}
              onClick={handleCopyLink}
              aria-label="Copy policy link"
            >
              {copiedLink ? <Check size={14} /> : <Copy size={14} />}
              <span>{copiedLink ? "Link Copied!" : "Share Policy"}</span>
            </button>
            <button
              type="button"
              className="refund-action-btn"
              onClick={handlePrint}
              aria-label="Print policy"
            >
              <Printer size={14} />
              <span>Print / Save as PDF</span>
            </button>
          </div>
        </div>
      </section>

      {/* ── Key Highlights Strip ── */}
      <section className="refund-highlights-strip" aria-label="Key highlights">
        <div className="refund-highlights-grid">
          <div className="refund-highlight-card">
            <div className="refund-highlight-icon">
              <Calendar size={20} />
            </div>
            <strong>15-Day Written Notice</strong>
            <p>Required prior to scheduled project start date for web development and marketing cancellation.</p>
          </div>

          <div className="refund-highlight-card">
            <div className="refund-highlight-icon">
              <BadgeCheck size={20} />
            </div>
            <strong>Case-by-Case Assessment</strong>
            <p>Custom software and marketing engagements are evaluated individually if dissatisfaction arises.</p>
          </div>

          <div className="refund-highlight-card">
            <div className="refund-highlight-icon">
              <Clock size={20} />
            </div>
            <strong>15-Day Disbursement</strong>
            <p>Approved refunds are disbursed within 15 days from official approval date via determined methods.</p>
          </div>

          <div className="refund-highlight-card">
            <div className="refund-highlight-icon">
              <Mail size={20} />
            </div>
            <strong>Direct Expedited Support</strong>
            <p>Requests are processed rapidly through our dedicated desk at {CONTACT_DETAILS.email}.</p>
          </div>
        </div>
      </section>

      {/* ── Policy Body Content ── */}
      <div className="refund-body-container">
        {/* ══════════ SECTION 1: CANCELLATION POLICY ══════════ */}
        <section className="refund-section-block">
          <div className="refund-section-header">
            <span className="refund-section-badge">
              <ShieldAlert size={14} /> Section 01
            </span>
            <h2>Cancellation Policy</h2>
            <p>
              Guidelines for terminating or pausing project engagements, payment systems, and software platforms.
            </p>
          </div>

          <div className="refund-cards-grid">
            {/* Card 1: Web App & Digital Marketing */}
            <div className="refund-service-card">
              <div className="refund-card-top">
                <div className="refund-card-header">
                  <div className="refund-card-icon-wrap blue">
                    <Code2 size={22} />
                  </div>
                  <span className="refund-card-badge">15 Days Notice</span>
                </div>
                <h3 className="refund-card-title">Web Application & Digital Marketing</h3>
                <p className="refund-card-desc">
                  To cancel web application development or digital marketing services, please provide written
                  notice at least <strong>15 days before the scheduled start date</strong>. A cancellation fee
                  may apply at our discretion.
                </p>
              </div>
              <div className="refund-card-footer">
                <CheckCircle2 size={14} />
                <span>Written Notice Required</span>
              </div>
            </div>

            {/* Card 2: Payment Solutions */}
            <div className="refund-service-card">
              <div className="refund-card-top">
                <div className="refund-card-header">
                  <div className="refund-card-icon-wrap green">
                    <CreditCard size={22} />
                  </div>
                  <span className="refund-card-badge">Provider Terms</span>
                </div>
                <h3 className="refund-card-title">Payment Solutions</h3>
                <p className="refund-card-desc">
                  Cancellation of payment solutions is subject to the terms of the payment processing provider.
                  Please contact them directly for cancellation requests.
                </p>
              </div>
              <div className="refund-card-footer">
                <CheckCircle2 size={14} />
                <span>Gateway Provider Governed</span>
              </div>
            </div>

            {/* Card 3: Personal Dashboard */}
            <div className="refund-service-card">
              <div className="refund-card-top">
                <div className="refund-card-header">
                  <div className="refund-card-icon-wrap purple">
                    <LayoutDashboard size={22} />
                  </div>
                  <span className="refund-card-badge">Service Agreement</span>
                </div>
                <h3 className="refund-card-title">Personal Dashboard</h3>
                <p className="refund-card-desc">
                  Cancellation must be requested in writing and will be processed according to your specific
                  service agreement terms.
                </p>
              </div>
              <div className="refund-card-footer">
                <CheckCircle2 size={14} />
                <span>Contractual Terms Apply</span>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════ SECTION 2: REFUND POLICY ══════════ */}
        <section className="refund-section-block">
          <div className="refund-section-header">
            <span className="refund-section-badge">
              <RotateCcw size={14} /> Section 02
            </span>
            <h2>Refund Policy</h2>
            <p>
              Conditions under which refunds, credit balances, or alternative remedial solutions may be granted.
            </p>
          </div>

          <div className="refund-cards-grid">
            {/* Card 1: Web App & Digital Marketing */}
            <div className="refund-service-card">
              <div className="refund-card-top">
                <div className="refund-card-header">
                  <div className="refund-card-icon-wrap blue">
                    <TrendingUp size={22} />
                  </div>
                  <span className="refund-card-badge">Case-by-Case</span>
                </div>
                <h3 className="refund-card-title">Web Application & Digital Marketing</h3>
                <p className="refund-card-desc">
                  Refunds are issued on a case-by-case basis. If dissatisfied, please contact us within{" "}
                  <strong>15 days of service completion</strong>. We&apos;ll assess your situation and may offer
                  a refund or alternative solution.
                </p>
              </div>
              <div className="refund-card-footer">
                <CheckCircle2 size={14} />
                <span>15 Days Post-Completion</span>
              </div>
            </div>

            {/* Card 2: Payment Solutions */}
            <div className="refund-service-card">
              <div className="refund-card-top">
                <div className="refund-card-header">
                  <div className="refund-card-icon-wrap green">
                    <CreditCard size={22} />
                  </div>
                  <span className="refund-card-badge">Provider Policy</span>
                </div>
                <h3 className="refund-card-title">Payment Solutions</h3>
                <p className="refund-card-desc">
                  Refunds are subject to the policies of the payment processing provider. Please contact them
                  directly.
                </p>
              </div>
              <div className="refund-card-footer">
                <CheckCircle2 size={14} />
                <span>Direct Processor Contact</span>
              </div>
            </div>

            {/* Card 3: Personal Dashboard */}
            <div className="refund-service-card">
              <div className="refund-card-top">
                <div className="refund-card-header">
                  <div className="refund-card-icon-wrap purple">
                    <Receipt size={22} />
                  </div>
                  <span className="refund-card-badge">Agreement Governed</span>
                </div>
                <h3 className="refund-card-title">Personal Dashboard</h3>
                <p className="refund-card-desc">
                  Refunds will be issued according to the terms specified in your service agreement.
                </p>
              </div>
              <div className="refund-card-footer">
                <CheckCircle2 size={14} />
                <span>Contractual Disbursement</span>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════ SECTION 3: PROCESSING DETAILS ══════════ */}
        <section className="processing-section-card">
          <div className="refund-section-header" style={{ marginBottom: 0 }}>
            <span className="refund-section-badge">
              <Receipt size={14} /> Section 03
            </span>
            <h2>Processing Details</h2>
            <p>
              The step-by-step procedure for submitting, evaluating, and receiving approved refunds.
            </p>
          </div>

          <div className="processing-steps-grid">
            <div className="processing-step-box">
              <span className="processing-step-num">Step 01</span>
              <h4>Request Submission</h4>
              <p>
                To request a cancellation or refund, please contact our customer support team at{" "}
                <a href={`mailto:${CONTACT_DETAILS.email}`}>{CONTACT_DETAILS.email}</a>. Provide all necessary
                details (invoice numbers, milestones, contract IDs) to expedite your request.
              </p>
            </div>

            <div className="processing-step-box">
              <span className="processing-step-num">Step 02</span>
              <h4>Assessment & Fee Deduction</h4>
              <p>
                Our billing and operations department reviews project logs and work deliverables. Any
                applicable cancellation fees will be deducted from the final refund amount.
              </p>
            </div>

            <div className="processing-step-box">
              <span className="processing-step-num">Step 03</span>
              <h4>Disbursement Window</h4>
              <p>
                Approved refunds will be processed within <strong>15 days from approval date</strong>. The
                refund method will be determined by Intelligent Cloud Application.
              </p>
            </div>
          </div>
        </section>

        {/* ══════════ SECTION 4: NEED FURTHER ASSISTANCE? (REDIRECTS TO /contact) ══════════ */}
        <section className="assistance-card">
          <div className="assistance-inner">
            <div className="assistance-text-wrap">
              <span className="assistance-pill">
                <HelpCircle size={13} /> Further Assistance & Support
              </span>
              <h3>Need Further Assistance?</h3>
              <p>
                Have questions about your project contract, service timeline, or an active refund request?
                Our advisory team is ready to assist you directly through our consultation desk.
              </p>
            </div>

            <div className="assistance-actions">
              <Link href="/contact" className="assistance-primary-btn">
                <span>Contact Us</span>
                <ArrowRight size={16} />
              </Link>
              <a
                href={`mailto:${CONTACT_DETAILS.email}?subject=Refund%20or%20Cancellation%20Inquiry`}
                className="assistance-secondary-btn"
              >
                <Mail size={15} />
                <span>Email Support Team</span>
              </a>
            </div>
          </div>
        </section>
      </div>

      {/* ── Official Print-Only Document Footer ── */}
      <footer className="print-document-footer" aria-hidden="true">
        <div className="print-footer-rule" />
        <div className="print-footer-content">
          <div className="print-footer-left">
            <strong>Tekkzy Intelligent Cloud Applications Pvt. Ltd.</strong> — Corporate Governance & Legal Affairs
            <br />
            Registered Office: Bhawanipatna, Kalahandi, Odisha - 766001, India | Email: {CONTACT_DETAILS.email} | Web: www.tekkzy.com
          </div>
          <div className="print-footer-right">
            <span>Official Policy Document</span>
            <span>Jurisdiction: Bhawanipatna, Odisha</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
