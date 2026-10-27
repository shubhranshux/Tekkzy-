"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Search, Menu, X, ChevronDown } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "./layout/navbar.css";

const navPages = [
  {
    label: "About",
    href: "/about",
    id: "about",
    badge: "Company",
    items: [
      { name: "Who We Are", href: "/about" },
      { name: "Our Story & Mission", href: "/about" },
      { name: "Core Principles & Values", href: "/#principles" },
      { name: "Leadership & Team", href: "/about" },
      { name: "Client Stories", href: "/#testimonials" },
    ],
  },
  {
    label: "Product",
    href: "/product",
    id: "product",
    badge: "Ecosystem",
    items: [
      { name: "ERP Command Center", href: "/product" },
      { name: "CRM & Deal Pipeline", href: "/product" },
      { name: "HR Suite & Workforce", href: "/product" },
      { name: "Smart Inventory & Stock", href: "/product" },
      { name: "Executive BI Analytics", href: "/product" },
      { name: "AI Autonomous Copilot", href: "/product" },
      { name: "Workflow Event Pipelines", href: "/product" },
      { name: "Digital Marketing & SEO", href: "/product" },
    ],
  },
  {
    label: "Careers",
    href: "/careers",
    id: "careers",
    badge: "Join Us",
    items: [
      { name: "Open Positions", href: "/careers" },
      { name: "Engineering & AI", href: "/careers" },
      { name: "Growth & Design", href: "/careers" },
      { name: "Internship Pathways", href: "/careers" },
      { name: "Life at Tekkzy", href: "/careers" },
    ],
  },
  {
    label: "Contact",
    href: "/contact",
    id: "contact",
    badge: "Connect",
    items: [
      { name: "Start a Project", href: "/contact" },
      { name: "Schedule a Consultation", href: "/contact" },
      { name: "Enterprise Inquiries", href: "/contact" },
      { name: "Customer Support Desk", href: "/contact" },
    ],
  },
];

export function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [expandedMobileCategory, setExpandedMobileCategory] = useState<string | null>("product");
  const closeTimerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    try {
      window.localStorage.removeItem("tekkzy-theme");
      document.documentElement.removeAttribute("data-theme");
    } catch (_) {}

    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menus upon navigating
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  const handleMouseEnterItem = (id: string) => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
    setActiveDropdown(id);
  };

  const handleMouseLeaveItem = () => {
    closeTimerRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 180);
  };

  const isAnyMenuOpen = activeDropdown !== null || isMobileMenuOpen;

  return (
    <>
      <div className="site-wrapper">
        <div className={`navbar-outer-wrapper ${isAnyMenuOpen ? "navbar-menu-open" : ""}`}>
          {/* ── Main Top Navbar Header ── */}
          <header
            className={`navbar navbar-floating ${scrolled ? "navbar-floating-scrolled" : ""} ${
              isAnyMenuOpen ? "navbar-active-open" : ""
            } ${pathname !== "/" ? "navbar-other-pages" : ""}`}
          >
            <Link href="/" className="brand" aria-label="Tekkzy home" onClick={() => setIsMobileMenuOpen(false)}>
              <img
                src="/LOGO.png"
                alt="Tekkzy"
                className="brand-logo"
              />
            </Link>

            <nav aria-label="Main navigation" className="nav-links-wrap">
              {navPages.map((item) => {
                const isActive = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
                const isDropdownOpen = activeDropdown === item.id;

                return (
                  <div
                    key={item.id}
                    className="nav-item-dropdown-wrap"
                    onMouseEnter={() => handleMouseEnterItem(item.id)}
                    onMouseLeave={handleMouseLeaveItem}
                  >
                    <Link
                      href={item.href}
                      className={`nav-link-item ${isActive ? "nav-link-active" : ""} ${isDropdownOpen ? "nav-link-hovered" : ""}`}
                    >
                      <span>{item.label}</span>
                      <ChevronDown
                        size={13}
                        className={`nav-chevron-icon ${isDropdownOpen ? "nav-chevron-rotated" : ""}`}
                      />
                    </Link>

                    {/* Subcomponents card kept strictly and directly under its main navbar item */}
                    <div
                      className={`nav-sub-dropdown ${isDropdownOpen ? "nav-sub-dropdown-open" : ""}`}
                      onMouseEnter={() => handleMouseEnterItem(item.id)}
                      onMouseLeave={handleMouseLeaveItem}
                    >
                      <div className="nav-col-header">
                        <span className="nav-col-badge">{item.badge}</span>
                      </div>

                      <ul className="nav-mega-links-list">
                        {item.items.map((sub) => (
                          <li key={sub.name} className="nav-mega-li">
                            <Link
                              href={sub.href}
                              className="nav-mega-link-item"
                              onClick={() => {
                                setActiveDropdown(null);
                              }}
                            >
                              <span className="nav-link-indicator" />
                              <span className="nav-link-text">{sub.name}</span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                );
              })}
            </nav>

            <div className="nav-actions">
              <Link href="/contact" className="nav-search-btn" aria-label="Search" onClick={() => setIsMobileMenuOpen(false)}>
                <Search size={18} />
              </Link>

              {/* Mobile menu toggle hamburger */}
              <button
                type="button"
                className="nav-mobile-toggle-btn"
                aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
                aria-expanded={isMobileMenuOpen}
                onClick={() => setIsMobileMenuOpen((prev) => !prev)}
              >
                {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </header>

          {/* ── Mobile Navigation Drawer ── */}
          <div
            className={`nav-mobile-drawer ${isMobileMenuOpen ? "nav-mobile-drawer-open" : ""} ${
              pathname !== "/" ? "nav-mobile-drawer-other" : ""
            }`}
          >
            <div className="nav-mobile-drawer-inner">
              {navPages.map((page) => {
                const isExpanded = expandedMobileCategory === page.id;
                return (
                  <div key={page.id} className="nav-mobile-category-block">
                    <button
                      type="button"
                      className="nav-mobile-cat-header"
                      onClick={() => setExpandedMobileCategory(isExpanded ? null : page.id)}
                    >
                      <div className="nav-mobile-cat-title-wrap">
                        <span className="nav-mobile-cat-badge">{page.badge}</span>
                        <span className="nav-mobile-cat-label">{page.label}</span>
                      </div>
                      <ChevronDown
                        size={18}
                        className={`nav-mobile-cat-chevron ${isExpanded ? "nav-mobile-chevron-expanded" : ""}`}
                      />
                    </button>

                    {isExpanded && (
                      <ul className="nav-mobile-items-list">
                        {page.items.map((sub) => (
                          <li key={sub.name}>
                            <Link
                              href={sub.href}
                              className="nav-mobile-item-link"
                              onClick={() => setIsMobileMenuOpen(false)}
                            >
                              <span className="nav-link-indicator" />
                              <span>{sub.name}</span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                );
              })}

              {/* Mobile Direct Action Button */}
              <div className="nav-mobile-footer-cta">
                <Link
                  href="/contact"
                  className="nav-mobile-cta-btn"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <span>Start a Project</span>
                  <ArrowUpRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* ── Page content ── */}
        <div className={`site-page-container ${pathname !== "/" ? "site-page-other" : ""}`}>
          {children}
        </div>
      </div>
    </>
  );
}
