import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Trending from '../pages/Trending'
import Historial from '../pages/Historial'
import MiLista from '../pages/MiLista'
import Peliculas from '../pages/Peliculas'
import Series from '../pages/Series'
import Info from '../pages/Info'

const RoutesIndex = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/trending' element={<Trending />} />
      <Route path='/info/:id' element={<Info />} />
      <Route path='/historial' element={<Historial />} />
      <Route path='/milista' element={<MiLista />} />
      <Route path='/peliculas' element={<Peliculas />} />
      <Route path='/series' element={<Series />} />
    </Routes>

  )
}

export default RoutesIndex
