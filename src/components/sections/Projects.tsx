"use client";

import { useState } from "react";
import { SectionTitle } from "@/components/ui/SectionTitle";
import type { Project } from "@/data/portfolio";
import { ProjectCard } from "./ProjectCard";

type ProjectsProps = {
  projects: Project[];
};

export function Projects({ projects }: ProjectsProps) {
  const [activeProject, setActiveProject] = useState(projects[0]?.id);

  const handleOpen = (projectId: string) => {
    setActiveProject(projectId);
    const detail =
      document.getElementById(projectId) ??
      document.getElementById(`${projectId}-archive`);
    detail?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section id="projects" className="section-shell section-space">
      <SectionTitle
        index="01"
        label="Project Overview"
        title="作品总览"
      />

      <div className="grid gap-6 xl:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            active={activeProject === project.id}
            onOpen={handleOpen}
          />
        ))}
      </div>
    </section>
  );
}
