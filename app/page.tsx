
import HeroSection from "@/components/landing/hero-section";
import ManifestoMetrics from "@/components/landing/manifesto-metrics";
import ClientLogoCarousel from "@/components/landing/client-logo-carousel";
import LandingMotion from "@/components/landing/landing-motion";
import ProductEcosystem from "@/components/landing/product-ecosystem";
import HowItWorksSection from "@/components/landing/how-it-works";
import TestimonialsSection from "@/components/landing/testimonials-section";
import PrinciplesSection from "@/components/landing/principles-section";
import DemoPricingSpotlight from "@/components/landing/demo-pricing-spotlight";
import FaqSection from "@/components/landing/faq-section";
import "@/components/landing/landing-rhythm.css";

const clientLogos = [
  { name: "Vedanta", src: "/logos/vedanta.jpeg" },
  { name: "Fitness World 2.0", src: "/logos/fitness-world.png" },
  { name: "Hotel MM Royal Palace", src: "/logos/mm-royal-palace.png" },
  { name: "Hangout Restro Cafe", src: "/logos/hangout.jpeg" },
  { name: "Manas Restaurant & Cafe", src: "/logos/manas.jpeg" },
  { name: "Onebite", src: "/logos/onebite.png" },
  { name: "Pabitra Electricals", src: "/logos/pabitra.png" },
  { name: "Shribarenyam", src: "/logos/shribarenyam.jpeg" },
];

export default function HomePage() {
  return (
    <LandingMotion><div className="landing-page" id="top">
      <HeroSection />

      <ManifestoMetrics />

      <ClientLogoCarousel />

      <ProductEcosystem />

      <HowItWorksSection />

      <DemoPricingSpotlight />

      <PrinciplesSection />

      <TestimonialsSection />

      <FaqSection />
    </div></LandingMotion>
  );
}
