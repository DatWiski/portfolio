export interface Project {
  title: string;
  description: string;
  tech: string[];
  image?: string;
  liveUrl?: string;
  codeUrl?: string;
  caseStudyUrl?: string;
}

export const projects: Project[] = [
  {
    title: "BudgetTracker",
    description: "Full-stack personal finance app with secure Google OAuth2 login, JWT sessions, and analytics dashboard.",
    tech: ["Spring Boot", "React", "PostgreSQL"],
    image: "/src/assets/images/budgettracker-dashboard.png",
    codeUrl: "https://github.com/DatWiski/BudgetTracker",
  },
  {
    title: "Portfolio Website",
    description: "Portfolio built with Astro",
    tech: ["Astro", "TypeScript", "CSS"],
    image: "/src/assets/images/portfolioWebsite.png",
    codeUrl: "https://github.com/DatWiski/portfolio",
  },
];