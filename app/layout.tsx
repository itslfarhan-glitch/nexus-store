import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "@/app/globals.css"
import { Header } from "@/components/Header"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: {
    default: "Nexus Store",
    template: "%s | Nexus Store",
  },
  description: "Toko digital terpercaya untuk produk premium & layanan online",
  metadataBase: new URL("https://nexus-store.vercel.app"),
  openGraph: {
    title: "Nexus Store",
    description: "Toko digital terpercaya untuk produk premium & layanan online",
    type: "website",
    locale: "id_ID",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id">
      <body
        className={`
          ${geistSans.variable}
          ${geistMono.variable}
          min-h-screen
          bg-gray-50
          text-gray-900
          antialiased
        `}
      >
        {/* Header Global */}
        <Header />

        {/* Content Wrapper */}
        <main className="mx-auto max-w-7xl px-4 py-8">
          {children}
        </main>

        {/* Footer placeholder (nanti) */}
        {/* <Footer /> */}
      </body>
    </html>
  )
}
