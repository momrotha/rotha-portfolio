/* eslint-disable @next/next/no-page-custom-font */
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mom Rotha | Full-Stack, Backend, Frontend & Web Developer",
  description:
    "Portfolio of Mom Rotha — Versatile Developer experienced in Full-Stack, Backend APIs, Frontend interfaces, and Web Applications using Java, Spring Boot, Next.js, React, and TypeScript.",
  keywords: [
    "Mom Rotha",
    "Full-Stack Developer",
    "Backend Developer",
    "Frontend Developer",
    "Web Developer",
    "Software Engineer",
    "Java",
    "Spring Boot",
    "Next.js",
    "React",
    "Cambodia",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;0,500;0,700;0,900;1,400;1,700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className="min-h-screen bg-[#f3f4f6] text-zinc-800 antialiased selection:bg-red-600 selection:text-white"
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
