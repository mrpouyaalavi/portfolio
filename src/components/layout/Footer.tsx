"use client";

import Link from "next/link";
import { Mail, ArrowUp } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";
import { motion } from "framer-motion";
import { GITHUB_URL, LINKEDIN_URL, CONTACT_EMAIL } from "@/lib/constants";

const navLinks = [
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Resume", href: "/resume" },
  { name: "Contact", href: "/contact" },
];

export function Footer() {
  return (
    <footer className="border-t border-border-subtle bg-surface-1/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center">
                <span className="text-accent font-bold text-sm">P</span>
              </div>
              <span className="font-semibold text-foreground text-sm">
                Pouya Alavi Naeini
              </span>
            </div>
            <p className="text-sm text-text-secondary leading-relaxed max-w-xs">
              Graduate full-stack developer focused on modern web apps and
              practical AI features. Based in Sydney, Australia.
            </p>
            <div className="flex items-center gap-3">
              <motion.a
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg text-text-muted hover:text-accent hover:bg-accent/8 transition-colors"
                whileHover={{ y: -2 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <GithubIcon size={16} />
                <span className="sr-only">GitHub</span>
              </motion.a>
              <motion.a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg text-text-muted hover:text-accent hover:bg-accent/8 transition-colors"
                whileHover={{ y: -2 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <LinkedinIcon size={16} />
                <span className="sr-only">LinkedIn</span>
              </motion.a>
              <motion.a
                href={`mailto:${CONTACT_EMAIL}`}
                className="p-2 rounded-lg text-text-muted hover:text-accent hover:bg-accent/8 transition-colors"
                whileHover={{ y: -2 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <Mail size={16} />
                <span className="sr-only">Email</span>
              </motion.a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-4">
              Navigation
            </p>
            <nav className="grid grid-cols-2 gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-text-secondary hover:text-accent transition-colors py-1"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Connect */}
          <div>
            <p className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-4">
              Get in Touch
            </p>
            <div className="space-y-2 text-sm text-text-secondary">
              <a href={`mailto:${CONTACT_EMAIL}`} className="block hover:text-accent transition-colors">
                {CONTACT_EMAIL}
              </a>
              <p>Sydney, Australia</p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 pt-6 border-t border-border-subtle flex items-center justify-between">
          <p className="text-xs text-text-muted">
            &copy; {new Date().getFullYear()} Pouya Alavi Naeini. All rights reserved.
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-1.5 text-xs text-text-muted hover:text-accent transition-colors p-2 rounded-lg hover:bg-accent/8"
            aria-label="Back to top"
          >
            <ArrowUp size={14} />
            Top
          </button>
        </div>
      </div>
    </footer>
  );
}

