import mongoose from "mongoose"

const ProductSchema = new mongoose.Schema({
  name: String,
  price: Number,
  image: String,
})

// 🔥 evita erro de model duplicado na Vercel
export default mongoose.models.Product ||
  mongoose.model("Product", ProductSchema)