import { connectDB } from "@/lib/mongodb"
import mongoose from "mongoose"
import { NextResponse } from "next/server"

export async function GET() {
  try {
    await connectDB()

    const dbName = mongoose.connection.name
    const collections = await mongoose.connection.db.listCollections().toArray()

    return NextResponse.json({
      database: dbName,
      collections: collections.map((c) => c.name),
    })
  } catch (error) {
    return NextResponse.json(
      { error: "Erro ao conectar" },
      { status: 500 }
    )
  }
}