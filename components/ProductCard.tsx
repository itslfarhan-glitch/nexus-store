"use client"

import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Zap, ShieldCheck, MessageCircle } from "lucide-react"

/* ================= CONFIG ================= */
const WHATSAPP_NUMBER = "6281542788003" // GANTI nomor kamu

interface ProductCardProps {
  title: string
  description: string
  price: string
  category: string
}

export function ProductCard({
  title,
  description,
  price,
  category,
}: ProductCardProps) {
  /* ===== AUTO FORMAT PESAN ===== */
  const whatsappText = encodeURIComponent(
`Halo min!
Saya mau order:

Produk   : Follower INDO
Platform : Instagram
Username : 
Jumlah : 200
Link Postingan : 
Pembayaran : QRIS / DANA / GOPAY / BCA / MANDIRI / BRI
`
  )

  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappText}`

  return (
    <div className="group relative">
      {/* Glow Border */}
      <div className="absolute -inset-[1px] rounded-xl bg-gradient-to-r from-blue-500/40 via-purple-500/40 to-cyan-500/40 opacity-0 blur transition group-hover:opacity-100" />

      <Card className="relative z-10 h-full rounded-xl border bg-white transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-xl">
        <CardContent className="space-y-4 p-5">
          <Badge variant="secondary" className="w-fit">
            {category}
          </Badge>

          <h3 className="text-lg font-semibold">
            {title}
          </h3>

          <p className="text-sm text-gray-600">
            {description}
          </p>

          <div className="flex gap-2">
            <Badge className="gap-1 bg-green-100 text-green-700">
              <Zap className="h-3 w-3" />
              Auto
            </Badge>
            <Badge className="gap-1 bg-blue-100 text-blue-700">
              <ShieldCheck className="h-3 w-3" />
              QRIS
            </Badge>
          </div>
        </CardContent>

        <CardFooter className="flex items-center justify-between px-5 pb-5">
          <div>
            <p className="text-xs text-gray-500">Harga mulai</p>
            <p className="text-xl font-bold text-blue-600">
              {price}
            </p>
          </div>

          {/* ORDER BUTTON */}
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="gap-2 rounded-full px-6 transition hover:scale-105">
              <MessageCircle size={16} />
              Order
            </Button>
          </a>
        </CardFooter>
      </Card>
    </div>
  )
}
