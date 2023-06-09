import { useState } from 'react'
import SearchBar from '../components/Searchbar.jsx'
import MovieCards from '../components/MovieCards.jsx'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

function App () {
  const [movies, setMovies] = useState([])
  const [series, setSeries] = useState([])
  const APIKEY = import.meta.env.VITE_MB_KEY
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3
  }

  const sendSearch = (search) => {
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${APIKEY}&language=en-US&query=${search}&page=1&include_adult=false`)
      .then(res => res.json())
      .then(data => {
        // const { data } = results
        console.log(data)
        setMovies(data.results)
      }).catch(err => console.log(err))
  }

  const sendSearch1 = (search) => {
    fetch(`https://api.themoviedb.org/3/search/tv?api_key=${APIKEY}&language=en-US&query=${search}&page=1&include_adult=false`)
      .then(res => res.json())
      .then(data => {
        // const { data } = results
        console.log(data)
        setSeries(data.results)
      }).catch(err => console.log(err))
  }

  return (
    <>
      <h1 />
      <SearchBar handleSearch={sendSearch} handleSearchSeries={sendSearch1} />
      <div style={{ textAlign: 'center' }}>
        <h1 style={{ backgroundColor: 'orangered', color: 'black', display: 'inline-block' }}>Peliculas</h1>
      </div>
      <Slider {...settings}>
        {movies.map((movie) => (
          <MovieCards key={movie.id} {...movie} />
        ))}
      </Slider>
      <div style={{ textAlign: 'center' }}>
        <h1 style={{ backgroundColor: 'orangered', color: 'black', display: 'inline-block' }}>Series</h1>
      </div>
      <Slider {...settings}>
        {series.map((series) => (
          <MovieCards key={series.id} {...series} />
        ))}
      </Slider>
    </>
  )
}

export default App
