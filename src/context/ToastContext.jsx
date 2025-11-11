import { createContext, useCallback, useContext, useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const ToastCtx = createContext({ push: () => {} })

export function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([])

  const remove = useCallback((id) => {
    setToasts((t) => t.filter((x) => x.id !== id))
  }, [])

  const push = useCallback((toast) => {
    const id = Math.random().toString(36).slice(2)
    const payload = { id, title: toast.title || 'Notice', description: toast.description || '', type: toast.type || 'default' }
    setToasts((t) => [...t, payload])
    setTimeout(() => remove(id), toast.duration || 2500)
  }, [remove])

  const value = useMemo(() => ({ push }), [push])

  return (
    <ToastCtx.Provider value={value}>
      {children}
      <div className="pointer-events-none fixed inset-x-0 top-0 z-[100] flex flex-col items-center gap-2 p-4">
        <AnimatePresence>
          {toasts.map((t) => (
            <motion.div key={t.id} initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: -20, opacity: 0 }} transition={{ type: 'spring', stiffness: 400, damping: 30 }} className={`pointer-events-auto w-full max-w-md rounded-xl border bg-white p-4 shadow-xl ${t.type==='success'?'border-green-200':'border-gray-200'}`}>
              <div className="flex items-start gap-3">
                <div className={`h-2.5 w-2.5 mt-2 rounded-full ${t.type==='success'?'bg-green-500':'bg-gray-300'}`} />
                <div className="flex-1">
                  <div className="font-semibold">{t.title}</div>
                  {t.description && <div className="text-sm text-gray-600 mt-0.5">{t.description}</div>}
                </div>
                <button onClick={() => remove(t.id)} className="text-gray-400 hover:text-gray-600">✕</button>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </ToastCtx.Provider>
  )
}

export function useToast(){
  return useContext(ToastCtx)
}
