"use client"

import { useMemo, useState } from "react"
import { ProductCard } from "@/components/ProductCard"

type Product = {
  id: number
  name: string
  price: number | null
  category: string
}

const PRODUCTS: Product[] = [
  {
    id: 1,
    name: "Website Landing Page",
    price: 500000,
    category: "Website",
  },
  {
    id: 2,
    name: "Toko Online (Next.js)",
    price: 1500000,
    category: "Website",
  },
  {
    id: 3,
    name: "Bot WhatsApp",
    price: null,
    category: "Automation",
  },
  {
    id: 4,
    name: "Setup VPS + Deploy",
    price: 300000,
    category: "Server",
  },
]

const CATEGORIES = ["All", "Website", "Automation", "Server"]

export default function HomePage() {
  const [selectedCategory, setSelectedCategory] = useState("All")

  const filteredProducts = useMemo(() => {
    if (selectedCategory === "All") return PRODUCTS
    return PRODUCTS.filter(
      (product) => product.category === selectedCategory
    )
  }, [selectedCategory])

  return (
    <section className="space-y-10">
      {/* Hero */}
      <div className="space-y-3">
        <h1 className="text-3xl font-bold tracking-tight">
          Digital Product & Service
        </h1>
        <p className="max-w-xl text-gray-600">
          Solusi website, automation, dan layanan digital untuk kebutuhan
          bisnis dan personal.
        </p>
      </div>

      {/* Filter */}
      <div className="flex flex-wrap gap-2">
        {CATEGORIES.map((category) => {
          const isActive = selectedCategory === category

          return (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`rounded-full border px-4 py-1.5 text-sm transition
                ${
                  isActive
                    ? "bg-gray-900 text-white"
                    : "bg-white text-gray-700 hover:bg-gray-100"
                }`}
            >
              {category}
            </button>
          )
        })}
      </div>

      {/* Product Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}

        {filteredProducts.length === 0 && (
          <p className="text-sm text-gray-500">
            Produk tidak ditemukan.
          </p>
        )}
      </div>
    </section>
  )
}
