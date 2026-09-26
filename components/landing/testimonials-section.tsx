"use client";

import Image from "next/image";
import { Star, BadgeCheck, Quote } from "lucide-react";

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  company: string;
  industry: string;
  logo: string;
  quote: string;
  stars: number;
  badge: string;
  tone: "blue" | "amber" | "emerald" | "orange" | "violet" | "pink" | "cyan" | "gold";
  highlight?: string;
}

export const clientReviews: TestimonialItem[] = [
  {
    id: "vedanta",
    name: "Alok Mohanty",
    role: "Digital Operations & Systems",
    company: "Vedanta Limited",
    industry: "Enterprise & Industrial",
    logo: "/logos/vedanta.jpeg",
    quote: "Tekkzy delivered enterprise-grade automation and workflow intelligence that integrated seamlessly with our plant systems. Their technical capability, speed of delivery, and reliability are exceptional.",
    stars: 5,
    badge: "Enterprise Partner",
    tone: "blue",
    highlight: "Enterprise Scale",
  },
  {
    id: "fitness-world",
    name: "Bikram K. Jena",
    role: "Founder & Managing Director",
    company: "Fitness World 2.0 Gym",
    industry: "Fitness & Wellness",
    logo: "/logos/fitness-world.png",
    quote: "Managing memberships, automated renewals, trainer scheduling, and access tracking used to be chaotic. Tekkzy’s digital platform streamlined everything into one dashboard. Member retention jumped significantly!",
    stars: 5,
    badge: "Gym & Member Portal",
    tone: "amber",
    highlight: "Member Retention +40%",
  },
  {
    id: "hotel-mm-royal",
    name: "Rakesh Mohapatra",
    role: "General Manager",
    company: "Hotel MM Royal Palace",
    industry: "Hospitality & Banquets",
    logo: "/logos/mm-royal-palace.png",
    quote: "From banquet booking management to guest check-in automation and billing, Tekkzy gave us an intuitive system our staff adopted overnight. It made our guest experience truly royal and hassle-free.",
    stars: 5,
    badge: "Hospitality ERP",
    tone: "gold",
    highlight: "Zero Booking Overlaps",
  },
  {
    id: "hangout-restro",
    name: "Subham Das",
    role: "Co-Owner & Operations Lead",
    company: "Hangout Restro Cafe",
    industry: "Restro Cafe & Bar",
    logo: "/logos/hangout.jpeg",
    quote: "The smart POS, kitchen order routing, and billing system from Tekkzy eliminated table turnaround delays during peak weekend hours. Customer satisfaction and operational efficiency have never been better.",
    stars: 4.9,
    badge: "Smart Cafe POS",
    tone: "orange",
    highlight: "Peak Rush Simplified",
  },
  {
    id: "manas-cafe",
    name: "Manas R. Sahoo",
    role: "Proprietor",
    company: "Manas Restaurant & Cafe",
    industry: "Restaurant & Cafe",
    logo: "/logos/manas.jpeg",
    quote: "Tekkzy understood our restaurant's daily volume and built an ultra-fast billing and inventory tracking setup. We reduced food wastage and inventory leakage by over 30% within the first two months.",
    stars: 5,
    badge: "Inventory & POS",
    tone: "pink",
    highlight: "30% Less Inventory Leakage",
  },
  {
    id: "onebite",
    name: "Pooja Agarwal",
    role: "Franchise Operations Head",
    company: "Onebite",
    industry: "QSR & Food Chain",
    logo: "/logos/onebite.png",
    quote: "Tekkzy's streamlined ordering software and real-time sales reporting made multi-counter franchise management effortless. Speed of service surged and billing errors dropped to zero.",
    stars: 5,
    badge: "QSR Chain Automation",
    tone: "violet",
    highlight: "Fast Counter Speed",
  },
  {
    id: "pabitra-electricals",
    name: "Pabitra Mohan Parida",
    role: "Managing Director",
    company: "Group of Pabitra Electrical Works (P.E.W.P.L.)",
    industry: "Electrical Infrastructure & Engineering",
    logo: "/logos/pabitra.png",
    quote: "Deploying Tekkzy's ERP system for our electrical contracting and infrastructure projects gave us real-time project milestone tracking, vendor billing, and resource control. Indispensable for our growth.",
    stars: 5,
    badge: "Infra ERP & Project Tracking",
    tone: "cyan",
    highlight: "Milestone Tracking",
  },
  {
    id: "shri-barenyam",
    name: "Dr. Saamitaa Dash",
    role: "Founder & Chief Consultant",
    company: "Shri Barenyam",
    industry: "Holistic Wellness & Clinic",
    logo: "/logos/shribarenyam.jpeg",
    quote: "Tekkzy created a serene, highly professional digital platform and patient consultation booking system for Shri Barenyam. It reflects our ethos of care, elevated our brand identity, and boosted client bookings.",
    stars: 5,
    badge: "Wellness & Digital Clinic",
    tone: "emerald",
    highlight: "Seamless Consultations",
  },
];

function StarRating({ stars }: { stars: number }) {
  return (
    <div className="testimonial-stars-wrap">
      <div className="testimonial-stars" aria-label={`${stars} out of 5 stars`}>
        {[0, 1, 2, 3, 4].map((idx) => {
          const fillPercentage = Math.max(0, Math.min(100, (stars - idx) * 100));
          return (
            <span key={idx} className="star-cell">
              <Star size={14} className="star-outline" strokeWidth={1.5} />
              {fillPercentage > 0 && (
                <span className="star-fill-clip" style={{ width: `${fillPercentage}%` }}>
                  <Star size={14} className="star-solid" strokeWidth={1.5} />
                </span>
              )}
            </span>
          );
        })}
      </div>
      <span className="testimonial-rating-num">{stars.toFixed(1)}</span>
    </div>
  );
}

export default function TestimonialsSection() {
  return (
    <section className="testimonial-carousel-section testimonial-section landing-section" id="testimonials">
      <div className="testimonial-carousel-header">
        <div className="landing-label">
          <span />
          Real Customer Stories
        </div>
        <h2>
          Trusted by Industry Leaders. <br />
          <span>Proven Business Impact.</span>
        </h2>
        <p>
          See how leading businesses across fitness, hospitality, enterprise, dining, and infrastructure scale faster with Tekkzy&apos;s intelligent solutions.
        </p>

        <div className="testimonial-summary-pill">
          <div className="summary-stars">
            {[1, 2, 3, 4, 5].map((s) => (
              <Star key={s} size={14} className="star-solid" />
            ))}
          </div>
          <span className="summary-text">
            <strong>4.9 / 5.0</strong> rating from verified clients across industries
          </span>
        </div>
      </div>

      <div className="testimonial-carousel-wrap">
        <div className="testimonial-carousel-track">
          {[...clientReviews, ...clientReviews].map((t, i) => (
            <div className={`testimonial-card card-tone-${t.tone}`} key={`${t.id}-${i}`}>
              {/* Card Header: Brand Logo & Verified Badge */}
              <div className="testimonial-card-top">
                <div className="testimonial-brand-lockup">
                  <div className="testimonial-logo-box">
                    <Image
                      src={t.logo}
                      alt={`${t.company} logo`}
                      width={48}
                      height={48}
                      className="testimonial-client-img"
                    />
                  </div>
                  <div className="testimonial-brand-info">
                    <div className="testimonial-company-name-row">
                      <span className="testimonial-company-name">{t.company}</span>
                      <span className="verified-badge-icon" title="Verified Customer">
                        <BadgeCheck size={14} />
                      </span>
                    </div>
                    <span className="testimonial-industry-tag">{t.industry}</span>
                  </div>
                </div>
                <span className={`testimonial-badge badge-${t.tone}`}>{t.badge}</span>
              </div>

              {/* Rating & Highlight Pill */}
              <div className="testimonial-rating-row">
                <StarRating stars={t.stars} />
                {t.highlight && (
                  <span className="testimonial-highlight-pill">
                    {t.highlight}
                  </span>
                )}
              </div>

              {/* Quote */}
              <div className="testimonial-quote-box">
                <Quote size={18} className="testimonial-quote-icon" />
                <blockquote className="testimonial-quote-text">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
              </div>

              {/* Author Row */}
              <div className="testimonial-author-row">
                <div className={`testimonial-avatar avatar-${t.tone}`}>
                  {t.name
                    .split(" ")
                    .map((n) => n[0])
                    .slice(0, 2)
                    .join("")}
                </div>
                <div className="testimonial-author-meta">
                  <strong className="testimonial-author-name">{t.name}</strong>
                  <small className="testimonial-author-role">{t.role}</small>
                </div>
                <div className="testimonial-verified-tag">
                  <BadgeCheck size={13} /> Verified Client
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
