"use client";

import { useState } from "react";
import { FadeIn } from "./FadeIn";
import { Mail, Linkedin, Github, Phone, Send, CheckCircle2, XCircle } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

export function Contact() {
  const [toast, setToast] = useState<{ show: boolean; type: "success" | "error"; message: string }>({
    show: false,
    type: "success",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const showToast = (type: "success" | "error", message: string) => {
    setToast({ show: true, type, message });
    setTimeout(() => {
      setToast((prev) => ({ ...prev, show: false }));
    }, 5000);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    const form = e.currentTarget;
    
    try {
      const formData = new FormData(form);
      const data = {
        name: formData.get("name"),
        email: formData.get("email"),
        message: formData.get("message"),
      };

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        showToast("success", "Message sent! I'll get back to you soon.");
        form.reset();
      } else {
        showToast("error", "Failed to send message. Please try again.");
      }
    } catch (error) {
      showToast("error", "An error occurred. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative py-24 px-6 w-full max-w-4xl mx-auto">
      
      {/* Custom Toast Notification */}
      <AnimatePresence>
        {toast.show && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className={`fixed bottom-8 right-8 z-50 flex items-center gap-3 px-6 py-4 rounded-xl border backdrop-blur-md shadow-2xl ${
              toast.type === "success" 
                ? "bg-primary/10 border-primary/50 text-primary shadow-[0_0_20px_rgba(0,230,255,0.3)]"
                : "bg-red-500/10 border-red-500/50 text-red-400 shadow-[0_0_20px_rgba(239,68,68,0.3)]"
            }`}
          >
            {toast.type === "success" ? <CheckCircle2 size={24} /> : <XCircle size={24} />}
            <span className="font-mono font-medium">{toast.message}</span>
          </motion.div>
        )}
      </AnimatePresence>

      <FadeIn>
        <div className="flex items-center justify-center gap-4 mb-16">
          <div className="h-[1px] w-12 bg-gradient-to-l from-primary/50 to-transparent" />
          <h2 className="text-3xl md:text-5xl font-bold font-mono tracking-tighter text-center">
            Get_In<span className="text-primary text-glow">_Touch</span>
          </h2>
          <div className="h-[1px] w-12 bg-gradient-to-r from-primary/50 to-transparent" />
        </div>
      </FadeIn>

      <div className="grid md:grid-cols-2 gap-12 items-start">
        <FadeIn direction="up">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold font-sans mb-4">Let&apos;s build something together.</h3>
              <p className="text-foreground/70 leading-relaxed font-sans">
                I am currently looking for new opportunities as a full-stack developer. Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!
              </p>
            </div>

            <div className="space-y-4">
              <a href="mailto:ritiksharma29102003@gmail.com" className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-primary/50 transition-all group pointer-events-auto">
                <div className="p-3 bg-primary/10 rounded-lg text-primary group-hover:scale-110 transition-transform">
                  <Mail size={20} />
                </div>
                <div>
                  <div className="text-sm text-foreground/50 font-mono">Email</div>
                  <div className="text-foreground font-medium">ritiksharma29102003@gmail.com</div>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/5">
                <div className="p-3 bg-primary/10 rounded-lg text-primary">
                  <Phone size={20} />
                </div>
                <div>
                  <div className="text-sm text-foreground/50 font-mono">Phone</div>
                  <div className="text-foreground font-medium">+91-9205575585</div>
                </div>
              </div>

              <div className="flex gap-4 pt-4">
                <a href="https://www.linkedin.com/in/ritik-sharma-aa0282224" target="_blank" className="p-4 rounded-xl bg-white/5 border border-white/5 hover:border-accent hover:text-accent transition-all group">
                  <Linkedin size={24} className="group-hover:-translate-y-1 transition-transform" />
                </a>
                <a href="https://github.com/Ritik-Sharma-Git" target="_blank" className="p-4 rounded-xl bg-white/5 border border-white/5 hover:border-white hover:text-white transition-all group">
                  <Github size={24} className="group-hover:-translate-y-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.2} direction="up">
          <form 
            onSubmit={handleSubmit}
            className="space-y-6 bg-white/5 border border-white/10 p-8 rounded-2xl relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 blur-[80px] rounded-full pointer-events-none group-focus-within:bg-primary/20 transition-colors duration-500" />

            <div className="relative z-10 space-y-4">
              <div>
                <label className="block text-sm font-mono text-foreground/70 mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="John Doe"
                  required
                  className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-foreground placeholder-foreground/30 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-mono text-foreground/70 mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="john@example.com"
                  required
                  className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-foreground placeholder-foreground/30 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-mono text-foreground/70 mb-2">Message</label>
                <textarea
                  name="message"
                  rows={4}
                  placeholder="Hello Ritik..."
                  required
                  className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-foreground placeholder-foreground/30 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all resize-none"
                />
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-primary text-background font-mono font-bold py-3 px-4 rounded-lg flex items-center justify-center gap-2 hover:bg-primary/90 hover:shadow-[0_0_20px_rgba(0,230,255,0.4)] transition-all disabled:opacity-70 disabled:cursor-not-allowed"
              >
                <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
                {!isSubmitting && <Send size={18} />}
              </button>
            </div>
          </form>
        </FadeIn>
      </div>
    </section>
  );
}
