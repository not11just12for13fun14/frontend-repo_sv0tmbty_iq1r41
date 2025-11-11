import { useState, useMemo, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Spline from '@splinetool/react-spline'

const FRUITS = ['🍎','🍊','🍇','🍓','🍌','🍍','🥝','🍑']

function App() {
  const [clickFruits, setClickFruits] = useState([])
  const [tilt, setTilt] = useState({ x: 0, y: 0 })
  const [vh, setVh] = useState(typeof window !== 'undefined' ? window.innerHeight : 800)
  const idRef = useRef(0)
  const rafRef = useRef(null)

  useEffect(() => {
    const onResize = () => setVh(window.innerHeight)
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  const handleMouseMove = (e) => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current)
    rafRef.current = requestAnimationFrame(() => {
      const { innerWidth: w, innerHeight: h } = window
      const x = (e.clientY - h / 2) / h
      const y = (e.clientX - w / 2) / w
      setTilt({ x: x * -10, y: y * 12 })
    })
  }

  const handleClick = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const id = idRef.current++
    const fruit = FRUITS[Math.floor(Math.random() * FRUITS.length)]
    const size = 28 + Math.random() * 22
    const drift = (Math.random() - 0.5) * 180
    const life = 2.6 + Math.random() * 1.2 // seconds

    setClickFruits((prev) => [
      ...prev,
      {
        id,
        x,
        y,
        fruit,
        size,
        drift,
        rotate: (Math.random() - 0.5) * 140,
        life,
      },
    ])

    // schedule removal to trigger AnimatePresence exit
    setTimeout(() => {
      setClickFruits((prev) => prev.filter((f) => f.id !== id))
    }, life * 1000)
  }

  const floatingFruits = useMemo(() => {
    return Array.from({ length: 8 }).map((_, i) => ({
      id: `float-${i}`,
      fruit: FRUITS[i % FRUITS.length],
      left: 5 + i * 12 + (Math.random() * 6 - 3),
      delay: Math.random() * 2,
      duration: 9 + Math.random() * 5,
      size: 20 + Math.random() * 20,
    }))
  }, [])

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-black" onMouseMove={handleMouseMove} onClick={handleClick}>
      {/* 3D background cover */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/kqB-rdL4TCJ7pyGb/scene.splinecode" style={{ width: '100%', height: '100%' }} className="pointer-events-none" />
      </div>

      {/* Soft gradient overlay for contrast (non-interactive) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-white/10" />

      {/* Content layer with parallax tilt */}
      <div className="relative z-10 flex min-h-screen items-center justify-center p-6">
        <motion.div
          style={{ transformStyle: 'preserve-3d' }}
          animate={{ rotateX: tilt.x, rotateY: tilt.y }}
          transition={{ type: 'spring', stiffness: 80, damping: 18, mass: 0.8 }}
          className="max-w-3xl text-center"
        >
          <motion.h1
            className="text-5xl md:text-7xl font-extrabold tracking-tight text-white/90 drop-shadow-sm"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 100, damping: 18 }}
          >
            Juicy 3D Vibes
          </motion.h1>
          <motion.p
            className="mt-4 text-lg md:text-2xl text-white/80"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1, type: 'spring', stiffness: 100, damping: 18 }}
          >
            A playful hero with a dynamic 3D background. Click anywhere to pop fruity sprites and tilt your world with smooth motion.
          </motion.p>
          <motion.div
            className="mt-8 inline-flex items-center gap-3 rounded-full bg-white/10 px-5 py-3 backdrop-blur-md ring-1 ring-white/20"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: 'spring', stiffness: 300, damping: 18 }}
          >
            <span className="text-white/90 font-medium">Tap or click the background</span>
            <span className="text-xl">👉</span>
          </motion.div>
        </motion.div>
      </div>

      {/* Ambient floating fruits for extra life */}
      <div className="pointer-events-none absolute inset-0 z-10">
        {floatingFruits.map((f) => (
          <motion.div
            key={f.id}
            className="absolute"
            style={{ left: `${f.left}%`, bottom: '-60px', fontSize: f.size }}
            initial={{ y: 0, opacity: 0 }}
            animate={{ y: -vh - 200, opacity: [0, 1, 1, 0] }}
            transition={{ delay: f.delay, duration: f.duration, repeat: Infinity, ease: 'easeInOut' }}
          >
            <span className="drop-shadow">{f.fruit}</span>
          </motion.div>
        ))}
      </div>

      {/* Click-spawned fruits */}
      <AnimatePresence>
        {clickFruits.map((f) => (
          <motion.div
            key={f.id}
            className="absolute z-20 select-none will-change-transform"
            style={{ left: f.x, top: f.y, fontSize: f.size }}
            initial={{ x: 0, y: 0, opacity: 0, scale: 0.6, rotate: 0 }}
            animate={{ x: f.drift, y: -200 - Math.random() * 140, opacity: 1, scale: 1.15, rotate: f.rotate }}
            exit={{ opacity: 0, scale: 0.7 }}
            transition={{ type: 'tween', duration: f.life, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="drop-shadow-lg">{f.fruit}</span>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  )
}

export default App
