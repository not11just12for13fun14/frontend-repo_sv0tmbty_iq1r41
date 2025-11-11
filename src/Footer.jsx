export default function Footer(){
  return (
    <footer className="border-t border-gray-100 bg-white text-gray-700">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-2 md:grid-cols-4 gap-6 text-sm">
        <div>
          <div className="font-bold text-gray-900">Company</div>
          <ul className="mt-3 space-y-2">
            <li><a href="/about" className="hover:text-gray-900">About</a></li>
            <li><a href="/contact" className="hover:text-gray-900">Contact</a></li>
            <li><a href="/careers" className="hover:text-gray-900">Careers</a></li>
          </ul>
        </div>
        <div>
          <div className="font-bold text-gray-900">Help</div>
          <ul className="mt-3 space-y-2">
            <li><a href="/faq" className="hover:text-gray-900">FAQ</a></li>
            <li><a href="#" className="hover:text-gray-900">Shipping</a></li>
            <li><a href="#" className="hover:text-gray-900">Returns</a></li>
          </ul>
        </div>
        <div>
          <div className="font-bold text-gray-900">Legal</div>
          <ul className="mt-3 space-y-2">
            <li><a href="/privacy" className="hover:text-gray-900">Privacy Policy</a></li>
            <li><a href="/terms" className="hover:text-gray-900">Terms</a></li>
          </ul>
        </div>
        <div>
          <div className="font-bold text-gray-900">Newsletter</div>
          <p className="mt-3">Fresh deals weekly. No spam.</p>
          <div className="mt-3 flex">
            <input className="h-10 w-full rounded-l-full border border-gray-200 px-4 text-sm outline-none focus:border-green-400" placeholder="Your email" />
            <button className="h-10 rounded-r-full bg-green-600 px-4 text-white hover:bg-green-700">Join</button>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-100 py-6 text-center text-xs text-gray-500">© {new Date().getFullYear()} Efruit. All rights reserved.</div>
    </footer>
  )
}
