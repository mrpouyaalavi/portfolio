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
      "Designed and maintained the company's WordPress website, improving mobile responsiveness and page load performance through SEO and performance optimisation",
      "Automated internal workflows using Monday.com, reducing manual coordination overhead across teams",
      "Collaborated with stakeholders to translate business requirements into website updates and content changes",
    ],
  },
  {
    title: "Sales Co-Worker",
    company: "IKEA",
    period: "May 2025 - Present",
    type: "customer",
    description: [
      "Worked in a fast-paced team environment, supporting customers and collaborating with colleagues to resolve issues efficiently",
      "Developed strong communication, teamwork, and adaptability skills through day-to-day customer-facing problem-solving",
    ],
  },
  {
    title: "Sales Assistant",
    company: "Zara",
    period: "December 2024 - May 2025",
    type: "customer",
    description: [
      "Delivered customer service in a fast-paced retail environment, supporting transactions and day-to-day customer needs",
      "Contributed during peak trading periods through stock handling, teamwork, and maintaining smooth store operations",
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
      "Relevant coursework: Software Engineering, Data Structures, Algorithms, Database Systems, Web Development, and AI Fundamentals",
      "Volunteer, Macquarie University Buddy Program — supporting new students in their transition to university life",
    ],
  },
  {
    degree: "Certificate IV in Information Technology (Programming)",
    institution: "TAFE NSW",
    period: "July 2022 - July 2023",
    details: [
      "Built hands-on foundations in HTML, CSS, JavaScript, PHP, and MySQL through practical web development projects",
      "Developed responsive websites and worked with database-driven functionality, building a strong foundation for full-stack development",
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
    skills: ["Python", "TypeScript", "JavaScript", "Java", "SQL", "HTML/CSS"],
  },
  {
    label: "Software & Systems",
    skills: ["REST APIs", "OOP", "Data Structures", "Algorithms", "Debugging"],
  },
  {
    label: "Frontend",
    skills: ["React", "Next.js", "Tailwind CSS"],
  },
  {
    label: "Backend & Data",
    skills: ["Node.js", "PostgreSQL", "Supabase", "Data Handling", "System Integration"],
  },
  {
    label: "ML/AI",
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
