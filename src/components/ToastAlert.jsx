import { useState, useEffect } from 'react'

export function ToastAlert({ message, duration = 1000, onClose }) {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false)
      onClose?.()
    }, duration)

    return () => clearTimeout(timer)
  }, [duration, onClose])

  if (!isVisible) return null

  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 bg-[var(--color-elementos-2)] text-white px-4 py-2 rounded-lg shadow-lg z-100">
      {message}
    </div>
  )
}