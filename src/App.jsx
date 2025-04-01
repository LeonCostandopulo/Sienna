import React from 'react'
import './App.css'

import { WhatsAppButton } from './components/WhatsAppButton'
import { NavList } from './components/Nav/NavList'
import { CategoriesSection } from './components/CategoriesSection/CategoriesSection'
import { OutfitSection } from './components/OutfitSection/OutfitSection'
import { ProductsSection } from './components/ProductsSection/ProductsSection'
import { Header } from './components/Header'


function App() {

  return (
    <>
      <nav className='nav sticky top-0 z-100 bg-[var(--color-fondo)]'> {/*Nav transparente para que se vea el layout del principio, pero cuando bajamos le damos cuerpo. Filtros al costado (hombre/mujer/unisex, tallas disponibles, oversize fit o no sé qué, etc) */} 
        <NavList />
      </nav>
      {/* <div className="hidden"> */}
        <Header />
      {/* </div> */}

      <main className='main'> 

        {/* <div className="hidden"> */}
          <CategoriesSection />
        {/* </div> */}
        <OutfitSection />

        <ProductsSection />

        <WhatsAppButton />
      </main>

      <footer className='footer'>
        footer
      </footer>
    </>
  )
}

export default App
