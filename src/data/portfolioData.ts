export interface Project {
  id: string;
  title: string;
  tagline: string;
  category: 'AI & Data Systems' | 'Web & REST APIs' | 'Mobile & Precision Agri' | 'Enterprise Logistics';
  shortDesc: string;
  fullDesc: string;
  architectureDetails: string[];
  keyHighlights: string[];
  metrics: string;
  tags: string[];
  image: string;
  githubUrl: string;
  demoType: 'github-analyzer' | 'movie-finder' | 'agrinova' | 'logistics';
}

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location: string;
  description: string;
  keyContributions: string[];
  impactMetric: string;
  technologies: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  score: string;
  scoreType: string;
  highlights?: string[];
}

export interface CertificationItem {
  title: string;
  issuer: string;
  focus: string;
  verifiedYear: string;
}

export interface SkillCategory {
  category: string;
  icon: string;
  skills: { name: string; level: 'Expert' | 'Advanced' | 'Proficient'; highlight?: boolean }[];
}

export const PORTFOLIO_DATA = {
  profile: {
    name: "Manish SR",
    initials: "M",
    title: "Computer Science Engineer | Frontend Developer & AI App Builder",
    headline: "Architecting high-performance web applications, REST API integrations, and intelligent AI-driven data interfaces.",
    location: "Thuckalay, Tamil Nadu, India",
    email: "manish20sree@gmail.com",
    phone: "+91 7418541749",
    github: "https://github.com/manish20sree",
    linkedin: "https://linkedin.com/in/manish-s-r-a62b942a",
    statusText: "Available for Opportunities & Projects",
    avatarImage: "/assets/aistudio/hp_bda47b32.jpg",
    bio: "Computer Science Engineering undergraduate with hands-on experience in frontend development, REST API integration, and AI-driven data applications. Proficient in Python, JavaScript, HTML, CSS, and React, with a proven track record of architecting responsive web interfaces and data workflows. Adept at cross-functional collaboration and translating technical requirements into scalable solutions.",
    stats: [
      { label: "Data Workflow Gain", value: "+25%", detail: "Internship optimization at Femtosoft" },
      { label: "Flagship Projects", value: "4+", detail: "AI, REST APIs & Precision Farming" },
      { label: "Academic Foundation", value: "Anna Univ", detail: "B.E. Computer Science (7.3 GPA)" },
      { label: "Secondary Honors", value: "100%", detail: "Perfect SSLC examination score" },
    ]
  },

  experiences: [
    {
      company: "Femtosoft Technologies",
      role: "AI & Data Science Intern",
      period: "June 2026 – July 2026",
      location: "Chennai / Hybrid, India",
      description: "Spearheaded advanced data analytics pipelines and designed predictive dashboards for logistics bottlenecks.",
      keyContributions: [
        "Applied AI and data methodologies to analyze complex datasets, accelerating team data workflow efficiency by 25%.",
        "Designed and engineered a comprehensive Supply Chain Logistics Dashboard featuring delivery delay prediction models to visualize critical metrics and mitigate bottlenecks.",
        "Spearheaded data-focused features involving statistical analysis, real-time visualization, and predictive pipelines to enhance operational decision-making.",
        "Collaborated in Agile sprints with senior engineers to transform raw telemetry data into intuitive charting components."
      ],
      impactMetric: "+25% Workflow Efficiency",
      technologies: ["Python", "Data Analysis", "Predictive Modeling", "REST APIs", "Agile Methodologies", "Interactive Dashboards"]
    }
  ] as ExperienceItem[],

  projects: [
    {
      id: "agrinova-360",
      title: "AgriNova 360° Smart Agri App",
      tagline: "AI-Powered Precision Farming & Crop Telemetry",
      category: "Mobile & Precision Agri",
      shortDesc: "Architecting an AI-driven agricultural platform leveraging modular React components to support precision farming with crop recommendation, weather forecasting, pest detection, and soil monitoring.",
      fullDesc: "AgriNova 360° addresses modern agricultural challenges by uniting micro-climate sensors, soil data, and machine learning models. Farmers receive actionable guidance on optimal crop selection, disease risk indicators, and irrigation scheduling in real-time.",
      architectureDetails: [
        "Modular React frontend with state-driven sensor telemetry widgets.",
        "Rule-based and probabilistic inference engine for soil pH and moisture matching.",
        "Integrated multi-day localized meteorological forecasts with pest infestation alerts.",
        "Lightweight offline-first caching for rural connectivity resilience."
      ],
      keyHighlights: [
        "Multi-parameter soil analytics (Moisture, pH, Nitrogen, Phosphorus, Potassium)",
        "Automated pest vulnerability scoring based on relative humidity & temperature",
        "Responsive, high-contrast UI tailored for field readability"
      ],
      metrics: "Modular Architecture · Real-time Sensor Inference",
      tags: ["React", "AI Pipelines", "Precision Agri", "Tailwind CSS", "JavaScript"],
      image: "/src/assets/images/project_agrinova_preview_1793355138866.jpg",
      githubUrl: "https://github.com/manish20sree",
      demoType: "agrinova"
    },
    {
      id: "logistics-dashboard",
      title: "Supply Chain Logistics Dashboard",
      tagline: "Predictive Delay Analytics & Fleet Telemetry",
      category: "Enterprise Logistics",
      shortDesc: "Engineered during internship at Femtosoft Technologies to model transport risk, compute transit bottleneck probabilities, and accelerate team dispatch turnaround.",
      fullDesc: "Designed as an operational command deck for supply chain teams, this system combines route metrics, transit delay machine learning models, and real-time fleet telemetry into actionable dashboards.",
      architectureDetails: [
        "Interactive route waypoint visualizer with delay probability heat indicators.",
        "Automated 24h risk factor triage (Weather, Port Congestion, Transit Bottlenecks).",
        "Statistical delay probability engine delivering 25% faster team analytical throughput.",
        "Real-time vehicle health and dispatch SLA tracker."
      ],
      keyHighlights: [
        "Built predictive delivery delay model based on historical route times",
        "Live transit risk distribution chart with high/medium/low severity tiers",
        "Accelerated internal dispatch decision cycles by 25%"
      ],
      metrics: "+25% Team Efficiency · 89.4% On-time SLA",
      tags: ["Python", "Data Analysis", "Predictive Pipelines", "Interactive Charts", "REST APIs"],
      image: "/src/assets/images/project_logistics_preview_1793355139019.jpg",
      githubUrl: "https://github.com/manish20sree",
      demoType: "logistics"
    },
    {
      id: "github-analyzer",
      title: "GitHub Profile Analyzer",
      tagline: "Dynamic Developer Portfolio & Repository Intelligence",
      category: "Web & REST APIs",
      shortDesc: "Engineered a fully responsive web application processing user profiles to dynamically present repositories, followers, stars, and forks using GitHub REST API and async/await with robust error handling.",
      fullDesc: "A developer tool designed to quickly analyze any GitHub user's public contributions. Features asynchronous batch fetching, language distribution computation, star/fork aggregations, and resilient rate-limit management.",
      architectureDetails: [
        "Direct integration with GitHub REST API v3 using native Fetch and Async/Await.",
        "Defensive error handling for 404 Not Found, rate limits, and network dropouts.",
        "Aggregates language composition across top repositories in client memory.",
        "Keyboard-accessible quick profile lookup and instant bookmarking."
      ],
      keyHighlights: [
        "Real-time repository stars and fork aggregation across user accounts",
        "Language breakdown visualizer highlighting top developer competencies",
        "+30% UI efficiency improvement over standard API response browsing"
      ],
      metrics: "UI Efficiency: +30% · Zero Dead Clicks",
      tags: ["JavaScript", "Fetch API", "Async/Await", "HTML5", "CSS3", "REST APIs"],
      image: "/src/assets/images/project_logistics_preview_1793355139019.jpg", // fallback/custom visual
      githubUrl: "https://github.com/manish20sree",
      demoType: "github-analyzer"
    },
    {
      id: "movie-finder",
      title: "Movie Finder Website",
      tagline: "Low-Latency Cinema Discovery & Live Filter Engine",
      category: "Web & REST APIs",
      shortDesc: "Developed a responsive movie discovery platform integrating external movie databases for real-time content retrieval and interactive filtering. Streamlined search using asynchronous JavaScript algorithms.",
      fullDesc: "A cinematic web application that connects with movie databases to provide instant search with debounced typing, multi-genre filtering, release year sort, and rich modal overviews.",
      architectureDetails: [
        "Debounced search engine preventing duplicate API calls during rapid typing.",
        "Dynamic DOM manipulation with smooth transitions and lazy image loading.",
        "Detailed movie modal drawer with cast, synopsis, runtime, and ratings.",
        "Custom responsive grid layout adjusting seamlessly from mobile to 4K displays."
      ],
      keyHighlights: [
        "Instant debounced search reducing redundant requests by 65%",
        "Interactive multi-genre filtering with dynamic card animation",
        "Curated watch-list storage in browser LocalStorage"
      ],
      metrics: "Sub-150ms Search Latency · 100% Responsive",
      tags: ["JavaScript", "DOM Manipulation", "Async JS", "TMDB API", "CSS3", "Responsive UI"],
      image: "/src/assets/images/project_moviefinder_preview_1793355138368.jpg",
      githubUrl: "https://github.com/manish20sree",
      demoType: "movie-finder"
    }
  ] as Project[],

  skills: [
    {
      category: "Programming Languages",
      icon: "Code2",
      skills: [
        { name: "Python", level: "Advanced", highlight: true },
        { name: "JavaScript (ES6+)", level: "Advanced", highlight: true },
        { name: "TypeScript", level: "Proficient", highlight: true },
        { name: "HTML5", level: "Expert" },
        { name: "CSS3", level: "Advanced" }
      ]
    },
    {
      category: "Web & Frontend",
      icon: "Layout",
      skills: [
        { name: "React", level: "Advanced", highlight: true },
        { name: "Responsive UI", level: "Expert", highlight: true },
        { name: "DOM Manipulation", level: "Advanced" },
        { name: "Tailwind CSS", level: "Advanced", highlight: true },
        { name: "Component Architecture", level: "Advanced" }
      ]
    },
    {
      category: "APIs & Integration",
      icon: "Network",
      skills: [
        { name: "REST APIs", level: "Advanced", highlight: true },
        { name: "Fetch API", level: "Advanced" },
        { name: "Async / Await", level: "Advanced", highlight: true },
        { name: "JSON Serialization", level: "Advanced" },
        { name: "Third-party APIs", level: "Proficient" }
      ]
    },
    {
      category: "Tools & Software",
      icon: "Wrench",
      skills: [
        { name: "Git", level: "Advanced", highlight: true },
        { name: "GitHub", level: "Advanced", highlight: true },
        { name: "VS Code", level: "Expert" },
        { name: "Canva", level: "Proficient" },
        { name: "DaVinci Resolve", level: "Proficient" }
      ]
    },
    {
      category: "Core Methodologies",
      icon: "Brain",
      skills: [
        { name: "Agile Methodologies", level: "Advanced", highlight: true },
        { name: "AI Fundamentals", level: "Advanced", highlight: true },
        { name: "Data Analysis", level: "Advanced", highlight: true },
        { name: "CI/CD & DevOps Basics", level: "Proficient" },
        { name: "Cross-Functional Teamwork", level: "Expert" }
      ]
    }
  ] as SkillCategory[],

  education: [
    {
      degree: "B.E. Computer Science & Engineering",
      institution: "University College of Engineering Nagercoil (Anna University)",
      period: "2023 – 2027",
      score: "7.3 / 10.0",
      scoreType: "CGPA (up to 6th Sem)",
      highlights: [
        "Key coursework: Data Structures, Algorithms, Database Systems, Web Technology, Software Engineering.",
        "Active participant in technical symposiums and university coding initiatives."
      ]
    },
    {
      degree: "Higher Secondary Certificate (HSC)",
      institution: "Sir CP Memorial Government Higher Secondary School",
      period: "2022 – 2023",
      score: "74%",
      scoreType: "Board Exam Percentage",
      highlights: [
        "Major subjects: Physics, Chemistry, Mathematics, Computer Science.",
        "Developed solid mathematical foundations and foundational programming."
      ]
    },
    {
      degree: "Secondary School Leaving Certificate (SSLC)",
      institution: "Amala Matric Higher Secondary School",
      period: "2020 – 2021",
      score: "100%",
      scoreType: "Perfect Score Distinction",
      highlights: [
        "Achieved a 100% academic record.",
        "Recognized for outstanding academic consistency and discipline."
      ]
    }
  ] as EducationItem[],

  certifications: [
    {
      title: "Ignite Bootcamp",
      issuer: "Ignite Technical Foundation",
      focus: "Artificial Intelligence & Ethical AI",
      verifiedYear: "Verified Credential"
    },
    {
      title: "Infosys Springboard",
      issuer: "Infosys Limited",
      focus: "Continuous Integration and Delivery (CI/CD) - DevOps",
      verifiedYear: "Verified Credential"
    },
    {
      title: "Infosys Springboard",
      issuer: "Infosys Limited",
      focus: "Basics of Business Communication & Agile Methodology",
      verifiedYear: "Verified Credential"
    }
  ] as CertificationItem[]
};
