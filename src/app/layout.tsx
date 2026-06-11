import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { GITHUB_URL, LINKEDIN_URL, SITE_URL, SITE_NAME } from "@/lib/constants";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default:
      "Pouya Alavi Naeini | Software Engineer – Full-Stack Web & Applied AI",
    template: "%s | Pouya Alavi Naeini",
  },
  description:
    "Final-year IT student at Macquarie University and software engineer focused on full-stack web development and applied AI/ML. Co-founder of Syllabus Sync and MQ Navigation, student-led initiatives accepted into the Macquarie University Incubator. Graduating November 2026, based in Sydney, Australia.",
  keywords: [
    "Software Engineer",
    "Full-Stack Developer",
    "Next.js",
    "React",
    "TypeScript",
    "Flutter",
    "Applied AI",
    "Machine Learning",
    "Supabase",
    "PyTorch",
    "Web Development",
    "Pouya Alavi Naeini",
    "Graduate Developer Sydney",
    "Early-Career Developer Sydney",
    "Macquarie University",
  ],
  authors: [{ name: "Pouya Alavi Naeini", url: SITE_URL }],
  creator: "Pouya Alavi Naeini",
  openGraph: {
    type: "website",
    locale: "en_AU",
    url: SITE_URL,
    title:
      "Pouya Alavi Naeini | Software Engineer – Full-Stack Web & Applied AI",
    description:
      "Software engineer and final-year IT student focused on full-stack web development and applied AI/ML. Co-founder of student-led initiatives accepted into the Macquarie University Incubator. Based in Sydney, Australia.",
    siteName: SITE_NAME,
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Pouya Alavi Naeini | Software Engineer – Full-Stack Web & Applied AI",
    description:
      "Software engineer and final-year IT student focused on full-stack web development and applied AI/ML. Co-founder of Syllabus Sync and MQ Navigation, accepted into the MQ Incubator.",
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
    name: "Pouya Alavi Naeini",
    url: SITE_URL,
    jobTitle: "Software Engineer",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Sydney",
      addressCountry: "AU",
    },
    knowsAbout: [
      { "@type": "Thing", name: "Next.js & React" },
      { "@type": "Thing", name: "TypeScript & JavaScript" },
      { "@type": "Thing", name: "Full-Stack Web Development" },
      { "@type": "Thing", name: "Flutter & Mobile Development" },
      { "@type": "Thing", name: "Supabase & PostgreSQL" },
      { "@type": "Thing", name: "Tailwind CSS" },
      { "@type": "Thing", name: "Applied AI & PyTorch" },
      { "@type": "Thing", name: "CI/CD & DevOps" },
      { "@type": "Thing", name: "Product-Minded Engineering" },
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
