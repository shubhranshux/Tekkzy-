"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Moon, Sun } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

/**
 * Three-phase opening animation:
 *  1. "reveal"  – logo clip-path reveal at screen center
 *  2. "fly"     – logo shrinks & flies to the navbar position
 *  3. "done"    – splash gone, regular page visible
 *
 * Uses a SINGLE flying logo element to avoid duplication.
 */
export function AppShell({ children }: { children: React.ReactNode }) {
  const [phase, setPhase] = useState<"reveal" | "fly" | "done">("reveal");
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [targetPos, setTargetPos] = useState<{ top: number; left: number }>({ top: 20, left: 38 });
  const pathname = usePathname();
  const navLogoRef = useRef<HTMLImageElement>(null);

  /* ── Phase transitions ── */
  useEffect(() => {
    const timer = setTimeout(() => {
      // Measure navbar logo position BEFORE switching phase
      if (navLogoRef.current) {
        const rect = navLogoRef.current.getBoundingClientRect();
        setTargetPos({ top: rect.top, left: rect.left });
      }
      setPhase("fly");
    }, 1800);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (phase === "fly") {
      const timer = setTimeout(() => setPhase("done"), 1400);
      return () => clearTimeout(timer);
    }
  }, [phase]);

  /* ── Lock scroll during animation ── */
  useEffect(() => {
    document.body.style.overflow = phase !== "done" ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [phase]);

  /* ── Theme ── */
  useEffect(() => {
    const saved = window.localStorage.getItem("tekkzy-theme");
    const preferred = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    const next = saved === "dark" || saved === "light" ? saved : preferred;
    setTheme(next);
    document.documentElement.dataset.theme = next;
  }, []);

  const toggleTheme = () => {
    const next = theme === "light" ? "dark" : "light";
    setTheme(next);
    document.documentElement.dataset.theme = next;
    window.localStorage.setItem("tekkzy-theme", next);
  };

  return (
    <>
      {/* ── 1. Splash background overlay ── */}
      <AnimatePresence>
        {phase !== "done" && (
          <motion.div
            key="splash-bg"
            initial={{ opacity: 1 }}
            animate={{ opacity: phase === "fly" ? 0 : 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 9998,
              backgroundColor: "#fff",
              pointerEvents: phase === "fly" ? "none" : "auto",
            }}
          />
        )}
      </AnimatePresence>

      {/* ── 2. Single flying logo (center → navbar) ── */}
      {/* NO AnimatePresence — removed instantly when done so it 
          doesn't overlap with the navbar logo */}
      {phase !== "done" && (
        <motion.img
          key="flying-logo"
          src="/LOGO.png"
          alt="Tekkzy"
          style={{
            position: "fixed",
            zIndex: 10000,
            width: "auto",
            objectFit: "contain",
          }}
          initial={{
            top: "50%",
            left: "50%",
            x: "-50%",
            y: "-50%",
            height: 80,
            clipPath: "inset(0 100% 0 0)",
            filter: "blur(4px)",
          }}
          animate={
            phase === "reveal"
              ? {
                  top: "50%",
                  left: "50%",
                  x: "-50%",
                  y: "-50%",
                  height: 80,
                  clipPath: "inset(0 0% 0 0)",
                  filter: "blur(0px)",
                }
              : {
                  top: targetPos.top,
                  left: targetPos.left,
                  x: 0,
                  y: 0,
                  height: 42,
                  clipPath: "inset(0 0% 0 0)",
                  filter: "blur(0px)",
                }
          }
          transition={
            phase === "reveal"
              ? { duration: 1.2, ease: [0.22, 1, 0.36, 1] }
              : { duration: 1.0, ease: [0.22, 1, 0.36, 1] }
          }
        />
      )}

      {/* ── 3. Main page content ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: phase === "done" ? 1 : 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* ── Navbar ── */}
        <header className="navbar">
          <Link href="/#top" className="brand" aria-label="Tekkzy home" style={{ minWidth: "150px" }}>
            {/* Hidden ref image for position measurement; 
                becomes visible when animation is done.
                LOGO.png already contains "Tekkzy" text, so no extra span needed. */}
            <img
              ref={navLogoRef}
              src="/LOGO.png"
              alt="Tekkzy"
              className="brand-logo"
              style={{ visibility: phase === "done" ? "visible" : "hidden" }}
            />
          </Link>
          <nav aria-label="Main navigation">
            {[
              { label: "Home", href: "/" },
              { label: "About", href: "/about" },
              { label: "Product", href: "/product" },
              { label: "Contact", href: "/contact" },
            ].map(({ label, href }) => {
              const isActive = href === "/" ? pathname === "/" : pathname.startsWith(href);
              return (
                <Link key={label} href={href} className={isActive ? "nav-active" : ""}>
                  {label}
                </Link>
              );
            })}
          </nav>
          <div className="nav-actions">
            <button
              type="button"
              className="theme-toggle"
              onClick={toggleTheme}
              aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
              aria-pressed={theme === "dark"}
              title={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
            >
              <span className="theme-toggle-icon" aria-hidden="true">
                {theme === "light" ? <Moon size={17} /> : <Sun size={18} />}
              </span>
              <span className="theme-toggle-label">{theme === "light" ? "Dark" : "Light"}</span>
            </button>
            <Link href="/contact" className="login">
              Login
            </Link>
            <Link href="/contact" className="button button-small">
              Start a Project <ArrowRight size={14} />
            </Link>
          </div>
        </header>

        {/* ── Page content ── */}
        {children}
      </motion.div>
    </>
  );
}
