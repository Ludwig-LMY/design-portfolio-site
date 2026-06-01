import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { Hero } from "@/components/sections/Hero";
import { ProjectGroups } from "@/components/sections/ProjectGroups";
import { Publications } from "@/components/sections/Publications";
import { Skills } from "@/components/sections/Skills";
import { Timeline } from "@/components/sections/Timeline";
import { Layout } from "@/components/layout/Layout";
import { portfolioData } from "@/data/portfolio";

export default function Home() {
  return (
    <Layout>
      <Hero
        profile={portfolioData.profile}
        categories={portfolioData.categories}
        projects={portfolioData.projects}
      />
      <ProjectGroups
        categories={portfolioData.categories}
        projects={portfolioData.projects}
      />
      <About content={portfolioData.about} />
      <Skills skillGroups={portfolioData.skillGroups} />
      <Timeline items={portfolioData.timeline} />
      <Publications items={portfolioData.publications} />
      <Contact profile={portfolioData.profile} />
    </Layout>
  );
}
