"use client";

import { FadeIn } from "./FadeIn";
import { Briefcase, Calendar } from "lucide-react";

export function Experience() {
  const experiences = [
    {
      role: "Full Stack Intern",
      company: "AventIQ Technologies Pvt. Ltd.",
      period: "Jan 2026 – Mar 2026",
      points: [
        "Built a secure Access Management System for employee roles and permissions.",
        "Designed a Credential Management Module for authentication.",
        "Built responsive frontends with React.js and Next.js.",
        "State management via Redux Toolkit; optimized data fetching with React Query.",
        "Integrated MERN stack backend; deployed serverless functions via AWS Lambda.",
      ],
    },
    {
      role: "Software Developer Intern",
      company: "Internship Studio",
      period: "Sept 2022 – Nov 2022",
      points: [
        "Built and deployed software apps using C++ and DSA.",
        "Designed AWS infrastructure automation solutions.",
      ],
    },
  ];

  return (
    <section id="experience" className="relative py-24 px-6 w-full max-w-4xl mx-auto">
      <FadeIn>
        <div className="flex items-center gap-4 mb-16">
          <h2 className="text-3xl md:text-5xl font-bold font-mono tracking-tighter">
            Experience<span className="text-primary text-glow">_Timeline</span>
          </h2>
          <div className="h-[1px] flex-1 bg-gradient-to-r from-primary/50 to-transparent" />
        </div>
      </FadeIn>

      <div className="relative border-l border-primary/30 ml-4 md:ml-6 space-y-16 py-4">
        {experiences.map((exp, idx) => (
          <FadeIn key={idx} delay={0.1 * idx} direction="up" className="relative pl-10 md:pl-16">
            <div className="absolute top-0 left-0 -translate-x-[50%] bg-background p-2 rounded-full border border-primary/50 text-primary shadow-[0_0_15px_rgba(0,230,255,0.4)]">
              <Briefcase size={20} />
            </div>

            <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
              <div>
                <h3 className="text-2xl font-bold text-foreground font-sans">
                  {exp.role}
                </h3>
                <div className="text-primary font-mono text-lg mb-1">{exp.company}</div>
              </div>
              <div className="flex items-center gap-2 text-foreground/50 font-mono bg-white/5 border border-white/10 px-3 py-1 rounded-full whitespace-nowrap">
                <Calendar size={14} />
                <span className="text-sm">{exp.period}</span>
              </div>
            </div>

            <ul className="space-y-3 text-foreground/70 list-none relative">
              {exp.points.map((point, pIdx) => (
                <li key={pIdx} className="relative pl-6">
                  <span className="absolute left-0 top-2 w-1.5 h-1.5 rounded-full bg-primary/60" />
                  {point}
                </li>
              ))}
            </ul>
          </FadeIn>
        ))}
        
        {/* Bottom fading line */}
        <div className="absolute bottom-0 left-0 w-[1px] h-32 bg-gradient-to-t from-background to-primary/30 -translate-x-[0.5px] translate-y-full" />
      </div>
    </section>
  );
}
