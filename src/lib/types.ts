export type SkillCategory =
  | "frontend"
  | "backend"
  | "database"
  | "cloud"
  | "tools"
  | "other";

export interface Profile {
  fullName: string;
  tagline: string;
  location: string;
  phone: string;
  email: string;
  bio: string;
  profileImageSrc?: string;
  /** Public portfolio or personal site (shown in social bar when set) */
  websiteUrl?: string;
  linkedinUrl: string;
  instagramUrl: string;
  githubUrl: string;
  twitterUrl: string;
}

export interface Education {
  institution: string;
  location: string;
  degree: string;
  major: string;
  graduationDate: string;
  gpa?: number;
  description: string;
  order: number;
}

export interface Skill {
  name: string;
  category: SkillCategory;
  proficiency: number;
  order: number;
}

export interface WorkExperience {
  company: string;
  location: string;
  position: string;
  startDate: string;
  endDate: string;
  isCurrent: boolean;
  description: string;
  achievements: string[];
  order: number;
}

export interface Project {
  title: string;
  description: string;
  techStack: string[];
  features: string[];
  projectDate: string;
  githubUrl: string;
  liveUrl: string;
  imageSrc?: string;
  order: number;
}

export interface Certification {
  name: string;
  issuer: string;
  issueDate: string;
  expiryDate: string;
  credentialId: string;
  credentialUrl: string;
  order: number;
}

export const SKILL_CATEGORY_LABELS: Record<SkillCategory, string> = {
  frontend: "Frontend",
  backend: "Backend",
  database: "Database",
  cloud: "Cloud",
  tools: "Tools",
  other: "Other",
};
