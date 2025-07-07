import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Manan Vyas - Backend Developer & AI/Ml Enthusiast",
  description: "Full Stack Developer specializing in AI-powered, privacy-first solutions. Building tools that developers and students actually want to use.",
  keywords: ["Manan Vyas", "Full Stack Developer", "AI Engineer", "React", "Next.js", "Python", "Machine Learning"],
  authors: [{ name: "Manan Vyas" }],
  creator: "Manan Vyas",
  openGraph: {
    title: "Manan Vyas - Backend Developer & AI/Ml Enthusiast",
    description: "Building AI-powered, privacy-first solutions that solve real problems.",
    url: "https://mananvyas.dev",
    siteName: "Manan Vyas Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Manan Vyas - Backend Developer & AI/Ml Enthusiast",
    description: "Building AI-powered, privacy-first solutions that solve real problems.",
    creator: "@Manan_Vyas01",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="antialiased bg-gray-950 text-white min-h-screen">
        {children}
      </body>
    </html>
  );
}
