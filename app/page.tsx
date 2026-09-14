import { ArrowRight } from "lucide-react";

export default function HomePage() {
  return (
    <div className="section-shell">
      <section className="hero">
        <div className="hero-copy">
          <h1>
            Intelligent <span>Cloud</span> Platform
          </h1>
          <p>
            Build, operate, and grow with Tekkzy. The all-in-one platform for ERP, CRM, AI Assistant, and Digital Marketing.
          </p>
          <div className="hero-actions">
            <button className="button">
              Get Started <ArrowRight size={16} />
            </button>
            <button className="button button-outline">Book a Demo</button>
          </div>
        </div>
        <div className="hero-visual" style={{ backgroundColor: '#f0f5ff', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '400px' }}>
          <p style={{ color: '#1e66ff', fontWeight: 'bold' }}>Visual Placeholder</p>
        </div>
      </section>
    </div>
  );
}
