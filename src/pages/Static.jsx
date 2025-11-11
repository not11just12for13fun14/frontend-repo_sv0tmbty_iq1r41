import Navbar from '../Navbar'
import Footer from '../Footer'

export function About(){
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 space-y-6">
        <h1 className="text-3xl font-extrabold tracking-tight">About Us</h1>
        <p className="text-gray-600">From soil to soul. Our mission is to connect you with the freshest produce directly from farmers.</p>
      </div>
      <Footer />
    </div>
  )
}

export function Contact(){
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 space-y-6">
        <h1 className="text-3xl font-extrabold tracking-tight">Contact</h1>
        <form className="mt-6 max-w-xl space-y-3">
          <input className="h-11 w-full rounded-xl border border-gray-200 px-4 text-sm outline-none focus:border-green-400" placeholder="Name" />
          <input className="h-11 w-full rounded-xl border border-gray-200 px-4 text-sm outline-none focus:border-green-400" placeholder="Email" />
          <textarea className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none focus:border-green-400" placeholder="Message" rows={5} />
          <button className="rounded-full bg-green-600 px-6 py-3 text-white">Send</button>
        </form>
      </div>
      <Footer />
    </div>
  )
}

export function FAQ(){
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 space-y-4">
        <h1 className="text-3xl font-extrabold tracking-tight">FAQ</h1>
        {[
          {q:'How fresh is the produce?', a:'Picked within 24-48 hours before delivery.'},
          {q:'Where do you deliver?', a:'Major metros for now, expanding soon.'},
          {q:'How are farmers verified?', a:'ID, land proofs, and quality checks.'},
        ].map((f, i) => (
          <details key={i} className="rounded-2xl border border-gray-100 bg-white p-4 shadow">
            <summary className="cursor-pointer font-medium">{f.q}</summary>
            <div className="mt-2 text-gray-600">{f.a}</div>
          </details>
        ))}
      </div>
      <Footer />
    </div>
  )
}
