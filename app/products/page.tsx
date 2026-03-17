"use client"

import Image from "next/image"
import { useEffect, useState } from "react"
import { useCart } from "@/context/CartContext"

export default function ProductsPage() {

  const [products, setProducts] = useState<any[]>([])
  const { addToCart } = useCart()

  useEffect(() => {
    fetch("/api/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
  }, [])

  return (
    <div className="max-w-7xl mx-auto p-10">

      <h1 className="text-3xl font-bold mb-10">
        Produtos
      </h1>

      {/* GRID PRODUTOS */}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">

        {products.map((product: any) => (

          <div
            key={product._id}
            className="group"
          >

            {/* IMAGEM */}

            <div className="relative w-full h-[420px] bg-gray-100 overflow-hidden">

              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover group-hover:scale-105 transition"
              />

              {/* BOTÃO HOVER */}

              <button
                onClick={() => addToCart(product)}
                className="absolute bottom-4 left-1/2 -translate-x-1/2 
                bg-black text-white px-6 py-2 rounded opacity-0 
                group-hover:opacity-100 transition"
              >
                Adicionar ao Carrinho
              </button>

            </div>

            {/* INFO PRODUTO */}

            <div className="mt-4">

              <p className="text-sm text-gray-500">
                ViktorStyle
              </p>

              <h2 className="font-medium">
                {product.name}
              </h2>

              <p className="mt-1 font-semibold">
                R$ {product.price}
              </p>

              <p className="text-sm text-gray-500">
                6x de R$ {(product.price / 6).toFixed(2)}
              </p>

            </div>

          </div>

        ))}

      </div>

    </div>
  )
}