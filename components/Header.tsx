import Link from "next/link"

export function Header() {
  return (
    <header className="w-full border-b bg-white">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
        <div className="text-lg font-bold">
          NEXUS STORE
        </div>

        <nav className="flex gap-6 text-sm font-medium">
          <Link href="/" className="hover:text-blue-600">
            Home
          </Link>
          <Link href="/cara-order" className="hover:text-blue-600">
            Cara Order
          </Link>
          <Link href="/tentang-kami" className="hover:text-blue-600">
            Tentang Kami
          </Link>
        </nav>
      </div>
    </header>
  )
}
