import React from 'react'
import { Link } from 'react-router-dom'
import WatchList from './WatchList'
const API_IMG = 'https://image.tmdb.org/t/p/w500/'

const TrendingCards = ({ poster_path, vote_average, release_date, overview, name, title, first_air_date, id, original_title }) => {
  return (
    <div className='trending-card'>
      <img className='card-img-top' src={API_IMG + poster_path} alt={`Poster of ${name}`} />
      <div className='card-body'>
        <Link to={`/infoMovies/${id}`}>
          <h3 className='card-title'>{title}</h3>
        </Link>
        <Link to={`/infoSeries/${id}`}>
          <h3 className='card-title'>{name}</h3>
        </Link>
        <WatchList />
        <p className='card-text'>{overview}</p>
        <div className='card-footer'>
          <p className='vote-average'>{vote_average}</p>
          <p className='release-date'>{release_date || first_air_date}</p>
        </div>
      </div>
    </div>
  )
}

export default TrendingCards
