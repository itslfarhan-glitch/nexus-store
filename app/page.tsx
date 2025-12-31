"use client"

import { useMemo, useState } from "react"
import { Header } from "@/components/Header"
import { ProductCard } from "@/components/ProductCard"
import { Button } from "@/components/ui/button"

type Product = {
  title: string
  description: string
  price: number | null
  category: string
  sold?: number
}

const PRODUCTS: Product[] = [
  // Instagram
  { title: "Follower (Update)", description: "Mix, Harga /100 Folls", price: 5000, category: "Instagram", sold: 1 },
  { title: "Follower Indonesia", description: "Real INDO bergaransi, Harga /100 Folls", price: 7000, category: "Instagram", sold: 4 },
  { title: "Like Postingan Garansi", description: "Harga /1K", price: 7000, category: "Instagram", sold: 1 },
  { title: "Like Postingan INDO", description: "Real INDO Harga /100", price: 6000, category: "Instagram", sold: 1 },
  { title: "Save Postingan", description: "Harga /1k", price: 9000, category: "Instagram", sold: 1 },
  { title: "Viewer Video", description: "Harga /10K", price: 10000, category: "Instagram", sold: 1 },

  // TikTok
  { title: "Like Komentar", description: "Harga /1K", price: 6000, category: "TikTok", sold: 1 },
  { title: "View / Like / Follower INDO", description: "Real INDO,Harga /100", price: 17000, category: "TikTok", sold: 1 },
  { title: "Follower Low Quality", description: "Harga /200", price: 5000, category: "TikTok", sold: 1 },
  { title: "Follower Mix", description: "Harga /200", price: 6000, category: "TikTok", sold: 3 },
  { title: "Like + View Postingan", description: "Harga /1K", price: 6500, category: "TikTok", sold: 1 },
  { title: "Like Postingan", description: "Harga /1K", price: 5000, category: "TikTok", sold: 1 },
  { title: "Share Postingan / Video", description: "Harga /1K", price: 5500, category: "TikTok", sold: 1 },
  { title: "Video View", description: "Harga /10K", price: 10000, category: "TikTok", sold: 1 },

  // Facebook
  { title: "Follower", description: "Harga /250", price: 4000, category: "Facebook", sold: 3 },
  { title: "Like Halaman (Page)", description: "Harga /100", price: 6000, category: "Facebook", sold: 1 },
  { title: "Like Postingan", description: "Harga /1K", price: 9000, category: "Facebook", sold: 1 },
  { title: "View Reels", description: "Harga /10K", price: 11000, category: "Facebook", sold: 1 },
  { title: "View Reels / Video", description: "Harga /1K", price: 6000, category: "Facebook", sold: 1 },
  { title: "View Video", description: "Harga /1K", price: 6500, category: "Facebook", sold: 1 },

  // Discord
  { title: "Discord Nitro 3 Bulan", description: "Include claim (S&K)", price: 60000, category: "Discord", sold: 1 },
  { title: "Discord Boost Server x2", description: "Boost server 1 bulan", price: 30000, category: "Discord", sold: 1 },

  // Shopee
  { title: "Shopee Follower", description: "Harga /1K", price: 30000, category: "Shopee", sold: 1 },

  // Robux
  { title: "Robux Via Gift", description: "1K Robux via gift, delay 5 hari", price: 125000, category: "Roblox", sold: 5 },
  { title: "Robux Via Login", description: "1K Robux vilog, price: 150000", category: "Roblox", sold: 1 },
  { title: "Robux Giftcard", description: "1K Robux giftcard", price: 180000, category: "Roblox", sold: 1 },
  
  // Custom
  { title: "Custom Order", description: "By request customer", price: null, category: "Custom", sold: 1 },
]

export default function Home() {
  const [platform, setPlatform] = useState("All")
  const [sort, setSort] = useState("popular")

  const filteredProducts = useMemo(() => {
    let data = [...PRODUCTS]

    if (platform !== "All") {
      data = data.filter((p) => p.category === platform)
    }

    if (sort === "price-low") {
      data.sort((a, b) => (a.price ?? 0) - (b.price ?? 0))
    }

    if (sort === "price-high") {
      data.sort((a, b) => (b.price ?? 0) - (a.price ?? 0))
    }

    if (sort === "popular") {
      data.sort((a, b) => (b.sold ?? 0) - (a.sold ?? 0))
    }

    return data
  }, [platform, sort])

  return (
    <>
      <Header />

      <main className="mx-auto max-w-7xl px-4 py-10">
        {/* HERO */}
        <section className="mb-10 text-center">
          <h1 className="text-3xl font-bold">Nexus Marketplace</h1>
          <p className="mt-2 text-gray-600">
            Layanan digital otomatis, cepat, dan aman.
          </p>
        </section>

        {/* FILTER */}
        <section className="mb-10 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          {/* PLATFORM FILTER */}
          <div className="flex flex-wrap gap-2">
            {["All", "Instagram", "TikTok", "Facebook", "Discord", "Shopee", "Roblox", "Custom"].map((item) => (
              <Button
                key={item}
                variant={platform === item ? "default" : "outline"}
                onClick={() => setPlatform(item)}
              >
                {item}
              </Button>
            ))}
          </div>

          {/* SORT */}
          <div className="flex items-center gap-3">
            {/* MOBILE */}
            <div className="md:hidden w-full">
              <div className="relative">
                <select
                  value={sort}
                  onChange={(e) => setSort(e.target.value)}
                  className="w-full appearance-none rounded-xl border bg-white px-4 py-3 pr-10 text-sm font-medium shadow-sm focus:outline-none focus:ring-2 focus:ring-black"
                >
                  <option value="popular">🔥 Terlaris</option>
                  <option value="price-low">💸 Harga Terendah</option>
                  <option value="price-high">💎 Harga Tertinggi</option>
                </select>
                <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
                  ▼
                </span>
              </div>
            </div>

            {/* DESKTOP */}
            <div className="hidden md:flex items-center gap-2 rounded-xl border bg-white p-1 shadow-sm">
              <button
                onClick={() => setSort("popular")}
                className={`rounded-lg px-4 py-2 text-sm font-medium transition-all
                  ${sort === "popular"
                    ? "bg-black text-white shadow"
                    : "text-gray-600 hover:bg-gray-100"
                  }`}
              >
                🔥 Terlaris
              </button>

              <button
                onClick={() => setSort("price-low")}
                className={`rounded-lg px-4 py-2 text-sm font-medium transition-all
                  ${sort === "price-low"
                    ? "bg-black text-white shadow"
                    : "text-gray-600 hover:bg-gray-100"
                  }`}
              >
                💸 Harga Terendah
              </button>

              <button
                onClick={() => setSort("price-high")}
                className={`rounded-lg px-4 py-2 text-sm font-medium transition-all
                  ${sort === "price-high"
                    ? "bg-black text-white shadow"
                    : "text-gray-600 hover:bg-gray-100"
                  }`}
              >
                💎 Harga Tertinggi
              </button>
            </div>
          </div>
        </section>

        {/* PRODUCT GRID */}
        <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProducts.map((product, i) => (
            <ProductCard
              key={i}
              title={product.title}
              description={product.description}
              price={
                product.price
                  ? `Rp ${product.price.toLocaleString("id-ID")}`
                  : "Hubungi Admin"
              }
              category={product.category}
            />
          ))}
        </section>
      </main>
    </>
  )
}
