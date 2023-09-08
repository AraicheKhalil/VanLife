
import {Routes , Route , Link} from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import './main.css'


function App() {
    return (
        <>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
            </Routes>
        </>
    )
}
    
export default App
    
    // <div classNameName='containet'>
    //   <Link to='' >
    //     discover
    //   </Link>
    //   <Link to='/home'>
    //     Home
    //   </Link>
    //   <Link to='/about'>
    //     About
    //   </Link>
    //   <Routes>
    //     <Route 
    //         path='/' 
    //         element={<div>Discover React Router</div>} 
    //     />
    //     <Route 
    //         path='/home' 
    //         element={<Home />} 
    //     />
    //     <Route 
    //         path='/about' 
    //         element={<About />} 
    //     />
    //   </Routes>
    // </div>