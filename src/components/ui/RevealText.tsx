import { ReactNode } from "react";

type RevealTextProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

export function RevealText({
  children,
  className,
}: RevealTextProps) {
  return <div className={className}>{children}</div>;
}
