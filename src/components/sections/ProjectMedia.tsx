"use client";

import Image from "next/image";
import { Play } from "lucide-react";
import { useState } from "react";
import type { Project } from "@/data/portfolio";
import { withBasePath } from "@/lib/base-path";

type ProjectMediaProps = {
  project: Project;
  className: string;
  mode: "card" | "detail" | "archive";
};

export function ProjectMedia({
  project,
  className,
  mode,
}: ProjectMediaProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const imageSrc = withBasePath(project.image);
  const videoSrc = project.videoSlug
    ? withBasePath(`/media/${project.videoSlug}.mp4`)
    : null;
  const shouldRenderVideo = Boolean(videoSrc) && mode !== "card" && isPlaying;

  if (mode === "card") {
    return (
      <Image
        src={imageSrc}
        alt={project.name}
        width={1200}
        height={900}
        className={className}
      />
    );
  }

  if (project.videoSlug && (mode === "archive" || mode === "detail") && !isPlaying) {
    return (
      <button
        type="button"
        onClick={() => setIsPlaying(true)}
        className={`group relative block overflow-hidden ${className}`}
        aria-label={`播放${project.name}视频`}
      >
        <Image
          src={imageSrc}
          alt={project.name}
          width={1200}
          height={900}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
        />
        <span className="absolute inset-0 bg-[linear-gradient(180deg,rgba(30,33,27,0.08),rgba(30,33,27,0.36))]" />
        <span className="absolute bottom-4 left-4 inline-flex items-center gap-3 rounded-full border border-white/20 bg-[rgba(245,245,235,0.92)] px-4 py-2.5 text-left text-foreground shadow-[0_14px_36px_rgba(30,33,27,0.12)]">
          <span className="text-xs font-medium tracking-[0.08em]">点击播放项目视频</span>
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-olive text-paper">
            <Play size={16} fill="currentColor" />
          </span>
        </span>
      </button>
    );
  }

  if (shouldRenderVideo) {
    return (
      <video
        key={project.videoSlug}
        className={className}
        aria-label={`${project.name}视频预览`}
        autoPlay={false}
        controls={mode === "archive" || mode === "detail"}
        loop={false}
        muted={false}
        playsInline
        poster={imageSrc}
        preload="metadata"
      >
        <source src={videoSrc ?? undefined} />
      </video>
    );
  }

  return (
    <Image
      src={imageSrc}
      alt={project.name}
      width={1200}
      height={900}
      className={className}
    />
  );
}
