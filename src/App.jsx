import {Routes , Route } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Vans from './Pages/Vans/Vans'
import VanDetails from './Pages/Vans/VanDetails'
import Layout from './components/Layout'
import Dashboard from './Pages/Host/Dashboard'
import Reviews from './Pages/Host/Reviews'
import Income from './Pages/Host/Income'
import HostLayout from './components/HostLayout'
import './main.css'
import './server'


function App() {
    return (
        <>
            <Routes>
                <Route element={<Layout />}>
                    <Route path='/' element={<Home />} />
                    <Route path='about' element={<About />} />
                    <Route path='vans' element={<Vans />} />
                    <Route path='vans/:id' element={<VanDetails />} />

                    <Route path='host' element={<HostLayout />} >
                        <Route index element={<Dashboard />} />
                        <Route path='reviews' element={<Reviews />} />
                        <Route path='income' element={<Income />} />
                    </Route>
                    {/* <Route path='' element={} /> */}

                </Route>
            </Routes>
        </>
    )
}
    
export default App