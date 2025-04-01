import { NavLeft } from './NavLeft'


export function NavList() {
  return (
    <ul className='nav-list flex gap-1 justify-between items-center font-bold'>
      <li className="nav-left-button filter-shadow  ">
        ===
        <NavLeft />
      </li>

      <li className="nav-logo filter-shadow ">Sienna</li>

      <div className="right flex gap-2">
        <li className="nav-search filter-shadow">Buscar</li>
        <li className='nav-item filter-shadow'>Instagram</li>
        <li className='nav-item filter-shadow'>Carrito</li>
      </div>
    </ul>
  )
}