'use client';

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react"; // ikon dari lucide-react, install jika belum: npm i lucide-react

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="w-full border-b bg-white sticky top-0 z-50">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo / Brand */}
        <div className="text-lg font-bold">
          <Link href="/" className="hover:opacity-80 transition">
            Nexus Store
          </Link>
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

        {/* Mobile Hamburger Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden p-2 rounded-md hover:bg-gray-100"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Dropdown */}
      {isOpen && (
        <div className="md:hidden border-t bg-white">
          <nav className="flex flex-col gap-4 py-4 px-4 text-sm font-medium">
            <Link
              href="/"
              className="hover:text-blue-600 transition py-2"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/cara-order"
              className="hover:text-blue-600 transition py-2"
              onClick={() => setIsOpen(false)}
            >
              Cara Order
            </Link>
            <Link
              href="/tentang-kami"
              className="hover:text-blue-600 transition py-2"
              onClick={() => setIsOpen(false)}
            >
              Tentang Kami
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
