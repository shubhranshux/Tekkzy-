"use client";

import { useEffect, useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  Layers,
  Bot,
  BarChart3,
  Scaling,
  Sparkles,
  ShieldCheck,
  Lock,
  KeyRound,
  UserCheck,
  Workflow,
  Server,
  Eye,
  Zap,
  Globe,
  Database,
  Brain,
  TrendingUp,
  Users,
  Package,
  Megaphone,
  Search,
  ChevronRight,
  CircleDot,
  Shield,
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/* ── animation helpers ── */
const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.15 },
  transition: { duration: 0.65, delay, ease: EASE },
});

const fadeLeft = (delay = 0) => ({
  initial: { opacity: 0, x: -40 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true, amount: 0.15 },
  transition: { duration: 0.65, delay, ease: EASE },
});

const fadeRight = (delay = 0) => ({
  initial: { opacity: 0, x: 40 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true, amount: 0.15 },
  transition: { duration: 0.65, delay, ease: EASE },
});

const scaleIn = (delay = 0) => ({
  initial: { opacity: 0, scale: 0.85 },
  whileInView: { opacity: 1, scale: 1 },
  viewport: { once: true, amount: 0.15 },
  transition: { duration: 0.55, delay, ease: EASE },
});

/* ── data ── */
const whyChoose = [
  {
    icon: Layers,
    title: "Connected Solutions",
    desc: "Bring essential business operations together through one connected platform.",
    color: "blue",
  },
  {
    icon: Bot,
    title: "AI & Automation",
    desc: "Reduce repetitive work and make everyday business processes smarter.",
    color: "purple",
  },
  {
    icon: BarChart3,
    title: "Business Intelligence",
    desc: "Turn business data into meaningful insights for better decisions.",
    color: "green",
  },
  {
    icon: Scaling,
    title: "Scalable Technology",
    desc: "Built to support businesses as their operations and requirements grow.",
    color: "orange",
  },
  {
    icon: Sparkles,
    title: "Simple Experience",
    desc: "Powerful business technology without unnecessary complexity.",
    color: "teal",
  },
];

const securityItems = [
  { icon: Lock, label: "Secure Access" },
  { icon: ShieldCheck, label: "Data Protection" },
  { icon: UserCheck, label: "Controlled Permissions" },
  { icon: Workflow, label: "Secure Workflows" },
  { icon: Server, label: "Reliable Infrastructure" },
  { icon: Eye, label: "Privacy-Focused" },
];

const ecosystem = [
  { icon: Database, label: "ERP", color: "#1760ed" },
  { icon: Users, label: "CRM", color: "#20a68c" },
  { icon: Brain, label: "AI", color: "#6b56e1" },
  { icon: Zap, label: "Automation", color: "#e75d20" },
  { icon: BarChart3, label: "Analytics", color: "#1760ed" },
  { icon: Users, label: "HR", color: "#d99c0b" },
  { icon: Package, label: "Inventory", color: "#20a68c" },
  { icon: Megaphone, label: "Marketing", color: "#ec4d80" },
  { icon: Search, label: "SEO", color: "#6b56e1" },
];

export default function AboutPage() {
  const reduced = useReducedMotion();
  const ecosystemRef = useRef<HTMLDivElement>(null);

  /* ── GSAP scroll animations ── */
  useEffect(() => {
    if (reduced) return;

    // Ecosystem orbit rotation
    if (ecosystemRef.current) {
      const nodes = ecosystemRef.current.querySelectorAll(".eco-node");
      nodes.forEach((node, i) => {
        gsap.fromTo(
          node,
          { opacity: 0, scale: 0.4 },
          {
            opacity: 1,
            scale: 1,
            duration: 0.5,
            delay: i * 0.08,
            ease: "back.out(1.7)",
            scrollTrigger: {
              trigger: ecosystemRef.current,
              start: "top 80%",
              once: true,
            },
          }
        );
      });
    }

    return () => ScrollTrigger.getAll().forEach((st) => st.kill());
  }, [reduced]);

  return (
    <div className="about-page">
      {/* ═══════════════ HERO ═══════════════ */}
      <section className="about-hero">
        {/* Background image */}
        <div className="about-hero-bg-image" />
        {/* Gradient overlay: white on left fading to transparent on right */}
        <div className="about-hero-overlay" />

        <div className="about-hero-inner section-shell">
          {/* All content on the left */}
          <motion.div className="about-hero-content" {...fadeLeft(0)}>
            {/* Eyebrow */}
            <div className="about-hero-eyebrow-row">
              <span className="pill">
                <CircleDot size={13} /> ABOUT TEKKZY
              </span>
              <span className="about-hero-eyebrow-line" />
              <span className="about-hero-eyebrow-sub">BUILT FOR A SMARTER TOMORROW</span>
            </div>

            {/* Headline */}
            <h1 className="about-hero-h1">
              One Platform.
              <br />
              <span className="about-hero-h1-accent">Smarter</span> Business.
            </h1>

            {/* Description */}
            <p className="about-hero-desc">
              Tekkzy is a modern business technology platform designed to help
              businesses manage, automate, and grow their operations —
              bringing essential capabilities together in one connected
              ecosystem.
            </p>

            {/* CTAs */}
            <div className="about-hero-ctas">
              <Link href="/product" className="button">
                Explore Products <ArrowRight size={15} />
              </Link>
              <Link href="/contact" className="button button-outline">
                Contact Us
              </Link>
            </div>

            {/* Capability row */}
            <motion.div className="about-hero-caps" {...fade(0.2)}>
              {[
                { icon: Layers, label: "Connected Business Tools" },
                { icon: Workflow, label: "Smarter Workflows" },
                { icon: TrendingUp, label: "Data-Driven Growth" },
                { icon: Sparkles, label: "Built for Modern Business" },
              ].map((cap) => (
                <div key={cap.label} className="about-hero-cap">
                  <span className="about-hero-cap-icon">
                    <cap.icon size={16} />
                  </span>
                  <span className="about-hero-cap-label">{cap.label}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>


      {/* ═══════════════ WHAT IS TEKKZY ═══════════════ */}
      <section className="about-what section-shell">
        <div className="about-what-grid">
          <motion.div className="about-what-left" {...fadeLeft(0)}>
            <span className="eyebrow">WHAT IS TEKKZY</span>
            <h2>
              The <span>Connected</span> Business Ecosystem
            </h2>
            <p>
              Tekkzy brings essential business capabilities together in one
              connected ecosystem, including ERP, CRM, AI Assistant, Automation,
              Analytics, HR, Inventory, Digital Marketing, and SEO.
            </p>
            <p>
              Instead of juggling disconnected tools, Tekkzy provides a unified
              technology platform that helps organizations reduce friction and
              manage their operations more efficiently.
            </p>
          </motion.div>
          <motion.div className="about-what-right" {...fadeRight(0.15)}>
            <div className="about-what-visual">
              <div className="about-orbit-ring ring-1" />
              <div className="about-orbit-ring ring-2" />
              <div className="about-orbit-ring ring-3" />
              <div className="about-core-badge">
                <Globe size={28} />
                <span>Tekkzy</span>
              </div>
              {/* floating module pills */}
              {["ERP", "CRM", "AI", "HR", "SEO"].map((label, i) => (
                <motion.span
                  key={label}
                  className={`about-float-pill fp-${i}`}
                  animate={
                    reduced
                      ? {}
                      : {
                          y: [0, -8, 0],
                          rotate: [0, i % 2 === 0 ? 3 : -3, 0],
                        }
                  }
                  transition={{
                    duration: 3 + i * 0.4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  {label}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════ WHY CHOOSE ═══════════════ */}
      <section className="about-why section-shell">
        <motion.div className="about-why-header" {...fade(0)}>
          <span className="eyebrow">WHY CHOOSE TEKKZY</span>
          <h2>
            Built for Modern <span>Business</span>
          </h2>
          <p>
            Technology should simplify business, not complicate it. Tekkzy
            combines intelligent design with powerful capabilities.
          </p>
        </motion.div>

        <div className="about-why-grid">
          {whyChoose.map((item, i) => (
            <motion.div
              key={item.title}
              className="about-why-card"
              {...fade(i * 0.08)}
            >
              <div className={`about-why-icon ${item.color}`}>
                <item.icon size={22} />
              </div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
              <div className="about-why-shine" />
            </motion.div>
          ))}
        </div>
      </section>

      {/* ═══════════════ SECURITY ═══════════════ */}
      <section className="about-security">
        <div className="about-security-bg" />
        <div className="section-shell about-security-inner">
          <motion.div className="about-security-left" {...fadeLeft(0)}>
            <span className="eyebrow" style={{ color: "#7da9ff" }}>
              BUSINESS SECURITY
            </span>
            <h2>
              Your Business Data Deserves <span>Protection</span>
            </h2>
            <p>
              Tekkzy focuses on building secure and reliable business
              experiences through proven security practices and reliable
              infrastructure.
            </p>
            <Link href="/contact" className="button" style={{ marginTop: 28 }}>
              Learn More <ArrowRight size={15} />
            </Link>
          </motion.div>
          <div className="about-security-grid">
            {securityItems.map((item, i) => (
              <motion.div
                key={item.label}
                className="about-security-card"
                {...scaleIn(i * 0.07)}
              >
                <div className="about-security-card-icon">
                  <item.icon size={20} />
                </div>
                <span>{item.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ MISSION PILLARS ═══════════════ */}
      <section className="about-mission-section">
        {/* Side decorative text — left */}
        <div className="about-mission-side-text about-mission-side-left">
          <span>A SMARTER</span>
          <span>TOMORROW</span>
          <span>TOGETHER</span>
        </div>
        {/* Side decorative text — right */}
        <div className="about-mission-side-text about-mission-side-right">
          <span>PEOPLE</span>
          <span>TECHNOLOGY</span>
          <span>PROGRESS</span>
          <span>TOGETHER</span>
        </div>

        <div className="section-shell about-mission-inner">
          <motion.div className="about-mission-header" {...fade(0)}>
            <span className="pill"><CircleDot size={13} /> OUR MISSION</span>
            <h2>
              To become the <span className="about-mission-accent">technology partner</span> that
              helps businesses of every size become scalable, smarter, digital,
              and more competitive through AI and modern software.
            </h2>
          </motion.div>

          <motion.div className="about-mission-pillars" {...fade(0.15)}>
            {[
              {
                icon: BarChart3,
                title: "Scalable",
                desc: "Build a foundation that grows with you. Our platform adapts to your increasing operational demands without letting technology become a bottleneck to your expansion.",
              },
              {
                icon: Brain,
                title: "Smarter",
                desc: "Turn your data into a strategic advantage. We embed AI and intelligent automation into everyday workflows so you can make faster, more accurate business decisions.",
              },
              {
                icon: Globe,
                title: "Digital",
                desc: "Modernize your entire business operation from the ground up. Move away from fragmented, manual processes into a unified, digital-first operational ecosystem.",
              },
              {
                icon: TrendingUp,
                title: "More Competitive",
                desc: "Use advanced technology to stay ahead in a rapidly changing world. We equip you with the modern tools necessary to outperform competitors and capture new markets.",
              },
            ].map((pillar, i) => (
              <motion.div
                key={pillar.title}
                className="about-mission-pillar"
                {...fade(0.1 + i * 0.08)}
              >
                <div className="about-mission-pillar-icon">
                  <pillar.icon size={22} />
                </div>
                <h3>{pillar.title}</h3>
                <p>{pillar.desc}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Bottom divider */}
          <motion.div className="about-mission-bottom" {...fade(0.3)}>
            <span className="about-mission-bottom-line" />
            <span className="about-mission-bottom-text">TECHNOLOGY FOR A BRIGHTER TOMORROW</span>
            <span className="about-mission-bottom-line" />
          </motion.div>
        </div>
      </section>

      {/* ═══════════════ OUR VALUES ═══════════════ */}
      <section className="about-values section-shell">
        <div className="about-values-grid">
          <motion.div className="about-values-left" {...fadeLeft(0)}>
            <span className="pill about-values-pill">
              <span className="dot"></span> OUR VALUES
            </span>
            <h2>
              Principles That<br />
              <span>Guide Us</span>
            </h2>
            <p>
              These values shape how we build, work, and support the businesses
              we serve. They keep us focused on what truly matters.
            </p>
            <div className="about-values-footer-line">
              <span className="line"></span>
              <span className="text">PEOPLE + PURPOSE + PROGRESS</span>
            </div>
            {/* Corner decorative text matching the design */}
            <div className="about-values-corner-text about-values-corner-left">
              <span>A BRIGHTER</span>
              <span>TOMORROW</span>
              <span>TOGETHER</span>
            </div>
          </motion.div>
          
          <div className="about-values-cards">
            {[
              {
                num: "01",
                title: "Customer Focus",
                desc: "Your success is our priority. We listen, understand, and build with your goals in mind.",
                icon: Users,
                theme: "blue",
              },
              {
                num: "02",
                title: "Innovation",
                desc: "We embrace what's next. We explore new ideas and technologies to create smarter solutions.",
                icon: Zap,
                theme: "purple",
              },
              {
                num: "03",
                title: "Simplicity",
                desc: "Powerful technology should be easy to use. We keep things simple, practical, and effective.",
                icon: Layers,
                theme: "green",
              },
              {
                num: "04",
                title: "Trust",
                desc: "We build for the long term. We believe in transparency, reliability, and lasting partnerships.",
                icon: Shield,
                theme: "orange",
              },
            ].map((val, i) => (
              <motion.div
                key={val.num}
                className={`about-values-card theme-${val.theme}`}
                {...fade(i * 0.1)}
              >
                <div className="about-values-icon">
                  <val.icon size={20} />
                </div>
                <div className="about-values-num">{val.num}</div>
                <h3>{val.title}</h3>
                <div className="about-values-divider"></div>
                <p>{val.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="about-values-corner-text about-values-corner-right">
            <span>TECHNOLOGY</span>
            <span>FOR PEOPLE</span>
            <span className="line"></span>
          </div>
        </div>
      </section>

      {/* ═══════════════ CTA ═══════════════ */}
      <section className="about-cta">
        <div className="about-cta-bg-glow" />
        <motion.div className="about-cta-inner section-shell" {...fade(0)}>
          <span className="eyebrow" style={{ color: "#9abaff" }}>
            BUILD SMARTER WITH TEKKZY
          </span>
          <h2>
            One Platform. Connected Operations.
            <br />
            <span>Smarter Business.</span>
          </h2>
          <div className="about-cta-actions">
            <Link href="/product" className="button">
              Explore Products <ArrowRight size={16} />
            </Link>
            <Link
              href="/contact"
              className="button"
              style={{
                background: "rgba(255,255,255,.1)",
                borderColor: "rgba(255,255,255,.25)",
                boxShadow: "none",
              }}
            >
              Contact Us <ChevronRight size={16} />
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
