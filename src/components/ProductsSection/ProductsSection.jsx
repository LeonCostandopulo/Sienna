import { useState } from 'react'
import { ProductDetail } from './ProductDetail'
import { products } from '../../constantes.js'
import { useFilter } from '../../context/useFilter'
import { useMemo } from 'react'

export function ProductsSection() {
  const { activeFilter } = useFilter()
  
  const filteredProducts = useMemo(() => {
      if (!activeFilter) return products

      return [...products].sort((a, b) => {
        const aMatch = a.type.includes(activeFilter)
        const bMatch = b.type.includes(activeFilter)
        return bMatch - aMatch
    })
  }, [activeFilter])
  
  const numero = 5491130082379
  const mensaje = 'Hola! Vengo de la página web de Sienna. Quiero comprar: \n'
  
  const [selectedProduct, setSelectedProduct] = useState(null)

  const handleProductClick = (product) => {
    // Iniciar la transición
    if (document.startViewTransition) {
      document.startViewTransition(() => {
        setSelectedProduct(product)
      })
    } else {
      setSelectedProduct(product)
    }
  }

  return (
    <section className='section-products m-2'> 
      <h2 className="mx-auto text-3xl font-bold filter-shadow text-center mt-3 mb-2">Productos</h2>
      <div className="products grid [grid-template-columns:repeat(auto-fill,minmax(200px,1fr))] [grid-auto-rows:minmax(200px,auto)] gap-[.7rem] max-w-[1024px] mx-auto md:grid-cols-3">
        
        {filteredProducts.map((product) => (
          <div 
            key={product.id} 
            className="max-w-sm filter-shadow bg-[var(--color-elementos)] rounded shadow-sm cursor-pointer"
            onClick={() => handleProductClick(product)}
          >
            <div className='flex justify-center bg-[var(--color-elementos-3)] rounded'>
              <img 
                className="object-cover w-full h-70 max-w-[275px]" 
                src={product.imageUrl} 
                alt={product.name}
                // style={{
                //   viewTransitionName: `product-image-${product.id}`
                // }}
              />
            </div>
            <div className="p-5 flex flex-col border-t-1 border-[var(--color-elementos-2)]">
              <h5 
                className="mb-2 text-2xl font-bold tracking-tight"
                // style={{
                //   viewTransitionName: `product-title-${product.id}`
                // }}
              >
                {product.name}
              </h5>
              <p className="mb-3 font-normal text-[var(--color-texto-2)]">
                {product.description}
              </p>
              <div className="flex items-center gap-2">
                <a onClick={(e)=> e.stopPropagation()} href={`https://wa.me/${numero}?text=${encodeURIComponent(`${mensaje}"${product.name}".`)}`} className="inline-flex items-center ml-auto px-3 py-2 text-sm font-medium text-center text-white bg-[var(--color-elementos-2)] border-2 border-[var(--color-elementos-2)] rounded-lg hover:opacity-60 focus:outline-none">
                  Comprar
                </a>
                <button className="inline-flex cursor-pointer items-center px-3 py-2 text-sm font-medium text-center text-[var(--color-elementos-2)] border-2 rounded-lg hover:opacity-60 focus:outline-none">
                  Elegir
                </button>
              </div>
            </div>
          </div>
        ))}

      </div>

      {selectedProduct && (
        <ProductDetail 
          product={selectedProduct} 
          onClose={() => setSelectedProduct(false)}
        />
      )}
    </section>
  )
}