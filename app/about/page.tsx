import { ArrowRight } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="section-shell">
      <section className="hero" style={{ minHeight: '500px', paddingTop: '60px' }}>
        <div className="hero-copy">
          <div className="pill">
            <span className="eyebrow">OUR STORY</span>
          </div>
          <h1 style={{ fontSize: 'clamp(40px, 4vw, 60px)' }}>
            About <span>Tekkzy</span>
          </h1>
          <p>
            We are pioneering intelligent enterprise cloud solutions. Security First, AI Native, and Scalable Architecture are the pillars of our platform.
          </p>
        </div>
      </section>
    </div>
  );
}
