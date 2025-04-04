import { useCart } from '../ProductsSection/useCart'//#

export function CartDetail({ onClose }) {
  const { cart, removeFromCart, getCartTotal } = useCart()
  const numero = 5491130082379
  const mensaje = 'Hola! Vengo de la página web de Sienna. Quiero comprar: \n'
  
  const getWhatsAppMessage = () => {
    const itemsList = cart.map(item => 
      `- ${item.name} (Color: ${item.color}, Talla: ${item.size}, Cantidad: ${item.quantity})`
    ).join('\n')
    
    return `${mensaje}${itemsList}\n\nTotal: $${getCartTotal()}`
  }

  return (
    <div 
      className="fixed inset-0 bg-black/50 flex justify-end z-50 "
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
                      <svg 
                      width="24px" 
                      height="24px" 
                      viewBox="0 0 24.00 24.00" 
                      fill="none" 
                      xmlns="http://www.w3.org/2000/svg">
                        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M20.5001 6H3.5" stroke="#990000" strokeWidth="1.5" strokeLinecap="round"></path> <path d="M18.8332 8.5L18.3732 15.3991C18.1962 18.054 18.1077 19.3815 17.2427 20.1907C16.3777 21 15.0473 21 12.3865 21H11.6132C8.95235 21 7.62195 21 6.75694 20.1907C5.89194 19.3815 5.80344 18.054 5.62644 15.3991L5.1665 8.5" stroke="#990000" strokeWidth="1.5" strokeLinecap="round"></path> <path d="M9.5 11L10 16" stroke="#990000" strokeWidth="1.5" strokeLinecap="round"></path> <path d="M14.5 11L14 16" stroke="#990000" strokeWidth="1.5" strokeLinecap="round"></path> <path d="M6.5 6C6.55588 6 6.58382 6 6.60915 5.99936C7.43259 5.97849 8.15902 5.45491 8.43922 4.68032C8.44784 4.65649 8.45667 4.62999 8.47434 4.57697L8.57143 4.28571C8.65431 4.03708 8.69575 3.91276 8.75071 3.8072C8.97001 3.38607 9.37574 3.09364 9.84461 3.01877C9.96213 3 10.0932 3 10.3553 3H13.6447C13.9068 3 14.0379 3 14.1554 3.01877C14.6243 3.09364 15.03 3.38607 15.2493 3.8072C15.3043 3.91276 15.3457 4.03708 15.4286 4.28571L15.5257 4.57697C15.5433 4.62992 15.5522 4.65651 15.5608 4.68032C15.841 5.45491 16.5674 5.97849 17.3909 5.99936C17.4162 6 17.4441 6 17.5 6" stroke="#990000" strokeWidth="1.5"></path> </g>
                      </svg>
                    </button>
                  </div>
                ))}
              </div>

              <div className="border-t w-full border-[var(--color-elementos-2)]/20 mt-4 pt-4">
                <div className="flex justify-between px-4 text-lg font-bold mb-4">
                  <span>Total:</span>
                  <span>${getCartTotal()}</span>
                </div>
                <a 
                  target="_blank"
                  href={`https://wa.me/${numero}?text=${encodeURIComponent(getWhatsAppMessage())}`}
                  className="w-full block bg-[var(--color-elementos-2)] text-white py-3 rounded-lg hover:opacity-80 text-center"
                >
                  Finalizar compra
                </a>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  )
}