"use client"

import { useCart } from "@/context/CartContext"
import Image from "next/image"

export default function CartDrawer({ open, setOpen }: any) {

  const { cart, removeFromCart, updateQuantity } = useCart()

  const total = cart.reduce((acc: number, item: any) => {
    return acc + item.price * item.quantity
  }, 0)

  if (!open) return null

  return (

    <div className="fixed inset-0 z-50 flex justify-end">

      {/* overlay */}

      <div
        className="absolute inset-0 bg-black/40"
        onClick={() => setOpen(false)}
      />

      {/* drawer */}

      <div className="relative w-[420px] h-full bg-white shadow-xl flex flex-col">

        {/* HEADER */}

        <div className="flex justify-between items-center p-5 border-b">

          <h2 className="text-xl font-semibold">
            Carrinho
          </h2>

          <button onClick={() => setOpen(false)}>
            ✕
          </button>

        </div>

        {/* PRODUTOS */}

        <div className="flex-1 overflow-y-auto p-5 space-y-6">

          {cart.map((item: any, index: number) => (

            <div key={index} className="flex gap-4 border-b pb-4">

              <Image
                src={item.image}
                width={70}
                height={90}
                alt={item.name}
                className="object-cover"
              />

              <div className="flex-1">

                <p className="font-medium">
                  {item.name}
                </p>

                <p className="text-gray-500">
                  R$ {item.price}
                </p>

                {/* TAMANHO */}

                <div className="flex gap-2 mt-2">

                  {["P", "M", "G"].map((size) => (

                    <button
                      key={size}
                      className={`border px-2 py-1 text-sm ${
                        item.size === size ? "bg-black text-white" : ""
                      }`}
                    >
                      {size}
                    </button>

                  ))}

                </div>

                {/* QUANTIDADE */}

                <div className="flex items-center gap-3 mt-2">

                  <button
                    onClick={() => updateQuantity(index, item.quantity - 1)}
                  >
                    -
                  </button>

                  <span>
                    {item.quantity}
                  </span>

                  <button
                    onClick={() => updateQuantity(index, item.quantity + 1)}
                  >
                    +
                  </button>

                </div>

                <button
                  className="text-red-500 text-sm mt-2"
                  onClick={() => removeFromCart(index)}
                >
                  Remover
                </button>

              </div>

            </div>

          ))}

          {/* CUPOM */}

          <div>

            <p className="font-medium mb-2">
              Cupom de desconto
            </p>

            <div className="flex gap-2">

              <input
                className="border p-2 flex-1"
                placeholder="Digite o cupom"
              />

              <button className="bg-black text-white px-4">
                Aplicar
              </button>

            </div>

          </div>

          {/* FRETE */}

          <div>

            <p className="font-medium mb-2">
              Calcular frete
            </p>

            <div className="flex gap-2">

              <input
                className="border p-2 flex-1"
                placeholder="Digite o CEP"
              />

              <button className="bg-black text-white px-4">
                Calcular
              </button>

            </div>

          </div>

          {/* PAGAMENTO */}

          <div>

            <p className="font-medium mb-2">
              Forma de pagamento
            </p>

            <div className="space-y-2">

              <label className="flex gap-2">
                <input type="radio" name="payment" />
                Pix
              </label>

              <label className="flex gap-2">
                <input type="radio" name="payment" />
                Cartão de crédito
              </label>

              <label className="flex gap-2">
                <input type="radio" name="payment" />
                Cartão de débito
              </label>

            </div>

          </div>

        </div>

        {/* TOTAL */}

        <div className="border-t p-5">

          <div className="flex justify-between mb-4">

            <span>Total</span>

            <span className="font-bold">
              R$ {total}
            </span>

          </div>

          <button className="w-full bg-black text-white py-3">
            Finalizar compra
          </button>

        </div>

      </div>

    </div>

  )
}