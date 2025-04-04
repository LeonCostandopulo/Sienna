


export function CategoriesCard({text, img}) {
  return (
    <div 
    className={`category aspect-square w-full flex items-center justify-center bg-center bg-cover bg-no-repeat md:rounded-lg text-[var(--color-texto)] text-2xl font-bold p-4 `}
    style={{backgroundImage: `url(${img})`}} 
    >
      <p className="filter-shadow">
        {text}
      </p>
    </div>
  )
}