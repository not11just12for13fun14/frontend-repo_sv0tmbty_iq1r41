import Navbar from '../Navbar'

export default function Product() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="rounded-2xl bg-gradient-to-br from-green-50 to-yellow-50 aspect-square" />
        <div>
          <div className="text-3xl font-bold">Mango Alphonso</div>
          <div className="mt-1 text-gray-600">by Farmer A • Ratnagiri</div>
          <div className="mt-4 text-2xl font-bold">$4.99 / kg</div>
          <div className="mt-4 flex items-center gap-3">
            <button className="rounded-full border border-gray-200 px-4 py-2">-</button>
            <div>1 kg</div>
            <button className="rounded-full border border-gray-200 px-4 py-2">+</button>
          </div>
          <div className="mt-6 flex gap-3">
            <button className="rounded-full bg-green-600 px-6 py-3 text-white">Add to Cart</button>
            <button className="rounded-full border border-gray-200 px-6 py-3">Buy Now</button>
          </div>
          <div className="mt-8 space-y-4 text-sm text-gray-700">
            <p>Rich, sweet, and aromatic. Perfect for juices and desserts.</p>
            <p>Nutrition: Vitamin A, C, fiber.</p>
            <p>Delivery estimate: 1-3 days.</p>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="text-xl font-bold">Suggested items</div>
        <div className="mt-4 flex gap-4 overflow-x-auto pb-2">
          {[1,2,3,4].map(i => (
            <div key={i} className="min-w-[220px] rounded-2xl border border-gray-100 bg-white p-4 shadow-sm">
              <div className="aspect-[4/3] rounded-xl bg-gradient-to-br from-green-50 to-yellow-50 flex items-center justify-center text-5xl">🥭</div>
              <div className="mt-3 font-semibold">Mango {i}</div>
              <div className="text-sm text-gray-500">by Farmer B</div>
              <div className="mt-2 font-bold">$4.{i}9 / kg</div>
              <button className="mt-3 inline-flex w-full items-center justify-center rounded-full bg-green-600 px-4 py-2 text-white hover:bg-green-700">Add to cart</button>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
