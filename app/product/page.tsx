"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import DigitalMarketingSection from "@/components/product/digital-marketing-section";
import {
  Activity,
  ArrowRight,
  BarChart3,
  Blocks,
  Bot,
  BrainCircuit,
  BriefcaseBusiness,
  Check,
  ChevronDown,
  Cloud,
  Code2,
  Database,
  Eye,
  Globe2,
  Handshake,
  HeartPulse,
  Layers3,
  LineChart,
  Link2,
  LockKeyhole,
  MonitorSmartphone,
  Network,
  PackageCheck,
  PanelTop,
  PlayCircle,
  Radar,
  RefreshCw,
  ScanLine,
  ServerCog,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  Store,
  TabletSmartphone,
  Smartphone,
  Target,
  TrendingUp,
  UsersRound,
  Waypoints,
  Zap,
  Box,
  Hexagon,
  Command,
  Shuffle,
  Aperture,
  type LucideIcon,
} from "lucide-react";

type IconType = LucideIcon;

const fadeIn = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0 },
};

function Reveal({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const reduced = useReducedMotion();
  return (
    <motion.div
      className={className}
      variants={fadeIn}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: reduced ? 0 : 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

function SectionIntro({ eyebrow, title, copy, link, href = "#contact" }: { eyebrow: string; title: React.ReactNode; copy?: string; link?: string; href?: string }) {
  return (
    <div className="section-intro">
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {copy && <p>{copy}</p>}
      {link && <a className="text-link" href={href}>{link} <ArrowRight size={14} /></a>}
    </div>
  );
}

function Pill({ children, icon: Icon }: { children: React.ReactNode; icon?: IconType }) {
  return <span className="pill">{Icon && <Icon size={14} strokeWidth={1.75} />}{children}</span>;
}

function Connector({ direction = "right", tone = "blue" }: { direction?: "right" | "left" | "up" | "down"; tone?: "blue" | "green" | "orange" }) {
  return <span className={`connector connector-${direction} connector-${tone}`} aria-hidden="true"><i /></span>;
}

function DiagramBox({ title, items, className = "", icon: Icon }: { title: string; items: string[]; className?: string; icon?: IconType }) {
  return (
    <div className={`diagram-box ${className}`}>
      <div className="diagram-box-title">{Icon && <Icon size={13} />}{title}</div>
      <div className="diagram-box-items">
        {items.map((item) => <span key={item}>{item}</span>)}
      </div>
    </div>
  );
}

const challengeItems: { icon: IconType; title: string; copy: string }[] = [
  { icon: Network, title: "Disconnected tools", copy: "Multiple systems that don’t talk to each other." },
  { icon: Database, title: "Data silos", copy: "Scattered data that makes it hard to see the full picture." },
  { icon: ServerCog, title: "Manual processes", copy: "Repetitive tasks that increase errors and reduce productivity." },
  { icon: Eye, title: "Poor visibility", copy: "Limited insights lead to slow and uncertain decisions." },
  { icon: TrendingUp, title: "Hard to scale", copy: "Systems break under complexity and business growth." },
];

const capabilities: { icon: IconType; title: string; copy: string; tint: string; href: string }[] = [
  { icon: Blocks, title: "Build", copy: "Build custom Tekkzy software, web, mobile, SaaS and business products.", tint: "blue", href: "/whats-possible" },
  { icon: BriefcaseBusiness, title: "Operate", copy: "Tekkzy ERP, CRM, HR, finance, inventory and business operations.", tint: "green", href: "/products/erp" },
  { icon: BrainCircuit, title: "Intelligence", copy: "Tekkzy AI, analytics, BI and intelligent automation built in.", tint: "purple", href: "/products/ai-assistant" },
  { icon: Database, title: "Data", copy: "Collect, manage and analyze data with complete Tekkzy accuracy.", tint: "teal", href: "/solutions/data-layer" },
  { icon: Cloud, title: "Cloud", copy: "Scalable Tekkzy cloud infrastructure built for performance.", tint: "blue", href: "/solutions/cloud-infrastructure" },
  { icon: LineChart, title: "SEO & Growth", copy: "Tekkzy SEO, search engine optimization, keyword research, on-page, off-page and technical SEO that drive organic traffic.", tint: "red", href: "/products/seo" },
  { icon: ScanLine, title: "Digital Marketing", copy: "Tekkzy social media, PPC, content marketing, email campaigns and conversion optimization.", tint: "orange", href: "/products/digital-marketing" },
];

const architecture: { icon: IconType; name: string; copy: string }[] = [
  { icon: MonitorSmartphone, name: "Tekkzy Experience Layer", copy: "Web, Mobile, Portal, E-commerce and digital products" },
  { icon: Waypoints, name: "Tekkzy Application Layer", copy: "Custom software, SaaS, microservices and business apps" },
  { icon: Target, name: "Tekkzy Growth Layer", copy: "SEO, Digital Marketing, PPC, Content and Conversion" },
  { icon: BrainCircuit, name: "Tekkzy AI & Automation Layer", copy: "AI models, agents, workflows and intelligent services" },
  { icon: Database, name: "Tekkzy Data Layer", copy: "Databases, data warehouse, analytics and governance" },
  { icon: Cloud, name: "Tekkzy Cloud Layer", copy: "Compute, storage, networking, security and scalability" },
  { icon: ShieldCheck, name: "Tekkzy Security Layer", copy: "Identity, access, encryption, monitoring and compliance" },
];

const journey: { icon: IconType; title: string; copy: string }[] = [
  { icon: Radar, title: "Discover", copy: "Tekkzy understands your business, users and challenges." },
  { icon: Target, title: "Design", copy: "Plan the solution architecture and experience." },
  { icon: Code2, title: "Build", copy: "Develop, test and validate with agile execution." },
  { icon: Link2, title: "Connect", copy: "Integrate systems, data and third-party platforms." },
  { icon: Zap, title: "Automate", copy: "Streamline workflows with automation and AI." },
  { icon: BarChart3, title: "Analyze", copy: "Create insights with analytics, dashboards and AI." },
  { icon: RefreshCw, title: "Optimize", copy: "Continuously improve SEO and digital marketing performance." },
  { icon: TrendingUp, title: "Scale", copy: "Scale with confidence as your business grows." },
];

const products: { title: string; copy: string; type: string; accent: string; href: string }[] = [
  { title: "ERP", copy: "Manage your entire business operations, finance, and resources with Tekkzy ERP.", type: "erp", accent: "#1e64f0", href: "/products/erp" },
  { title: "CRM", copy: "Build stronger customer relationships, track deals, and grow with Tekkzy CRM.", type: "crm", accent: "#3f60ea", href: "/products/crm" },
  { title: "AI Assistant", copy: "Ask questions, analyze data, and take action with Tekkzy AI Assistant.", type: "ai", accent: "#7157ee", href: "/products/ai-assistant" },
  { title: "SEO", copy: "Rank higher on Google with Tekkzy SEO — keyword research, on-page optimization, technical audits, link building and organic growth strategies.", type: "analytics", accent: "#f59e0b", href: "/products/seo" },
  { title: "Automation", copy: "Automate repetitive workflows, approvals, and processes with Tekkzy Automation.", type: "automation", accent: "#20a68c", href: "/products/automation" },
  { title: "Analytics", copy: "Discover real-time insights with interactive Tekkzy Analytics dashboards.", type: "analytics", accent: "#4565cf", href: "/products/analytics" },
  { title: "HR Suite", copy: "Manage employees, payroll, attendance, and performance in Tekkzy HR Suite.", type: "hr", accent: "#e05690", href: "/products/hr-suite" },
  { title: "Inventory", copy: "Track stock levels, manage warehouses, and optimize supply chain with Tekkzy Inventory.", type: "inventory", accent: "#d97b1e", href: "/products/inventory" },
  { title: "Digital Marketing", copy: "Plan campaigns, track conversions, and grow your audience with Tekkzy Digital Marketing.", type: "marketing", accent: "#2ba88e", href: "/products/digital-marketing" },
];

const testimonials = [
  { quote: "Tekkzy Intelligent Cloud transformed how we operate. Everything is connected, automated and scalable.", name: "Rajesh Sharma", role: "CTO, TechCorp", logo: "TechCorp", image: "https://i.pravatar.cc/150?u=rajesh" },
  { quote: "The automation and AI capabilities helped us save hundreds of hours every month and improved accuracy.", name: "Priya Mehta", role: "Head of Operations, NextGen", logo: "NextGen", image: "https://i.pravatar.cc/150?u=priya" },
  { quote: "We finally have real visibility into our business. The dashboards and insights are game-changing.", name: "Arjun Patel", role: "COO, Quantum", logo: "Quantum", image: "https://i.pravatar.cc/150?u=arjun" },
  { quote: "Their team understood our business and built a solution that fits perfectly. Support has been excellent.", name: "Sneha Iyer", role: "Director, Velocity", logo: "Velocity", image: "https://i.pravatar.cc/150?u=sneha" },
  { quote: "The platform scaled effortlessly with our traffic spikes. A robust and reliable architecture.", name: "David Chen", role: "VP Engineering, Synergy", logo: "Synergy", image: "https://i.pravatar.cc/150?u=david" },
];

const industries = [
  { icon: Store, name: "Retail", copy: "Unified commerce and customer experiences", href: "/industries/retail" },
  { icon: HeartPulse, name: "Healthcare", copy: "Digital healthcare and patient systems", href: "/industries/healthcare" },
  { icon: LineChart, name: "Finance", copy: "Secure, compliant and high-performance systems", href: "/industries/finance" },
  { icon: PackageCheck, name: "Manufacturing", copy: "Smart operations and supply chains", href: "/industries/manufacturing" },
  { icon: PanelTop, name: "Real Estate", copy: "Manage properties and customer lifecycle", href: "/industries/real-estate" },
  { icon: ShoppingBag, name: "Logistics", copy: "Optimize fleet, routes and networks", href: "/industries/logistics" },
  { icon: UsersRound, name: "Education", copy: "Learning platforms and student systems", href: "/industries/education" },
];

function ProductVisual({ type, accent }: { type: string; accent: string }) {
  return (
    <div className={`product-visual ${type}`} style={{ "--accent": accent } as React.CSSProperties}>
      <div className="visual-top"><i /><i /><i /><span /></div>
      <div className="visual-sidebar"><b /><b /><b /><b /><b /><b /></div>
      {type === "analytics" && <><div className="chart-bars"><i /><i /><i /><i /><i /><i /><i /></div><div className="chart-line" /><div className="chart-area" /></>}
      {type === "ai" && <><div className="chat-dot" /><div className="chat-bubble big" /><div className="chat-bubble small" /><div className="chat-bubble reply" /></>}
      {type === "automation" && <><div className="flow-node n1" /><div className="flow-node n2" /><div className="flow-node n3" /><div className="flow-node n4" /><div className="flow-line l1" /><div className="flow-line l2" /><div className="flow-line l3" /></>}
      {(type === "erp" || type === "crm") && <><div className="visual-table"><i /><i /><i /><i /><i /></div><div className="donut" /><div className="mini-stat" /></>}
      {type === "hr" && <><div className="hr-profile" /><div className="hr-profile p2" /><div className="hr-profile p3" /><div className="hr-bar" /><div className="hr-bar b2" /><div className="hr-bar b3" /></>}
      {type === "inventory" && <><div className="inv-box" /><div className="inv-box x2" /><div className="inv-box x3" /><div className="inv-meter" /><div className="inv-label" /></>}
      {type === "marketing" && <><div className="mkt-funnel" /><div className="mkt-bar" /><div className="mkt-bar m2" /><div className="mkt-bar m3" /><div className="mkt-dot" /></>}
    </div>
  );
}

export default function Home() {
  const reduced = useReducedMotion();
  const floatTransition = { duration: 4, repeat: Infinity, repeatType: "reverse" as const, ease: "easeInOut" as const };

  return (
    <main>


      <section id="top" className="hero section-shell">
        <div className="hero-copy">
          <Reveal><Pill icon={Sparkles}>TEKKZY INTELLIGENT CLOUD</Pill></Reveal>
          <Reveal delay={0.08}><h1>BUILD THE<br /><span>SYSTEMS</span><br />THAT MOVE YOUR<br />BUSINESS.</h1></Reveal>
          <Reveal delay={0.14}><p>Tekkzy Intelligent Cloud connects your software, data, AI, digital marketing, automation and infrastructure into one intelligent platform built for growth.</p></Reveal>
          <Reveal delay={0.2} className="hero-actions"><a className="button" href="#solution">Explore Platform <ArrowRight size={16} /></a><a className="button button-outline" href="#journey"><PlayCircle size={15} /> How It Works</a></Reveal>
          <Reveal delay={0.26} className="trust-row"><span><BrainCircuit /> AI-Powered</span><span><ShieldCheck /> Secure by Design</span><span><Cloud /> Cloud Native</span><span><Network /> Scalable</span><span><Check /> Reliable</span></Reveal>
          <Reveal delay={0.32} className="hero-logos-bar">
            <span className="logos-title">TRUSTED BY BUSINESSES<br/>WORLDWIDE</span>
            <div className="logos-list">
              <span><Box size={18} /> TechCorp</span>
              <span><Hexagon size={18} /> NextGen</span>
              <span><Command size={18} /> Quantum</span>
              <span><Activity size={18} /> Velocity</span>
              <span><Shuffle size={18} /> Synergy</span>
              <span><Aperture size={18} /> CleverSoft</span>
            </div>
          </Reveal>
        </div>

        <div className="hero-diagram" aria-label="Platform integration diagram">
          <div className="dot-field" />
          
          <svg className="diagram-lines" viewBox="0 0 800 600" preserveAspectRatio="none">
            {/* Top (Digital Experience) */}
            <path d="M 400 300 L 400 120" stroke="#a0b8fa" strokeWidth="2" fill="none" />
            <circle cx="400" cy="120" r="4" fill="#a0b8fa" />
            
            {/* Top Left (Business Systems) */}
            <path d="M 330 300 C 230 300, 230 200, 230 200" stroke="#a7e0c4" strokeWidth="2" fill="none" />
            <circle cx="230" cy="200" r="4" fill="#a7e0c4" />
            
            {/* Bottom Left (Data) */}
            <path d="M 330 340 C 210 340, 210 400, 210 400" stroke="#a7e0c4" strokeWidth="2" fill="none" />
            <circle cx="210" cy="400" r="4" fill="#a7e0c4" />
            
            {/* Top Right (Intelligence) */}
            <path d="M 470 290 C 580 290, 580 220, 580 220" stroke="#d5c8fa" strokeWidth="2" fill="none" />
            <circle cx="580" cy="220" r="4" fill="#d5c8fa" />
            
            {/* Bottom Right (Automation) */}
            <path d="M 470 350 C 560 350, 560 410, 560 410" stroke="#fbdec7" strokeWidth="2" fill="none" />
            <circle cx="560" cy="410" r="4" fill="#fbdec7" />
            
            {/* Bottom (Cloud & Infrastructure) */}
            <path d="M 400 380 L 400 470" stroke="#a0b8fa" strokeWidth="2" fill="none" />
            <circle cx="400" cy="470" r="4" fill="#a0b8fa" />
          </svg>

          <motion.div className="diagram-node digital" animate={reduced ? {} : { y: [-2, 2] }} transition={{...floatTransition, delay: 0}}>
            <DiagramBox icon={MonitorSmartphone} title="DIGITAL EXPERIENCE" items={["Web", "Mobile", "PWA", "Portal", "E-commerce"]} />
          </motion.div>
          <motion.div className="diagram-node business" animate={reduced ? {} : { y: [-2, 2] }} transition={{ ...floatTransition, delay: 0.4 }}>
            <DiagramBox icon={BriefcaseBusiness} title="BUSINESS SYSTEMS" items={["ERP", "CRM", "HR", "Finance", "Inventory"]} />
          </motion.div>
          <motion.div className="diagram-node data" animate={reduced ? {} : { y: [-2, 2] }} transition={{ ...floatTransition, delay: 0.8 }}>
            <DiagramBox icon={Database} title="DATA" items={["Databases", "Warehouse", "Integration"]} />
          </motion.div>
          <motion.div className="diagram-node intelligence" animate={reduced ? {} : { y: [-2, 2] }} transition={{ ...floatTransition, delay: 0.5 }}>
            <DiagramBox icon={BrainCircuit} title="INTELLIGENCE" items={["AI", "Analytics", "Automation"]} />
          </motion.div>
          <motion.div className="diagram-node automation" animate={reduced ? {} : { y: [-2, 2] }} transition={{ ...floatTransition, delay: 1.1 }}>
            <DiagramBox icon={Zap} title="AUTOMATION" items={["Workflows", "Approvals", "AI Agents"]} />
          </motion.div>
          
          <motion.div className="diagram-node cloud-infra-node" animate={reduced ? {} : { y: [-2, 2] }} transition={{ ...floatTransition, delay: 0.2 }}>
            <DiagramBox icon={Cloud} title="CLOUD & INFRASTRUCTURE" items={["Cloud", "Security", "Scalability", "Backup"]} />
          </motion.div>

          <div className="core-cloud" data-gsap-pulse>
            <img src="/LOGO.png" alt="Tekkzy Logo" style={{ width: '60px', height: 'auto', marginBottom: '8px', filter: 'drop-shadow(0 4px 6px rgba(0,0,0,0.1))' }} />
            <span>TEKKZY<br/>INTELLIGENT CLOUD</span>
          </div>
        </div>
      </section>

      <section className="proof-strip section-shell" aria-label="Platform highlights">
        <Reveal className="proof-item"><span>01</span><div><strong>One connected Tekkzy core</strong><p>Tekkzy systems, data and teams working from the same source of truth.</p></div></Reveal>
        <Reveal delay={0.08} className="proof-item"><span>02</span><div><strong>Built for real-world scale</strong><p>Flexible foundations that evolve as your business gets bigger.</p></div></Reveal>
        <Reveal delay={0.16} className="proof-item"><span>03</span><div><strong>Designed around outcomes</strong><p>Every workflow is focused on velocity, clarity and measurable impact.</p></div></Reveal>
      </section>

      <section className="challenge-section section-shell">
        <Reveal><SectionIntro eyebrow="THE CHALLENGE" title={<>Disconnected systems<br />create real business problems without Tekkzy.</>} /></Reveal>
        <div className="challenge-grid">
          {challengeItems.map(({ icon: Icon, title, copy }, index) => <Reveal key={title} delay={index * 0.06} className="challenge-card"><Icon /><h3>{title}</h3><p>{copy}</p></Reveal>)}
        </div>
      </section>

      <section id="solution" className="solution-section section-shell">
        <div className="solution-sticky-left">
          <SectionIntro eyebrow="THE SOLUTION" title={<>One intelligent platform.<br />Everything connected.</>} copy="Tekkzy Intelligent Cloud brings everything together—your apps, data, AI, and automation—so you can move faster, work smarter and grow confidently." link="Explore Platform" href="/solutions" />
        </div>
        <div className="solution-scroll-right">
          <Reveal className="layer-card experience-card">
            <div className="layer-header">
              <b>DIGITAL EXPERIENCE</b>
              <p>Engage your customers with modern, seamless interfaces across all digital touchpoints.</p>
            </div>
            <div className="layer-items">
              <span><MonitorSmartphone />Web</span><span><TabletSmartphone />Mobile</span><span><Globe2 />PWA</span><span><Cloud />Portal</span><span><Network />E-commerce</span>
            </div>
            <Link href="/product/solutions/digital-experience" className="layer-know-more">Know More <ArrowRight size={14} /></Link>
          </Reveal>
          
          <Reveal delay={0.06} className="layer-card growth-card">
            <div className="layer-header">
              <b>GROWTH & APPLICATIONS</b>
              <p>Scale your business with tailored software and data-driven marketing tools.</p>
            </div>
            <div className="layer-items">
              <span><ScanLine />Digital Marketing</span><span><Target />SEO</span><span><Waypoints />Custom Software</span><span><Blocks />SaaS</span>
            </div>
            <Link href="/product/solutions/growth-applications" className="layer-know-more">Know More <ArrowRight size={14} /></Link>
          </Reveal>

          <Reveal delay={0.06} className="layer-card core-card">
            <div className="layer-header">
              <b>CORE BUSINESS & INTELLIGENCE</b>
              <p>The operational heart of your organization powered by real-time analytics and automation.</p>
            </div>
            <div className="core-grid">
              <DiagramBox title="BUSINESS SYSTEMS" items={["ERP", "CRM", "HR", "Finance", "Inventory", "Operations"]} />
              <DiagramBox title="INTELLIGENCE" items={["AI", "Analytics", "BI", "Automation", "Insights"]} />
              <DiagramBox title="AUTOMATION" items={["Workflows", "Approvals", "Notifications", "AI Agents"]} />
            </div>
            <Link href="/product/solutions/core-business" className="layer-know-more">Know More <ArrowRight size={14} /></Link>
          </Reveal>

          <Reveal delay={0.06} className="layer-card data-card">
            <div className="layer-header">
              <b>DATA LAYER</b>
              <p>A single source of truth for all your structured and unstructured business data.</p>
            </div>
            <div className="layer-items">
              <span><Database />Databases</span><span><ServerCog />Data Warehouse</span><span><Link2 />Data Integration</span>
            </div>
            <Link href="/product/solutions/data-layer" className="layer-know-more">Know More <ArrowRight size={14} /></Link>
          </Reveal>

          <Reveal delay={0.06} className="layer-card infra-card">
            <div className="layer-header">
              <b>CLOUD & INFRASTRUCTURE</b>
              <p>Reliable, secure, and infinitely scalable foundations for your enterprise.</p>
            </div>
            <div className="layer-items">
              <span><Cloud />Cloud</span><span><ShieldCheck />Security</span><span><TrendingUp />Scalability</span><span><Activity />Monitoring</span><span><RefreshCw />Backup</span>
            </div>
            <Link href="/product/solutions/cloud-infrastructure" className="layer-know-more">Know More <ArrowRight size={14} /></Link>
          </Reveal>
        </div>
      </section>

      <section className="outcomes-section section-shell">
        <Reveal className="outcomes-copy"><SectionIntro eyebrow="WHAT CHANGES WHEN EVERYTHING CONNECTS" title={<>A clearer way to<br />run your business with Tekkzy.</>} copy="Replace handoffs, workarounds and disconnected data with the Tekkzy platform that gives every team a shared picture of what matters now." /><ul><li><Check />Bring customer, operational and financial data together.</li><li><Check />Turn repeatable work into reliable, intelligent workflows.</li><li><Check />Give leaders a live view of performance and opportunities.</li></ul><Link className="button button-outline" href="/product/whats-possible">See what&apos;s possible <ArrowRight size={15} /></Link></Reveal>
        <div className="outcome-bento">
          <Reveal delay={0.06} className="bento-card bento-primary"><span className="bento-kicker">CONNECTED INTELLIGENCE</span><h3>Every signal, in one place.</h3><div className="signal-rings" data-gsap-orbit><i /><i /><i /><b><BrainCircuit /></b></div></Reveal>
          <Reveal delay={0.12} className="bento-card metric-card"><span className="metric-value">360°</span><p>view across your business</p><Eye /></Reveal>
          <Reveal delay={0.18} className="bento-card metric-card"><span className="metric-value">24/7</span><p>automation working for you</p><Bot /></Reveal>
        </div>
      </section>

      <section className="capabilities-section section-shell">
        <Reveal><SectionIntro eyebrow="CORE CAPABILITIES" title="Powerful capabilities. Built for modern businesses." /></Reveal>
        <div className="capability-grid">
          {capabilities.map(({ icon: Icon, title, copy, tint, href }, index) => <Reveal key={title} delay={index * 0.045} className="capability"><div className={`icon-square ${tint}`} data-gsap-icon><Icon size={21} /></div><h3>{title}</h3><p>{copy}</p><Link href={href}>Explore <ArrowRight size={13} /></Link></Reveal>)}
        </div>
      </section>

      <section className="architecture-section section-shell">
        <Reveal><SectionIntro eyebrow="PLATFORM ARCHITECTURE" title={<>A modern Tekkzy architecture<br />built to scale.</>} copy="Every layer of Tekkzy Intelligent Cloud is designed to work together seamlessly." link="View Architecture" /></Reveal>
        <Reveal delay={0.12} className="architecture-grid">
          {architecture.map(({ icon: Icon, name, copy }) => <div key={name} className="architecture-card"><Icon /><h3>{name}</h3><p>{copy}</p></div>)}
        </Reveal>

      </section>

      <DigitalMarketingSection />

      <section id="journey" className="journey-section section-shell">
        <Reveal><SectionIntro eyebrow="HOW IT WORKS" title={<>From idea to impact.<br />It&apos;s a continuous journey.</>} /></Reveal>
        <div className="journey-grid">
          {journey.map(({ icon: Icon, title, copy }, index) => <Reveal key={title} delay={index * 0.045} className="journey-step"><div className="journey-icon" data-gsap-icon><Icon /></div><h3>{title}</h3><p>{copy}</p></Reveal>)}
        </div>
      </section>

      <section className="delivery-section section-shell">
        <Reveal><span className="eyebrow">DESIGNED FOR MOMENTUM</span><h2>Modern Tekkzy delivery.<br />Built around your people.</h2><p>From the first workshop to your next major milestone, we make complex transformation feel clear, collaborative and achievable.</p></Reveal>
        <div className="delivery-grid">
          <Reveal delay={0.06} className="delivery-card"><span>01</span><div className="delivery-icon" data-gsap-icon><UsersRound /></div><h3>Business-first discovery</h3><p>We map the real decisions, constraints and opportunities behind the brief—before we write a line of code.</p><a href="#contact">Explore our approach <ArrowRight size={14} /></a></Reveal>
          <Reveal delay={0.12} className="delivery-card featured"><span>02</span><div className="delivery-icon" data-gsap-icon><Layers3 /></div><h3>Composed for change</h3><p>Modular technology, thoughtful integrations and practical design give your team room to move.</p><div className="delivery-orbit" data-gsap-orbit><i /><i /><i /><b>+</b></div></Reveal>
          <Reveal delay={0.18} className="delivery-card"><span>03</span><div className="delivery-icon" data-gsap-icon><Activity /></div><h3>Improvement that compounds</h3><p>Once live, every insight and optimization makes the next stage of growth more confident.</p><a href="#contact">Meet the team <ArrowRight size={14} /></a></Reveal>
        </div>
      </section>

      <section id="product" className="products-section">
        <div className="products-sticky-inner section-shell" data-horizontal-section>
          <Reveal className="products-heading"><SectionIntro eyebrow="POWERFUL PRODUCTS, ENDLESS POSSIBILITIES" title={<>Everything you need to build,<br />operate and grow with Tekkzy.</>} copy="Choose the connected products that solve today&apos;s challenge—and add new capabilities as your ambition grows." link="View All Solutions" /><div className="scroll-cue"><span>Scroll to explore</span><i><b /></i></div></Reveal>
          <div className="products-rail-viewport">
            <div className="products-grid" data-horizontal-track>
              {products.map((product, index) => <Reveal key={product.title} delay={index * 0.06} className="product-card"><div data-gsap-card><ProductVisual type={product.type} accent={product.accent} /></div><span className="product-index">{String(index + 1).padStart(2, '0')}</span><h3>{product.title}</h3><p>{product.copy}</p><Link href={product.href}>Explore <ArrowRight size={13} /></Link></Reveal>)}
            </div>
          </div>
        </div>
      </section>

      <section className="social-proof section-shell">
        <Reveal><span className="eyebrow">TRUSTED BY BUSINESSES WORLDWIDE</span><h2>Real impact. Real results.</h2></Reveal>
        <div className="logo-row" aria-label="Customer logos">{["TechCorp", "NextGen", "Quantum", "Velocity", "Synergy", "CleverSoft", "BrightMind"].map((brand) => <span key={brand}><Handshake size={17} />{brand}</span>)}</div>
        <div className="testimonial-carousel-wrapper">
          <div className="testimonial-track">
            <div className="testimonial-group">
              {testimonials.map(({ quote, name, role, logo, image }, index) => (
                <div key={name} className="testimonial">
                  <div className="testimonial-quote">
                    <span className="quote-mark">“</span>
                    <p>{quote}</p>
                  </div>
                  <div className="testimonial-author">
                    <img src={image} alt={name} className="author-img" width={48} height={48} loading="lazy" />
                    <div className="author-info">
                      <strong>{name}</strong>
                      <small>{role}</small>
                    </div>
                    <b className="author-logo">{logo}</b>
                  </div>
                </div>
              ))}
            </div>
            <div className="testimonial-group" aria-hidden="true">
              {testimonials.map(({ quote, name, role, logo, image }, index) => (
                <div key={name + "-dup"} className="testimonial">
                  <div className="testimonial-quote">
                    <span className="quote-mark">“</span>
                    <p>{quote}</p>
                  </div>
                  <div className="testimonial-author">
                    <img src={image} alt={name} className="author-img" width={48} height={48} loading="lazy" />
                    <div className="author-info">
                      <strong>{name}</strong>
                      <small>{role}</small>
                    </div>
                    <b className="author-logo">{logo}</b>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="industries" className="industries-section section-shell">
        <Reveal><SectionIntro eyebrow="BUILT FOR EVERY INDUSTRY" title={<>Tekkzy industry-focused solutions.<br />Purpose-built for you.</>} link="View All Industries" /></Reveal>
        <div className="industry-grid">
          {industries.map(({ icon: Icon, name, copy, href }, index) => <Reveal key={name} delay={index * 0.04} className="industry-card"><div className="industry-art"><Icon /><span /><span /><span /></div><h3>{name}</h3><p>{copy}</p><Link href={href}><ArrowRight size={15} /></Link></Reveal>)}
        </div>
      </section>


      <section id="contact" className="cta-section section-shell">
        <div><h2>Let&apos;s build what&apos;s next with Tekkzy.</h2><p>Tell us about your idea, your challenge or your vision.<br />We&apos;ll help you build the system that gets you there.</p></div>
        <div className="cta-actions"><a className="button" href="mailto:hello@tekkzy.com">Start a Project <ArrowRight size={16} /></a><a className="text-link" href="mailto:hello@tekkzy.com">Talk to an Expert <ArrowRight size={14} /></a></div>
        <div className="isometric" aria-hidden="true"><i /><i /><i /><i /><i /><i /></div>
      </section>


      <button className="tekkbot-fab" aria-label="Ask TekkBot AI" title="Ask TekkBot AI">
        <span className="tekkbot-pulse" />
        <span className="tekkbot-pulse delay" />
        <Bot size={24} />
        <span className="tekkbot-label">Ask TekkBot AI</span>
      </button>
    </main>
  );
}
