import Navbar from '../Navbar'

export default function Auth() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 grid grid-cols-1 md:grid-cols-2 gap-10">
        <div>
          <div className="text-3xl font-extrabold tracking-tight">Welcome back</div>
          <p className="mt-2 text-gray-600">Login to continue</p>
          <form className="mt-6 space-y-3">
            <input className="h-11 w-full rounded-xl border border-gray-200 px-4 text-sm outline-none focus:border-green-400" placeholder="Email" />
            <input type="password" className="h-11 w-full rounded-xl border border-gray-200 px-4 text-sm outline-none focus:border-green-400" placeholder="Password" />
            <button className="w-full rounded-full bg-green-600 px-6 py-3 text-white">Login</button>
            <button className="w-full rounded-full border border-gray-200 px-6 py-3">Continue with Google</button>
          </form>
        </div>
        <div className="rounded-3xl bg-gradient-to-br from-green-50 to-yellow-50" />
      </div>
    </main>
  )
}
