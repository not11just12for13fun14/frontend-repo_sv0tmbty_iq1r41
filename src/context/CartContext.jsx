import { createContext, useContext, useMemo, useReducer } from 'react'

const CartCtx = createContext({ items: [], count: 0, subtotal: 0, addItem: () => {}, removeItem: () => {}, clear: () => {} })

function reducer(state, action){
  switch(action.type){
    case 'add': {
      const key = action.item.id
      const delta = action.qty ?? 1
      const next = new Map(state.map)
      const prev = next.get(key) || { ...action.item, qty: 0 }
      const qty = prev.qty + delta
      if(qty <= 0){
        next.delete(key)
      } else {
        next.set(key, { ...prev, qty })
      }
      return { map: next }
    }
    case 'remove': {
      const key = action.id
      const next = new Map(state.map)
      next.delete(key)
      return { map: next }
    }
    case 'clear': return { map: new Map() }
    default: return state
  }
}

export function CartProvider({ children }){
  const [state, dispatch] = useReducer(reducer, { map: new Map() })
  const items = useMemo(() => Array.from(state.map.values()), [state.map])
  const count = useMemo(() => items.reduce((a, b) => a + b.qty, 0), [items])
  const subtotal = useMemo(() => items.reduce((a, b) => a + b.price * b.qty, 0), [items])

  const api = useMemo(() => ({
    items,
    count,
    subtotal,
    addItem: (item, qty = 1) => dispatch({ type: 'add', item, qty }),
    removeItem: (id) => dispatch({ type: 'remove', id }),
    clear: () => dispatch({ type: 'clear' })
  }), [items, count, subtotal])

  return <CartCtx.Provider value={api}>{children}</CartCtx.Provider>
}

export function useCart(){
  return useContext(CartCtx)
}
