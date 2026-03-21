import { connectDB } from "@/lib/mongodb"
import Product from "@/models/Product"
import { NextResponse } from "next/server"

export async function GET() {
  try {
    await connectDB()

    const products = await Product.find({})

    return NextResponse.json(products)
  } catch (error) {
    console.error("ERRO API:", error)

    // 🔥 IMPORTANTE: nunca quebrar o frontend
    return NextResponse.json([])
  }
}