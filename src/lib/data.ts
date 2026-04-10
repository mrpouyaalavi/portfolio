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
      "A collaborative full-stack productivity platform for Macquarie University students — academic planning, deadlines, and campus navigation in one place.",
    fullDescription:
      "Syllabus Sync is a full-stack productivity platform co-developed for Macquarie University students, designed to support academic planning, deadlines, and campus navigation. Built with Next.js, React, TypeScript, Tailwind CSS, and Supabase, it ships with multilingual support and RTL layouts, TOTP-based MFA, row-level security, accessibility improvements, and CI/CD workflows via GitHub Actions and Vercel.",
    tags: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Supabase",
      "Vitest",
      "Playwright",
    ],
    links: {
      repo: "https://github.com/mrpouyaalavi/syllabus-sync",
      demo: "https://syllabus-sync-ashy.vercel.app",
    },
    highlights: [
      "Co-developed a full-stack student productivity platform used for academic planning, deadlines, and campus navigation",
      "Built the frontend with Next.js, React, TypeScript, and Tailwind CSS, including multilingual support and RTL layouts",
      "Implemented secure auth on Supabase with TOTP-based MFA, row-level security, and rate limiting",
      "Improved accessibility and internationalisation to align with WCAG principles and inclusive design practices",
      "Shipped CI/CD pipelines on GitHub Actions and Vercel, integrating automated testing with Vitest and Playwright",
    ],
  },
  "cifar-10-image-classification": {
    slug: "cifar-10-image-classification",
    title: "CIFAR-10 Image Classification",
    category: "AI/ML",
    year: "Mar 2026 – Present",
    description:
      "End-to-end deep learning image classification on CIFAR-10 — controlled comparison of custom CNNs and transfer learning, with Grad-CAM, CLI tools, and a Streamlit demo.",
    fullDescription:
      "An end-to-end deep learning image classification project on the CIFAR-10 dataset, built with Python and PyTorch. Designs and evaluates a custom CNN alongside multiple training-from-scratch and transfer learning approaches under controlled conditions, including data augmentation, Grad-CAM visualisation, CLI inference tools, and a Streamlit demo app. MobileNetV2 reached 85.53% test accuracy using progressive unfreezing and cosine annealing.",
    tags: [
      "Python",
      "PyTorch",
      "scikit-learn",
      "Streamlit",
      "Jupyter",
      "Grad-CAM",
    ],
    links: {
      repo: "https://github.com/mrpouyaalavi/CIFAR-10-Image-Classification",
    },
    highlights: [
      "Built an end-to-end image classification pipeline on CIFAR-10 with Python and PyTorch",
      "Compared training-from-scratch and transfer learning approaches under controlled conditions; MobileNetV2 reached 85.53% test accuracy",
      "Applied progressive unfreezing, cosine annealing, and data augmentation to improve convergence and generalisation",
      "Added Grad-CAM visualisation, INT8 quantisation, and CLI inference tools for analysis and deployment",
      "Packaged the project as an interactive Streamlit demo app to showcase results and inference",
    ],
  },
};

export interface Experience {
  title: string;
  company: string;
  period: string;
  description: string[];
  type: "technical" | "customer";
}

export const experiences: Experience[] = [
  {
    title: "IT & Web Developer",
    company: "SBR Group",
    period: "Oct 2023 – Dec 2024",
    type: "technical",
    description: [
      "Designed, built, and maintained a WordPress business website, improving mobile responsiveness and page load performance through SEO and front-end optimisation",
      "Automated internal workflows on Monday.com, reducing manual overhead and improving team coordination",
      "Diagnosed and resolved issues across the website and internal tooling to keep day-to-day operations running smoothly",
    ],
  },
  {
    title: "Sales Co-Worker",
    company: "IKEA",
    period: "May 2025 – Present",
    type: "customer",
    description: [
      "Customer-facing role building communication, teamwork, and problem-solving skills in a high-volume retail environment",
    ],
  },
  {
    title: "Sales Assistant",
    company: "Zara",
    period: "Dec 2024 – May 2025",
    type: "customer",
    description: [
      "Fast-paced retail role focused on customer service, collaboration, and accurate high-volume transactions",
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
    degree: "Bachelor of Information Technology",
    institution: "Macquarie University",
    period: "Jul 2023 – Nov 2026",
    details: [
      "Specialising in AI and Web/App Development",
      "Relevant coursework: Software Engineering, Web Development, Database Systems, Data Structures & Algorithms, AI Fundamentals",
    ],
  },
  {
    degree: "Certificate IV in Information Technology (Programming)",
    institution: "TAFE NSW",
    period: "Jul 2022 – Jul 2023",
    details: [
      "Foundations in HTML, CSS, JavaScript, PHP, and MySQL through hands-on web projects",
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
    label: "Frontend",
    skills: ["React", "Next.js", "Tailwind CSS"],
  },
  {
    label: "Backend & Data",
    skills: ["Supabase", "Node.js", "PostgreSQL", "REST APIs"],
  },
  {
    label: "ML / AI",
    skills: ["PyTorch", "scikit-learn", "Jupyter", "Grad-CAM"],
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
    ],
  },
];
