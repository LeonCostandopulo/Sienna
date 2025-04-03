import { useCart } from '../ProductsSection/useCart'//#

export function CartDetail({ onClose }) {
  const { cart, removeFromCart, getCartTotal } = useCart()

  return (
    <div 
      className="fixed inset-0 bg-black/50 flex justify-end z-50"
      onClick={onClose}
    >
      <div 
        className="bg-[var(--color-elementos)] w-full max-w-md h-full overflow-auto"
        onClick={e => e.stopPropagation()}
      >
        <div className="p-4 flex flex-col h-full">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold">Carrito</h2>
            <button 
              onClick={onClose}
              className="p-2 hover:opacity-60"
            >
              ✕
            </button>
          </div>

          {cart.length === 0 ? (
            <p className="text-center my-8 text-[var(--color-texto-2)]">
              El carrito está vacío
            </p>
          ) : (
            <>
              <div className="flex-1 overflow-auto">
                {cart.map((item) => (
                  <div 
                    key={`${item.id}-${item.color}-${item.size}`}
                    className="flex gap-4 mb-4 p-4 bg-[var(--color-elementos-2)]/10 rounded-lg"
                  >
                    <img 
                      src={item.imageUrl} 
                      alt={item.name}
                      className="w-20 h-20 object-cover rounded"
                    />
                    <div className="flex-1">
                      <h3 className="font-bold">{item.name}</h3>
                      <p className="text-sm text-[var(--color-texto-2)]">
                        Color: {item.color}
                      </p>
                      <p className="text-sm text-[var(--color-texto-2)]">
                        Talla: {item.size}
                      </p>
                      <p className="text-sm">
                        Cantidad: {item.quantity}
                      </p>
                      <p className="font-bold">
                        ${item.price * item.quantity}
                      </p>
                    </div>
                    <button
                      onClick={() => removeFromCart(item.id, item.color, item.size)}
                      className="self-start p-1 hover:opacity-60"
                    >
                      ✕
                    </button>
                  </div>
                ))}
              </div>

              <div className="border-t border-[var(--color-elementos-2)]/20 mt-4 pt-4">
                <div className="flex justify-between text-lg font-bold mb-4">
                  <span>Total:</span>
                  <span>${getCartTotal()}</span>
                </div>
                <button className="w-full bg-[var(--color-elementos-2)] text-white py-3 rounded-lg hover:opacity-80">
                  Finalizar compra
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  )
}