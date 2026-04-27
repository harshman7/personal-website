import { SiteHeader } from "@/components/SiteHeader";
import { ScrollProgress } from "@/components/ScrollProgress";
import { Hero } from "@/components/Hero";
import { AboutSection } from "@/components/AboutSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { SkillsSection } from "@/components/SkillsSection";
import { CertificationsSection } from "@/components/CertificationsSection";
import { ContactSection } from "@/components/ContactSection";
import {
  profile,
  education,
  workExperience,
  projects,
  certifications,
  getSkillsByCategory,
} from "@/lib/site-data";

export default function Home() {
  const skillsByCategory = getSkillsByCategory();
  return (
    <>
      <ScrollProgress />
      <SiteHeader siteTitle={profile.fullName} />
      <main>
        <Hero profile={profile} />
        <AboutSection profile={profile} education={education} />
        <ExperienceSection items={workExperience} />
        <ProjectsSection items={projects} />
        <SkillsSection byCategory={skillsByCategory} />
        <CertificationsSection items={certifications} />
        <ContactSection profile={profile} />
      </main>
      <footer className="border-t border-white/5 bg-[#0a0a0a] py-16 text-center text-sm text-gray-500 md:py-24">
        <p>© {new Date().getFullYear()} {profile.fullName}. All rights reserved.</p>
      </footer>
    </>
  );
}
