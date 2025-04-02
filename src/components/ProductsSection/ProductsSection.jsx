
export function ProductsSection() {
  const products = [ // id:number , name:string , price:number , imageUrl:string , description:string , type:string
    {
      id: 1,
      name: 'Remera 1',
      price: 100,
      imageUrl: '/src/assets/products/remera-1.jpg',
      description: 'Descripción del producto 1',
      type: 'remera',
    },
    {
      id: 2,
      name: 'Remera 2',
      price: 200,
      imageUrl: '/src/assets/products/remera-2.jpg',
      description: 'Descripción del producto 2',
      type: 'remera',
    },
    {
      id: 3,
      name: 'Pantalon 3',
      price: 300,
      imageUrl: '/src/assets/products/pantalon-3.jpg',
      description: 'Descripción del producto 3',
      type: 'pantalon',
    },
    {
      id: 4,
      name: 'Pantalon 4',
      price: 100,
      imageUrl: '/src/assets/products/pantalon-4.jpg',
      description: 'Descripción del producto 4',
      type: 'pantalon',
    },
    {
      id: 5,
      name: 'Buzo 5',
      price: 200,
      imageUrl: '/src/assets/products/buzo-5.jpg',
      description: 'Descripción del producto 5',
      type: 'buzo',
    },
    {
      id: 6,
      name: 'Buzo 6',
      price: 300,
      imageUrl: '/src/assets/products/buzo-6.jpg',
      description: 'Descripción del producto 6',
      type: 'buzo',
    },
  ]

  return (
    <section className='section-products m-2'> 
      <h2 className="mx-auto text-3xl font-bold filter-shadow text-center mt-3 mb-2">Productos</h2>
      {/* Productos (Varias secciones para elegir, una elegida por default)  */}
      <div className="products grid [grid-template-columns:repeat(auto-fill,minmax(200px,1fr))] [grid-auto-rows:minmax(200px,auto)] gap-[.7rem] max-w-[1024px] mx-auto md:grid-cols-3">
        {
          products.map((product) => (
            <div key={product.id} className="max-w-sm filter-shadow bg-[var(--color-elementos)] border-[var(--color-elementos)] border rounded shadow-sm ">
                <a href="#">
                    <img className="rounded-tr rounded-tl object-cover w-full h-70" src={product.imageUrl} alt={product.name} />
                </a>
                <div className="p-5 flex flex-col">
                    <a href="#">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight ">
                          {product.name}
                        </h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-400">
                      {product.description}
                    </p>
                    <a href="#" className="inline-flex items-center ml-auto px-3 py-2 text-sm font-medium text-center text-white bg-[var(--color-elementos-2)] rounded-lg hover:opacity-60 focus:outline-none  ">
                        Añadir al carrito
                    </a>
                </div>
            </div>
          ))
        }
      </div>
    </section>
  )
}