import React from 'react'
import './App.css'

import { WhatsAppButton } from './components/WhatsAppButton'
import { NavList } from './components/Nav/NavList'
import { CategoriesSection } from './components/CategoriesSection/CategoriesSection'
// import { OutfitSection } from './components/OutfitSection/OutfitSection'
import { ProductsSection } from './components/ProductsSection/ProductsSection'
import { Header } from './components/Header'
import { CartProvider } from './components/CartProvider'
import { FilterProvider } from './context/FilterProvider'

function App() {
  return (
    <>
    <FilterProvider>
      <CartProvider>
        <nav className='nav sticky top-0 z-100 bg-[var(--color-fondo)]'> {/*Nav transparente para que se vea el layout del principio, pero cuando bajamos le damos cuerpo. Filtros al costado (hombre/mujer/unisex, tallas disponibles, oversize fit o no sé qué, etc) */} 
          <NavList />
        </nav>

        <Header />

        <main className='main'> 
          <CategoriesSection />

          <ProductsSection />

          <WhatsAppButton />
        </main>

        <footer className='footer flex justify-center items-center h-50 bg-gray-900 gap-1 text-white'>
          Developed by 
          <span className='font-bold'>León Costandopulo</span>
        </footer>
      </CartProvider>
    </FilterProvider>
    </>
  )
}

export default App
