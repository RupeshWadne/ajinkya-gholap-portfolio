
export interface Project {
  title: string;
  category: string;
  description: string;
  image: string;
  link?: string;
}

export interface ExperienceItem {
  id: number;
  role: string;
  company: string;
  duration: string;
  description: string[];
}

export interface EducationItem {
  id: number;
  degree: string;
  institution: string;
  duration: string;
  details: string[];
}
