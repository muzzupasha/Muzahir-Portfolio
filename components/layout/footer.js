"use client";
import React from "react";
import { ArrowUp, Code2 } from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="border-t border-border bg-card/20 py-8 relative">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="h-7 w-7 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
            <Code2 className="h-4 w-4 text-primary" />
          </div>
          <span className="font-display font-bold text-sm tracking-tight text-foreground">
            Muzahir.dev
          </span>
        </div>
        
        <p className="text-xs text-muted-foreground text-center font-medium">
          Made with ❤️ Muzahir Ali
        </p>
        
        <motion.button
          onClick={scrollToTop}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="p-2.5 rounded-full border border-border bg-card/60 hover:bg-secondary text-primary transition-all duration-300 shadow-sm hover:shadow-primary/15"
          aria-label="Back to Top"
        >
          <ArrowUp className="h-4 w-4" />
        </motion.button>
      </div>
    </footer>
  );
}
