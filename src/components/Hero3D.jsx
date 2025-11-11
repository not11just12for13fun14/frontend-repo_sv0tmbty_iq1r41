import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero3D(){
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 opacity-80 [mask-image:linear-gradient(to_bottom,black_40%,transparent)]">
        <Spline scene="https://prod.spline.design/kqB-rdL4TCJ7pyGb/scene.splinecode" />
      </div>
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <motion.h1 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-4xl md:text-6xl font-extrabold tracking-tight">
              Colorful, Real Fruit — Delivered Fresh
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="mt-4 text-lg text-gray-600">
              Shop vibrant fruits and vegetables from trusted farmers. Real photos, real quality.
            </motion.p>
            <div className="mt-8 flex gap-3">
              <a href="/shop" className="inline-flex items-center justify-center rounded-full bg-green-600 px-6 py-3 text-white shadow hover:bg-green-700 transition">Shop Now</a>
              <a href="#trending" className="inline-flex items-center justify-center rounded-full border border-gray-300 px-6 py-3 text-gray-700 hover:bg-gray-50 transition">Browse Trending</a>
            </div>
          </div>

          <motion.div initial={{ opacity: 0, scale: .96 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: .6 }} className="relative h-80 md:h-[420px] rounded-3xl bg-white shadow-lg p-4">
            <div className="absolute inset-0 rounded-3xl bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-green-100 via-white to-yellow-100" />
            <div className="relative h-full w-full grid grid-cols-3 gap-4">
              {['https://images.unsplash.com/photo-1615486363871-5a5b2f4d1d5a?q=80&w=800&auto=format&fit=crop',
                'https://images.unsplash.com/photo-1464965911861-746a04b4bca6?q=80&w=800&auto=format&fit=crop',
                'https://images.unsplash.com/photo-1571772805064-207c8435df79?q=80&w=800&auto=format&fit=crop',
                'https://images.unsplash.com/photo-1508747703725-719777637510?q=80&w=800&auto=format&fit=crop',
                'https://images.unsplash.com/photo-1547514701-42782101795e?q=80&w=800&auto=format&fit=crop',
                'https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?q=80&w=800&auto=format&fit=crop',
                'https://images.unsplash.com/photo-1607301609837-0a8ec9bf6b8b?q=80&w=800&auto=format&fit=crop',
                'https://images.unsplash.com/photo-1547514701-9cdcb1f5941c?q=80&w=800&auto=format&fit=crop',
                'https://images.unsplash.com/photo-1560807707-8cc77767d783?q=80&w=800&auto=format&fit=crop']
              .map((src, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.05 }} className="overflow-hidden rounded-2xl bg-white shadow">
                  <img src={src} alt="fruit" className="h-full w-full object-cover" />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
