"use client";

import {
  Mail,
  MapPin,
  Download,
  Phone,
  Briefcase,
  GraduationCap,
  Code2,
  Users,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { fadeInUp, staggerContainer } from "@/lib/utils";
import { motion } from "framer-motion";
import { CONTACT_EMAIL, GITHUB_URL, LINKEDIN_URL, PHONE } from "@/lib/constants";
import { experiences, education, skillGroups } from "@/lib/data";

export function ResumeClient() {
  return (
    <div className="relative min-h-screen pt-24 pb-16">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 left-1/4 w-80 h-80 bg-accent/3 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <AnimatedSection variants={fadeInUp}>
          <div className="mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <p className="text-xs font-medium text-accent tracking-widest uppercase mb-2">
                Curriculum Vitae
              </p>
              <h1 className="text-3xl md:text-4xl font-bold text-foreground">Resume</h1>
            </div>
            <a
              href="/Pouya_Resume.pdf"
              download
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-accent hover:bg-accent/90 text-white text-sm font-semibold rounded-xl transition-all shadow-lg shadow-accent/25"
            >
              <Download size={16} /> Download PDF
            </a>
          </div>
        </AnimatedSection>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          className="space-y-6"
        >
          {/* Contact Header */}
          <AnimatedSection variants={fadeInUp}>
            <div className="glass-card p-6 md:p-8 overflow-hidden relative">
              <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-accent/40 to-transparent" />
              <div className="flex flex-col md:flex-row justify-between gap-6">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                    Pouya Alavi Naeini
                  </h2>
                  <p className="text-lg text-accent-light font-medium mb-4">
                    Final-Year IT Student · Full-Stack Developer
                  </p>
                  <div className="flex flex-col gap-2 text-text-secondary text-sm">
                    <div className="flex items-center gap-2">
                      <MapPin size={14} className="text-text-muted" /> Sydney, NSW
                    </div>
                    <div className="flex items-center gap-2">
                      <Mail size={14} className="text-text-muted" /> {CONTACT_EMAIL}
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone size={14} className="text-text-muted" /> {PHONE}
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-2 justify-center md:items-end">
                  <a
                    href={GITHUB_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-text-secondary hover:text-accent transition-colors text-sm"
                  >
                    <GithubIcon size={14} /> github.com/mrpouyaalavi
                  </a>
                  <a
                    href={LINKEDIN_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-text-secondary hover:text-accent transition-colors text-sm"
                  >
                    <LinkedinIcon size={14} /> LinkedIn Profile
                  </a>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Professional Summary */}
          <AnimatedSection variants={fadeInUp}>
            <section className="space-y-3">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center">
                  <Users size={16} className="text-accent" />
                </div>
                <h3 className="text-lg font-bold text-foreground">Professional Summary</h3>
              </div>
              <p className="text-text-secondary leading-relaxed">
                Final-year Bachelor of IT student at Macquarie University (graduating November 2026)
                specialising in AI and Web/App Development. Builder of Syllabus Sync, a full-stack
                platform designed to help Macquarie University students manage academic planning,
                deadlines, and campus navigation. Combines hands-on experience in Next.js, React,
                TypeScript, and Supabase with strong CS fundamentals and customer-facing communication
                skills.
              </p>
            </section>
          </AnimatedSection>

          {/* Skills */}
          <AnimatedSection variants={fadeInUp}>
            <section className="space-y-4">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-lg bg-secondary/10 border border-secondary/20 flex items-center justify-center">
                  <Code2 size={16} className="text-secondary" />
                </div>
                <h3 className="text-lg font-bold text-foreground">Skills</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                {skillGroups.map((group) => (
                  <div key={group.label} className="glass-card p-4">
                    <h4 className="text-xs font-semibold text-accent uppercase tracking-wider mb-3">
                      {group.label}
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {group.skills.map((skill) => (
                        <span
                          key={skill}
                          className="text-xs px-2 py-1 rounded-md bg-white/4 text-text-secondary border border-border-subtle"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </AnimatedSection>

          {/* Featured Project */}
          <AnimatedSection variants={fadeInUp}>
            <section className="space-y-4">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center">
                  <Code2 size={16} className="text-accent" />
                </div>
                <h3 className="text-lg font-bold text-foreground">Featured Project</h3>
              </div>
              <div className="glass-card p-6">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-3">
                  <h4 className="text-lg font-semibold text-foreground">
                    Syllabus Sync — Student Productivity Platform
                  </h4>
                  <span className="text-xs text-text-muted">Dec 2025 – Present</span>
                </div>
                <p className="text-xs text-accent-light font-medium mb-3">
                  Next.js 16 · React 19 · TypeScript · Tailwind CSS · Supabase · Vitest
                </p>
                <ul className="space-y-2 text-sm text-text-secondary">
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1 shrink-0">▸</span>
                    Built a full-stack platform to help students manage academic planning, deadlines,
                    and campus navigation
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1 shrink-0">▸</span>
                    Implemented secure authentication with TOTP-based MFA, row-level security, and
                    rate limiting
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1 shrink-0">▸</span>
                    Added accessibility and internationalisation aligned with WCAG principles
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1 shrink-0">▸</span>
                    Deployed via GitHub Actions and Vercel with full CI/CD pipelines
                  </li>
                </ul>
                <div className="flex gap-3 mt-4">
                  <a
                    href="https://github.com/mrpouyaalavi/syllabus-sync"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-accent hover:text-accent-light transition-colors flex items-center gap-1"
                  >
                    <GithubIcon size={12} /> GitHub
                  </a>
                  <a
                    href="https://syllabus-sync-ashy.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-accent hover:text-accent-light transition-colors flex items-center gap-1"
                  >
                    Live Demo ↗
                  </a>
                </div>
              </div>
            </section>
          </AnimatedSection>

          {/* Experience */}
          <AnimatedSection variants={fadeInUp}>
            <section className="space-y-4">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-lg bg-warm/10 border border-warm/20 flex items-center justify-center">
                  <Briefcase size={16} className="text-warm" />
                </div>
                <h3 className="text-lg font-bold text-foreground">Experience</h3>
              </div>
              <div className="space-y-4">
                {experiences.map((exp) => (
                  <div key={`${exp.company}-${exp.title}`} className="glass-card p-5">
                    <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-2">
                      <div>
                        <h4 className="font-semibold text-foreground">{exp.title}</h4>
                        <p className="text-sm text-accent-light">{exp.company}</p>
                      </div>
                      <span className="text-xs text-text-muted">{exp.period}</span>
                    </div>
                    <ul className="space-y-1.5 mt-2">
                      {exp.description.map((d) => (
                        <li key={d} className="flex items-start gap-2 text-sm text-text-secondary">
                          <span className="text-accent mt-1 shrink-0">▸</span>
                          {d}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>
          </AnimatedSection>

          {/* Education */}
          <AnimatedSection variants={fadeInUp}>
            <section className="space-y-4 pb-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center">
                  <GraduationCap size={16} className="text-accent" />
                </div>
                <h3 className="text-lg font-bold text-foreground">Education</h3>
              </div>
              <div className="space-y-4">
                {education.map((edu) => (
                  <div key={edu.degree} className="glass-card p-5">
                    <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-2">
                      <h4 className="font-semibold text-foreground">{edu.degree}</h4>
                      <span className="text-xs text-text-muted">{edu.period}</span>
                    </div>
                    <p className="text-sm text-accent-light mb-2">{edu.institution}</p>
                    <ul className="space-y-1">
                      {edu.details.map((d) => (
                        <li key={d} className="text-sm text-text-secondary">
                          • {d}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>
          </AnimatedSection>
        </motion.div>
      </div>
    </div>
  );
}

