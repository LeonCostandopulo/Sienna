import { NavLeft } from './NavLeft'


export function NavList() {

  function handleClick() {
    const nav = document.getElementById('nav-left');
    nav.classList.toggle('hidden');
    nav.classList.toggle('flex');
    nav.classList.toggle('opacity-0');
  }
  return (
    <ul className='nav-list flex gap-1 py-2 justify-between md:justify-around items-center font-bold bg-[var(--color-elementos)]'>
      <li onClick={handleClick} className="nav-left-button filter-shadow absolute left-0">
        ===
        <NavLeft />
      </li>

      <li className="nav-logo filter-shadow m-auto text-2xl absolute right-0 left-0 text-center">
        Sienna
      </li>

      <div className="right flex items-center gap-4 md:gap-10 ml-auto mr-0 md:mr-15">
        <li className="nav-search filter-shadow">
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
        </li>

        <li className='nav-item filter-shadow'>
          <svg
            fill='var(--color-white)'
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
          </svg>
        </li>

        <li className="nav-item filter-shadow">
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
        </li>
      </div>
    </ul>
  )
}
