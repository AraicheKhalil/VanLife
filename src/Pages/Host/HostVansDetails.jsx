import { useEffect, useState } from "react"
import { NavLink, Outlet, useParams } from "react-router-dom"
import { Link } from "react-router-dom"
// import './style.css'


function HostVansDetails() {

  const [currentVan , setCurrentVan] = useState(null)

  const params = useParams()
  console.log(params)

  useEffect(() => {
    fetch(`/api/host/vans/${params.id}`).then(
        data => data.json()
    ).then(
        data => setCurrentVan(data.vans)
    )
},[params])

const styles = {
  fontWeight : 600,
  textDecoration : "underline",
  color : "black"
}

console.log(currentVan)

  return (
    <>
      <div className="px-7 bg-orange-100 pb-10">
        <div className="mb-7">
          <Link className="underline text-gray-900 text-base not-italic font-medium leading-5" relative="path" to='..'>Back to all vans</Link>
        </div>
        <div className="un-van bg-white rounded-md p-3">
          {currentVan ?
          <div className="main">
            <div className="flex items-center gap-5">
              <img src={currentVan.imageUrl} className="rounded-md w-[35%]"/>
              <div className="details ">
                <button className={`${currentVan.type} text-orange-200 text-center text-sm not-italic font-semibold leading-6 px-3 py-1 mb-3 rounded-md`}>{currentVan.type}</button>
                <h3 className="text-gray-900 text-2xl not-italic font-bold leading-7">{currentVan.name}</h3>
                <div className="text-gray-900 text-lg not-italic font-bold leading-9">${currentVan.price}<span className="text-base font-medium leading-9">/day</span></div>
              </div>
            </div>
            <div className="py-5">
              <nav className="">
                <ul className="flex">
                  <li className="mr-4 p-2">
                    <NavLink 
                      className="text-gray-700 text-lg not-italic font-medium leading-5" 
                      style={({isActive}) => isActive ? styles : null}
                      end
                      to='.'>Details</NavLink></li>
                  <li className="mr-4 p-2">
                    <NavLink 
                      className="text-gray-700 text-lg not-italic font-medium leading-5" 
                      style={({isActive}) => isActive ? styles : null}
                      to='pricing'>Pricing</NavLink></li>
                  <li className="mr-4 p-2">
                    <NavLink 
                      className="text-gray-700 text-lg not-italic font-medium leading-5" 
                      style={({isActive}) => isActive ? styles : null}
                      to='photos'>Photos</NavLink></li>
                </ul>
              </nav>
              <Outlet context={{currentVan}} />
            </div>
          </div>
          : <h1 className="text-2xl text-center my-12 font-semibold">Loading...</h1>
          }
        </div>
      </div>
    </>
  )
}

export default HostVansDetails
