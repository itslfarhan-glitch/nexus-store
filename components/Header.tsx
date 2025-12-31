"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

const navItems = [
  { label: "Home", href: "/" },
  { label: "Tentang Kami", href: "/tentang-kami" },
  { label: "Cara Order", href: "/cara-order" },
]

export function Header() {
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
        
        {/* Logo */}
        <Link
          href="/"
          className="text-lg font-bold tracking-tight hover:opacity-80 transition"
        >
          Nexus<span className="text-primary">Store</span>
        </Link>

        {/* Navigation */}
        <nav className="flex items-center gap-6 text-sm font-medium">
          {navItems.map((item) => {
            const isActive = pathname === item.href

            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "relative transition-colors hover:text-primary",
                  isActive
                    ? "text-primary"
                    : "text-gray-600"
                )}
              >
                {item.label}

                {/* Active indicator */}
                {isActive && (
                  <span className="absolute -bottom-1 left-0 h-[2px] w-full rounded bg-primary" />
                )}
              </Link>
            )
          })}
        </nav>
      </div>
    </header>
  )
}
