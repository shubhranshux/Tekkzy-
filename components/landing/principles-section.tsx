"use client";

import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Users,
  Sparkles,
  Layers3,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

const principles = [
  {
    number: "01",
    badge: "CLIENT FIRST",
    title: "Customer Focus",
    tagline: "Your growth is our north star",
    description:
      "We design every architecture and workflow around your real-world operational challenges. Your measurable success defines our work.",
    icon: Users,
    tone: "blue" as const,
    accent: "#1760ed",
    commitments: [
      "Outcome-driven engineering roadmaps",
      "Dedicated senior solution architects",
      "Rapid feedback and iterative loops",
    ],
    stat: "99.4%",
    statLabel: "Client Satisfaction",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=900&q=80",
  },
  {
    number: "02",
    badge: "FUTURE-READY",
    title: "Continuous Innovation",
    tagline: "Pioneering what comes next",
    description:
      "We actively incorporate autonomous intelligence, AI-driven automation, and modern cloud stacks to give you an unfair advantage.",
    icon: Sparkles,
    tone: "violet" as const,
    accent: "#7c3aed",
    commitments: [
      "Autonomous AI pipelines & agents",
      "Modern cloud-native microservices",
      "Continuous R&D feature drops",
    ],
    stat: "10x",
    statLabel: "Faster Deployments",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=900&q=80",
  },
  {
    number: "03",
    badge: "USER CENTRIC",
    title: "Radical Simplicity",
    tagline: "Powerful tech, zero friction",
    description:
      "Enterprise systems shouldn't require months of training. We eliminate bloat so your teams can adopt, build, and scale with joy.",
    icon: Layers3,
    tone: "green" as const,
    accent: "#10b981",
    commitments: [
      "Unified intuitive dashboard UX",
      "Self-service automated provisioning",
      "Zero operational friction & bloat",
    ],
    stat: "< 1 day",
    statLabel: "Time to Onboard",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=900&q=80",
  },
  {
    number: "04",
    badge: "FOUNDATIONAL",
    title: "Uncompromising Trust",
    tagline: "Engineered for longevity",
    description:
      "Security, compliance, and transparent governance are non-negotiable fundamentals embedded from the first line of code.",
    icon: ShieldCheck,
    tone: "amber" as const,
    accent: "#f59e0b",
    commitments: [
      "Zero-trust end-to-end security model",
      "Automated continuous compliance audits",
      "99.99% enterprise uptime SLA guarantee",
    ],
    stat: "99.99%",
    statLabel: "Guaranteed Uptime SLA",
    image:
      "https://images.unsplash.com/photo-1563986768609-322da13575f2?w=900&q=80",
  },
];

export default function PrinciplesSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const imageRefs = useRef<(HTMLDivElement | null)[]>([]);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const tlRef = useRef<gsap.core.Timeline | null>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) return;

    const mm = gsap.matchMedia();

    mm.add("(min-width: 961px)", () => {
      const images = imageRefs.current.filter(Boolean) as HTMLDivElement[];
      const cards = cardRefs.current.filter(Boolean) as HTMLDivElement[];

      if (!images.length || !cards.length || !sectionRef.current) return;

      // Initial state: Image 0 and Card 0 active, others staged
      gsap.set(images[0], { xPercent: 0, opacity: 1, zIndex: 2 });
      for (let i = 1; i < images.length; i++) {
        gsap.set(images[i], { xPercent: 100, opacity: 1, zIndex: 1 });
      }

      gsap.set(cards[0], { yPercent: 0, opacity: 1, pointerEvents: "auto" });
      for (let i = 1; i < cards.length; i++) {
        gsap.set(cards[i], { yPercent: 40, opacity: 0, pointerEvents: "none" });
      }

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 82px",
          end: "+=2200",
          pin: true,
          scrub: 0.8,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            const step = Math.min(
              principles.length - 1,
              Math.floor(self.progress * principles.length)
            );
            setActiveIndex(step);
          },
        },
      });

      // Build stepped sequence with dwell and smooth transitions
      // Step 0 dwell
      tl.to({}, { duration: 0.35 });

      // Step 0 -> Step 1
      tl.addLabel("step-1")
        .to(images[0], {
          xPercent: -100,
          duration: 1,
          ease: "power2.inOut",
        })
        .to(
          images[1],
          {
            xPercent: 0,
            zIndex: 3,
            duration: 1,
            ease: "power2.inOut",
          },
          "<"
        )
        .to(
          cards[0],
          {
            yPercent: -35,
            opacity: 0,
            duration: 0.8,
            ease: "power2.inOut",
            onComplete: () => {
              if (cards[0]) cards[0].style.pointerEvents = "none";
            },
          },
          "<"
        )
        .to(
          cards[1],
          {
            yPercent: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power2.inOut",
            onStart: () => {
              if (cards[1]) cards[1].style.pointerEvents = "auto";
            },
          },
          "<0.2"
        )
        .to({}, { duration: 0.45 });

      // Step 1 -> Step 2
      tl.addLabel("step-2")
        .to(images[1], {
          xPercent: -100,
          duration: 1,
          ease: "power2.inOut",
        })
        .to(
          images[2],
          {
            xPercent: 0,
            zIndex: 4,
            duration: 1,
            ease: "power2.inOut",
          },
          "<"
        )
        .to(
          cards[1],
          {
            yPercent: -35,
            opacity: 0,
            duration: 0.8,
            ease: "power2.inOut",
            onComplete: () => {
              if (cards[1]) cards[1].style.pointerEvents = "none";
            },
          },
          "<"
        )
        .to(
          cards[2],
          {
            yPercent: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power2.inOut",
            onStart: () => {
              if (cards[2]) cards[2].style.pointerEvents = "auto";
            },
          },
          "<0.2"
        )
        .to({}, { duration: 0.45 });

      // Step 2 -> Step 3
      tl.addLabel("step-3")
        .to(images[2], {
          xPercent: -100,
          duration: 1,
          ease: "power2.inOut",
        })
        .to(
          images[3],
          {
            xPercent: 0,
            zIndex: 5,
            duration: 1,
            ease: "power2.inOut",
          },
          "<"
        )
        .to(
          cards[2],
          {
            yPercent: -35,
            opacity: 0,
            duration: 0.8,
            ease: "power2.inOut",
            onComplete: () => {
              if (cards[2]) cards[2].style.pointerEvents = "none";
            },
          },
          "<"
        )
        .to(
          cards[3],
          {
            yPercent: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power2.inOut",
            onStart: () => {
              if (cards[3]) cards[3].style.pointerEvents = "auto";
            },
          },
          "<0.2"
        )
        .to({}, { duration: 0.5 }); // Final dwell on step 3 before release

      tlRef.current = tl;
    });

    // Refresh after DOM layout calculation
    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100);

    return () => {
      clearTimeout(timer);
      mm.revert();
    };
  }, []);

  const goToStep = (index: number) => {
    setActiveIndex(index);
    if (!tlRef.current || !tlRef.current.scrollTrigger) return;
    const st = tlRef.current.scrollTrigger;
    const fractions = [0, 0.33, 0.66, 1.0];
    const target = st.start + (st.end - st.start) * fractions[index];
    window.scrollTo({ top: target, behavior: "smooth" });
  };

  return (
    <section ref={sectionRef} className="principles-section" id="principles">
      {/* Background ambient lighting */}
      <div className="principles-ambient-glow principles-glow-left" />
      <div className="principles-ambient-glow principles-glow-right" />
      <div className="principles-grid-pattern" />

      <div className="principles-container">
        {/* ── Section Header (Compact) ── */}
        <div className="principles-header">
          <div className="landing-label">
            <span />
            OUR GUIDING PHILOSOPHY
          </div>
          <h2>
            Principles That <span>Guide Everything We Build</span>
          </h2>
          <p>
            These non-negotiable standards shape our engineering discipline,
            customer partnerships, and long-term vision.
          </p>
        </div>

        {/* ── Pinned 50-50 Split Stage ── */}
        <div className="principles-stage">
          {/* LEFT: 50% Sticky Sliding Images */}
          <div className="principles-image-col">
            <div className="principles-image-viewport">
              {principles.map((p, i) => (
                <div
                  key={p.number}
                  ref={(el) => {
                    imageRefs.current[i] = el;
                  }}
                  className={`principles-image-slide ${
                    activeIndex === i ? "is-current" : ""
                  }`}
                  data-index={i}
                >
                  <img src={p.image} alt={p.title} loading="lazy" />
                  {/* Cinematic gradient overlay */}
                  <div className="principles-image-overlay" />
                  {/* Bottom caption overlay */}
                  <div className="principles-image-caption">
                    <span className="principles-image-tag">
                      {p.number} — TEKKZY ARCHITECTURE
                    </span>
                    <h3 className="principles-image-title">{p.title}</h3>
                  </div>
                </div>
              ))}

              {/* Step indicator dots on image */}
              <div className="principles-progress-rail">
                {principles.map((p, i) => (
                  <button
                    key={p.number}
                    type="button"
                    className={`principles-rail-dot ${
                      activeIndex === i ? "is-active" : ""
                    }`}
                    style={
                      activeIndex === i
                        ? {
                            background: p.accent,
                            boxShadow: `0 0 12px ${p.accent}`,
                            borderColor: p.accent,
                          }
                        : undefined
                    }
                    onClick={() => goToStep(i)}
                    aria-label={`Jump to principle ${p.number}: ${p.title}`}
                  >
                    <span>{p.number}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT: 50% Sticky Scrolling Text Cards */}
          <div className="principles-content-col">
            <div className="principles-content-stage">
              {principles.map((p, i) => {
                const Icon = p.icon;
                return (
                  <div
                    key={p.number}
                    ref={(el) => {
                      cardRefs.current[i] = el;
                    }}
                    className={`principles-card-slide ${
                      activeIndex === i ? "is-current" : ""
                    }`}
                    data-index={i}
                  >
                    <div className="principles-card-inner">
                      {/* Top Bar: Icon circle + Badge + Big Monospace Number */}
                      <div className="principles-card-top">
                        <div
                          className="principles-icon-orb"
                          style={{
                            borderColor: `${p.accent}50`,
                            background: `${p.accent}15`,
                          }}
                        >
                          <Icon
                            size={26}
                            strokeWidth={1.8}
                            style={{ color: p.accent }}
                          />
                        </div>
                        <div className="principles-badge-wrap">
                          <span
                            className="principles-category-badge"
                            style={{
                              color: p.accent,
                              borderColor: `${p.accent}40`,
                              background: `${p.accent}12`,
                            }}
                          >
                            {p.badge}
                          </span>
                        </div>
                        <span
                          className="principles-card-num"
                          style={{ color: `${p.accent}35` }}
                        >
                          {p.number}
                        </span>
                      </div>

                      {/* Title & Tagline */}
                      <h3 className="principles-card-title">{p.title}</h3>
                      <div
                        className="principles-card-tagline"
                        style={{ color: p.accent }}
                      >
                        {p.tagline}
                      </div>

                      {/* Description */}
                      <p className="principles-card-desc">{p.description}</p>

                      {/* Commitments checklist */}
                      <div className="principles-card-commitments">
                        {p.commitments.map((c) => (
                          <div key={c} className="principles-commit-item">
                            <CheckCircle2
                              size={15}
                              style={{ color: p.accent, flexShrink: 0 }}
                            />
                            <span>{c}</span>
                          </div>
                        ))}
                      </div>

                      {/* Metrics & Indicator Footer */}
                      <div className="principles-card-footer">
                        <div className="principles-stat-block">
                          <strong style={{ color: p.accent }}>{p.stat}</strong>
                          <small>{p.statLabel}</small>
                        </div>
                        <div
                          className={`principle-indicator indicator-${p.tone}`}
                        >
                          <span className="indicator-dot" />
                          Active Standard
                        </div>
                      </div>

                      {/* CTA link */}
                      <a href="#contact" className="principles-card-cta">
                        <span>Learn how we apply this</span>
                        <ArrowRight
                          size={16}
                          strokeWidth={2.5}
                          style={{ color: p.accent }}
                        />
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
