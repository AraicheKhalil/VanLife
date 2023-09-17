import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import '../style.css'

function Vans() {

    const [vans,setVans] = useState([])

    useEffect(() => {
        fetch('./api/vans').then(
            data => data.json()
        ).then(data => setVans(data.vans))
    },[])

    console.log(vans)

  return (
    <div className="Vans bg-orange-100">
      <section className="py-6">
        <h1 className="mx-4 mb-4 text-gray-900 text-3xl not-italic font-bold leading-8">Explore our van options</h1>
        <ul className="flex mx-4 mb-6">
            <li>
                <button className="rounded  bg-orange-200 py-1 px-2  mr-4 text-gray-700 text-center text-base not-italic font-medium leading-6">Simple</button>
            </li>
            <li>
                <button className="rounded  bg-orange-200 py-1 px-2  mr-4 text-gray-700 text-center text-base not-italic font-medium leading-6">Luxury</button>
            </li>
            <li>
                <button className="rounded  bg-orange-200 py-1 px-2  mr-4 text-gray-700 text-center text-base not-italic font-medium leading-6">Rugged</button>
            </li>
            <li >
                <button className="underline  py-1 px-2  mr-4 text-gray-700 text-center text-base not-italic font-medium leading-6">Clear filters</button>
            </li>
        </ul>
        <div className="flex flex-wrap justify-center">
            {vans.map(van => {
                return (
                    <div key={van.id} className="m-3">
                       <Link to={`${van.id}`}>
                            <div className="w-[220px]">
                                <img src={van.imageUrl} className="rounded-md"/>
                            </div>
                            <div className="flex justify-between mt-2">
                                <h3 className="text-gray-900 text-xl not-italic font-semibold leading-8">{van.name}</h3>
                                <div className="text-gray-900 text-right text-xl not-italic font-semibold leading-8">${van.price}<p className="text-gray-900 text-right text-sm not-italic font-medium  leading-none">/day</p></div>
                            </div>
                            <button className={`${van.type} rounded  bg-orange-200 py-1 px-2 mt-[-5px] mr-4 text-gray-700 text-center text-base not-italic font-medium leading-6`}>{van.type}</button>
                       </Link>
                    </div>
                )
            })}
        </div>
      </section>
    </div>
  )
}

export default Vans
