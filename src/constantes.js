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
    size: [3, 2, 1],
    color: ["Negro", "Blanco","Amarillo", "Arena", "Bordó", "Celeste", "Crema", "Verde Rolex", "Rojo", "Francia", "Fucsia", "Gris", "Naranja",  "Rosa Bebé", "Verde Militar", "Violeta"],
    type: 'remera oversize masculina',
  },
  {
    id: 2,
    name: 'Bermuda',
    price: 16000,
    imageUrl: bermuda,
    description: 'Descripción del producto 2',
    size: ['XL', 'L', 'M', 'S'],
    color: [ "Negro","Blanco", "Crudo", "Natural"],
    type: 'bermuda pantalon masculino',
  },
  {
    id: 3,
    name: 'Short',
    price: 16000,
    imageUrl: short,
    description: 'Descripción del producto 3',
    size: [2, 1],
    color: ["Negro", "Crudo"],
    type: 'pantalon corto femenino',
  },
  {
    id: 4,
    name: 'Chomba',
    price: 18000,
    imageUrl: chomba,
    description: 'Descripción del producto 4',
    size: [3, 2, 1],
    color: ["Negro", "Blanco"],
    type: 'remera chomba masculino',
  },
  {
    id: 5,
    name: 'Buzo Oversize',
    price: 35000,
    imageUrl: buzoOversize,
    description: 'Descripción del producto 5',
    size: [3, 2, 1],
    color: ["Negro", "Blanco", "Francia", "Gris", "Rosa Bebé", "Marino"],
    type: 'buzo oversize capucha',
  },
  {
    id: 6,
    name: 'Buzo Oversize',
    price: 29000,
    imageUrl: buzoOversize2,
    description: 'Descripción del producto 6',
    size: [3, 2, 1],
    color: ["Negro", "Blanco", "Azul", "Crema"],
    type: 'buzo oversize ',
  },
]

export const colorMap = {
  "Amarillo": "#FFD700",
  "Arena": "#D2B48C",
  "Azul": "#0000FF",
  "Blanco": "#FFFFFF",
  "Bordó": "#800000",
  "Celeste": "#87CEEB",
  "Crema": "#FFFDD0",
  "Crudo": "#F5F5DC", 
  "Francia": "#002395",
  "Fucsia": "#FF00FF",
  "Gris": "#808080",
  "Marino": "#000080", 
  "Naranja": "#FFA500",
  "Natural": "#F5DEB3", 
  "Negro": "#000000",
  "Rojo": "#FF0000",
  "Rosa Bebé": "#F4C2C2",
  "Verde Rolex": "#116E31",
  "Verde Militar": "#4B5320",
  "Violeta": "#8A2BE2"
}