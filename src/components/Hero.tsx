"use client";

import { motion } from "framer-motion";
import { FileDown, ArrowRight, Terminal } from "lucide-react";
import { FadeIn } from "./FadeIn";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center w-full px-6 overflow-hidden">
      {/* Global animated background is now injected via layout.tsx */}

      <div className="z-10 flex flex-col items-center text-center max-w-4xl pt-20">
        <FadeIn delay={0.1}>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-mono mb-6 border-glow">
            <Terminal size={14} />
            <span>Hello, World!</span>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <h1 className="text-5xl md:text-7xl font-bold font-mono tracking-tight mb-6">
            Hi, I&apos;m <span className="text-primary text-glow">Ritik Sharma</span>
          </h1>
        </FadeIn>

        <FadeIn delay={0.3}>
          <p className="text-xl md:text-2xl text-foreground/80 font-mono mb-8 max-w-2xl">
            {"<"} Building scalable web experiences, one commit at a time {"/>"}
          </p>
        </FadeIn>
        
        <FadeIn delay={0.4} className="flex flex-col sm:flex-row gap-4">
          <a 
            href="#projects"
            className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 font-mono font-medium text-background bg-primary rounded-lg overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_20px_rgba(0,230,255,0.4)]"
          >
            <span className="relative z-10 flex items-center gap-2">
              View Projects
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </span>
          </a>
          
          <a 
            href="/resume.pdf"
            download="Ritik_Sharma_Resume.pdf"
            target="_blank"
            className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 font-mono font-medium text-primary border border-primary/50 rounded-lg hover:bg-primary/10 transition-all hover:border-primary hover:border-glow"
          >
            <FileDown size={18} className="group-hover:-translate-y-1 transition-transform" />
            Download Resume
          </a>
        </FadeIn>
      </div>
    </section>
  );
}
