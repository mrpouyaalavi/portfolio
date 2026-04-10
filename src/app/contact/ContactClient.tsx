"use client";

import { Mail, MapPin, Send } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { fadeInUp } from "@/lib/utils";
import { GITHUB_URL, LINKEDIN_URL, CONTACT_EMAIL } from "@/lib/constants";

export function ContactClient() {
  return (
    <div className="flex-1 min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      {/* Background */}
      <div className="fixed inset-0 pointer-events-none -z-10" aria-hidden="true">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-125 h-125 bg-accent/4 rounded-full blur-[150px]" />
      </div>

      <div className="max-w-2xl mx-auto">
        <AnimatedSection variants={fadeInUp}>
          <div className="text-center space-y-4 mb-12">
            <p className="text-xs font-medium text-accent tracking-widest uppercase">
              Contact
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground">
              Let&apos;s <span className="text-gradient">Connect</span>
            </h1>
            <p className="text-text-secondary max-w-md mx-auto">
              Open to graduate and junior full-stack roles, collaborations,
              and interesting side projects. The fastest way to reach me is
              email.
            </p>
          </div>
        </AnimatedSection>

        {/* Contact form */}
        <AnimatedSection variants={fadeInUp} delay={0.1}>
          <form
            action={`mailto:${CONTACT_EMAIL}`}
            method="GET"
            className="glass-card p-6 md:p-8 space-y-5"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-xs font-semibold text-text-muted uppercase tracking-wider mb-2">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Your name"
                  className="w-full px-4 py-3 rounded-xl bg-overlay-subtle border border-border-subtle text-foreground placeholder:text-text-muted text-sm focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/30 transition-all"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-xs font-semibold text-text-muted uppercase tracking-wider mb-2">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  className="w-full px-4 py-3 rounded-xl bg-overlay-subtle border border-border-subtle text-foreground placeholder:text-text-muted text-sm focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/30 transition-all"
                />
              </div>
            </div>
            <div>
              <label htmlFor="subject" className="block text-xs font-semibold text-text-muted uppercase tracking-wider mb-2">
                Subject
              </label>
              <input
                id="subject"
                name="subject"
                type="text"
                placeholder="What's this about?"
                className="w-full px-4 py-3 rounded-xl bg-overlay-subtle border border-border-subtle text-foreground placeholder:text-text-muted text-sm focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/30 transition-all"
              />
            </div>
            <div>
              <label htmlFor="body" className="block text-xs font-semibold text-text-muted uppercase tracking-wider mb-2">
                Message
              </label>
              <textarea
                id="body"
                name="body"
                rows={5}
                placeholder="Tell me about your project or idea..."
                className="w-full px-4 py-3 rounded-xl bg-overlay-subtle border border-border-subtle text-foreground placeholder:text-text-muted text-sm focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/30 transition-all resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-accent hover:bg-accent/90 text-white text-sm font-semibold rounded-xl transition-all duration-300 shadow-lg shadow-accent/25 hover:shadow-xl hover:shadow-accent/30"
            >
              <Send size={16} /> Send Message
            </button>
          </form>
        </AnimatedSection>

        {/* Alternative contact */}
        <AnimatedSection variants={fadeInUp} delay={0.2}>
          <div className="mt-8 space-y-6">
            <p className="text-center text-xs text-text-muted">
              Or reach me directly through these channels
            </p>
            <div className="grid sm:grid-cols-3 gap-3">
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="glass-card p-4 flex flex-col items-center gap-2 hover:scale-[1.02] transition-transform text-center group"
              >
                <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                  <Mail size={18} className="text-accent" />
                </div>
                <span className="text-xs font-medium text-text-secondary group-hover:text-accent transition-colors">
                  Email
                </span>
                <span className="text-[11px] text-text-muted break-all">{CONTACT_EMAIL}</span>
              </a>
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card p-4 flex flex-col items-center gap-2 hover:scale-[1.02] transition-transform text-center group"
              >
                <div className="w-10 h-10 rounded-xl bg-overlay border border-border-subtle flex items-center justify-center group-hover:border-accent/30 transition-colors">
                  <GithubIcon size={18} className="text-text-secondary group-hover:text-accent transition-colors" />
                </div>
                <span className="text-xs font-medium text-text-secondary group-hover:text-accent transition-colors">
                  GitHub
                </span>
                <span className="text-[11px] text-text-muted">@mrpouyaalavi</span>
              </a>
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card p-4 flex flex-col items-center gap-2 hover:scale-[1.02] transition-transform text-center group"
              >
                <div className="w-10 h-10 rounded-xl bg-overlay border border-border-subtle flex items-center justify-center group-hover:border-accent/30 transition-colors">
                  <LinkedinIcon size={18} className="text-text-secondary group-hover:text-accent transition-colors" />
                </div>
                <span className="text-xs font-medium text-text-secondary group-hover:text-accent transition-colors">
                  LinkedIn
                </span>
                <span className="text-[11px] text-text-muted">pouya-alavi</span>
              </a>
            </div>

            {/* Location */}
            <div className="text-center">
              <span className="inline-flex items-center gap-1.5 text-xs text-text-muted">
                <MapPin size={12} /> Based in Sydney, Australia
              </span>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}

