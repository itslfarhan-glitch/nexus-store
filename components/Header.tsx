'use client';

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useSearch } from "@/app/context/SearchContext";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { keyword, setKeyword } = useSearch();

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="w-full border-b bg-white sticky top-0 z-50">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <div className="text-lg font-bold">
          <Link href="/" className="hover:opacity-80 transition">
            Nexus Store
          </Link>
        </div>

        {/* Search Desktop */}
        <div className="hidden md:block w-full max-w-sm mx-8">
          <input
            type="text"
            placeholder="Cari produk..."
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            className="w-full rounded-md border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8 text-sm font-medium">
          <Link href="/" className="hover:text-blue-600 transition">
            Home
          </Link>
          <Link href="/cara-order" className="hover:text-blue-600 transition">
            Cara Order
          </Link>
          <Link href="/tentang-kami" className="hover:text-blue-600 transition">
            Tentang Kami
          </Link>
        </nav>

        {/* Mobile Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden p-2 rounded-md hover:bg-gray-100"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t bg-white">
          {/* Mobile Search */}
          <div className="px-4 pt-4">
            <input
              type="text"
              placeholder="Cari produk..."
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              className="w-full rounded-md border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <nav className="flex flex-col gap-4 py-4 px-4 text-sm font-medium">
            <Link href="/" onClick={() => setIsOpen(false)}>Home</Link>
            <Link href="/cara-order" onClick={() => setIsOpen(false)}>Cara Order</Link>
            <Link href="/tentang-kami" onClick={() => setIsOpen(false)}>Tentang Kami</Link>
          </nav>
        </div>
      )}
    </header>
  );
}
