import { CategoriesCard } from './CategoriesCard'


export function CategoriesSection() {
  return (
    <section className="categories p-2 flex flex-col md:flex-row justify-center items-center gap-4 bg-[var(--color-fondo)] text-[var(--color-texto)]">
      <CategoriesCard text={"Remeras"}    img={'/src/assets/remera-ejemplo.jpg'}/>
      <CategoriesCard text={"Pantalones"} img={'/src/assets/pantalon-ejemplo.jpg'}/>
    </section>
  )
}