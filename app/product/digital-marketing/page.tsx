"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  Megaphone,
  Target,
  PenTool,
  Mail,
  BarChart3,
  Share2,
  Search,
  PlaySquare,
  Globe2,
  TrendingUp,
  MousePointerClick,
  Eye,
  Zap,
  CheckCircle2,
  Star,
  ChevronRight,
  Users,
  Sparkles,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.15 },
  transition: { duration: 0.65, delay, ease: EASE },
});

/* ── Data ── */
const channels = [
  { icon: Search, name: "SEO", desc: "Organic search dominance", color: "#f59e0b", link: "/product/seo" },
  { icon: Share2, name: "Social Media", desc: "Brand & community growth", color: "#e54d75" },
  { icon: Target, name: "PPC Advertising", desc: "Google & Meta ads", color: "#1760ed" },
  { icon: Mail, name: "Email Marketing", desc: "Nurture & convert", color: "#1ba77e" },
  { icon: PlaySquare, name: "Video Marketing", desc: "YouTube & reels", color: "#e95812" },
  { icon: PenTool, name: "Content Marketing", desc: "Blogs, whitepapers, guides", color: "#896dff" },
];

const services = [
  { icon: Search, title: "Search Engine Optimization", desc: "Technical audits, keyword strategy, content optimization, link building, and local SEO. We drive qualified organic traffic that converts.", color: "#f59e0b", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&q=80" },
  { icon: Globe2, title: "Google Business Profile", desc: "Local listing optimization, review strategy, map visibility, location pages, and monthly insights to turn nearby searches into enquiries.", color: "#2f8aef", image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=500&q=80" },
  { icon: Target, title: "Paid Advertising (PPC)", desc: "Google Ads, Meta Ads, LinkedIn Ads — expertly managed campaigns with A/B testing, audience targeting, and conversion tracking for maximum ROAS.", color: "#1760ed", image: "https://images.unsplash.com/photo-1611926653458-09294b3142bf?w=500&q=80" },
  { icon: Share2, title: "Social Media Marketing", desc: "Strategy, content creation, community management, and paid social campaigns across Instagram, LinkedIn, Twitter, and emerging platforms.", color: "#e54d75", image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=500&q=80" },
  { icon: PenTool, title: "Content Marketing", desc: "Blog strategy, long-form content, whitepapers, case studies, infographics, and video scripts — built around your target keywords and buyer journey.", color: "#896dff", image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&q=80" },
  { icon: Mail, title: "Email & Marketing Automation", desc: "Drip campaigns, newsletter design, segmentation, personalization, A/B testing, and automated workflows that nurture leads through your funnel.", color: "#1ba77e", image: "https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=500&q=80" },
  { icon: PlaySquare, title: "Cinematic Video Marketing", desc: "Brand films, product videos, social reels, YouTube strategy, motion graphics, and high-retention edits built to earn attention.", color: "#d75062", image: "https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?w=500&q=80" },
  { icon: Globe2, title: "Conversion Rate Optimization", desc: "Landing page optimization, A/B testing, heat map analysis, user journey mapping, and data-driven UX improvements that turn visitors into customers.", color: "#e95812", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&q=80" },
  { icon: Users, title: "Influencer & Creator Marketing", desc: "Creator discovery, outreach, campaign management, content approvals, and performance reporting that keeps your brand authentic.", color: "#7157ee", image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=500&q=80" },
  { icon: Star, title: "Reputation & PR Marketing", desc: "Review generation, reputation monitoring, thought leadership, digital PR, and credibility-building campaigns for brands that lead.", color: "#d99c0b", image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=500&q=80" },
  { icon: TrendingUp, title: "Affiliate & Performance Marketing", desc: "Partner programs, attribution, commission strategy, conversion tracking, and scalable acquisition built around profitable growth.", color: "#2ba88e", image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=500&q=80" },
];

const stats = [
  { icon: TrendingUp, value: "312%", label: "Average Traffic Growth", desc: "Across 50+ client campaigns" },
  { icon: MousePointerClick, value: "4.8x", label: "ROAS on Paid Campaigns", desc: "Return on ad spend" },
  { icon: Eye, value: "10M+", label: "Monthly Impressions", desc: "Across all channels" },
  { icon: BarChart3, value: "67%", label: "Lower Cost Per Acquisition", desc: "vs. industry average" },
];

const clients = [
  {
    name: "Tech Mart",
    role: "Retail & Technology",
    mark: "TM",
    quote: "Tekkzy gave our campaigns a clear direction. Our offers now reach the right shoppers at the right time, and every update is easy to understand.",
    result: "Sharper local visibility",
    stars: 5,
  },
  {
    name: "Balaji Cafe",
    role: "Food & Hospitality",
    mark: "BC",
    quote: "The team captured what makes Balaji Cafe special and turned it into content people genuinely engage with. Our local presence feels more alive than ever.",
    result: "Stronger discovery",
    stars: 4.5,
  },
  {
    name: "Look Salon",
    role: "Beauty & Wellness",
    mark: "LS",
    quote: "From campaign ideas to polished visuals, the work has been thoughtful and on-brand. Booking enquiries are now part of our everyday conversation.",
    result: "3.2x Booking enquiries",
    stars: 4,
  },
  {
    name: "Manas",
    role: "Lifestyle Brand",
    mark: "MN",
    quote: "Tekkzy brought structure to our digital presence without losing our personality. The strategy feels considered, creative, and easy for our team to run with.",
    result: "Clearer brand story",
    stars: 4.5,
  },
  {
    name: "Travel Style",
    role: "Travel & Experiences",
    mark: "TS",
    quote: "They understand how to make an experience feel irresistible before someone has even packed a bag. The content and targeting work beautifully together.",
    result: "+240% qualified leads",
    stars: 5,
  },
  {
    name: "Fragrance House",
    role: "Luxury Retail",
    mark: "FH",
    quote: "The creative feels premium, while the reporting stays practical. We always know what is working and where the next opportunity is.",
    result: "Premium digital reach",
    stars: 4.5,
  },
  {
    name: "Foot Lounge",
    role: "Footwear & Fashion",
    mark: "FL",
    quote: "Our launches now have momentum from day one. Tekkzy combines fresh ideas with the detail needed to make every campaign feel connected.",
    result: "Launch day sellout",
    stars: 4,
  },
  {
    name: "Jawed Habib",
    role: "Salon & Beauty",
    mark: "JH",
    quote: "The digital strategy is focused, fast-moving, and aligned with the way our customers discover salon services today. It has made our marketing feel effortless.",
    result: "Consistent discovery",
    stars: 5,
  },
  {
    name: "Fashion Planet",
    role: "Fashion Retail",
    mark: "FP",
    quote: "Tekkzy helped us turn seasonal collections into compelling stories across every channel. The results feel cohesive, energetic, and right for our audience.",
    result: "+180% seasonal ROAS",
    stars: 4.5,
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

const process = [
  { step: "01", title: "Discovery & Audit", desc: "Deep dive into your business, competitors, audience, and current digital presence to identify opportunities.", icon: Search },
  { step: "02", title: "Strategy & Planning", desc: "Build a customized multi-channel strategy with clear KPIs, timelines, and budget allocation.", icon: Target },
  { step: "03", title: "Content & Creative", desc: "Produce high-quality content, ad creatives, landing pages, and campaign assets.", icon: PenTool },
  { step: "04", title: "Launch & Execute", desc: "Deploy campaigns across all channels with precise targeting and tracking.", icon: Zap },
  { step: "05", title: "Measure & Optimize", desc: "Continuous monitoring, A/B testing, and optimization to improve ROI every week.", icon: BarChart3 },
  { step: "06", title: "Scale & Grow", desc: "Double down on what works, expand to new channels, and compound growth.", icon: TrendingUp },
];

export default function DigitalMarketingPage() {
  const reduced = useReducedMotion();

  return (
    <main className="dm-page">

      {/* ── Hero ── */}
      <section className="dm-hero">
        <div className="dm-hero-bg">
          <Image
            src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1600&q=80"
            alt="Digital Marketing"
            fill
            style={{ objectFit: "cover" }}
            priority
          />
          <div className="dm-hero-overlay" />
        </div>
        <div className="dm-hero-content section-shell">
          <div className="dm-hero-copy">
            <motion.span className="dm-hero-eyebrow" {...fade()}>
              <Megaphone size={14} /> DIGITAL MARKETING FOR AMBITIOUS TEAMS
            </motion.span>
            <motion.h1 {...fade(0.08)}>
              Turn Clicks Into<br />
              <span>Customers.</span>
            </motion.h1>
            <motion.p {...fade(0.14)}>
              We create digital marketing strategies that help your brand get noticed, generate leads, and turn attention into measurable growth.
            </motion.p>
            <motion.div className="dm-hero-actions" {...fade(0.2)}>
              <Link href="/#contact" className="dm-primary-button">
                Get a Free Strategy Call <ArrowRight size={16} />
              </Link>
              <Link href="#services" className="dm-secondary-button">
                See Our Services <ChevronRight size={16} />
              </Link>
            </motion.div>
            <motion.div className="dm-channel-pills" {...fade(0.28)}>
              {channels.slice(0, 4).map((ch) => (
                <span key={ch.name} className="dm-channel-pill">
                  <ch.icon size={14} style={{ color: ch.color }} /> {ch.name}
                </span>
              ))}
            </motion.div>
          </div>
          <motion.div className="dm-hero-visual" {...fade(0.18)}>
            <div className="dm-orbit-diagram" aria-label="Digital marketing channels">
              <span className="dm-orbit-line line-top" aria-hidden="true" />
              <span className="dm-orbit-line line-top-right" aria-hidden="true" />
              <span className="dm-orbit-line line-right" aria-hidden="true" />
              <span className="dm-orbit-line line-bottom-right" aria-hidden="true" />
              <span className="dm-orbit-line line-bottom" aria-hidden="true" />
              <span className="dm-orbit-line line-bottom-left" aria-hidden="true" />
              <span className="dm-orbit-line line-left" aria-hidden="true" />
              <span className="dm-orbit-line line-top-left" aria-hidden="true" />

              <div className="dm-orbit-center"><strong>Digital</strong><span>Marketing</span></div>
              <MarketingNode className="node-web" icon={Globe2} label={"Website\nMarketing"} />
              <MarketingNode className="node-seo" icon={Search} label="SEO" />
              <MarketingNode className="node-social" icon={Share2} label={"Social Media\nMarketing"} />
              <MarketingNode className="node-ppc" icon={Target} label="PPC Marketing" />
              <MarketingNode className="node-content" icon={PenTool} label={"Content\nMarketing"} />
              <MarketingNode className="node-email" icon={Mail} label={"Email\nMarketing"} />
              <MarketingNode className="node-affiliate" icon={Users} label={"Affiliate\nMarketing"} />
              <MarketingNode className="node-video" icon={PlaySquare} label={"Video\nMarketing"} />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="dm-stats-section">
        <div className="dm-stats-grid section-shell">
          {stats.map((s, i) => (
            <motion.div key={s.label} className="dm-stat-card" {...fade(i * 0.08)}>
              <s.icon size={24} className="dm-stat-icon" />
              <div className="dm-stat-value">{s.value}</div>
              <div className="dm-stat-label">{s.label}</div>
              <div className="dm-stat-desc">{s.desc}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── Services with Images ── */}
      <section id="services" className="dm-services-section" data-horizontal-section>
        <div className="dm-services-sticky-inner section-shell">
          <motion.div className="dm-section-header dm-services-heading" {...fade()}>
            <span className="eyebrow">OUR SERVICES</span>
            <h2>Full-stack digital marketing.</h2>
            <p>Every channel, every touchpoint, one unified strategy built around your growth.</p>
            <div className="dm-scroll-cue"><span>Scroll to explore</span><i><b /></i></div>
          </motion.div>
          <div className="dm-services-rail-viewport">
            <div className="dm-services-grid-full" data-horizontal-track>
          {services.map((s, i) => (
            <motion.div key={s.title} className="dm-service-card-full product-card" {...fade(i * 0.06)}>
              <div className="dm-service-img">
                <Image src={s.image} alt={s.title} fill sizes="(max-width: 768px) 100vw, 400px" style={{ objectFit: "cover" }} />
                <div className="dm-service-img-overlay" />
                <div className="dm-service-icon-badge" style={{ background: s.color }}>
                  <s.icon size={20} color="#fff" />
                </div>
              </div>
              <div className="dm-service-body">
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                <Link href="/#contact" className="dm-service-link">
                  Get Started <ArrowRight size={13} />
                </Link>
              </div>
            </motion.div>
          ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Process ── */}
      <section className="dm-process-section">
        <div className="section-shell">
          <motion.div className="dm-section-header" {...fade()}>
            <span className="eyebrow" style={{ color: "#4aedc4" }}>HOW WE WORK</span>
            <h2 style={{ color: "#fff" }}>Our proven 6-step process.</h2>
            <p style={{ color: "#8fa0c4" }}>A systematic approach to growing your digital presence with measurable results.</p>
          </motion.div>
          <div className="dm-process-grid">
            {process.map((p, i) => (
              <motion.div key={p.step} className="dm-process-card" {...fade(i * 0.06)}>
                <span className="dm-process-step">{p.step}</span>
                <div className="dm-process-icon-wrap">
                  <p.icon size={22} />
                </div>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Client Testimonials ── */}
      <section className="dm-clients-section">
        <div className="section-shell">
          <motion.div className="dm-section-header dm-testimonials-heading" {...fade()}>
            <span className="eyebrow">CLIENT SUCCESS STORIES</span>
            <h2>Trusted by brands people love.</h2>
            <p>Thoughtful digital marketing for teams across retail, hospitality, beauty, fashion, and travel.</p>
            <div className="testimonial-summary-pill" style={{ margin: "20px auto 0" }}>
              <div className="summary-stars">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} size={14} className="star-solid" />
                ))}
              </div>
              <span className="summary-text"><strong>4.9 / 5.0</strong> rating from 50+ growing brands</span>
            </div>
          </motion.div>
        </div>
        <div className="dm-clients-carousel-wrap">
          <div className="dm-clients-carousel-track">
            {[...clients, ...clients].map((c, i) => (
              <div key={`${c.name}-${i}`} className="dm-client-card">
                <div className="dm-client-card-top">
                  <StarRating stars={c.stars} />
                  <div className="dm-client-result">
                    <CheckCircle2 size={13} /> {c.result}
                  </div>
                </div>
                <p className="dm-client-quote">&ldquo;{c.quote}&rdquo;</p>
                <div className="dm-client-author">
                  <span className="dm-client-mark" aria-hidden="true">{c.mark}</span>
                  <div>
                    <strong>{c.name}</strong>
                    <small>{c.role}</small>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Tekkzy ── */}
      <section className="dm-why-section section-shell">
        <motion.div className="dm-why-grid" {...fade()}>
          <div className="dm-why-content">
            <span className="eyebrow">WHY TEKKZY</span>
            <h2>Your growth partner,<br />not just another agency.</h2>
            <ul className="dm-why-list">
              <li><CheckCircle2 size={18} /> <span><strong>Transparent reporting</strong> — Real-time dashboards, weekly calls, no hidden metrics</span></li>
              <li><CheckCircle2 size={18} /> <span><strong>Dedicated strategist</strong> — Your own senior marketing lead, not a rotating team</span></li>
              <li><CheckCircle2 size={18} /> <span><strong>AI-powered insights</strong> — We use Tekkzy AI to find patterns humans miss</span></li>
              <li><CheckCircle2 size={18} /> <span><strong>Full-funnel approach</strong> — From awareness to conversion to retention</span></li>
              <li><CheckCircle2 size={18} /> <span><strong>No long-term contracts</strong> — Performance keeps you, not paperwork</span></li>
            </ul>
            <Link href="/#contact" className="button" style={{ marginTop: "24px", background: "#2ba88e", borderColor: "#2ba88e" }}>
              Start Growing Today <ArrowRight size={16} />
            </Link>
          </div>
          <div className="dm-why-image">
            <Image
              src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&q=80"
              alt="Marketing team collaboration"
              fill
              sizes="(max-width: 768px) 100vw, 500px"
              style={{ objectFit: "cover", borderRadius: "16px" }}
            />
          </div>
        </motion.div>
      </section>

      {/* ── CTA ── */}
      <section className="dm-cta-section">
        <div className="section-shell" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "24px", padding: "60px max(28px, calc((100vw - 1420px) / 2))" }}>
          <div>
            <h2 style={{ color: "#fff", margin: "0 0 10px", fontSize: "clamp(28px, 3vw, 42px)", letterSpacing: "-1px" }}>Ready to grow your digital presence?</h2>
            <p style={{ color: "#8fa0c4", margin: 0, fontSize: "15px" }}>Get a free marketing audit and discover untapped growth opportunities.</p>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
            <Link className="button" href="/#contact" style={{ background: "#2ba88e", borderColor: "#2ba88e" }}>Get Free Audit <ArrowRight size={16} /></Link>
            <Link className="text-link" href="/product" style={{ color: "#7da9ff" }}>View All Products <ArrowRight size={14} /></Link>
          </div>
        </div>
      </section>
    </main>
  );
}

function MarketingNode({ icon: Icon, label, className }: { icon: typeof Globe2; label: string; className: string }) {
  return (
    <div className={`dm-orbit-node ${className}`}>
      <span className="dm-orbit-icon"><Icon size={25} /></span>
      <span className="dm-orbit-label">{label.split("\n").map((part) => <span key={part}>{part}</span>)}</span>
    </div>
  );
}
