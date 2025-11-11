import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import FruitCard from './components/FruitCard'
import { products } from './data/products'

export default function Shop() {
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState(new Set())
  const [sort, setSort] = useState('Newest')

  const filtered = useMemo(() => {
    let list = products.filter(p => p.name.toLowerCase().includes(query.toLowerCase()))
    if(category.size){
      list = list.filter(p => category.has(p.category))
    }
    if(sort === 'Price: Low to High') list = list.slice().sort((a,b)=>a.price-b.price)
    if(sort === 'Top Rated') list = list // placeholder for rating
    return list
  }, [query, category, sort])

  const toggleCat = (c) => {
    const next = new Set(category)
    next.has(c) ? next.delete(c) : next.add(c)
    setCategory(next)
  }

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
                    <label key={c} className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" checked={category.has(c)} onChange={()=>toggleCat(c)} /> <span>{c}</span>
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
                <input value={query} onChange={e=>setQuery(e.target.value)} className="h-11 w-full rounded-full border border-gray-200 bg-white px-4 text-sm outline-none focus:border-green-400" placeholder="Search fresh produce..." />
              </div>
              <select value={sort} onChange={e=>setSort(e.target.value)} className="h-11 rounded-full border border-gray-200 px-3 text-sm">
                <option>Newest</option>
                <option>Price: Low to High</option>
                <option>Top Rated</option>
              </select>
            </div>

            <div className="mt-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {filtered.map((p, i) => (
                <motion.div key={p.id} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.25, delay: i * 0.03 }}>
                  <FruitCard product={p} />
                </motion.div>
              ))}
            </div>

            <div className="mt-8 text-center text-sm text-gray-500">{filtered.length} items</div>
          </div>
        </div>
      </section>
    </main>
  )
}
