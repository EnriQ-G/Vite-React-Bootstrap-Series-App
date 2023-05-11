import React, { createContext, useState } from 'react'

const FavoritesContext = createContext()

function FavoritesProvider ({ children }) {
  const [favorites, setFavorites] = useState([])

  const addToFavorites = (item) => {
    setFavorites([...favorites, item])
  }

  const removeFromFavorites = (item) => {
    const newFavorites = favorites.filter((favorite) => favorite !== item)
    setFavorites(newFavorites)
  }

  return (
    <FavoritesContext.Provider value={{ favorites, addToFavorites, removeFromFavorites }}>
      {children}
    </FavoritesContext.Provider>
  )
}

export { FavoritesContext, FavoritesProvider }
