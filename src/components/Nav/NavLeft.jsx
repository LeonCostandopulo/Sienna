


export function NavLeft() {
  return (
    <ul id="nav-left" className="nav-left a flex-col hidden lg:flex opacity-0 hover:opacity-100 absolute bg-[var(--color-light-brown)] top-0 gap-5 font-bold h-dvh justify-center w-2xs p-5 transition-opacity duration-300 ease-in-out">
      <li className="nav-left-items">Formas de pago</li>
      <li className="nav-left-items">Redes</li>
      <li className="nav-left-items">Locales</li>
    </ul>
  )
}