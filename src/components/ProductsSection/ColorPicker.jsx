import { colorMap } from "../../constantes";

export function ColorPicker({ colors, selectedColor, onColorSelect }) {
  if (!colors || colors.length === 0) return null;

  return (
    <div className="flex flex-wrap gap-2 my-4 max-w-65">
      {colors.map((color) => (
        <button
          key={color}
          onClick={() => onColorSelect(color)}
          className={`
            w-6 h-6 rounded-full border-1 transition-all p-2 filter-shadow
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