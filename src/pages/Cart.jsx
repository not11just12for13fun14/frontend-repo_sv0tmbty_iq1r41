import Navbar from '../Navbar'

export default function Cart() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-4">
          {Array.from({ length: 2 }).map((_, i) => (
            <div key={i} className="flex items-center gap-4 rounded-2xl border border-gray-100 bg-white p-4 shadow-sm">
              <div className="h-20 w-24 rounded-xl bg-gradient-to-br from-green-50 to-yellow-50 flex items-center justify-center text-3xl">🥭</div>
              <div className="flex-1">
                <div className="font-semibold">Mango Alphonso</div>
                <div className="text-sm text-gray-500">by Farmer A</div>
              </div>
              <div className="flex items-center gap-2">
                <button className="rounded-full border border-gray-200 px-3 py-1">-</button>
                <div>1</div>
                <button className="rounded-full border border-gray-200 px-3 py-1">+</button>
              </div>
              <div className="font-semibold">$4.99</div>
            </div>
          ))}
        </div>
        <aside className="lg:col-span-1 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm h-fit">
          <div className="text-lg font-bold">Summary</div>
          <div className="mt-4 space-y-2 text-sm text-gray-700">
            <div className="flex justify-between"><span>Subtotal</span><span>$9.98</span></div>
            <div className="flex justify-between"><span>Delivery</span><span>$1.00</span></div>
            <div className="flex justify-between font-bold text-gray-900 pt-2 border-t"><span>Total</span><span>$10.98</span></div>
          </div>
          <button className="mt-6 w-full rounded-full bg-green-600 px-6 py-3 text-white">Checkout</button>
        </aside>
      </div>
    </main>
  )
}
