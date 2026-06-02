import { Contact } from "@/components/sections/Contact";
import { Hero } from "@/components/sections/Hero";
import { ProjectGroups } from "@/components/sections/ProjectGroups";
import { Skills } from "@/components/sections/Skills";
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
      <Skills skillGroups={portfolioData.skillGroups} />
      <Contact profile={portfolioData.profile} />
    </Layout>
  );
}
