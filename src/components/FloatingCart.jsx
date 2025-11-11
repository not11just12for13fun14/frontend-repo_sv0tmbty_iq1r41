import { Link } from 'react-router-dom'
import { ShoppingCart } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { useCart } from '../context/CartContext'

export default function FloatingCart(){
  const { count, subtotal } = useCart()
  return (
    <AnimatePresence>
      {count > 0 && (
        <motion.div initial={{ y: 80, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 80, opacity: 0 }} className="fixed bottom-5 left-1/2 z-50 -translate-x-1/2">
          <Link to="/cart" className="inline-flex items-center gap-3 rounded-full bg-green-600 px-5 py-3 text-white shadow-2xl">
            <ShoppingCart size={18} />
            <span>{count} items</span>
            <span className="font-semibold">${subtotal.toFixed(2)}</span>
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
