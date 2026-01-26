import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "QuirkyBytes | Web Dev Studio",
  description:
    "Custom websites, web apps, and games. We build what templates can't.",
  keywords: ["web development", "games", "apps", "digital studio", "quirkybytes"],
  authors: [{ name: "QuirkyBytes" }],
  openGraph: {
    title: "QuirkyBytes | Web Dev Studio",
    description: "Custom websites, web apps, and games. We build what templates can't.",
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
        {children}
      </body>
    </html>
  );
}
