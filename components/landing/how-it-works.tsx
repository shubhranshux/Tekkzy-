"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring, MotionValue } from "framer-motion";
import { Search, Settings, Database, Users, Rocket } from "lucide-react";
import "./how-it-works.css";

interface StepItem {
  num: string;
  title: string;
  desc: string;
  icon: React.ElementType;
  accent: string;
  bgLight: string;
  borderColor: string;
  badgeBg: string;
  badgeBorder: string;
  shadowColor: string;
  deliverables: string[];
}

const steps: StepItem[] = [
  {
    num: "01",
    title: "Discovery & Audit",
    desc: "We map your workflows, audit your tech stack, and identify bottlenecks.",
    icon: Search,
    accent: "#2563eb",
    bgLight: "#f0f7fe",
    borderColor: "#dbeafe",
    badgeBg: "#eff6ff",
    badgeBorder: "#bfdbfe",
    shadowColor: "rgba(37, 99, 235, 0.16)",
    deliverables: [
      "Process Bottleneck Audit",
      "Tech Stack & Data Mapping",
      "Architecture Blueprint",
    ],
  },
  {
    num: "02",
    title: "Architecture & Setup",
    desc: "Custom modules configured to match your business logic and organizational structure.",
    icon: Settings,
    accent: "#7c3aed",
    bgLight: "#f6f3ff",
    borderColor: "#ede9fe",
    badgeBg: "#f5f3ff",
    badgeBorder: "#ddd6fe",
    shadowColor: "rgba(124, 58, 237, 0.16)",
    deliverables: [
      "Custom ERP Config",
      "Role-based Security Rules",
      "Webhook & API Linking",
    ],
  },
  {
    num: "03",
    title: "Data Migration",
    desc: "Zero-loss automated migration with cryptographic integrity verification.",
    icon: Database,
    accent: "#d97706",
    bgLight: "#fefde8",
    borderColor: "#fef08a",
    badgeBg: "#fef9c3",
    badgeBorder: "#fde047",
    shadowColor: "rgba(217, 119, 6, 0.18)",
    deliverables: [
      "Zero-loss Data Transfer",
      "Cryptographic Verification",
      "Staging Integrity Drill",
    ],
  },
  {
    num: "04",
    title: "Team Training",
    desc: "Interactive sandbox drills and auto-generated SOPs for every department.",
    icon: Users,
    accent: "#e11d48",
    bgLight: "#fff1f2",
    borderColor: "#ffe4e6",
    badgeBg: "#ffe4e6",
    badgeBorder: "#fecdd3",
    shadowColor: "rgba(225, 29, 72, 0.16)",
    deliverables: [
      "Hands-on Team Sandboxes",
      "Department Video SOPs",
      "Manager Dashboard QA",
    ],
  },
  {
    num: "05",
    title: "Go Live & Support",
    desc: "Zero-downtime launch with 24/7 monitoring and dedicated SLA support.",
    icon: Rocket,
    accent: "#16a34a",
    bgLight: "#f0fdf4",
    borderColor: "#dcfce7",
    badgeBg: "#dcfce7",
    badgeBorder: "#bbf7d0",
    shadowColor: "rgba(22, 163, 74, 0.16)",
    deliverables: [
      "Zero-downtime Cutover",
      "Real-time Telemetry Monitor",
      "24/7 Dedicated SLA Lead",
    ],
  },
];

interface HiwCardProps {
  step: StepItem;
  idx: number;
  isHovered: boolean;
  setHovered: (idx: number | null) => void;
  smoothProgress: MotionValue<number>;
  isDesktop: boolean;
}

function HiwCardItem({
  step,
  idx,
  isHovered,
  setHovered,
  smoothProgress,
  isDesktop,
}: HiwCardProps) {
  const Icon = step.icon;

  // Symmetrical inverted U coordinates: Center (idx=2) is at peak, side cards curve down symmetrically
  const targetY = idx === 2 ? 0 : Math.abs(idx - 2) === 1 ? 10 : 28;
  const targetRotate = (idx - 2) * 1.9; // -3.8deg, -1.9deg, 0deg, +1.9deg, +3.8deg
  const shiftPercent = (2 - idx) * 75; // Symmetrical horizontal fan-out

  // Scroll animations into accurate inverted U curve
  const xTransform = useTransform(smoothProgress, [0.05, 0.85], [`${shiftPercent}%`, "0%"]);
  const yTransform = useTransform(smoothProgress, [0.05, 0.85], [0, targetY]);
  const rotateTransform = useTransform(smoothProgress, [0.05, 0.85], [0, targetRotate]);
  const opacityTransform = useTransform(
    smoothProgress,
    [0.05, 0.45],
    [idx === 2 ? 1 : 0.7, 1]
  );

  const baseZ = idx === 2 ? 10 : Math.abs(idx - 2) === 1 ? 6 : 2;
  const zIndex = isHovered ? 40 : baseZ;

  return (
    <div className="hiw-card-col">
      <motion.div
        className={`hiw-step-item hiw-step-color-${idx} ${idx === 2 ? "is-center-card" : ""} ${
          isHovered ? "is-hovered" : ""
        }`}
        style={{
          background: step.bgLight,
          border: `1px solid ${step.borderColor}`,
          boxShadow: isHovered
            ? `0 24px 50px -10px ${step.shadowColor}, 0 8px 20px rgba(0, 0, 0, 0.06)`
            : `0 14px 34px -8px ${step.shadowColor}, 0 4px 12px rgba(0, 0, 0, 0.03)`,
          x: isDesktop ? xTransform : 0,
          y: isHovered ? (isDesktop ? targetY - 12 : -8) : (isDesktop ? yTransform : 0),
          rotate: isHovered ? 0 : (isDesktop ? rotateTransform : 0),
          scale: isHovered ? 1.025 : 1,
          opacity: isDesktop ? opacityTransform : 1,
          transformOrigin: "center 40%",
          zIndex,
        } as any}
        onMouseEnter={() => setHovered(idx)}
        onMouseLeave={() => setHovered(null)}
      >
        {/* Floating Number Badge on Top Edge */}
        <div
          className="hiw-card-top-badge"
          style={{
            color: step.accent,
            background: step.badgeBg,
            borderColor: step.badgeBorder,
          }}
        >
          {step.num}
        </div>

        {/* Crisp White Rounded Icon Box */}
        <div
          className="hiw-card-icon-box"
          style={{
            borderColor: step.borderColor,
          }}
        >
          <Icon size={22} color={step.accent} strokeWidth={2.2} />
        </div>

        {/* Card Title */}
        <h4 className="hiw-step-title">{step.title}</h4>

        {/* Card Description */}
        <p className="hiw-step-desc">{step.desc}</p>

        {/* Deliverables Checklist with Colored Dots */}
        <ul className="hiw-deliverables">
          {step.deliverables.map((item, dIdx) => (
            <li key={dIdx} className="hiw-deliverable-item">
              <span
                className="hiw-deliverable-dot"
                style={{ backgroundColor: step.accent }}
              />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
}

export default function HowItWorksSection() {
  const [hovered, setHovered] = useState<number | null>(null);
  const [isDesktop, setIsDesktop] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkWidth = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };
    checkWidth();
    window.addEventListener("resize", checkWidth);
    return () => window.removeEventListener("resize", checkWidth);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 90%", "start 30%"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 24,
    restDelta: 0.001,
  });

  return (
    <section className="hiw-section" id="how-it-works" ref={containerRef}>
      {/* Header matching reference image */}
      <div className="hiw-header">
        <div className="hiw-eyebrow">OUR PROCESS</div>
        <h2 className="hiw-title">
          FROM BLUEPRINT TO <span className="hiw-title-highlight">IMPACT</span>
        </h2>
        <p className="hiw-subtitle">
          A streamlined 5-phase implementation pipeline to get your business
          fully operational in under two weeks.
        </p>
      </div>

      {/* Symmetrical Track Container with Equal Side Padding */}
      <div className="hiw-scroll-track">
        {/* Subtle connecting wave curve behind badges */}
        <div className="hiw-wave-wrap" aria-hidden="true">
          <svg
            className="hiw-wave-line"
            viewBox="0 0 1000 60"
            preserveAspectRatio="none"
          >
            <path
              d="M 100 42 Q 300 20, 500 8 Q 700 20, 900 42"
              fill="none"
              stroke="#e2e8f0"
              strokeWidth="1.5"
            />
          </svg>
        </div>

        <div className="hiw-steps-row">
          {steps.map((step, idx) => (
            <HiwCardItem
              key={step.num}
              step={step}
              idx={idx}
              isHovered={hovered === idx}
              setHovered={setHovered}
              smoothProgress={smoothProgress}
              isDesktop={isDesktop}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
