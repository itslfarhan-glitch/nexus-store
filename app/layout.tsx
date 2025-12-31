import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { SearchProvider } from "./context/SearchContext";
import { Header } from "@/components/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nexus Store",
  description: "The Next Social Media",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SearchProvider>
          {/* ✅ HEADER GLOBAL */}
          <Header />

          {/* ✅ PAGE CONTENT */}
          {children}
        </SearchProvider>
      </body>
    </html>
  );
}
