


export function CategoriesCard({text, img}) {
  const bg = `bg-[url('${img}')]`

  return (
    <div className={`category ${bg} aspect-square w-full flex items-center justify-center bg-center bg-cover bg-no-repeat rounded-lg text-[var(--color-texto)] text-2xl font-bold p-4 `}>
      <p className="filter-shadow">
        {text}
      </p>
    </div>
  )
}