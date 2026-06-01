import { SectionTitle } from "@/components/ui/SectionTitle";
import type { Project, ProjectCategory } from "@/data/portfolio";
import { ProjectMedia } from "./ProjectMedia";

type ProjectGroupsProps = {
  categories: ProjectCategory[];
  projects: Project[];
};

function renderMeta(project: Project) {
  return (
    <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.24em] text-warm-gray">
      <span>{project.index}</span>
      <span>{project.year}</span>
      <span>{project.category}</span>
    </div>
  );
}

export function ProjectGroups({ categories, projects }: ProjectGroupsProps) {
  const byCategory = (categoryId: string) =>
    projects.filter((project) => project.categoryId === categoryId);

  return (
    <>
      {categories.map((category, categoryIndex) => {
        const items = byCategory(category.id);
        const isGame = category.id === "award-game";
        const isFilm = category.id === "award-films";
        const isVirtual = category.id === "virtual-exhibitions";

        return (
          <section
            key={category.id}
            id={category.id}
            className="section-shell section-space"
          >
            <SectionTitle
              index={String(categoryIndex + 2).padStart(2, "0")}
              label={category.english}
              title={category.title}
              description={category.note}
            />

            {isGame ? (
              <div className="grid gap-6 xl:grid-cols-[minmax(0,0.68fr)_minmax(300px,0.32fr)]">
                <div className="glass-panel rounded-[36px] p-5 sm:p-7">
                  <div className="overflow-hidden rounded-[28px] border border-line bg-[rgba(81,115,63,0.04)]">
                    <ProjectMedia
                      project={items[0]}
                      mode="detail"
                      className="h-full min-h-[360px] w-full object-cover"
                    />
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="glass-panel rounded-[32px] p-6 sm:p-7">
                    {renderMeta(items[0])}
                    <h3 className="mt-5 text-[clamp(1.6rem,2.3vw,2.3rem)] font-semibold tracking-[-0.05em]">
                      {items[0].name}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-[color:rgba(30,33,27,0.74)]">
                      该项目用于集中呈现其在游戏设计方向上的玩法组织、节奏判断与反馈控制能力。
                    </p>
                  </div>
                  <div className="glass-panel rounded-[32px] p-6">
                    <p className="editorial-kicker">设计要点</p>
                    <ul className="mt-5 space-y-4 text-sm leading-7 text-[color:rgba(30,33,27,0.78)]">
                      {items[0].keyScreens.map((item) => (
                        <li key={item} className="flex gap-3">
                          <span className="mt-2 inline-flex h-1.5 w-1.5 rounded-full bg-olive" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="xl:col-span-2 grid gap-5 md:grid-cols-3">
                  <div className="glass-panel rounded-[30px] p-6 sm:p-7">
                    <p className="text-sm uppercase tracking-[0.26em] text-warm-gray">项目定位</p>
                    <p className="mt-4 text-sm leading-7 text-[color:rgba(30,33,27,0.76)]">
                      以完整实机演示为主体，重点呈现玩法循环、推进逻辑与交互反馈。
                    </p>
                  </div>
                  <div className="glass-panel rounded-[30px] p-6 sm:p-7">
                    <p className="text-sm uppercase tracking-[0.26em] text-warm-gray">承担内容</p>
                    <p className="mt-4 text-sm leading-7 text-[color:rgba(30,33,27,0.76)]">{items[0].role}</p>
                  </div>
                  <div className="glass-panel rounded-[30px] p-6 sm:p-7">
                    <p className="text-sm uppercase tracking-[0.26em] text-warm-gray">设计说明</p>
                    <p className="mt-4 text-sm leading-7 text-[color:rgba(30,33,27,0.76)]">{items[0].challenge}</p>
                  </div>
                </div>
              </div>
            ) : isFilm ? (
              <div className="space-y-6">
                {items.map((project, index) => (
                  <article
                    key={project.id}
                    id={`${project.id}-archive`}
                    className="glass-panel rounded-[34px] p-5 sm:p-7"
                  >
                    <div
                      className={`grid gap-6 lg:grid-cols-[minmax(0,0.52fr)_minmax(320px,0.48fr)] ${
                        index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
                      }`}
                    >
                      <div className="space-y-4">
                        {renderMeta(project)}
                        <h3 className="text-[clamp(1.9rem,3vw,3rem)] font-semibold tracking-[-0.05em]">
                          {project.name}
                        </h3>
                        <p className="body-copy">{project.summary}</p>
                        <p className="text-sm leading-7 text-[color:rgba(30,33,27,0.74)]">
                          {project.intro}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {project.tags.map((tag) => (
                            <span
                              key={tag}
                              className="rounded-full border border-line px-3 py-1 text-xs text-[color:rgba(30,33,27,0.64)]"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="overflow-hidden rounded-[28px] border border-line bg-[rgba(81,115,63,0.05)]">
                        <ProjectMedia
                          project={project}
                          mode="archive"
                          className="min-h-[320px] w-full object-cover"
                        />
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            ) : isVirtual ? (
              <div className="grid gap-6 xl:grid-cols-[320px_minmax(0,1fr)]">
                <div className="glass-panel rounded-[34px] p-6 sm:p-7">
                  <p className="editorial-kicker">目录说明</p>
                  <p className="mt-5 text-[clamp(1.6rem,2.4vw,2.5rem)] font-semibold leading-[1.15] tracking-[-0.05em]">
                    先建立观看秩序，再进入内容理解。
                  </p>
                  <p className="mt-5 body-copy">{category.note}</p>
                </div>
                <div className="space-y-5">
                  {items.map((project) => (
                    <article
                      key={project.id}
                      id={`${project.id}-archive`}
                      className="glass-panel rounded-[32px] p-5 sm:p-6"
                    >
                      <div className="grid gap-6 xl:grid-cols-[220px_minmax(0,0.9fr)_minmax(240px,0.46fr)]">
                        <div className="overflow-hidden rounded-[24px] border border-line bg-[rgba(81,115,63,0.05)]">
                          <ProjectMedia
                            project={project}
                            mode="archive"
                            className="h-44 w-full object-cover xl:h-full"
                          />
                        </div>
                        <div className="space-y-4">
                          {renderMeta(project)}
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
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            ) : (
              <div className="grid gap-5 lg:grid-cols-12">
                {items.map((project, index) => (
                  <article
                    key={project.id}
                    id={`${project.id}-archive`}
                    className={`glass-panel rounded-[32px] p-5 sm:p-6 ${
                      index === 0
                        ? "lg:col-span-7 lg:row-span-2"
                        : index === 1
                          ? "lg:col-span-5"
                          : "lg:col-span-6"
                    }`}
                  >
                    <div className="space-y-5">
                      <div className="overflow-hidden rounded-[26px] border border-line bg-[rgba(81,115,63,0.05)]">
                        <ProjectMedia
                          project={project}
                          mode="archive"
                          className={`w-full object-cover ${
                            index === 0 ? "min-h-[340px]" : "min-h-[240px]"
                          }`}
                        />
                      </div>
                      <div className="space-y-4">
                        {renderMeta(project)}
                        <h3 className="text-[clamp(1.5rem,2.4vw,2.3rem)] font-semibold tracking-[-0.05em]">
                          {project.name}
                        </h3>
                        <p className="body-copy">{project.summary}</p>
                        <p className="text-sm leading-7 text-[color:rgba(30,33,27,0.72)]">
                          {project.challenge}
                        </p>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </section>
        );
      })}
    </>
  );
}
