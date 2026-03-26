"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { useCart } from "@/context/CartContext"

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const { cart } = useCart()

  useEffect(() => {
    const handleScroll = () => {
      // 🔥 só ativa depois de rolar bem (evita faixa no topo)
      if (window.scrollY > 80) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const totalItems = cart.reduce((acc: number, item: any) => {
    return acc + item.quantity
  }, 0)

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-md text-black"
          : "bg-transparent text-white"
      }`}
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-5">

        <Link href="/" className="text-xl font-bold tracking-wide">
          ViktorStyle
        </Link>

        <nav className="space-x-6 hidden md:flex items-center">

          <Link href="/" className="hover:opacity-70">
            Home
          </Link>

          <Link href="/products" className="hover:opacity-70">
            Produtos
          </Link>

          <Link href="/cart" className="relative hover:opacity-70">
            Carrinho

            {totalItems > 0 && (
              <span className="absolute -top-2 -right-4 bg-red-600 text-white text-xs px-2 py-0.5 rounded-full">
                {totalItems}
              </span>
            )}
          </Link>

        </nav>

      </div>
    </header>
  )
}