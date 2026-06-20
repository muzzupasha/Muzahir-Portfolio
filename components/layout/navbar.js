"use client";
import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon, Menu, X, Code2 } from "lucide-react";
import { cn } from "@/lib/utils";

const WhatsAppIcon = (props) => (
  <svg viewBox="0 0 448 512" className={props.className} fill="currentColor" {...props}>
    <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
  </svg>
);

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const scrollPosition = window.scrollY + 120;
      
      // Determine active section
      for (const item of navItems) {
        const id = item.href.replace("#", "");
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
        scrolled
          ? "bg-background/70 backdrop-blur-md border-border/80 py-3"
          : "bg-transparent border-transparent py-5"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2 group md:w-[200px] justify-start flex-shrink-0">
          <div className="h-9 w-9 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:scale-105 group-hover:bg-primary/20 transition-all duration-300">
            <Code2 className="h-5 w-5 text-primary" />
          </div>
          <span className="font-display font-bold text-lg tracking-tight bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent group-hover:text-primary transition-colors duration-300">
            Muzahir<span className="text-primary">.dev</span>
          </span>
        </a>

        {/* Desktop Navigation (Centered) */}
        <div className="hidden md:flex flex-1 justify-center">
          <div className="flex items-center gap-1.5 bg-secondary/40 border border-border/40 px-3 py-1.5 rounded-full backdrop-blur-sm">
            {navItems.map((item) => {
              const id = item.href.replace("#", "");
              const isActive = activeSection === id;
              return (
                <a
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "relative px-4 py-1.5 text-xs font-semibold tracking-wide uppercase transition-colors duration-300 rounded-full select-none",
                    isActive
                      ? "text-primary-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  {isActive && (
                    <motion.span
                      layoutId="activeNavTab"
                      className="absolute inset-0 bg-primary rounded-full shadow-md shadow-primary/20"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{item.name}</span>
                </a>
              );
            })}
          </div>
        </div>

        {/* Desktop Action Buttons (Right-aligned) */}
        <div className="hidden md:flex items-center justify-end gap-3 md:w-[200px] flex-shrink-0">
          {/* WhatsApp Link */}
          <a
            href="https://wa.me/917060364116"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 h-10 px-3 py-1.5 rounded-xl border border-border bg-card/60 hover:bg-secondary/80 text-foreground transition-all duration-300 hover:scale-105"
            title="Chat on WhatsApp"
          >
            <WhatsAppIcon className="h-4.5 w-4.5 text-emerald-500 fill-emerald-500" />
            <span className="text-xs font-semibold hidden lg:inline">+91 7060364116</span>
          </a>

          {/* Theme Toggle Button */}
          {mounted && (
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-xl border border-border bg-card/60 hover:bg-secondary/80 text-foreground transition-all duration-300 hover:scale-105"
              aria-label="Toggle Theme"
            >
              <div className="relative h-5 w-5 flex items-center justify-center overflow-hidden">
                <motion.div
                  initial={false}
                  animate={{
                    y: resolvedTheme === "dark" ? 0 : 25,
                    opacity: resolvedTheme === "dark" ? 1 : 0,
                  }}
                  transition={{ duration: 0.2 }}
                  className="absolute"
                >
                  <Moon className="h-5 w-5 text-primary" />
                </motion.div>
                <motion.div
                  initial={false}
                  animate={{
                    y: resolvedTheme === "light" ? 0 : -25,
                    opacity: resolvedTheme === "light" ? 1 : 0,
                  }}
                  transition={{ duration: 0.2 }}
                  className="absolute"
                >
                  <Sun className="h-5 w-5 text-amber-500" />
                </motion.div>
              </div>
            </button>
          )}
        </div>

        {/* Mobile Toggle & Menu */}
        <div className="flex items-center gap-3.5 md:hidden">
          <a
            href="https://wa.me/917060364116"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-xl border border-border bg-card/60 text-foreground"
            title="Chat on WhatsApp"
          >
            <WhatsAppIcon className="h-4 w-4 text-emerald-500 fill-emerald-500" />
          </a>
          {mounted && (
            <button
              onClick={toggleTheme}
              className="p-2 rounded-xl border border-border bg-card/60 text-foreground"
              aria-label="Toggle Theme"
            >
              {resolvedTheme === "dark" ? (
                <Moon className="h-4 w-4 text-primary" />
              ) : (
                <Sun className="h-4 w-4 text-amber-500" />
              )}
            </button>
          )}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl border border-border bg-card/60 text-foreground"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-border/80 bg-background/95 backdrop-blur-md overflow-hidden"
          >
            <div className="flex flex-col gap-4 p-6">
              {navItems.map((item) => {
                const id = item.href.replace("#", "");
                const isActive = activeSection === id;
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={cn(
                      "text-sm font-semibold tracking-wider uppercase py-2 border-b border-border/40 flex items-center justify-between",
                      isActive ? "text-primary" : "text-muted-foreground"
                    )}
                  >
                    <span>{item.name}</span>
                    {isActive && (
                      <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                    )}
                  </a>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
