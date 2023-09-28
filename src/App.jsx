import {Route ,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements } from 'react-router-dom'
  
// main Pages
import Home  from './Pages/Home'
import About from './Pages/About'
import NotFound from './Pages/NotFound'
import Login , { Action as LoginAction, Loader as LoginLoader }  from './Pages/Login'
import Error from './Pages/Error'

// component (Layout Outlet)
import Layout from './components/Layout'
import HostLayout from './components/HostLayout'

// Vans
import Vans , {Loader as VansLoader} from './Pages/Vans'
import DetailsVans , {Loader as DetailsVanLoader} from './Pages/Vans/DetailsVans'

// Host
import Dashboard from './Pages/Host/Dashboard'
import Income from './Pages/Host/Income'
import Reviews from './Pages/Host/Reviews'
import HostVans, { Loader as hostVansLoader } from './Pages/Host/HostVans'
import HostVansDetails , { Loader as hostVansDetailsLoader} from './Pages/Host/HostVansDetails'
import DetailsVanId from './Pages/Host/DetailsVanId'
import PricingVanId from './Pages/Host/PricingVanId'
import PhotosVanId from './Pages/Host/PhotosVanId'

// Stylesheet imports
import './style.css'

// data imports
import './server' 

import { requireAuth } from './utils'
import Authentication from './components/Authentication'
// import { action as LoginAction, loader as LoginLoader } from './Pages/Login'

function App() {

  const router = createBrowserRouter(createRoutesFromElements(

    <Route path='/' element={<Layout />} errorElement={<Error />}>

      <Route index element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='login' element={<Login />} loader={LoginLoader} action={LoginAction} />
      <Route path='vans' element={<Vans />} loader={VansLoader} />
      <Route path='vans/:id' element={<DetailsVans />} loader={DetailsVanLoader}/>

      <Route element={<Authentication />} >
        <Route path='host' element={<HostLayout />}  loader={async () => await requireAuth()}>
          <Route index element={<Dashboard /> } loader={async () => await requireAuth()}/>
          <Route path='income' element={<Income />}  loader={async () => await requireAuth()}/>
          <Route path='reviews' element={<Reviews />} loader={async () => await requireAuth()} />
          <Route path='vans' element={<HostVans />}  loader={hostVansLoader}/>
          <Route path='vans/:id' element={<HostVansDetails />}  loader={hostVansDetailsLoader}>
            <Route index element={<DetailsVanId />}   loader={async () => await requireAuth()}/>
            <Route path='pricing' element={<PricingVanId />}  loader={async () => await requireAuth()}/>
            <Route path='photos' element={<PhotosVanId />} loader={async () => await requireAuth()} />
          </Route>
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



// {/* <Route path='vans' element={<HostVans />} loader={HostLoader} loader={async () => null}/> */}
// {/* <Route path='vans/:id' element={<HostVansDetails />} loader={nestedLoader}  loader={async () => null}> */}