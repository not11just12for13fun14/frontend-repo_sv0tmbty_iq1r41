import { motion } from 'framer-motion'
import { useCart } from '../context/CartContext'
import { useToast } from '../context/ToastContext'

export default function FruitCard({ product }){
  const { addItem } = useCart()
  const { push } = useToast()

  const onAdd = () => {
    addItem({ id: product.id, name: product.name, price: product.price, image: product.image })
    push({ title: 'Added to cart', description: product.name, type: 'success' })
  }

  return (
    <motion.div whileHover={{ y: -4 }} className="rounded-2xl border border-gray-100 bg-white p-3 shadow-sm">
      <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
        <img src={product.image} alt={product.name} className="h-full w-full object-cover"/>
        <motion.div initial={{ opacity: 0 }} whileHover={{ opacity: 1 }} className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
      </div>
      <div className="mt-3 font-semibold">{product.name}</div>
      <div className="text-sm text-gray-500">by {product.farmer} ({product.region})</div>
      <div className="mt-2 font-bold">${product.price.toFixed(2)} / {product.unit}</div>
      <button onClick={onAdd} className="mt-3 inline-flex w-full items-center justify-center rounded-full bg-green-600 px-4 py-2 text-white hover:bg-green-700">Add to cart</button>
    </motion.div>
  )
}
