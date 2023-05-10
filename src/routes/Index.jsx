import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Historial from '../pages/Historial'
import MiLista from '../pages/MiLista'
import Peliculas from '../pages/Peliculas'
import Series from '../pages/Series'
import InfoMovies from '../pages/InfoMovies'
import InfoSeries from '../pages/InfoSeries'

const RoutesIndex = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='infoMovies/:id' element={<InfoMovies />} />
      <Route path='infoSeries/:id' element={<InfoSeries />} />
      <Route path='/historial' element={<Historial />} />
      <Route path='/milista' element={<MiLista />} />
      <Route path='/peliculas' element={<Peliculas />} />
      <Route path='/series' element={<Series />} />
    </Routes>

  )
}

export default RoutesIndex
