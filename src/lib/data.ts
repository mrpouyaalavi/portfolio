export interface Project {
  slug: string;
  title: string;
  category: "Full-Stack" | "Frontend" | "Backend" | "DevOps" | "AI/ML";
  year: string;
  description: string;
  fullDescription: string;
  tags: string[];
  links: {
    demo?: string;
    repo?: string;
  };
  highlights: string[];
}

export const projects: Record<string, Project> = {
  "syllabus-sync": {
    slug: "syllabus-sync",
    title: "Syllabus Sync",
    category: "Full-Stack",
    year: "Dec 2025 – Present",
    description:
      "A full-stack student productivity platform for Macquarie University students — academic planning, deadline tracking, and campus navigation, with MFA, row-level security, and CI/CD.",
    fullDescription:
      "Syllabus Sync is a full-stack student productivity platform built for Macquarie University. It brings academic planning, deadline tracking, and campus navigation into a single app. The stack includes Next.js, React, TypeScript, Tailwind CSS, and Supabase — with TOTP-based MFA, row-level security, rate limiting, internationalisation, RTL layout support, accessibility improvements, and end-to-end CI/CD.",
    tags: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Supabase",
      "Vitest",
      "GitHub Actions",
    ],
    links: {
      repo: "https://github.com/mrpouyaalavi/syllabus-sync",
      demo: "https://syllabus-sync-mq.vercel.app",
    },
    highlights: [
      "Co-developed planning, deadline tracking, and campus navigation features for Macquarie University students",
      "Built responsive multilingual interfaces, including RTL layout support and mobile-first flows",
      "Implemented TOTP-based MFA, row-level security, rate limiting, and tests to improve reliability and user security",
      "Improved accessibility and internationalisation across core user flows",
      "Set up GitHub Actions and Vercel workflows for testing, security checks, and deployment",
    ],
  },
  "cifar-10-image-classification": {
    slug: "cifar-10-image-classification",
    title: "CIFAR-10 Image Classification",
    category: "AI/ML",
    year: "Apr 2026 – Present",
    description:
      "An applied ML project evaluating Custom CNN, MobileNetV2, and ResNet-18 on CIFAR-10, with Grad-CAM interpretability and a live Gradio demo. Best result: 87.48% test accuracy with ResNet-18.",
    fullDescription:
      "An applied machine learning project that trains, evaluates, and compares three CIFAR-10 classifiers — a Custom CNN, MobileNetV2, and ResNet-18. Built with Python, PyTorch, and scikit-learn, it includes Grad-CAM for visual interpretability, INT8 quantisation for model efficiency, CLI inference tools, and a live interactive demo hosted on Hugging Face Spaces via Gradio. ResNet-18 achieved 87.48% test accuracy.",
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
      "Built an end-to-end Python pipeline for training, evaluating, and comparing CIFAR-10 classifiers — ResNet-18 achieved 87.48% test accuracy",
      "Applied data augmentation, cosine annealing, and progressive unfreezing across all three model architectures",
      "Added Grad-CAM visual interpretability, INT8 quantisation, and CLI inference tools to the evaluation workflow",
      "Deployed a live interactive demo on Hugging Face Spaces using Gradio",
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
    title: "IT & Web Developer",
    company: "SBR Group",
    period: "October 2023 - December 2024",
    note: "Started as a 3-month intern and was subsequently retained in a paid role",
    type: "technical",
    description: [
      "Maintained and improved the company WordPress site, focusing on responsiveness, performance, and SEO",
      "Automated internal coordination workflows using Monday.com, reducing repetitive manual work for the team",
      "Collaborated with stakeholders to gather requirements and ship practical improvements to the site and internal processes",
    ],
  },
  {
    title: "Sales Co-Worker",
    company: "IKEA",
    period: "May 2025 - Present",
    type: "customer",
    description: [
      "Applied communication, teamwork, and problem-solving skills in a fast-paced, high-volume retail environment",
      "Collaborated with colleagues to support customers, resolve issues, and keep store operations running smoothly",
    ],
  },
  {
    title: "Sales Assistant",
    company: "Zara",
    period: "December 2024 - May 2025",
    type: "customer",
    description: [
      "Developed attention to detail and adaptability through customer service, transactions, and stock management",
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
    period: "July 2023 - November 2026",
    details: [
      "Focused on software engineering, web development, databases, algorithms, and AI fundamentals",
      "Volunteer, Macquarie University Buddy Program",
    ],
  },
  {
    degree: "Certificate IV in Information Technology (Programming)",
    institution: "TAFE NSW",
    period: "July 2022 - July 2023",
    details: [
      "Built practical foundations in web development, programming, and database-backed applications",
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
    skills: ["TypeScript", "JavaScript", "Python", "Java", "SQL", "HTML/CSS"],
  },
  {
    label: "CS Fundamentals",
    skills: ["Data Structures", "Algorithms", "OOP", "REST APIs", "Debugging"],
  },
  {
    label: "Frontend",
    skills: ["React", "Next.js", "Tailwind CSS"],
  },
  {
    label: "Backend & Data",
    skills: ["Node.js", "PostgreSQL", "Supabase"],
  },
  {
    label: "Applied AI/ML",
    skills: ["PyTorch", "scikit-learn", "Jupyter", "Gradio"],
  },
  {
    label: "Testing & DevOps",
    skills: [
      "Git",
      "GitHub Actions",
      "Vercel",
      "Docker",
      "Vitest",
      "Playwright",
      "CI/CD",
    ],
  },
];
