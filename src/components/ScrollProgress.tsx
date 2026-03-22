"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { useEffect } from "react";

export function ScrollProgress() {
  useEffect(() => {
    // Force scroll to top on reload
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);
  }, []);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-primary origin-left z-[100] shadow-[0_0_15px_rgba(0,230,255,1)]"
      style={{ scaleX }}
    />
  );
}
