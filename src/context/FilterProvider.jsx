import { useState } from 'react'
import { FilterContext } from './FilterContext'

export function FilterProvider({ children }) {
  const [activeFilter, setActiveFilter] = useState(null)

  return (
    <FilterContext.Provider value={{ activeFilter, setActiveFilter }}>
      {children}
    </FilterContext.Provider>
  )
}