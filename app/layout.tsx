import type { Metadata } from "next";
import { Quicksand } from "next/font/google";
import "./globals.css";
const quicksand = Quicksand({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-quicksand",
  display: "swap",
});

export const metadata: Metadata = {
  title: "career recommendation platform",
  description:
    "Career Recommendation Platform is an AI-powered web application that analyzes users' resumes, LinkedIn, or GitHub profiles to recommend personalized career paths, skill-building courses, and job opportunities. Designed for students and professionals, it uses machine learning to bridge the gap between current skills and industry demands.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${quicksand.className}`}>{children}</body>
    </html>
  );
}
