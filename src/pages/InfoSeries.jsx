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
      <div className='trending-card'>
        <img className='card-img-top' src={API_IMG + info.poster_path} alt={`Poster of ${info.name}`} />
        <div className='card-body'>
          <h3 className='card-title'>{info.name || info.title}</h3>
          <p className='card-text'>{info.overview}</p>
          <div className='card-footer'>
            <p className='vote-average'>{info.vote_average}</p>
            <p className='release-date'>{info.release_date || info.first_air_date}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default InfoSeries
