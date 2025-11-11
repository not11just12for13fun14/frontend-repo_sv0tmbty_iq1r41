import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function ParallaxMarquee(){
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const x = useTransform(scrollYProgress, [0, 1], ['0%', '-25%'])
  const fruits = [
    'https://images.unsplash.com/photo-1547514701-42782101795e?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1464965911861-746a04b4bca6?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1508747703725-719777637510?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1571772805064-207c8435df79?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?q=80&w=800&auto=format&fit=crop'
  ]
  return (
    <div ref={ref} className="relative overflow-hidden py-12">
      <motion.div style={{ x }} className="flex gap-4 will-change-transform">
        {fruits.concat(fruits).map((src, i) => (
          <div key={i} className="h-36 w-56 overflow-hidden rounded-2xl shadow">
            <img src={src} className="h-full w-full object-cover"/>
          </div>
        ))}
      </motion.div>
    </div>
  )
}
