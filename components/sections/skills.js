"use client";
import React from "react";
import { BentoGrid, BentoGridItem } from "../ui/bento-grid";
import { Layout, Server, Cpu, Hammer } from "lucide-react";
import { motion } from "framer-motion";

const skillsData = [
  {
    title: "Frontend Engineering",
    description: "Designing responsive, smooth, and highly interactive user interfaces with optimal client-side assets and layout rendering.",
    icon: <Layout className="h-5 w-5" />,
    techs: ["React 19", "Next.js 15/16", "TypeScript", "Tailwind CSS v4", "Framer Motion", "shadcn/ui", "Redux Toolkit"],
    className: "md:col-span-2",
  },
  {
    title: "Backend Development",
    description: "Architecting relational schemas, serverless cloud databases, fast real-time APIs, and authorization routes.",
    icon: <Server className="h-5 w-5" />,
    techs: ["Node.js", "Express", "MongoDB", "PostgreSQL", "Supabase", "Convex", "REST APIs"],
    className: "md:col-span-1",
  },
  {
    title: "Tools & Deployments",
    description: "Hosting applications, managing versions, and utilizing third-party services for media and access control.",
    icon: <Hammer className="h-5 w-5" />,
    techs: ["Clerk (Auth)", "Cloudinary", "Git & GitHub", "Vercel", "Netlify", "Postman",],
    className: "md:col-span-3",
  },
];

export default function Skills() {
  return (
    <section id="skills" className="relative py-28 px-6 bg-card/10 overflow-hidden border-t border-border/60">
      {/* Background radial glow */}
      <div className="absolute left-1/4 bottom-0 h-[250px] w-[250px] rounded-full bg-primary/5 blur-[100px] pointer-events-none" />

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
            <Cpu className="h-3.5 w-3.5" />
            Stack
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display font-bold text-3xl sm:text-4xl tracking-tight text-foreground"
          >
            Core Technical Skills
          </motion.h2>
        </div>

        {/* Bento Grid */}
        <BentoGrid>
          {skillsData.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={skill.className}
            >
              <BentoGridItem
                title={skill.title}
                description={skill.description}
                icon={skill.icon}
                techs={skill.techs}
              />
            </motion.div>
          ))}
        </BentoGrid>
      </div>
    </section>
  );
}
