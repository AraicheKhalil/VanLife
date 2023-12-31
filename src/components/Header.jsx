import { NavLink } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
const element = <FontAwesomeIcon icon={faUser} />
import '../style.css'

function Header() {

  const styles = {
    color : "red",
  }

  return (
    <div className="header flex justify-between items-center bg-orange-100 py-5 px-7 ">
      <div>
        <div className="bg-orange-100 text-black text-2xl not-italic font-black leading-10 cursor-pointer"><NavLink to="/">VanLife</NavLink></div>
      </div>
      <nav className="">
        <ul className="flex ">
            <li className="my-2 ml-5">
                <NavLink 
                    to='host'
                    style={({isActive}) => isActive ? styles : null} 
                    className="text-gray-700 text-right text-base not-italic font-semibold leading-5">Host
                </NavLink>
            </li>
            <li className="my-2 ml-5">
                <NavLink 
                    to='about' 
                    style={({isActive}) => isActive ? styles : null}
                    className="text-gray-700 text-right text-base not-italic font-semibold leading-5">About
                </NavLink>
            </li>
            <li className="my-2 ml-5">
                <NavLink 
                    to='vans' 
                    style={({isActive}) => isActive ? styles : null}
                    className="text-gray-700 text-right text-base not-italic font-semibold leading-5">Vans
                </NavLink>
            </li>
            <li className="my-2 ml-5">
                <NavLink 
                    to='login' 
                    // style={({isActive}) => isActive ? styles : null}
                    className="text-gray-700 text-right text-base not-italic font-semibold leading-5">{element}
                </NavLink>
            </li>
        </ul>
      </nav>
    </div>
  )
}

export default Header
