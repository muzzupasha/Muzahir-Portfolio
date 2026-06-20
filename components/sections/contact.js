"use client";
import React, { useState } from "react";
import { BackgroundBeams } from "../ui/background-beams";
import { Mail, Send, MessageSquareText, AlertCircle, CheckCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

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

const WhatsAppIcon = (props) => (
  <svg viewBox="0 0 24 24" className={props.className} fill="currentColor" {...props}>
    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.717-1.456L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.859-4.407 9.862-9.837.002-2.63-1.018-5.101-2.87-6.956-1.853-1.855-4.324-2.877-6.958-2.879-5.437 0-9.86 4.408-9.863 9.839-.001 1.77.461 3.5 1.338 5.016L1.83 20.316l4.817-1.162zM17.382 14.2c-.3-.15-1.782-.88-2.062-.982-.28-.102-.485-.15-.688.15-.203.3-.786.983-.964 1.186-.177.202-.355.228-.655.078-1.218-.609-2.023-1.066-2.827-2.46-.21-.365.21-.339.6-.113.35.203.35.34.5.58.15.24.075.455-.038.607-.112.152-.688.829-.964 1.1-.28.27-.56.242-.86.092-.93-.465-1.636-.8-2.31-1.97-.24-.41-.24-.76-.038-1.01.216-.27.5-.58.75-.88.25-.3.33-.5.5-.83.17-.33.085-.609-.04-.862-.124-.254-.688-1.658-.964-2.33-.28-.673-.56-.58-.78-.58-.2-.002-.43-.003-.66-.003-.23 0-.6.086-.913.43-.313.344-1.2 1.173-1.2 2.861 0 1.687 1.229 3.316 1.4 3.543.172.227 2.417 3.731 5.855 5.2 1.077.46 1.91.737 2.56.944 1.08.344 2.066.295 2.842.179.867-.13 1.782-.728 2.034-1.397.253-.669.253-1.243.177-1.397-.076-.154-.28-.242-.58-.392z" />
  </svg>
);

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | submitting | success | error
  const [copied, setCopied] = useState(false);

  const handleEmailClick = (e) => {
    navigator.clipboard.writeText("muzahirraza509@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const validate = () => {
    let tempErrors = {};
    if (!formData.name.trim()) tempErrors.name = "Name is required";
    if (!formData.email.trim()) {
      tempErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Please enter a valid email";
    }
    if (!formData.message.trim()) tempErrors.message = "Message is required";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    
    setStatus("submitting");
    
    // Simulate API submission call
    setTimeout(() => {
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
    }, 1500);
  };

  return (
    <section id="contact" className="relative py-28 px-6 bg-background overflow-hidden border-t border-border/60">
      {/* Background Beams decorative trail */}
      <BackgroundBeams className="opacity-30 dark:opacity-40" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section title */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-primary tracking-widest uppercase mb-3"
          >
            <MessageSquareText className="h-3.5 w-3.5" />
            Connect
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display font-bold text-3xl sm:text-4xl tracking-tight text-foreground mb-4"
          >
            Get In Touch
          </motion.h2>
          <p className="text-sm text-muted-foreground max-w-sm mx-auto">
            Have a project idea, internship opening, or just want to chat? Drop me a message.
          </p>
        </div>

        {/* Layout grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Contact form column */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 bg-card/40 backdrop-blur-sm border border-border p-6 sm:p-8 rounded-2xl shadow-sm relative overflow-hidden"
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name field */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="name" className="text-xs font-semibold uppercase tracking-wider text-foreground">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="John Doe"
                  className={`w-full h-11 px-4 text-sm rounded-xl border bg-card/60 border-border/80 focus:border-primary/50 focus:outline-none transition-colors duration-300 ${errors.name ? "border-red-500/80 focus:border-red-500" : ""}`}
                />
                <AnimatePresence>
                  {errors.name && (
                    <motion.span
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="text-xs text-red-500 flex items-center gap-1 font-medium mt-1"
                    >
                      <AlertCircle className="h-3 w-3" />
                      {errors.name}
                    </motion.span>
                  )}
                </AnimatePresence>
              </div>

              {/* Email field */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="email" className="text-xs font-semibold uppercase tracking-wider text-foreground">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="john@example.com"
                  className={`w-full h-11 px-4 text-sm rounded-xl border bg-card/60 border-border/80 focus:border-primary/50 focus:outline-none transition-colors duration-300 ${errors.email ? "border-red-500/80 focus:border-red-500" : ""}`}
                />
                <AnimatePresence>
                  {errors.email && (
                    <motion.span
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="text-xs text-red-500 flex items-center gap-1 font-medium mt-1"
                    >
                      <AlertCircle className="h-3 w-3" />
                      {errors.email}
                    </motion.span>
                  )}
                </AnimatePresence>
              </div>

              {/* Message field */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="message" className="text-xs font-semibold uppercase tracking-wider text-foreground">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Hi, I want to work with you on..."
                  className={`w-full p-4 text-sm rounded-xl border bg-card/60 border-border/80 focus:border-primary/50 focus:outline-none transition-colors duration-300 resize-none ${errors.message ? "border-red-500/80 focus:border-red-500" : ""}`}
                />
                <AnimatePresence>
                  {errors.message && (
                    <motion.span
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="text-xs text-red-500 flex items-center gap-1 font-medium mt-1"
                    >
                      <AlertCircle className="h-3 w-3" />
                      {errors.message}
                    </motion.span>
                  )}
                </AnimatePresence>
              </div>

              {/* Status indicators */}
              <AnimatePresence mode="wait">
                {status === "success" && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-500 text-xs font-semibold flex items-center gap-2"
                  >
                    <CheckCircle className="h-4 w-4" />
                    Thank you! Your message has been sent successfully.
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Submit button */}
              <motion.button
                type="submit"
                disabled={status === "submitting"}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full h-12 rounded-xl bg-primary hover:bg-primary/95 text-primary-foreground font-semibold text-sm transition-all duration-300 flex items-center justify-center gap-2 shadow-md shadow-primary/20 hover:shadow-primary/30 disabled:opacity-75 disabled:cursor-not-allowed"
              >
                {status === "submitting" ? (
                  <>
                    <div className="h-4 w-4 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin" />
                    Sending Message...
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4" />
                    Send Message
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>

          {/* Direct contact info column */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-5 space-y-6"
          >
            <h3 className="font-display font-bold text-xl text-foreground">
              Direct Contact Details
            </h3>
            
            <p className="text-muted-foreground text-sm leading-relaxed">
              If you prefer traditional channels, feel free to copy my email or reach out on developer communities. I generally respond within a business day.
            </p>

            <div className="space-y-4">
              {/* Email Card */}
              <div className="relative">
                <a
                  href="mailto:muzahirraza509@gmail.com"
                  onClick={handleEmailClick}
                  className="flex items-center gap-4 p-4.5 rounded-2xl border border-border bg-card/30 hover:border-primary/40 hover:bg-card/50 transition-all duration-300 group shadow-sm cursor-pointer"
                >
                  <div className="h-10 w-10 rounded-xl bg-secondary/80 border border-border flex items-center justify-center text-primary group-hover:scale-105 transition-transform duration-300">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-xs text-muted-foreground uppercase tracking-wider">Email Address</h4>
                    <p className="font-display font-medium text-sm text-foreground group-hover:text-primary transition-colors duration-300">
                      muzahirraza509@gmail.com
                    </p>
                  </div>
                </a>
                <AnimatePresence>
                  {copied && (
                    <motion.span
                      initial={{ opacity: 0, y: 5, scale: 0.9, x: "-50%" }}
                      animate={{ opacity: 1, y: -35, scale: 1, x: "-50%" }}
                      exit={{ opacity: 0, y: 5, scale: 0.9, x: "-50%" }}
                      className="absolute left-1/2 top-0 px-2.5 py-1 text-[10px] font-bold text-primary-foreground bg-primary rounded-md shadow-md pointer-events-none whitespace-nowrap"
                    >
                      Email Copied!
                    </motion.span>
                  )}
                </AnimatePresence>
              </div>

              {/* GitHub Card */}
              <a
                href="https://github.com/muzzupasha"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4.5 rounded-2xl border border-border bg-card/30 hover:border-primary/40 hover:bg-card/50 transition-all duration-300 group shadow-sm"
              >
                <div className="h-10 w-10 rounded-xl bg-secondary/80 border border-border flex items-center justify-center text-primary group-hover:scale-105 transition-transform duration-300">
                  <Github className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-xs text-muted-foreground uppercase tracking-wider">GitHub Profile</h4>
                  <p className="font-display font-medium text-sm text-foreground group-hover:text-primary transition-colors duration-300">
                    github.com/muzzupasha
                  </p>
                </div>
              </a>


              {/* LinkedIn Card */}
              <a
                href="https://www.linkedin.com/in/muzahidpasha/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4.5 rounded-2xl border border-border bg-card/30 hover:border-primary/40 hover:bg-card/50 transition-all duration-300 group shadow-sm"
              >
                <div className="h-10 w-10 rounded-xl bg-secondary/80 border border-border flex items-center justify-center text-primary group-hover:scale-105 transition-transform duration-300">
                  <Linkedin className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-xs text-muted-foreground uppercase tracking-wider">LinkedIn Profile</h4>
                  <p className="font-display font-medium text-sm text-foreground group-hover:text-primary transition-colors duration-300">
                    linkedin.com/in/muzahidpasha/
                  </p>
                </div>
              </a>

              {/* WhatsApp Card */}
              <a
                href="https://wa.me/917060364116"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4.5 rounded-2xl border border-border bg-card/30 hover:border-primary/40 hover:bg-card/50 transition-all duration-300 group shadow-sm"
              >
                <div className="h-10 w-10 rounded-xl bg-secondary/80 border border-border flex items-center justify-center text-primary group-hover:scale-105 transition-transform duration-300">
                  <WhatsAppIcon className="h-5 w-5 text-emerald-500 fill-emerald-500" />
                </div>
                <div>
                  <h4 className="font-semibold text-xs text-muted-foreground uppercase tracking-wider">WhatsApp</h4>
                  <p className="font-display font-medium text-sm text-foreground group-hover:text-primary transition-colors duration-300">
                    +91 7060364116
                  </p>
                </div>
              </a>

            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
