"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";

import {
  ArrowRight,
  BrainCircuit,
  Globe2,
  LineChart,
  Rocket,
  ShieldCheck,
  Sparkles,
  Target,
  UsersRound,
  Bot,
  Network,
  Database,
  ServerCog,
  CheckCircle2,
  XCircle,
  Zap
} from "lucide-react";
import Image from "next/image";

function Reveal({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const reduced = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: reduced ? 0 : 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

const Marquee = () => {
  return (
    <div className="relative flex overflow-x-hidden group bg-accent-blue/5 border-y border-border/50 py-12">
      <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background z-10 w-full" />
      <motion.div 
        initial={{ x: "0" }}
        animate={{ x: "-100%" }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        className="flex space-x-16 min-w-full items-center pl-16 opacity-60"
      >
        {["Salesforce", "SAP", "Oracle", "HubSpot", "Zendesk", "Shopify", "Stripe", "AWS", "Azure", "Google Cloud", "Snowflake", "Databricks"].map((brand, i) => (
          <span key={i} className="text-2xl font-bold font-[var(--font-gelasio)] text-muted-dark whitespace-nowrap">
            {brand}
          </span>
        ))}
      </motion.div>
      <motion.div 
        initial={{ x: "0" }}
        animate={{ x: "-100%" }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        className="flex space-x-16 min-w-full items-center pl-16 opacity-60 absolute top-12 left-full"
      >
        {["Salesforce", "SAP", "Oracle", "HubSpot", "Zendesk", "Shopify", "Stripe", "AWS", "Azure", "Google Cloud", "Snowflake", "Databricks"].map((brand, i) => (
          <span key={i + 'dup'} className="text-2xl font-bold font-[var(--font-gelasio)] text-muted-dark whitespace-nowrap">
            {brand}
          </span>
        ))}
      </motion.div>
    </div>
  );
};

export default function WhatsPossible() {
  const floatAnimation = {
    y: [-10, 10],
    transition: { duration: 4, repeat: Infinity, repeatType: "reverse" as const, ease: "easeInOut" as const }
  };

  return (
    <main className="min-h-screen bg-background overflow-hidden selection:bg-accent-blue/20 selection:text-accent-blue">
      

      {/* Hero Section */}
      <section className="relative pt-40 pb-20 md:pt-52 md:pb-32 px-6 lg:px-[60px] max-w-[1400px] mx-auto min-h-[90vh] flex items-center">
        {/* Background glowing effects */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent-blue/20 rounded-full blur-[120px] opacity-50 -z-10" />
        <div className="absolute top-1/3 left-2/3 w-[600px] h-[600px] bg-accent-purple/20 rounded-full blur-[100px] opacity-40 -z-10" />

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="max-w-2xl relative z-10">
            <Reveal>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-blue/10 border border-accent-blue/20 text-accent-blue text-sm font-bold tracking-wider mb-8">
                <Sparkles size={16} /> UNLIMITED POTENTIAL
              </span>
            </Reveal>
            <Reveal delay={0.1}>
              <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-extrabold leading-[1.05] tracking-tight text-text mb-8">
                Imagine what&apos;s <span className="text-transparent bg-clip-text bg-gradient-to-br from-accent-blue to-cyan-400">possible</span> when everything works as one.
              </h1>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-xl md:text-2xl text-muted leading-relaxed mb-10 max-w-xl">
                Tekkzy isn&apos;t just a collection of tools. It&apos;s a unified intelligent ecosystem that transforms how your team operates, scales, and innovates.
              </p>
            </Reveal>
            <Reveal delay={0.3} className="flex flex-col sm:flex-row gap-4">
              <Link href="#possibilities" className="inline-flex justify-center items-center gap-2 bg-text text-background px-8 py-4 rounded-full font-semibold hover:bg-accent-blue hover:text-white transition-all duration-300">
                Explore the Future <ArrowRight size={18} />
              </Link>
            </Reveal>
          </div>

          {/* Abstract Hero Visual */}
          <Reveal delay={0.4} className="relative h-[500px] lg:h-[700px] w-full hidden md:block">
            <motion.div animate={floatAnimation} className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-full h-full max-w-[500px] max-h-[500px]">
                {/* Orbital Rings */}
                <div className="absolute inset-0 rounded-full border border-border/40 animate-[spin_30s_linear_infinite]" />
                <div className="absolute inset-8 rounded-full border border-accent-blue/20 border-dashed animate-[spin_20s_linear_infinite_reverse]" />
                <div className="absolute inset-16 rounded-full border border-border/30 animate-[spin_40s_linear_infinite]" />
                
                {/* Floating Nodes */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-surface rounded-xl border border-border flex items-center justify-center shadow-2xl backdrop-blur-md">
                  <Database size={24} className="text-accent-blue" />
                </div>
                <div className="absolute bottom-1/4 left-0 -translate-x-1/2 w-14 h-14 bg-surface rounded-full border border-border flex items-center justify-center shadow-2xl backdrop-blur-md">
                  <Network size={24} className="text-accent-purple" />
                </div>
                <div className="absolute top-1/4 right-0 translate-x-1/2 w-16 h-16 bg-surface rounded-2xl border border-border flex items-center justify-center shadow-2xl backdrop-blur-md">
                  <Bot size={28} className="text-cyan-500" />
                </div>

                {/* Core */}
                <div className="absolute inset-0 m-auto w-32 h-32 bg-gradient-to-br from-accent-blue to-accent-purple rounded-3xl rotate-12 flex items-center justify-center shadow-[0_0_80px_rgba(18,90,245,0.4)]">
                  <BrainCircuit size={48} className="text-white -rotate-12" />
                </div>
              </div>
            </motion.div>
          </Reveal>
        </div>
      </section>

      {/* Marquee Section */}
      <section className="pb-24">
        <Reveal>
          <p className="text-center text-sm font-semibold tracking-widest text-muted-dark uppercase mb-8">Connects seamlessly with your existing stack</p>
        </Reveal>
        <Marquee />
      </section>

      {/* Before/After Section */}
      <section className="py-24 px-6 lg:px-[60px] max-w-[1400px] mx-auto">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-text mb-6">The cost of chaos vs. The power of clarity</h2>
            <p className="text-lg text-muted">See what happens when you stop managing workarounds and start accelerating outcomes.</p>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Before */}
          <Reveal delay={0.1}>
            <div className="bg-surface/50 border border-border rounded-3xl p-8 md:p-12 relative overflow-hidden group hover:border-red-500/20 transition-colors">
              <div className="absolute top-0 right-0 w-64 h-64 bg-red-500/5 rounded-full blur-[80px]" />
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-full bg-red-500/10 flex items-center justify-center text-red-500">
                  <XCircle size={24} />
                </div>
                <h3 className="text-2xl font-bold text-text">The Old Way</h3>
              </div>
              <ul className="space-y-6">
                {[
                  "Data scattered across 15+ disconnected tools",
                  "Manual data entry leading to costly errors",
                  "Weeks to generate meaningful business reports",
                  "IT bottlenecks blocking team agility",
                  "Security vulnerabilities from shadow IT"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4 text-muted">
                    <span className="w-6 h-6 rounded-full bg-red-500/10 text-red-500 flex items-center justify-center shrink-0 mt-0.5"><span className="text-xs font-bold">{i+1}</span></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          {/* After */}
          <Reveal delay={0.2}>
            <div className="bg-gradient-to-br from-accent-blue/10 to-accent-purple/10 border border-accent-blue/20 rounded-3xl p-8 md:p-12 relative overflow-hidden shadow-[0_0_40px_rgba(18,90,245,0.05)]">
              <div className="absolute top-0 right-0 w-64 h-64 bg-accent-blue/20 rounded-full blur-[80px]" />
              <div className="flex items-center gap-4 mb-8 relative z-10">
                <div className="w-12 h-12 rounded-full bg-accent-blue flex items-center justify-center text-white shadow-lg shadow-accent-blue/30">
                  <CheckCircle2 size={24} />
                </div>
                <h3 className="text-2xl font-bold text-text">The Tekkzy Way</h3>
              </div>
              <ul className="space-y-6 relative z-10">
                {[
                  "One unified source of truth for the entire business",
                  "Intelligent workflows that automate the mundane",
                  "Real-time analytics and predictive AI insights",
                  "Empowered teams building at the speed of thought",
                  "Bank-grade security and governance by default"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4 text-text font-medium">
                    <span className="w-6 h-6 rounded-full bg-accent-blue/20 text-accent-blue flex items-center justify-center shrink-0 mt-0.5"><CheckCircle2 size={14} /></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Bento Grid Features */}
      <section id="possibilities" className="py-24 px-6 lg:px-[60px] max-w-[1400px] mx-auto">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-text mb-6">Endless Possibilities. Real Impact.</h2>
            <p className="text-lg text-muted">Discover how our intelligent cloud platform empowers every facet of your organization.</p>
          </div>
        </Reveal>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[300px]">
          {/* Feature 1: Automate (Large) */}
          <Reveal className="md:col-span-2 lg:col-span-2 row-span-2 group" delay={0.1}>
            <div className="h-full w-full bg-gradient-to-br from-accent-blue to-[#0a3bb5] rounded-[32px] p-10 relative overflow-hidden flex flex-col justify-end text-white shadow-xl">
              <div className="absolute top-0 right-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay" />
              <div className="absolute -right-20 -top-20 text-white/10 group-hover:scale-110 group-hover:-rotate-12 transition-transform duration-700">
                <Bot size={400} strokeWidth={1} />
              </div>
              <div className="relative z-10 max-w-lg">
                <div className="w-14 h-14 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center mb-6">
                  <Zap size={28} />
                </div>
                <h3 className="text-4xl font-bold mb-4">Automate the Mundane</h3>
                <p className="text-lg text-white/80 leading-relaxed">
                  Say goodbye to repetitive tasks. TekkBot AI learns your workflows and automates them effortlessly, saving thousands of hours and eliminating human error.
                </p>
              </div>
            </div>
          </Reveal>

          {/* Feature 2: Global Scale */}
          <Reveal delay={0.2} className="group">
            <div className="h-full w-full bg-surface border border-border rounded-[32px] p-8 relative overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-12 h-12 bg-accent-blue/10 text-accent-blue rounded-xl flex items-center justify-center mb-6">
                <Globe2 size={24} />
              </div>
              <h3 className="text-2xl font-bold text-text mb-3">Global Scale</h3>
              <p className="text-muted leading-relaxed">Deploy infrastructure across the globe instantly. Built to handle massive spikes and endless growth.</p>
            </div>
          </Reveal>

          {/* Feature 3: Insights */}
          <Reveal delay={0.3} className="group">
            <div className="h-full w-full bg-surface border border-border rounded-[32px] p-8 relative overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-12 h-12 bg-accent-purple/10 text-accent-purple rounded-xl flex items-center justify-center mb-6">
                <LineChart size={24} />
              </div>
              <h3 className="text-2xl font-bold text-text mb-3">Instant Insights</h3>
              <p className="text-muted leading-relaxed">Real-time analytics that give you an absolute pulse on revenue, engagement, and operational health.</p>
            </div>
          </Reveal>

          {/* Feature 4: Security (Wide) */}
          <Reveal className="md:col-span-2 row-span-1 group" delay={0.4}>
            <div className="h-full w-full bg-[#0a1122] rounded-[32px] p-10 relative overflow-hidden flex items-center gap-10">
              <div className="absolute inset-0 bg-gradient-to-r from-accent-blue/10 to-transparent opacity-50" />
              <div className="relative z-10 flex-1">
                <div className="inline-block px-3 py-1 rounded-full bg-green-500/20 text-green-400 text-xs font-bold tracking-wider mb-4 border border-green-500/30">SECURITY FIRST</div>
                <h3 className="text-3xl font-bold text-white mb-4">Bank-grade Protection</h3>
                <p className="text-[#a1b2ce] leading-relaxed max-w-md">
                  Enterprise security isn&apos;t an afterthought. With built-in zero-trust architecture, advanced encryption, and 24/7 monitoring.
                </p>
              </div>
              <div className="relative z-10 hidden sm:flex w-40 h-40 shrink-0 bg-white/5 border border-white/10 rounded-full items-center justify-center group-hover:scale-110 transition-transform duration-500">
                <ShieldCheck size={64} className="text-green-400" />
              </div>
            </div>
          </Reveal>
          
          {/* Feature 5: Unified Teams */}
          <Reveal delay={0.5} className="group">
            <div className="h-full w-full bg-surface border border-border rounded-[32px] p-8 relative overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-12 h-12 bg-cyan-500/10 text-cyan-500 rounded-xl flex items-center justify-center mb-6">
                <UsersRound size={24} />
              </div>
              <h3 className="text-2xl font-bold text-text mb-3">Unified Teams</h3>
              <p className="text-muted leading-relaxed">Connect HR, sales, and dev teams in one single source of truth to break down silos.</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6 lg:px-[60px] max-w-[1400px] mx-auto">
        <Reveal>
          <div className="bg-gradient-to-br from-surface to-background border border-border rounded-[40px] p-12 md:p-24 text-center relative overflow-hidden shadow-2xl">
            {/* Decorative background shapes */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent-blue/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent-purple/10 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/3" />
            
            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-6xl font-bold text-text mb-8 tracking-tight">Ready to unlock your ultimate potential?</h2>
              <p className="text-xl text-muted mb-12">
                Join the forward-thinking companies already building their future on Tekkzy. The next generation of your business starts here.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="inline-flex justify-center items-center gap-2 bg-accent-blue text-white px-8 py-4 rounded-full font-semibold hover:bg-blue-600 transition-all duration-300 shadow-lg shadow-accent-blue/30 hover:-translate-y-1">
                  Start Your Journey <Rocket size={18} />
                </Link>
                <Link href="/solutions" className="inline-flex justify-center items-center gap-2 bg-surface text-text border border-border px-8 py-4 rounded-full font-semibold hover:bg-background transition-all duration-300 hover:-translate-y-1">
                  Explore Solutions
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Standard Footer */}
      <footer className="border-t border-border/50 py-12 px-6 lg:px-[60px] max-w-[1400px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <Link href="/" className="flex items-center gap-3">
            <Image src="/LOGO.png" alt="Tekkzy" width={100} height={32} className="object-contain" />
          </Link>
          <span className="text-muted text-sm">© {new Date().getFullYear()} Tekkzy. Built for what&apos;s next.</span>
          <div className="flex gap-6 text-sm font-medium text-muted-dark">
            <Link href="/#product" className="hover:text-accent-blue transition-colors">Product</Link>
            <Link href="/solutions" className="hover:text-accent-blue transition-colors">Solutions</Link>
            <Link href="/contact" className="hover:text-accent-blue transition-colors">Contact</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
