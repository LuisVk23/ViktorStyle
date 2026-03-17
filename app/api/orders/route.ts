import { NextResponse } from "next/server"
import { connectDB } from "@/lib/mongodb"
import Order from "@/models/Order"

// ==============================
// GET - Listar pedidos
// ==============================
export async function GET() {
  try {
    await connectDB()

    const orders = await Order.find().sort({ createdAt: -1 })

    return NextResponse.json(orders, { status: 200 })
  } catch (error) {
    console.error("Erro no GET:", error)
    return NextResponse.json(
      { message: "Erro ao buscar pedidos" },
      { status: 500 }
    )
  }
}

// ==============================
// POST - Criar pedido
// ==============================
export async function POST(req: Request) {
  try {
    await connectDB()

    const body = await req.json()

    const { items, total, paymentMethod } = body

    if (!items || !total || !paymentMethod) {
      return NextResponse.json(
        { message: "Dados incompletos" },
        { status: 400 }
      )
    }

    const newOrder = await Order.create({
      items,
      total,
      paymentMethod,
      status: "pending",
    })

    console.log("🛒 Pedido criado:", newOrder)

    return NextResponse.json(newOrder, { status: 201 })
  } catch (error) {
    console.error("Erro no POST:", error)
    return NextResponse.json(
      { message: "Erro ao criar pedido" },
      { status: 500 }
    )
  }
}

// ==============================
// PUT - Atualizar status
// ==============================
export async function PUT(req: Request) {
  try {
    await connectDB()

    const body = await req.json()
    const { id, status } = body

    if (!id || !status) {
      return NextResponse.json(
        { message: "ID ou status não informado" },
        { status: 400 }
      )
    }

    const updatedOrder = await Order.findByIdAndUpdate(
      id,
      { status },
      { new: true }
    )

    return NextResponse.json(updatedOrder, { status: 200 })
  } catch (error) {
    console.error("Erro no PUT:", error)
    return NextResponse.json(
      { message: "Erro ao atualizar pedido" },
      { status: 500 }
    )
  }
}

// ==============================
// DELETE - Remover pedido
// ==============================
export async function DELETE(req: Request) {
  try {
    await connectDB()

    const body = await req.json()
    const { id } = body

    if (!id) {
      return NextResponse.json(
        { message: "ID não informado" },
        { status: 400 }
      )
    }

    await Order.findByIdAndDelete(id)

    return NextResponse.json(
      { message: "Pedido deletado com sucesso" },
      { status: 200 }
    )
  } catch (error) {
    console.error("Erro no DELETE:", error)
    return NextResponse.json(
      { message: "Erro ao deletar pedido" },
      { status: 500 }
    )
  }
}