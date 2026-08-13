import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import {
  CONTACT_EMAIL,
  GITHUB_URL,
  LINKEDIN_URL,
  SITE_URL,
  SITE_NAME,
} from "@/lib/constants";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const SITE_DESCRIPTION =
  "Australian graduate software engineer based in Sydney, building full-stack web applications, Flutter mobile products and applied AI experiences with TypeScript, React, Next.js, Flutter and Python.";

export const metadata: Metadata = {
  title: {
    default: "Leo Alavi | Graduate Software Engineer",
    template: "%s | Leo Alavi",
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "Graduate Software Engineer",
    "Full-Stack Developer",
    "Frontend Developer",
    "Flutter Developer",
    "Next.js",
    "React",
    "TypeScript",
    "Flutter",
    "Applied AI",
    "Machine Learning",
    "Supabase",
    "PyTorch",
    "Web Development",
    "Leo Alavi",
    "Graduate Developer Sydney",
    "Macquarie University",
  ],
  authors: [{ name: "Leo Alavi", url: SITE_URL }],
  creator: "Leo Alavi",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_AU",
    url: SITE_URL,
    title: "Leo Alavi | Graduate Software Engineer",
    description: SITE_DESCRIPTION,
    siteName: SITE_NAME,
    images: [
      {
        url: "/leo-profile.jpeg",
        width: 400,
        height: 400,
        alt: "Leo Alavi",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Leo Alavi | Graduate Software Engineer",
    description: SITE_DESCRIPTION,
    images: ["/leo-profile.jpeg"],
  },
  metadataBase: new URL(SITE_URL),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLdString = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Leo Alavi",
    url: SITE_URL,
email: `mailto:${CONTACT_EMAIL}`,
    jobTitle: "Graduate Software Engineer",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Sydney",
      addressCountry: "Australia",
    },
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "Macquarie University",
    },
    knowsAbout: [
      "TypeScript",
      "React",
      "Next.js",
      "Flutter",
      "Python",
      "Applied AI",
    ],
    sameAs: [GITHUB_URL, LINKEDIN_URL],
  }).replace(/</g, "\\u003c");

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body className="bg-background text-foreground" suppressHydrationWarning>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: jsonLdString }}
        />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-60 focus:px-4 focus:py-2 focus:bg-accent focus:text-white focus:rounded-lg focus:text-sm"
        >
          Skip to main content
        </a>
        <Navbar />
        <main id="main-content" className="min-h-screen pt-16 flex flex-col">
          <div className="flex-1">{children}</div>
          <Footer />
        </main>
      </body>
    </html>
  );
}
