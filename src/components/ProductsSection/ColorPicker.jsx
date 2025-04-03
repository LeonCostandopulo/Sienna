export function ColorPicker({ colors, selectedColor, onColorSelect }) {
  if (!colors || colors.length === 0) return null;

  // Mapeo de nombres de colores a valores CSS
  const colorMap = {
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

  return (
    <div className="flex flex-wrap gap-2 my-4 max-w-65">
      {colors.map((color) => (
        <button
          key={color}
          onClick={() => onColorSelect(color)}
          className={`
            w-6 h-6 rounded-full border-2 transition-all
            ${selectedColor === color 
              ? 'border-white scale-110' 
              : 'border-transparent hover:scale-105'
            }
          `}
          style={{
            backgroundColor: colorMap[color] || color.toLowerCase(),
            boxShadow: selectedColor === color ? '0 0 0 2px var(--color-elementos-2)' : 'none'
          }}
          title={color}
          aria-label={`Color ${color}`}
        />
      ))}
    </div>
  )
}