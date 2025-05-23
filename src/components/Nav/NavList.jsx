import { NavLeft } from './NavLeft'
import { useState, useEffect } from 'react'
import { CartIcon } from './CartIcon'


export function NavList() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      window.history.pushState({ menu: 'nav' }, '')

      const handleClickOutside = (e) => {
        const navLeft = document.getElementById('nav-left')
        if (navLeft && !navLeft.contains(e.target) && !e.target.closest('.nav-left-button')) {
          setIsMenuOpen(false)
        }
      }

      document.addEventListener('click', handleClickOutside)
      return () => {
        document.removeEventListener('click', handleClickOutside)
      }
    }
  }, [isMenuOpen])

  function handleClick(e) {
    e.stopPropagation() 
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <ul className='nav-list flex gap-1 py-2 justify-between md:justify-around items-center font-bold bg-[var(--color-elementos)]'>
      <li onClick={handleClick} className="nav-left-button filter-shadow absolute left-0 px-3 py-1.5">
        <button className="nav-left-open z-100 ml-2 flex items-center">
          <svg 
            version="1.1" 
            id="_x32_" 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 512 512" 
            width="24px" 
            height="24px" 
            fill="var(--color-texto)" 
            stroke="var(--color-texto)" 
            strokeWidth="0.00512">
            <g 
            id="SVGRepo_bgCarrier" 
            strokeWidth="0">
              </g>
            <g 
            id="SVGRepo_tracerCarrier" 
            strokeLinecap="round" 
            strokeLinejoin="round">
            </g>
            <g id="SVGRepo_iconCarrier">
              <g> <rect y="16" className="st0" width="512" height="96">
                </rect> 
                <rect y="208" className="st0" width="512" height="96">
                  </rect> <rect y="400" className="st0" width="512" height="96"></rect> 
                  </g> </g>
          </svg>
        </button>

        <div className={`${isMenuOpen ? 'flex' : 'hidden'} xl:opacity-0 xl:hover:opacity-100 transition-opacity duration-300 ease-in-out delay-75`}>
          <NavLeft />
        </div>
      </li>

      <li className="nav-logo filter-shadow w-fit m-auto text-2xl absolute right-0 left-0 text-center cursor-pointer">
        <a href="https://www.instagram.com/sienna.jma?" target='_blank'>
          S I E N N A
        </a>
      </li>

      <div className="flex items-center gap-4 md:gap-10 ml-auto mr-2 md:mr-15">
        <li className="nav-search filter-shadow">
          <a href="#products-section">
            <svg 
            width="24px" 
            height="24px" 
            viewBox="0 0 24 24" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg" 
            stroke="var(--color-white)">
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
              <g id="SVGRepo_iconCarrier"> 
                <path d="M14.9536 14.9458L21 21M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="var(--color-white)" strokeWidth="2.04" strokeLinecap="round" strokeLinejoin="round"  ></path> 
              </g>
            </svg>
          </a>
        </li>

        <li className='nav-item filter-shadow'>
          <a href="https://www.instagram.com/sienna.jma">
            <svg
              fill='var(--color-white)'
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </a>
        </li>

        <CartIcon />
      </div>
    </ul>
  )
}
