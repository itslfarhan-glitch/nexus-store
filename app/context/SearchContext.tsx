"use client"

import { createContext, useContext, useState } from "react"

type SearchContextType = {
  keyword: string
  setKeyword: (value: string) => void
}

const SearchContext = createContext<SearchContextType | undefined>(undefined)

export function SearchProvider({ children }: { children: React.ReactNode }) {
  const [keyword, setKeyword] = useState("")

  return (
    <SearchContext.Provider value={{ keyword, setKeyword }}>
      {children}
    </SearchContext.Provider>
  )
}

export function useSearch() {
  const context = useContext(SearchContext)
  if (!context) {
    throw new Error("useSearch must be used inside SearchProvider")
  }
  return context
}
