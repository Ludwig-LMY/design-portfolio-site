import { SectionTitle } from "@/components/ui/SectionTitle";
import { RevealText } from "@/components/ui/RevealText";
import type { TimelineItem } from "@/data/portfolio";

type TimelineProps = {
  items: TimelineItem[];
};

export function Timeline({ items }: TimelineProps) {
  return (
    <section id="timeline" className="section-shell section-space">
      <SectionTitle
        index="05"
        label="Experience"
        title="我的经历更像一条持续校准的方法线，而不是简单的职位堆叠。"
        description="从视觉表达，到 UI UX，再到更完整的产品与体验思考，我逐步建立起一套既能处理细节，也能把控整体方向的工作方式。"
      />

      <div className="relative pl-5 sm:pl-8">
        <div className="absolute left-0 top-0 h-full w-px bg-line" />
        <div className="space-y-8">
          {items.map((item, index) => (
            <RevealText
              key={item.year}
              delay={index * 0.08}
              className="relative rounded-[32px] border border-line bg-white/34 p-6 sm:p-7"
            >
              <span className="absolute -left-[23px] top-9 inline-flex h-3.5 w-3.5 rounded-full border border-paper bg-olive" />
              <div className="grid gap-6 xl:grid-cols-[220px_minmax(0,1fr)]">
                <div>
                  <p className="editorial-kicker">{item.year}</p>
                </div>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-2xl font-semibold tracking-[-0.05em]">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-7 text-[color:rgba(30,33,27,0.64)]">
                      {item.subtitle}
                    </p>
                  </div>
                  <p className="body-copy">{item.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {item.keywords.map((keyword) => (
                      <span
                        key={keyword}
                        className="rounded-full border border-line px-3 py-1 text-xs text-[color:rgba(30,33,27,0.62)]"
                      >
                        {keyword}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </RevealText>
          ))}
        </div>
      </div>
    </section>
  );
}
