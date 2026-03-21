export const dynamic = "force-dynamic"

import Image from "next/image"
import { connectDB } from "@/lib/mongodb"
import Product from "@/models/Product"

async function getProducts() {
  await connectDB()
  const products = await Product.find({})
  return JSON.parse(JSON.stringify(products))
}

export default async function ProductsPage() {

  const products = await getProducts()

  return (
    <div className="max-w-7xl mx-auto p-10">

      <h1 className="text-3xl font-bold mb-10">
        Produtos
      </h1>

      {products.length === 0 && (
        <p>Nenhum produto encontrado</p>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">

        {products.map((product: any) => (

          <div key={product._id} className="group">

            <div className="relative w-full h-[420px] bg-gray-100 overflow-hidden">

              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover"
              />

            </div>

            <div className="mt-4">
              <p className="text-sm text-gray-500">ViktorStyle</p>

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