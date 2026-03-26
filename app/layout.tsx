"use client"

import "./globals.css"
import Link from "next/link"
import { useState, useEffect } from "react"

import { CartProvider, useCart } from "@/context/CartContext"
import CartDrawer from "@/components/CartDrawer"

function Navbar({ setCartOpen }: any) {
  const { totalItems } = useCart()
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md text-black shadow-md"
          : "bg-transparent text-white"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-5">

        {/* LOGO */}
        <h1 className="text-xl font-bold">
          ViktorStyle
        </h1>

        {/* MENU */}
        <nav className="flex gap-6 items-center">

          <Link href="/" className="hover:opacity-70">
            Home
          </Link>

          <Link href="/products" className="hover:opacity-70">
            Produtos
          </Link>

          {/* CARRINHO */}
          <button
            onClick={() => setCartOpen(true)}
            className="relative hover:opacity-70"
          >
            Carrinho

            {totalItems > 0 && (
              <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                {totalItems}
              </span>
            )}
          </button>

        </nav>

      </div>
    </header>
  )
}

export default function RootLayout({ children }: any) {
  const [cartOpen, setCartOpen] = useState(false)

  return (
    <html lang="pt-br">
      <body className="bg-white">

        <CartProvider>

          <Navbar setCartOpen={setCartOpen} />

          {/* IMPORTANTE: padding-top pra não ficar escondido atrás da navbar */}
          <main className="min-h-screen">
            {children}
          </main>

          <CartDrawer
            open={cartOpen}
            setOpen={setCartOpen}
          />

        </CartProvider>

      </body>
    </html>
  )
}