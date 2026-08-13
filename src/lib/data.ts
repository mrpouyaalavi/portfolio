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
  sylla: {
    slug: "sylla",
    title: "Sylla — AI-Powered Study Assistant",
    category: "Applied AI Product",
    year: "Jul 2026 – Present",
    description:
      "An AI-powered study assistant with streaming responses, persistent conversation history and reusable study workflows for summaries, explanations, flashcards, quizzes and study planning. Designed to work independently and as an integrated assistant within the wider Syllabus Sync ecosystem.",
    fullDescription:
      "Sylla is an AI-powered study assistant built with Next.js, React, TypeScript, Tailwind CSS, Supabase and the Vercel AI SDK. It provides streaming responses, persistent conversation history and reusable study workflows, including structured tools for summaries, explanations, flashcards, quizzes and study planning. Sylla is designed to operate both independently and as an integrated assistant within the wider Syllabus Sync ecosystem.",
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
      repo: "https://github.com/leoalavi/Sylla",
      demo: "https://sylla.syllabus-sync.app",
      demoLabel: "Live App",
    },
    highlights: [
      "Built an AI-powered study assistant with streaming responses, persistent conversation history and reusable study workflows using Next.js, TypeScript, Supabase and the Vercel AI SDK",
      "Designed and implemented structured workflows for summaries, explanations, flashcards, quizzes and study planning",
      "Designed Sylla to operate both independently and as an integrated assistant within the wider Syllabus Sync ecosystem",
    ],
  },
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
      repo: "https://github.com/leoalavi/syllabus-sync",
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
  "mq-navigation": {
    slug: "mq-navigation",
    title: "MQ Navigation — Flutter Campus Navigation Companion",
    category: "Mobile Development",
    year: "Mar 2026 – Present",
    description:
      "A Flutter campus navigation companion supporting destination discovery, route previews, transport information and access to key university locations, with destination-based deep linking from Syllabus Sync.",
    fullDescription:
      "MQ Navigation is a Flutter campus navigation application supporting destination discovery, route previews, transport information and access to key university locations. It implements destination-based deep linking between Syllabus Sync and the mobile app, enabling direct web-to-mobile navigation. Built with Flutter and Dart, using GoRouter for navigation and deep linking, with a mobile-first, accessibility-focused interface and automated Flutter testing via GitHub Actions CI. It forms the mobile layer of the Syllabus Sync ecosystem, which was selected for the Macquarie University Incubator.",
    tags: [
      "Flutter",
      "Dart",
      "GoRouter",
      "Deep Linking",
      "GitHub Actions",
      "Flutter Testing",
    ],
    links: {
      repo: "https://github.com/leoalavi/MQ_Navigation",
    },
    highlights: [
      "Built a Flutter campus navigation application supporting destination discovery, route previews, transport information and access to key university locations",
      "Implemented destination-based deep linking between Syllabus Sync and the mobile app, enabling direct web-to-mobile navigation",
      "Improved app reliability and usability through mobile-first interface design, accessibility-focused flows and automated Flutter testing",
    ],
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
      repo: "https://github.com/leoalavi/CIFAR-10-Image-Classification",
      demo: "https://cifar10.leoalavi.dev",
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
  links?: {
    demo?: string;
    demoLabel?: string;
    repo?: string;
    repoLabel?: string;
  };
}

export const experiences: Experience[] = [
  {
    title: "Software Intern",
    company: "Calumino",
    period: "July 2026 – Present",
    type: "technical",
    description: [
      "Contribute to the development and maintenance of internal software applications, supporting debugging, feature implementation and testing.",
      "Work with Python-based data and machine-learning workflows, including data preparation, model testing and evaluation.",
      "Collaborate with engineers through code reviews, technical discussions and iterative development.",
    ],
  },
  {
    title: "Software Developer & Co-Founder",
    company: "Syllabus Sync",
    period: "December 2025 – Present",
    note: "Selected for the Macquarie University Incubator in May 2026",
    type: "technical",
    links: {
      demo: "https://syllabus-sync.app",
      demoLabel: "syllabus-sync.app",
      repo: "https://github.com/leoalavi/syllabus-sync",
      repoLabel: "GitHub",
    },
    description: [
      "Co-founded and co-developed the Syllabus Sync ecosystem, integrating a full-stack web platform, Flutter mobile navigation and AI-assisted study tools.",
      "Help drive frontend architecture, accessibility, technical planning and automated testing across user-facing features.",
      "Implemented destination-based deep linking between Syllabus Sync and MQ Navigation, creating a connected web-to-mobile campus-navigation flow.",
      "Participate in customer discovery, product validation, mentoring and founder development through the Macquarie University Incubator and EDUCATE accelerator.",
    ],
  },
  {
    title: "Web Developer",
    company: "SBR Group",
    period: "October 2023 – December 2024",
    note: "Promoted from a three-month internship to a paid development role",
    type: "technical",
    description: [
      "Improved the company's WordPress website across mobile responsiveness, usability and page performance, delivering a more consistent experience across desktop and mobile.",
      "Automated recurring internal coordination workflows using Monday.com, reducing manual follow-up and giving team members clearer visibility of task ownership and progress.",
      "Collaborated with stakeholders to translate business requirements into practical website and workflow improvements.",
    ],
  },
  {
    title: "Sales Co-worker",
    company: "IKEA Australia",
    period: "May 2025 – Present",
    type: "customer",
    description: [
      "Resolve customer enquiries and coordinate across sales, logistics and warehouse teams in a high-volume retail environment.",
    ],
  },
  {
    title: "Sales Assistant",
    company: "Zara",
    period: "December 2024 – May 2025",
    type: "customer",
    description: [
      "Delivered customer service and supported product enquiries, transactions and stock operations in a high-volume retail environment.",
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
      "Developed practical experience across software engineering, full-stack development, mobile applications, databases, data structures, algorithms and applied AI.",
    ],
  },
  {
    degree: "Certificate IV in Information Technology (Programming)",
    institution: "TAFE NSW",
    period: "July 2022 – July 2023",
    details: [
      "Completed practical training in HTML, CSS, JavaScript, PHP, MySQL, responsive design and database-driven application development.",
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
    skills: ["TypeScript", "JavaScript", "Python", "Dart", "Java", "SQL"],
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
    ],
  },
  {
    label: "Backend & Data",
    skills: [
      "Node.js",
      "Supabase",
      "PostgreSQL",
      "REST APIs",
      "Authentication",
      "Row-Level Security",
    ],
  },
  {
    label: "AI/ML",
    skills: [
      "PyTorch",
      "Vercel AI SDK",
      "Transfer Learning",
      "Computer Vision",
      "Model Evaluation",
      "Grad-CAM",
      "Gradio",
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
