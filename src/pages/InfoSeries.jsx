import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'

const InfoSeries = () => {
  const { id } = useParams()
  const [info, setInfo] = useState({})
  const APIKEY = import.meta.env.VITE_MB_KEY
  const API_IMG = 'https://image.tmdb.org/t/p/w500/'

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/tv/${id}?api_key=${APIKEY}&language=en-US`)
      .then(res => res.json())
      .then(data => {
        console.log(data)
        setInfo(data) // set state to the TV show object, not data.results
      })
      .catch(err => console.log(err))
  }, [id])

  if (!info) {
    return <div>Cargando...</div>
  }

  return (
    <div className='main-content' style={{ padding: '80px', marginLeft: '150px' }}>
      <div className='movie-page'>
        <img className='movie-page__poster' src={API_IMG + info.poster_path} alt={`Poster of ${info.name}`} />
        <h1 className='movie-page__title'>{info.name || info.title}</h1>
        <p className='movie-page__tagline'>{info.tagline}</p>
        <p className='movie-page__overview'>{info.overview}</p>
        <p className='movie-page__vote-average'>Average Rating: {info.vote_average}</p>
        <p className='movie-page__release-date'>Release Date: {info.release_date || info.first_air_date}</p>
        <p className='movie-page__genres'>Genres: {info.genres && info.genres.map(genre => genre.name).join(', ')}</p>
        <p className='movie-page__runtime'>Runtime: {info.runtime || info.episode_run_time} minutes</p>
        <p className='movie-page__status'>Status: {info.status}</p>
        <p className='movie-page__language'>Language: {info.original_language}</p>
        <p className='movie-page__production-companies'>Production Companies: {info.production_companies && info.production_companies.map(company => company.name).join(', ')}</p>
        <p className='movie-page__budget'>Budget: {info.budget && new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(info.budget)}</p>
        <p className='movie-page__revenue'>Revenue: {info.revenue && new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(info.revenue)}</p>
        <p className='movie-page__spoken-languages'>Spoken Languages: {info.spoken_languages && info.spoken_languages.map(lang => lang.name).join(', ')}</p>
      </div>
    </div>

  )
}

export default InfoSeries
