import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";
import { Navigation } from "@/components/Navigation";
import { ThemeBackground } from '@/components/ThemeBackground';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Yash Tiwary | Full Stack Developer",
  description: "Portfolio showcasing my full-stack development skills and projects",
  icons: {
    icon: '/me.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/me.png" />
      </head>
      <body className="relative">
        <ThemeBackground />
        <ThemeProvider>
          <main className="min-h-screen bg-background text-text relative z-10">
            <Navigation />
            <ThemeSwitcher />
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
