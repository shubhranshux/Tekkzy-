"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  ShieldCheck,
  FileText,
  Lock,
  Database,
  Share2,
  Scale,
  Sparkles,
  ChevronRight,
  Copy,
  Check,
  Printer,
  Mail,
  Building2,
  Calendar,
  CheckCircle2,
  ArrowRight,
  HelpCircle,
  Clock,
} from "lucide-react";
import { CONTACT_DETAILS } from "@/lib/constants";

interface ClauseItem {
  id: string;
  num: string;
  title: string;
  badge: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  content: string[];
  keyTags: string[];
}

const CLAUSES: ClauseItem[] = [
  {
    id: "applicability-and-consent",
    num: "01",
    title: "Applicability and Consent",
    badge: "Scope & Binding Agreement",
    icon: FileText,
    content: [
      "This Privacy Policy governs the collection, use, storage, processing, and disclosure of personal and business information by Tekkzy Intelligent Cloud Applications Pvt. Ltd., a company incorporated under the Companies Act, 2013 with its registered office in Odisha, India (\"Company\", \"We\", \"Us\").",
      "This Policy applies to all clients, users, visitors, and entities (\"User\") who interact with the Company through its websites, software applications, platforms, services, communications, or payments.",
      "By accessing or using the Company's services or by providing any information to the Company, the User expressly consents to the collection and use of such information in accordance with this Privacy Policy. If the User does not agree with this Policy, they must discontinue use of the services immediately.",
    ],
    keyTags: [
      "Companies Act, 2013",
      "Express Consent Required",
      "All Platforms & Services",
      "Immediate Discontinuation on Dissent",
    ],
  },
  {
    id: "information-collected",
    num: "02",
    title: "Information Collected",
    badge: "Data Categories & Ingestion",
    icon: Database,
    content: [
      "The Company may collect personal, business, and technical information including but not limited to name, email address, phone number, business details, billing information, payment records, login credentials, IP address, device information, usage data, project-related data, and communication records.",
      "Information may be collected directly from the User, automatically through system logs, cookies, or third-party integrations, or through lawful business interactions.",
      "The Company does not intentionally collect sensitive personal data unless required for service delivery or compliance with legal obligations.",
    ],
    keyTags: [
      "Identity & Business Credentials",
      "System Logs & Telemetry",
      "Encrypted Payment Records",
      "No Sensitive Data Unless Essential",
    ],
  },
  {
    id: "use-of-information",
    num: "03",
    title: "Use of Information",
    badge: "Legitimate Business Purpose",
    icon: Sparkles,
    content: [
      "Information collected by the Company is used strictly for legitimate business purposes including service delivery, software development, customization, account management, billing, payment processing, customer support, internal analysis, security monitoring, compliance with legal obligations, and communication regarding services.",
      "The Company does not sell, rent, or trade User data for marketing purposes.",
      "Information may also be used to improve service quality, troubleshoot technical issues, prevent fraud, and enforce contractual obligations.",
    ],
    keyTags: [
      "Zero Data Selling/Renting",
      "Service & Software Delivery",
      "Fraud Prevention",
      "Contractual Compliance",
    ],
  },
  {
    id: "data-sharing-and-disclosure",
    num: "04",
    title: "Data Sharing and Disclosure",
    badge: "Confidentiality & Third Parties",
    icon: Share2,
    content: [
      "The Company may share User information with employees, contractors, service providers, and third-party vendors strictly on a need-to-know basis for service delivery, hosting, payment processing, cloud infrastructure, analytics, or legal compliance. Such parties are bound by confidentiality obligations.",
      "The Company may disclose information where required by law, court order, government authority, or to protect its legal rights, property, or safety.",
      "The Company shall not be responsible for data practices of third-party platforms, hosting providers, APIs, or integrations used as part of the services.",
    ],
    keyTags: [
      "Strict Need-to-Know Basis",
      "Confidentiality Bound",
      "Statutory Legal Disclosures",
      "Independent Third-Party APIs",
    ],
  },
  {
    id: "data-security-and-retention",
    num: "05",
    title: "Data Security and Retention",
    badge: "Safeguards & Lifecycle",
    icon: Lock,
    content: [
      "The Company implements reasonable technical and organizational measures to protect User information against unauthorized access, loss, misuse, or alteration. However, no system is completely secure and the Company does not guarantee absolute data security.",
      "User data is retained only for as long as necessary to fulfill business, contractual, or legal requirements.",
      "Upon termination of services, certain data may be retained as required by law, accounting standards, or dispute resolution needs.",
    ],
    keyTags: [
      "Technical & Org Measures",
      "Purpose-Based Retention",
      "Post-Termination Legal Hold",
      "Reasonable Security Safeguards",
    ],
  },
  {
    id: "user-rights-and-governing-law",
    num: "06",
    title: "User Rights, Limitation and Governing Law",
    badge: "Statutory Rights & Jurisdiction",
    icon: Scale,
    content: [
      "Users may request access, correction, or deletion of their personal information subject to legal and contractual limitations. The Company reserves the right to refuse requests that are impractical, excessive, or legally restricted.",
      "The Company shall not be liable for any indirect, incidental, or consequential damages arising from data usage or unauthorized access beyond reasonable control.",
      "This Privacy Policy shall be governed by and construed in accordance with the laws of India, and any disputes shall be subject to the exclusive jurisdiction of the courts of Bhawanipatna, Odisha, India. Continued use of the Company's services constitutes unconditional acceptance of this Privacy Policy.",
    ],
    keyTags: [
      "Access & Correction Requests",
      "Damages Limitation",
      "Laws of India",
      "Courts of Bhawanipatna, Odisha",
    ],
  },
];

export default function PrivacyPolicyPage() {
  const [activeSection, setActiveSection] = useState<string>("applicability-and-consent");
  const [copiedLink, setCopiedLink] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 220;
      for (const clause of CLAUSES) {
        const el = document.getElementById(clause.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(clause.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
    <div className="bg-white text-zinc-900 min-h-screen pt-24 pb-20 print:pt-0 print:pb-0">
      {/* ── Official Print-Only Corporate Letterhead ── */}
      <div className="hidden print:block border-b-2 border-black pb-4 mb-6 max-w-5xl mx-auto px-4" aria-hidden="true">
        <div className="flex justify-between items-start">
          <div className="flex items-center gap-3">
            <img src="/LOGO.png" alt="Tekkzy" className="h-9 w-auto object-contain filter grayscale" />
            <div>
              <div className="text-sm font-bold tracking-tight text-black">
                TEKKZY INTELLIGENT CLOUD APPLICATIONS PVT. LTD.
              </div>
              <div className="text-[10px] text-zinc-500">
                CIN / Companies Act, 2013 • Registered in Odisha, India
              </div>
            </div>
          </div>
          <div className="text-right text-[10px] text-zinc-600 space-y-0.5">
            <span className="inline-block px-2 py-0.5 bg-black text-white font-bold rounded text-[9px]">
              OFFICIAL CORPORATE POLICY
            </span>
            <div><strong>Ref:</strong> TKZ-LEGAL-PRIV-2023</div>
            <div><strong>Jurisdiction:</strong> Bhawanipatna, Odisha</div>
            <div><strong>Last Updated:</strong> October 23, 2023</div>
          </div>
        </div>
      </div>

      {/* ── Hero Section ── */}
      <section className="border-b border-zinc-200 pb-12 print:border-b-0 print:pb-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            {/* Breadcrumbs */}
            <div className="flex items-center gap-2 text-xs font-medium text-zinc-500 mb-5 print:hidden">
              <Link href="/" className="hover:text-black transition">Home</Link>
              <ChevronRight size={12} />
              <Link href="/about" className="hover:text-black transition">Legal & Governance</Link>
              <ChevronRight size={12} />
              <span className="text-black font-semibold">Privacy Policy</span>
            </div>

            {/* Badges */}
            <div className="flex items-center gap-3 flex-wrap mb-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-black text-white">
                <ShieldCheck size={13} /> Corporate Legal Policy
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs font-medium text-zinc-600">
                <Calendar size={13} /> Last Updated: October 23, 2023
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs font-medium text-zinc-600">
                <Clock size={13} /> 4 Min Read
              </span>
            </div>

            {/* Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-black">
              Privacy Policy
            </h1>
            <p className="text-lg sm:text-xl font-bold text-zinc-700 tracking-tight mt-1.5">
              Tekkzy Intelligent Cloud Applications Pvt. Ltd.
            </p>

            {/* Description */}
            <p className="text-sm sm:text-base text-zinc-600 leading-relaxed max-w-3xl mt-4">
              This Policy outlines our governance, security standards, and lawful obligations regarding the
              collection, management, and protection of information across all Tekkzy software products,
              client operations, and cloud ecosystems.
            </p>

            {/* Action Buttons */}
            <div className="flex items-center gap-3 mt-6 print:hidden">
              <button
                type="button"
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold border transition ${
                  copiedLink
                    ? "bg-zinc-100 text-black border-black"
                    : "bg-white text-zinc-900 border-zinc-300 hover:bg-zinc-50 hover:border-black"
                }`}
                onClick={handleCopyLink}
                aria-label="Copy policy link"
              >
                {copiedLink ? <Check size={13} /> : <Copy size={13} />}
                <span>{copiedLink ? "Link Copied!" : "Share Policy"}</span>
              </button>
              <button
                type="button"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold bg-black text-white hover:bg-zinc-800 transition"
                onClick={handlePrint}
                aria-label="Print policy"
              >
                <Printer size={13} />
                <span>Print / Save as PDF</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── Key Highlights Strip ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 print:mt-4" aria-label="Key highlights">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-5 rounded-xl border border-zinc-200 bg-white hover:border-black transition">
            <div className="w-9 h-9 rounded-lg bg-zinc-100 border border-zinc-200 text-black flex items-center justify-center mb-3 print:hidden">
              <ShieldCheck size={18} />
            </div>
            <strong className="text-sm font-bold text-black block">Zero Data Selling</strong>
            <p className="text-xs text-zinc-600 mt-1 leading-relaxed">
              We do not sell, rent, or trade your data with external marketing brokers under any circumstance.
            </p>
          </div>

          <div className="p-5 rounded-xl border border-zinc-200 bg-white hover:border-black transition">
            <div className="w-9 h-9 rounded-lg bg-zinc-100 border border-zinc-200 text-black flex items-center justify-center mb-3 print:hidden">
              <Lock size={18} />
            </div>
            <strong className="text-sm font-bold text-black block">Need-to-Know Sharing</strong>
            <p className="text-xs text-zinc-600 mt-1 leading-relaxed">
              Access is strictly confined to authorized personnel and infrastructure vendors bound by NDAs.
            </p>
          </div>

          <div className="p-5 rounded-xl border border-zinc-200 bg-white hover:border-black transition">
            <div className="w-9 h-9 rounded-lg bg-zinc-100 border border-zinc-200 text-black flex items-center justify-center mb-3 print:hidden">
              <Building2 size={18} />
            </div>
            <strong className="text-sm font-bold text-black block">Companies Act, 2013</strong>
            <p className="text-xs text-zinc-600 mt-1 leading-relaxed">
              Incorporated under Indian law with registered headquarters established in Odisha, India.
            </p>
          </div>

          <div className="p-5 rounded-xl border border-zinc-200 bg-white hover:border-black transition">
            <div className="w-9 h-9 rounded-lg bg-zinc-100 border border-zinc-200 text-black flex items-center justify-center mb-3 print:hidden">
              <Scale size={18} />
            </div>
            <strong className="text-sm font-bold text-black block">Exclusive Jurisdiction</strong>
            <p className="text-xs text-zinc-600 mt-1 leading-relaxed">
              Subject to the exclusive jurisdiction and dispute resolution of the courts of Bhawanipatna, Odisha.
            </p>
          </div>
        </div>
      </section>

      {/* ── Main Layout: Sidebar Navigation + Clause Content ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-10 items-start print:block print:mt-6">
        {/* Left Sticky Sidebar (Screen Only) */}
        <aside className="sticky top-28 space-y-6 hidden lg:block print:hidden">
          <div className="p-5 rounded-xl border border-zinc-200 bg-white">
            <div className="text-[11px] font-bold uppercase tracking-wider text-zinc-400 mb-3 flex items-center gap-2">
              <FileText size={13} />
              <span>Table of Contents</span>
            </div>
            <nav aria-label="Policy sections navigation">
              <ul className="space-y-1">
                {CLAUSES.map((clause) => (
                  <li key={clause.id}>
                    <a
                      href={`#${clause.id}`}
                      className={`flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs font-medium transition ${
                        activeSection === clause.id
                          ? "bg-black text-white font-semibold"
                          : "text-zinc-600 hover:bg-zinc-100 hover:text-black"
                      }`}
                    >
                      <span className={`font-mono text-[10px] ${activeSection === clause.id ? "text-zinc-300" : "text-zinc-400"}`}>
                        {clause.num}
                      </span>
                      <span>{clause.title}</span>
                    </a>
                  </li>
                ))}
                <li>
                  <a
                    href="#privacy-concerns"
                    className={`flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs font-medium transition ${
                      activeSection === "privacy-concerns"
                        ? "bg-black text-white font-semibold"
                        : "text-zinc-600 hover:bg-zinc-100 hover:text-black"
                    }`}
                  >
                    <span className="font-mono text-[10px] text-zinc-400">07</span>
                    <span>Privacy Concerns</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          <div className="p-4 rounded-xl border border-zinc-200 bg-zinc-50 text-xs text-zinc-600 leading-relaxed">
            <strong className="block text-zinc-900 font-bold mb-1">Corporate Identification</strong>
            <p className="m-0">
              Tekkzy Intelligent Cloud Applications Pvt. Ltd.
              <br />
              Registration: Companies Act, 2013
              <br />
              Registered in Odisha, India
            </p>
          </div>
        </aside>

        {/* Right Content Column */}
        <main className="space-y-8 print:space-y-5">
          {CLAUSES.map((clause) => {
            const Icon = clause.icon;
            return (
              <article
                key={clause.id}
                id={clause.id}
                className="p-6 sm:p-8 rounded-2xl border border-zinc-200 bg-white border-l-4 border-l-black hover:border-zinc-300 hover:border-l-black transition scroll-mt-28 print:p-4 print:border-zinc-300 print:break-inside-avoid"
              >
                <header className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 mb-4 border-b border-zinc-100 print:pb-2 print:mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-zinc-100 border border-zinc-200 text-black flex items-center justify-center flex-shrink-0">
                      <Icon size={18} />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-zinc-400">
                        Clause {clause.num}
                      </span>
                      <h2 className="text-lg sm:text-xl font-bold tracking-tight text-black m-0">
                        {clause.title}
                      </h2>
                    </div>
                  </div>
                  <span className="self-start sm:self-auto text-[11px] font-medium px-2.5 py-1 rounded bg-zinc-100 border border-zinc-200 text-zinc-700 whitespace-nowrap">
                    {clause.badge}
                  </span>
                </header>

                <div className="space-y-3 text-zinc-700 text-sm leading-relaxed">
                  {clause.content.map((paragraph, idx) => (
                    <p key={idx} className="m-0">{paragraph}</p>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2 pt-4 mt-5 border-t border-zinc-100 print:pt-2 print:mt-3">
                  {clause.keyTags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-medium bg-zinc-50 border border-zinc-200 text-zinc-700"
                    >
                      <CheckCircle2 size={11} className="text-black" />
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            );
          })}

          {/* ── Have Privacy Concerns? Section Card (Monochrome Professional UI) ── */}
          <section
            id="privacy-concerns"
            className="p-7 sm:p-9 rounded-2xl border-2 border-black bg-zinc-50 text-black scroll-mt-28 print:break-inside-avoid print:p-5"
          >
            <div className="max-w-3xl">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-black text-white mb-3">
                <HelpCircle size={12} /> Dedicated Response Team
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-black m-0">
                Have Privacy Concerns?
              </h3>
              <p className="text-xs sm:text-sm text-zinc-600 mt-2 leading-relaxed">
                Our privacy team is dedicated to addressing any questions, access requests, or regulatory
                clarifications you may have regarding your business or personal data.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 mt-6">
                <div className="p-4 rounded-xl bg-white border border-zinc-200">
                  <div className="w-7 h-7 rounded-md bg-zinc-100 border border-zinc-200 text-black flex items-center justify-center mb-2.5">
                    <Mail size={14} />
                  </div>
                  <strong className="text-xs font-bold text-black block mb-1">Official Privacy Desk</strong>
                  <a
                    href={`mailto:${CONTACT_DETAILS.email}`}
                    className="text-xs text-black font-semibold underline underline-offset-2 break-all hover:text-zinc-600"
                  >
                    {CONTACT_DETAILS.email}
                  </a>
                </div>

                <div className="p-4 rounded-xl bg-white border border-zinc-200">
                  <div className="w-7 h-7 rounded-md bg-zinc-100 border border-zinc-200 text-black flex items-center justify-center mb-2.5">
                    <Building2 size={14} />
                  </div>
                  <strong className="text-xs font-bold text-black block mb-1">Registered Legal Seat</strong>
                  <span className="text-xs text-zinc-600 block leading-tight">
                    {CONTACT_DETAILS.fullAddress}
                  </span>
                </div>

                <div className="p-4 rounded-xl bg-white border border-zinc-200">
                  <div className="w-7 h-7 rounded-md bg-zinc-100 border border-zinc-200 text-black flex items-center justify-center mb-2.5">
                    <Clock size={14} />
                  </div>
                  <strong className="text-xs font-bold text-black block mb-1">Response SLA</strong>
                  <span className="text-xs text-zinc-600 block">
                    {CONTACT_DETAILS.supportSLA}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-3 mt-6 flex-wrap print:hidden">
                <a
                  href={`mailto:${CONTACT_DETAILS.email}?subject=Privacy%20Inquiry%20-%20Tekkzy`}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs font-bold bg-black text-white hover:bg-zinc-800 transition"
                >
                  <Mail size={14} />
                  <span>Email Privacy Officer</span>
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs font-bold bg-white border border-zinc-300 text-black hover:bg-zinc-100 hover:border-black transition"
                >
                  <span>Contact Consultation Desk</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </section>
        </main>
      </div>

      {/* ── Official Print-Only Document Footer ── */}
      <footer className="hidden print:block border-t border-black pt-4 mt-8 max-w-5xl mx-auto px-4 text-[10px] text-zinc-600" aria-hidden="true">
        <div className="flex justify-between items-end">
          <div>
            <strong className="text-black">Tekkzy Intelligent Cloud Applications Pvt. Ltd.</strong> — Corporate Governance & Legal Affairs
            <br />
            Registered Office: Bhawanipatna, Kalahandi, Odisha - 766001, India | Email: {CONTACT_DETAILS.email} | Web: www.tekkzy.com
          </div>
          <div className="text-right font-medium text-black">
            <div>Official Corporate Policy Document</div>
            <div>Jurisdiction: Bhawanipatna, Odisha</div>
          </div>
        </div>
      </footer>
    </div>
  );
}
