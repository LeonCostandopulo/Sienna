import React,{ useEffect , useState } from 'react'
import './App.css'

import { WhatsAppButton } from './components/WhatsAppButton'
import { NavList } from './components/Nav/NavList'
import { CategoriesSection } from './components/CategoriesSection/CategoriesSection'
// import { OutfitSection } from './components/OutfitSection/OutfitSection'
import { ProductsSection } from './components/ProductsSection/ProductsSection'
import { Header } from './components/Header'
import { CartProvider } from './components/CartProvider'
import { FilterProvider } from './context/FilterProvider'
import { ToastAlert } from './components/ToastAlert'
function App() {
  const [showToast, setShowToast] = useState(false);
  
  useEffect(() => {
    let backPressCount = 0;
    let timeoutId;

    const handleBackButton = (e) => {
      if (backPressCount === 0) {
        e.preventDefault();
        window.history.pushState(null, '', window.location.pathname);

        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });

        setShowToast(true);
        backPressCount++;

        timeoutId = setTimeout(() => {
          backPressCount = 0;
          setShowToast(false);
        }, 3000);
      }
    };

    if (window.navigator.userAgent.includes('Android')) {
      document.addEventListener('backbutton', handleBackButton, false);
    }

    window.addEventListener('beforeunload', (e) => {
      if (backPressCount === 0) {
        e.preventDefault();

        const message = '¿Estás seguro de que deseas salir?';
        e.returnValue = message; //% Chrome todavía lo necesita xd
        return message;
      }
    });

    window.history.pushState(null, '', window.location.pathname);
    window.addEventListener('popstate', handleBackButton);

    return () => {
      window.removeEventListener('popstate', handleBackButton);
      window.removeEventListener('beforeunload', handleBackButton);
      if (window.navigator.userAgent.includes('Android')) {
        document.removeEventListener('backbutton', handleBackButton);
      }
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <>
    <FilterProvider>
      <CartProvider>
        {showToast && (
          <ToastAlert 
            message={"Presiona atrás dos veces para salir"}
            onClose={() => setShowToast(false)}
          />
        )}
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
