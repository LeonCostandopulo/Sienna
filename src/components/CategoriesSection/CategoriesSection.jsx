import { CategoriesCard } from './CategoriesCard'


export function CategoriesSection() {
  return (
    <section className="categories my-[2rem] flex flex-col max-w-[1024px] mx-auto md:flex-row justify-center items-center gap-4  text-[var(--color-texto)] ">
      <CategoriesCard text={"Remeras"}    img={'/src/assets/remera-ejemplo.jpg'}/>
      <CategoriesCard text={"Pantalones"} img={'/src/assets/pantalon-ejemplo.jpg'}/>
    </section>
  )
}