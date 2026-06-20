"use client";
import React, { useState } from "react";
import Image from "next/image";
import { CardContainer, CardBody, CardItem } from "../ui/3d-card";
import { ExternalLink, FolderGit2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Github = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const projectCategories = ["All", "AI Projects", "Full Stack"];

const projectsData = [
  {
    title: "EmiCalculator",
    description: "A fast, client-side mortgage and loan amortization calculator with interactive breakdown graphs and monthly schedules.",
    category: "Full Stack",
    techs: ["React", "CSS Modules", "ChartJS", "Vite"],
    liveLink: "https://emi-calculator-ruby-five.vercel.app/",
    githubLink: "https://github.com/muzzupasha/emi-calculator",
    image: "/emi_calculator.png",
  },
  {
    title: "Quick-blog",
    description: "An AI-powered blogging platform built with the MERN stack. Integrates Google Gemini for automated content drafting and ImageKit for optimized media hosting.",
    category: "AI Projects",
    techs: ["MERN Stack", "Google Gemini", "ImageKit", "Tailwind CSS"],
    liveLink: "https://blog-app-ten-sigma-70.vercel.app/",
    githubLink: "https://github.com/muzzupasha/Quick-blog",
    image: "/quick_blog.png",
  },
  {
    title: "Deal Drop",
    description: "A automated deals tracker and price discovery platform powered by web scraping pipelines. Aggregates data in real-time.",
    category: "Full Stack",
    techs: ["Next.js 15", "Supabase", "Firecrawl", "Tailwind CSS"],
    liveLink: "https://deal-crack.vercel.app",
    githubLink: "https://github.com/muzzupasha/Deal-drop",
    image: "/deal_drop.png",
  },
  {
    title: "AI Creator Platform",
    description: "An AI generation workshop where users can generate high-fidelity assets, texts, and voice clones via custom machine learning prompts.",
    category: "AI Projects",
    techs: ["Next.js", "Clerk", "Replicate", "OpenAI", "MongoDB"],
    liveLink: "https://ai-creater.vercel.app",
    githubLink: "https://github.com/muzzupasha/AI-Creater",
    image: "/ai_creator.png",
  },
  {
    title: "Music Hub",
    description: "A responsive, feature-rich audio streaming experience built with sleek visual waveforms and interactive playlist management.",
    category: "Full Stack",
    techs: ["Next.js 15", "TypeScript", "Tailwind CSS", "Framer Motion"],
    liveLink: "https://music-hub-g.netlify.app",
    githubLink: "https://github.com/muzzupasha/Music-hub",
    image: "/music_hub.png",
  },
  {
    title: "Mystery Message",
    description: "An anonymous messaging platform allowing users to share feedback, ask questions, and toggle message dashboards securely.",
    category: "Full Stack",
    techs: ["Next.js", "MongoDB", "Tailwind CSS", "NextAuth"],
    liveLink: "https://mystery-messages-3ws9.vercel.app",
    githubLink: "https://github.com/muzzupasha/Mystery-Messages",
    image: "/mystery_message.png",
  },
];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = projectsData.filter((project) => {
    if (activeCategory === "All") return true;
    return project.category === activeCategory;
  });

  return (
    <section id="projects" className="relative py-28 px-6 bg-background overflow-hidden border-t border-border/60">
      {/* Background ambient light */}
      <div className="absolute right-1/4 top-1/3 h-[300px] w-[300px] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        {/* Section title */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-primary tracking-widest uppercase mb-3"
          >
            <FolderGit2 className="h-3.5 w-3.5" />
            Portfolio
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display font-bold text-3xl sm:text-4xl tracking-tight text-foreground mb-4"
          >
            Featured Engineering Projects
          </motion.h2>
          <p className="text-sm text-muted-foreground max-w-lg mx-auto">
            A hand-picked selection of full stack applications, AI pipelines, and responsive web products.
          </p>
        </div>

        {/* Categories Tab selector */}
        <div className="flex justify-center items-center gap-2 mb-16">
          <div className="flex bg-secondary/50 border border-border/60 p-1 rounded-xl backdrop-blur-sm">
            {projectCategories.map((category) => {
              const isActive = activeCategory === category;
              return (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className="relative px-5 py-2 text-xs font-semibold uppercase tracking-wider transition-colors duration-300 rounded-lg select-none"
                  style={{
                    color: isActive ? "var(--color-primary-foreground)" : "var(--color-muted-foreground)",
                  }}
                >
                  {isActive && (
                    <motion.span
                      layoutId="activeProjectCategory"
                      className="absolute inset-0 bg-primary rounded-lg shadow-sm"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{category}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Projects Grid with AnimatePresence */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="w-full"
              >
                <CardContainer containerClassName="py-0 w-full" className="w-full">
                  <CardBody className="w-full h-full rounded-2xl border border-border bg-card/40 backdrop-blur-sm p-6 flex flex-col justify-between hover:border-primary/40 transition-colors duration-300 relative overflow-hidden group">
                    <CardItem translateZ="50" className="w-full h-44 rounded-xl overflow-hidden relative mb-6">
                      {/* Project Preview (Mockup themed image) */}
                      <div className="absolute inset-0 w-full h-full bg-secondary group-hover:scale-105 transition-transform duration-500 flex items-center justify-center">
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover opacity-85 group-hover:opacity-100 transition-opacity duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent pointer-events-none" />
                      </div>
                    </CardItem>

                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <CardItem translateZ="30" className="flex items-center justify-between mb-2">
                          <h3 className="font-display font-bold text-xl text-foreground group-hover:text-primary transition-colors duration-300">
                            {project.title}
                          </h3>
                          <span className="text-[10px] font-bold text-primary tracking-widest uppercase bg-primary/10 border border-primary/20 px-2 py-0.5 rounded-full">
                            {project.category}
                          </span>
                        </CardItem>
                        
                        <CardItem translateZ="20" className="text-sm text-muted-foreground leading-relaxed mb-6">
                          {project.description}
                        </CardItem>
                      </div>

                      <div>
                        {/* Tech tags */}
                        <CardItem translateZ="20" className="flex flex-wrap gap-1.5 mb-6">
                          {project.techs.map((tech) => (
                            <span
                              key={tech}
                              className="px-2 py-0.5 rounded bg-secondary text-secondary-foreground text-xs border border-border/80"
                            >
                              {tech}
                            </span>
                          ))}
                        </CardItem>

                        {/* Action links */}
                        <CardItem translateZ="30" className="flex items-center gap-4 border-t border-border/60 pt-4">
                          <a
                            href={project.liveLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1.5 text-xs font-semibold text-primary hover:underline transition-all duration-300"
                          >
                            <ExternalLink className="h-3.5 w-3.5" />
                            Live Demo
                          </a>
                          <a
                            href={project.githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1.5 text-xs font-semibold text-muted-foreground hover:text-foreground hover:underline transition-all duration-300 ml-auto"
                          >
                            <Github className="h-3.5 w-3.5" />
                            Code Repository
                          </a>
                        </CardItem>
                      </div>
                    </div>
                  </CardBody>
                </CardContainer>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
