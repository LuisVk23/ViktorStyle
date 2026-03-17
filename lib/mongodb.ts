import mongoose from "mongoose"

const MONGODB_URI = process.env.MONGODB_URI!

if (!MONGODB_URI) {
  throw new Error("MONGODB_URI não definida no .env.local")
}

export async function connectDB() {
  try {
    if (mongoose.connection.readyState >= 1) {
      return
    }

    await mongoose.connect(MONGODB_URI)
    console.log("✅ Conectado ao MongoDB")
  } catch (error) {
    console.error("❌ Erro ao conectar no MongoDB:", error)
    throw error
  }
}