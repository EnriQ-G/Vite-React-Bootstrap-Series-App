import React from 'react'

const API_IMG = 'https://image.tmdb.org/t/p/w500/'

const MovieCards = ({ title, poster_path, vote_average, release_date, overview }) => {
  return (
    <div className='movie-card'>
      <img className='card-img-top' src={API_IMG + poster_path} alt={`Poster of ${title}`} />
      <div className='card-body'>
        <h3 className='card-title'>{title}</h3>
        <p className='card-text'>{overview}</p>
        <div className='card-footer'>
          <p className='vote-average'>{vote_average}</p>
          <p className='release-date'>{release_date}</p>
        </div>
      </div>
    </div>
  )
}

export default MovieCards
