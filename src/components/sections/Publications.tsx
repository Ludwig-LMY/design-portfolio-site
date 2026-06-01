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
        title="这里记录的不只是结果，也包括形成判断的方法。"
        description="写作与思考部分用于补充作品之外的方法线索，帮助读者理解其如何分析问题、定义秩序并建立审美判断。"
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
