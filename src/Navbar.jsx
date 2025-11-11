import { Link, NavLink } from 'react-router-dom'
import { ShoppingCart, Leaf, User, Menu, Search } from 'lucide-react'
import { useState } from 'react'
import { useCart } from './context/CartContext'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const { count } = useCart()

  const navLink = (to, label) => (
    <NavLink
      to={to}
      onClick={() => setOpen(false)}
      className={({ isActive }) => `px-3 py-2 rounded-full text-sm font-medium transition-colors ${
        isActive ? 'bg-green-600 text-white' : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100'
      }`}
    >
      {label}
    </NavLink>
  )

  return (
    <header className="sticky top-0 z-40 bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-3">
            <Link to="/" className="inline-flex items-center gap-2 rounded-lg px-2 py-1">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-green-500 to-lime-500 text-white shadow">
                <Leaf size={18} />
              </span>
              <span className="text-xl font-extrabold tracking-tight">Efruit</span>
            </Link>
            <nav className="hidden md:flex items-center gap-2">
              {navLink('/', 'Home')}
              {navLink('/shop', 'Shop')}
              {navLink('/about', 'About')}
              {navLink('/contact', 'Contact')}
              {navLink('/faq', 'FAQ')}
            </nav>
          </div>

          <div className="hidden md:flex items-center gap-2">
            <div className="relative">
              <input
                className="peer h-10 w-64 rounded-full border border-gray-200 bg-white px-4 pl-10 text-sm outline-none ring-0 transition focus:border-green-400 focus:ring-2 focus:ring-green-200"
                placeholder="Search fruits, veggies..."
              />
              <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 peer-focus:text-green-500" />
            </div>
            <Link to="/cart" className="relative inline-flex items-center gap-2 rounded-full bg-green-600 px-4 py-2 text-white shadow hover:bg-green-700">
              <ShoppingCart size={18} />
              <span className="hidden sm:inline">Cart</span>
              {count > 0 && (
                <span className="absolute -right-2 -top-2 inline-flex h-5 min-w-[20px] items-center justify-center rounded-full bg-orange-500 px-1 text-xs font-semibold">{count}</span>
              )}
            </Link>
            <Link to="/login" className="inline-flex items-center gap-2 rounded-full border border-gray-200 px-4 py-2 text-gray-700 hover:bg-gray-50">
              <User size={18} />
              <span className="hidden sm:inline">Sign in</span>
            </Link>
          </div>

          <button className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border border-gray-200" onClick={() => setOpen(v => !v)}>
            <Menu />
          </button>
        </div>
        {open && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col gap-2">
              {navLink('/', 'Home')}
              {navLink('/shop', 'Shop')}
              {navLink('/about', 'About')}
              {navLink('/contact', 'Contact')}
              {navLink('/faq', 'FAQ')}
              <div className="flex items-center gap-2 pt-2">
                <Link to="/cart" onClick={() => setOpen(false)} className="flex-1 inline-flex items-center justify-center gap-2 rounded-full bg-green-600 px-4 py-2 text-white shadow">
                  <ShoppingCart size={18} /> Cart
                </Link>
                <Link to="/login" onClick={() => setOpen(false)} className="flex-1 inline-flex items-center justify-center gap-2 rounded-full border border-gray-200 px-4 py-2 text-gray-700">
                  <User size={18} /> Sign in
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
