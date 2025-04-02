import { CategoriesCard } from './CategoriesCard'
import remeraEjemplo   from '../../assets/remera-ejemplo.jpg'
import pantalonEjemplo from '../../assets/pantalon-ejemplo.jpg'

export function CategoriesSection() {
  return (
    <section className="categories my-[2rem] flex flex-col max-w-[1024px] mx-auto md:flex-row justify-center items-center gap-4  text-[var(--color-texto)] ">
      <CategoriesCard text={"Remeras"} img={remeraEjemplo}/>
      <CategoriesCard text={"Pantalones"} img={pantalonEjemplo}/>
    </section>
  )
}