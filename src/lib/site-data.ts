import { profile } from "./profile";
import { education } from "./education";
import { skills } from "./skills";
import { workExperience } from "./experience";
import { projects } from "./projects";
import { certifications } from "./certifications";
import {
  SKILL_CATEGORY_LABELS,
  type Skill,
  type SkillCategory,
} from "./types";

export { profile, education, skills, workExperience, projects, certifications };
export { SKILL_CATEGORY_LABELS };
export type { Skill, SkillCategory };

export function getSkillsByCategory(): Record<SkillCategory, Skill[]> {
  const map = {} as Record<SkillCategory, Skill[]>;
  const categories: SkillCategory[] = [
    "frontend",
    "backend",
    "database",
    "cloud",
    "tools",
    "other",
  ];
  for (const c of categories) {
    map[c] = [];
  }
  for (const s of skills) {
    map[s.category].push(s);
  }
  for (const c of categories) {
    map[c].sort((a, b) => a.name.localeCompare(b.name));
  }
  return map;
}
