"use client";
import React, { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { GraduationCap, Code2, Globe2, Compass } from "lucide-react";

const stats = [
  { value: "15", label: "Projects Completed", suffix: "+" },
  { value: "2", label: "Years Coding Experience", suffix: "+" },
  { value: "20", label: "Technologies & Tools Mastered", suffix: "+" },
];

const StatCounter = ({ value, label, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = parseInt(value);
      if (isNaN(end)) return;
      if (start === end) {
        setCount(end);
        return;
      }
      
      const duration = 1200; // ms
      const stepTime = Math.max(Math.floor(duration / end), 20);
      
      const timer = setInterval(() => {
        start += 1;
        setCount(start);
        if (start === end) clearInterval(timer);
      }, stepTime);

      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <div
      ref={ref}
      className="flex flex-col items-center justify-center p-6 rounded-2xl border border-border bg-card/40 backdrop-blur-sm shadow-sm hover:border-primary/30 transition-all duration-300 group hover:shadow-primary/5 hover:-translate-y-1"
    >
      <span className="font-display font-extrabold text-4xl sm:text-5xl text-primary group-hover:scale-105 transition-transform duration-300 mb-1">
        {count}{suffix}
      </span>
      <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider text-center">
        {label}
      </span>
    </div>
  );
};

export default function About() {
  return (
    <section id="about" className="relative py-28 px-6 bg-background overflow-hidden border-t border-border/60">
      {/* Background ambient light */}
      <div className="absolute right-0 top-1/4 h-[300px] w-[300px] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />
      
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-primary tracking-widest uppercase mb-3"
          >
            <Compass className="h-3.5 w-3.5" />
            Background
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display font-bold text-3xl sm:text-4xl tracking-tight text-foreground"
          >
            About My Journey
          </motion.h2>
        </div>

        {/* Layout grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Bio text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6"
          >
            <h3 className="font-display font-bold text-xl sm:text-2xl text-foreground">
              Bridging Web Engineering and Artificial Intelligence
            </h3>
            
            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
             I'm a final-year BCA (Full Stack AI) student and a self-taught MERN Stack Developer. Since 2024, I've been building and deploying full-stack projects on my own — not as coursework, but as a way to deeply understand how production-grade applications actually work, end to end.
            </p>
            
            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
              My technical focus includes JavaScript, React, Next.js, Node.js, Express, and both MongoDB and PostgreSQL. I work across the stack — from designing schemas and APIs to shipping responsive, deployed frontends — and I use AI tools like Replicate and Gemini API to build intelligent features into my projects.
            </p>
            
            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
             Currently, I'm looking for Full Stack / MERN developer internships where I can apply this hands-on experience to real-world problems.
            </p>

            {/* Core Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="flex gap-3">
                <div className="flex-shrink-0 h-10 w-10 rounded-xl bg-secondary/80 border border-border flex items-center justify-center text-primary">
                  <GraduationCap className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-sm text-foreground">Academic Focus</h4>
                  <p className="text-xs text-muted-foreground">Final-Year BCA student specializing in Full Stack AI.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="flex-shrink-0 h-10 w-10 rounded-xl bg-secondary/80 border border-border flex items-center justify-center text-primary">
                  <Globe2 className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-sm text-foreground">Technical Background</h4>
                  <p className="text-xs text-muted-foreground">Hands-on experience building and deploying scalable web applications using the MERN Stack.</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Stats grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-6"
          >
            {stats.map((stat, idx) => (
              <StatCounter
                key={idx}
                value={stat.value}
                label={stat.label}
                suffix={stat.suffix}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
