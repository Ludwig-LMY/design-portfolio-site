"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";
import type { Project } from "@/data/portfolio";
import { ProjectMedia } from "./ProjectMedia";

type ProjectCardProps = {
  project: Project;
  active: boolean;
  onOpen: (projectId: string) => void;
};

export function ProjectCard({ project, active, onOpen }: ProjectCardProps) {
  const reduceMotion = useReducedMotion();
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (reduceMotion) return;
    const rect = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientY - rect.top) / rect.height - 0.5) * -5.5;
    const y = ((event.clientX - rect.left) / rect.width - 0.5) * 5.5;
    setTilt({ x, y });
  };

  return (
    <motion.article
      onMouseMove={handleMove}
      onMouseLeave={() => setTilt({ x: 0, y: 0 })}
      animate={reduceMotion ? {} : { rotateX: tilt.x, rotateY: tilt.y }}
      transition={{ type: "spring", stiffness: 140, damping: 18, mass: 0.5 }}
      className={`lift-hover group grain-mask relative overflow-hidden rounded-[30px] border border-line p-5 sm:p-6 ${
        active ? "bg-olive-soft" : "bg-white/38"
      }`}
      style={{ transformStyle: "preserve-3d" }}
    >
      <div className="relative z-10 flex h-full flex-col">
        <div className="flex items-center justify-between text-xs uppercase tracking-[0.28em] text-warm-gray">
          <span>{project.index}</span>
          <span>{project.year}</span>
        </div>

        <div className="relative mt-6 overflow-hidden rounded-[24px] border border-line bg-[rgba(81,115,63,0.06)]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(81,115,63,0.18),transparent_58%)]" />
          <ProjectMedia
            project={project}
            mode="card"
            previewActive={active}
            className="h-60 w-full object-cover transition-transform duration-700 group-hover:scale-[1.04] sm:h-72"
          />
          {project.videoSlug ? (
            <span className="absolute left-4 top-4 rounded-full border border-line bg-[rgba(245,245,235,0.86)] px-3 py-1 text-[10px] uppercase tracking-[0.24em] text-foreground">
              Video Preview
            </span>
          ) : null}
        </div>

        <div className="mt-6 space-y-4">
          <div className="space-y-3">
            <p className="text-sm text-warm-gray">{project.category}</p>
            <h3 className="headline-md max-w-[12ch] transition-transform duration-300 group-hover:-translate-y-1">
              {project.name}
            </h3>
          </div>
          <p className="body-copy">{project.summary}</p>
        </div>

        <div className="mt-6 grid gap-3 text-sm text-[color:rgba(30,33,27,0.78)] sm:grid-cols-2">
          <div>
            <p className="text-xs uppercase tracking-[0.24em] text-warm-gray">类型</p>
            <p className="mt-2">{project.category}</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.24em] text-warm-gray">角色</p>
            <p className="mt-2">{project.role}</p>
          </div>
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-line px-3 py-1 text-xs text-[color:rgba(30,33,27,0.66)]"
            >
              {tag}
            </span>
          ))}
        </div>

        <button
          type="button"
          onClick={() => onOpen(project.id)}
          className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-foreground"
        >
          查看案例
          <ArrowUpRight size={16} />
        </button>
      </div>
    </motion.article>
  );
}
