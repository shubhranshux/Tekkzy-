"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function LandingMotion({ children }: { children: React.ReactNode }) {
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;
    const cleanupListeners: Array<() => void> = [];

    const ctx = gsap.context(() => {
      const select = (selector: string) => root.current?.querySelectorAll(selector) ?? [];
      const heroCopy = select(".landing-hero-copy > *");
      const heroPhoto = select(".hero-photo");
      const heroCards = select(".hero-card");
      const heroGlow = select(".hero-grid-glow");
      const heroNote = select(".hero-note");
      const floatingTiles = select(".platform-chip, .process-tile");

      if (heroCopy.length) gsap.from(heroCopy, { opacity: 0, y: 24, duration: .8, stagger: .09, ease: "power3.out", delay: .15 });
      if (heroPhoto.length) gsap.from(heroPhoto, { opacity: 0, scale: .94, x: 28, duration: 1.15, ease: "power3.out", delay: .22 });
      if (heroCards.length) gsap.from(heroCards, { opacity: 0, y: 18, scale: .94, duration: .7, stagger: .12, ease: "back.out(1.5)", delay: .65 });
      if (heroGlow.length) gsap.to(heroGlow, { scale: 1.12, opacity: .7, duration: 3, repeat: -1, yoyo: true, ease: "sine.inOut" });
      if (heroNote.length) gsap.to(heroNote, { y: -7, duration: 2.3, repeat: -1, yoyo: true, ease: "sine.inOut" });
      if (floatingTiles.length) gsap.to(floatingTiles, { y: -8, duration: 2.4, repeat: -1, yoyo: true, stagger: .18, ease: "sine.inOut" });

      gsap.utils.toArray<HTMLElement>(".landing-section, .trust-strip, .landing-cta, .careers-intro, .pathways-section, .intern-journey, .disciplines-section, .growth-section, .project-banner, .jobs-section, .faq-section, .careers-final").forEach((section) => {
        gsap.from(Array.from(section.children), {
          scrollTrigger: { trigger: section, start: "top 82%", once: true },
          opacity: 0,
          y: 28,
          duration: .75,
          stagger: .1,
          ease: "power3.out",
        });
      });

      gsap.utils.toArray<HTMLElement>(".value-card, .pricing-card, .industry-card, .principle-card, .benefit-card, .pathway-card, .journey-card, .discipline-card, .job-card").forEach((card) => {
        const onEnter = () => gsap.to(card, { y: -7, scale: 1.015, duration: .22, ease: "power2.out", overwrite: true });
        const onLeave = () => gsap.to(card, { y: 0, scale: 1, duration: .3, ease: "power2.out", overwrite: true });
        card.addEventListener("mouseenter", onEnter);
        card.addEventListener("mouseleave", onLeave);
        cleanupListeners.push(() => {
          card.removeEventListener("mouseenter", onEnter);
          card.removeEventListener("mouseleave", onLeave);
        });
      });

      const careerCards = select(".careers-reveal-card, .journey-card, .benefit-card, .discipline-card");
      if (careerCards.length) gsap.from(careerCards, {
        scrollTrigger: { trigger: ".careers-page", start: "top 76%", once: true },
        opacity: 0,
        y: 22,
        duration: .6,
        stagger: .07,
        ease: "power3.out",
      });

      const careerOrb = select(".careers-orb");
      if (careerOrb.length) gsap.to(careerOrb, { scale: 1.06, rotate: 4, duration: 4.2, repeat: -1, yoyo: true, ease: "sine.inOut" });
      const careerFloat = select(".careers-float, .careers-handwritten");
      if (careerFloat.length) gsap.to(careerFloat, { y: -8, duration: 2.4, repeat: -1, yoyo: true, stagger: .2, ease: "sine.inOut" });

      const testimonialImage = select(".testimonial-image");
      const technologyImage = select(".technology-image");
      if (testimonialImage.length || technologyImage.length) {
        gsap.to([testimonialImage, technologyImage], {
          yPercent: -5,
          ease: "none",
          scrollTrigger: { trigger: ".testimonial-section", start: "top bottom", end: "bottom top", scrub: true },
        });
      }
    }, root);

    return () => {
      cleanupListeners.forEach((cleanup) => cleanup());
      ctx.revert();
    };
  }, []);

  return <div ref={root}>{children}</div>;
}
