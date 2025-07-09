export interface Project {
  id: string;
  title: string;
  category: 'ecommerce' | 'ux-ui' | 'strategy' | 'mobile';
  description: string;
  image: string;
  results: string[];
  technologies: string[];
  link?: string;
}

export interface Service {
  id: string;
  title: string;
  icon: string;
  description: string;
  results: string[];
}

export interface Experience {
  id: string;
  title: string;
  company: string;
  period: string;
  description: string;
  achievements: string[];
  logo?: string;
}

export interface Skill {
  name: string;
  level: number;
  category: 'design' | 'development' | 'strategy' | 'tools';
}