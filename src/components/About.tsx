"use client";

import { FadeIn } from "./FadeIn";
import { GraduationCap, Code2, Award, User, Target } from "lucide-react";

export function About() {
  const stats = [
    {
      label: "CGPA",
      value: "8.0",
      subtext: "out of 10.0",
      icon: <GraduationCap size={24} className="text-primary" />
    },
    {
      label: "HackerRank",
      value: "4-Star",
      subtext: "Problem Solving",
      icon: <Award size={24} className="text-primary" />
    },
    {
      label: "Problems",
      value: "300+",
      subtext: "LeetCode & more",
      icon: <Code2 size={24} className="text-primary" />
    }
  ];

  return (
    <section id="about" className="relative py-24 px-6 w-full max-w-6xl mx-auto">
      <FadeIn>
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-3xl md:text-5xl font-bold font-mono tracking-tighter">
            About<span className="text-primary text-glow">_Me</span>
          </h2>
          <div className="h-[1px] flex-1 bg-gradient-to-r from-primary/50 to-transparent" />
        </div>
      </FadeIn>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        <FadeIn delay={0.1} direction="left">
          <div className="space-y-6 text-lg text-foreground/80 leading-relaxed font-sans">
            <p>
              I am a final-year B.Tech CSE student at <span className="text-primary font-medium">KCC Institute of Technology and Management</span>, Greater Noida, graduating in May 2025.
            </p>
            <p>
              Passionate about full-stack development, Data Structures & Algorithms, and building scalable real-world products. I bridge the gap between complex CS fundamentals and user-friendly web applications.
            </p>
            <div className="flex items-start gap-4 p-4 rounded-xl bg-accent/10 border border-accent/20 backdrop-blur-sm">
              <div className="p-3 bg-accent/20 rounded-lg text-accent">
                <Target size={24} />
              </div>
              <div>
                <h3 className="text-foreground font-semibold">DSA Mentor</h3>
                <p className="text-sm text-foreground/70">Actively providing peer mentorship for junior students in programming and algorithmic problem-solving.</p>
              </div>
            </div>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <FadeIn delay={0.2} direction="right" className="sm:col-span-2">
            <div className="group relative p-6 rounded-2xl bg-secondary/10 border border-white/5 overflow-hidden hover:border-primary/50 transition-colors">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4 border-glow">
                  <User size={24} className="text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-1">Final Year CSE</h3>
                <p className="text-foreground/60 font-mono text-sm">Graduation: May 2025</p>
              </div>
            </div>
          </FadeIn>
          
          {stats.map((stat, idx) => (
            <FadeIn key={idx} delay={0.3 + idx * 0.1} direction="right">
              <div className="group relative p-6 rounded-2xl bg-secondary/10 border border-white/5 hover:border-primary/50 transition-colors h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative z-10 flex flex-col justify-between h-full">
                  <div className="mb-4">{stat.icon}</div>
                  <div>
                    <h4 className="text-foreground/60 font-mono text-sm mb-1">{stat.label}</h4>
                    <div className="text-3xl font-bold text-foreground mb-1">{stat.value}</div>
                    <div className="text-xs text-foreground/50">{stat.subtext}</div>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
