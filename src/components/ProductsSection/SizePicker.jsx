

export function SizePicker({ sizes, selectedSize, onSizeSelect }) {
  if (!sizes || sizes.length === 0) return null;

  return (
    <div className="flex flex-wrap gap-2 my-4">
      {sizes.map((size) => (
        <button
          key={size}
          onClick={() => onSizeSelect(size)}
          className={`
            w-10 h-10 rounded-lg transition-all flex items-center justify-center
            border ${selectedSize === size 
              ? 'border-white bg-[var(--color-elementos-2)]' 
              : 'border-gray-400 hover:border-white'
            }
          `}
          aria-label={`Talla ${size}`}
        >
          {size}
        </button>
      ))}
    </div>
  )
}