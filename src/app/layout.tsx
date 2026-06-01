import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://portfolio.example.com"),
  title: "李明岩 | 中文个人作品集",
  description:
    "中文高审美个人作品集网站，展示数字体验、视觉设计、VR 交互与项目叙事能力。",
  openGraph: {
    title: "李明岩 | 中文个人作品集",
    description:
      "在克制而艺术化的界面中，展示设计能力、项目方法与专业可信度。",
    siteName: "李明岩作品集",
    locale: "zh_CN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" className="h-full scroll-smooth antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
