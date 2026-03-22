"use client";

import { motion } from "framer-motion";

export function AnimatedBackground() {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden bg-background pointer-events-none">
      {/* Core Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:64px_64px]" />
      
      {/* Floating Neon Orbs */}
      <motion.div
        animate={{
          x: [0, 200, -100, 0],
          y: [0, -150, 100, 0],
          scale: [1, 1.2, 0.8, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/4 left-1/4 w-[50vw] h-[50vh] bg-primary/10 rounded-full blur-[120px] opacity-50 mix-blend-screen"
      />
      <motion.div
        animate={{
          x: [0, -250, 150, 0],
          y: [0, 200, -150, 0],
          scale: [1, 0.9, 1.3, 1],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-1/4 right-1/4 w-[40vw] h-[60vh] bg-blue-600/10 rounded-full blur-[150px] opacity-60 mix-blend-screen"
      />
      
      <div className="absolute inset-0 bg-background/50 backdrop-blur-[100px]" />
    </div>
  );
}
