import Image from "next/image";
import type { Project } from "@/data/portfolio";

type ProjectMediaProps = {
  project: Project;
  className: string;
  mode: "card" | "detail" | "archive";
  previewActive?: boolean;
};

export function ProjectMedia({
  project,
  className,
  mode,
  previewActive = false,
}: ProjectMediaProps) {
  const shouldRenderVideo = Boolean(project.videoSlug) && (mode !== "card" || previewActive);

  if (shouldRenderVideo) {
    return (
      <video
        key={project.videoSlug}
        className={className}
        aria-label={`${project.name}视频预览`}
        autoPlay={mode === "card"}
        controls={mode === "archive" || mode === "detail"}
        loop={mode === "card"}
        muted={mode === "card"}
        playsInline
        poster={project.image}
        preload="metadata"
      >
        <source src={`/media/${project.videoSlug}.mp4`} />
      </video>
    );
  }

  return (
    <Image
      src={project.image}
      alt={project.name}
      width={1200}
      height={900}
      className={className}
    />
  );
}
