"use client";

import { motion } from "framer-motion";
import {
  MonitorSmartphone,
  Building2,
  Rocket,
  Database,
  Cloud,
  ArrowRight,
  Layers,
} from "lucide-react";
import Link from "next/link";

const solutions = [
  {
    slug: "digital-experience",
    title: "Digital Experience",
    tagline: "Craft interfaces that convert.",
    desc: "We engineer high-performance web apps, native mobile apps, PWAs, and design systems that deliver measurable business outcomes across every digital touchpoint.",
    icon: <MonitorSmartphone size={28} />,
    color: "#1760ed",
    gradient: "linear-gradient(135deg, #1760ed, #0840b2)",
    bgLight: "#f0f5ff",
    metrics: ["200+ Apps Delivered", "45% Avg Conversion Lift"],
  },
  {
    slug: "core-business",
    title: "Core Business Operations",
    tagline: "Modernize your core. Automate everything.",
    desc: "Intelligent, scalable ERP and operational systems that automate manual workflows, unify data silos, and provide real-time visibility into your entire business.",
    icon: <Building2 size={28} />,
    color: "#e95812",
    gradient: "linear-gradient(135deg, #e95812, #b54009)",
    bgLight: "#fff5ec",
    metrics: ["60% Less Manual Entry", "3.5x Faster Processing"],
  },
  {
    slug: "growth-applications",
    title: "Growth & Applications",
    tagline: "Scale revenue. Build products.",
    desc: "Bespoke software and data-driven marketing engines designed to aggressively capture market share through tailored applications and growth strategies.",
    icon: <Rocket size={28} />,
    color: "#896dff",
    gradient: "linear-gradient(135deg, #896dff, #5b40cc)",
    bgLight: "#f5f0ff",
    metrics: ["3x Revenue Growth", "200+ Products Shipped"],
  },
  {
    slug: "data-layer",
    title: "The Data Layer",
    tagline: "Your most valuable asset, unlocked.",
    desc: "Robust data pipelines, data lakes, and warehouses that turn chaotic raw data into structured, actionable business intelligence. Stop guessing — start knowing.",
    icon: <Database size={28} />,
    color: "#1ba77e",
    gradient: "linear-gradient(135deg, #1ba77e, #0e7a5a)",
    bgLight: "#edfaf4",
    metrics: ["10x Query Speed", "99.9% Data Accuracy"],
  },
  {
    slug: "cloud-infrastructure",
    title: "Cloud Infrastructure",
    tagline: "Infinitely scalable. Secure by design.",
    desc: "Enterprise-grade cloud infrastructure on AWS, Google Cloud, and Azure — architected, deployed, and managed so you can focus on your product instead of servers.",
    icon: <Cloud size={28} />,
    color: "#36b2ba",
    gradient: "linear-gradient(135deg, #36b2ba, #1f8a91)",
    bgLight: "#ecfbfc",
    metrics: ["99.99% Uptime", "40% Cost Reduction"],
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" as const },
  }),
};

export default function SolutionsIndexPage() {
  return (
    <main>
      {/* ── HERO ── */}
      <section
        className="solution-hero"
        style={{
          padding: "120px 24px 80px",
          backgroundImage:
            "radial-gradient(circle at 50% 0%, #e8f0ff, #fff 70%)",
        }}
      >
        <motion.span
          className="pill"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <Layers size={14} /> OUR SOLUTIONS
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={{
            fontSize: "clamp(42px, 6vw, 68px)",
            letterSpacing: "-1.5px",
            marginTop: "24px",
          }}
        >
          One Platform.
          <br />
          Every Capability.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          style={{
            maxWidth: "680px",
            margin: "24px auto 0",
            fontSize: "18px",
            lineHeight: "1.7",
            color: "#4a5d7a",
          }}
        >
          From crafting pixel-perfect interfaces to architecting enterprise cloud
          infrastructure — Tekkzy delivers end-to-end technology solutions that
          connect your software, data, AI, and operations into one intelligent
          ecosystem.
        </motion.p>
      </section>

      {/* ── SOLUTION CARDS ── */}
      <section
        style={{
          padding: "20px 24px 100px",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        <div
          style={{
            display: "grid",
            gap: "24px",
          }}
        >
          {solutions.map((s, i) => (
            <motion.div
              key={s.slug}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeUp}
            >
              <Link
                href={`/solutions/${s.slug}`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "72px 1fr auto",
                    gap: "28px",
                    alignItems: "center",
                    padding: "36px 40px",
                    background: "#fff",
                    border: "1px solid #e2e8f0",
                    borderRadius: "16px",
                    transition:
                      "transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease",
                    cursor: "pointer",
                  }}
                  className="solution-index-card"
                  onMouseEnter={(e) => {
                    const el = e.currentTarget;
                    el.style.transform = "translateY(-4px)";
                    el.style.boxShadow = `0 16px 40px ${s.color}15`;
                    el.style.borderColor = `${s.color}40`;
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget;
                    el.style.transform = "translateY(0)";
                    el.style.boxShadow = "none";
                    el.style.borderColor = "#e2e8f0";
                  }}
                >
                  {/* Icon */}
                  <div
                    style={{
                      width: "72px",
                      height: "72px",
                      borderRadius: "16px",
                      background: s.gradient,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#fff",
                      flexShrink: 0,
                    }}
                  >
                    {s.icon}
                  </div>

                  {/* Content */}
                  <div>
                    <h3
                      style={{
                        fontSize: "22px",
                        fontWeight: 800,
                        color: "#0b152a",
                        marginBottom: "6px",
                        letterSpacing: "-0.5px",
                      }}
                    >
                      {s.title}
                    </h3>
                    <p
                      style={{
                        fontSize: "14px",
                        fontWeight: 700,
                        color: s.color,
                        marginBottom: "8px",
                        letterSpacing: "0.2px",
                      }}
                    >
                      {s.tagline}
                    </p>
                    <p
                      style={{
                        fontSize: "15px",
                        color: "#4a5d7a",
                        lineHeight: "1.6",
                        margin: 0,
                        maxWidth: "600px",
                      }}
                    >
                      {s.desc}
                    </p>
                    {/* Metrics */}
                    <div
                      style={{
                        display: "flex",
                        gap: "20px",
                        marginTop: "14px",
                        flexWrap: "wrap",
                      }}
                    >
                      {s.metrics.map((m) => (
                        <span
                          key={m}
                          style={{
                            fontSize: "12px",
                            fontWeight: 700,
                            color: "#6b7c93",
                            padding: "4px 10px",
                            background: s.bgLight,
                            borderRadius: "6px",
                            letterSpacing: "0.3px",
                          }}
                        >
                          {m}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Arrow */}
                  <div
                    style={{
                      width: "44px",
                      height: "44px",
                      borderRadius: "50%",
                      background: s.bgLight,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: s.color,
                      flexShrink: 0,
                      transition: "background 0.3s ease",
                    }}
                  >
                    <ArrowRight size={20} />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="solution-cta">
        <h2>Not sure where to start?</h2>
        <p>
          Our solution architects will map your needs to the right technology
          stack — for free.
        </p>
        <Link
          href="/#contact"
          className="button"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
          }}
        >
          Book a Free Consultation <ArrowRight size={16} />
        </Link>
      </section>
    </main>
  );
}
