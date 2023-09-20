import {Route , RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
// Layout for Outlet
import Layout from './components/Layout'
import HostLayout from './components/HostLayout'
import Home  from './Pages/Home'
import About from './Pages/About'
import NotFound from './Pages/NotFound'
import Error from './components/Error'
// Vans
import Vans , {Loader as VansLoader} from './Pages/Vans'
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

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<Layout />} errorElement={<Error />}>
      <Route index element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='vans' element={<Vans />} loader={VansLoader} />
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
      <Route path='*' element={<NotFound />} />
    </Route>
  ))

  return (
    <div className = "App bg-white shadow w-[500px] mx-auto mt-14 mb-12 rounded-lg">
      <RouterProvider router={router}/>
    </div>
  )
}

export default App
