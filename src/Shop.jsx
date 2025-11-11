import { motion } from 'framer-motion'

export default function Shop() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-green-50">
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Sidebar Filters */}
          <aside className="md:w-72 w-full rounded-2xl bg-white p-4 shadow-sm ring-1 ring-gray-100 h-fit sticky top-20">
            <h3 className="font-semibold">Filters</h3>
            <div className="mt-4 space-y-4 text-sm">
              <div>
                <div className="font-medium mb-2">Category</div>
                <div className="space-y-1">
                  {['Fruits','Vegetables','Organic Packs','Juice Essentials'].map((c) => (
                    <label key={c} className="flex items-center gap-2">
                      <input type="checkbox" /> <span>{c}</span>
                    </label>
                  ))}
                </div>
              </div>
              <div>
                <div className="font-medium mb-2">Price</div>
                <input type="range" className="w-full" />
              </div>
              <div>
                <div className="font-medium mb-2">Rating</div>
                <div>★★★★☆ & up</div>
              </div>
              <div>
                <div className="font-medium mb-2">Region</div>
                <select className="w-full rounded-md border border-gray-200 px-2 py-2 text-sm">
                  <option>All regions</option>
                  <option>North</option>
                  <option>South</option>
                  <option>East</option>
                  <option>West</option>
                </select>
              </div>
            </div>
          </aside>

          {/* Main Grid */}
          <div className="flex-1">
            <div className="flex items-center justify-between gap-3">
              <div className="relative flex-1 max-w-md">
                <input className="h-11 w-full rounded-full border border-gray-200 bg-white px-4 pl-11 text-sm outline-none focus:border-green-400" placeholder="Search fresh produce..." />
                <div className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">🔎</div>
              </div>
              <select className="h-11 rounded-full border border-gray-200 px-3 text-sm">
                <option>Newest</option>
                <option>Price: Low to High</option>
                <option>Top Rated</option>
              </select>
            </div>

            <div className="mt-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {Array.from({ length: 12 }).map((_, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.25, delay: i * 0.03 }} className="rounded-2xl border border-gray-100 bg-white p-3 shadow-sm">
                  <div className="aspect-[4/3] rounded-xl bg-gradient-to-br from-green-50 to-yellow-50 flex items-center justify-center text-5xl">{['🍎','🥭','🍌','🍓','🍊','🍍'][i%6]}</div>
                  <div className="mt-3 font-semibold">Seasonal Produce {i+1}</div>
                  <div className="text-sm text-gray-500">by Farmer {String.fromCharCode(65 + (i%6))}</div>
                  <div className="mt-2 font-bold">${(3.5 + (i%5)).toFixed(2)} / kg</div>
                  <button className="mt-3 inline-flex w-full items-center justify-center rounded-full bg-green-600 px-4 py-2 text-white hover:bg-green-700">Add to cart</button>
                </motion.div>
              ))}
            </div>

            <div className="mt-8 text-center text-sm text-gray-500">Scroll to load more...</div>
          </div>
        </div>
      </section>
    </main>
  )
}
