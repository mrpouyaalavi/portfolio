export interface Project {
  slug: string;
  title: string;
  category: "Full-Stack" | "Frontend" | "Backend" | "DevOps" | "AI/ML" | "Mobile";
  year: string;
  description: string;
  fullDescription: string;
  tags: string[];
  links: {
    demo?: string;
    repo?: string;
    repoLabel?: string;
    repoAlt?: string;
    repoAltLabel?: string;
  };
  highlights: string[];
  /**
   * Screenshot URLs for the project detail page.
   * - Omit (undefined): no screenshots section rendered.
   * - Empty array: placeholder slots rendered, ready for real images later.
   * - Populated array: actual screenshots rendered.
   */
  screenshots?: string[];
  /** When true, this entry is excluded from the resume projects section */
  resumeHide?: boolean;
}

export const projects: Record<string, Project> = {
  "syllabus-sync-ecosystem": {
    slug: "syllabus-sync-ecosystem",
    title: "Syllabus Sync Ecosystem – Student Platform & Mobile Navigation",
    category: "Full-Stack",
    year: "Dec 2025 – Present",
    description:
      "A connected student experience ecosystem co-founded for Macquarie University students, combining a full-stack web platform for academic planning, deadlines and campus support with a Flutter mobile navigation companion — accepted into the Macquarie University Incubator.",
    fullDescription:
      "The Syllabus Sync Ecosystem is a student-led initiative co-founded for Macquarie University students. The web platform (Next.js, React, TypeScript, Tailwind CSS, Supabase and PostgreSQL) covers academic planning, deadlines, events, campus support and multilingual accessibility — with secure authentication, row-level security, Vitest and Playwright testing, and CI/CD via GitHub Actions. The companion mobile app (Flutter and Dart) provides campus navigation with route previews, transport information, campus search and deep linking from the web platform. The ecosystem was accepted into the Macquarie University Incubator.",
    tags: [
      "Next.js",
      "React",
      "TypeScript",
      "Flutter",
      "Dart",
      "Supabase",
      "PostgreSQL",
      "REST APIs",
      "Vitest",
      "Playwright",
      "GitHub Actions",
    ],
    links: {
      repo: "https://github.com/mrpouyaalavi/syllabus-sync",
      repoLabel: "Web App",
      repoAlt: "https://github.com/mrpouyaalavi/MQ_Navigation",
      repoAltLabel: "Mobile App",
      demo: "https://syllabus-sync.app",
    },
    highlights: [
      "Co-founded and helped build a connected student experience ecosystem combining academic planning, deadlines, campus support and mobile navigation.",
      "Developed user-facing web features in Syllabus Sync, improving usability, accessibility and multilingual support.",
      "Built a Flutter navigation companion with campus search, route previews, transport information and deep linking from Syllabus Sync, supported by automated testing and CI/CD.",
    ],
  },
  "sylla": {
    slug: "sylla",
    title: "Sylla – AI-Powered Study Assistant",
    category: "Full-Stack",
    year: "Jul 2026 – Present",
    description:
      "An AI-assisted study application with streaming chat, conversation history, saved content and reusable study tools — architected to work both as a standalone app and as an embedded assistant within Syllabus Sync.",
    fullDescription:
      "Sylla is an AI-powered study assistant built with Next.js, React, TypeScript, Tailwind CSS, Vercel AI SDK and Supabase. It features streaming chat, conversation history, saved content and reusable study tools including summaries, explanations, flashcards, quizzes and structured study planning. Sylla is architected to operate both as a standalone application and as an embedded assistant within Syllabus Sync, using reusable components and a typed provider layer designed for future production AI integrations.",
    tags: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Vercel AI SDK",
      "Supabase",
      "Vitest",
    ],
    links: {
      repo: "https://github.com/mrpouyaalavi/Sylla",
    },
    highlights: [
      "Built an AI-assisted study application with streaming chat, conversation history, saved content and reusable study tools.",
      "Developed tools for summaries, explanations, flashcards, quizzes and structured study planning.",
      "Architected Sylla to operate as both a standalone application and an embedded assistant within Syllabus Sync, using reusable components and a typed provider layer for future production AI integrations.",
    ],
  },
  "cifar-10-image-classification": {
    slug: "cifar-10-image-classification",
    title: "CIFAR-10 Image Classification",
    category: "AI/ML",
    year: "Apr 2026 – Present",
    description:
      "An applied deep learning project comparing custom CNN, MobileNetV2 and ResNet-18 architectures on CIFAR-10 — ResNet-18 achieved 87.48% test accuracy via transfer learning, with Grad-CAM interpretability and a live Gradio demo.",
    fullDescription:
      "An applied deep learning project that designs and trains multiple architectures on CIFAR-10 under controlled conditions. Custom CNN, MobileNetV2 and ResNet-18 were compared; ResNet-18 achieved 87.48% test accuracy using transfer learning. Extended with Grad-CAM visual interpretability, INT8 quantisation, command-line inference tools, and a live Gradio demo deployed on Hugging Face Spaces.",
    tags: [
      "Python",
      "PyTorch",
      "scikit-learn",
      "Gradio",
      "Hugging Face Spaces",
      "Grad-CAM",
    ],
    links: {
      repo: "https://github.com/mrpouyaalavi/CIFAR-10-Image-Classification",
      demo: "https://cifar10.pouyaalavi.dev",
    },
    highlights: [
      "Built an end-to-end image-classification pipeline comparing custom CNN, MobileNetV2 and ResNet-18 architectures.",
      "Achieved 87.48% test accuracy using ResNet-18 transfer learning.",
      "Added Grad-CAM interpretability, INT8 quantisation and an interactive Gradio deployment.",
    ],
  },
};

export interface Experience {
  title: string;
  company: string;
  period: string;
  note?: string;
  description: string[];
  type: "technical" | "customer";
}

export const experiences: Experience[] = [
  {
    title: "Co-Founder, Syllabus Sync Ecosystem",
    company: "Macquarie University Incubator",
    period: "May 2026 – Present",
    type: "technical",
    description: [
      "Selected for the Macquarie University Incubator to develop and validate the Syllabus Sync ecosystem.",
      "Participating in founder education, mentoring and the EDUCATE accelerator while refining product and technical strategy.",
    ],
  },
  {
    title: "Web Developer",
    company: "SBR Group",
    period: "October 2023 – December 2024",
    note: "Promoted from a three-month internship to a paid development role.",
    type: "technical",
    description: [
      "Developed and maintained the company's WordPress website, improving mobile responsiveness, usability and page performance.",
      "Automated internal coordination workflows using Monday.com, reducing repetitive manual follow-up across teams.",
      "Collaborated with stakeholders to translate business requirements into website updates and practical digital solutions.",
    ],
  },
  {
    title: "Sales Co-worker",
    company: "IKEA Australia",
    period: "May 2025 – Present",
    type: "customer",
    description: [
      "Resolve customer enquiries through clear communication, practical problem-solving and cross-team collaboration.",
    ],
  },
  {
    title: "Sales Assistant",
    company: "Zara",
    period: "December 2024 – May 2025",
    type: "customer",
    description: [
      "Delivered customer service and supported transactions and stock operations in a high-volume retail environment.",
    ],
  },
];

export interface Education {
  degree: string;
  institution: string;
  period: string;
  details: string[];
}

export const education: Education[] = [
  {
    degree: "Bachelor of Information Technology (AI & Web and App Development)",
    institution: "Macquarie University",
    period: "July 2023 – November 2026",
    details: [
      "Relevant coursework: Software Engineering, Data Structures, Algorithms, Database Systems, Web Development, and AI Fundamentals.",
    ],
  },
  {
    degree: "Certificate IV in Information Technology (Programming)",
    institution: "TAFE NSW",
    period: "July 2022 – July 2023",
    details: [
      "Built hands-on foundations in HTML, CSS, JavaScript, PHP, MySQL, responsive design, and database-driven web development.",
    ],
  },
];

export interface SkillGroup {
  label: string;
  skills: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    label: "Languages",
    skills: ["TypeScript", "JavaScript", "Python", "Dart", "Java", "SQL", "HTML/CSS"],
  },
  {
    label: "Frontend & Mobile",
    skills: ["React", "Next.js", "Flutter", "Tailwind CSS", "Responsive Design", "Accessibility"],
  },
  {
    label: "Backend & Data",
    skills: ["Node.js", "PostgreSQL", "Supabase", "REST APIs", "Authentication", "Row-Level Security"],
  },
  {
    label: "AI/ML",
    skills: ["PyTorch", "scikit-learn", "Vercel AI SDK", "Gradio", "Transfer Learning", "Model Evaluation", "Grad-CAM"],
  },
  {
    label: "Testing & DevOps",
    skills: ["Git", "GitHub Actions", "Docker", "Vercel", "Vitest", "Playwright", "Flutter Testing", "CI/CD"],
  },
];
