import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { Hero } from "@/components/sections/Hero";
import { ProjectDetail } from "@/components/sections/ProjectDetail";
import { ProjectArchive } from "@/components/sections/ProjectArchive";
import { Projects } from "@/components/sections/Projects";
import { Publications } from "@/components/sections/Publications";
import { Skills } from "@/components/sections/Skills";
import { Timeline } from "@/components/sections/Timeline";
import { Layout } from "@/components/layout/Layout";
import { portfolioData } from "@/data/portfolio";

export default function Home() {
  const featuredProject =
    portfolioData.projects.find((project) => project.id === "battle-tank") ??
    portfolioData.projects[0];
  const archiveProjects = portfolioData.projects.filter(
    (project) => project.id !== featuredProject.id,
  );

  return (
    <Layout>
      <Hero profile={portfolioData.profile} />
      <Projects projects={portfolioData.projects} />
      <ProjectDetail project={featuredProject} />
      <ProjectArchive projects={archiveProjects} />
      <About content={portfolioData.about} />
      <Skills skillGroups={portfolioData.skillGroups} />
      <Timeline items={portfolioData.timeline} />
      <Publications items={portfolioData.publications} />
      <Contact profile={portfolioData.profile} />
    </Layout>
  );
}
