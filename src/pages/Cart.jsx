import Navbar from '../Navbar'
import { useCart } from '../context/CartContext'

export default function Cart() {
  const { items, addItem, removeItem, subtotal } = useCart()
  const delivery = items.length ? 1 : 0
  const total = subtotal + delivery

  return (
    <main className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-4">
          {items.length === 0 && (
            <div className="rounded-2xl border border-gray-100 bg-white p-6 text-gray-600">Your cart is empty.</div>
          )}
          {items.map((item) => (
            <div key={item.id} className="flex items-center gap-4 rounded-2xl border border-gray-100 bg-white p-4 shadow-sm">
              <div className="h-20 w-24 overflow-hidden rounded-xl bg-gray-100">
                {item.image ? <img src={item.image} className="h-full w-full object-cover"/> : null}
              </div>
              <div className="flex-1">
                <div className="font-semibold">{item.name}</div>
                <div className="text-sm text-gray-500">${item.price.toFixed(2)}</div>
              </div>
              <div className="flex items-center gap-2">
                <button onClick={()=>addItem(item, -1)} className="rounded-full border border-gray-200 px-3 py-1">-</button>
                <div>{item.qty}</div>
                <button onClick={()=>addItem(item, 1)} className="rounded-full border border-gray-200 px-3 py-1">+</button>
              </div>
              <div className="font-semibold">${(item.price * item.qty).toFixed(2)}</div>
              <button onClick={()=>removeItem(item.id)} className="text-red-500 text-sm">Remove</button>
            </div>
          ))}
        </div>
        <aside className="lg:col-span-1 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm h-fit">
          <div className="text-lg font-bold">Summary</div>
          <div className="mt-4 space-y-2 text-sm text-gray-700">
            <div className="flex justify-between"><span>Subtotal</span><span>${subtotal.toFixed(2)}</span></div>
            <div className="flex justify-between"><span>Delivery</span><span>${delivery.toFixed(2)}</span></div>
            <div className="flex justify-between font-bold text-gray-900 pt-2 border-t"><span>Total</span><span>${total.toFixed(2)}</span></div>
          </div>
          <a href="#" className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-green-600 px-6 py-3 text-white">Checkout</a>
        </aside>
      </div>
    </main>
  )
}
