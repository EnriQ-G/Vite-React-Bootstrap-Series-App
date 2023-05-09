import React, { useState, useEffect } from 'react'
import MovieCards from '../components/MovieCards'

const Peliculas = () => {
  const [movies, setMovies] = useState([])
  const APIKEY = import.meta.env.VITE_MB_KEY

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/trending/all/week?api_key=${APIKEY}`)
      .then(res => res.json())
      .then(data => {
        // const { data } = results
        console.log(data)
        setMovies(data.results)
      }).catch(err => console.log(err))
  }, [])

  return (
    <div className='main-content' style={{ padding: '20px', marginLeft: '220px' }}>

      <div className='movie-cards'>
        {movies.map((movie) => (
          <MovieCards key={movie.id} {...movie} />
        ))}
      </div>
    </div>
  )
}

export default Peliculas
