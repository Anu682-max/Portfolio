import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ProjectProvider } from "@/contexts/ProjectContext";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Anu - Full Stack Developer Student",
  description: "Welcome to my portfolio! I'm Anu, a passionate Full Stack Developer Student dedicated to crafting innovative web solutions. Explore my projects, skills, and journey in the world of web development.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} antialiased`}
      >
        {/* Төслийн контекст провайдер - бүх хуудсанд хүрэх боломжтой / Project context provider - accessible across all pages */}
        <ProjectProvider>
          {children}
        </ProjectProvider>
      </body>
    </html>
  );
}
