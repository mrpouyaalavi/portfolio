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
    year: "2025–Present",
    description:
      "A full-stack platform helping Macquarie University students manage academic planning, deadlines, and campus navigation — built with Next.js 16, React 19, Supabase, and TypeScript.",
    fullDescription:
      "Syllabus Sync is a full-stack productivity platform designed to help Macquarie University students manage academic planning, deadlines, and campus navigation, with potential for broader university use. It features secure authentication with TOTP-based MFA, row-level security, rate limiting, and comprehensive test coverage.",
    tags: [
      "Next.js 16",
      "React 19",
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
      "Built academic planning tools, campus navigation, and multilingual support with RTL layout",
      "Implemented secure authentication with TOTP-based MFA and row-level security",
      "Added accessibility and internationalisation aligned with WCAG principles",
      "Deployed via GitHub Actions and Vercel with full CI/CD pipelines",
      "Responsive mobile-first design serving potential university-wide adoption",
    ],
  },
  "cifar-10-image-classification": {
    slug: "cifar-10-image-classification",
    title: "CIFAR-10 Image Classification",
    category: "AI/ML",
    year: "2025",
    description:
      "A deep learning comparative study benchmarking custom CNN architectures against transfer learning with pretrained models on the CIFAR-10 image classification task.",
    fullDescription:
      "An end-to-end machine learning pipeline comparing custom CNN architectures trained from scratch against transfer learning with pretrained models (MobileNetV2, ResNet-18, EfficientNet-B0, ViT) on the CIFAR-10 benchmark. Includes advanced data augmentation, Grad-CAM interpretability, INT8 quantization for deployment, and an interactive Streamlit demo.",
    tags: [
      "Python",
      "PyTorch",
      "Deep Learning",
      "Computer Vision",
      "Streamlit",
      "scikit-learn",
    ],
    links: {
      repo: "https://github.com/mrpouyaalavi/CIFAR-10-Image-Classification",
    },
    highlights: [
      "Compared 5 architectures: Custom CNN, MobileNetV2, ResNet-18, EfficientNet-B0, and Vision Transformer (ViT)",
      "MobileNetV2 achieved 85.53% accuracy with just 0.5% of the Custom CNN's trainable parameters",
      "Implemented advanced augmentation techniques including CutOut, MixUp, and CutMix",
      "Built Grad-CAM interpretability visualizations to explain model predictions",
      "Created an interactive Streamlit demo with side-by-side model comparison",
      "Applied INT8 dynamic quantization for efficient deployment",
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
    title: "IT Support",
    company: "SBR Group",
    period: "Oct 2023 – Dec 2024",
    type: "technical",
    description: [
      "Designed and maintained a WordPress business website, improving mobile responsiveness and achieving faster page load times through performance and SEO optimisation",
      "Supported internal systems and workflow automation using Monday.com, improving team coordination and reducing manual overhead",
      "Diagnosed and resolved recurring technical issues across the website and internal systems to minimise disruption",
      "Collaborated with stakeholders to gather requirements and ensure digital presence aligned with business needs",
    ],
  },
  {
    title: "Sales Co-Worker",
    company: "IKEA",
    period: "May 2025 – Present",
    type: "customer",
    description: [
      "Provide personalised product recommendations by understanding customer needs and room requirements",
      "Collaborate with sales, logistics, and warehouse teams to resolve customer queries",
      "Maintain product displays and support stock availability during busy trading periods",
    ],
  },
  {
    title: "Sales Assistant",
    company: "Zara",
    period: "Dec 2024 – May 2025",
    type: "customer",
    description: [
      "Delivered customer service in a fast-paced retail environment, processing high-volume transactions accurately",
      "Resolved customer concerns with professionalism and empathy",
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
      "Relevant coursework: Data Structures, Algorithms, Database Systems, Web Development, Software Engineering, AI Fundamentals",
      "Active volunteer in the Macquarie University Buddy Program, mentoring new students",
    ],
  },
  {
    degree: "Certificate IV in Information Technology (Programming)",
    institution: "TAFE NSW",
    period: "Jul 2022 – Jul 2023",
    details: [
      "Built hands-on skills in HTML, CSS, PHP, JavaScript, and MySQL",
      "Practical development projects including WordPress sites with SEO and hosting configuration",
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
    skills: ["Java", "Python", "JavaScript", "TypeScript", "SQL", "HTML/CSS"],
  },
  {
    label: "Frameworks",
    skills: ["React", "Next.js", "Tailwind CSS", "Node.js"],
  },
  {
    label: "Backend & DB",
    skills: ["Supabase", "PostgreSQL", "REST APIs", "Node.js"],
  },
  {
    label: "DevOps & Tools",
    skills: ["Git", "GitHub Actions", "Vercel", "Postman", "WordPress"],
  },
  {
    label: "Testing & QA",
    skills: ["Vitest", "Playwright", "Test-Driven Development", "E2E Testing"],
  },
  {
    label: "CS Fundamentals",
    skills: ["Data Structures & Algorithms", "OOP", "Software Design Patterns"],
  },
];

