"use client";

import React, { useState, useEffect } from "react";
import GlobeBackground from "./globe-background";
import "./hero-section.css";

const WORDS = ["INTELLIGENCE.", "INNOVATION.", "CONFIDENCE."];

export default function HeroSection() {
  const [wordIndex, setWordIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);

  // Initial delay so line 1 entrance finishes cleanly first
  useEffect(() => {
    const startTimer = setTimeout(() => {
      setHasStarted(true);
    }, 700);
    return () => clearTimeout(startTimer);
  }, []);

  useEffect(() => {
    if (!hasStarted) return;

    const currentWord = WORDS[wordIndex];
    let timer: NodeJS.Timeout;

    if (!isDeleting) {
      if (displayedText.length < currentWord.length) {
        // Slow, smooth natural typing pace (115ms per character)
        timer = setTimeout(() => {
          setDisplayedText(currentWord.slice(0, displayedText.length + 1));
        }, 115);
      } else {
        // Hold on full completed word with crisp glow for 2.4 seconds
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, 2400);
      }
    } else {
      if (displayedText.length > 0) {
        // Smooth, controlled backspacing (55ms per character)
        timer = setTimeout(() => {
          setDisplayedText(currentWord.slice(0, displayedText.length - 1));
        }, 55);
      } else {
        // Smooth pause before starting the next word (450ms)
        timer = setTimeout(() => {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % WORDS.length);
        }, 450);
      }
    }

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, wordIndex, hasStarted]);

  const isDot = displayedText.endsWith(".");
  const mainWord = isDot ? displayedText.slice(0, -1) : displayedText;

  return (
    <section
      className="hero-fullscreen-section hero-fmi-section"
      id="hero"
      style={{ fontFamily: 'var(--font-inter-tight), "Inter Tight", sans-serif' }}
    >
      {/* ── Background 3D Earth Globe & Flight Arcs WebGL Animation ── */}
      <GlobeBackground />

      {/* ── Bottom Layout: Headline with Typewriter Last Word ── */}
      <div className="hero-fmi-container">
        <div className="hero-fmi-content">
          <h1
            className="hero-html-title"
            style={{ fontFamily: 'var(--font-inter-tight), "Inter Tight", sans-serif' }}
          >
            <span className="l">
              <span style={{ fontFamily: 'var(--font-inter-tight), "Inter Tight", sans-serif' }}>
                Grow your business with
              </span>
            </span>

            <span className="l hero-rotating-line">
              <span className="hero-typewriter-wrapper">
                <em className="hero-typewriter-text">{mainWord}</em>
                {isDot && <b className="hero-typewriter-dot">.</b>}
                <span className="hero-typewriter-cursor" aria-hidden="true" />
              </span>
            </span>
          </h1>
        </div>
      </div>
    </section>
  );
}
