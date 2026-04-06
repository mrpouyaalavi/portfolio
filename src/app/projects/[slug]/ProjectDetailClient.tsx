"use client";

import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { GithubIcon } from "@/components/ui/Icons";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/utils";
import type { Project } from "@/lib/data";

export function ProjectDetailClient({ project }: { project: Project }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto"
    >
      {/* Back link */}
      <Link
        href="/projects"
        className="inline-flex items-center gap-2 text-sm text-text-muted hover:text-accent transition-colors mb-8"
      >
        <ArrowLeft size={16} /> Back to Projects
      </Link>

      <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="space-y-8">
        {/* Header */}
        <motion.div variants={fadeInUp} className="space-y-4">
          <div className="flex items-center gap-3">
            <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-accent/10 text-accent border border-accent/20">
              {project.category}
            </span>
            <span className="text-xs text-text-muted">{project.year}</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-foreground">
            {project.title}
          </h1>
          <p className="text-lg text-text-secondary leading-relaxed">
            {project.fullDescription}
          </p>

          {/* Links */}
          <div className="flex flex-wrap gap-3">
            {project.links.demo && (
              <a
                href={project.links.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-accent/10 text-accent text-sm font-medium border border-accent/20 hover:bg-accent/20 transition-colors"
              >
                <ExternalLink size={14} /> Live Demo
              </a>
            )}
            {project.links.repo && (
              <a
                href={project.links.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-overlay-subtle text-text-secondary text-sm font-medium border border-border-subtle hover:border-accent/30 hover:text-accent transition-colors"
              >
                <GithubIcon size={14} /> View Source
              </a>
            )}
          </div>
        </motion.div>

        {/* Tech stack */}
        <motion.div variants={fadeInUp} className="glass-card p-6">
          <h2 className="text-sm font-semibold text-text-muted uppercase tracking-wider mb-4">
            Tech Stack
          </h2>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1.5 text-xs font-medium rounded-lg bg-overlay-subtle text-text-secondary border border-border-subtle"
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Key Highlights */}
        <motion.div variants={fadeInUp} className="glass-card p-6">
          <h2 className="text-sm font-semibold text-text-muted uppercase tracking-wider mb-4">
            Key Highlights
          </h2>
          <ul className="space-y-3">
            {project.highlights.map((h) => (
              <li key={h} className="flex items-start gap-3 text-text-secondary">
                <span className="text-accent mt-1 shrink-0 text-sm">▸</span>
                <span className="text-sm leading-relaxed">{h}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

