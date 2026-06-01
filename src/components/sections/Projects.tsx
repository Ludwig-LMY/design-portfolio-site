import { SectionTitle } from "@/components/ui/SectionTitle";
import type { Project, ProjectCategory } from "@/data/portfolio";

type ProjectsProps = {
  categories: ProjectCategory[];
  projects: Project[];
};

export function Projects({ categories, projects }: ProjectsProps) {
  return (
    <section id="projects" className="section-shell section-space">
      <SectionTitle
        index="01"
        label="Project Overview"
        title="按类别展开作品，而不是按形式堆叠。"
        description="这一部分先给出总览目录，后面的内容会按你已经整理好的类别分别呈现。每个分类使用不同的叙事方式和版式节奏，避免浏览时产生重复感。"
      />

      <div className="grid gap-5 lg:grid-cols-2">
        {categories.map((category, index) => {
          const count = projects.filter((project) => project.categoryId === category.id).length;
          const isDense = index % 2 === 0;

          return (
            <a
              key={category.id}
              href={`#${category.id}`}
              className={`glass-panel group rounded-[32px] border border-line p-6 transition-colors duration-200 hover:bg-white/70 sm:p-7 ${
                isDense ? "lg:min-h-[260px]" : "lg:min-h-[320px]"
              }`}
            >
              <div className="flex h-full flex-col justify-between gap-8">
                <div className="space-y-4">
                  <div className="flex items-center justify-between gap-4">
                    <p className="editorial-kicker">
                      {String(index + 1).padStart(2, "0")} / {category.english}
                    </p>
                    <span className="rounded-full border border-line px-3 py-1 text-xs text-[color:rgba(30,33,27,0.72)]">
                      {count} 项作品
                    </span>
                  </div>
                  <h3 className="text-[clamp(2rem,3vw,3rem)] font-semibold tracking-[-0.05em] text-balance">
                    {category.title}
                  </h3>
                  <p className="body-copy max-w-[34rem]">{category.description}</p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-line bg-white/44 px-3 py-1 text-xs text-[color:rgba(30,33,27,0.68)]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          );
        })}
      </div>
    </section>
  );
}
