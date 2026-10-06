import type { Metadata } from "next";
import { Sora, Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const sora = Sora({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-sora",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "tnpLab — Training & Placement Lab",
  description:
    "Industry-mentored training tracks with a 100% placement guarantee. Build job-ready skills and get hired with tnpLab.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${sora.variable} ${inter.variable}`}>
      <body className="font-body text-theme-strong antialiased">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
