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
  /** When true, this entry is hidden from the resume projects section */
  resumeHide?: boolean;
}

export const projects: Record<string, Project> = {
  "syllabus-sync": {
    slug: "syllabus-sync",
    title: "Syllabus Sync – Student Experience Platform",
    category: "Full-Stack",
    year: "Dec 2025 – Present",
    description:
      "A full-stack student experience platform co-developed for Macquarie University students, supporting academic planning, deadlines, events, campus support, and student productivity — with MFA, row-level security, and CI/CD. Accepted into the Macquarie University Incubator.",
    fullDescription:
      "Syllabus Sync is a full-stack student experience platform co-developed for Macquarie University students. It supports academic planning, deadlines, events, campus support, and student productivity in a single app. The stack includes Next.js, React, TypeScript, Tailwind CSS, and Supabase — with secure authentication, TOTP-based MFA, row-level security, rate limiting, accessibility improvements, internationalisation, testing with Vitest, and end-to-end CI/CD via GitHub Actions and Vercel. The project was accepted into the Macquarie University Incubator for further validation, mentoring, and development.",
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
      demo: "https://syllabus-sync.app",
    },
    highlights: [
      "Co-developed a full-stack student experience platform for Macquarie University students, supporting academic planning, deadlines, events, campus support, and student productivity",
      "Implemented secure authentication with TOTP-based MFA, row-level security, rate limiting, accessibility improvements, and internationalisation",
      "Wrote Vitest test coverage and configured GitHub Actions and Vercel CI/CD pipelines for reliable delivery",
      "Presented to Macquarie University academics, stakeholders, and the MQ Incubator, leading to acceptance into the Incubator for further validation, mentoring, and development",
    ],
  },
  "mq-navigation": {
    slug: "mq-navigation",
    title: "MQ Navigation / Open Day App – Campus Wayfinding Prototype",
    category: "Mobile",
    year: "Mar 2026 – Present",
    description:
      "A mobile-first campus navigation prototype for Macquarie University students, visitors, prospective students, and Open Day attendees — helping them find buildings, services, transport, food, parking, and key campus locations.",
    fullDescription:
      "MQ Navigation / Open Day App is a mobile-focused campus wayfinding prototype designed to help Macquarie University students, visitors, prospective students, and Open Day attendees navigate campus more easily. It supports finding buildings, services, transport, food, parking, and key campus locations. Built with Flutter and Dart, it supports the broader Syllabus Sync student experience vision by providing a dedicated mobile-first wayfinding layer for users physically moving around campus. Part of the Syllabus Sync / MQ Navigation project direction accepted into the Macquarie University Incubator.",
    tags: ["Flutter", "Dart", "Mobile Development", "UI/UX Design"],
    links: {
      repo: "https://github.com/mrpouyaalavi/MQ_Navigation",
    },
    highlights: [
      "Designed and built a mobile-first campus wayfinding prototype for students, visitors, and Open Day attendees using Flutter and Dart",
      "Covers buildings, services, transport, food, parking, and key campus locations across the Macquarie University campus",
      "Supports the broader Syllabus Sync student experience vision with a dedicated mobile navigation layer",
      "Part of the Syllabus Sync / MQ Navigation project direction accepted into the Macquarie University Incubator",
    ],
    resumeHide: true,
  },
  "cifar-10-image-classification": {
    slug: "cifar-10-image-classification",
    title: "CIFAR-10 Image Classification",
    category: "AI/ML",
    year: "Apr 2026 – Present",
    description:
      "An applied deep learning project comparing multiple architectures on CIFAR-10 under controlled conditions — ResNet-18 achieved 87.48% test accuracy via transfer learning, with Grad-CAM interpretability and a live Gradio demo.",
    fullDescription:
      "An applied deep learning project that designs and trains multiple architectures on CIFAR-10 under controlled conditions. ResNet-18 achieved 87.48% test accuracy using transfer learning, outperforming the custom CNN baseline. Extended with Grad-CAM visual interpretability, INT8 quantisation, command-line inference tools, and a live Gradio demo deployed on Hugging Face Spaces.",
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
      "Designed and implemented an end-to-end deep learning pipeline to compare multiple architectures on CIFAR-10 under controlled conditions; ResNet-18 achieved 87.48% test accuracy using transfer learning, outperforming the custom CNN baseline",
      "Extended the project with Grad-CAM interpretability, INT8 quantisation, command-line inference tools, and a Gradio demo deployed on Hugging Face Spaces",
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
    title: "Web Developer",
    company: "SBR Group",
    period: "October 2023 - December 2024",
    note: "Started as a 3-month intern and was subsequently retained in a paid role",
    type: "technical",
    description: [
      "Designed and maintained the company's WordPress website, improving mobile responsiveness and page load performance through SEO and performance optimisation",
      "Automated internal workflows using Monday.com, reducing manual coordination overhead across teams",
      "Collaborated with stakeholders to translate business requirements into website updates, content changes, and practical solutions",
    ],
  },
  {
    title: "Sales Co-Worker",
    company: "IKEA",
    period: "May 2025 - Present",
    type: "customer",
    description: [
      "Supported customers in a fast-paced retail environment by communicating clearly, resolving practical issues, and collaborating with team members",
      "Developed strong communication, teamwork, adaptability, and customer-focused problem-solving skills",
    ],
  },
  {
    title: "Sales Assistant",
    company: "Zara",
    period: "December 2024 - May 2025",
    type: "customer",
    description: [
      "Delivered customer service in a fast-paced retail environment, supporting customer enquiries, transactions, stock handling, and teamwork",
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
    ],
  },
  {
    degree: "Certificate IV in Information Technology (Programming)",
    institution: "TAFE NSW",
    period: "July 2022 - July 2023",
    details: [
      "Built hands-on foundations in HTML, CSS, JavaScript, PHP, MySQL, responsive design, and database-driven web development",
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
    skills: ["React", "Next.js", "Tailwind CSS", "Responsive Design", "Accessibility"],
  },
  {
    label: "Backend & Data",
    skills: ["Node.js", "PostgreSQL", "Supabase", "REST APIs", "Authentication", "Data Handling"],
  },
  {
    label: "Testing & DevOps",
    skills: ["Git", "GitHub Actions", "Vercel", "Docker", "Vitest", "Playwright", "CI/CD"],
  },
  {
    label: "AI/ML",
    skills: ["PyTorch", "scikit-learn", "Jupyter", "Gradio", "Model Evaluation"],
  },
  {
    label: "Professional",
    skills: [
      "Product Development",
      "Startup Development",
      "Technical Documentation",
      "Teamwork",
      "Communication",
      "Problem Solving",
      "Stakeholder Collaboration",
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
    title: "Startup Founder",
    organization: "Macquarie University Incubator",
    period: "May 2026 – Present",
    description: [
      "Co-founded Syllabus Sync and MQ Navigation, student-led initiatives accepted into the Macquarie University Incubator. Participating in the EDUCATE accelerator program with access to startup validation support, founder education, mentoring, and the MQ innovation ecosystem.",
    ],
  },
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
    ],
  },
];
