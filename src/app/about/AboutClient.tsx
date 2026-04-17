"use client";

import { Mail, MapPin, GraduationCap, Heart } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/utils";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GITHUB_URL, LINKEDIN_URL, CONTACT_EMAIL } from "@/lib/constants";
import { skillGroups, experiences, education } from "@/lib/data";
import Link from "next/link";
import Image from "next/image";

export function AboutClient() {
  return (
    <div className="relative min-h-screen pt-24 pb-16">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/4 rounded-full blur-[150px]" />
        <div className="absolute bottom-1/3 -left-32 w-80 h-80 bg-secondary/3 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-20">
        {/* ─── HERO ─── */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="grid lg:grid-cols-12 gap-12 items-start"
        >
          {/* Left content */}
          <motion.div variants={fadeInUp} className="lg:col-span-8 space-y-8">
            <div className="space-y-4">
              <p className="text-xs font-medium text-accent tracking-widest uppercase">
                About Me
              </p>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground leading-tight">
                Pouya Alavi Naeini
              </h1>
              <p className="text-xl text-accent-light font-medium">
                Full-Stack Developer
              </p>
              <p className="text-sm text-text-muted font-medium">
                Final-Year IT Student · Next.js, React, TypeScript
              </p>
            </div>

            <div className="glass-card p-6 md:p-8 space-y-4">
              <p className="text-text-secondary leading-relaxed">
                I&apos;m a developer focused on building full-stack web
                applications with{" "}
                <span className="text-foreground">
                  Next.js, React, TypeScript, and Supabase
                </span>
                , with a secondary interest in applied AI/ML using{" "}
                <span className="text-foreground">Python and PyTorch</span>.
                I&apos;m a final-year Bachelor of Information Technology
                student at{" "}
                <span className="text-foreground font-medium">
                  Macquarie University
                </span>
                , graduating in November 2026.
              </p>
              <p className="text-text-secondary leading-relaxed">
                My flagship projects are{" "}
                <span className="text-accent-light font-medium">
                  Syllabus Sync
                </span>
                , a collaboratively built student productivity platform with
                MFA, row-level security, multilingual/RTL support, and CI/CD on
                Vercel; and a{" "}
                <span className="text-accent-light font-medium">
                  CIFAR-10 image classification
                </span>{" "}
                project that compares a custom CNN, MobileNetV2, and ResNet-18
                under controlled conditions, with Grad-CAM interpretability and
                a Gradio demo on Hugging Face Spaces.
              </p>
              <p className="text-text-secondary leading-relaxed">
                I care about accessibility, testing, and user-centred design,
                and I&apos;m currently looking for graduate or junior
                full-stack roles — locally in Sydney or longer term abroad.
              </p>
            </div>

            {/* Info row */}
            <div className="flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-overlay-subtle border border-border-subtle text-text-muted text-xs font-medium">
                <MapPin size={12} /> Sydney, Australia
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-overlay-subtle border border-border-subtle text-text-muted text-xs font-medium">
                <GraduationCap size={12} /> Macquarie University · Nov 2026
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-accent/8 border border-accent/20 text-accent text-xs font-medium">
                <Heart size={12} /> Open to graduate &amp; junior roles
              </span>
            </div>

            {/* Social links */}
            <div className="flex flex-wrap gap-3">
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-overlay-subtle border border-border-subtle hover:border-accent/30 hover:text-accent text-text-secondary text-sm font-medium transition-all"
              >
                <GithubIcon size={16} /> GitHub
              </a>
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-overlay-subtle border border-border-subtle hover:border-accent/30 hover:text-accent text-text-secondary text-sm font-medium transition-all"
              >
                <LinkedinIcon size={16} /> LinkedIn
              </a>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-overlay-subtle border border-border-subtle hover:border-accent/30 hover:text-accent text-text-secondary text-sm font-medium transition-all"
              >
                <Mail size={16} /> Email
              </a>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-accent hover:bg-accent/90 text-white text-sm font-semibold rounded-xl transition-all shadow-lg shadow-accent/25"
              >
                Let&apos;s Connect
              </Link>
              <Link
                href="/resume"
                className="inline-flex items-center gap-2 px-6 py-3 bg-overlay hover:bg-overlay-strong text-foreground text-sm font-semibold rounded-xl border border-border-default hover:border-border-accent transition-all"
              >
                View Resume
              </Link>
            </div>
          </motion.div>

          {/* Right — Photo + Stats */}
          <motion.div variants={fadeInUp} className="lg:col-span-4 space-y-6">
            {/* Profile Photo */}
            <div className="flex justify-center">
              <div className="relative">
                <div className="absolute -inset-3 rounded-2xl bg-linear-to-br from-accent/20 via-secondary/10 to-accent/5 blur-xl opacity-50" />
                <div className="relative w-48 h-48 lg:w-56 lg:h-56 rounded-2xl p-0.5 bg-linear-to-br from-accent/40 via-secondary/20 to-accent/10">
                  <div className="w-full h-full rounded-2xl overflow-hidden bg-white ring-1 ring-border-subtle">
                    <Image
                      src="/pouya-profile.jpeg"
                      alt="Pouya Alavi Naeini"
                      width={400}
                      height={400}
                      priority
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Stats */}
            {[
              { value: "Nov 2026", label: "Graduating", color: "text-accent" },
              { value: "Full-Stack", label: "Focus", color: "text-secondary" },
              { value: "Applied AI", label: "Secondary", color: "text-warm" },
            ].map((s) => (
              <div
                key={s.label}
                className="glass-card p-5 text-center hover:scale-[1.02] transition-transform"
              >
                <div className={`text-2xl font-bold font-mono ${s.color}`}>
                  {s.value}
                </div>
                <div className="text-xs text-text-muted uppercase tracking-wider mt-1">
                  {s.label}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* ─── SKILLS ─── */}
        <AnimatedSection>
          <SectionHeading number="01" label="Technical" title="Skills & Tools" />
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="space-y-5"
          >
            {skillGroups.map((group) => (
              <motion.div key={group.label} variants={fadeInUp}>
                <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                  <div className="w-32 shrink-0 pt-1">
                    <span className="text-xs font-semibold text-text-muted uppercase tracking-wider">
                      {group.label}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1.5 text-xs font-medium rounded-lg bg-overlay-subtle text-text-secondary border border-border-subtle hover:border-accent/30 hover:text-accent hover:bg-accent/4 transition-all cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatedSection>

        {/* ─── EXPERIENCE ─── */}
        <AnimatedSection>
          <SectionHeading number="02" label="Work" title="Experience" />
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="space-y-4"
          >
            {experiences.map((exp) => (
              <motion.div key={`${exp.company}-${exp.title}`} variants={fadeInUp}>
                <div className="glass-card p-6 hover:scale-[1.01] transition-transform">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-3">
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">
                        {exp.title}
                      </h3>
                      <p className="text-sm text-accent-light">{exp.company}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <span
                        className={`text-[10px] font-medium px-2 py-0.5 rounded-full ${
                          exp.type === "technical"
                            ? "bg-accent/10 text-accent border border-accent/20"
                            : "bg-secondary/10 text-secondary border border-secondary/20"
                        }`}
                      >
                        {exp.type === "technical" ? "Technical" : "Customer-Facing"}
                      </span>
                      <span className="text-xs text-text-muted">{exp.period}</span>
                    </div>
                  </div>
                  <ul className="space-y-1.5">
                    {exp.description.map((d) => (
                      <li
                        key={d}
                        className="flex items-start gap-2 text-sm text-text-secondary"
                      >
                        <span className="text-accent mt-1 shrink-0">▸</span>
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatedSection>

        {/* ─── EDUCATION ─── */}
        <AnimatedSection>
          <SectionHeading number="03" label="Academic" title="Education" />
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid md:grid-cols-2 gap-4"
          >
            {education.map((edu) => (
              <motion.div key={edu.degree} variants={fadeInUp}>
                <div className="glass-card p-6 h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0">
                      <GraduationCap className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground text-sm">
                        {edu.degree}
                      </h3>
                      <p className="text-xs text-text-muted">{edu.institution}</p>
                    </div>
                  </div>
                  <p className="text-xs text-accent-light font-medium mb-3">
                    {edu.period}
                  </p>
                  <ul className="space-y-1.5">
                    {edu.details.map((d) => (
                      <li key={d} className="text-xs text-text-secondary leading-relaxed">
                        • {d}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatedSection>
      </div>
    </div>
  );
}

