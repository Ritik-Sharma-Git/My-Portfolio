"use client";

import { FadeIn } from "./FadeIn";
import { Lock, Sparkles, Server, Layout, Database, Wrench, Code } from "lucide-react";

export function Skills() {
  const currentSkills = [
    {
      category: "Languages",
      icon: <Code size={20} className="text-primary" />,
      items: ["C++", "C", "JavaScript", "Python"],
    },
    {
      category: "Frontend",
      icon: <Layout size={20} className="text-primary" />,
      items: ["ReactJS", "Next.js", "Redux", "React Query", "Tailwind CSS", "Shadcn UI", "Material UI", "HTML5", "CSS3", "Bootstrap"],
    },
    {
      category: "Backend",
      icon: <Server size={20} className="text-primary" />,
      items: ["Node.js", "Express.js", "RESTful APIs", "Node-Cron", "Nodemailer"],
    },
    {
      category: "Databases",
      icon: <Database size={20} className="text-primary" />,
      items: ["MongoDB", "MySQL", "Mongoose", "Convex"],
    },
    {
      category: "Tools & Cloud",
      icon: <Wrench size={20} className="text-primary" />,
      items: ["AWS (Lambda)", "Clerk (OAuth)", "Netlify", "Git", "GitHub", "Postman", "Liveblocks"],
    },
    {
      category: "CS Fundamentals",
      icon: <Sparkles size={20} className="text-primary" />,
      items: ["DSA", "OOP", "DBMS", "Operating Systems", "Computer Networks"],
    },
  ];

  const futureSkills = [
    "TypeScript", "Docker & Kubernetes", "GraphQL", "Redis", 
    "PostgreSQL / Prisma", "tRPC", "CI/CD", "Socket.io", "Web3 / Solidity"
  ];

  return (
    <section id="skills" className="relative py-24 px-6 w-full max-w-6xl mx-auto">
      <FadeIn>
        <div className="flex items-center gap-4 mb-16">
          <div className="h-[1px] flex-1 bg-gradient-to-l from-primary/50 to-transparent" />
          <h2 className="text-3xl md:text-5xl font-bold font-mono tracking-tighter text-right">
            Tech<span className="text-primary text-glow">_Stack</span>
          </h2>
        </div>
      </FadeIn>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {currentSkills.map((group, idx) => (
          <FadeIn key={idx} delay={0.1 * idx}>
            <div className="group h-full p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/50 transition-all hover:-translate-y-1 hover:shadow-[0_10px_30px_-15px_rgba(0,230,255,0.3)]">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-primary/10 border border-primary/20">
                  {group.icon}
                </div>
                <h3 className="text-xl font-bold text-foreground font-mono">{group.category}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.items.map((skill, sIdx) => (
                  <span 
                    key={sIdx} 
                    className="px-3 py-1 text-sm font-medium rounded-full bg-white/5 text-foreground/80 border border-white/5 hover:bg-primary/20 hover:text-primary hover:border-primary/50 transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </FadeIn>
        ))}
      </div>

      <FadeIn delay={0.4}>
        <div className="relative p-8 rounded-3xl overflow-hidden border border-accent/30 bg-accent/5 backdrop-blur-md">
          <div className="absolute inset-0 bg-gradient-to-r from-accent/10 via-transparent to-primary/10" />
          
          <div className="relative z-10">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
              <div>
                <h3 className="text-2xl font-bold font-mono text-foreground flex items-center gap-3">
                  <Sparkles className="text-accent" />
                  Future Stack
                </h3>
                <p className="text-foreground/60 text-sm mt-1">Technologies currently exploring or targeting next.</p>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-accent/40 bg-accent/20 text-accent text-sm font-mono shadow-[0_0_15px_rgba(59,130,246,0.3)]">
                <Lock size={14} />
                <span>Unlocking Soon</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              {futureSkills.map((skill, idx) => (
                <div 
                  key={idx}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-black/50 border border-white/5 text-foreground/50 text-sm font-medium hover:text-accent hover:border-accent/40 hover:bg-black/80 transition-all cursor-not-allowed group"
                >
                  <Lock size={12} className="opacity-50 group-hover:text-accent transition-colors" />
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
