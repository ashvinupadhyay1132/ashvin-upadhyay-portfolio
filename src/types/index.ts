// Type definitions for the portfolio

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoLink: string;
  githubLink: string;
  featured?: boolean;
}

export interface Experience {
  id: number;
  company: string;
  position: string;
  duration: string;
  description: string;
  technologies: string[];
  logoUrl?: string;
}

export interface Skill {
  id: number;
  name: string;
  icon: string;
  category: 'frontend' | 'backend' | 'database' | 'tools';
  proficiency: number; // 0-100
}

export interface Social {
  id: number;
  name: string;
  url: string;
  icon: string;
}