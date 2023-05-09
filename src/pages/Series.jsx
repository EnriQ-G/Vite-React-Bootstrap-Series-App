import React, { useState, useEffect } from 'react'
import TrendingCards from '../components/TrendingCards'

const Peliculas = () => {
  const [movies, setMovies] = useState([])
  const APIKEY = import.meta.env.VITE_MB_KEY

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/trending/tv/week?api_key=${APIKEY}`)
      .then(res => res.json())
      .then(data => {
        // const { data } = results
        console.log(data)
        setMovies(data.results)
      }).catch(err => console.log(err))
  }, [])

  return (
    <div className='main-content' style={{ padding: '80px', marginLeft: '150px' }}>

      <div className='trending-cards-container'>
        {movies.map((movie) => (
          <TrendingCards key={movie.id} {...movie} />
        ))}
      </div>
    </div>
  )
}

export default Peliculas
