"use client";

import { FadeIn } from "./FadeIn";
import { Github, ExternalLink, FolderGit2 } from "lucide-react";

export function Projects() {
  const projects = [
    {
      title: "AMR – Achieve More Regularly",
      year: "2024",
      description: "Full-stack DSA progress tracker with multi-user dashboards, Google OAuth, and automated daily email reminders.",
      stack: ["ReactJS", "Node.js", "Express.js", "MongoDB", "Node-Cron", "Clerk"],
      github: "https://github.com/Ritik-Sharma-Git",
      demo: "#",
    },
    {
      title: "Co-Op Board",
      year: "2024",
      description: "Real-time collaborative whiteboard with multi-user live editing, presence sync, SSR, and dynamic routing.",
      stack: ["Next.js", "Convex", "Clerk", "Shadcn UI", "Liveblocks"],
      github: "https://github.com/Ritik-Sharma-Git",
      demo: "#",
    },
    {
      title: "Blogify",
      year: "2023",
      description: "Full CRUD blogging platform featuring user authentication, session management, image uploads, and Mongoose ODM for data modeling.",
      stack: ["EJS", "Node.js", "Express.js", "MongoDB", "Bootstrap"],
      github: "https://github.com/Ritik-Sharma-Git",
      demo: "#",
    },
  ];

  return (
    <section id="projects" className="relative py-24 px-6 w-full max-w-6xl mx-auto">
      <FadeIn>
        <div className="flex items-center gap-4 mb-16">
          <div className="h-[1px] flex-1 bg-gradient-to-l from-primary/50 to-transparent" />
          <h2 className="text-3xl md:text-5xl font-bold font-mono tracking-tighter text-right">
            Featured<span className="text-primary text-glow">_Projects</span>
          </h2>
        </div>
      </FadeIn>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {projects.map((project, idx) => (
          <FadeIn key={idx} delay={0.1 * idx} className="h-full">
            <div className="group flex flex-col justify-between h-full p-8 rounded-3xl bg-secondary/5 border border-white/10 hover:border-primary/50 hover:bg-white/5 transition-all hover:-translate-y-2 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-32 bg-primary/5 blur-[100px] rounded-full group-hover:bg-primary/20 transition-all duration-500 pointer-events-none" />
              
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-6">
                  <FolderGit2 size={40} className="text-primary opacity-80" />
                  <div className="flex gap-4">
                    <a href={project.github} target="_blank" className="text-foreground/50 hover:text-primary transition-colors cursor-pointer">
                      <Github size={22} />
                    </a>
                    <a href={project.demo} target="_blank" className="text-foreground/50 hover:text-primary transition-colors cursor-pointer">
                      <ExternalLink size={22} />
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3 mb-4">
                  <h3 className="text-2xl font-bold font-sans text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <span className="px-2 py-0.5 rounded text-xs border border-white/10 bg-white/5 font-mono text-foreground/50">
                    {project.year}
                  </span>
                </div>

                <p className="text-foreground/70 mb-8 leading-relaxed">
                  {project.description}
                </p>
              </div>

              <div className="relative z-10 flex flex-wrap gap-2 mt-auto pt-6 border-t border-white/5">
                {project.stack.map((tech, tIdx) => (
                  <span key={tIdx} className="text-xs font-mono text-accent bg-accent/10 px-2 py-1 rounded">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
