import React, { useContext } from 'react'
import { FavoritesContext } from '../context/FavoritesContext'
import TrendingCards from '../components/TrendingCards'

const MiLista = () => {
  const { favorites } = useContext(FavoritesContext)

  return (
    <>

      <div className='main-content' style={{ padding: '80px', marginLeft: '200px' }}>
        <div style={{ textAlign: 'center' }}>
          <h1 style={{ backgroundColor: 'orangered', color: 'black', display: 'inline-block' }}>Favoritos</h1>
        </div>
        <h1 />
        <div className='trending-cards-container'>
          {favorites.length === 0 && <p style={{ backgroundColor: 'orange', color: 'black', display: 'inline-block' }}>You haven't added any favorites yet.</p>}
          {favorites.map((movie) => (
            <TrendingCards key={movie.id} {...movie} />
          ))}
        </div>
      </div>
    </>
  )
}

export default MiLista
