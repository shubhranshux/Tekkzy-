"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

interface NavbarProps {
  showLogo?: boolean;
}

export function Navbar({ showLogo = true }: NavbarProps) {
  const pathname = usePathname();

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
        <Link href="/contact" className="button button-small">
          Start a Project <ArrowRight size={14} />
        </Link>
      </div>
    </header>
  );
}

export default Navbar;
