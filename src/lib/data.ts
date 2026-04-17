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
      "An end-to-end deep learning image classification project on the CIFAR-10 dataset, built with Python and PyTorch. Compares a custom CNN, MobileNetV2, and ResNet-18 under controlled training and transfer learning settings, with data augmentation, Grad-CAM visualisation, CLI inference tools, and a Gradio demo deployed on Hugging Face Spaces. MobileNetV2 achieved 86.91% test accuracy.",
    fullDescription:
      "An end-to-end deep learning image classification project on the CIFAR-10 dataset, built with Python and PyTorch. Compares a custom CNN, MobileNetV2, and ResNet-18 under controlled training and transfer learning settings, with data augmentation, Grad-CAM visualisation, CLI inference tools, and a Gradio demo deployed on Hugging Face Spaces. MobileNetV2 achieved 86.91% test accuracy.",
    tags: [
      "Python",
      "PyTorch",
      "scikit-learn",
      "Gradio",
      "Hugging Face Spaces",
      "Jupyter",
      "Grad-CAM",
    ],
    links: {
      repo: "https://github.com/mrpouyaalavi/CIFAR-10-Image-Classification",
      demo: "https://cifar10.pouyaalavi.dev",
    },
    highlights: [
      "Designed and implemented an end-to-end image classification pipeline to evaluate five deep learning architectures on the CIFAR-10 dataset using Python and PyTorch.",
      "Compared training-from-scratch and transfer learning approaches under controlled conditions; MobileNetV2 achieved 86.91% test accuracy, outperforming a custom CNN and a ResNet-18 baseline.",
      "Applied modern training techniques, including data augmentation, cosine annealing learning rate scheduling, and progressive unfreezing, to improve convergence and generalisation.",
      "Extended the project with Grad-CAM, INT8 quantisation experiments, command-line inference tools, and a Gradio demo deployed on Hugging Face Spaces to support analysis and deployment.",
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
      "Designed and maintained the company's WordPress website, improving mobile responsiveness and page load performance through SEO and performance optimisation",
      "Automated internal workflows using Monday.com, reducing manual coordination overhead across teams",
      "Collaborated with stakeholders to translate business requirements into website updates and content changes",
    ],
  },
  {
    title: "Sales Co-Worker",
    company: "IKEA",
    period: "May 2025 – Present",
    type: "customer",
    description: [
      "Customer-facing role providing product recommendations and cross-team coordination in a high-volume retail environment",
    ],
  },
  {
    title: "Sales Assistant",
    company: "Zara",
    period: "Dec 2024 – May 2025",
    type: "customer",
    description: [
      "Fast-paced retail experience involving high-volume transactions, customer service, and stock support during peak periods",
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
    period: "Jul 2023 – Nov 2026",
    details: [
      "WAM: 74",
      "Relevant coursework: Data Structures, Algorithms, Database Systems, Web Development, Software Engineering, and AI Fundamentals",
      "Volunteer, Macquarie University Buddy Program — supporting new students in their transition to university life",
    ],
  },
  {
    degree: "Certificate IV in Information Technology (Programming)",
    institution: "TAFE NSW",
    period: "Jul 2022 – Jul 2023",
    details: [
      "Built hands-on foundations in HTML, CSS, JavaScript, PHP, and MySQL through practical web development projects.",
      "Developed responsive websites and worked with database-driven functionality, building a strong foundation for full-stack development.",
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
