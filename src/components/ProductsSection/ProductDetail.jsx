import { useState } from 'react'
import { ColorPicker } from './ColorPicker'
import { SizePicker } from './SizePicker'
import { useCart } from '../CartProvider'//#

export function ProductDetail({ product, onClose }) {
  const { addToCart } = useCart() //#
  const [selectedColor, setSelectedColor] = useState(product.color?.[0] || null)
  const [selectedSize, setSelectedSize] = useState(product.size?.[0] || null)

  const handleAddToCart = () => { //#
    addToCart(product, 1, selectedColor, selectedSize)
    onClose()
  }

  return (
    <div 
      className="fixed inset-0 bg-black/50 flex items-center justify-center"
      style={{ zIndex: 100 }}
      onClick={onClose}
    >
      <article 
        className="bg-[var(--color-elementos)] relative rounded-lg max-w-4xl w-full mx-4 overflow-hidden"
        style={{ zIndex: 101 }}
        onClick={e => e.stopPropagation()}
      >
        <div className="flex gap-6 flex-col md:flex-row overflow-hidden">
          <img 
            src={product.imageUrl} 
            alt={product.name}
            className="rounded-lg w-full md:w-1/2 object-cover "
          />
          
          <div className="flex flex-col flex-1 p-6">
            <h2 className="text-3xl font-bold mb-4">{product.name}</h2>
            <p className="text-[var(--color-texto-2)] mb-4">{product.description}</p>
            
            {/* Size Picker */}
            {product.size && product.size.length > 0 && (
              <div className="mb-4">
                <h3 className="font-bold mb-2">Tallas disponibles:</h3>
                <SizePicker 
                  sizes={product.size}
                  selectedSize={selectedSize}
                  onSizeSelect={setSelectedSize}
                />
                {selectedSize && (
                  <p className="text-sm text-[var(--color-texto-2)] mt-1">
                    Talla seleccionada: {selectedSize}
                  </p>
                )}
              </div>
            )}

            {/* Color Picker */}
            {product.color && product.color.length > 0 && (
              <div>
                <h3 className="font-bold mb-2">Colores disponibles:</h3>
                <ColorPicker 
                  colors={product.color}
                  selectedColor={selectedColor}
                  onColorSelect={setSelectedColor}
                />
                {selectedColor && (
                  <p className="text-sm text-[var(--color-texto-2)] mt-1">
                    Color seleccionado: {selectedColor}
                  </p>
                )}
              </div>
            )}

            <p className="text-2xl font-bold mt-4">${product.price}</p>
            
            <div className="mt-auto flex gap-4 pt-6">
              <button className="inline-flex items-center ml-auto px-3 py-2 text-sm font-medium text-center text-white bg-[var(--color-elementos-2)] border-2 border-[var(--color-elementos-2)] rounded-lg hover:opacity-60 focus:outline-none">
                Comprar
              </button>
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
              <button 
                onClick={onClose}
                className="px-6 py-2 rounded-lg hover:opacity-60 absolute top-0 right-0"
              >
                ✕
              </button>
            </div>
          </div>
        </div>
      </article>
    </div>
  )
}