"use client";

import { ArrowRight, Moon, Sun } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

interface NavbarProps {
  showLogo?: boolean;
}

export function Navbar({ showLogo = true }: NavbarProps) {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const pathname = usePathname();

  useEffect(() => {
    const savedTheme = window.localStorage.getItem("tekkzy-theme");
    const preferredTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    const nextTheme = savedTheme === "dark" || savedTheme === "light" ? savedTheme : preferredTheme;

    setTheme(nextTheme);
    document.documentElement.dataset.theme = nextTheme;
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "light" ? "dark" : "light";
    setTheme(nextTheme);
    document.documentElement.dataset.theme = nextTheme;
    window.localStorage.setItem("tekkzy-theme", nextTheme);
  };

  return (
    <header className="navbar">
      <Link href="/#top" className="brand" aria-label="Tekkzy home" style={{ minWidth: '150px' }}>
        {showLogo && (
          <motion.img
            layoutId="brand-logo"
            transition={{ layout: { type: "spring", stiffness: 200, damping: 30, mass: 1 } }}
            src="/LOGO.png"
            alt="Tekkzy"
            className="brand-logo"
          />
        )}
        <span className="brand-text">Tekkzy</span>
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
  );
}

export default Navbar;
