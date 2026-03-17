"use client"

import "./globals.css"
import Link from "next/link"
import { useState } from "react"

import { CartProvider, useCart } from "@/context/CartContext"
import CartDrawer from "@/components/CartDrawer"

function Navbar({ setCartOpen }: any) {

  const { totalItems } = useCart()

  return (

    <header className="w-full bg-black text-white">

      <div className="max-w-7xl mx-auto flex justify-between items-center p-5">

        {/* LOGO */}

        <h1 className="text-xl font-bold">
          ViktorStyle
        </h1>

        {/* MENU */}

        <nav className="flex gap-6 items-center">

          <Link href="/">
            Home
          </Link>

          <Link href="/products">
            Produtos
          </Link>

          {/* BOTÃO CARRINHO */}

          <button
            onClick={() => setCartOpen(true)}
            className="relative"
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

      <body>

        <CartProvider>

          <Navbar setCartOpen={setCartOpen} />

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