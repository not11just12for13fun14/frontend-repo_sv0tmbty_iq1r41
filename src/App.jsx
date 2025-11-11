import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Shop from './Shop'
import Product from './pages/Product'
import Cart from './pages/Cart'
import Auth from './pages/Auth'
import { About, Contact, FAQ } from './pages/Static'
import { ToastProvider } from './context/ToastContext'
import { CartProvider } from './context/CartContext'

function Loading(){
  return (
    <div className="min-h-screen flex items-center justify-center text-gray-500">Loading...</div>
  )
}

export default function App(){
  return (
    <Suspense fallback={<Loading />}> 
      <CartProvider>
        <ToastProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/product/:id" element={<Product />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/login" element={<Auth />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/faq" element={<FAQ />} />
          </Routes>
        </ToastProvider>
      </CartProvider>
    </Suspense>
  )
}
