"use client";
import React from "react";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";
import { MessageSquareQuote } from "lucide-react";
import { motion } from "framer-motion";

const testimonialsData = [
  {
    quote: "Muzahir built a stunning digital shopfront for our tea brand. His attention to fine details, custom animations, and responsive layouts made the launch a massive success.",
    name: "T. Shanti",
    title: "Founder, Te'shanti Tea Label",
  },
  {
    quote: "A talented full-stack engineer who learns rapidly. He integrated the complex OpenAI and Replicate generation loops into our platform within days. Extremely easy to work with.",
    name: "Alex Rivera",
    title: "Technical Director, GenAI Studios",
  },
  {
    quote: "Muzahir is a self-starter who consistently delivers clean, structured, and modular code. His capability to parse, scrape, and display data via custom APIs is impressive.",
    name: "Karan Sharma",
    title: "Senior Full Stack Engineer, Freelance Partner",
  },
  {
    quote: "His technical approach to solving performance bottlenecks in Next.js is highly mature. He has a brilliant career ahead in distributed engineering systems.",
    name: "Prof. Dr. H. Meyer",
    title: "Academic Mentor, BCA Advisor",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative py-28 px-6 bg-background overflow-hidden border-t border-border/60">
      {/* Background ambient lights */}
      <div className="absolute right-10 bottom-0 h-[250px] w-[250px] rounded-full bg-primary/5 blur-[100px] pointer-events-none" />

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
            <MessageSquareQuote className="h-3.5 w-3.5" />
            Endorsements
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display font-bold text-3xl sm:text-4xl tracking-tight text-foreground mb-4"
          >
            Client & Peer Feedback
          </motion.h2>
          <p className="text-sm text-muted-foreground max-w-md mx-auto">
            What people say about working together on design engineering and software integration projects.
          </p>
        </div>

        {/* Infinite Moving cards slider */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full flex flex-col items-center justify-center overflow-hidden"
        >
          <InfiniteMovingCards
            items={testimonialsData}
            direction="left"
            speed="normal"
            className="w-full"
          />
        </motion.div>
      </div>
    </section>
  );
}
