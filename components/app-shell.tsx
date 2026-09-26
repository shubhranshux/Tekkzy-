"use client";

import { useState, useEffect } from "react";
import { ArrowRight, Moon, Sun } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function AppShell({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const pathname = usePathname();

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
      <div>
        {/* ── Navbar ── */}
        <header className="navbar">
          <Link href="/#top" className="brand" aria-label="Tekkzy home" style={{ minWidth: "150px" }}>
            <img
              src="/LOGO.png"
              alt="Tekkzy"
              className="brand-logo"
            />
          </Link>
          <nav aria-label="Main navigation">
            {[
              { label: "Home", href: "/" },
              { label: "About", href: "/about" },
              { label: "Product", href: "/product" },
              { label: "Careers", href: "/careers" },
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

            <Link href="/contact" className="button button-small">
              Start a Project <ArrowRight size={14} />
            </Link>
          </div>
        </header>

        {/* ── Page content ── */}
        {children}
      </div>
    </>
  );
}
