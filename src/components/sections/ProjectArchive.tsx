import { SectionTitle } from "@/components/ui/SectionTitle";
import { RevealText } from "@/components/ui/RevealText";
import type { Project } from "@/data/portfolio";
import { ProjectMedia } from "./ProjectMedia";

type ProjectArchiveProps = {
  projects: Project[];
};

export function ProjectArchive({ projects }: ProjectArchiveProps) {
  return (
    <section className="section-shell section-space">
      <SectionTitle
        index="03"
        label="Project Archive"
        title="项目说明区"
        description="把其余作品按更紧凑但可读的方式展开，便于快速浏览每个项目的方向、角色与核心思考。"
      />

      <div className="space-y-5">
        {projects.map((project, index) => (
          <RevealText
            key={project.id}
            delay={index * 0.03}
            className="glass-panel rounded-[30px] p-5 sm:p-6"
          >
            <div id={`${project.id}-archive`} className="scroll-mt-28" />
            <div className="grid gap-6 xl:grid-cols-[180px_minmax(0,0.95fr)_minmax(260px,0.55fr)]">
              <div className="overflow-hidden rounded-[24px] border border-line bg-[rgba(81,115,63,0.05)]">
                <ProjectMedia
                  project={project}
                  mode="archive"
                  className="h-40 w-full object-cover xl:h-full"
                />
              </div>

              <div className="space-y-4">
                <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.24em] text-warm-gray">
                  <span>{project.index}</span>
                  <span>{project.year}</span>
                  <span>{project.category}</span>
                </div>
                <h3 className="text-[clamp(1.6rem,2.4vw,2.35rem)] font-semibold tracking-[-0.05em]">
                  {project.name}
                </h3>
                <p className="body-copy">{project.summary}</p>
                <p className="text-sm leading-7 text-[color:rgba(30,33,27,0.72)]">
                  {project.intro}
                </p>
              </div>

              <div className="space-y-5">
                <div>
                  <p className="text-xs uppercase tracking-[0.24em] text-warm-gray">
                    承担角色
                  </p>
                  <p className="mt-2 text-sm leading-7 text-[color:rgba(30,33,27,0.76)]">
                    {project.role}
                  </p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.24em] text-warm-gray">
                    关键问题
                  </p>
                  <p className="mt-2 text-sm leading-7 text-[color:rgba(30,33,27,0.76)]">
                    {project.challenge}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-line px-3 py-1 text-xs text-[color:rgba(30,33,27,0.62)]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </RevealText>
        ))}
      </div>
    </section>
  );
}
