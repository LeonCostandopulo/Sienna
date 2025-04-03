import { createContext, useContext, useState } from 'react'

const CartContext = createContext()

export function CartProvider({ children }) {
  const [cart, setCart] = useState([])

  const addToCart = (product, quantity = 1, selectedColor, selectedSize) => {
    setCart(prevCart => {
      // Buscar si el producto ya existe con las mismas opciones
      const existingItem = prevCart.find(item => 
        item.id === product.id && 
        item.color === selectedColor && 
        item.size === selectedSize
      )

      if (existingItem) {
        // Actualizar cantidad si existe
        return prevCart.map(item =>
          item === existingItem
            ? { ...item, quantity: item.quantity + quantity }
            : item
        )
      }

      // Agregar nuevo item si no existe
      return [...prevCart, {
        ...product,
        id: product.id,
        color: selectedColor,
        size: selectedSize,
        quantity
      }]
    })
  }

  const removeFromCart = (productId, color, size) => {
    setCart(prevCart => prevCart.filter(item => 
      !(item.id === productId && item.color === color && item.size === size)
    ))
  }

  const clearCart = () => {
    setCart([])
  }

  const getCartTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0)
  }

  return (
    <CartContext.Provider value={{
      cart,
      addToCart,
      removeFromCart,
      clearCart,
      getCartTotal
    }}>
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => useContext(CartContext)