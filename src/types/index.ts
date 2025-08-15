export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
}

export interface Skill {
  name: string;
  icon: string;
  category: string;
}

export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
}

export interface ContactForm {
  name: string;
  email: string;
  message: string;
}