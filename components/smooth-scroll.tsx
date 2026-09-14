"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function SmoothScroll({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    gsap.registerPlugin(ScrollTrigger);
    const lenis = new Lenis({
      lerp: 0.1,
      duration: 1.4,
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.2,
    });

    const tick = (time: number) => lenis.raf(time * 1000);
    const onScroll = () => ScrollTrigger.update();
    lenis.on("scroll", onScroll);
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);

    const context = gsap.context(() => {
      const media = gsap.matchMedia();

      gsap.utils.toArray<HTMLElement>("[data-gsap-icon]").forEach((icon) => {
        gsap.fromTo(icon, { scale: 0.72, rotate: -10, opacity: 0 }, {
          scale: 1,
          rotate: 0,
          opacity: 1,
          duration: 0.58,
          ease: "back.out(1.7)",
          scrollTrigger: { trigger: icon, start: "top 88%", once: true },
        });
      });

      gsap.utils.toArray<HTMLElement>("[data-gsap-card]").forEach((card, index) => {
        gsap.fromTo(card, { y: 28, opacity: 0 }, {
          y: 0,
          opacity: 1,
          duration: 0.66,
          delay: (index % 4) * 0.045,
          ease: "power3.out",
          scrollTrigger: { trigger: card, start: "top 91%", once: true },
        });
      });

      gsap.to("[data-gsap-orbit]", { rotate: 360, duration: 18, ease: "none", repeat: -1 });
      gsap.to("[data-gsap-pulse]", { scale: 1.045, duration: 1.8, ease: "sine.inOut", yoyo: true, repeat: -1 });

      gsap.to("[data-gsap-parallax]", {
        yPercent: -11,
        ease: "none",
        scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: 0.8 },
      });

      media.add("(min-width: 981px)", () => {
        gsap.utils.toArray<HTMLElement>("[data-horizontal-section]").forEach((section) => {
          const track = section.querySelector<HTMLElement>("[data-horizontal-track]");
          if (!track) return;

          const distance = () => Math.max(0, track.scrollWidth - section.clientWidth + 36);

          /* Horizontal scroll */
          const scrollTween = gsap.to(track, {
            x: () => -distance(),
            ease: "none",
            scrollTrigger: {
              trigger: section,
              start: "top top",
              end: () => `+=${distance()}`,
              pin: true,
              scrub: 1.8,
              anticipatePin: 1,
              invalidateOnRefresh: true,
            },
          });

          /* Card entrance: stagger reveal as they scroll in */
          const cards = track.querySelectorAll<HTMLElement>(".product-card");
          cards.forEach((card, i) => {
            gsap.fromTo(card,
              { opacity: 0.15, y: 50, scale: 0.92, rotateY: 8 },
              {
                opacity: 1,
                y: 0,
                scale: 1,
                rotateY: 0,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                  trigger: card,
                  containerAnimation: scrollTween,
                  start: "left 92%",
                  end: "left 55%",
                  scrub: 0.6,
                },
              }
            );

            /* Subtle parallax on the visual inside each card */
            const visual = card.querySelector<HTMLElement>(".product-visual");
            if (visual) {
              gsap.fromTo(visual,
                { y: 18 },
                {
                  y: -8,
                  ease: "none",
                  scrollTrigger: {
                    trigger: card,
                    containerAnimation: scrollTween,
                    start: "left 100%",
                    end: "left 0%",
                    scrub: true,
                  },
                }
              );
            }
          });

          return scrollTween;
        });

        gsap.utils.toArray<HTMLElement>(".outcome-bento").forEach((bento) => {
          gsap.fromTo(bento, { y: 46, rotate: 1.5, opacity: 0 }, {
            y: 0,
            rotate: 0,
            opacity: 1,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: { trigger: bento, start: "top 78%", once: true },
          });
        });
      });

      media.add("(hover: hover)", () => {
        gsap.utils.toArray<HTMLElement>("[data-gsap-icon]").forEach((icon) => {
          const parent = icon.closest<HTMLElement>(".capability, .journey-step, .delivery-card");
          if (!parent) return;
          const enter = () => gsap.to(icon, { y: -5, rotate: 5, scale: 1.08, duration: 0.3, ease: "power2.out", overwrite: "auto" });
          const leave = () => gsap.to(icon, { y: 0, rotate: 0, scale: 1, duration: 0.38, ease: "elastic.out(1, 0.45)", overwrite: "auto" });
          parent.addEventListener("mouseenter", enter);
          parent.addEventListener("mouseleave", leave);
          return () => {
            parent.removeEventListener("mouseenter", enter);
            parent.removeEventListener("mouseleave", leave);
          };
        });
      });
    });

    ScrollTrigger.refresh();
    return () => {
      context.revert();
      lenis.off("scroll", onScroll);
      lenis.destroy();
      gsap.ticker.remove(tick);
    };
  }, [pathname]);

  return children;
}
