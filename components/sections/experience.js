"use client";
import React from "react";
import { motion } from "framer-motion";
import { Calendar, Briefcase, GraduationCap, Search, CheckCircle2 } from "lucide-react";

const timelineData = [
  {
    date: "Present",
    title: "Internship & Full-time Search",
    subtitle: "Active Opportunities",
    icon: <Search className="h-4 w-4" />,
    description: "Seeking software engineering internships and developer roles globally to apply my practical full-stack and AI skillset in collaborative corporate teams.",
  },
  {
    date: "2024 - Present",
    title: "Freelance Software Engineer",
    subtitle: "Self-Employed",
    icon: <Briefcase className="h-4 w-4" />,
    description: "Contracting directly with small businesses and digital agencies. Building responsive user-interfaces, headless storefront integrations, APIs, and custom scraping systems using Next.js and Tailwind.",
  },
  {
    date: "2026",
    title: "Te'shanti Tea Brand Site",
    subtitle: "Client Project",
    icon: <CheckCircle2 className="h-4 w-4" />,
    description: "Designed and implemented a premium visual storefront for a boutique tea label. Crafted custom scroll-animations, responsive grid galleries, and a high-converting customer experience using modern React frameworks.",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="relative py-28 px-6 bg-card/10 overflow-hidden border-t border-border/60">
      {/* Background ambient light */}
      <div className="absolute left-10 top-1/3 h-[250px] w-[250px] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        {/* Section title */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-primary tracking-widest uppercase mb-3"
          >
            <Calendar className="h-3.5 w-3.5" />
            Timeline
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display font-bold text-3xl sm:text-4xl tracking-tight text-foreground"
          >
            Experience & Milestones
          </motion.h2>
        </div>

        {/* Timeline wrapper */}
        <div className="relative border-l border-border/80 dark:border-border max-w-3xl mx-auto pl-8 sm:pl-10 space-y-12">
          {/* Animated vertical track highlight */}
          <div className="absolute top-0 bottom-0 left-0 w-[1px] bg-gradient-to-b from-primary via-blue-500 to-transparent pointer-events-none" />

          {timelineData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative"
            >
              {/* Icon Marker */}
              <div className="absolute -left-[45px] sm:-left-[49px] top-1.5 h-8 w-8 rounded-xl bg-card border border-border flex items-center justify-center text-primary shadow-sm hover:border-primary/50 transition-colors duration-300">
                {item.icon}
              </div>

              {/* Card body */}
              <div className="p-6 rounded-2xl border border-border bg-card/45 backdrop-blur-sm shadow-sm hover:border-primary/30 transition-all duration-300">
                <span className="text-[10px] font-bold text-primary tracking-widest uppercase bg-primary/10 border border-primary/20 px-2.5 py-0.5 rounded-full inline-block mb-3">
                  {item.date}
                </span>
                
                <h3 className="font-display font-bold text-lg text-foreground mb-1 leading-snug">
                  {item.title}
                </h3>
                
                <h4 className="font-sans font-medium text-xs text-muted-foreground uppercase tracking-wider mb-3">
                  {item.subtitle}
                </h4>
                
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
