import { SectionTitle } from "@/components/ui/SectionTitle";
import { RevealText } from "@/components/ui/RevealText";
import type { SkillGroup } from "@/data/portfolio";

type SkillsProps = {
  skillGroups: SkillGroup[];
};

export function Skills({ skillGroups }: SkillsProps) {
  return (
    <section id="skills" className="section-shell section-space">
      <SectionTitle
        index="04"
        label="Capability"
        title="方法、能力与工具，是我把审美判断落到结果里的基础设施。"
        description="我喜欢在感性表达和系统方法之间来回切换。前者决定作品是否被记住，后者决定它能否真正被使用、被复用、被团队承接。"
      />

      <div className="space-y-5">
        {skillGroups.map((group, index) => (
          <RevealText
            key={group.title}
            delay={index * 0.06}
            className="glass-panel rounded-[32px] px-5 py-6 sm:px-7"
          >
            <div className="grid gap-5 lg:grid-cols-[220px_minmax(0,1fr)] lg:items-start">
              <h3 className="text-xl font-semibold tracking-[-0.04em] text-foreground">
                {group.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-line bg-white/36 px-4 py-2 text-sm text-[color:rgba(30,33,27,0.74)]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </RevealText>
        ))}
      </div>
    </section>
  );
}
