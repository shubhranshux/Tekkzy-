"use client";

import React from "react";
import Image from "next/image";
import "./client-logo-carousel.css";

interface LogoItem {
  name: string;
  src: string;
}

const CAROUSEL_LOGOS: LogoItem[] = [
  { name: "Amrapali Classic", src: "/carousel-logos/amrapali-classic.png" },
  { name: "Vedanta", src: "/carousel-logos/vedanta.jpeg" },
  { name: "Hotel MM Royal Palace", src: "/carousel-logos/mm-royal-palace.png" },
  { name: "Hangout Restro Cafe", src: "/carousel-logos/hangout.jpeg" },
  { name: "Onebite", src: "/carousel-logos/onebite.png" },
  { name: "Bworkz", src: "/carousel-logos/bworkz.png" },
  { name: "Manas Restaurant & Cafe", src: "/carousel-logos/manas.jpeg" },
  { name: "Pabitra Electricals", src: "/carousel-logos/pabitra.png" },
  { name: "Shribarenyam", src: "/carousel-logos/shribarenyam.jpeg" },
  { name: "Trident", src: "/carousel-logos/trident.png" },
  { name: "NSG", src: "/carousel-logos/nsg.png" },
  { name: "Tekkzy Partner", src: "/carousel-logos/logo.png" },
];

export default function ClientLogoCarousel() {
  // Duplicate array for seamless infinite marquee loop
  const displayLogos = [...CAROUSEL_LOGOS, ...CAROUSEL_LOGOS];

  return (
    <section className="client-carousel-section" aria-label="Our Trusted Clients & Partners">
      <div className="client-carousel-container">
        <div className="client-carousel-header">
          <span className="client-carousel-eyebrow">
            <span className="client-carousel-eyebrow-dot" />
            Trusted By Leading Businesses &amp; Industry Innovators
          </span>
        </div>

        <div className="client-marquee-wrapper" role="region" aria-label="Clients carousel marquee">
          <div className="client-marquee-track">
            {displayLogos.map((logo, idx) => (
              <div key={`${logo.name}-${idx}`} className="client-logo-card">
                {/* Fallback to standard img tag for robust rendering of various image formats */}
                <img
                  src={logo.src}
                  alt={logo.name}
                  className="client-logo-img"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
