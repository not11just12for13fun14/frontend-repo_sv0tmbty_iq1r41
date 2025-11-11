import { motion } from 'framer-motion'
import Navbar from '../Navbar'
import Footer from '../Footer'
import Hero3D from '../components/Hero3D'
import ParallaxMarquee from '../components/ParallaxMarquee'
import FruitCard from '../components/FruitCard'
import { products } from '../data/products'
import FloatingCart from '../components/FloatingCart'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-green-50 text-gray-900">
      <Navbar />

      <Hero3D />

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
              <a key={i} href="/shop" className={`group relative overflow-hidden rounded-2xl bg-white shadow-lg ring-1 ring-gray-100`}>
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

      <ParallaxMarquee />

      {/* Featured Carousel with real images */}
      <section id="trending" className="py-14 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold">Trending now</h2>
          <div className="mt-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {products.slice(0,8).map(p => (
              <FruitCard key={p.id} product={p} />
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
      <FloatingCart />
    </div>
  )
}
