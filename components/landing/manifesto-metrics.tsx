"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import "./manifesto-metrics.css";

interface StatItem {
  id: string;
  target: number;
  decimals: number;
  suffix: string;
  label: string;
  isDark?: boolean;
}

const STATS: StatItem[] = [
  {
    id: "insights",
    target: 1,
    decimals: 0,
    suffix: "M+",
    label: "Social Media Insights",
  },
  {
    id: "users",
    target: 999,
    decimals: 0,
    suffix: "+",
    label: "Trusted Users",
  },
  {
    id: "locations",
    target: 100,
    decimals: 0,
    suffix: "+",
    label: "Locations",
    isDark: true,
  },
];

function AnimatedCounter({
  target,
  decimals,
  suffix,
  inView,
}: {
  target: number;
  decimals: number;
  suffix: string;
  inView: boolean;
}) {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (!inView) return;

    let startTimestamp: number | null = null;
    const duration = 2000; // 2 seconds smooth count-up

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      // Ease out cubic: fast start, soft cinematic settling
      const easedProgress = 1 - Math.pow(1 - progress, 3);
      const current = easedProgress * target;

      setDisplayValue(current);

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        setDisplayValue(target);
      }
    };

    const animId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animId);
  }, [inView, target]);

  return (
    <div className="manifesto-number-wrap">
      <span className="manifesto-number-val">
        {displayValue.toFixed(decimals)}
      </span>
      <span className="manifesto-number-suffix">{suffix}</span>
    </div>
  );
}

function MetricCard({
  item,
  index,
  inView,
}: {
  item: StatItem;
  index: number;
  inView: boolean;
}) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);
  };

  return (
    <motion.div
      ref={cardRef}
      className={`manifesto-metric-card ${item.isDark ? "manifesto-card-dark" : ""}`}
      onMouseMove={handleMouseMove}
      initial={{ opacity: 0, y: 35 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 35 }}
      transition={{ duration: 0.7, delay: 0.2 + index * 0.15, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Interactive mouse radial spotlight in brand blue */}
      <div className="manifesto-card-spotlight" />

      {/* Big Animated Metric Number */}
      <AnimatedCounter
        target={item.target}
        decimals={item.decimals}
        suffix={item.suffix}
        inView={inView}
      />

      {/* Tracked Label matching reference exactly */}
      <div className="manifesto-label">{item.label}</div>
    </motion.div>
  );
}

export default function ManifestoMetrics() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  return (
    <section
      ref={sectionRef}
      className="manifesto-section"
      id="who-we-are"
      aria-labelledby="manifesto-heading"
    >
      {/* Dynamic Backgrounds */}
      <div className="manifesto-ambient-glow" />
      <div className="manifesto-grid-mesh" />

      <div className="manifesto-container">
        {/* Centered Bold Manifesto Statement without unwanted pill tags */}
        <motion.h2
          id="manifesto-heading"
          className="manifesto-statement"
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          Tekkzy specializes in{" "}
          <span className="manifesto-highlight">high-performance enterprise software</span> that
          supports every part of the ecosystem — from everyday players to major
          creative and commercial partners.
        </motion.h2>

        {/* 3 Prominent Stat Cards matching Moonsworth reference */}
        <div className="manifesto-metrics-grid" role="region" aria-label="Key Performance Metrics">
          {STATS.map((item, index) => (
            <MetricCard
              key={item.id}
              item={item}
              index={index}
              inView={isInView}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
