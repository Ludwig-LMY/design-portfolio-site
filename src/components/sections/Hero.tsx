"use client";

import { MagneticButton } from "@/components/ui/MagneticButton";
import { RevealText } from "@/components/ui/RevealText";
import type { PortfolioProfile } from "@/data/portfolio";

type HeroProps = {
  profile: PortfolioProfile;
};

export function Hero({ profile }: HeroProps) {
  return (
    <section
      id="top"
      className="section-shell relative flex min-h-screen items-end pt-28 sm:pt-32 lg:pt-36"
    >
      <div className="section-space grid w-full gap-12 lg:grid-cols-[minmax(0,1.18fr)_minmax(360px,0.82fr)] lg:items-end">
        <div className="relative z-10 space-y-10">
          <RevealText className="space-y-6">
            <p className="editorial-kicker">个人作品集 / Portfolio 2026</p>
            <h1 className="headline-xl max-w-[12ch] text-balance">
              把复杂问题，设计成清晰体验。
            </h1>
            <p className="body-copy max-w-2xl text-lg sm:text-xl">
              {profile.title}
              。我主要关注沉浸式场景中的信息传达、交互路径与视觉表达，长期围绕虚拟现实、数字媒体与界面叙事展开实践。
            </p>
          </RevealText>

          <RevealText>
            <div className="flex flex-wrap items-center gap-4">
              <MagneticButton href="#projects" label="查看作品" />
              <MagneticButton href="#contact" label="联系我" variant="secondary" />
            </div>
          </RevealText>

          <RevealText>
            <div className="grid gap-4 border-t border-line pt-6 sm:grid-cols-2">
              <div>
                <p className="text-xs uppercase tracking-[0.28em] text-warm-gray">
                  求职状态
                </p>
                <p className="mt-3 max-w-sm text-sm leading-7 text-[color:rgba(30,33,27,0.78)]">
                  {profile.status}
                </p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.28em] text-warm-gray">
                  设计立场
                </p>
                <p className="mt-3 max-w-sm text-sm leading-7 text-[color:rgba(30,33,27,0.78)]">
                  {profile.statement}
                </p>
              </div>
            </div>
          </RevealText>
        </div>

        <div className="relative z-10">
          <div className="relative overflow-hidden rounded-[36px] border border-line bg-[linear-gradient(160deg,rgba(255,255,255,0.58),rgba(255,255,255,0.26))] p-5 sm:min-h-[440px] sm:p-7">
            <div className="absolute inset-0 opacity-55">
              <div className="absolute inset-x-[8%] top-[14%] h-[38%] rounded-full bg-[radial-gradient(circle,rgba(81,115,63,0.18),transparent_68%)] blur-2xl" />
              <div className="absolute -right-10 bottom-8 h-56 w-56 rounded-full border border-[rgba(30,33,27,0.12)]" />
              <div className="absolute left-10 top-14 h-32 w-32 rounded-full border border-[rgba(30,33,27,0.12)]" />
              <div className="absolute right-[10%] top-[18%] h-64 w-64 rotate-[18deg] rounded-[48%] border border-[rgba(30,33,27,0.18)]" />
              <div className="absolute inset-0 bg-[linear-gradient(rgba(30,33,27,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(30,33,27,0.05)_1px,transparent_1px)] bg-[size:36px_36px] opacity-[0.24]" />
            </div>

            <div className="relative flex h-full flex-col gap-6">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div className="rounded-full border border-line bg-white/55 px-4 py-2 text-xs tracking-[0.3em] text-warm-gray uppercase">
                  Research-led Interface
                </div>
                <div className="rounded-full border border-line bg-white/42 px-4 py-2 text-xs text-[color:rgba(30,33,27,0.7)]">
                  虚拟现实 / 数字媒体 / 沉浸叙事
                </div>
              </div>

              <div className="grid gap-5 lg:grid-cols-[1.15fr_0.85fr]">
                <div className="rounded-[28px] border border-line bg-white/56 p-5 sm:p-6">
                  <p className="text-xs uppercase tracking-[0.28em] text-warm-gray">
                    Research Positioning
                  </p>
                  <p className="mt-4 text-[clamp(1.9rem,4vw,3.3rem)] font-semibold leading-[1.06] tracking-[-0.06em] text-balance">
                    让空间被理解，
                    <br />
                    让交互被感知。
                  </p>
                </div>

                <div className="space-y-3 rounded-[28px] border border-line bg-[rgba(81,115,63,0.08)] p-5 sm:p-6">
                  <p className="text-xs uppercase tracking-[0.28em] text-warm-gray">
                    Practice Focus
                  </p>
                  <ul className="space-y-3 text-sm leading-7 text-[color:rgba(30,33,27,0.78)]">
                    <li>虚拟现实场景中的导览、认知与交互反馈</li>
                    <li>数字媒体内容的视觉组织与叙事表达</li>
                    <li>沉浸式体验里的界面秩序与空间信息传达</li>
                  </ul>
                </div>
              </div>

              <div className="rounded-[28px] border border-line bg-white/40 px-5 py-4 text-sm leading-7 text-[color:rgba(30,33,27,0.72)] sm:px-6">
                我关注的不只是界面是否美观，更在意观众如何在虚拟场景中理解内容、建立方向感，并愿意继续停留。
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
