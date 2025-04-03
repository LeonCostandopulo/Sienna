import remeraOversize   from './assets/products/remera-oversize.webp'
import bermuda          from './assets/products/bermuda.webp'
import short            from './assets/products/short.webp'
import chomba           from './assets/products/chomba.webp'
import buzoOversize     from './assets/products/buzo-oversize-1.webp'
import buzoOversize2    from './assets/products/buzo-oversize-2.webp'


export const products = [
  {
    id: 1,
    name: 'Remera Oversize',
    price: 12500,
    imageUrl: remeraOversize,
    description: 'Descripción del producto 1',
    size: [1, 2, 3],
    color: ["Negro", "Blanco","Amarillo", "Arena", "Bordó", "Celeste", "Crema", "Verde Rolex", "Rojo", "Francia", "Fucsia", "Gris", "Naranja",  "Rosa Bebé", "Verde Militar", "Violeta"],
    type: 'remera oversize masculina',
  },
  {
    id: 2,
    name: 'Bermuda',
    price: 16000,
    imageUrl: bermuda,
    description: 'Descripción del producto 2',
    size: ['S', 'M', 'L', 'XL'],
    color: [ "Negro","Blanco", "Crudo", "Natural"],
    type: 'bermuda pantalon masculino',
  },
  {
    id: 3,
    name: 'Short',
    price: 16000,
    imageUrl: short,
    description: 'Descripción del producto 3',
    size: [1, 2],
    color: ["Negro", "Crudo"],
    type: 'pantalon corto femenino',
  },
  {
    id: 4,
    name: 'Chomba',
    price: 18000,
    imageUrl: chomba,
    description: 'Descripción del producto 4',
    size: [1, 2, 3],
    color: ["Negro", "Blanco"],
    type: 'remera chomba masculino',
  },
  {
    id: 5,
    name: 'Buzo Oversize',
    price: 35000,
    imageUrl: buzoOversize,
    description: 'Descripción del producto 5',
    size: [1, 2, 3],
    color: ["Negro", "Blanco", "Francia", "Gris", "Rosa Bebé", "Marino"],
    type: 'buzo oversize capucha',
  },
  {
    id: 6,
    name: 'Buzo Oversize',
    price: 29000,
    imageUrl: buzoOversize2,
    description: 'Descripción del producto 6',
    size: [1, 2, 3],
    color: ["Negro", "Blanco", "Azul", "Crema"],
    type: 'buzo oversize ',
  },
]