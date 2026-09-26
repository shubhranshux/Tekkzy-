"use client";

import { useState } from "react";
import {
  ArrowRight,
  CheckCircle2,
  Cpu,
  Database,
  Layers,
  Rocket,
  Users,
} from "lucide-react";
import Link from "next/link";

const steps = [
  {
    num: "01",
    title: "Discovery & Audit",
    desc: "We map your workflows, audit your tech stack, and identify bottlenecks.",
    icon: Layers,
    accent: "#1762ef",
  },
  {
    num: "02",
    title: "Architecture & Setup",
    desc: "Custom modules configured to match your business logic and org structure.",
    icon: Cpu,
    accent: "#3f60ea",
  },
  {
    num: "03",
    title: "Data Migration",
    desc: "Zero-loss automated migration with cryptographic integrity verification.",
    icon: Database,
    accent: "#159766",
  },
  {
    num: "04",
    title: "Team Training",
    desc: "Interactive sandbox drills and auto-generated SOPs for every department.",
    icon: Users,
    accent: "#e05690",
  },
  {
    num: "05",
    title: "Go Live & Support",
    desc: "Zero-downtime launch with 24/7 monitoring and dedicated SLA support.",
    icon: Rocket,
    accent: "#d97b1e",
  },
];

export default function HowItWorksSection() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section className="hiw-section landing-section" id="how-it-works">
      <div className="hiw-header">
        <div className="landing-label">
          <span /> How It Works
        </div>
        <h2>
          From Blueprint to <span>Impact</span>
        </h2>
        <p>
          A streamlined 5-phase implementation pipeline to get your business
          fully operational in under two weeks.
        </p>
      </div>

      <div className="hiw-steps-row">
        {steps.map((step, idx) => {
          const Icon = step.icon;
          const isHovered = hovered === idx;
          return (
            <div
              key={step.num}
              className={`hiw-step-item ${isHovered ? "is-hovered" : ""}`}
              style={{ "--step-accent": step.accent } as React.CSSProperties}
              onMouseEnter={() => setHovered(idx)}
              onMouseLeave={() => setHovered(null)}
            >
              {/* Connector line */}
              {idx < steps.length - 1 && <div className="hiw-connector" />}

              <div className="hiw-step-icon-ring">
                <Icon size={20} />
              </div>
              <span className="hiw-step-num">{step.num}</span>
              <h4 className="hiw-step-title">{step.title}</h4>
              <p className="hiw-step-desc">{step.desc}</p>
            </div>
          );
        })}
      </div>

      <div className="hiw-bottom-bar">
        <div className="hiw-stat-chips">
          <span><CheckCircle2 size={13} /> 99.99% Uptime SLA</span>
          <span><CheckCircle2 size={13} /> Zero Data Loss</span>
          <span><CheckCircle2 size={13} /> &lt; 15 Min Response</span>
        </div>
        <Link href="/contact" className="hiw-cta-link">
          Start Your Project <ArrowRight size={14} />
        </Link>
      </div>
    </section>
  );
}
