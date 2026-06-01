"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import { SectionTitle } from "@/components/ui/SectionTitle";
import type { Project } from "@/data/portfolio";
import { ProjectCard } from "./ProjectCard";

type ProjectsProps = {
  projects: Project[];
};

export function Projects({ projects }: ProjectsProps) {
  const [activeProject, setActiveProject] = useState(projects[0]?.id);
  const reduceMotion = useReducedMotion();
  const handleOpen = (projectId: string) => {
    setActiveProject(projectId);
    const detail =
      document.getElementById(projectId) ??
      document.getElementById(`${projectId}-archive`);
    detail?.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "start" });
  };

  return (
    <section id="projects" className="section-shell section-space">
      <SectionTitle
        index="01"
        label="Project Overview"
        title="作品总览"
      />

      <motion.div
        initial={false}
        animate={reduceMotion ? {} : { opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        style={reduceMotion ? undefined : { opacity: 1, transform: "translateY(0px)" }}
        className="grid gap-6 xl:grid-cols-2"
      >
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={false}
            animate={reduceMotion ? {} : { opacity: 1, y: 0 }}
            transition={{
              duration: 0.54,
              delay: index * 0.08,
              ease: [0.22, 1, 0.36, 1],
            }}
            style={reduceMotion ? undefined : { opacity: 1, transform: "translateY(0px)" }}
          >
            <ProjectCard
              project={project}
              active={activeProject === project.id}
              onOpen={handleOpen}
            />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
