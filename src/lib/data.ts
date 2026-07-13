export interface Project {
  slug: string;
  title: string;
  category:
    | "Full-Stack Web"
    | "Applied AI Product"
    | "Mobile Development"
    | "AI / Machine Learning";
  year: string;
  description: string;
  fullDescription: string;
  tags: string[];
  links: {
    demo?: string;
    demoLabel?: string;
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
"syllabus-sync": {
    slug: "syllabus-sync",
    title: "Syllabus Sync Ecosystem — Student Experience Platform",
    category: "Full-Stack Web",
    year: "Dec 2025 – Present",
    description:
      "A connected student-experience platform co-founded for Macquarie University students, supporting academic planning, deadlines, campus information and student productivity. Built with Next.js, React, TypeScript and Supabase, with accessibility, multilingual support, automated testing and CI/CD.",
    fullDescription:
      "Syllabus Sync is a connected student-experience platform co-founded for Macquarie University students, supporting academic planning, deadlines, campus information and student productivity. It is built with Next.js, React, TypeScript, Tailwind CSS and Supabase (PostgreSQL), with secure authentication, accessibility improvements, multilingual support, automated testing with Vitest, and end-to-end CI/CD via GitHub Actions and Vercel. The wider Syllabus Sync ecosystem also connects to MQ Navigation, a Flutter campus navigation companion that receives destination deep links from the platform, and to Sylla, an AI-assisted study application. Syllabus Sync was selected for the Macquarie University Incubator for further validation, mentoring and development.",
    tags: [
      "Next.js",
      "React",
      "TypeScript",
"Supabase",
      "PostgreSQL",
      "Tailwind CSS",
      "Vitest",
      "Playwright",
    ],
    links: {
      repo: "https://github.com/mrpouyaalavi/syllabus-sync",
      demo: "https://syllabus-sync.app",
      demoLabel: "Live Platform",
    },
    highlights: [
      "Co-founded and co-developed a connected student-experience platform for Macquarie University students, supporting academic planning, deadlines, campus information and student productivity",
      "Implemented secure authentication, accessibility improvements and multilingual support across the platform",
      "Wrote Vitest test coverage and configured GitHub Actions and Vercel CI/CD pipelines for reliable delivery",
      "Connected the platform to the wider ecosystem, including destination deep links into the MQ Navigation Flutter companion",
      "Presented to Macquarie University academics and stakeholders, leading to selection for the Macquarie University Incubator for further validation, mentoring and development",
    ],
  },
  sylla: {
    slug: "sylla",
    title: "Sylla — AI-Powered Study Assistant",
    category: "Applied AI Product",
    year: "Jul 2026 – Present",
    description:
      "An AI-assisted study application with streaming conversations, persistent history, saved content and reusable tools for summaries, explanations, flashcards, quizzes and structured study planning. Designed to work independently and within the Syllabus Sync ecosystem.",
    fullDescription:
      "Sylla is an AI-assisted study application with streaming conversations, persistent history, saved content and reusable tools for summaries, explanations, flashcards, quizzes and structured study planning. It is designed to work independently and within the Syllabus Sync ecosystem. Sylla is built with Next.js, React, TypeScript and Tailwind CSS, using the Vercel AI SDK for streaming AI interactions, Supabase for authentication and persistence, and Vitest for automated testing.",
    tags: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Vercel AI SDK",
      "Supabase",
      "Vercel AI SDK",
      "Vitest",
    ],
    links: {
      repo: "https://github.com/mrpouyaalavi/Sylla",
    },
    highlights: [
repo: "https://github.com/mrpouyaalavi/Sylla",
    },
    highlights: [
      "Built an AI-assisted study application with streaming conversations, persistent history and saved content",
      "Implemented reusable study tools for summaries, explanations, flashcards, quizzes and structured study planning",
      "Integrated the Vercel AI SDK for streaming AI interactions and Supabase for authentication and persistence",
      "Designed the application to work independently and within the Syllabus Sync ecosystem",
    ],
  },
  "mq-navigation": {
    slug: "mq-navigation",
    title: "MQ Navigation — Flutter Campus Navigation Companion",
    category: "Mobile Development",
    year: "Mar 2026 – Present",
    description:
      "A Flutter-based campus navigation companion for Macquarie University students, visitors and Open Day attendees. It supports campus discovery, route previews, transport information and destination deep links from Syllabus Sync.",
    fullDescription:
      "MQ Navigation is a Flutter-based campus navigation companion for Macquarie University students, visitors and Open Day attendees. It supports campus discovery, route previews, transport information and destination deep links from Syllabus Sync — covering buildings, services, transport, food, parking and key campus locations. Built with Flutter and Dart, using GoRouter for navigation and deep linking, with automated Flutter tests and GitHub Actions CI. It forms the mobile layer of the Syllabus Sync ecosystem, which was selected for the Macquarie University Incubator.",
    tags: [
      "Flutter",
      "Dart",
      "GoRouter",
      "Deep Linking",
      "GitHub Actions",
      "Flutter Testing",
    ],
    links: {
      repo: "https://github.com/mrpouyaalavi/MQ_Navigation",
    },
    highlights: [
      "Designed and built a Flutter campus navigation companion for students, visitors and Open Day attendees",
      "Implemented campus discovery, route previews and transport information across buildings, services, food, parking and key campus locations",
      "Added destination deep links from Syllabus Sync using GoRouter, connecting the mobile companion to the wider ecosystem",
      "Set up automated Flutter tests and GitHub Actions CI for reliable delivery",
    ],
    resumeHide: true,
  },
  "cifar-10-image-classification": {
    slug: "cifar-10-image-classification",
    title: "CIFAR-10 Image Classification — PyTorch Benchmark",
    category: "AI / Machine Learning",
    year: "Apr 2026 – Jul 2026",
    description:
"An end-to-end image-classification project comparing a custom CNN, MobileNetV2 and ResNet-18 under controlled training and transfer-learning conditions. ResNet-18 achieved 87.48% test accuracy. The project includes Grad-CAM interpretability, INT8 quantisation, CLI inference and a live Gradio deployment.",
    fullDescription:
      "An end-to-end image-classification project comparing a custom CNN, MobileNetV2 and ResNet-18 under controlled training and transfer-learning conditions. ResNet-18 achieved 87.48% test accuracy using transfer learning, outperforming the custom CNN baseline. The project includes Grad-CAM visual interpretability, INT8 quantisation, command-line inference tools and a live Gradio demo deployed on Hugging Face Spaces.",
    tags: [
      "Python",
      "PyTorch",
      "torchvision",
      "NumPy",
      "Gradio",
      "Hugging Face Spaces",
      "Grad-CAM",
    ],
    links: {
      repo: "https://github.com/mrpouyaalavi/CIFAR-10-Image-Classification",
      demo: "https://cifar10.pouyaalavi.dev",
    },
    highlights: [
"Designed and implemented an end-to-end deep learning pipeline comparing a custom CNN, MobileNetV2 and ResNet-18 under controlled conditions; ResNet-18 achieved 87.48% test accuracy using transfer learning, outperforming the custom CNN baseline",
      "Extended the project with Grad-CAM interpretability, INT8 quantisation, command-line inference tools and a Gradio demo deployed on Hugging Face Spaces",
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
title: "Co-Founder & Software Developer",
    company: "Syllabus Sync",
    period: "May 2026 – Present",
    note: "Selected for the Macquarie University Incubator",
    type: "technical",
    description: [
      "Co-founded and co-developed the Syllabus Sync ecosystem, spanning full-stack web, Flutter mobile navigation and AI-assisted study tools",
      "Contribute to product direction, frontend development, accessibility, technical planning, testing and user-facing feature delivery",
      "Participate in founder education, customer discovery, mentoring and the EDUCATE accelerator through the Macquarie University Incubator",
      "Collaborate with mentors and stakeholders to refine the value proposition, product strategy and technical roadmap",
    ],
  },
  {
    title: "Web Developer",
    company: "SBR Group",
    period: "October 2023 – December 2024",
note: "Promoted from a three-month internship to a paid development role",
    type: "technical",
    description: [
      "Developed and maintained the company's WordPress website, improving mobile responsiveness, usability and page performance",
      "Automated internal coordination workflows using Monday.com, reducing repetitive manual follow-up across teams",
      "Collaborated with stakeholders to translate business requirements into website updates and practical digital solutions",
    ],
  },
  {
    title: "Sales Co-worker",
    company: "IKEA Australia",
    period: "May 2025 – Present",
    type: "customer",
    description: [
"Resolve customer enquiries through clear communication, practical problem-solving and cross-team collaboration",
      "Support customers in identifying suitable products while coordinating with sales, logistics and warehouse teams",
    ],
  },
  {
    title: "Sales Assistant",
    company: "Zara",
    period: "December 2024 – May 2025",
    type: "customer",
    description: [
"Delivered customer service and supported transactions, product enquiries and stock operations in a high-volume retail environment",
      "Developed strong communication, time-management and teamwork skills during peak trading periods",
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
    period: "July 2023 – November 2026",
    details: [
"Majors: Artificial Intelligence · Web and Mobile Application Development",
      "Developed practical experience across software engineering, full-stack development, mobile applications, databases, data structures, algorithms and applied AI through project-based coursework and independent product development"
    ],
  },
  {
    degree: "Certificate IV in Information Technology (Programming)",
    institution: "TAFE NSW",
    period: "July 2022 – July 2023",
    details: [
"Completed practical training in programming and web development, including HTML, CSS, JavaScript, PHP, MySQL, responsive design and database-driven applications"
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
skills: ["TypeScript", "JavaScript", "Python", "Dart", "SQL", "Java", "HTML", "CSS"],
  },
  {
    label: "Frontend & Mobile",
    skills: [
      "React",
      "Next.js",
      "Flutter",
      "Tailwind CSS",
      "Responsive Design",
      "Accessibility",
      "Deep Linking",
      "State Management",
    ],
  },
  {
    label: "Backend & Data",
    skills: [
      "Supabase",
      "PostgreSQL",
      "Node.js",
      "REST APIs",
      "Authentication",
      "Row-Level Security",
      "Database-Driven Applications",
    ],
  },
  {
    label: "Applied AI & ML",
    skills: [
      "PyTorch",
      "Vercel AI SDK",
      "Gradio",
      "Transfer Learning",
      "Model Evaluation",
      "Grad-CAM",
      "Computer Vision",
      "Prompt Engineering",
    ],
  },
  {
    label: "Testing & DevOps",
    skills: [
      "Git",
      "GitHub",
      "GitHub Actions",
      "Vitest",
      "Playwright",
      "Flutter Testing",
      "CI/CD",
      "Vercel",
    ],
  },
];

export interface Leadership {
  title: string;
  organization: string;
  period: string;
  description: string[];
}

export const leadership: Leadership[] = [
  {
    title: "Mentee",
    organization: "Macquarie University Mentoring Program",
    period: "Feb 2026 – May 2026",
    description: [
      "Completed a structured mentoring program focused on career planning, professional communication, goal setting, reflective practice, networking, and career decision-making",
    ],
  },
  {
    title: "Volunteer",
    organization: "Macquarie University Buddy Program",
    period: "Feb 2026 – May 2026",
    description: [
      "Supported new students in their transition to university life through communication, guidance, and peer support",
  },
];
