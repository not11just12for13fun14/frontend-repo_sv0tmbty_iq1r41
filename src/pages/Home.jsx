import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'
import Navbar from '../Navbar'
import Footer from '../Footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />

      {/* Hero with subtle 3D layer */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-70 [mask-image:linear-gradient(to_bottom,black_40%,transparent)]">
          <Spline scene="https://prod.spline.design/kqB-rdL4TCJ7pyGb/scene.splinecode" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <motion.h1 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-4xl md:text-6xl font-extrabold tracking-tight">
                Fresh from farm to your home
              </motion.h1>
              <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="mt-4 text-lg text-gray-600">
                Discover seasonal produce directly from verified farmers. Zero middlemen, full freshness.
              </motion.p>
              <div className="mt-8 flex gap-3">
                <a href="/shop" className="inline-flex items-center justify-center rounded-full bg-green-600 px-6 py-3 text-white shadow hover:bg-green-700 transition">Shop Now</a>
                <a href="#" className="inline-flex items-center justify-center rounded-full border border-gray-300 px-6 py-3 text-gray-700 hover:bg-gray-50 transition">Become a Farmer</a>
              </div>
            </div>

            <div className="relative h-80 md:h-[420px] rounded-3xl bg-white shadow-lg">
              <div className="absolute inset-0 rounded-3xl bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-green-100 via-white to-yellow-100" />
              <div className="relative h-full w-full grid grid-cols-3 gap-4 p-6">
                {['🍎','🥭','🍌','🍊','🍇','🍍','🍓','🥝','🍑'].map((f, i) => (
                  <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.05 }} className="flex items-center justify-center rounded-2xl bg-white shadow">
                    <span className="text-4xl">{f}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold">Shop by category</h2>
          <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { title: 'Fruits', color: 'from-green-500 to-lime-500' },
              { title: 'Vegetables', color: 'from-emerald-500 to-green-500' },
              { title: 'Organic Packs', color: 'from-yellow-400 to-orange-400' },
              { title: 'Juice Essentials', color: 'from-orange-500 to-red-500' },
            ].map((c, i) => (
              <a key={i} href="/shop" className={`group relative overflow-hidden rounded-2xl bg-white shadow-lg ring-1 ring-gray-100` }>
                <div className={`absolute -right-6 -top-6 h-24 w-24 rounded-full bg-gradient-to-br ${c.color} opacity-20 group-hover:scale-110 transition`} />
                <div className="p-6">
                  <div className="text-xl font-semibold">{c.title}</div>
                  <div className="mt-2 text-sm text-gray-500">Explore {c.title.toLowerCase()}</div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Carousel */}
      <section className="py-14 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold">Trending now</h2>
          <div className="mt-6 flex gap-4 overflow-x-auto pb-2">
            {[1,2,3,4,5,6].map(i => (
              <div key={i} className="min-w-[220px] rounded-2xl border border-gray-100 bg-white p-4 shadow-sm">
                <div className="aspect-[4/3] rounded-xl bg-gradient-to-br from-green-50 to-yellow-50 flex items-center justify-center text-5xl">🥭</div>
                <div className="mt-3 font-semibold">Mango Alphonso</div>
                <div className="text-sm text-gray-500">by Farmer A (Ratnagiri)</div>
                <div className="mt-2 font-bold">$4.99 / kg</div>
                <button className="mt-3 inline-flex w-full items-center justify-center rounded-full bg-green-600 px-4 py-2 text-white hover:bg-green-700">Add to cart</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold">What customers say</h2>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
            {["Sweetest mangoes ever!", "Crisp veggies, fast delivery.", "Love the farmer profiles."]
              .map((t, i) => (
              <div key={i} className="rounded-2xl bg-white p-6 shadow ring-1 ring-gray-100">
                <div className="text-yellow-500 mb-2">★★★★★</div>
                <p className="text-gray-700">{t}</p>
                <div className="mt-3 text-sm text-gray-500">— Happy Customer</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
