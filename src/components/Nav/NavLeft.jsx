import { useState } from 'react'

export function NavLeft() {
  const [activeDropdown, setActiveDropdown] = useState(null)

  const handleClick = (e, dropdownName) => {
    e.stopPropagation()
    setActiveDropdown(activeDropdown === dropdownName ? null : dropdownName)
  }

  return (
    <ul id="nav-left" className="nav-left flex flex-col fixed bg-[var(--color-light-brown)] left-0 top-0 gap-5 font-bold h-screen justify-center w-2xs p-5 transition-opacity duration-300 ease-in-out">
      <div className="relative">
        <button 
          onClick={(e) => handleClick(e, 'pagos')}
          className="text-[var(--color-texto)] bg-transparent hover:opacity-80 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center"
        >
          Formas de pago
          <svg className="w-2.5 h-2.5 ms-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
          </svg>
        </button>

        <div className={`absolute left-0 z-10 ${activeDropdown === 'pagos' ? 'block' : 'hidden'}  bg-gray-200 divide-y divide-gray-100 rounded-lg shadow-sm w-44`}>
          <ul className="py-2 text-sm text-gray-700">
            {/* <li>
              <a href="#" className="block px-4 py-2 hover:opacity-80">Efectivo</a>
            </li> */}
            <li>
              <a href="#" className="block px-4 py-2 hover:opacity-80">Transferencia</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="relative">
        <button 
          onClick={(e) => handleClick(e, 'redes')}
          className="text-[var(--color-texto)] bg-transparent hover:opacity-80 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center"
        >
          Redes
          <svg className="w-2.5 h-2.5 ms-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
          </svg>
        </button>

        <div className={`absolute left-0 z-10 ${activeDropdown === 'redes' ? 'block' : 'hidden'} bg-gray-200 divide-y divide-gray-100 rounded-lg shadow-sm w-44`}>
          <ul className="py-2 text-sm text-gray-700">
            <li>
              <a href="https://www.instagram.com/sienna.jma" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 hover:bg-gray-100">
                Instagram: @sienna.jma
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="relative">
        <button 
          onClick={(e) => handleClick(e, 'locales')}
          className="text-[var(--color-texto)] bg-transparent hover:opacity-80 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center"
        >
          Locales
          <svg className="w-2.5 h-2.5 ms-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
          </svg>
        </button>

        <div className={`absolute left-0 z-10 ${activeDropdown === 'locales' ? 'block' : 'hidden'} bg-gray-200 divide-y divide-gray-100 rounded-lg shadow-sm w-44`}>
          <ul className="py-2 text-sm text-gray-700">
            <li>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100">Por el momento nos manejamos únicamente por WhatsApp, Instagram y por esta página web.</a>
            </li>
          </ul>
        </div>
      </div>
    </ul>
  )
}