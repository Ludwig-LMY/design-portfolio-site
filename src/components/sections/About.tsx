import { SectionTitle } from "@/components/ui/SectionTitle";
import { RevealText } from "@/components/ui/RevealText";
import type { AboutCard } from "@/data/portfolio";

type AboutProps = {
  content: {
    title: string;
    body: string;
    cards: AboutCard[];
  };
};

export function About({ content }: AboutProps) {
  return (
    <section id="about" className="section-shell section-space">
      <SectionTitle
        index="03"
        label="About"
        title={content.title}
        description={content.body}
      />

      <div className="grid gap-6 lg:grid-cols-3">
        {content.cards.map((card, index) => (
          <RevealText
            key={card.title}
            delay={index * 0.08}
            className="glass-panel lift-hover rounded-[30px] p-6 sm:p-7"
          >
            <p className="editorial-kicker">Principle {index + 1}</p>
            <h3 className="mt-6 text-2xl font-semibold tracking-[-0.05em]">
              {card.title}
            </h3>
            <p className="mt-5 body-copy">{card.description}</p>
          </RevealText>
        ))}
      </div>
    </section>
  );
}
