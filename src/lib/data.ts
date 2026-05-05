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
      "GitHub Actions",
    ],
    links: {
      repo: "https://github.com/mrpouyaalavi/syllabus-sync",
      demo: "https://syllabus-sync-mq.vercel.app",
    },
    highlights: [
      "Co-developed a full-stack student productivity platform for Macquarie University students, with features for academic planning, deadlines, and campus navigation",
      "Built multilingual and responsive user experiences, including RTL layout support and mobile-first design",
      "Implemented secure authentication with TOTP-based MFA, row-level security, rate limiting, and test coverage to improve reliability and user security",
      "Added accessibility and internationalisation improvements aligned with inclusive design and WCAG principles",
      "Deployed the project through GitHub Actions and Vercel, integrating CI/CD practices across testing, security, and release workflows",
    ],
  },
  "cifar-10-image-classification": {
    slug: "cifar-10-image-classification",
    title: "CIFAR-10 Image Classification",
    category: "AI/ML",
    year: "Apr 2026 – Present",
    description:
      "An end-to-end Python application for evaluating multiple deep learning architectures on the CIFAR-10 dataset, with deployed models in a live interactive Gradio demo.",
    fullDescription:
      "CIFAR-10 Image Classification is an end-to-end Python application for evaluating multiple deep learning architectures on the CIFAR-10 dataset. Built with Python, PyTorch, scikit-learn, and Gradio, it compares model performance through structured experimentation and ships three models in a live interactive demo, with Grad-CAM interpretability, INT8 quantisation, command-line inference tools, and deployment on Hugging Face Spaces.",
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
      "Designed and implemented an end-to-end Python application to evaluate multiple deep learning architectures on the CIFAR-10 dataset, with three models deployed in a live interactive demo",
      "Compared model performance under controlled conditions using measurable outcomes and improved results through structured experimentation and iteration",
      "Extended the project with Grad-CAM interpretability, INT8 quantisation, command-line inference tools, and a deployed Gradio application on Hugging Face Spaces",
      "Applied modern training techniques, including data augmentation, cosine annealing learning rate scheduling, and progressive unfreezing, to improve convergence and generalisation",
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
    period: "October 2023 - December 2024",
    type: "technical",
    description: [
      "Started as a 3-month intern and was subsequently retained in a paid role",
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
      "Volunteer, Macquarie University Buddy Program - supporting new students in their transition to university life",
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
    skills: [
      "Node.js",
      "PostgreSQL",
      "Supabase",
      "Data Handling",
      "System Integration",
    ],
  },
  {
    label: "ML / AI",
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
