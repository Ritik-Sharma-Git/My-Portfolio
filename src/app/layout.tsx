import type { Metadata } from "next";
import { Inter, Space_Mono } from "next/font/google";
import "./globals.css";
import { AnimatedBackground } from "@/components/AnimatedBackground";
import { ScrollProgress } from "@/components/ScrollProgress";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceMono = Space_Mono({
  weight: ["400", "700"],
  variable: "--font-space-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ritik Sharma | Full Stack Developer",
  description: "Modern developer portfolio of Ritik Sharma, MERN Stack Developer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceMono.variable} dark antialiased`}>
      <body className="font-sans bg-background text-foreground min-h-screen selection:bg-primary/30 selection:text-primary">
        <ScrollProgress />
        <AnimatedBackground />
        <main className="relative flex flex-col items-center overflow-hidden">
          {children}
        </main>
      </body>
    </html>
  );
}
