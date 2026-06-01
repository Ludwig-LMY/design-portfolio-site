import { MagneticButton } from "@/components/ui/MagneticButton";
import { RevealText } from "@/components/ui/RevealText";
import type { PortfolioProfile } from "@/data/portfolio";
import { withBasePath } from "@/lib/base-path";

type ContactProps = {
  profile: PortfolioProfile;
};

export function Contact({ profile }: ContactProps) {
  return (
    <section
      id="contact"
      className="section-shell pb-12 pt-18 sm:pb-14 sm:pt-20 lg:pb-16 lg:pt-24"
    >
      <div className="glass-panel rounded-[40px] px-6 py-10 sm:px-8 sm:py-12 lg:px-12 lg:py-14">
        <div className="grid gap-10 xl:grid-cols-[minmax(0,0.7fr)_minmax(300px,0.3fr)]">
          <RevealText className="space-y-6">
            <p className="editorial-kicker">Contact / Hiring</p>
            <h2 className="headline-lg max-w-[11ch]">
              让我们聊聊下一个沉浸式体验项目。
            </h2>
            <p className="body-copy max-w-2xl">
              如果你正在寻找一位能够处理虚拟现实、数字媒体与交互表达的设计研究者，我愿意进一步介绍我的项目方法、研究方向与协作方式。
            </p>
            <div className="flex flex-wrap gap-4">
              <MagneticButton href={`mailto:${profile.email}`} label="发送邮件" />
              <MagneticButton
                href={withBasePath(profile.pdfHref)}
                label="下载作品集 PDF"
                variant="secondary"
              />
            </div>
          </RevealText>

          <RevealText
            delay={0.1}
            className="grid gap-5 rounded-[32px] border border-line bg-white/36 p-6"
          >
            <div>
              <p className="text-xs uppercase tracking-[0.26em] text-warm-gray">邮箱</p>
              <a
                href={`mailto:${profile.email}`}
                className="mt-2 block text-lg font-medium tracking-[-0.04em]"
              >
                {profile.email}
              </a>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.26em] text-warm-gray">电话</p>
              <a
                href={`tel:${profile.phone}`}
                className="mt-2 block text-lg font-medium tracking-[-0.04em]"
              >
                {profile.phone}
              </a>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.26em] text-warm-gray">微信</p>
              <p className="mt-2 text-lg font-medium tracking-[-0.04em]">
                {profile.wechat}
              </p>
            </div>
          </RevealText>
        </div>
      </div>
    </section>
  );
}
