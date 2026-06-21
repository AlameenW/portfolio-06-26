export interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  repo: string;
  featured: boolean;
}

export const projectsData: Project[] = [
  {
    id: 7,
    title: "Serene",
    description:
      "A mental health companion web app built for SLU's first hackathon, where it won the Healthcare track.",
    tags: ["React", "Vite", "Gemini API"],
    repo: "https://github.com/AlameenW/Serene",
    featured: true,
  },
  {
    id: 5,
    title: "Ewa",
    description:
      "A modern, responsive website for EWA, a natural haircare brand focused on thoughtfully crafted products.",
    tags: ["React", "TypeScript", "Tailwind"],
    repo: "https://github.com/AlameenW/Ewa",
    featured: true,
  },
  {
    id: 6,
    title: "SceneIt",
    description:
      "SceneIt is a full-stack web application designed for film enthusiasts to log, rate, and discover movies.",
    tags: ["React", "Tailwind", "Node.js", "Express", "Render", "PostgreSQL"],
    repo: "https://github.com/AlameenW/SceneIt",
    featured: true,
  },
  {
    id: 3,
    title: "Portfolio Website",
    description:
      "The very portfolio you're looking at, designed to be modern and responsive.",
    tags: ["React", "TypeScript", "Tailwind"],
    repo: "https://github.com/AlameenW/portfolio-06-26",
    featured: false,
  },
  {
    id: 4,
    title: "WeatherApp",
    description:
      "A responsive weather application with location-based forecasts.",
    tags: ["HTML", "CSS", "Vanilla JS"],
    repo: "https://github.com/AlameenW/Weather-app",
    featured: false,
  },
  {
    id: 1,
    title: "Shapeshift",
    description:
      "A web-based fitness tracking application that helps users monitor their workouts and daily calorie intake.",
    tags: ["React", ".NET", "JavaScript", "Mantine UI"],
    repo: "https://github.com/CMPS285-Groups/CMPS2850-S24-S01-G5",
    featured: false,
  },
  {
    id: 2,
    title: "HomePal",
    description:
      "AI-Powered Security & Care Dashboard that combines camera streaming, AI monitoring, and personal wellness tracking to provide home security and care features.",
    tags: ["React", "Flask", "Tailwind", "JavaScript"],
    repo: "https://github.com/AlameenW/HomePal",
    featured: false,
  },
];

export default projectsData;
