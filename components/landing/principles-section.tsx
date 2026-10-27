"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import "./principles-section.css";

interface Principle {
  number: string;
  title: string;
  description: string;
  commitments: string[];
  stat: string;
  statLabel: string;
  href: string;
}

const PRINCIPLES: Principle[] = [
  {
    number: "01",
    title: "Customer Focus",
    description:
      "We design every architecture and workflow around your real-world operational challenges. Your measurable success defines our work.",
    commitments: [
      "Outcome-driven engineering roadmaps",
      "Dedicated senior solution architects",
      "Rapid feedback and iterative loops",
    ],
    stat: "99.4%",
    statLabel: "Client Satisfaction",
    href: "/about",
  },
  {
    number: "02",
    title: "Continuous Innovation",
    description:
      "We actively incorporate autonomous intelligence, AI-driven automation, and modern cloud stacks to give you an unfair advantage.",
    commitments: [
      "Autonomous AI pipelines & agents",
      "Modern cloud-native microservices",
      "Continuous R&D feature drops",
    ],
    stat: "10x",
    statLabel: "Faster Deployments",
    href: "/about",
  },
  {
    number: "03",
    title: "Radical Simplicity",
    description:
      "Enterprise systems shouldn't require months of training. We eliminate bloat so your teams can adopt, build, and scale with joy.",
    commitments: [
      "Unified intuitive dashboard UX",
      "Self-service automated provisioning",
      "Zero operational friction & bloat",
    ],
    stat: "< 1 day",
    statLabel: "Time to Onboard",
    href: "/about",
  },
  {
    number: "04",
    title: "Uncompromising Trust",
    description:
      "Security, compliance, and transparent governance are non-negotiable fundamentals embedded from the first line of code.",
    commitments: [
      "Zero-trust end-to-end security model",
      "Automated continuous compliance audits",
      "99.99% enterprise uptime SLA guarantee",
    ],
    stat: "99.99%",
    statLabel: "Guaranteed SLA",
    href: "/security",
  },
];

export default function PrinciplesSection() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleExpand = (num: string) => {
    setExpandedId((prev) => (prev === num ? null : num));
  };

  return (
    <section
      className="principles-fmi-section"
      id="principles"
      aria-labelledby="principles-heading"
    >
      <div className="principles-fmi-container">
        {/* Section Header */}
        <div className="principles-fmi-header">
          <div className="principles-fmi-eyebrow">
            <span className="principles-fmi-eyebrow-dot" />
            Our Guiding Philosophy
          </div>
          <h2 id="principles-heading">
            Principles That <span>Guide Everything We Build</span>
          </h2>
          <p>
            These non-negotiable standards shape our engineering discipline, customer partnerships, and long-term vision.
          </p>
        </div>

        {/* Stacked Horizontal Banner Cards with Tactile Depth */}
        <div className="principles-fmi-stack" role="region" aria-label="Guiding Principles">
          {PRINCIPLES.map((item) => {
            const isExpanded = expandedId === item.number;

            return (
              <div
                key={item.number}
                className={`principles-fmi-card ${isExpanded ? "is-expanded" : ""}`}
                onClick={() => toggleExpand(item.number)}
                role="button"
                tabIndex={0}
                aria-expanded={isExpanded}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    toggleExpand(item.number);
                  }
                }}
              >
                {/* Left: Index Number */}
                <div className="principles-fmi-num">{item.number}</div>

                {/* Middle: Title & Description */}
                <div className="principles-fmi-body">
                  <h3 className="principles-fmi-title">{item.title}</h3>
                  <p className="principles-fmi-desc">{item.description}</p>

                  {/* Silky Smooth Animated Dropdown on Click */}
                  <AnimatePresence initial={false}>
                    {isExpanded && (
                      <motion.div
                        key="details"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.38, ease: [0.16, 1, 0.3, 1] }}
                        className="principles-fmi-details-wrapper"
                        style={{ overflow: "hidden" }}
                      >
                        <div className="principles-fmi-details">
                          {item.commitments.map((commit) => (
                            <div key={commit} className="principles-fmi-commit-item">
                              <span className="principles-fmi-commit-dot" />
                              <span>{commit}</span>
                            </div>
                          ))}
                          <div className="principles-fmi-stat-badge">
                            <strong>{item.stat}</strong>
                            <span>{item.statLabel}</span>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Right: Circular Arrow Action Button */}
                <Link
                  href={item.href}
                  className="principles-fmi-arrow-btn"
                  aria-label={`Learn more about ${item.title}`}
                  onClick={(e) => e.stopPropagation()}
                >
                  <ArrowRight size={20} className="principles-fmi-arrow-icon" />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
