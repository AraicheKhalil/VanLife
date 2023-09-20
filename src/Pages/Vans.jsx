import { Link, useSearchParams , useLoaderData } from "react-router-dom"
import {getVans} from '../api' ; 
import '../style.css'

export function Loader(){
    return getVans()
}

function Vans() {
    const [searchParams,setSearchParams] = useSearchParams()
    const typeFilter = searchParams.get('type')
    const vans = useLoaderData()


    const vansType = typeFilter ? vans.filter(van => van.type == typeFilter ) : vans

    function handlefiltering(key,value){
        setSearchParams(prevSP => {
            if(value == null){
                prevSP.delete(key)
            }else{
                prevSP.set(key,value)
            }
            return prevSP
        })
    }

  return (
    <div className="Vans bg-orange-100">
      <section className="py-6">
        <h1 className="mx-4 mb-4 text-gray-900 text-3xl not-italic font-bold leading-8">Explore our van options</h1>
        <ul className="flex mx-4 mb-6">
            <li>
                <button  onClick={() => handlefiltering("type" , "simple")}
                className={` ${typeFilter == "simple" ? "bg-[#E17654] text-orange-200" : 'bg-orange-200 text-gray-700'}  rounded hover:  py-1 px-2  mr-4  text-center text-base not-italic font-medium leading-6`}>Simple</button>
            </li>
            <li>
                <button onClick={() => handlefiltering("type" , "luxury")}
                className={`${typeFilter == "luxury" ? "bg-[#161616] text-orange-200" : "bg-orange-200  text-gray-700"} rounded   py-1 px-2  mr-4  text-center text-base not-italic font-medium leading-6 `}>Luxury</button>
            </li>
            <li>
                <button  onClick={() => handlefiltering("type" , "rugged")}
                className={`${typeFilter == "rugged" ? "bg-[#115E59] text-orange-200 " : "bg-orange-200 text-gray-700" } rounded hover:  py-1 px-2  mr-4  text-center text-base not-italic font-medium leading-6`}>Rugged</button>
            </li>
            {typeFilter &&
            <li >
            <button onClick={() => handlefiltering("type" , null)} className={`underline  py-1 px-2  mr-4  text-center text-base not-italic font-medium leading-6`}>Clear filters</button>
            </li> }
        </ul>
        <div className="flex flex-wrap justify-center">
            {vansType.map(van => {
                return (
                    <div key={van.id} className="m-3">
                       <Link 
                        to={`${van.id}`}
                        state={{search : searchParams.toString()}} 
                        >
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
