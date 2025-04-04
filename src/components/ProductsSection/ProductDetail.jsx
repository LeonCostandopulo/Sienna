import { useState, useEffect } from 'react'
import { ColorPicker } from './ColorPicker'
import { SizePicker } from './SizePicker'
import { useCart } from '../ProductsSection/useCart'//#

export function ProductDetail({ product, onClose }) {
  const numero = 5491130082379
  const mensaje = 'Hola! Vengo de la página web de Sienna. Quiero comprar: \n'
  
  const { addToCart } = useCart() //#
  const [selectedColor, setSelectedColor] = useState(product.color?.[0] || null)
  const [selectedSize, setSelectedSize] = useState(product.size?.[0] || null)

  const handleAddToCart = () => { //#
    addToCart(product, 1, selectedColor, selectedSize)
    onClose()
  }

  useEffect(() => {
    const closeButton = document.querySelector('.close-button')
    
    const handleBackButton = () => {
      closeButton?.click()
    }

    window.addEventListener('popstate', handleBackButton)
    return () => window.removeEventListener('popstate', handleBackButton)
  }, [])
  
  return (
    <div 
      className="fixed inset-0 bg-black/50 flex items-center justify-center"
      style={{ zIndex: 100 }}
      onClick={onClose}
    >
      <article 
        className="bg-[var(--color-elementos)] max-h-[90dvh] h-full relative rounded-lg max-w-[90dvw] md:max-w-4xl w-full mx-4 overflow-hidden"
        style={{ zIndex: 101 }}
        onClick={e => e.stopPropagation()}
      >
        <div className="flex gap-1 flex-col md:flex-row h-full items-center  overflow-hidden">
          <img 
            src={product.imageUrl} 
            alt={product.name}
            className=" rounded-t-lg max-h-[40dvh] w-full md:w-1/2 object-none"
          />

          <div className="flex flex-col md:gap-4">
            <h2 className="text-3xl font-bold text-center">{product.name}</h2>
            <p className="text-2xl font-bold text-center ">${product.price}</p>

          <div className="flex flex-1 px-10 md:flex-col">
            <p className="hidden md:block text-[var(--color-texto-2)] mb-4">{product.description}</p>
            
            <div className='flex flex-col gap-[1dvh]'>
              {/* Size Picker */}
              {product.size && product.size.length > 0 && (
                <div className="block">
                  <h3 className="font-bold mb-2">Talles:</h3>
                  <SizePicker 
                    sizes={product.size}
                    selectedSize={selectedSize}
                    onSizeSelect={setSelectedSize}
                  />
                  {selectedSize && (
                    <p className="hidden md:block text-sm text-[var(--color-texto-2)] mt-1">
                      Talla seleccionada: {selectedSize}
                    </p>
                  )}
                </div>
              )}

              {/* Color Picker */}
              {product.color && product.color.length > 0 && (
                <div className="flex-1 justify-center">
                  <h3 className="font-bold ml-1">Colores:</h3>
                  <ColorPicker 
                    colors={product.color}
                    selectedColor={selectedColor}
                    onColorSelect={setSelectedColor}
                  />
                  {selectedColor && (
                    <p className="hidden md:block text-sm text-[var(--color-texto-2)] mt-1">
                      Color seleccionado: {selectedColor}
                    </p>
                  )}
                </div>
              )}
            </div>

            <button 
                onClick={onClose}
                className="close-button px-6 py-2 rounded-lg hover:opacity-60 absolute top-0 right-[-.5rem]"
              >
                ✕
              </button>
            <div className="mt-auto flex gap-4 pt-6 absolute bottom-2 right-2">
              <a href={`https://wa.me/${numero}?text=${encodeURIComponent(`${mensaje}"${product.name} ${selectedSize ? `Talla: ${selectedSize}` : ''} ${selectedColor ? `Color: ${selectedColor}` : ''}".`)}`} className="inline-flex items-center ml-auto px-3 py-2 text-sm font-medium text-center text-white bg-[var(--color-elementos-2)] border-2 border-[var(--color-elementos-2)] rounded-lg hover:opacity-60 focus:outline-none">
                Comprar
              </a>
              <button 
                onClick={handleAddToCart} //#
                disabled={
                  (product.color?.length > 0 && !selectedColor) || 
                  (product.size?.length > 0 && !selectedSize)
                }
                className="inline-flex items-center ml-auto px-3 py-2 text-sm font-medium text-center text-[var(--color-elementos-2)] border-2 rounded-lg hover:opacity-60 focus:outline-none"
                >
                Añadir al carrito
              </button>
          </div>
              
            </div>
          </div>
        </div>
      </article>
    </div>
  )
}