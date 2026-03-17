"use client"

import { useCart } from "@/context/CartContext"
import Image from "next/image"

export default function CartPage() {

  const { cart, increase, decrease, removeFromCart, total } = useCart()

  return (

    <div className="p-10 max-w-6xl mx-auto">

      <h1 className="text-3xl font-bold mb-8">
        Carrinho
      </h1>

      {cart.length === 0 && (
        <p>Carrinho vazio</p>
      )}

      <div className="grid grid-cols-3 gap-10">

        {/* PRODUTOS */}

        <div className="col-span-2">

          {cart.map((item: any) => (

            <div
              key={item._id}
              className="flex items-center border p-4 mb-4 rounded"
            >

              <Image
                src={item.image}
                alt={item.name}
                width={80}
                height={80}
              />

              <div className="ml-4 flex-1">

                <h2 className="font-semibold">
                  {item.name}
                </h2>

                <p className="text-gray-600">
                  R$ {item.price}
                </p>

              </div>

              {/* QUANTIDADE */}

              <div className="flex items-center gap-3">

                <button
                  className="bg-gray-200 px-3 py-1"
                  onClick={() => decrease(item._id)}
                >
                  -
                </button>

                {item.quantity}

                <button
                  className="bg-gray-200 px-3 py-1"
                  onClick={() => increase(item._id)}
                >
                  +
                </button>

              </div>

              <button
                className="ml-6 text-red-500"
                onClick={() => removeFromCart(item._id)}
              >
                🗑
              </button>

            </div>

          ))}

        </div>

        {/* RESUMO */}

        <div className="border p-6 rounded h-fit">

          <h2 className="text-xl font-bold mb-4">
            Resumo
          </h2>

          <div className="flex justify-between mb-2">
            <span>Subtotal</span>
            <span>R$ {total}</span>
          </div>

          <div className="flex justify-between mb-2">
            <span>Frete</span>
            <span>Calculado no checkout</span>
          </div>

          <hr className="my-4"/>

          <div className="flex justify-between font-bold text-lg">
            <span>Total</span>
            <span>R$ {total}</span>
          </div>

          <button className="w-full bg-black text-white mt-6 py-3 rounded">
            Finalizar compra
          </button>

        </div>

      </div>

    </div>

  )
}