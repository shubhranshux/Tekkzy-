"use client";

import { motion } from "framer-motion";
import { Target, Users, PenTool, Send, BarChart2, TrendingUp, Search, Megaphone, Mail, PlaySquare, LineChart, MessageSquare, ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function DigitalMarketingSection() {
  return (
    <section className="dm-section">
      {/* Background large dashed curve */}
      <svg className="dm-bg-curve" viewBox="0 0 1440 600" fill="none" preserveAspectRatio="none">
        <path d="M-100,500 C200,-100 1240,-100 1540,500" stroke="#f0f3fa" strokeWidth="2" strokeDasharray="10 10" />
        <path d="M-50,550 C250,-50 1190,-50 1490,550" stroke="#f0f3fa" strokeWidth="2" strokeDasharray="10 10" />
      </svg>

      <div className="dm-container">
        <motion.div className="dm-header" initial="hidden" whileInView="visible" viewport={{ once: false }} variants={fadeUp}>
          <h2>Supercharge Growth with<br />Tekkzy <span className="dm-highlight">Digital Marketing</span></h2>
          <p>Data-driven strategies that connect your brand with the right audience<br />and drive real, measurable results.</p>
          <div className="dm-cta">
            <Link href="/product/digital-marketing" className="dm-learn-more-btn">
              Explore Digital Marketing <ArrowRight size={17} />
            </Link>
            <span>Strategy, creative and performance—working as one.</span>
          </div>
        </motion.div>

        <div className="dm-core-layout">
          {/* Left Features */}
          <div className="dm-features dm-left">
            <FeatureBlock 
              icon={<Target size={20} color="#7b5eea" />} 
              iconBg="#f2effd"
              title="Strategic Planning"
              desc="Understand your business, audience & goals to create the right strategy."
              delay={0.1}
            />
            <FeatureBlock 
              icon={<Users size={20} color="#1ba77e" />} 
              iconBg="#e8f6f1"
              title="Market Research"
              desc="Analyze trends, competitors, keywords & opportunities to stay ahead."
              delay={0.2}
            />
            <FeatureBlock 
              icon={<PenTool size={20} color="#e54d75" />} 
              iconBg="#fceef1"
              title="Content Creation"
              desc="Craft engaging content that attracts attention and builds brand trust."
              delay={0.3}
            />
          </div>

          {/* Center Phones */}
          <div className="dm-phones">
            <motion.div 
              className="dm-phone dm-phone-left"
              initial={{ x: -150, y: 20, rotate: 0, scale: 0.8, opacity: 0 }}
              whileInView={{ x: 0, y: 20, rotate: -12, scale: 0.85, opacity: 0.9 }}
              viewport={{ once: false, margin: "-100px" }}
              transition={{ duration: 0.7, delay: 0.15, type: "spring", bounce: 0.3 }}
            >
              <div className="phone-screen">
                <img src="/marketing-screenshot.jpg" alt="Marketing UI" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
              </div>
            </motion.div>
            <motion.div 
              className="dm-phone dm-phone-center"
              initial={{ y: 40, scale: 0.8, opacity: 0 }}
              whileInView={{ y: -20, scale: 1, opacity: 1 }}
              viewport={{ once: false, margin: "-100px" }}
              transition={{ duration: 0.7, type: "spring", bounce: 0.3 }}
            >
              <div className="phone-screen">
                <img src="/marketing-screenshot.jpg" alt="Marketing UI" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
              </div>
            </motion.div>
            <motion.div 
              className="dm-phone dm-phone-right"
              initial={{ x: 150, y: 20, rotate: 0, scale: 0.8, opacity: 0 }}
              whileInView={{ x: 0, y: 20, rotate: 12, scale: 0.85, opacity: 0.9 }}
              viewport={{ once: false, margin: "-100px" }}
              transition={{ duration: 0.7, delay: 0.15, type: "spring", bounce: 0.3 }}
            >
               <div className="phone-screen">
                <img src="/marketing-screenshot.jpg" alt="Marketing UI" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
              </div>
            </motion.div>

            {/* Connecting lines SVG */}
            <motion.svg 
              className="dm-connectors" 
              width="100%" height="100%"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: false, margin: "-100px" }}
              transition={{ duration: 1, delay: 0.5 }}
            >
               {/* Left connectors */}
               <path d="M 0 50 C 40 50, 60 120, 100 120" stroke="#7b5eea" strokeWidth="2" strokeDasharray="4 4" fill="none" />
               <circle cx="100" cy="120" r="4" fill="#7b5eea" />
               
               <path d="M 0 150 C 40 150, 60 160, 100 160" stroke="#1ba77e" strokeWidth="2" strokeDasharray="4 4" fill="none" />
               <circle cx="100" cy="160" r="4" fill="#1ba77e" />

               <path d="M 0 250 C 40 250, 60 200, 100 200" stroke="#e54d75" strokeWidth="2" strokeDasharray="4 4" fill="none" />
               <circle cx="100" cy="200" r="4" fill="#e54d75" />

               {/* Right connectors */}
               <path d="M 400 60 C 360 60, 340 100, 300 100" stroke="#f59e0b" strokeWidth="2" strokeDasharray="4 4" fill="none" />
               <circle cx="300" cy="100" r="4" fill="#f59e0b" />

               <path d="M 400 160 C 360 160, 340 160, 300 160" stroke="#7b5eea" strokeWidth="2" strokeDasharray="4 4" fill="none" />
               <circle cx="300" cy="160" r="4" fill="#7b5eea" />

               <path d="M 400 260 C 360 260, 340 220, 300 220" stroke="#2563eb" strokeWidth="2" strokeDasharray="4 4" fill="none" />
               <circle cx="300" cy="220" r="4" fill="#2563eb" />
            </motion.svg>
          </div>

          {/* Right Features */}
          <div className="dm-features dm-right">
             <FeatureBlock 
              icon={<Send size={20} color="#f59e0b" />} 
              iconBg="#fef3c7"
              title="Channel Publishing"
              desc="Distribute your content across the right channels at the optimal time."
              delay={0.1}
            />
            <FeatureBlock 
              icon={<BarChart2 size={20} color="#7b5eea" />} 
              iconBg="#f2effd"
              title="Performance Analysis"
              desc="Track performance, measure results and uncover actionable insights."
              delay={0.2}
            />
            <FeatureBlock 
              icon={<TrendingUp size={20} color="#2563eb" />} 
              iconBg="#eff6ff"
              title="Optimize & Grow"
              desc="Refine strategies, improve ROI and scale campaigns for sustainable growth."
              delay={0.3}
            />
          </div>
        </div>

        {/* Bottom Services Box */}
        <motion.div className="dm-services-wrapper" initial="hidden" whileInView="visible" viewport={{ once: false }} variants={fadeUp}>
          <div className="dm-services-inner">
            <h5 className="dm-services-title">OUR DIGITAL MARKETING SERVICES</h5>
            <div className="dm-services-grid">
              <ServiceItem icon={<Search size={22} color="#7b5eea" />} title="SEO" desc="Improve rankings and drive organic traffic." />
              <ServiceItem icon={<MessageSquare size={22} color="#1ba77e" />} title="Social Media Marketing" desc="Grow your brand and engage your audience." />
              <ServiceItem icon={<Megaphone size={22} color="#f59e0b" />} title="Paid Advertising" desc="Run targeted ads that deliver high-quality leads." />
              <ServiceItem icon={<Mail size={22} color="#e54d75" />} title="Email Marketing" desc="Nurture leads and retain customers with smart emails." />
              <ServiceItem icon={<PlaySquare size={22} color="#2563eb" />} title="Content Marketing" desc="Create valuable content that educates and converts." />
              <ServiceItem icon={<LineChart size={22} color="#0d9488" />} title="Analytics & Reporting" desc="Get clear insights to make data-driven decisions." />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function FeatureBlock({ icon, iconBg, title, desc, delay }: { icon: React.ReactNode; iconBg: string; title: string; desc: string; delay: number }) {
  return (
    <motion.div className="dm-feature-block" initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: false }} transition={{ duration: 0.5, delay }}>
      <div className="dm-feature-icon" style={{ backgroundColor: iconBg }}>{icon}</div>
      <div className="dm-feature-text">
        <h4>{title}</h4>
        <p>{desc}</p>
      </div>
    </motion.div>
  );
}

function ServiceItem({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) {
  return (
    <div className="dm-service-item">
      <div className="dm-service-icon">{icon}</div>
      <div className="dm-service-text">
        <h6>{title}</h6>
        <p>{desc}</p>
      </div>
    </div>
  );
}
