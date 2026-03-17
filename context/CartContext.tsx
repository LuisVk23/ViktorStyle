"use client"

import { createContext, useContext, useState } from "react"

const CartContext = createContext<any>(null)

export function CartProvider({ children }: any) {

  const [cart, setCart] = useState<any[]>([])

  function addToCart(product: any) {

    const existing = cart.find((item) => item._id === product._id)

    if (existing) {

      const updatedCart = cart.map((item) =>
        item._id === product._id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )

      setCart(updatedCart)

    } else {

      setCart([...cart, { ...product, quantity: 1, size: "M" }])

    }
  }

  function removeFromCart(index: number) {

    const updatedCart = cart.filter((_, i) => i !== index)

    setCart(updatedCart)
  }

  function updateQuantity(index: number, quantity: number) {

    if (quantity < 1) return

    const updatedCart = [...cart]

    updatedCart[index].quantity = quantity

    setCart(updatedCart)
  }

  function updateSize(index: number, size: string) {

    const updatedCart = [...cart]

    updatedCart[index].size = size

    setCart(updatedCart)
  }

  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0)

  return (

    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        updateSize,
        totalItems
      }}
    >

      {children}

    </CartContext.Provider>

  )
}

export function useCart() {

  return useContext(CartContext)

}