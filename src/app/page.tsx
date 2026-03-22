import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <>
      {/* Simple Navigation Helper */}
      <nav className="fixed top-0 inset-x-0 z-50 bg-background/50 backdrop-blur-md border-b border-white/5 py-4 px-6 flex justify-between items-center hidden md:flex">
        <div className="font-mono font-bold text-xl tracking-tighter text-foreground">
          RS<span className="text-primary text-glow">.</span>
        </div>
        <div className="flex gap-3 text-sm font-mono text-foreground/70">
          <a href="#home" className="px-4 py-2 rounded-full border border-white/5 hover:border-primary/50 hover:text-primary hover:bg-primary/5 transition-all">Home</a>
          <a href="#about" className="px-4 py-2 rounded-full border border-white/5 hover:border-primary/50 hover:text-primary hover:bg-primary/5 transition-all">About</a>
          <a href="#skills" className="px-4 py-2 rounded-full border border-white/5 hover:border-primary/50 hover:text-primary hover:bg-primary/5 transition-all">Skills</a>
          <a href="#experience" className="px-4 py-2 rounded-full border border-white/5 hover:border-primary/50 hover:text-primary hover:bg-primary/5 transition-all">Experience</a>
          <a href="#projects" className="px-4 py-2 rounded-full border border-white/5 hover:border-primary/50 hover:text-primary hover:bg-primary/5 transition-all">Projects</a>
          <a href="#contact" className="px-4 py-2 rounded-full border border-white/5 hover:border-primary/50 hover:text-primary hover:bg-primary/5 transition-all">Contact</a>
        </div>
      </nav>

      <div id="home" className="flex flex-col w-full max-w-[1400px] mx-auto pb-24">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </div>

      <footer className="w-full py-8 text-center text-foreground/40 font-mono text-sm border-t border-white/5">
        <p>Designed & Built by Ritik Sharma</p>
        <p className="mt-2">&copy; {new Date().getFullYear()} All rights reserved.</p>
      </footer>
    </>
  );
}
