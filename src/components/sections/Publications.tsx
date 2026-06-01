import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { RevealText } from "@/components/ui/RevealText";
import type { Publication } from "@/data/portfolio";

type PublicationsProps = {
  items: Publication[];
};

export function Publications({ items }: PublicationsProps) {
  return (
    <section className="section-shell section-space">
      <SectionTitle
        index="06"
        label="Thinking"
        title="我会记录那些帮助我做出更好判断的方法，而不只记录结果。"
        description="如果设计作品体现了表达能力，那么写作与思考更接近我的判断方式。它们帮助招聘方更快理解我如何分析问题、如何定义秩序、如何看待高级感。"
      />

      <div className="grid gap-4">
        {items.map((item, index) => (
          <RevealText
            key={item.title}
            delay={index * 0.07}
            className="group rounded-[30px] border border-line bg-white/34 p-5 transition-colors duration-300 hover:bg-olive-soft sm:p-7"
          >
            <Link href="#" className="grid gap-6 lg:grid-cols-[180px_minmax(0,1fr)_32px] lg:items-center">
              <p className="text-sm tracking-[0.2em] text-warm-gray">{item.date}</p>
              <div>
                <h3 className="text-2xl font-semibold tracking-[-0.05em] transition-transform duration-300 group-hover:-translate-y-0.5">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-[color:rgba(30,33,27,0.68)]">
                  {item.excerpt}
                </p>
              </div>
              <ArrowUpRight className="text-[color:rgba(30,33,27,0.7)] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Link>
          </RevealText>
        ))}
      </div>
    </section>
  );
}
