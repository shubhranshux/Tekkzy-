import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function Footer() {
  return (
    <footer>
      <Link className="brand" href="#top">
        <img src="/LOGO.png" alt="Tekkzy" className="brand-logo footer-logo" />
      </Link>
      <span>© {new Date().getFullYear()} Tekkzy. Built for what&apos;s next.</span>
      <div style={{ display: "flex", gap: "16px" }}>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/product">Product</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </footer>
  );
}
