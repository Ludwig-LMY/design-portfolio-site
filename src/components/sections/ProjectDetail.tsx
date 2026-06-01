"use client";

import { SectionTitle } from "@/components/ui/SectionTitle";
import { RevealText } from "@/components/ui/RevealText";
import type { Project } from "@/data/portfolio";
import { ProjectMedia } from "./ProjectMedia";

type ProjectDetailProps = {
  project: Project;
};

export function ProjectDetail({ project }: ProjectDetailProps) {
  return (
    <section className="section-shell section-space" id={project.id}>
      <SectionTitle
        index="02"
        label="Case Study"
        title={`案例拆解：${project.name}`}
        description="下面这一部分按真实设计案例文章的方式组织，突出项目背景、问题定义、体验策略、界面结果与方法反思。"
      />

      <div className="mx-auto max-w-[1180px] space-y-8">
        <RevealText className="glass-panel overflow-hidden rounded-[36px] p-5 sm:p-7">
          <div className="grid gap-8 xl:grid-cols-[minmax(0,0.62fr)_minmax(280px,0.38fr)]">
            <div className="space-y-5">
              <p className="editorial-kicker">Project Overview</p>
              <h3 className="headline-lg max-w-[10ch]">{project.name}</h3>
              <p className="body-copy text-pretty">{project.intro}</p>
              <div className="grid gap-4 sm:grid-cols-3">
                <div>
                  <p className="text-xs uppercase tracking-[0.24em] text-warm-gray">
                    类型
                  </p>
                  <p className="mt-2 text-sm leading-7 text-[color:rgba(30,33,27,0.78)]">
                    {project.category}
                  </p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.24em] text-warm-gray">
                    角色
                  </p>
                  <p className="mt-2 text-sm leading-7 text-[color:rgba(30,33,27,0.78)]">
                    {project.role}
                  </p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.24em] text-warm-gray">
                    时间
                  </p>
                  <p className="mt-2 text-sm leading-7 text-[color:rgba(30,33,27,0.78)]">
                    {project.year}
                  </p>
                </div>
              </div>
            </div>

            <div className="overflow-hidden rounded-[28px] border border-line bg-[rgba(81,115,63,0.04)]">
              <ProjectMedia
                project={project}
                mode="detail"
                className="h-full min-h-72 w-full object-cover"
              />
            </div>
          </div>
        </RevealText>

        <RevealText className="grid gap-6 lg:grid-cols-[minmax(0,0.58fr)_minmax(280px,0.42fr)]">
          <div className="glass-panel rounded-[32px] p-6 sm:p-7">
            <p className="editorial-kicker">Design Challenge</p>
            <p className="mt-5 body-copy">{project.challenge}</p>
          </div>
          <div className="glass-panel rounded-[32px] p-6">
            <p className="editorial-kicker">Research Focus</p>
            <ul className="mt-5 space-y-4 text-sm leading-7 text-[color:rgba(30,33,27,0.78)]">
              {project.keyScreens.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 inline-flex h-1.5 w-1.5 rounded-full bg-olive" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </RevealText>

        <div className="grid gap-6">
          {project.detailSections.map((section, index) => (
            <RevealText
              key={section.heading}
              delay={index * 0.04}
              className="glass-panel rounded-[32px] p-6 sm:p-8"
            >
              <div className="grid gap-4 lg:grid-cols-[220px_minmax(0,1fr)]">
                <p className="text-sm uppercase tracking-[0.26em] text-warm-gray">
                  {section.heading}
                </p>
                <p className="body-copy text-pretty">{section.body}</p>
              </div>
            </RevealText>
          ))}
        </div>
      </div>
    </section>
  );
}
