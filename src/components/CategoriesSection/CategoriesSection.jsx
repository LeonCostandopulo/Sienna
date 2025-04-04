import { CategoriesCard } from './CategoriesCard'
import remeraEjemplo   from '../../assets/remera-ejemplo.jpg'
import pantalonEjemplo from '../../assets/pantalon-ejemplo.jpg'
import { useFilter } from '../../context/useFilter'

export function CategoriesSection() {
  const { activeFilter, setActiveFilter } = useFilter()

  const handleFilterClick = (filterType) => {
    setActiveFilter(activeFilter === filterType ? null : filterType)
  }

  return (
    <section className="categories my-[2rem] flex flex-col max-w-[1024px] mx-auto md:flex-row justify-center items-center gap-4  text-[var(--color-texto)] ">
      <a 
        href="#products-section"
        style={{
          transform: activeFilter === 'remera' ? 'scale(1.1)' : 'none',
          border: activeFilter === 'remera' ? '2px solid var(--color-elementos-2)' : 'none',
          zIndex: activeFilter === 'remera' ? '10' : '0'
        }}
        onClick={()=>handleFilterClick("remera")} 
        className={`w-full cursor-pointer transition-all`}>
        <CategoriesCard text={"Remeras"} img={remeraEjemplo}/>
      </a>

      <a 
        href="#products-section"
        style={{
          transform: activeFilter === 'pantalon' ? 'scale(1.1)' : 'none',
          border: activeFilter === 'pantalon' ? '2px solid var(--color-elementos-2)' : 'none',
          zIndex: activeFilter === 'pantalon' ? '10' : '0'
        }}
        onClick={()=>handleFilterClick("pantalon")} 
        className={`w-full cursor-pointer transition-all`}>
        <CategoriesCard text={"Pantalones"} img={pantalonEjemplo}/>
      </a>
    </section>
  )
}