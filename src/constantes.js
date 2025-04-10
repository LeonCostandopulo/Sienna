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
    description: '',
    size: [3, 2, 1],
    color: ["Negro", "Blanco","Amarillo", "Arena", "Bordó", "Celeste", "Verde Rolex", "Rojo", "Francia", "Fucsia", "Gris Claro","Gris","Gris Oscuro", "Naranja",  "Rosa Bebé", "Verde Militar", "Violeta", "Lila", "Celeste2"],
    type: 'remera oversize masculina',
  },
  {
    id: 2,
    name: 'Bermuda',
    price: 16000,
    imageUrl: bermuda,
    description: '',
    size: ['XL', 'L', 'M', 'S'],
    color: [ "Negro","Blanco", "Crudo"],
    type: 'bermuda pantalon masculino',
  },
  {
    id: 3,
    name: 'Short',
    price: 16000,
    imageUrl: short,
    description: '',
    size: [2, 1],
    color: ["Negro", "Crudo"],
    type: 'pantalon corto femenino',
  },
  {
    id: 4,
    name: 'Chomba',
    price: 18000,
    imageUrl: chomba,
    description: '',
    size: [3, 2, 1],
    color: ["Negro", "Blanco"],
    type: 'remera chomba masculino',
  },
  {
    id: 5,
    name: 'Buzo Oversize',
    price: 35000,
    imageUrl: buzoOversize,
    description: '',
    size: [3, 2, 1],
    color: ["Negro", "Blanco", "Francia", "Gris", "Rosa Bebé", "Marino"],
    type: 'buzo oversize capucha',
  },
  {
    id: 6,
    name: 'Buzo Oversize sin capucha',
    price: 29000,
    imageUrl: buzoOversize2,
    description: '',
    size: [3, 2, 1],
    color: ["Negro", "Blanco", "Azul", "Crema"],
    type: 'buzo oversize ',
  },
]

export const colorMap = {
  "Amarillo": "#f3e9b8",
  "Arena": "#D2B48C",
  "Azul": "#0000FF",
  "Blanco": "#FFFFFF",
  "Bordó": "#49001e",
  "Celeste": "#93b7cb",
  "Crema": "#FFFDD0",
  "Crudo": "#F5F5DC", 
  "Francia": "#001eb8",
  "Fucsia": "#c50e87",
  "Gris Claro": "#8e8e8e",
  "Gris": "#9fa3a4",
  "Gris Oscuro": "#686b68",
  "Marino": "#05133c", 
  "Naranja": "#eb7601",
  "Natural": "#F5DEB3", 
  "Negro": "#000000",
  "Rojo": "#8d0000",
  "Rosa Bebé": "#e6b6c4",
  "Verde Rolex": "#116E31",
  "Verde Militar": "#4B5320",
  "Violeta": "#4e01b5"
}