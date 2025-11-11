import Navbar from '../Navbar'

export default function Dashboard(){
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="rounded-2xl bg-white p-6 shadow ring-1 ring-gray-100">
            <div className="text-sm text-gray-500">Earnings</div>
            <div className="mt-2 text-2xl font-bold">$1,240</div>
          </div>
          <div className="rounded-2xl bg-white p-6 shadow ring-1 ring-gray-100">
            <div className="text-sm text-gray-500">Total Products</div>
            <div className="mt-2 text-2xl font-bold">24</div>
          </div>
          <div className="rounded-2xl bg-white p-6 shadow ring-1 ring-gray-100">
            <div className="text-sm text-gray-500">Active Orders</div>
            <div className="mt-2 text-2xl font-bold">6</div>
          </div>
          <div className="rounded-2xl bg-white p-6 shadow ring-1 ring-gray-100">
            <div className="text-sm text-gray-500">Rating</div>
            <div className="mt-2 text-2xl font-bold">4.7</div>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="rounded-2xl bg-white p-6 shadow ring-1 ring-gray-100">
            <div className="font-semibold">Manage Products</div>
            <div className="mt-4 divide-y divide-gray-100">
              {Array.from({ length: 5 }).map((_, i) => (
                <div key={i} className="flex items-center justify-between py-3">
                  <div className="flex items-center gap-3">
                    <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-green-50 to-yellow-50 flex items-center justify-center">🥭</div>
                    <div>
                      <div className="font-medium">Mango {i+1}</div>
                      <div className="text-xs text-gray-500">Stock: 20</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <button className="rounded-full border border-gray-200 px-3 py-1 text-sm">Edit</button>
                    <button className="rounded-full border border-gray-200 px-3 py-1 text-sm">Delete</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-2xl bg-white p-6 shadow ring-1 ring-gray-100">
            <div className="font-semibold">Orders Received</div>
            <div className="mt-4 space-y-3">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="rounded-xl border border-gray-100 p-4">
                  <div className="flex items-center justify-between">
                    <div className="font-medium">Order #{1000+i}</div>
                    <div className="text-xs text-orange-600 bg-orange-50 px-2 py-1 rounded-full">Pending</div>
                  </div>
                  <div className="mt-2 text-sm text-gray-600">2 items • $12.98 • Today</div>
                  <div className="mt-3 flex gap-2">
                    <button className="rounded-full border border-gray-200 px-3 py-1 text-sm">Mark Shipped</button>
                    <button className="rounded-full border border-gray-200 px-3 py-1 text-sm">Update</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
