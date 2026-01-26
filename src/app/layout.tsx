import type { Metadata } from "next";
import "./globals.css";
import { CRTEffect } from "@/components/effects/CRTEffect";
import { MouseTrail } from "@/components/effects/MouseTrail";

export const metadata: Metadata = {
  title: "★ QuirkyBytes ★ Digital Studio ★",
  description:
    "We build websites, apps, and games. Quality work. No shortcuts. A revolutionary digital studio.",
  keywords: ["web development", "games", "apps", "digital studio", "quirkybytes"],
  authors: [{ name: "QuirkyBytes" }],
  openGraph: {
    title: "QuirkyBytes Digital Studio",
    description: "We build websites, apps, and games that stand out.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <CRTEffect />
        <MouseTrail />
        {children}
      </body>
    </html>
  );
}
