//##
import { useCart } from '../ProductsSection/useCart'//#
import { useState, useEffect } from 'react'
import { CartDetail } from './CartDetail'

export function CartIcon() {
  const [isOpen, setIsOpen] = useState(false)
  const { cart } = useCart()

  const [animate, setAnimate] = useState(false)  
  const [prevCount, setPrevCount] = useState(0)

  const itemCount = cart.reduce((total, item) => total + item.quantity, 0)
  
  useEffect(() => {
    if (isOpen) {
      window.history.pushState({ modal: 'cart' }, '')
    }

    const handlePopState = () => {
      setIsOpen(false)
    }

    window.addEventListener('popstate', handlePopState)
    return () => window.removeEventListener('popstate', handlePopState)
  }, [isOpen])
  
  useEffect(() => {
    // Only animate if cart is closed
    if (itemCount > prevCount && !isOpen) {
      setAnimate(true)
      const timer = setTimeout(() => setAnimate(false), 500)
      return () => clearTimeout(timer)
    }
    setPrevCount(itemCount)
  }, [itemCount, prevCount, isOpen])


  return (
    <li className={`nav-item relative cursor-pointer ${animate ? 'cart-animation' : ''}`}>
      <div onClick={() => setIsOpen(!isOpen)}>
      <svg 
      fill="var(--color-white)"
      height="24px" 
      width="24px" 
      version="1.1" 
      id="Capa_1" 
      xmlns="http://www.w3.org/2000/svg"  
      viewBox="0 0 483.1 483.1" 
      stroke="var(--color-white)" 
      strokeWidth="24.6381" >
        <g 
        id="SVGRepo_bgCarrier" 
        strokeWidth="0">
          </g>
          <g 
          id="SVGRepo_tracerCarrier" 
          strokeLinecap="round" 
          strokeLinejoin="round">
            </g>
            <g 
            id="SVGRepo_iconCarrier"> 
            <g> 
        <path d="M434.55,418.7l-27.8-313.3c-0.5-6.2-5.7-10.9-12-10.9h-58.6c-0.1-52.1-42.5-94.5-94.6-94.5s-94.5,42.4-94.6,94.5h-58.6 c-6.2,0-11.4,4.7-12,10.9l-27.8,313.3c0,0.4,0,0.7,0,1.1c0,34.9,32.1,63.3,71.5,63.3h243c39.4,0,71.5-28.4,71.5-63.3 C434.55,419.4,434.55,419.1,434.55,418.7z M241.55,24c38.9,0,70.5,31.6,70.6,70.5h-141.2C171.05,55.6,202.65,24,241.55,24z M363.05,459h-243c-26,0-47.2-17.3-47.5-38.8l26.8-301.7h47.6v42.1c0,6.6,5.4,12,12,12s12-5.4,12-12v-42.1h141.2v42.1 c0,6.6,5.4,12,12,12s12-5.4,12-12v-42.1h47.6l26.8,301.8C410.25,441.7,389.05,459,363.05,459z"></path> </g> </g>
      </svg>
      {itemCount > 0 && (
        <span className="absolute -top-2 -right-2 bg-[var(--color-elementos-2)] text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
          {itemCount}
        </span>
      )}
      </div>

      {isOpen && <CartDetail onClose={() => setIsOpen(false)} />}
    </li>
  )
}
//##