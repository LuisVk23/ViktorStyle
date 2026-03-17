"use client"

import { useParams } from "next/navigation"
import { useCart } from "@/context/CartContext"
import { useState } from "react"

const products = [
  { id: 1, name: "Camiseta Preta", price: 99, description: "Camiseta premium 100% algodão." },
  { id: 2, name: "Jaqueta Street", price: 299, description: "Jaqueta urbana estilosa." },
  { id: 3, name: "Calça Cargo", price: 199, description: "Calça cargo confortável e moderna." },
]

export default function ProductPage() {
  const params = useParams()
  const { addToCart } = useCart()
  const [quantity, setQuantity] = useState(1)

  const product = products.find(
    (p) => p.id === Number(params.id)
  )

  if (!product) {
    return <div className="p-10">Produto não encontrado.</div>
  }

  return (
    <div className="p-10 max-w-4xl mx-auto">
      <div className="grid md:grid-cols-2 gap-10">

        <div className="bg-gray-200 h-80 rounded-xl flex items-center justify-center">
          <span className="text-gray-500">
            Imagem do Produto
          </span>
        </div>

        <div>
          <h1 className="text-3xl font-bold mb-4">
            {product.name}
          </h1>

          <p className="text-gray-600 mb-4">
            {product.description}
          </p>

          <p className="text-2xl font-semibold mb-6">
            R$ {product.price}
          </p>

          <div className="flex items-center gap-4 mb-6">
            <button
              onClick={() => setQuantity((q) => Math.max(1, q - 1))}
              className="px-3 py-1 border rounded"
            >
              -
            </button>

            <span className="text-lg">{quantity}</span>

            <button
              onClick={() => setQuantity((q) => q + 1)}
              className="px-3 py-1 border rounded"
            >
              +
            </button>
          </div>

          <button
            onClick={() => addToCart(product, quantity)}
            className="bg-black text-white px-6 py-3 rounded-lg hover:opacity-80"
          >
            Adicionar ao Carrinho
          </button>
        </div>

      </div>
    </div>
  )
}