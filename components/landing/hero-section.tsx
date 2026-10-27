"use client";

import React from "react";
import GlobeBackground from "./globe-background";
import "./hero-section.css";

export default function HeroSection() {
  return (
    <section className="hero-fullscreen-section hero-fmi-section" id="hero">
      {/* ── Background 3D Earth Globe & Flight Arcs WebGL Animation ── */}
      <GlobeBackground />

      {/* ── Bottom Layout: Work Made Easy with AI Headline & Description Directly Underneath ── */}
      <div className="hero-fmi-container">
        <div className="hero-fmi-content">
          <h1 className="hero-html-title">
            <span className="l">
              <span>Smarter software<b>.</b></span>
            </span>
            <span className="l">
              <span>
                Powered by <em>AI</em>
                <b>.</b>
              </span>
            </span>
          </h1>
        </div>
      </div>
    </section>
  );
}
