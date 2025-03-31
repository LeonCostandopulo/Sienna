import React from 'react'
import './App.css'

function App() {

  return (
    <>
      <header className='header w-full h-10 sticky top-0 flex items-center justify-center'>Fotos facheras de fondo para dar una buena impresión</header>
      
      <nav className='nav'>Nav transparente para que se vea el layout del principio, pero cuando bajamos le damos cuerpo. Filtros al costado (hombre/mujer/unisex, tallas disponibles, oversize fit o no sé qué, etc) </nav>
      
      <main className='main'> nav al costado
        <section className='section-outfits'>Outfits Armados (clickea y comprá)</section>
        <section className='section-products'> Productos (Varias secciones para elegir, una elegida por default) </section>
        <article className='floating-whatsapp'>whastapp button</article>
      </main>

      <footer className='footer'></footer>
    </>
  )
}

export default App
