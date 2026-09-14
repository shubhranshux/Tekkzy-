"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

interface SplashScreenProps {
  onComplete?: () => void;
}

export function SplashScreen({ onComplete }: SplashScreenProps) {
  const [phase, setPhase] = useState<"reveal" | "hold" | "exit" | "done">("reveal");

  useEffect(() => {
    // Phase 1: Logo reveal animation plays (1.2s), then hold briefly
    const holdTimer = setTimeout(() => setPhase("hold"), 1300);
    return () => clearTimeout(holdTimer);
  }, []);

  useEffect(() => {
    if (phase === "hold") {
      // Phase 2: Brief hold, then start exit
      const exitTimer = setTimeout(() => setPhase("exit"), 400);
      return () => clearTimeout(exitTimer);
    }
  }, [phase]);

  const handleExitComplete = () => {
    setPhase("done");
    onComplete?.();
  };

  return (
    <AnimatePresence onExitComplete={handleExitComplete}>
      {phase !== "exit" && phase !== "done" && (
        <motion.div
          key="splash-overlay"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 9999,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "var(--bg)",
          }}
        >
          <motion.div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <motion.img
              layoutId="brand-logo"
              initial={{ clipPath: "inset(0 100% 0 0)", filter: "blur(4px)" }}
              animate={{ clipPath: "inset(0 0% 0 0)", filter: "blur(0px)" }}
              transition={{
                duration: 1.2,
                ease: [0.22, 1, 0.36, 1],
              }}
              src="/LOGO.png"
              alt="Tekkzy"
              style={{
                width: "120px",
                height: "auto",
              }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
