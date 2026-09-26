"use client";

import { useState } from "react";
import { Sparkles } from "lucide-react";

export default function TekkBotFab() {
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("open-tekkbot"));
    }
  };

  return (
    <button
      className={`tekkbot-fab ${isHovered ? "is-hovered" : ""}`}
      aria-label="Ask TekkBot AI"
      title="Ask TekkBot AI"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocus={() => setIsHovered(true)}
      onBlur={() => setIsHovered(false)}
      onClick={handleClick}
      type="button"
    >
      <span className="tekkbot-glow" />
      <span className="tekkbot-glow tekkbot-glow-2" />
      <span className="tekkbot-inner">
        <span className="tekkbot-icon">
          <Sparkles size={20} strokeWidth={2.4} />
        </span>
        <span className="tekkbot-label">Ask TekkBot</span>
      </span>
    </button>
  );
}
