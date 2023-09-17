import { NavLink, Outlet } from "react-router-dom"


function HostLayout() {
    const styles = {
        textDecoration : "underline",
        fontWeight: 700,
    }
  return (
    <>
        <nav className="bg-orange-100 px-7">
            <ul className="flex py-6 ">
                <li className="mr-4">
                    <NavLink 
                        to='.' 
                        end
                        style={({isActive}) => isActive ? styles : null}
                        className='text-gray-700 text-lg not-italic font-medium leading-5'>Dashboard</NavLink></li>
                <li className="mr-4">
                    <NavLink 
                        to='vans' 
                        style={({isActive}) => isActive ? styles : null}
                        className='text-gray-700 text-lg not-italic font-medium leading-5'>Vans</NavLink></li>
                <li className="mr-4">
                    <NavLink 
                        to='income' 
                        style={({isActive}) => isActive ? styles : null}
                        className='text-gray-700 text-lg not-italic font-medium leading-5'>Income</NavLink></li>
                <li className="mr-4">
                    <NavLink 
                        to='reviews' 
                        style={({isActive}) => isActive ? styles : null}
                        className='text-gray-700 text-lg not-italic font-medium leading-5'>Reviews</NavLink></li>
            </ul>
        </nav>
        <Outlet />
    </>
  )
}

export default HostLayout
