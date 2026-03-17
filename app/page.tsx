import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <main className="scroll-smooth">

      {/* HERO SECTION */}
      <section className="relative w-full h-screen bg-black pt-20">

        <Image
          src="/hero2.jpg"
          alt="ViktorStyle Fashion"
          fill
          priority
          className="object-cover object-center"
        />

        <div className="absolute inset-0 bg-black/40" />

        <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center px-4">

          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-wide">
            ViktorStyle
          </h1>

          <p className="text-lg md:text-2xl mb-8">
            Future Urban Collection
          </p>

          <a
            href="#collection"
            className="border border-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-black transition duration-300"
          >
            Explorar Coleção
          </a>

        </div>
      </section>

      {/* SEGUNDA SEÇÃO */}
      <section
        id="collection"
        className="min-h-screen bg-white py-20 px-6"
      >
        <div className="max-w-6xl mx-auto">

          <h2 className="text-4xl font-bold text-center mb-12">
            Nossa Coleção
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-gray-100 rounded-2xl p-8 shadow-md hover:scale-105 transition duration-300">
              <h3 className="text-xl font-semibold mb-4">
                Masculino
              </h3>
              <p className="mb-6 text-gray-600">
                Peças modernas com identidade urbana.
              </p>
              <Link
                href="/products"
                className="font-bold hover:underline"
              >
                Ver produtos →
              </Link>
            </div>

            <div className="bg-gray-100 rounded-2xl p-8 shadow-md hover:scale-105 transition duration-300">
              <h3 className="text-xl font-semibold mb-4">
                Feminino
              </h3>
              <p className="mb-6 text-gray-600">
                Estilo minimalista e contemporâneo.
              </p>
              <Link
                href="/products"
                className="font-bold hover:underline"
              >
                Ver produtos →
              </Link>
            </div>

            <div className="bg-gray-100 rounded-2xl p-8 shadow-md hover:scale-105 transition duration-300">
              <h3 className="text-xl font-semibold mb-4">
                Acessórios
              </h3>
              <p className="mb-6 text-gray-600">
                Complete seu visual com atitude.
              </p>
              <Link
                href="/products"
                className="font-bold hover:underline"
              >
                Ver produtos →
              </Link>
            </div>

          </div>
        </div>
      </section>

    {/* MODA FEMININA */}
      <section className="py-20 px-6 bg-white">

        <h2 className="text-3xl font-bold text-center mb-10">
          Moda Feminina
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">

          <div className="text-center">
            <img
              src="/products/blusinha.jpg"
              className="w-full rounded-lg"
            />
            <h3 className="mt-4 text-lg font-semibold">
              Blusinha Fashion
            </h3>
            <p className="text-gray-600">
              R$ 79,90
            </p>
          </div>

          <div className="text-center">
            <img
              src="/products/saia.jpg"
              className="w-full rounded-lg"
            />
            <h3 className="mt-4 text-lg font-semibold">
              Saia Elegante
            </h3>
            <p className="text-gray-600">
              R$ 89,90
            </p>
          </div>

          <div className="text-center">
            <img
              src="/products/vestido.jpg"
              className="w-full rounded-lg"
            />
            <h3 className="mt-4 text-lg font-semibold">
              Vestido Premium
            </h3>
            <p className="text-gray-600">
              R$ 129,90
            </p>
          </div>

        </div>

      </section>

    </main>
  )
}