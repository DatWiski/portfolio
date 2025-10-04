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
    description: "Personal finance management platform with subscription tracking",
    tech: ["Spring Boot", "React", "PostgreSQL"],
    image: "/src/assets/images/budgettracker-dashboard.png",
    codeUrl: "https://github.com/DatWiski/BudgetTracker",
  },
  {
    title: "Portfolio Website",
    description: "Modern portfolio built with Astro and interactive components",
    tech: ["Astro", "TypeScript", "CSS"],
  },
];