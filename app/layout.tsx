import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/ui/Navbar";
import Footer from "@/ui/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Calhoun GA Grappling Club | Brazilian Jiu-Jitsu & Grappling",
  description:
    "Premier submission grappling and Brazilian Jiu-Jitsu training in Calhoun, Georgia. All experience levels welcome. Classes for kids and adults.",
  keywords: [
    "Brazilian Jiu-Jitsu",
    "Grappling",
    "Submission Wrestling",
    "Martial Arts",
    "Calhoun GA",
    "Self Defense",
    "MMA",
    "Mixed Martial Arts",
    "Wrestling",
    "Submission Fighting"
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-dark-bg">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
