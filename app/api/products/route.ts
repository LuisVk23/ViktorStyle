import { connectDB } from "@/lib/mongodb"
import Product from "@/models/Product"
import { NextResponse } from "next/server"

export const dynamic = "force-dynamic"

export async function GET() {
  try {
    await connectDB()

    const products = await Product.find({})

    return NextResponse.json(products)
  } catch (error) {
    console.error("ERRO API:", error)

    return NextResponse.json(
      { error: "Erro ao buscar produtos" },
      { status: 500 }
    )
  }
}