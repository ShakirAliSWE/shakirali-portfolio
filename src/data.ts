export interface Profile {
  name: string;
  tagline: string;
  description: string;
  location: string;
  age: string;
  email: string;
  mobileNo: string;
  whatsApp: string;
  linkedIn: string;
  github: string;
  youtube: string;
  resume: string;
}

export interface Experience {
  position: string;
  companyName: string;
  companyURL: string;
  start: string;
  end: string;
  present: boolean;
  location: string;
  points: string[];
  skills: string[];
}

export interface Project {
  title: string;
  start: string;
  end: string;
  present: boolean;
  link: string;
  description: string[];
  skills: string[];
  metrics: { label: string; value: string }[];
}

export interface Certification {
  name: string;
  source: string;
  link: string;
  issued: string;
  expired: string;
}

export interface Education {
  degree: string;
  university: string;
  universityURL: string;
  start: string;
  end: string;
  present: boolean;
  location: string;
}

export const profile: Profile = {
  name: "Shakir Ali",
  tagline: "Solution Architect / Full Stack Developer",
  description:
    "Dynamic and results-driven Technical Lead & Full Stack Developer with 7+ years of experience in designing, building, and scaling high-performance SaaS solutions, FMCG distribution systems, and e-commerce platforms. Expert in Node.js, React, AWS, and modern microservices architecture, with a proven track record of boosting sales by 60%, raising team SLA compliance to 99.9%, and optimizing application performance by up to 80%.",
  location: "Lahore, Pakistan",
  age: "28 yrs",
  email: "shakiraliswe@gmail.com",
  mobileNo: "+92 311 300 3776",
  whatsApp: "https://bit.ly/3Sgu6Bi",
  linkedIn: "https://bit.ly/46Hk8gH",
  github: "https://bit.ly/45OFgA2",
  youtube: "https://www.youtube.com/@ShakirAliMughal",
  resume: "https://bit.ly/3QePW5z",
};

export const skillsList: string[] = [
  "React.js",
  "Next.js",
  "Node.js",
  "Express.js",
  "TypeScript",
  "AWS (Amazon Web Services)",
  "NoSQL / MongoDB",
  "MySQL / PostgreSQL",
  "React Native",
  "Redux Toolkit / RTK Query",
  "PHP",
  "Microservices",
  "REST APIs",
  "Git / Version Control",
  "CI/CD Pipelines",
  "Firebase / Firebase Auth",
  "Google Maps APIs",
  "Problem-solving & Debugging",
  "Data Architecture & Optimization",
];

export const skillCategories = [
  {
    category: "Languages & Core",
    skills: ["TypeScript", "JavaScript", "HTML/CSS", "PHP", "Python", "Problem-solving"],
  },
  {
    category: "Frontend Development",
    skills: [
      "React.js",
      "Next.js",
      "React Native",
      "Redux Toolkit",
      "RTK Query",
      "Bootstrap",
      "Tailwind CSS",
    ],
  },
  {
    category: "Backend & Systems",
    skills: [
      "Node.js",
      "Express.js",
      "Rest API",
      "Microservices",
      "Data Architecture",
      "Software Debugging",
    ],
  },
  {
    category: "Cloud, Database & DevOps",
    skills: [
      "AWS (Amazon Web Services)",
      "MySQL",
      "MongoDB",
      "NoSQL",
      "DynamoDB",
      "Git",
      "CI/CD Pipeline",
      "Firebase",
      "CleverTap",
      "Google Map APIs",
    ],
  },
];

export const certifications: Certification[] = [
  {
    name: "AWS Certified Developer – Associate",
    source: "Amazon Web Services",
    link: "https://www.credly.com/badges/1a98d9c3-3787-4d74-b27f-eeb75fd5b928/linked_in_profile",
    issued: "2020-07-15",
    expired: "2023-07-15",
  },
  {
    name: "Kubernetes: Microservices",
    source: "LinkedIn",
    link: "https://www.linkedin.com/learning/certificates/f261163fb4e0001e3df1cd848e6ad842e6313db48952bd8d7dbf75cff4ea1a43",
    issued: "2023-08-01",
    expired: "",
  },
  {
    name: "Advanced Node.js: Scaling Applications",
    source: "LinkedIn",
    link: "https://www.linkedin.com/learning/certificates/5027206b412eb105e4d1ec4ec617ca69174e23882ebbf59b13d7a975d21fe1f8",
    issued: "2023-08-01",
    expired: "",
  },
  {
    name: "React Certificate",
    source: "HackerRank",
    link: "https://www.hackerrank.com/certificates/98321a59cada",
    issued: "2023-02-01",
    expired: "",
  },
  {
    name: "Problem Solving Certificate",
    source: "HackerRank",
    link: "https://www.hackerrank.com/certificates/57db22eab20a",
    issued: "2023-02-01",
    expired: "",
  },
  {
    name: "JavaScript Certificate",
    source: "HackerRank",
    link: "https://www.hackerrank.com/certificates/525840041316",
    issued: "2023-02-01",
    expired: "",
  },
  {
    name: "SQL Certificate",
    source: "HackerRank",
    link: "https://www.hackerrank.com/certificates/211b977ece54",
    issued: "2023-02-01",
    expired: "",
  },
];

export const education: Education[] = [
  {
    degree: "B.E in Software Engineering",
    university: "Mehran University of Engineering and Technology",
    universityURL: "https://www.muet.edu.pk/",
    start: "2014-01-01",
    end: "2017-12-30",
    present: false,
    location: "Jamshoro, Pakistan",
  },
];

export const experiences: Experience[] = [
  {
    position: "Technical Lead",
    companyName: "Jugnu Tech Pvt. Ltd.",
    companyURL: "https://www.jugnu.pk",
    start: "2021-01-01",
    end: "",
    present: true,
    location: "Lahore, Pakistan",
    points: [
      "Led a high-velocity Go-to-market engineering team of 6 developers to successfully design, build, and deliver bug-free B2B products while maintaining a 99.9% SLA compliance rate.",
      "Collaborated directly with the CEO, product directors, and client stakeholders to align and achieve core company scaling targets.",
      "Spearheaded critical engineering upgrades for B2B e-commerce offerings, boosting overall sales by 60% and driving a 90% growth milestone.",
      "Designed and implemented strategic customer retention modules, user loyalty systems, custom notification pipelines, and advanced metrics analytics that drove a 40% expansion in basket size and ordering frequencies.",
    ],
    skills: [
      "AWS",
      "Express.js",
      "MongoDB",
      "Redis",
      "Redux.js",
      "Microservices",
      "JWT",
      "Agile",
      "CI/CD",
      "Technical Leadership",
      "Data Architecture",
      "Software Engineering",
    ],
  },
  {
    position: "Assistant Software Engineer",
    companyName: "Salesflo Pvt. Ltd.",
    companyURL: "https://salesflo.com",
    start: "2019-03-01",
    end: "2020-12-30",
    present: false,
    location: "Karachi, Pakistan",
    points: [
      "Engineered robust full-stack features for a major Consumer Engagement System, boosting sales promoter output by 80%.",
      "Designed and integrated complex Route Optimization / Journey Planning algorithms for field sales agents to optimize routes and maximize active store visits.",
      "Hardened system security standards in compliance with strict corporate compliance protocols, performing security audits and implementing fixes to close critical vulnerabilities.",
    ],
    skills: [
      "Node.js",
      "PHP",
      "AWS Lambda",
      "MySQL",
      "NoSQL",
      "REST APIs",
      "Bootstrap",
      "Git",
      "Fortify",
    ],
  },
  {
    position: "Associate Software Engineer",
    companyName: "Salesflo Pvt. Ltd.",
    companyURL: "https://salesflo.com",
    start: "2018-01-01",
    end: "2019-02-28",
    present: false,
    location: "Karachi, Pakistan",
    points: [
      "Developed high-throughput modules for a global SaaS-based Distribution Management System utilized by top-tier FMCG corporations.",
      "Successfully managed database transactions for hundreds of thousands of daily invoices, warehouse inventories, and automated delivery logs.",
      "Built custom automated reporting engines and data visualization boards, cutting down report compilation and loading times by 80%.",
    ],
    skills: [
      "Node.js",
      "PHP",
      "MySQL",
      "AWS Lambda",
      "JavaScript",
      "jQuery",
      "HTML/CSS",
      "Bootstrap",
    ],
  },
];

export const projects: Project[] = [
  {
    title: "B2B E-Commerce Platform",
    start: "2019-07-01",
    end: "",
    present: true,
    link: "https://www.jugnu.pk",
    description: [
      "An SaaS-based retail e-commerce solution engineered to facilitate rapid B2B sales and supply chain management.",
      "Built an intuitive web admin portal and native mobile application to streamline order capture, computerized invoicing, and driver tracking.",
      "Revamped full-stack routing and state managers, securing an 80% loading speed improvement and a 60% reduction in app bundle size.",
    ],
    skills: [
      "AWS",
      "React.js",
      "Node.js",
      "PHP",
      "Express.js",
      "REST APIs",
      "MySQL",
      "MongoDB",
      "Redux.js",
      "Git",
      "AWS Lambda",
      "Tableau",
    ],
    metrics: [
      { label: "Sales Boost", value: "+60%" },
      { label: "Load Time Reduction", value: "-80%" },
      { label: "App Size Savings", value: "-60%" },
    ],
  },
  {
    title: "Consumer Engagement System",
    start: "2018-09-01",
    end: "2019-06-30",
    present: false,
    link: "https://pmpklcommercial.com.pk/",
    description: [
      "A productivity-focused engagement network driving direct field agent workflows and sales promoter pipelines.",
      "Introduced proprietary Journey Planning and GPS mapping tools that improved agent routes and promoter productivity by 80%.",
      "Audited and remediated web codebases to resolve high-risk security flaws, ensuring enterprise compliance with zero security breaches.",
    ],
    skills: [
      "AWS",
      "Node.js",
      "PHP",
      "REST APIs",
      "MySQL",
      "AWS Lambda",
      "Bootstrap",
      "Git",
      "Fortify",
    ],
    metrics: [
      { label: "Promoter Productivity", value: "+80%" },
      { label: "Security Leaks", value: "0" },
      { label: "Route Optimization", value: "Enhanced" },
    ],
  },
  {
    title: "Distribution Management System",
    start: "2018-01-01",
    end: "2018-08-30",
    present: false,
    link: "https://salesflo.com/",
    description: [
      "An enterprise-grade SaaS distribution management platform serving global FMCG brands.",
      "Optimized transaction pipelines to flawlessly process high-volume orders, live inventory updates, and multi-warehouse billing lists daily.",
      "Developed high-speed summary generation routines that minimized reporting times by 80%.",
    ],
    skills: [
      "AWS",
      "Node.js",
      "PHP",
      "REST APIs",
      "MySQL",
      "NoSQL",
      "Git",
      "Bootstrap",
      "AWS Lambda",
    ],
    metrics: [
      { label: "Report Load Time", value: "-80%" },
      { label: "System Uptime", value: "99.9%" },
      { label: "Daily Transactions", value: "100k+" },
    ],
  },
];
