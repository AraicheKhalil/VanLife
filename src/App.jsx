import {Route , Routes } from 'react-router-dom'
// Layout for Outlet
import Layout from './components/Layout'
import HostLayout from './components/HostLayout'
import Home from './Pages/Home'
import About from './Pages/About'
// Vans
import Vans from './Pages/Vans'
import DetailsVans from './Pages/Vans/DetailsVans'
// Host
import Dashboard from './Pages/Host/Dashboard'
import Income from './Pages/Host/Income'
import Reviews from './Pages/Host/Reviews'
import HostVans from './Pages/Host/HostVans'
import HostVansDetails from './Pages/Host/HostVansDetails'
import DetailsVanId from './Pages/Host/DetailsVanId'
import PricingVanId from './Pages/Host/PricingVanId'
import PhotosVanId from './Pages/Host/PhotosVanId'
import './style.css'
import './server' 

function App() {

  return (
    <div className = "App bg-white shadow w-[500px] mx-auto mt-24 mb-12 rounded-lg">
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='vans' element={<Vans />} />
          <Route path='vans/:id' element={<DetailsVans />} />
          <Route path='host' element={<HostLayout />} >
            <Route index element={<Dashboard />} />
            <Route path='income' element={<Income />} />
            <Route path='reviews' element={<Reviews />} />
            <Route path='vans' element={<HostVans />} />
            <Route path='vans/:id' element={<HostVansDetails />} >
              <Route index element={<DetailsVanId />} />
              <Route path='pricing' element={<PricingVanId />} />
              <Route path='photos' element={<PhotosVanId />} />
            </Route>
          </Route>
        </Route>
      </Routes>
    </div>
  )
}

export default App
