"use client";
import React, { useState, useEffect } from "react";
import { Spotlight } from "../ui/spotlight";
import { SparklesCore } from "../ui/sparkles";
import { TextGenerateEffect } from "../ui/text-generate-effect";
import { MovingBorderButton } from "../ui/moving-border";
import { ArrowDown, Mail } from "lucide-react";
import { motion, AnimatePresence, useMotionValue, useMotionTemplate, useSpring } from "framer-motion";

const Github = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const Linkedin = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  const [copied, setCopied] = useState(false);
  
  // Mouse coordinates for following spotlight on desktop
  const rawMouseX = useMotionValue(0);
  const rawMouseY = useMotionValue(0);
  
  // Smooth the mouse motion
  const mouseX = useSpring(rawMouseX, { stiffness: 80, damping: 20 });
  const mouseY = useSpring(rawMouseY, { stiffness: 80, damping: 20 });

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleEmailClick = (e) => {
    navigator.clipboard.writeText("muzahirraza509@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleMouseMove = (e) => {
    const { currentTarget, clientX, clientY } = e;
    const { left, top } = currentTarget.getBoundingClientRect();
    rawMouseX.set(clientX - left);
    rawMouseY.set(clientY - top);
  };

  const bgTemplate = useMotionTemplate`radial-gradient(550px circle at ${mouseX}px ${mouseY}px, rgba(59, 130, 246, 0.08), rgba(16, 185, 129, 0.02) 40%, transparent 80%)`;

  return (
    <section
      id="home"
      onMouseMove={handleMouseMove}
      className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-background py-20 px-6 bg-grid-pattern"
    >
      {/* Acertinity Spotlight background glow */}
      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="rgba(59, 130, 246, 0.2)" />
      <Spotlight className="top-20 right-0 md:right-40" fill="rgba(16, 185, 129, 0.12)" />
      
      {/* Canvas Sparkles Background */}
      {mounted && (
        <SparklesCore
          id="hero-sparkles"
          background="transparent"
          minSize={0.4}
          maxSize={1.4}
          particleDensity={35}
          className="w-full h-full absolute inset-0 z-0 opacity-60 pointer-events-none"
          particleColor="#3b82f6"
        />
      )}

      {/* Interactive mouse spotlight */}
      <motion.div
        className="absolute inset-0 z-0 pointer-events-none hidden lg:block"
        style={{ background: bgTemplate }}
      />

      <div className="relative z-10 max-w-4xl text-center flex flex-col items-center gap-6">
        {/* Availability Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 px-4 py-1.5 rounded-full text-xs font-semibold text-primary tracking-wide uppercase shadow-sm"
        >
          <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
          Available for Internships & Projects
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display font-extrabold text-4xl sm:text-6xl lg:text-7xl tracking-tight text-foreground leading-[1.1]"
        >
          Hi, I am <span className="bg-gradient-to-r from-primary via-blue-500 to-emerald-400 bg-clip-text text-transparent">Muzahir Ali</span>
        </motion.h1>

        {/* Animated Subtitle / Role */}
        <div className="min-h-[40px] flex items-center justify-center">
          <TextGenerateEffect
            words="Full Stack Developer | MERN & AI Specialist"
            className="font-display text-xl sm:text-2xl font-bold tracking-tight text-muted-foreground"
          />
        </div>

        {/* Short Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-xl text-base sm:text-lg text-muted-foreground leading-relaxed"
        >
          I build production-ready full-stack web applications and integrate AI APIs, transforming complex ideas into seamless user experiences.
        </motion.p>

        {/* Call to Actions (CTA) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center gap-4 mt-4 w-full justify-center"
        >
          <a href="#projects" className="w-full sm:w-auto">
            <MovingBorderButton
              borderRadius="0.75rem"
              className="px-8 font-semibold w-full sm:w-auto"
            >
              View My Work
            </MovingBorderButton>
          </a>
          <a
            href="https://github.com/muzzupasha"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto"
          >
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="w-full sm:w-auto h-12 px-8 rounded-xl border border-border bg-card/40 hover:bg-secondary/80 font-semibold text-sm transition-all duration-300 flex items-center justify-center gap-2"
            >
              <Github className="h-4 w-4 text-foreground" />
              GitHub Profile
            </motion.button>
          </a>
        </motion.div>

        {/* Social Icons links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex items-center gap-4 mt-6 text-muted-foreground"
        >
          <a
            href="https://www.linkedin.com/in/muzahidpasha/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 hover:text-primary transition-colors duration-300 hover:scale-110"
          >
            <Linkedin className="h-5 w-5" />
          </a>
          <div className="relative">
            <a
              href="mailto:muzahirraza509@gmail.com"
              onClick={handleEmailClick}
              className="p-2 hover:text-primary transition-colors duration-300 hover:scale-110 block"
            >
              <Mail className="h-5 w-5" />
            </a>
            <AnimatePresence>
              {copied && (
                <motion.span
                  initial={{ opacity: 0, y: 5, scale: 0.9, x: "-50%" }}
                  animate={{ opacity: 1, y: -35, scale: 1, x: "-50%" }}
                  exit={{ opacity: 0, y: 5, scale: 0.9, x: "-50%" }}
                  className="absolute left-1/2 px-2.5 py-1 text-[10px] font-bold text-primary-foreground bg-primary rounded-md shadow-md pointer-events-none whitespace-nowrap"
                >
                  Email Copied!
                </motion.span>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>

      {/* Animated Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-1 cursor-pointer select-none"
      >
        <a href="#about" className="flex flex-col items-center text-xs font-semibold tracking-wider text-muted-foreground uppercase hover:text-primary transition-colors duration-300">
          Scroll Down
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="mt-2 text-primary"
          >
            <ArrowDown className="h-4 w-4" />
          </motion.div>
        </a>
      </motion.div>
    </section>
  );
}
